---
author:
  - "[[John Johnson Okah]]"
published: 2022-12-11
created: 2025-03-17
source: https://dev.to/jjokah/how-to-download-an-entire-website-for-offline-usage-using-wget-2lli
tags:
  - howto/download
---
[![Cover image for How to download an entire website for offline usage (using wget)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmixm6e8ijo6sefk0tczd.jpeg)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmixm6e8ijo6sefk0tczd.jpeg)

*Here is a simple step to downloading an entire website and making it available offline using wget.*

> 💡**Wget** is a command-line **utility for retrieving files** using HTTP, HTTPS and FTP protocols.

---

## How to Install Wget

Wget comes with most Unix/Linux systems, but here is how you get it in case you were left out.

Use the command →

**On Mac**:

`brew install wget`

**On Linux**:

`sudo apt-get install wget`

## Using Wget to download the website:

Enter this command on your terminal  

```shell
wget -m -p -E -k -np https://example.com
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

The options explained:  

```shell
-m, --mirror            Turns on recursion and time-stamping, sets infinite
                          recursion depth, and keeps FTP directory listings.
-p, --page-requisites   Get all images, etc. needed to display HTML page.
-E, --adjust-extension  Save HTML/CSS files with .html/.css extensions.
-k, --convert-links     Make links in downloaded HTML point to local files.
-np, --no-parent        Dont ascend to the parent directory when retrieving
                        recursively. This guarantees that only the files below
                        a certain hierarchy will be downloaded. Requires a slash
                        at the end of the directory, e.g. example.com/foo/.
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

---

For more details on wget usage, check out the *[manual page](https://www.gnu.org/software/wget/manual/wget.html#Examples)*