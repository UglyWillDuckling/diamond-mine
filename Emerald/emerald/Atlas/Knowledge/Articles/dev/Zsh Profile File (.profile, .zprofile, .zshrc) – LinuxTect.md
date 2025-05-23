---
author:
  - "[[İsmail Baydan]]"
created: 2025-05-22
published: 2022-09-21
source: https://linuxtect.com/zsh-profile-file-profile-zprofile-zshrc/
tags:
  - article/zsh
about: "[[zsh]]"
---
The **zsh** is not popular as bash but has a lot of users who passionately love it. Especially by using the **oh-my-zsh** plugin, the zsh becomes more powerful. But as a non-standard shell for the major Linux distributions, it can be a bit difficult to configure it, especially for the.profile file. The.profile file is used by bash to load some configuration about the user but the zsh does not load the.profile.

## Zsh Profile.zprofile

The zsh shell provides the **.zprofile** under the user home directory in order to load profile related configuration. The path is **~/.zprofile** and can be used like a bash profile file with zsh commands. On the other side, zsh does not loads the **.profile** or **~/.profile** file. By default, the ~/.zprofile file is not created but you can create the.zprofile file easily with the following command.

```
$ touch ~/.zprofile
```

## Zsh New Shell Configuration.zshrc

When a new terminal or shell is opened the **~/.zshrc** file is loaded and the related configuration is applied. The.zshrc file contains some commands to configure the newly opened shell. This is different than the.zprofile file which is executed when the user logs in. The default.zshrc file is like below which contains configuration about;

- **ZSH\_THEME** is used to set the theme of the zsh shell.
- **ZSH** is used to set zsh installation.
```
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/home/ismail/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run \`alias\`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
```

## Zsh Shell Environment Configuration

The zsh also provides different configuration files other than the `zshrc`. The `zshenv` configuration file can be used to configure the shell. This configuration file is read every time a shell is started. The zshenv can be described as user level or system level like below.

**User Level zshenv:**

```
~/.zshenv
```

**System Level zshenv:**

```
/etc/zshenv
```

## Zsh Login Configuration

We can use the zsh as an ineractive login shell and set some configurations when the user login with the zsh. The `zlogin` can be used to set login configuration with the zsh.

**User Level zshlogin:**

```
~/.zlogin
```

**System Level zshenv:**

```
/etc/zlogin
```

## Zsh Logout Configuration

Similar to the zlogin configuration file we can also set configuration when a user logout with the zsh. The `zlogout` file is used to specify configuration for the user logout with the zsh.

**User Level zlogout:**

```
~/.zlogout
```

**System Level z** logout**:**

```
/etc/zlogout
```