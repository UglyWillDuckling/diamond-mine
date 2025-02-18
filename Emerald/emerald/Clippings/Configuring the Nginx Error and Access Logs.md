---
author:
  - "[[Linuxize]]"
created: 2025-02-17
published: 2019-10-15
source: https://linuxize.com/post/nginx-log-files/
tags:
  - docs/nginx
  - article/nginx
  - howto/nginx/logs
---
![Configuring Nginx Logging](https://linuxize.com/post/nginx-log-files/featured_hu9d575368b140b38df1bc7de7e655a69f_37711_768x0_resize_q75_lanczos.jpg)

Nginx is an open-source, high-performance HTTP and reverse [proxy server](https://linuxize.com/post/nginx-reverse-proxy/) responsible for handling the load of some of the largest sites on the Internet. When managing [NGINX](https://nginx.org/) web servers, one of the most frequent tasks you’ll perform is checking the log files.

Knowing how to configure and read the logs is very useful when troubleshooting server or application issues as they provide detailed debugging information.

Nginx writes records of its events in two types of logs: access logs and error logs. Access logs write information about client requests, and error logs write information about the server and application issues.

This article outlines how to configure and read the Nginx access and error logs.

Whenever a client request is processed, Nginx generates a new event in the access log. Each event record contains a timestamp and includes various information about the client and the requested resource. Access logs can show you the location of the visitors, the page they visit, how much time they spend on the page, and much more.

The `log_format` directive allows you to define the format of logged messages. The `access_log` directive enables and sets the location of the log file and the used format.

The most basic syntax of the `access_log` directive is as follows:

```nginx
access_log log_file log_format;
```

Where `log_file` is the full path to the log file, and `log_format` is the format used by the log file.

The access log can be enabled either in `http`, `server`, or `location` directives block.

By default, the access log is globally enabled in the `http` directive inside the main Nginx configuration file.

/etc/nginx/nginx.conf

```nginx
http {
  ...
  access_log  /var/log/nginx/access.log;
  ...
}
```

For better readability, it is recommended to set a separate access log file for each server block. The `access_log` directive set in the `server` directive overrides the one set in the `http` (higher level) directive.

/etc/nginx/conf.d/domain.com.conf

```nginx
http {
  ...
  access_log  /var/log/nginx/access.log;
  ...

  server {
    server_name domain.com
    access_log  /var/log/nginx/domain.access.log;
    ...
  }
}
```

If no log format is specified Nginx uses the predefined **combined** format which look like this:

```nginx
log_format combined '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
```

To change the logging format either override the default setting or define a new one. For example to define a new logging format named **custom** which will extend the **combined** format with the value showing the `X-Forwarded-For` header add the following definition in the `http` or `server` directive:

```nginx
log_format  custom  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
```

To use the new format, specify its name after the log file as shown below:

```nginx
access_log  /var/log/nginx/access.log custom;
```

While the access log provides very useful information, it takes disk space and may affect the server performance. If your server is low on resources and you have a busy website, you might want to disable the access log. To do that, set the value of the `access_log` directive to `off`:

## Configuring the Error Log

Nginx writes messages about the application and general server errors in the error log file. If you are experiencing errors in your web application, the error log is the first place to start for troubleshooting issues.

The `error_log` directive enables and sets the location and the severity level of the error log. It takes the following form and can be set within an `http`, `server`, or `location` block:

```nginx
error_log log_file log_level
```

The `log_level` parameter sets the level of logging. Below are levels listed by their severity (from low to high):

- `debug` - Debugging messages.
- `info` - Informational messages.
- `notice` - Notices.
- `warn` - Warnings.
- `error` - Errors while processing a request.
- `crit` - Critical issues. Requires a prompt action.
- `alert` - Alerts. Action must be taken immediately.
- `emerg` - Emergency situation. The system is in an unusable state.

Each log level includes the higher levels. For example, if you set the log level to `warn`, Nginx will also log the `error`, `crit`, `alert`, and `emerg` messages.

When the `log_level` parameter is not specified, it defaults to `error`.

By default, the `error_log` directive is defined in the `http` directive inside the main nginx.conf file:

/etc/nginx/nginx.conf

```nginx
http {
  ...
  error_log  /var/log/nginx/error.log;
  ...
}
```

Same as with access logs, it is recommended to set a separate error log file for each server block, which overrides the setting inherited from the higher levels.

For example, to set the domain.com’ error log to `warn` you would use:

```nginx
http {
  ...
  error_log  /var/log/nginx/error.log;
  ...

  server {
    server_name domain.com
    error_log  /var/log/nginx/domain.error.log warn;
    ...
  }
}
```

Whenever you modify the configuration file, you have to [restart the Nginx service](https://linuxize.com/post/nginx-commands-you-should-know/) for the changes to take effect.

## Location of the Log Files

By default on most Linux distributions, such as [Ubuntu](https://linuxize.com/post/how-to-install-nginx-on-ubuntu-18-04/) , [CentOS](https://linuxize.com/post/how-to-install-nginx-on-centos-8/) , and [Debian](https://linuxize.com/post/how-to-install-nginx-on-debian-10/) , access and error logs are located in the `/var/log/nginx` directory.

## Reading and Understanding the Nginx Log Files

You can open and parse the log files using standard commands like [`cat`](https://linuxize.com/post/linux-cat-command/) , [`less`](https://linuxize.com/post/less-command-in-linux/) , [`grep`](https://linuxize.com/post/how-to-use-grep-command-to-search-files-in-linux/) , [`cut`](https://linuxize.com/post/linux-cut-command/) , [`awk`](https://linuxize.com/post/awk-command/) , and so on.

Here is an example record from the access log file that uses the default combine Nginx log format:

```output
192.168.33.1 - - [15/Oct/2019:19:41:46 +0000] "GET / HTTP/1.1" 200 396 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36"
```

Let’s break down what each field of the record means:

- `$remote_addr` - `192.168.33.1` - The IP address of the client making the request.
- `$remote_user` - `-` - HTTP Authenticated User. When the user name is not set, this field shows `-`.
- `[$time_local]` - `[15/Oct/2019:19:41:46 +0000]` - Local server time.
- `"$request"` - `"GET / HTTP/1.1"` - The request type, path and protocol.
- `$status` - `200` - The server response code.
- `$body_bytes_sent` - `396` - The size of server response in bytes.
- `"$http_referer"` - `"-"` - The URL of the referral.
- `"$http_user_agent"` - `Mozilla/5.0 ...` - The user agent of the client (web browser).

Use the [`tail`](https://linuxize.com/post/linux-tail-command/) command to watch the log file in real-time:

```markdown
tail -f  access.log 
```

## Conclusion

Log files provide you with useful information about server issues and how visitors interact with your website.

Nginx allows you to configure the access and error logs according to your needs.

If you have any questions or feedback, feel free to leave a comment.

If you like our content, please consider buying us a coffee.  
Thank you for your support!

[Buy me a coffee](https://www.buymeacoffee.com/8swZOSU6I)

Sign up to our newsletter and get our latest tutorials and news straight to your mailbox.

## Related Articles

[Show comments (3)](https://linuxize.com/post/nginx-log-files/#disqus_thread "Show comments for post")