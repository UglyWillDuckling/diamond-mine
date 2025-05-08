
```
Running the import
{"message":"url[] request starts","context":{},"channel":"malegacy","extra":{"file":"/srv/malegacy/releases/malegacy-0b0fdd61/share/global.inc","line":104,"class":null,"callType":null,"function":"require","uid":"de5deea"},"severity":"INFO","time":"2025-05-06T11:00:02.605+02:00"}
PHP Deprecated:  This installation of the SDK is using PHP version 7.4.20, which will be deprecated on January 13th, 2025.
Please upgrade your PHP version to a minimum of 8.1.x to continue receiving updates for the AWS SDK for PHP.
To disable this warning, set suppress_php_deprecation_warning to true on the client constructor or set the environment variable AWS_SUPPRESS_PHP_DEPRECATION_WARNING to true.
More information can be found at: https://aws.amazon.com/blogs/developer/announcing-the-end-of-support-for-php-runtimes-8-0-x-and-below-in-the-aws-sdk-for-php/
 in /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/ClientResolver.php on line 1409
PHP Deprecated:  This installation of the SDK is using PHP version 7.4.20, which will be deprecated on January 13th, 2025.
Please upgrade your PHP version to a minimum of 8.1.x to continue receiving updates for the AWS SDK for PHP.
To disable this warning, set suppress_php_deprecation_warning to true on the client constructor or set the environment variable AWS_SUPPRESS_PHP_DEPRECATION_WARNING to true.
More information can be found at: https://aws.amazon.com/blogs/developer/announcing-the-end-of-support-for-php-runtimes-8-0-x-and-below-in-the-aws-sdk-for-php/
 in /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/ClientResolver.php on line 1409
{"message":"Unhandled Aws\\Athena\\Exception\\AthenaException, \"Error executing \"GetQueryResults\" on \"https://athena.eu-west-1.amazonaws.com\"; AWS HTTP error: Client error: `POST https://athena.eu-west-1.amazonaws.com` resulted in a `400 Bad Request` response:\n{\"__type\":\"InvalidRequestException\",\"AthenaErrorCode\":\"INVALID_QUERY_EXECUTION_STATE\",\"ErrorCode\":\"INVALID_QUERY_EXECUTI (truncated...)\n InvalidRequestException (client): Query has not yet finished. Current state: RUNNING - {\"__type\":\"InvalidRequestException\",\"AthenaErrorCode\":\"INVALID_QUERY_EXECUTION_STATE\",\"ErrorCode\":\"INVALID_QUERY_EXECUTION_STATE\",\"Message\":\"Query has not yet finished. Current state: RUNNING\"}\" in /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/WrappedHttpHandler.php:196","context":{},"channel":"malegacy","extra":{"file":"/srv/malegacy/releases/malegacy-0b0fdd61/share/global.inc","line":72,"class":null,"callType":null,"function":"global_exception_handler","uid":"de5deea"},"severity":"ERROR","time":"2025-05-06T11:00:06.354+02:00"}
{"message":"Error executing \"GetQueryResults\" on \"https://athena.eu-west-1.amazonaws.com\"; AWS HTTP error: Client error: `POST https://athena.eu-west-1.amazonaws.com` resulted in a `400 Bad Request` response:\n{\"__type\":\"InvalidRequestException\",\"AthenaErrorCode\":\"INVALID_QUERY_EXECUTION_STATE\",\"ErrorCode\":\"INVALID_QUERY_EXECUTI (truncated...)\n InvalidRequestException (client): Query has not yet finished. Current state: RUNNING - {\"__type\":\"InvalidRequestException\",\"AthenaErrorCode\":\"INVALID_QUERY_EXECUTION_STATE\",\"ErrorCode\":\"INVALID_QUERY_EXECUTION_STATE\",\"Message\":\"Query has not yet finished. Current state: RUNNING\"}","context":{"serviceContext":{"service":"backyard"}},"channel":"malegacy","extra":{"file":"/srv/malegacy/releases/malegacy-0b0fdd61/share/global.inc","line":75,"class":null,"callType":null,"function":"global_exception_handler","uid":"3c0c467"},"severity":"ERROR","time":"2025-05-06T11:00:06.355+02:00"}
exception 'Aws\Athena\Exception\AthenaException' with message 'Error executing "GetQueryResults" on "https://athena.eu-west-1.amazonaws.com"; AWS HTTP error: Client error: `POST https://athena.eu-west-1.amazonaws.com` resulted in a `400 Bad Request` response:
{"__type":"InvalidRequestException","AthenaErrorCode":"INVALID_QUERY_EXECUTION_STATE","ErrorCode":"INVALID_QUERY_EXECUTI (truncated...)
 InvalidRequestException (client): Query has not yet finished. Current state: RUNNING - {"__type":"InvalidRequestException","AthenaErrorCode":"INVALID_QUERY_EXECUTION_STATE","ErrorCode":"INVALID_QUERY_EXECUTION_STATE","Message":"Query has not yet finished. Current state: RUNNING"}'
GuzzleHttp\Exception\ClientException: Client error: `POST https://athena.eu-west-1.amazonaws.com` resulted in a `400 Bad Request` response:
{"__type":"InvalidRequestException","AthenaErrorCode":"INVALID_QUERY_EXECUTION_STATE","ErrorCode":"INVALID_QUERY_EXECUTI (truncated...)
 in /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/guzzle/src/Exception/RequestException.php:111
Stack trace:
#0 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/guzzle/src/Middleware.php(72): GuzzleHttp\Exception\RequestException::create()
#1 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(209): GuzzleHttp\Middleware::GuzzleHttp\{closure}()
#2 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(158): GuzzleHttp\Promise\Promise::callHandler()
#3 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/TaskQueue.php(52): GuzzleHttp\Promise\Promise::GuzzleHttp\Promise\{closure}()
#4 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/guzzle/src/Handler/CurlMultiHandler.php(167): GuzzleHttp\Promise\TaskQueue->run()
#5 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/guzzle/src/Handler/CurlMultiHandler.php(206): GuzzleHttp\Handler\CurlMultiHandler->tick()
#6 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(251): GuzzleHttp\Handler\CurlMultiHandler->execute()
#7 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(227): GuzzleHttp\Promise\Promise->invokeWaitFn()
#8 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(272): GuzzleHttp\Promise\Promise->waitIfPending()
#9 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(229): GuzzleHttp\Promise\Promise->invokeWaitList()
#10 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(272): GuzzleHttp\Promise\Promise->waitIfPending()
#11 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(229): GuzzleHttp\Promise\Promise->invokeWaitList()
#12 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(69): GuzzleHttp\Promise\Promise->waitIfPending()
#13 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/AwsClientTrait.php(58): GuzzleHttp\Promise\Promise->wait()
#14 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/AwsClientTrait.php(86): Aws\AwsClient->execute()
#15 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/AWS/Athena.php(31): Aws\AwsClient->__call()
#16 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/AWS/Athena.php(48): Share\Backyard\AWS\Athena->result()
#17 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/Listing/QSL/AWS/SourceAWS.php(44): Share\Backyard\AWS\Athena->waitForQueryResult()
#18 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/Listing/QSL/AWS/SourceAWS.php(30): Share\Backyard\Listing\QSL\AWS\SourceAWS->queryResult()
#19 /srv/malegacy/releases/malegacy-0b0fdd61/framework/helpers.functions.inc(248): Share\Backyard\Listing\QSL\AWS\SourceAWS->Share\Backyard\Listing\QSL\AWS\{closure}()
#20 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/DefaultQSLImport.php(19): on_each()
#21 /srv/malegacy/releases/malegacy-0b0fdd61/backyard/listing/qsl_listing_import.php(56): Share\Backyard\DefaultQSLImport->__invoke()
#22 {main}
Next Aws\Athena\Exception\AthenaException: Error executing "GetQueryResults" on "https://athena.eu-west-1.amazonaws.com"; AWS HTTP error: Client error: `POST https://athena.eu-west-1.amazonaws.com` resulted in a `400 Bad Request` response:
{"__type":"InvalidRequestException","AthenaErrorCode":"INVALID_QUERY_EXECUTION_STATE","ErrorCode":"INVALID_QUERY_EXECUTI (truncated...)
 InvalidRequestException (client): Query has not yet finished. Current state: RUNNING - {"__type":"InvalidRequestException","AthenaErrorCode":"INVALID_QUERY_EXECUTION_STATE","ErrorCode":"INVALID_QUERY_EXECUTION_STATE","Message":"Query has not yet finished. Current state: RUNNING"} in /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/WrappedHttpHandler.php:196

Stack trace:
#0 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/WrappedHttpHandler.php(98): Aws\WrappedHttpHandler->parseError()
#1 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(209): Aws\WrappedHttpHandler->Aws\{closure}()
#2 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(174): GuzzleHttp\Promise\Promise::callHandler()
#3 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/RejectedPromise.php(49): GuzzleHttp\Promise\Promise::GuzzleHttp\Promise\{closure}()
#4 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/TaskQueue.php(52): GuzzleHttp\Promise\RejectedPromise::GuzzleHttp\Promise\{closure}()
#5 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/guzzle/src/Handler/CurlMultiHandler.php(167): GuzzleHttp\Promise\TaskQueue->run()
#6 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/guzzle/src/Handler/CurlMultiHandler.php(206): GuzzleHttp\Handler\CurlMultiHandler->tick()
#7 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(251): GuzzleHttp\Handler\CurlMultiHandler->execute()
#8 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(227): GuzzleHttp\Promise\Promise->invokeWaitFn()
#9 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(272): GuzzleHttp\Promise\Promise->waitIfPending()
#10 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(229): GuzzleHttp\Promise\Promise->invokeWaitList()
#11 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(272): GuzzleHttp\Promise\Promise->waitIfPending()
#12 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(229): GuzzleHttp\Promise\Promise->invokeWaitList()
#13 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/guzzlehttp/promises/src/Promise.php(69): GuzzleHttp\Promise\Promise->waitIfPending()
#14 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/AwsClientTrait.php(58): GuzzleHttp\Promise\Promise->wait()
#15 /srv/malegacy/releases/malegacy-0b0fdd61/vendor/aws/aws-sdk-php/src/AwsClientTrait.php(86): Aws\AwsClient->execute()
#16 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/AWS/Athena.php(31): Aws\AwsClient->__call()
#17 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/AWS/Athena.php(48): Share\Backyard\AWS\Athena->result()
#18 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/Listing/QSL/AWS/SourceAWS.php(44): Share\Backyard\AWS\Athena->waitForQueryResult()
#19 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/Listing/QSL/AWS/SourceAWS.php(30): Share\Backyard\Listing\QSL\AWS\SourceAWS->queryResult()
#20 /srv/malegacy/releases/malegacy-0b0fdd61/framework/helpers.functions.inc(248): Share\Backyard\Listing\QSL\AWS\SourceAWS->Share\Backyard\Listing\QSL\AWS\{closure}()
#21 /srv/malegacy/releases/malegacy-0b0fdd61/share/Backyard/DefaultQSLImport.php(19): on_each()
#22 /srv/malegacy/releases/malegacy-0b0fdd61/backyard/listing/qsl_listing_import.php(56): Share\Backyard\DefaultQSLImport->__invoke()
#23 {main}
{"message":"url[] Generation[3.7492] peakmem[26.32 MB] realpeakmem[30 MB]","context":{},"channel":"malegacy","extra":{"file":"/srv/malegacy/releases/malegacy-0b0fdd61/share/global.inc","line":112,"class":null,"callType":null,"function":"page_timing","uid":"de5deea"},"severity":"INFO","time":"2025-05-06T11:00:06.355+02:00"}
{"message":"url[] request ends","context":{},"channel":"malegacy","extra":{"file":"/srv/malegacy/releases/malegacy-0b0fdd61/share/global.inc","line":113,"class":null,"callType":null,"function":"page_timing","uid":"de5deea"},"severity":"INFO","time":"2025-05-06T11:00:06.355+02:00"}
```
