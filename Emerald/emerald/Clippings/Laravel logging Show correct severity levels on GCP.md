---
author:
created: 2025-07-28
published: 2023-02-05
source: "https://jonassiewertsen.com/blog/laravel-logging-show-correct-severity-levels-on-the-google-cloud-platform"
tags:
---
Let's get right to the point: If you're running a containerized Laravel application on the Google Cloud platform, you can use `stderr` as your log channel. [See on GitHub](https://github.com/laravel/laravel/blob/9.x/config/logging.php#L92-L100).

That does work, but every log entry will be shown with the same severity level. Depending on your setup, all log entries will either be shown as `default` or `error`. All the information is there, but you can't filter for severity levels, which is not what you want and makes it hard to spot important error messages or does make it harder to monitor them.

See the example below. Can you spot errors or critical logs?

![All Laravel logs do show the same severity level](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ghjcye7i05cbn8r20o9y.png)

## Why not the official PHP Google logging Package?

The [Official PHP Package from Google](https://cloud.google.com/logging/docs/setup/php) does work and will ensure severity levels are set correctly.

That package does send all logs via HTTP, which is a little less unstable than logging via `stderr` on Unix systems.

The package can also send your logs via gRPC, but to enable gRPC support, you need to install the gRPC extension through PECL.

Don't get me wrong: it's a great package, but we wanted to keep dependencies as low as possible.

## Why are all logs shown with the same severity level?

This topic is more complex, as there might be different reasons, depending on your setup.

In the end, Google Cloud can't interpret the severity levels correctly. To fix that, we can send plain JSON via `stderr` or `stdout` and Google Cloud Logging will parse that information.

An example payload that Google can work with

```json
{
  "severity": "ERROR",
  "message": "There was an error in the application."
}
```

You can read more about it in the [Google Docs](https://cloud.google.com/logging/docs/structured-logging).

## How to normalize all logs into JSON?

Laravel (and many other frameworks) use the [Monolog Package](https://github.com/Seldaek/monolog) for logging by default. Using their formatter does everything you need!

## Monolog is your friend

Instead of only sending the error message, we'll send the logs as JSON with some extra information so the Google Cloud Logging can parse your information correctly.

Logs before formatting.

## Enable the correct formatter from Monolog.

Monolog offers a `GoogleCloudLoggingFormatter` by default. Let's enable it in the config.

The default stderr settings inside `config/logging.php`:

```php
'stderr' => [
    'driver' => 'monolog',
    'level' => env('LOG_LEVEL', 'debug'),
    'handler' => StreamHandler::class,
    'formatter' => env('LOG_STDERR_FORMATTER'),
    'with' => [
        'stream' => 'php://stderr',
    ],
],
```

Define the Monolog formatter:

```php
'stderr' => [
    'driver' => 'monolog',
    'level' => env('LOG_LEVEL', 'debug'),
    'handler' => StreamHandler::class,
    'formatter' => \Monolog\Formatter\GoogleCloudLoggingFormatter::class,
    'with' => [
        'stream' => 'php://stderr',
    ],
],
```

That's it. You can also set it via the env variable if you prefer that.

```bash
LOG_STDERR_FORMATTER=\Monolog\Formatter\GoogleCloudLoggingFormatter::class
```

## Write your own and custom formatter.

The `GoogleCloudLoggingFormatter` has been added in the Monolog versions 2.8.0 and 3.2.0.

If your version is older than that or you need to customize it, you can write your own custom formatter.

Your custom formatter might look like this ([See here](https://github.com/Seldaek/monolog/blob/2.x/src/Monolog/Formatter/GoogleCloudLoggingFormatter.php))

```php
<?php

namespace App\Support;

use DateTimeInterface;

class GoogleCloudLoggingFormatter extends \Monolog\Formatter\JsonFormatter
{
    public function format(array $record): string
    {
        // Re-key level for GCP logging
        $record['severity'] = $record['level_name'];
        $record['timestamp'] = $record['datetime']->format(DateTimeInterface::RFC3339_EXTENDED);

        // Remove keys that are not used by GCP
        unset($record['level'], $record['level_name'], $record['datetime']);

        return parent::format($record);
    }
}
```

As a last step, you need to define that class inside `config/logging.php`.

```php
'stderr' => [
    'driver' => 'monolog',
    'level' => env('LOG_LEVEL', 'debug'),
    'handler' => StreamHandler::class,
    'formatter' => \App\Support\GoogleCloudLoggingFormatter::class,
    'with' => [
        'stream' => 'php://stderr',
    ],
],
```

## This is what correct formatted logs look like

![All Laravel logs do show the correct severity levels.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/701oedyn79sjduc5njya.png)

Isn't that beautiful? Even without further dependencies besides Monolog.