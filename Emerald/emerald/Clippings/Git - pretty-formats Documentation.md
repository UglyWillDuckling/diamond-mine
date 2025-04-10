---
author: 
created: 2025-04-10
published: 
source: https://git-scm.com/docs/pretty-formats
tags:
  - docs/git
---
## PRETTY FORMATS

There are several built-in formats, and you can define additional formats by setting a pretty.<name> config option to either another format name, or a *format:* string, as described below (see [git-config\[1\]](https://git-scm.com/docs/git-config)). Here are the details of the built-in formats:

- *oneline*
	```js
	<hash> <title-line>
	```
	This is designed to be as compact as possible.
- *short*
	```js
	commit <hash>
	Author: <author>
	```
	```js
	<title-line>
	```
- *medium*
	```js
	commit <hash>
	Author: <author>
	Date:   <author-date>
	```
	```js
	<title-line>
	```
	```js
	<full-commit-message>
	```
- *full*
	```js
	commit <hash>
	Author: <author>
	Commit: <committer>
	```
	```js
	<title-line>
	```
	```js
	<full-commit-message>
	```
- *fuller*
	```js
	commit <hash>
	Author:     <author>
	AuthorDate: <author-date>
	Commit:     <committer>
	CommitDate: <committer-date>
	```
	```js
	<title-line>
	```
	```js
	<full-commit-message>
	```
- *reference*
	```js
	<abbrev-hash> (<title-line>, <short-author-date>)
	```
	This format is used to refer to another commit in a commit message and is the same as `--pretty='format:%C(auto)%h (%s, %ad)'`. By default, the date is formatted with `--date=short` unless another `--date` option is explicitly specified. As with any `format:` with format placeholders, its output is not affected by other options like `--decorate` and `--walk-reflogs`.
- *email*
	```js
	From <hash> <date>
	From: <author>
	Date: <author-date>
	Subject: [PATCH] <title-line>
	```
	```js
	<full-commit-message>
	```
- *mboxrd*
	Like *email*, but lines in the commit message starting with "From " (preceded by zero or more ">") are quoted with ">" so they aren’t confused as starting a new commit.
- *raw*
	The *raw* format shows the entire commit exactly as stored in the commit object. Notably, the hashes are displayed in full, regardless of whether --abbrev or --no-abbrev are used, and *parents* information show the true parent commits, without taking grafts or history simplification into account. Note that this format affects the way commits are displayed, but not the way the diff is shown e.g. with `git log --raw`. To get full object names in a raw diff format, use `--no-abbrev`.
- *format:<format-string>*
	The *format:<format-string>* format allows you to specify which information you want to show. It works a little bit like printf format, with the notable exception that you get a newline with *%n* instead of *\\n*.
	E.g, *format:"The author of %h was %an, %ar%nThe title was >>%s<<%n"* would show something like this:
	```js
	The author of fe6e0ee was Junio C Hamano, 23 hours ago
	The title was >>t4119: test autocomputing -p<n> for traditional diff input.<<
	```
	The placeholders are:
	- Placeholders that expand to a single literal character:
		*%n*
		newline
		*%%*
		a raw *%*
		*%x00*
		*%x* followed by two hexadecimal digits is replaced with a byte with the hexadecimal digits' value (we will call this "literal formatting code" in the rest of this document).
	- Placeholders that affect formatting of later placeholders:
		*%Cred*
		switch color to red
		*%Cgreen*
		switch color to green
		*%Cblue*
		switch color to blue
		*%Creset*
		reset color
		*%C(…)*
		color specification, as described under Values in the "CONFIGURATION FILE" section of [git-config\[1\]](https://git-scm.com/docs/git-config). By default, colors are shown only when enabled for log output (by `color.diff`, `color.ui`, or `--color`, and respecting the `auto` settings of the former if we are going to a terminal). `%C(auto,...)` is accepted as a historical synonym for the default (e.g., `%C(auto,red)`). Specifying `%C(always,...)` will show the colors even when color is not otherwise enabled (though consider just using `--color=always` to enable color for the whole output, including this format and anything else git might color).`auto` alone (i.e. `%C(auto)`) will turn on auto coloring on the next placeholders until the color is switched again.
		*%m*
		left (`<`), right (`>`) or boundary (`-`) mark
		*%w(\[<w>\[,<i1>\[,<i2>\]\]\])*
		switch line wrapping, like the -w option of [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog).
		*%<( <N> \[,trunc|ltrunc|mtrunc\])*
		make the next placeholder take at least N column widths, padding spaces on the right if necessary. Optionally truncate (with ellipsis *..*) at the left (ltrunc) `..ft`, the middle (mtrunc) `mi..le`, or the end (trunc) `rig..`, if the output is longer than N columns. Note 1: that truncating only works correctly with N >= 2. Note 2: spaces around the N and M (see below) values are optional. Note 3: Emojis and other wide characters will take two display columns, which may over-run column boundaries. Note 4: decomposed character combining marks may be misplaced at padding boundaries.
		*%<|( <M> )*
		make the next placeholder take at least until Mth display column, padding spaces on the right if necessary. Use negative M values for column positions measured from the right hand edge of the terminal window.
		*%>( <N> )*, *%>|( <M> )*
		similar to *%<( <N> )*, *%<|( <M> )* respectively, but padding spaces on the left
		*%>>( <N> )*, *%>>|( <M> )*
		similar to *%>( <N> )*, *%>|( <M> )* respectively, except that if the next placeholder takes more spaces than given and there are spaces on its left, use those spaces
		*%><( <N> )*, *%><|( <M> )*
		similar to *%<( <N> )*, *%<|( <M> )* respectively, but padding both sides (i.e. the text is centered)
	- Placeholders that expand to information extracted from the commit:
		*%H*
		commit hash
		*%h*
		abbreviated commit hash
		*%T*
		tree hash
		*%t*
		abbreviated tree hash
		*%P*
		parent hashes
		*%p*
		abbreviated parent hashes
		*%an*
		author name
		*%aN*
		author name (respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
		*%ae*
		author email
		*%aE*
		author email (respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
		*%al*
		author email local-part (the part before the *@* sign)
		*%aL*
		author local-part (see *%al*) respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
		*%ad*
		author date (format respects --date= option)
		*%aD*
		author date, RFC2822 style
		*%ar*
		author date, relative
		*%at*
		author date, UNIX timestamp
		*%ai*
		author date, ISO 8601-like format
		*%aI*
		author date, strict ISO 8601 format
		*%as*
		author date, short format (`YYYY-MM-DD`)
		*%ah*
		author date, human style (like the `--date=human` option of [git-rev-list\[1\]](https://git-scm.com/docs/git-rev-list))
		*%cn*
		committer name
		*%cN*
		committer name (respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
		*%ce*
		committer email
		*%cE*
		committer email (respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
		*%cl*
		committer email local-part (the part before the *@* sign)
		*%cL*
		committer local-part (see *%cl*) respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
		*%cd*
		committer date (format respects --date= option)
		*%cD*
		committer date, RFC2822 style
		*%cr*
		committer date, relative
		*%ct*
		committer date, UNIX timestamp
		*%ci*
		committer date, ISO 8601-like format
		*%cI*
		committer date, strict ISO 8601 format
		*%cs*
		committer date, short format (`YYYY-MM-DD`)
		*%ch*
		committer date, human style (like the `--date=human` option of [git-rev-list\[1\]](https://git-scm.com/docs/git-rev-list))
		*%d*
		ref names, like the --decorate option of [git-log\[1\]](https://git-scm.com/docs/git-log)
		*%D*
		ref names without the " (", ")" wrapping.
		*%(decorate\[:<options>\])*
		ref names with custom decorations. The `decorate` string may be followed by a colon and zero or more comma-separated options. Option values may contain literal formatting codes. These must be used for commas (`%x2C`) and closing parentheses (`%x29`), due to their role in the option syntax.
		- *prefix=<value>*: Shown before the list of ref names. Defaults to " `(`".
		- *suffix=<value>*: Shown after the list of ref names. Defaults to "`)` ".
		- *separator=<value>*: Shown between ref names. Defaults to "`,` ".
		- *pointer=<value>*: Shown between HEAD and the branch it points to, if any. Defaults to " `->` ".
		- *tag=<value>*: Shown before tag names. Defaults to " `tag:` ".
	For example, to produce decorations with no wrapping or tag annotations, and spaces as separators:
	\+ `%(decorate:prefix=,suffix=,tag=,separator= )`
	*%(describe\[:<options>\])*
	human-readable name, like [git-describe\[1\]](https://git-scm.com/docs/git-describe); empty string for undescribable commits. The `describe` string may be followed by a colon and zero or more comma-separated options. Descriptions can be inconsistent when tags are added or removed at the same time.
	- *tags\[=<bool-value>\]*: Instead of only considering annotated tags, consider lightweight tags as well.
	- *abbrev=<number>*: Instead of using the default number of hexadecimal digits (which will vary according to the number of objects in the repository with a default of 7) of the abbreviated object name, use <number> digits, or as many digits as needed to form a unique object name.
	- *match=<pattern>*: Only consider tags matching the given `glob(7)` pattern, excluding the "refs/tags/" prefix.
	- *exclude=<pattern>*: Do not consider tags matching the given `glob(7)` pattern, excluding the "refs/tags/" prefix.
	*%S*
	ref name given on the command line by which the commit was reached (like `git log --source`), only works with `git log`
	*%e*
	encoding
	*%s*
	subject
	*%f*
	sanitized subject line, suitable for a filename
	*%b*
	body
	*%B*
	raw body (unwrapped subject and body)
	*%N*
	commit notes
	*%GG*
	raw verification message from GPG for a signed commit
	*%G?*
	show "G" for a good (valid) signature, "B" for a bad signature, "U" for a good signature with unknown validity, "X" for a good signature that has expired, "Y" for a good signature made by an expired key, "R" for a good signature made by a revoked key, "E" if the signature cannot be checked (e.g. missing key) and "N" for no signature
	*%GS*
	show the name of the signer for a signed commit
	*%GK*
	show the key used to sign a signed commit
	*%GF*
	show the fingerprint of the key used to sign a signed commit
	*%GP*
	show the fingerprint of the primary key whose subkey was used to sign a signed commit
	*%GT*
	show the trust level for the key used to sign a signed commit
	*%gD*
	reflog selector, e.g., `refs/stash@{1}` or `refs/stash@{2 minutes ago}`; the format follows the rules described for the `-g` option. The portion before the `@` is the refname as given on the command line (so `git log -g refs/heads/master` would yield `refs/heads/master@{0}`).
	*%gd*
	shortened reflog selector; same as `%gD`, but the refname portion is shortened for human readability (so `refs/heads/master` becomes just `master`).
	*%gn*
	reflog identity name
	*%gN*
	reflog identity name (respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
	*%ge*
	reflog identity email
	*%gE*
	reflog identity email (respecting.mailmap, see [git-shortlog\[1\]](https://git-scm.com/docs/git-shortlog) or [git-blame\[1\]](https://git-scm.com/docs/git-blame))
	*%gs*
	reflog subject
	*%(trailers\[:<options>\])*
	display the trailers of the body as interpreted by [git-interpret-trailers\[1\]](https://git-scm.com/docs/git-interpret-trailers). The `trailers` string may be followed by a colon and zero or more comma-separated options. If any option is provided multiple times, the last occurrence wins.
	- *key=<key>*: only show trailers with specified <key>. Matching is done case-insensitively and trailing colon is optional. If option is given multiple times trailer lines matching any of the keys are shown. This option automatically enables the `only` option so that non-trailer lines in the trailer block are hidden. If that is not desired it can be disabled with `only=false`. E.g.,`%(trailers:key=Reviewed-by)` shows trailer lines with key `Reviewed-by`.
	- *only\[=<bool>\]*: select whether non-trailer lines from the trailer block should be included.
	- *separator=<sep>*: specify the separator inserted between trailer lines. Defaults to a line feed character. The string <sep> may contain the literal formatting codes described above. To use comma as separator one must use `%x2C` as it would otherwise be parsed as next option. E.g., `%(trailers:key=Ticket,separator=%x2C )` shows all trailer lines whose key is "Ticket" separated by a comma and a space.
	- *unfold\[=<bool>\]*: make it behave as if interpret-trailer’s `--unfold` option was given. E.g.,`%(trailers:only,unfold=true)` unfolds and shows all trailer lines.
	- *keyonly\[=<bool>\]*: only show the key part of the trailer.
	- *valueonly\[=<bool>\]*: only show the value part of the trailer.
	- *key\_value\_separator=<sep>*: specify the separator inserted between the key and value of each trailer. Defaults to ": ". Otherwise it shares the same semantics as *separator=<sep>* above.

The boolean options accept an optional value `[=<bool-value>]`. The values taken by `--type=bool` git-config\[1\], like `yes` and `off`, are all accepted. Giving a boolean option without `=<value>` is equivalent to giving it with `=true`.

If you add a `+` (plus sign) after *%* of a placeholder, a line-feed is inserted immediately before the expansion if and only if the placeholder expands to a non-empty string.

If you add a `-` (minus sign) after *%* of a placeholder, all consecutive line-feeds immediately preceding the expansion are deleted if and only if the placeholder expands to an empty string.

If you add a \` \` (space) after *%* of a placeholder, a space is inserted immediately before the expansion if and only if the placeholder expands to a non-empty string.

- *tformat:*
	The *tformat:* format works exactly like *format:*, except that it provides "terminator" semantics instead of "separator" semantics. In other words, each commit has the message terminator character (usually a newline) appended, rather than a separator placed between entries. This means that the final entry of a single-line format will be properly terminated with a new line, just as the "oneline" format does. For example:
	```js
	$ git log -2 --pretty=format:%h 4da45bef \
	  | perl -pe '$_ .= " -- NO NEWLINE\n" unless /\n/'
	4da45be
	7134973 -- NO NEWLINE
	$ git log -2 --pretty=tformat:%h 4da45bef \
	  | perl -pe '$_ .= " -- NO NEWLINE\n" unless /\n/'
	4da45be
	7134973
	```
	In addition, any unrecognized string that has a `%` in it is interpreted as if it has `tformat:` in front of it. For example, these two are equivalent:
	```js
	$ git log -2 --pretty=tformat:%h 4da45bef
	$ git log -2 --pretty=%h 4da45bef
	```