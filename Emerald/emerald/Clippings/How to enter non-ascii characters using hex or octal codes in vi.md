## conclusion
enter `<C-v>` in insert mode -> press any combination of characters to get Vims understanding of it
### examples

**octain represantation**
1. insert mode 
2. `<C-v>`
3. 065
4. output is **A**

**vim understanding of keys**
1. insert
2. `<C-v>`
3. press alt+/
4. output is `<M-/>`

___

I'm trying to write a golfing library for postscript. But it needs to be condensed itself. So I need a convenient way to type-in arbitrary bytes within mostly ascii text.

I know this can easily be done with absolutely any programming language, but can I do it in vi? (`:help octal` was no help).

*Edit:* Here's the resulting [golfing library for postscript](https://github.com/luser-dr00g/G/blob/master/G). Fortunately, I realized early on that golfing the library itself was a stupid idea and I did not do that.

- [vim](https://unix.stackexchange.com/questions/tagged/vim "show questions tagged 'vim'")
- [binary](https://unix.stackexchange.com/questions/tagged/binary "show questions tagged 'binary'")

[Share](https://unix.stackexchange.com/q/61118 "Short permalink to this question")

Share a link to this question

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this question](https://unix.stackexchange.com/posts/61118/edit)

 

Follow this question to receive notifications

[edited Jan 9, 2019 at 23:32](https://unix.stackexchange.com/posts/61118/revisions "show all edits to this post")

[

![Thomas Dickey's user avatar](https://i.sstatic.net/UPurS.png?s=64)

](https://unix.stackexchange.com/users/105132/thomas-dickey)

[Thomas Dickey](https://unix.stackexchange.com/users/105132/thomas-dickey)

78.5k99 gold badges185185 silver badges286286 bronze badges

asked Jan 13, 2013 at 7:51

[

![luser droog's user avatar](https://www.gravatar.com/avatar/db1bf62fae51d5bafb8f1db7fb677176?s=64&d=identicon&r=PG)

](https://unix.stackexchange.com/users/12551/luser-droog)

[luser droog](https://unix.stackexchange.com/users/12551/luser-droog)luser droog

95011 gold badge66 silver badges1414 bronze badges

2

- 8
	If Vim is available, [this](http://vim.wikia.com/wiki/Entering_special_characters#By_character_value) might help
	– [sr\_](https://unix.stackexchange.com/users/11539/sr "15,472 reputation")
	[Commented Jan 13, 2013 at 9:53](https://unix.stackexchange.com/questions/61118/#comment85792_61118)
- related: [unix.stackexchange.com/questions/108020/…](http://unix.stackexchange.com/questions/108020/can-vim-display-ascii-characters-only-and-treat-other-bytes-as-binary-data "can vim display ascii characters only and treat other bytes as binary data")
	– [luser droog](https://unix.stackexchange.com/users/12551/luser-droog "950 reputation")
	[Commented Apr 4, 2015 at 16:24](https://unix.stackexchange.com/questions/61118/#comment325805_61118)

[Add a comment](https://unix.stackexchange.com/questions/61118/# "Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.")  | ## 2 Answers 

Sorted by: [Reset to default](https://unix.stackexchange.com/questions/61118/how-to-enter-non-ascii-characters-using-hex-or-octal-codes-in-vi?answertab=scoredesc#tab-top)

Highest score (default) Date modified (newest first) Date created (oldest first)

This answer is useful

122

Save this answer.Show activity on this post.

```
:help i_CTRL-V_digit
```

In insert mode, type Ctrl+V followed by

- a decimal number (0-255)
- `o` then an octal number (o0-o377, i.e., 255 is the maximum value)
- `x` then a hex number (x00-xFF, i.e., 255 is the maximum value)
- `u` then a 4-hexchar Unicode sequence
- `U` then an 8-hexchar Unicode sequence

Decimal and octal numbers are limited to three digits.  Decimal numbers less than 100 may include leading zeroes, which are ignored.  Octal numbers less than 100<sub>oct</sub> (i.e., 64) may include leading zeroes, but they are not required.  Octal numbers greater than or equal to 100<sub>oct</sub> may *not* include leading zeroes (but you may type a leading o if you want to).

You can terminate a number by typing a character that is not a valid digit for that radix.  For example,

- Ctrl+V    0 6 5 → `A`.
- Ctrl+V    6 5 B → `Ab`.
- Ctrl+V o  0 4 1 → `!`.
- Ctrl+V o  4 1 9 → `!9`.

Regular (one-octet) hex numbers are limited to two digits.  As with the above, you can repeat the radix character (e.g., Ctrl+V u u  0 0 4 1 → `A`)  for characters specified by hex codes.  `o` and `x` are case-insensitive.

[Share](https://unix.stackexchange.com/a/194093 "Short permalink to this answer")

Share a link to this answer

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](https://unix.stackexchange.com/posts/194093/edit)

 

Follow this answer to receive notifications

[edited Mar 1, 2019 at 20:58](https://unix.stackexchange.com/posts/194093/revisions "show all edits to this post")

[

![G-Man Says 'Reinstate Monica''s user avatar](https://i.sstatic.net/14plP.png?s=64)

](https://unix.stackexchange.com/users/80216/g-man-says-reinstate-monica)

[G-Man Says 'Reinstate Monica'](https://unix.stackexchange.com/users/80216/g-man-says-reinstate-monica)

23.8k2929 gold badges7575 silver badges126126 bronze badges

answered Apr 2, 2015 at 20:02

[

![Alan's user avatar](https://www.gravatar.com/avatar/078157830fa4da8b51fb41c821e7473c?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://unix.stackexchange.com/users/109006/alan)

[Alan](https://unix.stackexchange.com/users/109006/alan)Alan

1,33622 gold badges99 silver badges44 bronze badges

3

- To add some more tips: the decimal number must be between 0-255. The hex number between x00-xFF.
	– [wisbucky](https://unix.stackexchange.com/users/54444/wisbucky "3,648 reputation")
	[Commented Jun 7, 2018 at 18:34](https://unix.stackexchange.com/questions/61118/#comment813867_194093)
- 1
	ascii esaple is ctrl+v `x1b` (for ascii color sequences)
	– [ThorSummoner](https://unix.stackexchange.com/users/61349/thorsummoner "4,612 reputation")
	[Commented Jan 9, 2019 at 23:24](https://unix.stackexchange.com/questions/61118/#comment906692_194093)
- 7
	A reminder that if you are in Windows and remapped Ctrl+V to Paste, you can use Ctrl+Q in Insert mode in its place. See [stackoverflow.com/questions/426896/…](https://stackoverflow.com/questions/426896/vim-ctrl-v-conflict-with-windows-paste "vim ctrl v conflict with windows paste")
	– [Chris R. Donnelly](https://unix.stackexchange.com/users/45131/chris-r-donnelly "101 reputation")
	[Commented Jun 27, 2019 at 17:18](https://unix.stackexchange.com/questions/61118/#comment975804_194093)

[Add a comment](https://unix.stackexchange.com/questions/61118/# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | This answer is useful

20

Save this answer.Show activity on this post.

I assume that you use `vim`, because **`:help`**`octal` is a vim's command. On some systems `vi` is just a symlink to `vim` which runs it in vi-compatible mode.

In vim:

- You can enter unicode characters from basic multilingual plane you can use:  
	Press ctrl+v and then enter four digit hex unicode code.
- Another option is digraphs. You can read more about them in `vim`'s help (`help: dig`).  
	Press ctrl+k and then two-character sequence.  
	You can list sequences supported in you vim usig command `:digraph` .

In nvi, vi and elsewhere:

- Ctrl+Shift and hit U and then enter unicode hex code.
