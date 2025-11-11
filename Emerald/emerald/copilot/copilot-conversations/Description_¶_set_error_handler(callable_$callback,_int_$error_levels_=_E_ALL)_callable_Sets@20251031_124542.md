---
epoch: 1761911142439
modelKey: llama-3.1-8b-instant|groq
tags:
  - copilot-conversation
topic: PHP Function set_error_handler
---

**user**: Description ¶
set_error_handler(?callable $callback, int $error_levels = E_ALL): ?callable
Sets a user function (callback) to handle errors in a script.

This function can be used to define custom error handlers during runtime, for example in applications which need to do file/data cleanup when a critical error happens, or when triggering an error in response to certain conditions (using trigger_error()).

It is important to remember that the standard PHP error handler is completely bypassed for the error types specified by error_levels unless the callback function returns false. error_reporting() settings will have no effect and the error handler will be called regardless - however, it's still possible to read the current value of error_reporting and act appropriately.

Also note that it is the handler's responsibility to stop the script's execution if necessary by calling exit(). If the error-handler function returns, script execution will continue with the next statement after the one that caused an error.

The following error types cannot be handled with a user defined function: E_ERROR, E_PARSE, E_CORE_ERROR, E_CORE_WARNING, E_COMPILE_ERROR, E_COMPILE_WARNING independent of where they were raised, and most of E_STRICT raised in the file where set_error_handler() is called.

If errors occur before the script is executed (e.g. on file uploads) the custom error handler cannot be called since it is not registered at that time.

Parameters ¶
callback
If null is passed, the handler is reset to its default state. Otherwise, the handler is a callback with the following signature:

handler(
    int $errno,
    string $errstr,
    string $errfile = ?,
    int $errline = ?,
    array $errcontext = ?
): bool
errno
The first parameter, errno, will be passed the level of the error raised, as an integer.
errstr
The second parameter, errstr, will be passed the error message, as a string.
errfile
If the callback accepts a third parameter, errfile, it will be passed the filename that the error was raised in, as a string.
errline
If the callback accepts a fourth parameter, errline, it will be passed the line number where the error was raised, as an integer.
errcontext
If the callback accepts a fifth parameter, errcontext, it will be passed an array that points to the active symbol table at the point the error occurred. In other words, errcontext will contain an array of every variable that existed in the scope the error was triggered in. User error handlers must not modify the error context.
Warning
This parameter has been DEPRECATED as of PHP 7.2.0, and REMOVED as of PHP 8.0.0. If the function defines this parameter without a default, an error of "too few arguments" will be raised when it is called.

If the function returns false then the normal error handler continues.

error_levels
Can be used to mask the triggering of the callback function just like the error_reporting ini setting controls which errors are shown. Without this mask set the callback will be called for every error regardless to the setting of the error_reporting setting.

Return Values ¶
Returns the previously defined error handler (if any) as a callable. If the built-in error handler is used null is returned.

format the text above.
[Timestamp: 2025/10/31 12:45:42]

**ai**: **PHP Function: set_error_handler**

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
[Timestamp: 2025/10/31 12:45:43]