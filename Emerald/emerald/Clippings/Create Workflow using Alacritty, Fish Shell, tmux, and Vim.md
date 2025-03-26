---
author:
  - "[[Arnab Shil]]"
created: 2025-03-25
published: 2021-05-31
source: https://ruddra.com/alacritty-fish-tmux-vim/#tmux
tags:
  - article/tmux
  - article/alacritty
---
Photo by [Alvaro Reyes](https://unsplash.com/@alvarordesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/workflow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Even if you use Vim, it does not mean that you have to code in a plain, stuttering, and boring terminal. In this article, we are going to see how to set up a beautiful interface for coding, which is highly configurable yet highly automated. Without further aduo, let’s go!!

## Alacritty

Alacritty is a GPU accelerated terminal powered by OpenGL. It renders font nicely and being GPU accelerated makes this terminal even faster. Before using Alacritty, I used the MacOS terminal and items2. The MacOS Terminal does not render 256 color palette. On the other hand, iterm2 had issues with scrolling. I could see history in alternate mode and see alternate screens in scrolling back. Moreover, the coding experience was a bit sluggish and font rendering was not sharp enough for me, even with antialiasing. Thus I started using Alacritty. Installation instruction is available in their [repository](https://github.com/alacritty/alacritty). Here is my configuration for development:

```
window:

  dynamic_padding: false

  startup_mode: Maximized

  decorations: transparent

  padding:

    x: 0

    y: 25

font:

  normal:

    family: OperatorMono Font

    style: Light

  bold:

    family: OperatorMono Font

    style: Book

  italic:

    family: OperatorMono Font

    style: Light Italic

  bold_italic:

    family: OperatorMono Font

    style: Book Italic

  size: 18.0

  offset:

    x: 0

    y: 0

  glyph_offset:

    x: 0

    y: 0

  use_thin_strokes: true

# for tmux and fish shell. will discuss it later
```

This configuration gives a clutter-free look to the terminal:

The full configuration can be found in this [gist file](https://gist.github.com/ruddra/900e48cb65645ccfcf57545c7e192972).

## Fish Shell

Out of the box, [Fish Shell](https://fishshell.com/) has an inline auto-complete suggestion, 100000 line history, syntax highlight, copy-paste from X clipboard(not primary, useful for vim), and so on. You will need a package manager. I use [Fisher](https://github.com/jorgebucaran/fisher) for that, not Oh My Fish. To make it look nice, you can use themes like tide, bobthefish, starship, etc. Optional: I use Fish Shell only in Alacritty, other terminals still use ZSH. I have already shared the configuration about alacritty, now just add the following code to use fish shell.

```
shell:

  program: /usr/local/bin/fish
```

At `shell>program` path, I am putting the Fish Shell executable file. Then Alacritty automatically runs this program whenever it starts up.

After using ZSH for more than 5 years, I have moved on to Fish Shell. I like it mostly because of inline auto-complete suggestions, a nice theme and functions. The first two features are also available in ZSH, but I wanted to load some scripts on-demand basis, not always. So I wrote some functions inside `~/.config/fish/functions/` folder, and I utilized tmux to load those functions whenever I want to create a session for a project. Will discuss more about how to use tmux in next section.

## tmux

[tmux](https://github.com/tmux/tmux) is a terminal multiplexer. It lets you use multiple applications in one terminal, attach detach programs to the session while preserving session. tmux is a server, that is why if you close your terminal, you can resume back to where you left off using tmux. I prefer tmux because I can create sessions for each application along with additional windows, where I usually run the application. These scripts are built using Fish Shell. Here is an example:

1. I am creating a Fish Shell function, which is saved in `~/.config/fish/functions/develop.fish`.
```
#fish shell configuration

function develop

    tmux -neww session_name: -n window_name -d

end
```
1. updating `~/.tmux.config` file to add a keybinding, so that I can load the session from tmux:
```
bind-key -r l run-shell "develop"
```
1. Now restart the tmux server by `tmux kill-server` and run tmux again by entering `tmux` command in terminal. Now press **ctrl-b-l**, it will automatically create a session with a window attached to it.

By the way, if you add this in the Alacritty configuration:

```
shell:

  program: /usr/local/bin/fish

  args:

    - -l

    - -c

    - "tmux attach || tmux"
```

Then tmux will automatically started whenever you start Alacritty. Here you will see I am sending arguments `tmux attach || tmux` in `shell` section of the yml file. That means, it will automatically create a tmux server, or attach to an existing session.

## Vim

Now it is time to use Vim or Neo Vim inside tmux session. The existing `develop.fish` script from the previous section can be used, where you can send some keys to a tmux window, like this:

```
function develop

    tmux -neww session_name: -n window_name -d

    tmux send-key -t session_name:window_name 'vim /path/to/project'

end
```

Then if you kill and start tmux server again, press `ctrl-a-l`, it will not just open a tmux session, it will also start the vim at the project path. How cool is that!! Now with only three keystrokes, you can start your project 😄.

## Save configuration

All the configurations are done and now it is time for stroing them. As many applications use `~/.config` folder, you can just use Git to store that folder in a repository. If you use Neo Vim, then it will store the configurations in `~/.config/nvim` folder (if you have not configured otherwise). Alacritty uses `~/.config/alacritty.yml` file as default configuration. Fish Shell the configurations are stored in `~/.config/fish` folder. But tmux uses `~/.tmux.config` file for loading its configuration. But that is fine, because you can just create a file named `~/.config/.tmux.config`, and source it from there. Like this:

```
source-file ~/.config/.tmux.conf
```

## In conclusion

The combination of Alacritty, Fish Shell/Oh My ZSH, tmux, and Vim gives a better experince in coding. I hope this article helps you to improve your workflow by using these tools. Thank you for reading. Cheers!!

**Last updated**: Mar 07, 2025