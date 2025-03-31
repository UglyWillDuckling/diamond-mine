---
author:
  - "[[Travis Media]]"
  - "[[Travis Rodgers]]"
created: 2025-03-28
published: 2021-07-19
source: https://travis.media/blog/top-10-oh-my-zsh-plugins-for-productive-developers/
tags:
  - article/zsh
  - article/omz
about:
  - "[[omz]]"
---
- [x] #task look at [[Top 10 Oh My Zsh Plugins]] ✅ 2025-03-28
___

Z shell is a powerful terminal and popular alternative to bash. Oh My Zsh is an open source framework for Zshell with many themes and plugins. In this post, I’ll share my top 10 plugins and how they can make developers who use them, more productive.

## First, How to Install These Plugins

1. In your terminal open ~/.zshrc with vi or nano (or notepad/code editor if your a bum)
2. Add the desired plugins to your plugin list with spaces between like so:
```shell
plugins=(git kubectl history emoji encode64)
```

## 1\. Zsh Autosuggestions

As you type, you’ll see a suggested completion come up in a faded gray color.

If you hit the right arrow key, it will fill in the suggestion. If you hit tab, it will list more suggestions below it. Continue to hit tab to cycle thorough.

I could honestly NOT survive anymore without the [Zsh Autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) plugin.

***Note***: This is the only plugin that requires you to actually [install](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md) it first.

![oh my zsh autosuggestion plugin](https://travis.media/_astro/zsh-autosuggestions-gif.BIpJRlp5_8emPW.webp)

## 2\. Sudo

You know when you type in a command that fails because you didnt run sudo? Either you have to retype it with sudo at the front or hit the up arrow and then arrow back to the beginning of the sentence?

Well, the [sudo](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo) plugin takes what you just typed and adds a sudo at the beginning for you.

The shortcut is to hit the escape key twice.

![oh my zsh sudo plugin](https://travis.media/_astro/sudo.Cwus_Oy7_Z2ciF6Q.webp)

## 3\. Web Search

Imagine…you’re in the terminal and you need to google something.

No need to switch over to your browser, just run the search from your terminal with the [Web Search](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/web-search) plugin.

![oh my zsh web search plugin](https://travis.media/_astro/web-search-gif.oHICxPXt_1kzkg7.webp)

## 4\. Copydir

Sometimes you are deep in a folder and remember that you have to go back to update another file in the parent.

You don’t want to have to go back out and re-input that long path over again.

Well, you don’t. You can use the [Copydir](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copydir) plugin to copy the path to your current directory to the clipboard.

Copy it. Go back out and do what you have to do. Then cd paste that bad boy back in.

![oh my zsh copydir plugin](https://travis.media/_astro/copydir-gif-zsh.BOMydyWz_1qr3eV.webp)

## 5\. Copyfile

Copy the contents of a file to your clipboard.

It’s a capability you don’t know you need until you need it. You can get ahead of the game now with the [copyfile](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copyfile) plugin.

![oh my zsh copyfile plugin](https://travis.media/_astro/copyfile-gif-zsh.DAVL2GVb_ZeSsYh.webp)

## 6\. Copybuffer

[Copybuffer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copybuffer) is a plugin that allows you to copy the text currently typed in the command line.

I know, I know… you can’t think of a specific scenario where you need this at the moment. But you will.

Ctrl+O copies the text to the clipboard.

![oh my zsh copybuffer plugin](https://travis.media/_astro/copybuffer-gif-zsh.CX4p-Br7_Z1693YW.webp)

## 7\. Dirhistory

This one is powerful.

Alt+Left takes you into the previous directory you were in. Alt+Right reverts that (moves you forward). And alt+up puts you in the parent directory.

See below how efficient the [dirhistory](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dirhistory) plugin is.

![oh my zsh dirhistory plugin](https://travis.media/_astro/dirhistory-zsh-gif.BDCkmSKG_IOvAw.webp)

## 8\. Zsh Reload

***This plugin is now deprecated. You can run the command “exec zsh” instead.***

You know when you make changes to.bashrc or.bash\_history or.zshrc, and you have to reopen the terminal or “source” it to refresh.

Well now just type src and hit enter to refresh the zsh session.

This [plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/zsh_reload) is a real time saver.

![oh my zsh zshreload plugin](https://travis.media/_astro/zsh-reload-gif.Bh9MUBwx_ZbsOBz.webp)

## 9\. History

The History command on any Unix system will show us a long list of commands that we have run in the past.

And if we want to recall a command from last week that we used, we grep it.

This [plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/history) makes it as simple as a few keystrokes to search for past commands.

h - prints your history  
hs \[searchterm\] - searches your history with grep  
hsi \[serachterm\] - same as above but case insensitive.

![oh my zsh history plugin](https://travis.media/_astro/history-zsh-gif.DeuGlU2C_Z10Oyoc.webp)

## 10\. Json Tools

Don’t you hate to make an api call or curl request and return a bunch of jumbled json?

This [plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jsontools) has a number of neat capabilities, but I mainly use it to pretty print json.

Just pipe your call with | pp\_json

![oh my zsh jsontools plugin](https://travis.media/_astro/jsontools-zsh-gif.Cz2JQzsR_Zmr5zO.webp)

## Bonus: OSX

[![udemy python course recommendation](https://travis.media/_astro/recommended-python-course.CEqqUuK3_Z3AAN.webp)](https://travis.media/favorite-udemy-course-of-2021-as-a-software-developer/)

For you Mac users, don’t miss these. I honestly could do a whole post on this [plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/osx).

***The osx plugin is now deprecated and has been renamed to macos. It’s all the same functionality and can be found [here](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/macos). Be sure to update the name in your.zshrc plugins.***

Here are a few of my favorites:  

1. ofd - Opens the current directory in a Finder window
2. pfd - Prints the path of the frontmost Finder window
3. cdf - cd to the current Finder selection.
4. man-preview - Opens a specified man page in Preview app
5. tab - Opens current directory in new tab
6. showfiles/hidefiles - shows or hides hidden files

What are your favorite terminal plugins for productivity?

Share: