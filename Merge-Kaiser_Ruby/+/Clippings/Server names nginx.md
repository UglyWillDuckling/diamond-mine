---
source: https://nginx.org/en/docs/http/server_names.html
author: 
published: 
created: 2025-04-20
tags:
  - howto/nginx
---
| [Wildcard names](https://nginx.org/en/docs/http/#wildcard_names)   [Regular expressions names](https://nginx.org/en/docs/http/#regex_names)   [Miscellaneous names](https://nginx.org/en/docs/http/#miscellaneous_names)   [Internationalized names](https://nginx.org/en/docs/http/#idn)   [Virtual server selection](https://nginx.org/en/docs/http/#virtual_server_selection)   [Optimization](https://nginx.org/en/docs/http/#optimization)   [Compatibility](https://nginx.org/en/docs/http/#compatibility) |
| --- |

Server names are defined using the [server\_name](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name) directive and determine which [server](https://nginx.org/en/docs/http/ngx_http_core_module.html#server) block is used for a given request. See also “ [How nginx processes a request](https://nginx.org/en/docs/http/request_processing.html) ”. They may be defined using exact names, wildcard names, or regular expressions:

> ```
> server {
>     listen       80;
>     server_name  example.org  www.example.org;
>     ...
> }
> 
> server {
>     listen       80;
>     server_name  *.example.org;
>     ...
> }
> 
> server {
>     listen       80;
>     server_name  mail.*;
>     ...
> }
> 
> server {
>     listen       80;
>     server_name  ~^(?<user>.+)\.example\.net$;
>     ...
> }
> ```

When searching for a virtual server by name, if name matches more than one of the specified variants, e.g. both wildcard name and regular expression match, the first matching variant will be chosen, in the following order of precedence:

1. exact name
2. longest wildcard name starting with an asterisk, e.g. “ `*.example.org` ”
3. longest wildcard name ending with an asterisk, e.g. “ `mail.*` ”
4. first matching regular expression (in order of appearance in a configuration file)

#### Wildcard names

A wildcard name may contain an asterisk only on the name’s start or end, and only on a dot border. The names “ `www.*.example.org` ” and “ `w*.example.org` ” are invalid. However, these names can be specified using regular expressions, for example, “ `~^www\..+\.example\.org$` ” and “ `~^w.*\.example\.org$` ”. An asterisk can match several name parts. The name “ `*.example.org` ” matches not only `www.example.org` but `www.sub.example.org` as well.

A special wildcard name in the form “`.example.org` ” can be used to match both the exact name “ `example.org` ” and the wildcard name “ `*.example.org` ”.

#### Regular expressions names

The regular expressions used by nginx are compatible with those used by the Perl programming language (PCRE). To use a regular expression, the server name must start with the tilde character:

> ```
> server_name  ~^www\d+\.example\.net$;
> ```

otherwise it will be treated as an exact name, or if the expression contains an asterisk, as a wildcard name (and most likely as an invalid one). Do not forget to set “ `^` ” and “ `$` ” anchors. They are not required syntactically, but logically. Also note that domain name dots should be escaped with a backslash. A regular expression containing the characters “ `{` ” and “ `}` ” should be quoted:

> ```
> server_name  "~^(?<name>\w\d{1,3}+)\.example\.net$";
> ```

otherwise nginx will fail to start and display the error message:

> ```
> directive "server_name" is not terminated by ";" in ...
> ```

A named regular expression capture can be used later as a variable:

> ```
> server {
>     server_name   ~^(www\.)?(?<domain>.+)$;
> 
>     location / {
>         root   /sites/$domain;
>     }
> }
> ```

The PCRE library supports named captures using the following syntax:

> | ``?<`*name*`>`` | Perl 5.10 compatible syntax, supported since PCRE-7.0 |
> | --- | --- |
> | ``?'`*name*`'`` | Perl 5.10 compatible syntax, supported since PCRE-7.0 |
> | ``?P<`*name*`>`` | Python compatible syntax, supported since PCRE-4.0 |

If nginx fails to start and displays the error message:

> ```
> pcre_compile() failed: unrecognized character after (?< in ...
> ```

this means that the PCRE library is old and the syntax “``?P<`*name*`>`` ” should be tried instead. The captures can also be used in digital form:

> ```
> server {
>     server_name   ~^(www\.)?(.+)$;
> 
>     location / {
>         root   /sites/$2;
>     }
> }
> ```

However, such usage should be limited to simple cases (like the above), since the digital references can easily be overwritten.

#### Miscellaneous names

There are some server names that are treated specially.

If it is required to process requests without the “Host” header field in a [server](https://nginx.org/en/docs/http/ngx_http_core_module.html#server) block which is not the default, an empty name should be specified:

> ```
> server {
>     listen       80;
>     server_name  example.org  www.example.org  "";
>     ...
> }
> ```

If no [server\_name](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name) is defined in a [server](https://nginx.org/en/docs/http/ngx_http_core_module.html#server) block then nginx uses the empty name as the server name.

> nginx versions up to 0.8.48 used the machine’s hostname as the server name in this case.

If a server name is defined as “ `$hostname` ” (0.9.4), the machine’s hostname is used.

If someone makes a request using an IP address instead of a server name, the “Host” request header field will contain the IP address and the request can be handled using the IP address as the server name:

> ```
> server {
>     listen       80;
>     server_name  example.org
>                  www.example.org
>                  ""
>                  192.168.1.1
>                  ;
>     ...
> }
> ```

In catch-all server examples the strange name “ `_` ” can be seen:

> ```
> server {
>     listen       80  default_server;
>     server_name  _;
>     return       444;
> }
> ```

There is nothing special about this name, it is just one of a myriad of invalid domain names which never intersect with any real name. Other invalid names like “ `--` ” and “`!@#` ” may equally be used.

nginx versions up to 0.6.25 supported the special name “ `*` ” which was erroneously interpreted to be a catch-all name. It never functioned as a catch-all or wildcard server name. Instead, it supplied the functionality that is now provided by the [server\_name\_in\_redirect](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name_in_redirect) directive. The special name “ `*` ” is now deprecated and the [server\_name\_in\_redirect](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name_in_redirect) directive should be used. Note that there is no way to specify the catch-all name or the default server using the [server\_name](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name) directive. This is a property of the [listen](https://nginx.org/en/docs/http/ngx_http_core_module.html#listen) directive and not of the [server\_name](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name) directive. See also “ [How nginx processes a request](https://nginx.org/en/docs/http/request_processing.html) ”. It is possible to define servers listening on ports \*:80 and \*:8080, and direct that one will be the default server for port \*:8080, while the other will be the default for port \*:80:

> ```
> server {
>     listen       80;
>     listen       8080  default_server;
>     server_name  example.net;
>     ...
> }
> 
> server {
>     listen       80  default_server;
>     listen       8080;
>     server_name  example.org;
>     ...
> }
> ```

#### Internationalized names

Internationalized domain names ([IDNs](https://en.wikipedia.org/wiki/Internationalized_domain_name)) should be specified using an ASCII (Punycode) representation in the [server\_name](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name) directive:

> ```
> server {
>     listen       80;
>     server_name  xn--e1afmkfd.xn--80akhbyknj4f;  # пример.испытание
>     ...
> }
> ```

#### Virtual server selection

First, a connection is created in a default server context. Then, the server name can be determined in the following request processing stages, each involved in server configuration selection:

- during SSL handshake, in advance, according to [SNI](https://nginx.org/en/docs/http/configuring_https_servers.html#sni)
- after processing the request line
- after processing the `Host` header field
- if the server name was not determined after processing the request line or from the `Host` header field, nginx will use the empty name as the server name.

At each of these stages, different server configurations can be applied. As such, certain directives should be specified with caution:

- in case of the [ssl\_protocols](https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_protocols) directive, the protocol list is set by the OpenSSL library before the server configuration could be applied according to the name requested through SNI, thus, protocols should be specified only for a default server;
- the [client\_header\_buffer\_size](https://nginx.org/en/docs/http/ngx_http_core_module.html#client_header_buffer_size) and [merge\_slashes](https://nginx.org/en/docs/http/ngx_http_core_module.html#merge_slashes) directives are involved before reading the request line, thus, such directives use a default server configuration or the server configuration chosen by SNI;
- in case of the [ignore\_invalid\_headers](https://nginx.org/en/docs/http/ngx_http_core_module.html#ignore_invalid_headers),[large\_client\_header\_buffers](https://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers), and [underscores\_in\_headers](https://nginx.org/en/docs/http/ngx_http_core_module.html#underscores_in_headers) directives involved in processing request header fields, it additionally depends whether the server configuration was updated according to the request line or the `Host` header field;
- an error response will be handled with the [error\_page](https://nginx.org/en/docs/http/ngx_http_core_module.html#error_page) directive in the server that currently fulfills the request.

#### Optimization

Exact names, wildcard names starting with an asterisk, and wildcard names ending with an asterisk are stored in three hash tables bound to the listen ports. The sizes of hash tables are optimized at the configuration phase so that a name can be found with the fewest CPU cache misses. The details of setting up hash tables are provided in a separate [document](https://nginx.org/en/docs/hash.html).

The exact names hash table is searched first. If a name is not found, the hash table with wildcard names starting with an asterisk is searched. If the name is not found there, the hash table with wildcard names ending with an asterisk is searched.

Searching wildcard names hash table is slower than searching exact names hash table because names are searched by domain parts. Note that the special wildcard form “`.example.org` ” is stored in a wildcard names hash table and not in an exact names hash table.

Regular expressions are tested sequentially and therefore are the slowest method and are non-scalable.

For these reasons, it is better to use exact names where possible. For example, if the most frequently requested names of a server are `example.org` and `www.example.org`, it is more efficient to define them explicitly:

> ```
> server {
>     listen       80;
>     server_name  example.org  www.example.org  *.example.org;
>     ...
> }
> ```

than to use the simplified form:

> ```
> server {
>     listen       80;
>     server_name  .example.org;
>     ...
> }
> ```

If a large number of server names are defined, or unusually long server names are defined, tuning the [server\_names\_hash\_max\_size](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_names_hash_max_size) and [server\_names\_hash\_bucket\_size](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_names_hash_bucket_size) directives at the *http* level may become necessary. The default value of the [server\_names\_hash\_bucket\_size](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_names_hash_bucket_size) directive may be equal to 32, or 64, or another value, depending on CPU cache line size. If the default value is 32 and server name is defined as “ `too.long.server.name.example.org` ” then nginx will fail to start and display the error message:

> ```
> could not build the server_names_hash,
> you should increase server_names_hash_bucket_size: 32
> ```

In this case, the directive value should be increased to the next power of two:

> ```
> http {
>     server_names_hash_bucket_size  64;
>     ...
> ```

If a large number of server names are defined, another error message will appear:

> ```
> could not build the server_names_hash,
> you should increase either server_names_hash_max_size: 512
> or server_names_hash_bucket_size: 32
> ```

In such a case, first try to set [server\_names\_hash\_max\_size](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_names_hash_max_size) to a number close to the number of server names. Only if this does not help, or if nginx’s start time is unacceptably long, try to increase [server\_names\_hash\_bucket\_size](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_names_hash_bucket_size).

If a server is the only server for a listen port, then nginx will not test server names at all (and will not build the hash tables for the listen port). However, there is one exception. If a server name is a regular expression with captures, then nginx has to execute the expression to get the captures.

#### Compatibility

- The special server name “ `$hostname` ” has been supported since 0.9.4.
- A default server name value is an empty name “” since 0.8.48.
- Named regular expression server name captures have been supported since 0.8.25.
- Regular expression server name captures have been supported since 0.7.40.
- An empty server name “” has been supported since 0.7.12.
- A wildcard server name or regular expression has been supported for use as the first server name since 0.6.25.
- Regular expression server names have been supported since 0.6.7.
- Wildcard form `example.*` has been supported since 0.6.0.
- The special form `.example.org` has been supported since 0.3.18.
- Wildcard form `*.example.org` has been supported since 0.1.13.

| written by Igor Sysoev   edited by Brian Mercer |
| --- |