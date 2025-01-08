---
title: Issue using an IAM role with PHP SDK
source: https://stackoverflow.com/questions/31919316/issue-using-an-iam-role-with-php-sdk
author:
  - "[[Stack Overflow]]"
published: 2015-08-10
created: 2025-01-07
description: "I am using this script to populate DynamoDB: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LoadDataPHP.htmlI'm getting this error using the AWS SDK:  PHP Fatal error:  Uncaught"
tags:
  - clippings
related:
  - "[[IAM]]"
  - "[[AWS]]"
  - "[[Athena connection]]"
---
I just wanted to expand a bit on this for anyone else that may end up in this situation.

## If you use an IAM role on a EC2 instance as your method of credentials

---

Then don't use the profile line when creating a client. If you do specify profile in your client it tells the SDK to override any form of credentials you set in the client with a profile from the credentials ini file.

Mentioned (but buried a bit) in the PHP SDK V3 documentation here: [https://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/configuration.html#profile](https://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/configuration.html#profile)

## Example Code

```php
$client = new SqsClient([
    'profile' => 'default', // <--- Don't use this line if you're using IAM Roles for credentials
    'region' => 'us-west-2',
    'version' => '2012-11-05'
]);
```

## Misleading Documentation

---

The PHP SDK documentation recommends using IAM roles above all other credentials for EC2 instances. That's fine and makes total sense. The misleading part to new comers is for example this scenario;

1. Say someone new to the SDK reads the Basic SDK Usage in the getting started section.
2. Sets up a S3 client for testing as per the docs.
3. Once they have working S3 code, the developer decides to skip to the code examples section to setup a client for a different AWS service.

The problem here is that all of the code examples (with the exception of the S3 examples) contain the profile setting that breaks the IAM role credential method.

The code examples should at least have a reference to what profile does.

> This line in the code:
```php
 'profile' => 'default',
```

> is what was causing my issue. If you are using an IAM role you do not require the profile line, and removing it will fix the "Cannot read credentials" error.

