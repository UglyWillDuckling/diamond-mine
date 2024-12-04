---
title: "thephpleague/mime-type-detection: League Mime Type Detection"
source: "https://github.com/thephpleague/mime-type-detection"
author:
  - "[[GitHub]]"
published:
created: 2024-12-04
description: "League Mime Type Detection. Contribute to thephpleague/mime-type-detection development by creating an account on GitHub."
tags:
  - "clippings"
---
## League Mime Type Detection

[![Author](https://camo.githubusercontent.com/f11071933af76ed96844fb6c583ee82c6e4d92912f29b67302cdea15b4f728be/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f617574686f722d406672616e6b64656a6f6e67652d626c75652e737667)](https://twitter.com/frankdejonge) [![Source Code](https://camo.githubusercontent.com/d4a8c13b9e5efc47447c4c24854a21ea25af719ae98d749754ffc81407baed51/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f736f757263652d6c65616775652532466d696d652d2d747970652d2d646574656374696f6e2d626c75652e737667)](https://github.com/thephpleague/mime-type-detection) [![Latest Version](https://camo.githubusercontent.com/f77275eae9baeab117854475ce9396ed6f8cf942d3c050bc4b145f7d38a380d0/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f7461672f7468657068706c65616775652f6d696d652d747970652d646574656374696f6e2e737667)](https://github.com/thephpleague/mime-type-detection/releases) [![Software License](https://camo.githubusercontent.com/2c688e7decdaf0ee046dbefbf1bfeff0500b962e151b1a606d791f8f2e9f54c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d627269676874677265656e2e737667)](https://github.com/thephpleague/mime-type-detection/blob/master/LICENSE) [![Build Status](https://camo.githubusercontent.com/d2ca84ba3eaf8a39c14c2b4528f7c917c8a0e4867667142a962b470e38a946d6/68747470733a2f2f7472617669732d63692e636f6d2f7468657068706c65616775652f6d696d652d747970652d646574656374696f6e2e7376673f6272616e63683d6d6173746572)](https://travis-ci.com/thephpleague/mime-type-detection) [![Coverage Status](https://camo.githubusercontent.com/e4201be48a75a088d92abc12079b0829462a154bd39de85657382b156cf01cdc/68747470733a2f2f696d672e736869656c64732e696f2f7363727574696e697a65722f636f7665726167652f672f7468657068706c65616775652f6d696d652d747970652d646574656374696f6e2e737667)](https://scrutinizer-ci.com/g/thephpleague/mime-type-detection/code-structure) [![Quality Score](https://camo.githubusercontent.com/26e80e758c1aca7e25695ad7b4d25b7aac6c12e570366c202088f5df246bc364/68747470733a2f2f696d672e736869656c64732e696f2f7363727574696e697a65722f672f7468657068706c65616775652f6d696d652d747970652d646574656374696f6e2e737667)](https://scrutinizer-ci.com/g/thephpleague/mime-type-detection) [![Total Downloads](https://camo.githubusercontent.com/2e4f1d7c858bbd42b2a55ce50068310568bd30f490e722b7dc091329a2fd7913/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f64742f6c65616775652f6d696d652d747970652d646574656374696f6e2e737667)](https://packagist.org/packages/league/mime-type-detection) [![php 7.2+](https://camo.githubusercontent.com/fcebf1438ca6d00631bd2b5308a5a1336aa1425bdbb0a03eb666a79c76520611/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d6d696e253230372e322d7265642e737667)](https://camo.githubusercontent.com/fcebf1438ca6d00631bd2b5308a5a1336aa1425bdbb0a03eb666a79c76520611/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d6d696e253230372e322d7265642e737667)

This package supplies a generic mime-type detection interface with a `finfo` based implementation.

## Usage

```
composer require league/mime-type-detection
```

## Consumer interface

Your code is advised to couple to the following interfaces:

- `League\MimetypeDetection\MimeTypeDetector`  
This contract is used to detect mimetypes based on file names and file contents.
- `League\MimetypeDetection\ExtensionLookup`  
This contract is used to lookup one or all mimetypes for a given file extension. Added in `1.13.0`.

### Detectors

Finfo with extension fallback:

```
$detector = new League\MimeTypeDetection\FinfoMimeTypeDetector();

// Detect by contents, fall back to detection by extension.
$mimeType = $detector->detectMimeType('some/path.php', 'string contents');

// Detect by contents only, no extension fallback.
$mimeType = $detector->detectMimeTypeFromBuffer('string contents');

// Detect by actual file, no extension fallback.
$mimeType = $detector->detectMimeTypeFromFile('existing/path.php');

// Only detect by extension
$mimeType = $detector->detectMimeTypeFromPath('any/path.php');

// Constructor options
$detector = new League\MimeTypeDetection\FinfoMimeTypeDetector(
  $pathToMimeDatabase, // Custom mime database location, default: ''
  $customExtensionMap, // Custom extension fallback mapp, default: null
  $bufferSampleSize // Buffer size limit, used to take a sample (substr) from the input buffer to reduce memory consumption.
);
```

Extension only:

```
$detector = new League\MimeTypeDetection\ExtensionMimeTypeDetector();

// Only detect by extension, ignores the file contents
$mimeType = $detector->detectMimeType('some/path.php', 'string contents');

// Always returns null
$mimeType = $detector->detectMimeTypeFromBuffer('string contents');

// Only detect by extension
$mimeType = $detector->detectMimeTypeFromFile('existing/path.php');

// Only detect by extension
$mimeType = $detector->detectMimeTypeFromPath('any/path.php');
```

## Extension lookup by mime-type

> This feature was added in version `1.13.0`

The various implementations can look up the extensions that can be used for a given mime-type.

```
// string | null
$extension = $detector->lookupExtension($mime$type);

// array<string>
$allExtensions = $detector->lookupAllExtensions($mimeType);
```

## Extension mime-type lookup

As a fallback for `finfo` based lookup, an extension map is used to determine the mime-type. There is an advised implementation shipped, which is generated from information collected by the npm package [mime-db](https://www.npmjs.com/package/mime-db).

### Provided extension maps

Generated:

```
$map = new League\MimeTypeDetection\GeneratedExtensionToMimeTypeMap();

// string mime-type or NULL
$mimeType = $map->lookupMimeType('png');
```

Overriding decorator

```
$innerMap = new League\MimeTypeDetection\GeneratedExtensionToMimeTypeMap();
$map = new League\MimeTypeDetection\OverridingExtensionToMimeTypeMap($innerMap, ['png' => 'custom/mimetype']);

// string "custom/mimetype"
$mimeType = $map->lookupMimeType('png');
```

Empty:

```
$map = new League\MimeTypeDetection\EmptyExtensionToMimeTypeMap();

// Always returns NULL
$mimeType = $map->lookupMimeType('png');
```