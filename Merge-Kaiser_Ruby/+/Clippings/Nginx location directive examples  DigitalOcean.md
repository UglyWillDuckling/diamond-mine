---
source: https://www.digitalocean.com/community/tutorials/nginx-location-directive
author: 
published: 
created: 2025-04-19
tags:
  - howto/nginx
---
The location directive within NGINX server block allows to route request to correct location within the file system. The directive is used to tell NGINX where to look for a resource by including files and folders while matching a location block against an URL. In this tutorial, we will look at NGINX location directives in details.

## Prerequisite

- You have already installed NGINX by following our tutorial from [here](https://www.digitalocean.com/community/tutorials/install-nginx-ubuntu).

## NGINX location directive syntax

The NGINX location block can be placed inside a server block or inside another location block with some restrictions. The syntax for constructing a location block is:

```
location [modifier] [URI] {
  ...
  ...
}
```

The modifier in the location block is optional. Having a modifier in the location block will allow NGINX to treat a URL differently. Few most common modifiers are:

- **none**: If no modifiers are present in a location block then the requested URI will be matched against the beginning of the requested URI.
- **\=**: The equal sign is used to match a location block exactly against a requested URI.
- **~**: The tilde sign is used for case-sensitive regular expression match against a requested URI.
- **~\***: The tilde followed by asterisk sign is used for case insensitive regular expression match against a requested URI.
- **^~**: The carat followed by tilde sign is used to perform longest nonregular expression match against the requested URI. If the requested URI hits such a location block, no further matching will takes place.

## How NGINX choose a location block

A location can be defined by using a prefix string or by using a regular expression. Case-insensitive regular expressions are specified with preceding “ **~\*** ” modifier and for a case-insensitive regular expression, the “ **~** ” modifier is used. To find a location match for an URI, NGINX first scans the locations that is defined using the prefix strings (without regular expression). Thereafter, the location with regular expressions are checked in order of their declaration in the configuration file. NGINX will run through the following steps to select a location block against a requested URI.

- NGINX starts with looking for an exact match specified with `location = /some/path/` and if a match is found then this block is served right away.
- If there are no such exact location blocks then NGINX proceed with matching longest non-exact prefixes and if a match is found where ^~ modifier have been used then NGINX will stop searching further and this location block is selected to serve the request.
- If the matched longest prefix location does not contain ^~ modifier then the match is stored temporarily and proceed with following steps.
	- NGINX now shifts the search to the location block containing ~ and ~\* modifier and selects the first location block that matches the request URI and is immediately selected to serve the request.
	- If no locations are found in the above step that can be matched against the requested URI then the previously stored prefix location is used to serve the request.

## NGINX location block examples

Let us list few examples of NGINX location blocks using modifier and URI.

### 1\. NGINX location matching all requests

In the following example the prefix location / will match all requests but will be used as a last resort if no matches are found.

```
location / {
    ...
}
```

### 2\. NGINX location matching exact URL

NGINX always tries to match most specific prefix location at first. Therefore, the equal sign in the following location block forces an exact match with the path requested and then stops searching for any more matches.

```
location = /images { 
    ...
}
```

The above location block will match with the URL `https://domain.com/images` but the URL `https://domain.com/images/index.html` or `https://domain.com/images/` will not be matched.

### 3\. NGINX location block for a directory

The following location block will match any request starting with /images/ but continue with searching for more specific block for the requested URI. Therefore the location block will be selected if NGINX does not find any more specific match.

```
location /images/ {
     ...
     ...
}
```

### 4\. NGINX location RegEx Example

The modifier **^~** in the following location block results in a case sensitive regular expression match. Therefore the URI /images or /images/logo.png will be matched but stops searching as soon as a match is found.

```
location ^~ /images {
   ...
   ...
}
```

### 5\. NGINX location block for image/css/js file types

The modifier **~\*** in the next location block matches any request (case-insensitive) ending with png, ico, gif, jpg, jpeg, css or js. However, any requests to the `/images/` folder will be served by the previous location block.

```
location ~* .(png|ico|gif|jpg|jpeg|css|js)$ {
    ...
    ...
}
```

### 6\. NGINX location RegEx Case Sensitive Match

The modifier **~** in the following location block results in a case sensitive regular expression match but doesn’t stop searching for a better match.

```
location ~ /images {
    ...
    ...
}
```

### 7\. NGINX location RegEx Case Insensitive Match Example

The modifier **~\*** in the following location block results in a case insensitive regular expression match but the searching doesn’t stop here for a better match.

```
location ~* /images {
     ...
     ...
}
```

## Summary

Understanding NGINX location directive is essential for tracing end points of requested URI in the file system. The modifiers, steps of selecting location block and few examples discussed in this article will help you to get started with location blocks in NGINX easily.

While we believe that this content benefits our community, we have not yet thoroughly reviewed it.If you have any suggestions for improvements, please let us know by clicking the“report an issue“ button at the bottom of the tutorial.