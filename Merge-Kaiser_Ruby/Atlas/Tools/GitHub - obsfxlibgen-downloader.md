---
source: https://github.com/obsfx/libgen-downloader
author:
  - "[[GitHub]]"
created: 2024-12-14
description: A simple tool to search and download ebooks from libgen via terminal user interface. - obsfx/libgen-downloader
tags:
  - clippings
  - tool
  - terminal-tool
  - git-repo
  - github-repo
  - js-tool
---
## libgen-downloader

`libgen-downloader` is a simple command line tool to search and download ebooks from libgen. It is developed using `NodeJS`, `TypeScript`, `React`, `Ink` and `Zustand`. It does not use a search API. It accesses the web pages like a web browser, parses the HTML response and shows the appropriate output to the user. Depending on the status of libgen servers, you might get a connection error while you are searching, downloading or loading new pages.

basic-usage.mp4 <video src="https://private-user-images.githubusercontent.com/13767783/272812064-8b8a923b-2a34-4ec4-89f8-f671c2bc0dc4.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQyMDE5OTMsIm5iZiI6MTczNDIwMTY5MywicGF0aCI6Ii8xMzc2Nzc4My8yNzI4MTIwNjQtOGI4YTkyM2ItMmEzNC00ZWM0LTg5ZjgtZjY3MWMyYmMwZGM0Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjE0VDE4NDEzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE3MTRjN2EyMmFjMWI4ZjdjNTAwYmRmZDU3MGUwMzk1YWJiOTM0Y2MzMjU4MjE1YTA2M2NjMjkzOTQxOWJjZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CZIp8ncdPPuwFn6K1aJfzhYlaquAFq5kPlaxR5-tfQg" data-canonical-src="https://private-user-images.githubusercontent.com/13767783/272812064-8b8a923b-2a34-4ec4-89f8-f671c2bc0dc4.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQyMDE5OTMsIm5iZiI6MTczNDIwMTY5MywicGF0aCI6Ii8xMzc2Nzc4My8yNzI4MTIwNjQtOGI4YTkyM2ItMmEzNC00ZWM0LTg5ZjgtZjY3MWMyYmMwZGM0Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjE0VDE4NDEzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE3MTRjN2EyMmFjMWI4ZjdjNTAwYmRmZDU3MGUwMzk1YWJiOTM0Y2MzMjU4MjE1YTA2M2NjMjkzOTQxOWJjZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CZIp8ncdPPuwFn6K1aJfzhYlaquAFq5kPlaxR5-tfQg" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit"></video> filtering-and-bulk-downloading.mp4<video src="https://private-user-images.githubusercontent.com/13767783/272812118-96a56146-18b3-49af-a50a-b088365e73d5.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQyMDE5OTMsIm5iZiI6MTczNDIwMTY5MywicGF0aCI6Ii8xMzc2Nzc4My8yNzI4MTIxMTgtOTZhNTYxNDYtMThiMy00OWFmLWE1MGEtYjA4ODM2NWU3M2Q1Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjE0VDE4NDEzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwOTQyZjg5OTRhOGUzYzE0ODQ4NTI5YTM2ZThhNmIxYTM0ZjZiM2E0MjViYzg4ZWIxYzU0NzcyNzc5MGYzYWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.pG0pPsAeD1WiDD6cINrIJ-9lTMi5Z69ueLSWho1TidQ" data-canonical-src="https://private-user-images.githubusercontent.com/13767783/272812118-96a56146-18b3-49af-a50a-b088365e73d5.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQyMDE5OTMsIm5iZiI6MTczNDIwMTY5MywicGF0aCI6Ii8xMzc2Nzc4My8yNzI4MTIxMTgtOTZhNTYxNDYtMThiMy00OWFmLWE1MGEtYjA4ODM2NWU3M2Q1Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjE0VDE4NDEzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwOTQyZjg5OTRhOGUzYzE0ODQ4NTI5YTM2ZThhNmIxYTM0ZjZiM2E0MjViYzg4ZWIxYzU0NzcyNzc5MGYzYWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.pG0pPsAeD1WiDD6cINrIJ-9lTMi5Z69ueLSWho1TidQ" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit"></video>

## Installation

if you have already installed `NodeJS` and `npm`, you can install it using `npm`:

```
npm i -g libgen-downloader
```

or you can download one of the `standalone executable` versions. *(You can click and execute windows executable but in macOS / Linux you have to run it in your terminal.)*

#### [Standalone Executables](https://github.com/obsfx/libgen-cli-downloader/releases)

## Features

- Interactive user interface.
- Non app blocking direct downloading.
- Bulk downloading.
- Alternative download options.
- Command line parameters;

```
Usage
	$ libgen-downloader <input>

Options
	-s, --search <query>      search for a book
	-b, --bulk <MD5LIST.txt>  start the app in bulk downloading mode
	-u, --url <MD5>           get the download URL
	-d, --download <MD5>      download the file
	-h, --help                display help

Examples
	$ libgen-downloader    (start the app in interactive mode witout flags)
	$ libgen-downloader -s "The Art of War"
	$ libgen-downloader -b ./MD5_LIST_1695686580524.txt
	$ libgen-downloader -u 1234567890abcdef1234567890abcdef
	$ libgen-downloader -d 1234567890abcdef1234567890abcdef
```

## Changelogs

v2.0.0

- Added alternative downloads.
- Added new download progress indicators.
- Added a cache mechanism to quickly retrieve previously searched results..
- Added new CLI parameter `-s, --search` to search queries directly in the command line.
- Added new shortcut keys to simplify usage:
- `[J]` and `[K]` to move up and down for vimmers.
- `[TAB]` to add an entry to the bulk download queue.
- `[D]` to download an entry directly.
- Dropped result filtering. Instead added `Search by` filtering options to filter in columns like the original libgen search functionality.

---

v1.3.7

- Changed cli module and usage.
- Refactored downloading processes.
- README simplified.

---

v1.3

- Whole app was rewritten using `React`, `Ink` and `Zustand`.
- Added result filtering.
- Now you do not have to wait while downloading files using the `direct download` option.
- New version notifier.
- Due to the [https://gen.lib.rus.ec](https://gen.lib.rus.ec/) is banned in my country, now libgen-downloader fetches the latest configuration file from the [configuration](https://github.com/obsfx/libgen-downloader/tree/configuration) branch and finds an available mirror dynamically.

---

v1.2

- Direct download option added as a cli functionality.

---

v1.1

- New and mostly resizeable UI.

---

v1.0

- Addded bulk downloading
- Improved error handling.
- When a connection error occurs, `libgen-downloader` does not shut down instantly. It tries 5 times to do same request with 3 seconds of delay.
- New customized UI module.