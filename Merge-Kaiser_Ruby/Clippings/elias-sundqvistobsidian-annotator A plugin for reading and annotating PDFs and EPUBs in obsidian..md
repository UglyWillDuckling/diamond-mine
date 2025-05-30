## Obsidian Annotator

This is a plugin for Obsidian ([https://obsidian.md](https://obsidian.md/)). It allows you to open and annotate PDF and **EPUB** files.

The plugin is based on [https://web.hypothes.is/](https://web.hypothes.is/), but modified to store the annotations in a local markdown file instead of on the internet.

## Demonstration

[![[~/×/72cf3fc79eb8a698b266cf8a15973152_MD5.gif]]](https://user-images.githubusercontent.com/9102856/131702952-1aa76baa-a279-474c-978d-cec95a683485.gif)

**Warning!** In the above gif I use **Dataview** syntax to specify the annotation-target. If you do not have the dataview plugin installed, you must instead write the annotation-target in the **frontmatter**, like this:

```
---
annotation-target: https://arxiv.org/pdf/2104.13478.pdf
---
```

## Known issues

1. Plugin doesn't work on iOS 16.3 or higher. Follow [#289](https://github.com/elias-sundqvist/obsidian-annotator/issues/289) issue state up to date.
2. Reader doesn't show annotations if they were changed on different platforms.

## Getting Started

Add the property `annotation-target` to the frontmatter of your obsidian note, with a value corresponding to the location of the EPUB/PDF file. The location can either be a file in the vault (such as `Pdfs/mypdf.pdf`), or online (such as `https://arxiv.org/pdf/2104.13478.pdf`)

Then you can, in the open note pane, select "more options" (the three dots in the top right), and a new option "annotate" should be available.

The plugin automatically tries to determine whether the file is an `epub` or `pdf` based on the file path, but in case this doesn't work, you can also add the property `annotation-target-type` and specify whether it is `epub` or `pdf` manually.

If you have [dataview](https://github.com/blacksmithgu/obsidian-dataview) installed, then you can also specify the annotation target with a dataview attribute. In this case, obsidian-style links can be used instead of a plain-text path.

> WARNING! Don't rename an original pdf or epub file! The plugin is going to lose the connection between annotations and file in that case.

### Annotating

Annotation is self-explanatory. Select text with your mouse to get started.

In the future, it would be nice to add colored highlights and image/region highlights. These features will have to be added to hypothes.is first, however. See these relevant issues: [hypothesis/product-backlog#198](https://github.com/hypothesis/product-backlog/issues/198), [hypothesis/product-backlog#669](https://github.com/hypothesis/product-backlog/issues/669)

To return to the regular obsidian markdown editing mode, you can select `more options` → `Open as MD`. Each annotation has an associated quote block with a block reference. Be careful with modifying these blocks. Minor edits to PREFIX, HIGHLIGHT, and POSTFIX are typically ok. But if the edits are too major, hypothesis may no longer be able to identify the corresponding text.

The COMMENT region can be freely edited. (but ensure that it is still part of the quote block.)

The TAGS region should consist of a comma-separated list of obsidian tags. (like `#tag1, #tag2, #tag3`)

### Dark Mode

The plugin has built-in dark mode support. To toggle dark mode, select `more options` → `Toggle Dark Mode` while annotating. You can also tweak the dark mode behavior in the settings tab for the plugin.

An obsidian link to an annotation block-reference will, when clicked, open the corresponding file and scroll to the associated highlight. If the file is already open in a pane, then the link will cause the existing pane to scroll instead.

## Contributing

Visit [CONTRIBUTING.md](https://github.com/elias-sundqvist/obsidian-annotator/blob/master/CONTRIBUTING.md) for information on building from source or contribution improvements. To report a bug, ask a question or suggest an improvement for this plugin, you can create an [issue](https://github.com/elias-sundqvist/obsidian-annotator/issues).

## Changelog

### 0.2.11 (2024-01-06)

- Fix issue with rendering annotator in Obsidian 1.5.3 and later (See issue #356)

### 0.2.10 (2023-01-09)

- Fix bug #284 Plugin didn't start on iOS

### 0.2.9 (2023-01-05)

- Click on annotation link in markdown causes an immediate jump to annotation in PDF (Thanks to @HardwayLinka)
- Fix broken drag-and-dropped link to highlight caused by line breaks. (See issue #267, Thanks to @HardwayLinka)

### 0.2.8 (2022-11-27)

- Fixed issue with "Annotate" button not appearing (See issue #253)
- Fixed issue with scroll getting stuck after clicking annotation link (See PR #259, Thanks to @HardwayLinka for the contribution)
- Partially fixed issue with annotation links not working (See PR #231, Thanks to @XSAM for the contribution)

### 0.2.7 (2022-10-31)

- Fixed issue with Latex Equations not rendering in annotations (See issue #228)
- Removed "sign-in/log-in" buttons (See issue #241)
- CSS Snippets can now be used to style the hypothesis sidebar

### 0.2.6 (2022-08-19)

- Fix bug #208 introduced in 0.2.5 It was impossible to open an internal link because of the plugin
- Internal changes
	- Use dataview package to communicate with dataview plugin

### 0.2.5 (2022-08-14)

- Move buttons 'Annotate', 'Toggle Dark Mode', 'Open as Markdown' to top of options menu
- Video annotation
	- fix [Video not found error](https://github.com/elias-sundqvist/obsidian-annotator/issues/198)
	- Temporary disable video annotation on mobile devices
- Internal changes
	- CodeMirror updated to v6
	- obsidian-api updated to 0.15.9
	- betterer was installed with strict typing settings to make plugin more stable and reliable in a future

### 0.2.4 (2022-07-23)

- Fix [plugin fails to start on iPad](https://github.com/elias-sundqvist/obsidian-annotator/issues/176)
- hypothes.is updated up to v1.1055.0
- `annotation-target-type` can now take on the values `web` and `video`.
	- With `web` the annotation target can (in theory) be any website. Some work better than others. Link navigation does not work.
	- With `video`, only youtube links are supported. In order to use this feature, a link to a zip file with the annotator.tv resources must be provided in the plugin settings. It cannot be bundled with the plugin since that would most likely violate copyright.
		- You can ask someone for a link, or generate it yourself by making an account at annotate.tv, signing in, going to [https://annotate.tv/videos/620d5a42b9ab630009bf3e31#](https://annotate.tv/videos/620d5a42b9ab630009bf3e31#), and downloading the website using the [Save All Resources](https://chrome.google.com/webstore/detail/save-all-resources/abpdnfjocnmdomablahdcfnoggeeiedb?hl=en) chrome extension, uploading it to google drive, and [generating a direct link](https://sites.google.com/site/gdocs2direct/).
	- Other improvements:
		- Some behind-the-scenes changes have been made so that the hypothes.is version can be more easily upgraded in the future.
- Markdown in the hypothesis sidebar should now fully support the regular obsidian syntax. (including links, embeds, custom codeblocks etc.)
- Several Epub improvements, Thanks to @aladmit for these!
	- New option added for font size scaling (See PR #127)
	- New "epub reader mode" setting added. Infinite scrolling is now supported! (See PR #114)
	- Reduced page padding so that maximum available space is used. (See PR #126)
- Removed sentry logging, again, (See issue #97)
- Fixed issue with pane loading on startup
- Fixed some issues with epub highlighting
- Added setting to choose default annotation mode, Thanks to @aladmit for the PR! (See PR #113)
- Fixed issue with chinese file names, as discussed in issue #53
- Drag and drop should now work in live preview (See issue #103)
- Upgraded pdf.js to a newer version.
	- Improved character support. (Japanese and Chinese letters should now work), (See issue #53)
- Removed sentry logging (See issue #97)
- Apparently the previous update broke some of the old annotations for some people (See issue #95). This version hopefully fixes that.
- See issue #70, Thanks to @jonasmerlin for the fix!
- Added a basic workaround for CORS issues. This should make more links possible to view. (See issue #15)
	- Note that this workaround only works on the desktop version of obsidian.
- Fixed critical bug that prevented any annotations from being saved. (See issue #61)
- Drag and drop has been improved. The drop handlers are now unloaded when the plugin is unloaded. The issues regarding interferrence with other Drag and Drop functionality are hopefully also resolved. (See Issue #50)
- Using an array format for the annotation target should now work. This improves compatibility with MetaEdit (See Issue #51)
- Holding ctrl and clicking links (or clicking with the mouse-wheel) now opens annotations in a new pane. (See Issue #54)
- Issue with multi-line comments should be resolved. (See Issue #47)
- A new command (\`Toggle Annotation/Markdown mode) has been added. This can be bound to a hotkey in obsidian, enabling more efficient switching between the two modes. (See issue #39)
- Other things
	- A basic unit-test for annotation loading has also been added. More tests will be added as issues arise. This will guarantee that the plugin becomes increasingly stable over time.
- By holding the shift key you can now drag highlights from the epub/pdf into a separate Obsidian note, and a link to the highlight will be inserted.[![[~/×/dc31a51ea4416584484e7eb609893dee_MD5.gif]]](https://user-images.githubusercontent.com/9102856/132098957-e6850c9f-77a0-4fd5-91ac-e7095cfbea9d.gif)
- See #37
- The plugin is now available in the community plugins list!
- The Pre- and Postfix parts of the annotation markdown can now be disabled in the settings. (See #30)
- Clicking a PDF annotation link now causes an immediate jump to the annotation. No more glitchy scrolling. (See #21)
- Potential fix to the memory leak mentioned in #28 added.
- Added core-js. Will hopefully mean that the plugin works with older versions of node (see #34)
- Disabled global WebSocket override. Should resolve issues with Obsidian Sync (see #36)
- Further size reductions of the plugin
	- React is now built in 'production' mode.
	- All the embedded resources now use the highest zip compression ratio.
- Added a new setting called `Custom Default Path`. See [this comment on #19](https://github.com/elias-sundqvist/obsidian-annotator/issues/19#issuecomment-909549603) for more info.
- Top-level values in the annotation JSON will now be ommited if their values are "unsurprising". See #24
- Fixed page notes breaking the loading of annotations.
- Made the `Post to...` button always say `Post to Only Me` to reduce privacy confusion.
- Further reduced plugin size
	- Switched from base64 to full unicode encoding
	- Added minimization of resources before zip generation
	- Added minimization of final rollup output
- Minor fixes
	- Removed warning about websocket userid mismatch
	- Added possible fix to #13
- Fixed so that no initial http request is made to the hypothes.is servers.
- Hypothes.is performance trackers removed.
- No more error messages from the websocket api.
- The stored annotations no longer reference the sample pdf url, since that confused some users. (See issue #7)
- Initial support for `file:` protocol links added. (Has not been tested much yet.)
- The placeholder staus bar text has been removed (See issue #17)
- The files necessary for the epub reader were `.gitignore` d, which prevented it from working in the previous releases. (See issue #6)
- The code files has been moved to the `src` directiory so that the repo looks a bit less messy.
- Added support for chinese file names. (See issue #4)
- Removed some unnecessary files to reduce plugin size.
- Removed logging,
- Simplified link handling
- viewer height is now 100% instead of fixed to 1000px.
- Basic functionality of the plugin implemented

## License

> Note: The files under the `resources` folder are scraped from the web. Each website has its licence file attached in the associated folder.

[Obsidian Annotator](https://github.com/elias-sundqvist/obsidian-annotator) is licensed under the GNU AGPLv3 license. Refer to [LICENSE](https://github.com/elias-sundqvist/obsidian-annotator/blob/master/LICENSE.TXT) for more information.

## Support

If you want to support me and my work, you can [sponsor me on Github](https://github.com/sponsors/elias-sundqvist) (preferred method) or donate something on [**Paypal**](https://www.paypal.com/donate/?hosted_button_id=C5MBC9YBWTYEC).

## Releases 32

[\+ 31 releases](https://github.com/elias-sundqvist/obsidian-annotator/releases)

## Sponsor this project

- [**elias-sundqvist** Elias Sundqvist](https://github.com/elias-sundqvist)
- [https://www.paypal.com/donate/?hosted\_button\_id=C5MBC9YBWTYEC](https://www.paypal.com/donate/?hosted_button_id=C5MBC9YBWTYEC)

[Learn more about GitHub Sponsors](https://github.com/sponsors)

## Packages

No packages published