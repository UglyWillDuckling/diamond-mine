#howto/curl

about:: [[curl]]
___

 When using the  curl  command, you can ignore the progress meter by using the  -
  s
  or  `--silent`  option.

  Here are a few ways to do it:

  Method 1: Using  -s

    curl -s https://example.com
    curl --silent https://example.com

  This will suppress the progress meter and only display the output of the
  request.