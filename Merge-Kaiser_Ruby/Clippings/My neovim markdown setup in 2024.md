---
source: https://linkarzu.com/posts/neovim/markdown-setup-2024/
author:
  - "[[linkarzu]]"
published: 2024-06-27
created: 2025-03-17
tags:
  - tutorial/nvim/markdown
---
- [ ] #task take a look at [[My neovim markdown setup in 2024]] article/tutorial
___
## Contents

- [YouTube video](https://linkarzu.com/posts/neovim/markdown-setup-2024/#youtube-video)
- [IMPORTANT: 2025 version of this video](https://linkarzu.com/posts/neovim/markdown-setup-2024/#important-2025-version-of-this-video)
- [If you like my content, and want to support me](https://linkarzu.com/posts/neovim/markdown-setup-2024/#if-you-like-my-content-and-want-to-support-me)
- [Discord server](https://linkarzu.com/posts/neovim/markdown-setup-2024/#discord-server)
- [Follow me on social media](https://linkarzu.com/posts/neovim/markdown-setup-2024/#follow-me-on-social-media)
- [How do you manage your passwords?](https://linkarzu.com/posts/neovim/markdown-setup-2024/#how-do-you-manage-your-passwords)
- [Disclaimer](https://linkarzu.com/posts/neovim/markdown-setup-2024/#disclaimer)
- [All links in the video description](https://linkarzu.com/posts/neovim/markdown-setup-2024/#all-links-in-the-video-description)
- [Pending items](https://linkarzu.com/posts/neovim/markdown-setup-2024/#pending-items)
- [Where are all these files?](https://linkarzu.com/posts/neovim/markdown-setup-2024/#where-are-all-these-files)
- [Markdown tips](https://linkarzu.com/posts/neovim/markdown-setup-2024/#markdown-tips)
- [Better bullet points](https://linkarzu.com/posts/neovim/markdown-setup-2024/#better-bullet-points)
- [Spell checking (works in tmux)](https://linkarzu.com/posts/neovim/markdown-setup-2024/#spell-checking-works-in-tmux)
- [Spell dictionary](https://linkarzu.com/posts/neovim/markdown-setup-2024/#spell-dictionary)
- [Fix undercurl in tmux](https://linkarzu.com/posts/neovim/markdown-setup-2024/#fix-undercurl-in-tmux)
- [Lazyvim spell defaults](https://linkarzu.com/posts/neovim/markdown-setup-2024/#lazyvim-spell-defaults)
- [John McBride video recommendation](https://linkarzu.com/posts/neovim/markdown-setup-2024/#john-mcbride-video-recommendation)
- [todo items `leader+td`](https://linkarzu.com/posts/neovim/markdown-setup-2024/#todo-items-leadertd)
- [Add markdown TOC](https://linkarzu.com/posts/neovim/markdown-setup-2024/#add-markdown-toc)
- [Delete current file](https://linkarzu.com/posts/neovim/markdown-setup-2024/#delete-current-file)
- [Create or jump daily note `hyper+t+r`](https://linkarzu.com/posts/neovim/markdown-setup-2024/#create-or-jump-daily-note-hypertr)
- [Create headings and daily note](https://linkarzu.com/posts/neovim/markdown-setup-2024/#create-headings-and-daily-note)
- [View and paste images](https://linkarzu.com/posts/neovim/markdown-setup-2024/#view-and-paste-images)
- [Use snippets](https://linkarzu.com/posts/neovim/markdown-setup-2024/#use-snippets)
- [Bold easily](https://linkarzu.com/posts/neovim/markdown-setup-2024/#bold-easily)
- [Jump between markdown headings](https://linkarzu.com/posts/neovim/markdown-setup-2024/#jump-between-markdown-headings)
- [lazyvim already uses default `gj` and `gk` mappings](https://linkarzu.com/posts/neovim/markdown-setup-2024/#lazyvim-already-uses-default-gj-and-gk-mappings)
- [Fold all level 2 or 3 headings](https://linkarzu.com/posts/neovim/markdown-setup-2024/#fold-all-level-2-or-3-headings)
- [Folding basics](https://linkarzu.com/posts/neovim/markdown-setup-2024/#folding-basics)
- [Andrew Courter video recommendation](https://linkarzu.com/posts/neovim/markdown-setup-2024/#andrew-courter-video-recommendation)
- [Fold with enter](https://linkarzu.com/posts/neovim/markdown-setup-2024/#fold-with-enter)
- [Accept completion with `ctrl+y` instead of enter](https://linkarzu.com/posts/neovim/markdown-setup-2024/#accept-completion-with-ctrly-instead-of-enter)
- [Working with marks](https://linkarzu.com/posts/neovim/markdown-setup-2024/#working-with-marks)
- [Make selected text a link](https://linkarzu.com/posts/neovim/markdown-setup-2024/#make-selected-text-a-link)
- [Paste github repo as link](https://linkarzu.com/posts/neovim/markdown-setup-2024/#paste-github-repo-as-link)
- [Increase decrease all markdown headings](https://linkarzu.com/posts/neovim/markdown-setup-2024/#increase-decrease-all-markdown-headings)
- [Line wrapping at 80 characters](https://linkarzu.com/posts/neovim/markdown-setup-2024/#line-wrapping-at-80-characters)
- [`textwidth = 80`](https://linkarzu.com/posts/neovim/markdown-setup-2024/#textwidth--80)
- [ProseWrap and .prettierrc.yaml](https://linkarzu.com/posts/neovim/markdown-setup-2024/#prosewrap-and-prettierrcyaml)
- [Disable autoformatting in certain sections](https://linkarzu.com/posts/neovim/markdown-setup-2024/#disable-autoformatting-in-certain-sections)
- [Add file path to current file](https://linkarzu.com/posts/neovim/markdown-setup-2024/#add-file-path-to-current-file)
- [Copy current file path to clipboard](https://linkarzu.com/posts/neovim/markdown-setup-2024/#copy-current-file-path-to-clipboard)
- [Navigate the help pages](https://linkarzu.com/posts/neovim/markdown-setup-2024/#navigate-the-help-pages)
- [See key maps](https://linkarzu.com/posts/neovim/markdown-setup-2024/#see-key-maps)
- [Paste with “p” in visual mode](https://linkarzu.com/posts/neovim/markdown-setup-2024/#paste-with-p-in-visual-mode)
- [Select text in a bullet point](https://linkarzu.com/posts/neovim/markdown-setup-2024/#select-text-in-a-bullet-point)
- [Don’t indent with tab](https://linkarzu.com/posts/neovim/markdown-setup-2024/#dont-indent-with-tab)
- [Open current file in finder](https://linkarzu.com/posts/neovim/markdown-setup-2024/#open-current-file-in-finder)
- [Alternate file](https://linkarzu.com/posts/neovim/markdown-setup-2024/#alternate-file)
- [How do I do the hyper+t+r and hyper+t+j](https://linkarzu.com/posts/neovim/markdown-setup-2024/#how-do-i-do-the-hypertr-and-hypertj)
- [See messages history](https://linkarzu.com/posts/neovim/markdown-setup-2024/#see-messages-history)
- [Dismiss all messages](https://linkarzu.com/posts/neovim/markdown-setup-2024/#dismiss-all-messages)
- [What plugins and tips do you use?](https://linkarzu.com/posts/neovim/markdown-setup-2024/#what-plugins-and-tips-do-you-use)
- [What do you want to see next?](https://linkarzu.com/posts/neovim/markdown-setup-2024/#what-do-you-want-to-see-next)
- [Markdown plugins](https://linkarzu.com/posts/neovim/markdown-setup-2024/#markdown-plugins)
- [bullets-vim/bullets.vim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#bullets-vimbulletsvim)
- [echasnovski/mini.ai](https://linkarzu.com/posts/neovim/markdown-setup-2024/#echasnovskiminiai)
- [arnamak/stay-centered.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#arnamakstay-centerednvim)
- [hedyhli/outline.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#hedyhlioutlinenvim)
- [lukas-reineke/headlines.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#lukas-reinekeheadlinesnvim)
- [nvim-pack/nvim-spectre](https://linkarzu.com/posts/neovim/markdown-setup-2024/#nvim-packnvim-spectre)
- [okuuva/auto-save.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#okuuvaauto-savenvim)
- [iamcco/markdown-preview.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#iamccomarkdown-previewnvim)
- [echasnovski/mini.surround](https://linkarzu.com/posts/neovim/markdown-setup-2024/#echasnovskiminisurround)
- [3rd/image.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#3rdimagenvim)
- [HakonHarnes/img-clip.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#hakonharnesimg-clipnvim)
- [jlanzarotta/bufexplorer](https://linkarzu.com/posts/neovim/markdown-setup-2024/#jlanzarottabufexplorer)
- [nvim-telescope/telescope.nvim](https://linkarzu.com/posts/neovim/markdown-setup-2024/#nvim-telescopetelescopenvim)
- [nvim-treesitter/nvim-treesitter](https://linkarzu.com/posts/neovim/markdown-setup-2024/#nvim-treesitternvim-treesitter)
- [LazyExtras](https://linkarzu.com/posts/neovim/markdown-setup-2024/#lazyextras)
- [lang.markdown](https://linkarzu.com/posts/neovim/markdown-setup-2024/#langmarkdown)
- [markdownlint-cli2](https://linkarzu.com/posts/neovim/markdown-setup-2024/#markdownlint-cli2)
- [markdown-toc](https://linkarzu.com/posts/neovim/markdown-setup-2024/#markdown-toc)
- [marksman](https://linkarzu.com/posts/neovim/markdown-setup-2024/#marksman)
- [formatting.prettier](https://linkarzu.com/posts/neovim/markdown-setup-2024/#formattingprettier)
- [epwalsh/obsidian.nvim (uninstalled)](https://linkarzu.com/posts/neovim/markdown-setup-2024/#epwalshobsidiannvim-uninstalled)
- [Improve the video next year](https://linkarzu.com/posts/neovim/markdown-setup-2024/#improve-the-video-next-year)
- [Timeline](https://linkarzu.com/posts/neovim/markdown-setup-2024/#timeline)
- [Start your 14 day FREE trial](https://linkarzu.com/posts/neovim/markdown-setup-2024/#start-your-14-day-free-trial)

## YouTube video

![](https://www.youtube.com/watch?v=c0cuvzK1SDo)

## IMPORTANT: 2025 version of this video

> I recently created the 2025 version of my markdown setup and workflow video

- Keep in mind that the 2024 guide is still relevant, as I only cover the new stuff in the 2025 video, for the things that haven’t changed, I still refer you to this 2024 guide
- The 2025 guide can be found here: [My complete Neovim markdown setup and workflow in 2025](https://youtu.be/1YEbKDlxfss)

![](https://www.youtube.com/watch?v=1YEbKDlxfss)

## If you like my content, and want to support me

- I create and edit my videos in an M1 mac mini, and it’s starting to stay behind in the editing side of things, tends to slow me down a bit, I’d like to upgrade the machine I use for all my videos to a `mac mini` with these specs:
- Apple M4 Pro chip with 14‑core CPU, 20‑core GPU, 16-core Neural Engine
- 24GB unified memory
- 1TB SSD storage
- 10 Gigabit Ethernet
- If you want to help me reach my goal, you can [donate here](https://ko-fi.com/linkarzu/goal?g=6)

[![Image](https://linkarzu.com/assets/img/imgs/250103-ko-fi-donate.avif)](https://ko-fi.com/linkarzu/goal?g=6)

## Discord server

- My discord server is now open to the public, feel free to join and hang out with others
- join the [discord server in this link](https://discord.gg/NgqMgwwtMH)

[![Image](https://linkarzu.com/assets/img/imgs/250210-discord-free.avif)](https://discord.gg/NgqMgwwtMH)

- [Twitter (or “X”)](https://x.com/link_arzu)
- [LinkedIn](https://www.linkedin.com/in/christianarzu)
- [TikTok](https://www.tiktok.com/@linkarzu)
- [Instagram](https://www.instagram.com/link_arzu)
- [GitHub](https://github.com/linkarzu)
- [Threads](https://www.threads.net/@link_arzu)
- [OnlyFans 🍆](https://linkarzu.com/assets/img/imgs/250126-whyugae.avif)
- [YouTube (subscribe MF, subscribe)](https://www.youtube.com/@linkarzu)
- [Ko-Fi](https://ko-fi.com/linkarzu/goal?g=6)

## How do you manage your passwords?

- I’ve tried many different password managers in the past, I’ve switched from `LastPass` to `Dashlane` and finally ended up in `1password`
- You want to find out why? More info in my article:
- [How I use 1password to keep all my accounts safe](https://linkarzu.com/posts/1password/1password/)

[![Image](https://linkarzu.com/assets/img/imgs/250124-1password-banner.avif)](https://www.dpbolvw.net/click-101327218-15917064)

- I use the [lazyvim.org](https://www.lazyvim.org/) distro, so my plugins and tips are optimized to be compatible with that the most, if using something different you might need to to a bit of tweaking, but you can grab the overall ideas and adapt them to your own config
- I use `macOS`, so keep that in mind too
- This is not a distribution, this is my personal setup, so one day I may use certain plugin, like `neo-tree`, and the following day I may completely disable it and instead switch to `mini.files`, in case you clone and pull, expect to see changes
- My entire neovim setup is in my github repo, so you can also grab it

## All links in the video description

- The following links will be in the YouTube video description:
- Each one of the videos shown
- A link to this blogpost

## Pending items

- These don’t have to be at a specific section, they can be anywhere in the file, I just leave them at the top because they break my `<C-Space` key

## Where are all these files?

- They’re in my [dotfiles](https://github.com/linkarzu/dotfiles-latest)
- Search for any keymap, for example `<leader>fD` in my keymaps file:
- `~/github/dotfiles-latest/neovim/neobean/lua/config/keymaps.lua`
- And you will be able to see the code related to that keymap
- I’m not giving you a `permalink`, as my dotfiles change quite often, so always check for the latest updates

## Markdown tips

### Better bullet points

- You’ll see what plugin we use later on
- When you are in a bullet point, and press enter, it automatically creates it below and respects indentation
- If you put a colon at the end, it will indent the next bullet point:
- Notice the indentation changed:
- And indented again
- If you press enter in a line that only has a bullet point, line below won’t have one

---

1. Numbers are also auto increased
2. This was added automatically

There’s much more that you can find in the github page

### Spell checking (works in tmux)

- To toggle spelling `<Leader>us`
- To jump between misspelled words use `[s` and `]s`
- To correct a word using suggestions the default is `z=`
- I created a keymap `<leader>mss` (markdown spelling)
- **This keymap only worked for me with `nvim_feedkeys` if you know why, please let me know in the comments**
- To add a word to your dictionary use `zg`
- I created a keymap `<leader>msg` (markdown good)
- If you added a word by mistake and want to remove it `<leader>msu`
- After you correct a word, if you want to repeat that and correct it across the file use `<leader>msr`
- **This isn’t working for me, will look at it another day, if you know how to fix it,**

> I’m not sure why, but if you use the dashboard-nvim plugin and press “s” to restore the session, but you do it really fast, the autocmd doesn’t kick in and spelling will be off, so when in the dashboard wait a few seconds before pressings “s”, will take a look at this issue another day

#### Spell dictionary

- The file with all the keywords I add is in my main neobean directory:
- `~/github/dotfiles-latest/neovim/neobean/spell/en.utf-8.add`
- Something that John McBride recommends:
- Don’t manually add words to that file, but instead add them with the mapping so that neovim recompiles the file
- Personally, I haven’t tested how this file across machines, but time will tell

#### Fix undercurl in tmux

- Special thanks to Folke for this tip
- I use both kitty and tmux, for this to work, you need to add the following lines to your tmux.conf file

`   | ```bash 1 2 3 4 5 6 7 8 9 10 11 ``` | ```rouge # Undercurl support (works with kitty) # Fix found below in Folke's tokyonight theme :heart: # https://github.com/folke/tokyonight.nvim#fix-undercurls-in-tmux # # After reloading the configuration, you also have to kill the tmux session for # these changes to take effect set -g default-terminal "${TERM}" # undercurl support set -as terminal-overrides ',*:Smulx=\E[4::%p1%dm' # underscore colours - needs tmux-3.0 set -as terminal-overrides ',*:Setulc=\E[58::2::%p1%{65536}%/%d::%p1%{256}%/%{255}%&%d::%p1%{255}%&%d%;m' ``` | | --- | --- |   `

- Go and see my tmux.conf file for the latest changes
- I changed the undercurl color and style in my neovim colorscheme settings, every time you make a change there you have to reload the tmux config, but also **kill the tmux session** or it won’t work

#### Lazyvim spell defaults

- There’s a default [Auto Command](https://www.lazyvim.org/configuration/general#auto-commands) (autocmd) in Folke’s lazyvim.org distro that is what enables spelling
- Also the lazyvim.org comes preconfigured with the [Option](https://www.lazyvim.org/configuration/general#options) `opt.spelllang = { "en" }` (English)

- Watch this great video by by John McBride if you want to learn more about spell:
- [Neovim: How to setup the spell checker](https://youtu.be/KoL-2WTlr04?si=3WKTc0RXWUQiY2vr)

### todo items `leader+td`

- I use the `todo` snippet to add it
- `<leader>td` (todo done)
- Configured in my keymaps
- `<leader>ta` (todo all)
- `<leader>tl` (todo list)
- Configured these keymaps in the telescope plugin

- `<leader>mt`
- This is to create a Table Of Contents
- It will add it at the top of the file if there’s not one, and if there is a TOC already, it will update it
- It doesn’t matter if the file has **front matter at the top** or not, the keymap will detect it and not cause problems
- To generate the TOC I use the `markdown-toc` plugin, and it’s installed as a LazyExtra, you’ll understand later

### Delete current file

- A lot of times, I want to remove the file I’m on without going out of neovim or without even opening my neovim file explorer
- `<leader>fD`
- **This is for macOS and uses the trash app, if you’re on Linux, modify the keymap**

### Create or jump daily note `hyper+t+r`

- I normally handle my notes as large files (kubernetes, docker, xcp-ng, etc), but there are times I don’t want to add stuff to one of those files and instead add it to my daily note
- Useful if for example if I want to add TODO items, they’ll be in my obsidian vault and I can see which ones are pending
- This will:
- Create a daily note with the `date-day` for example `2024-06-30-Sunday` inside the `obsidian_main/250-daily/2024/06-Jun` directory
- If the directories do not exist it will create them
- If the daily note doesn’t exist it will create it
- Create a new tmux session with the note name in detached mode and start neovim with the daily note
- If a tmux session with that name already exists, just switch to it

---

- I’ll let you know how I do `hyper+t+r` later on

---

> Make sure that the `~/github/dotfiles-latest/scripts/macos/mac/300-dailyNote.sh` script is executable

### Create headings and daily note

> I use this in my Obsidian vault

- This is useful in case I want to have stuff **linked** to my daily note
- I use markdown headings with date on a specific note `XOA for example`
- Then in obsidian I can go to a specific note, and see which headings are linked to that note, just so that I can keep track of what did each day, some sort of journal
- **These keymaps besides adding the heading, will also create the daily note if it does not exist**:
- If you don’t want to create the daily note, comment that line
- `<leader>jj`, `<leader>kk`, `<leader>ll`, `<leader>;;`, `<leader>uu`,`<leader>ii`

### View and paste images

- We’ll see how to set this up later

### Use snippets

- I use these in case I want to:
- Add a code block
- Add a link
- Add link in new tab
- Add a todo item

### Bold easily

- This needs the `mini.surround` plugin
- By default if you want to **bold some text**, you select it and do `2gsa*` or if you want to “unbold” it I normally do `gsd*.`
- I configured keymap `<leader>mb`

---

This is just a random paragraph with random text in it, it doesn’t serve any purpose but I just want to use it to demonstrate how multi line bold and unbold works

This is just a single line of text

### Jump between markdown headings

- **Follow markdown convention and use a single H1 heading in your file for this to work**
- Besides the outline plugin if I want to navigate between headings I use:
- `gj` and `gk`

#### lazyvim already uses default `gj` and `gk` mappings

- Remember that I use the `lazyvim.org` distro
- That distro already comes with some Default keymaps configured [that you can find here](https://www.lazyvim.org/configuration/general#keymaps)
- Some of these default keymaps are the `better up/down` ones found below:

`   | ```lua 1 2 3 4 5 6 7 8 9 ``` | ```rouge -- better up/down -- If there is no count (v:count == 0), pressing j will execute gj   -- Useful when dealing with wrapped lines in the buffer. -- If there is a count (v:count != 0), pressing j will execute j.   -- For example, if you press 3j to move down three lines map({ "n", "x" }, "j", "v:count == 0 ? 'gj' : 'j'", { expr = true, silent = true }) map({ "n", "x" }, "<Down>", "v:count == 0 ? 'gj' : 'j'", { expr = true, silent = true }) map({ "n", "x" }, "k", "v:count == 0 ? 'gk' : 'k'", { expr = true, silent = true }) map({ "n", "x" }, "<Up>", "v:count == 0 ? 'gk' : 'k'", { expr = true, silent = true }) ``` | | --- | --- |   `

- So by default my neovim “sends” `gj` when I press `j` and I can navigate through wrapped lines easily
- You might think that `gj` and `gk` mappings I added would break the default keymaps, but for some reason it still keeps working
- So with `j` and `k` I navigate through wrapped lines without issues

### Fold all level 2 or 3 headings

- I created 4 keymaps to fold:
- `<leader>mfj` (markdown fold 1)
- `<leader>mfk` (markdown fold 2)
- I know, it looks like `madafaka`, but it’s just the 2nd letter
- `<leader>mfl` (markdown fold 3)
- `<leader>mf;` (markdown fold 4)
- And to unfold:
- `<leader>mfu` (markdown fold undo)
- See the `Folding section` in the keymaps file

> DO NOT leave headings OF THE SAME LEVEL without any text between them or folding will not work properly

#### Folding basics

- There are several fold options worth knowing about
- `opt.foldlevel = 99`
- (default LazyVim)
- Sets the initial fold level when opening a file.
- With a high value like 99, it ensures that almost all folds are open when a file is opened.
- `opt.foldmethod = "expr"`
- (default LazyVim 0.10)
- Sets the method for defining folds
- Uses the expression defined in `foldexpr` to create folds. This method allows for highly customizable folding behavior based on the evaluated expression.
- `opt.foldexpr = "v:lua.require'lazyvim.util'.ui.foldexpr()"`
- (default LazyVim 0.10)
- Specifies the expression used to define folds
- Uses a lazyvim Lua function to dynamically determine fold levels
- `opt.foldtext = ""`
- (default LazyVim 0.10)
- Defines the text displayed for a closed fold
- An empty string means `foldtext` is disabled, and the line is displayed normally with highlighting and no line wrapping.

`   | ```bash 1 2 3 4 5 6 ``` | ```rouge :set foldlevel? \| set foldexpr? \| set foldmethod? \| set foldtext?  :set foldlevel? :set foldmethod? :set foldexpr? :set foldtext? ``` | | --- | --- | --- | --- | --- |   `

- There’s a great video about Folds by Andrew Courter:
- [Code Folding in Neovim](https://youtu.be/f_f08KnAJOQ)

### Fold with enter

- Normally you fold with `za` but I changed it to use enter `<CR>`

> [If you like my content, and want to support me](https://linkarzu.com/posts/neovim/markdown-setup-2024/#if-you-like-my-content-and-want-to-support-me)

### Accept completion with `ctrl+y` instead of enter

- I really hated this behaviour, maybe skill issue, but every time I was at the end of a line and hit enter, it would autocomplete a word instead of moving to the line below
- I change this in the `nvim-cmp.lua` file

### Working with marks

- Leave a mark somewhere you need to come back to
- While in normal mode, press `m` and then a letter `a-z` will create a mark
- Lowercase letters (a to z) are for marks local to the current buffer
- Uppercase letters (A to Z) create global marks that can be jumped to from any buffer
- To jump to a mark
- `'a` - (single quote) jump to the line of the mark in the first character
- \`a - (backtick), jumps to character in which mark was set originally
- To see all the marks use `:marks`
- `:delmarks a` would remove the mark a
- `:delmarks a j k l m z n` removes all the marks specified
- I created a keymap to delete all marks
- `<leader>md` (mark delete)

### Make selected text a link

- Regular link `<leader>mll` (markdown link)
- Link to lazyvim.org
- Link that opens in new tab `<leader>mlt` (markdown link tab)
- Link that opens in new tab

### Paste github repo as link

- I use this quite a lot, so decided to create a keymap
- `<C-g>` (github, and since you run it with ctrl, can run it in insert mode)
- Make sure you have **the main** github repo link in your clipboard first
- [folke/noice.nvim](https://github.com/folke/noice.nvim)
- [linkarzu/dotfiles-latest](https://github.com/linkarzu/dotfiles-latest)

### Increase decrease all markdown headings

- I have several **old** `.md` documents that do not follow markdown guidelines
- Some have more than one H1 heading, so I want to add one more `#` to each heading
- `<leader>mhI` and `<leader>mhD`
- These 2 don’t ask for confirmation and just increase all the headings

### Line wrapping at 80 characters

- I don’t like my **lines** to be longer than **80 characters**, helps me with readability and overall consistency of my files.
- If I open an obsidian markdown file in neovim, line lengths are all over the place, so I prefer to follow the markdown guidelines.
- To achieve this I do 2 things:

#### `textwidth = 80`

- Set the option `vim.opt.textwidth = 80` in `lua/config/options.lua`
- When text reaches this limit, it automatically wraps to the next line.
- This will automatically switch to the line below as you are typing and reach the 80 characters
- **This will NOT auto wrap:**
- Existing lines in a document after you enable the option
- Long lines that you paste into a file

#### ProseWrap and .prettierrc.yaml

- This requires the `prettier` plugin, we’ll install it later
- Configure the `proseWrap: "always"` option in the `.prettierrc.yaml` file
- This will autoformat existing lines over 80 characters and also long lines that you paste that exceed the 80 characters
- You will see how to enable prettier in the `LazyExtras` section

---

- I add the `~/github/dotfiles-latest/.prettierrc.yaml` file, to my `$HOME` directory
- I keep the file in my dotfiles and create a symlink in my home directory that points to the `.prettierrc.yaml` file

---

- [Source for the text below](https://prettier.io/docs/en/configuration.html)
- The configuration file will be resolved starting from the location of the file being formatted, and searching up the file tree until a config file is (or isn’t) found.
- Prettier intentionally doesn’t support any kind of global configuration. This is to make sure that when a project is copied to another computer, Prettier’s behavior stays the same. Otherwise, Prettier wouldn’t be able to guarantee that everybody in a team gets the same consistent results.

### Disable autoformatting in certain sections

- Prettier is enabled and will autoformat your file, but there are some times that you don’t need prettier to autoformat, example below:
- Notice that I’m also disabling markdownlint
- I have a keymap to add this `snippet`

> This is a message that renders correctly in the page because it’s not autoformatted

### Add file path to current file

- A lot of times I need the path of the current file to be added to the file itself **as a comment**
- This does not only work for markdown, but for any file type
- This uses `gcc` in the background, which is handled by the [echasnovski/mini.comment](https://github.com/echasnovski/mini.comment)
- So make sure that plugin is installed, comes with lazyvim.org distro by default
- `<C-z>`
- `Insert filename with path`

### Copy current file path to clipboard

- To copy the file path to the clipboard use `<leader>fp`

### Navigate the help pages

- If for example you’re setting up a keymap, or you want to understand what the commands on an existing keymap do, or basically, any command in neovim, use the help
- `<leader>sh`
- Then search for something `pwd` and navigate around “tags” with `shift+k`
- To go back to where you were after navigating to a tag, use `Ctrl-o`
- Close that pane with `<leader>wd` (window delete)

### See key maps

- `<leader>sk`

### Paste with “p” in visual mode

- This is not markdown specific, but overall neovim specific
- **DON’T** use `cmd+v` (macOS) to paste
- Paste with `p` (lowercase) or `P` (uppercase)

`   | ```bash 1 2 3 4 5 6 7 8 ``` | ```rouge Laborum aute consectetur sit reprehenderit. Laborum aute consectetur sit reprehenderit.  Duis consectetur laborum deserunt. Duis consectetur laborum deserunt.  Minim tempor ullamco do eu pariatur minim. Minim tempor ullamco do eu pariatur minim. ``` | | --- | --- |   `

### Select text in a bullet point

- Press `ctrl+space`
- Keep pressing it to keep selecting
- To go back use `backspace`
- Adding 2nd bullet point just for testing

---

- This breaks if you have a markdown comment below in the file, it will jump there, not sure why
- **If you know why this is, let me know down in the comments**

### Don’t indent with tab

- **Don’t try this**, because if you use snippets, this will interfere with them and you won’t be able to jump to the next field using tab
- If you use tab for something else, you’ll lose it
- To indent use defaults:
- In insert mode use `<C-T>` and `<C-D>`
- In normal mode `>>` and `<<`

### Open current file in finder

- `<leader>fO` (uppercase O as in “Oscar”)
- This is for macOS, not sure if works on Linux, but modify it

### Alternate file

- I have a video about this
- [Alternate between the last 2 tmux sessions or neovim buffers, blazingly fast, with a keymap](https://youtu.be/HWs3YEj05K4)
- With `space+space` I alternate between the last 2 buffers
- With `ctrl+b space` I alternate between the last 2 tmux sessions

### How do I do the hyper+t+r and hyper+t+j

- These are tmux commands that I’m executing
- I’m using The Primeagen’s tmux sessionizer script, I explain everything in detail in the video below
- [Primeagen’s tmux-sessionizer and tmux-sshonizer-agen](https://youtu.be/MCbEPylDEWU)

---

- If on macOS, I also use the BetterTouchTool app, which allows me to run hyper+t+j from any app, not just from the terminal itself
- I have a video in which I go over BetterTouchTool in great detail:
- [Advanced BetterTouchTool shortcuts that execute a set of actions like scripts](https://youtu.be/RBHCgEEluD0)

### See messages history

- This comes by default with lazyvim, but you will forget
- These are the messages that show up with [folke/noice.nvim](https://github.com/folke/noice.nvim)
- You’ll see the pop-up, but a lot of times you will want to see them again
- There’s a **default** lazyvim keymap `<leader>snh` (search noice history)
- Close the window that shows below with `<leader>wd` (window delete)
- Or use the command `:NoiceHistory`

### Dismiss all messages

- If you open neovim on an old outdated machine, you will get hundreds of noice messages on the screen, sometimes occupying the entire screen and you won’t be able to read
- Clear them all with `<leader>snd` (search noice dismiss)

`   | ```bash 1 ``` | ```rouge :lua local messages = {"System update available. System update available. System update available.","Backup completed successfully. Backup completed successfully. Backup completed successfully.","New email received. New email received. New email received.","Reminder: Meeting at 3 PM. Reminder: Meeting at 3 PM. Reminder: Meeting at 3 PM.","Low disk space on drive C:. Low disk space on drive C:. Low disk space on drive C:.","Software update installed. Software update installed. Software update installed.","Battery level critical. Battery level critical. Battery level critical.","File download completed. File download completed. File download completed.","New message from John. New message from John. New message from John.","Security scan completed. Security scan completed. Security scan completed.","Application crash detected. Application crash detected. Application crash detected.","Printer is out of paper. Printer is out of paper. Printer is out of paper.","Wi-Fi connection lost. Wi-Fi connection lost. Wi-Fi connection lost.","New friend request received. New friend request received. New friend request received.","Weather alert: Heavy rain expected. Weather alert: Heavy rain expected. Weather alert: Heavy rain expected.","VPN connection established. VPN connection established. VPN connection established.","System reboot required. System reboot required. System reboot required.","Bluetooth device connected. Bluetooth device connected. Bluetooth device connected.","Scheduled maintenance at midnight. Scheduled maintenance at midnight. Scheduled maintenance at midnight.","Password change reminder. Password change reminder. Password change reminder."} for _, message in ipairs(messages) do vim.api.nvim_echo(, false, {}) end ``` | | --- | --- |   `

## What plugins and tips do you use?

- Let me know down below, there’s also cool recommendations that can help me improve my setup

## What do you want to see next?

- Video in which I go over the colorscheme I use in neovim, SketchyBar, kitty, tmux, markdown headings, etc

## Markdown plugins

- These are sorted by my personal preference, most preferred ones at the top
- **Star the repos below if you like the plugins**

### bullets-vim/bullets.vim

- [bullets-vim/bullets.vim](https://github.com/bullets-vim/bullets.vim)
- This is one of my favorite ones

### echasnovski/mini.ai

- [echasnovski/mini.ai](https://github.com/echasnovski/mini.ai)
- This is a beauty, it comes installed with `lazyvim.org` by default, I think Folke disabled it once, and I almost died, so in case the following stop working, you know this is the plugin
- `viq` or `vaq` select inside or around quotes
- `Text inside backticks`
- “Text inside double quotes”
- ‘Text inside single quotes’
- `vig` select entire file
- `vio` or `vao`
- I select text inside code blocks A LOT, and I mean A LOT
- So this is definitely one of my personal favorites
- `vi` or `va` to see what other options are useful for you

`   | ```bash 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 ``` | ```rouge #!/usr/bin/env bash  # Filename: ~/github/scripts/macos/mac/300-dailyNote.sh  # Get current date components current_year=$(date +"%Y") current_month_num=$(date +"%m") current_month_abbr=$(date +"%b") current_day=$(date +"%d") current_weekday=$(date +"%A")  # Construct the directory structure and filename note_dir=~/github/obsidian_main/250-daily/${current_year}/${current_month_num}-${current_month_abbr} note_name=${current_year}-${current_month_num}-${current_day}-${current_weekday} full_path=${note_dir}/${note_name}.md # Use note name as the session name tmux_session_name=${note_name} ``` | | --- | --- |   `

### arnamak/stay-centered.nvim

- [arnamak/stay-centered.nvim](https://github.com/arnamak/stay-centered.nvim)
- I like my cursor to always be in the middle, specially if I’m at the bottom of a file, yes, you can configure a keymap, but this plugin works great for me
- I recently noticed there’s a new plugin inspired by this one but I haven’t tried it [joshuadanpeterson/typewriter.nvim](https://github.com/joshuadanpeterson/typewriter.nvim)
- [Discussion in reddit](https://www.reddit.com/r/neovim/comments/1dg8myh/introducing_typewriternvim_a_neovim_plugin_that/)

### hedyhli/outline.nvim

- [hedyhli/outline.nvim](https://github.com/hedyhli/outline.nvim)
- I open it with `<leader>o`
- I have a video about this plugin
- [markdown outline in lazyvim](https://youtu.be/UqLEKe7o2zg)

### lukas-reineke/headlines.nvim

- [lukas-reineke/headlines.nvim](https://github.com/lukas-reineke/headlines.nvim)
- You like the way these beautiful headlines look too?

### nvim-pack/nvim-spectre

- [nvim-pack/nvim-spectre](https://github.com/nvim-pack/nvim-spectre)
- Find and replace text `<leader>sr`
- I normally do `<leader>uw` to wrap when in the plugin
- I changed the highlight colors in `eldritch.lua` because I could barely see the default ones

### okuuva/auto-save.nvim

- [okuuva/auto-save.nvim](https://github.com/okuuva/auto-save.nvim)
- This is a really controversial plugin, some people love autosave, some other ones hate it
- Personally I like autosaving, this plugin will auto save for you when you exit insert mode
- Also if you focus another app or you leave the buffer, even if you’re on insert mode, it will autosave
- I have a video about this plugin, you can find it [here](https://youtu.be/W5fjlU4tSpw)

### iamcco/markdown-preview.nvim

- [iamcco/markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim)
- This already comes installed with `lazyvim.org` by default, I just changed the mapping to open it with `<leader>mp` (markdown preview)
- I really love to use it if I need to print a markdown file as PDF, looks quite nice and you can toggle dark light mode
- If studying, your teachers will think to themselves, how did this guy print this PDF so beautifully?
- Just careful with code blocks when converting to PDF

### echasnovski/mini.surround

- [echasnovski/mini.surround](https://github.com/echasnovski/mini.surround)
- **Add a surrounding**
- If I want to surround a `part of the text`
- I select it in visual mode, then press `gsa"`
- I normally use “, \`, ‘, (, \[, {
- **Replace a surrounding**
- Let’s say I have this “surrounded text”
- And I want to change it with ‘surrounded text’
- Place the cursor anywhere inside the “ “
- Then press `gsr"'`
- goto, surround, replace, current surrounding, new surrounding
- **Remove a surround**
- If we have ‘this surrounded text’
- Place cursor anywhere inside the surrounding and remove it with `gsd'`

### 3rd/image.nvim

- [3rd/image.nvim](https://github.com/3rd/image.nvim)
- View images in neovim
- I use this plugin with the one below `HakonHarnes/img-clip.nvim`

### HakonHarnes/img-clip.nvim

- [HakonHarnes/img-clip.nvim](https://github.com/HakonHarnes/img-clip.nvim)
- Paste images in neovim and save them in different formats, I prefer `.avif` or `.webp` as their size is way smaller compared to `.png` when dealing with images with transparent backgrounds
- I use this plugin always with `3rd/image.nvim`

---

- I go over how to set up both plugins in my video:
- [View and paste images in Neovim like in Obsidian](https://youtu.be/0O3kqGwNzTI)

### jlanzarotta/bufexplorer

- [jlanzarotta/bufexplorer](https://github.com/jlanzarotta/bufexplorer)
- Allows me to easily close buffers I don’t need with `d`
- Sort ordering MRU (Most Recently Used) by default
- Navigation with this plugin and tmux sessions with `hyper+b s` is basically the same, can navigate using `j` and `k` in both tools
- I use the same sorting in my tmux sessions, sort them by time so that the last used ones show at the top, this is covered in my video:
- [Alternate between the last 2 tmux sessions or neovim buffers, blazingly fast, with a keymap](https://youtu.be/HWs3YEj05K4)
- By default, in lazyvim with `<S-h>` and `<S-l>` you navigate between the prev and next buffers, but I changed both of those to open BufExplorer instead
- You can also use telescope `<leader>fb` but I’m used to BufExplorer

### nvim-telescope/telescope.nvim

- [nvim-telescope/telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)
- This doesn’t even need a mention, I use it to find files and grep for text
- I just swap `ff` and `fF` because I like finding files at the root directory with `ff`

### nvim-treesitter/nvim-treesitter

- [nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
- I want the code blocks in my markdown files to have proper syntax highlighting
- If one of your languages doesn’t show up properly, add it to treesitter, I statically configure it in the plugin file `treesitter.lua`
- Use `:checkhealth` to see which ones are installed

`   | ```sql 1 2 3 4 ``` | ```rouge SELECT id, name FROM users WHERE age > 18 ORDER BY name; ``` | | --- | --- |   `

`   | ```go 1 2 3 4 5 6 7 ``` | ```rouge package main  import "fmt"  func main() {     fmt.Println("Hello, Go!") } ``` | | --- | --- |   `

`   | ```bash 1 2 3 4 5 ``` | ```rouge #!/bin/bash echo "Hello, Bash!" for i in {1..5}; do     echo "Number $i" done ``` | | --- | --- |   `

`   | ```yaml 1 2 3 4 5 6 ``` | ```rouge version: "3" services:   web:     image: nginx     ports:       - "80:80" ``` | | --- | --- |   `

`   | ```json 1 2 3 4 5 ``` | ```rouge {   "name": "John Doe",   "age": 30,   "city": "New York" } ``` | | --- | --- |   `

`   | ```cpp 1 2 3 4 5 6 ``` | ```rouge #include <iostream>  int main() {     std::cout << "Hello, C++!" << std::endl;     return 0; } ``` | | --- | --- |   `

```csv
name,age,city
John Doe,30,New York
Jane Smith,25,Los Angeles
Mike Johnson,40,Chicago
```

`   | ```java 1 2 3 4 5 ``` | ```rouge public class HelloWorld {     public static void main(String[] args) {         System.out.println("Hello, Java!");     } } ``` | | --- | --- |   `

`   | ```javascript 1 2 3 4 ``` | ```rouge function greet() {   console.log("Hello, JavaScript!"); } greet(); ``` | | --- | --- |   `

`   | ```python 1 2 3 4 ``` | ```rouge def greet():     print("Hello, Python!")  greet() ``` | | --- | --- |   `

`   | ```dockerfile 1 2 3 ``` | ```rouge FROM ubuntu:latest RUN apt-get update && apt-get install -y nginx CMD ["nginx", "-g", "daemon off;"] ``` | | --- | --- |   `

`   | ```html 1 2 3 4 5 6 7 8 9 ``` | ```rouge <!doctype html> <html>   <head>     <title>Hello, HTML!</title>   </head>   <body>     <h1>Hello, World!</h1>   </body> </html> ``` | | --- | --- |   `

`   | ```css 1 2 3 4 5 ``` | ```rouge body {   font-family: Arial, sans-serif;   background-color: #f0f0f0;   color: #333; } ``` | | --- | --- |   `

### LazyExtras

- You can manage these in the `lua/config/lazy.lua` file or with `:LazyExtras`
- I’m not sure if you can also manage them in the `lazyvim.json` file as well
- I prefer to configure the extras in the `lazy.lua` file, because I want to have the settings on each machine, but if that’s not your case, you can enable the extras on each machine with `:LazyExtras`

#### lang.markdown

- This includes:
-  headlines.nvim  markdown-preview.nvim  mason.nvim  nvim-lspconfig  conform.nvim  none-ls.nvim  nvim-lint
- If you go to the lazyvim.org website in the extras -> [lang -> markdown](https://www.lazyvim.org/extras/lang/markdown) section (notice it matches the Extra’s name)
- You’ll be able to see which plugins **Mason will install**
- Mason is a package manager for Neovim
- In this case it will install `markdownlint-cli2` and `markdown-toc`, it also installs `marksman` but not sure why it’s not shown on the page

##### markdownlint-cli2

- [DavidAnson/markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)
- This is the plugin that shows me markdown warnings when the line length is exceeded, I have a duplicate or invalid heading, etc
- I love it, helps me follow markdown “best practices”

---

- To modify the warning settings, copy the following file `~/github/dotfiles-latest/.markdownlint.yaml`
- To each dir in which you want the settings to be applied, for example, I copied it to my `github/obsidian_main` and `github/linkarzu.github.io` dir.
- Copy it to the working directory, you can see it with `:pwd`

---

- If, you need to change markdownlint settings **INSIDE a specific file**, add this heading as an example
- For example, I had a file in which I configured prettier’s print width to 100 instead of 80, so I added this so that the markdownlint stopped showing me errors

`   | ```md 1 2 3 4 ``` | ```rouge <!-- markdownlint-configure-file { "MD013": { "line_length": 100 } } -->  <!-- markdownlint-disable --> <!-- markdownlint-restore --> ``` | | --- | --- |   `

---

- See all the warnings with `<leader>xx`
- Navigate between warnings with `[d` or `]d` (prev or next diagnostic)

- [jonschlinkert/markdown-toc](https://github.com/jonschlinkert/markdown-toc)
- This is the plugin that adds the TOC at the top of the file

##### marksman

- [artempyanykh/marksman](https://github.com/artempyanykh/marksman)
- Using LSP protocol it provides completion, goto definition, find references, rename refactoring, diagnostics, and more. In addition to regular Markdown, it also supports wiki-link-style references that enable Zettelkasten-like, note taking
- Go to the obsidian `XOA` file under `Create Windows 11 VM`
- `K` (uppercase `k`) over a link allow me to hover
- `KK` (press it twice) and you can navigate that file in the hover menu
- `gd` (go to definition) allows me to go the file that a link points to

#### formatting.prettier

- This includes:
-  mason.nvim  conform.nvim  none-ls.nvim
- If you go to the lazyvim.org website in the extras -> [formatting -> prettier](https://www.lazyvim.org/extras/formatting/prettier) section (notice it matches the Extra’s name)
- You’ll be able to see which plugins **Mason will install**, which is only `prettier`

---

- Prettier is the one that automatically formats my markdown files
- It removes extra blank lines
- Removes blank spaces at the end of a line
- But also messes up my chirpy tips because it format things
- You can ignore some parts from formatting, will show you how below
- I like following markdown guidelines, so I don’t like my lines to be longer than 80 characters, I like to enable wrapping for them

### epwalsh/obsidian.nvim (uninstalled)

- [epwalsh/obsidian.nvim](https://github.com/epwalsh/obsidian.nvim)
- I used this plugin for a few days, but uninstalled as I didn’t find much use for my personal workflow
- Before this I used `marksman` so if I press `gd` by default it takes me to the file I need
- **Please let me know in the comments what use case you find with this plugin**
- P.D I like to keep my `conceallevel = 0`
- If set to 0 it shows all the symbols in a file, like bullet points and code block languages, obsidian.nvim works better with 1 or 2

- As the “viejas” say in my country “If God gives me license” I’ll make a follow up video next year with the things that changed between now and then

## Timeline

`   | ```bash 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 ``` | ```rouge 0:00 - Bullet points 0:57 - Spell checking 4:12 - Where are the files? 4:51 - todo items 6:34 - add TOC 7:49 - Delete current file 8:27 - Daily note with hyper+t+r 9:38 - Add headings and daily note 11:11 - View and paste images 12:00 - Snippets 13:11 - Bold 14:33 - Jump markdown headings 15:33 - Fold all headings 17:09 - Fold with enter 17:23 - If you want to support me, I appreciate it 18:50 - Completion with ctrl+y 19:24 - Marks 20:13 - Make selected text a link 20:44 - Paste github repo link 21:06 - Increase or decrease headings 21:45 - Line wrapping 23:33 - Disable autoformatting in sections 24:23 - Add file path to file 24:42 - Copy file path to clipboard 25:07 - Navigate the help pages 25:57 - Search key maps 26:20 - Paste with p 26:56 - Select text in a bulletpoint 27:40 - Dont indent with tab 28:24 - Open current file in finder 28:35 - Alternate file 29:26 - How do I hyper+t+r 30:15 - See messages history 30:37 - Dismiss all messages 31:03 - Share your plugins 31:28 - Plugins section 31:57 - bullets.vim 32:10 - mini.ai 33:24 - stay-centered.nvim 33:50 - outline.nvim 34:15 - headlines.nvim 34:45 - nvim-spectre 36:01 - auto-save.nvim 36:35 - markdown-preview.nvim 37:01 - mini.surround 38:19 - image.nvim and img-clip.nvim 38:47 - BufExplorer 40:10 - Telescope.nvim 40:50 - nvim-treesitter 41:19 - LazyExtras 43:14 - markdownlint-cli2 45:40 - marksman 46:41 - prettier 47:46 - obsidian.nvim 48:23 - see you next year 48:44 - outro ``` | | --- | --- |   `

`   | ```bash 1 2 3 4 5 6 ``` | ```rouge 29:23 - RECOMMENDATION alternate file 29:36 - RECOMMENDATION tmux-sessionizer 29:48 - RECOMMENDATION BetterTouchTool 34:11 - RECOMMENDATION outline.nvim 36:30 - RECOMMENDATION auto-save.nvim 38:44 - RECOMMENDATION view paste images neovim ``` | | --- | --- |   `

## Start your 14 day FREE trial

[Start your 14 day FREE trial](https://www.dpbolvw.net/click-101327218-15917064)

[![Image](https://linkarzu.com/assets/img/imgs/250124-1password-banner-bottom.avif)](https://www.dpbolvw.net/click-101327218-15917064)

This post is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) by the author.

Share