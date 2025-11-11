---
author:
  - "[[@official_php]]"
created: 2025-10-31
source: https://www.php.net/manual/en/function.set-error-handler.php
tags:
  - docs/php
---
**PHP Function: set_error_handler**

### Description

The `set_error_handler` function is used to set a custom error handler for a PHP script. This allows you to define a custom function to handle errors that occur during runtime.

### Parameters

#### callback

*   The custom error handler function. If `null` is passed, the default error handler is restored.
*   The handler function must have the following signature:

    ```php
	handler(
	    int $errno,
	    string $errstr,
	    string $errfile = ?,
	    int $errline = ?,
	    array $errcontext = ?
	): bool
```

   *   `$errno`: The level of the error raised, as an integer.
   *   `$errstr`: The error message, as a string.
   *   `$errfile`: The filename where the error was raised, as a string (optional).
   *   `$errline`: The line number where the error was raised, as an integer (optional).
   *   `$errcontext`: An array of variables that existed in the scope where the error was triggered (deprecated in PHP 7.2.0 and removed in PHP 8.0.0).

#### error_levels

*   A bitmask that specifies which error types should trigger the custom error handler. This can be used to mask the triggering of the callback function, similar to the `error_reporting` ini setting.

### Return Values

*   The previously defined error handler (if any) as a callable.
*   If the built-in error handler is used, `null` is returned.

### Notes

*   The custom error handler is not called for certain error types, such as `E_ERROR`, `E_PARSE`, `E_CORE_ERROR`, `E_CORE_WARNING`, `E_COMPILE_ERROR`, and `E_COMPILE_WARNING`, regardless of where they were raised.
*   If errors occur before the script is executed (e.g., on file uploads), the custom error handler cannot be called since it is not registered at that time.
*   If the custom error handler returns `false`, the normal error handler continues.