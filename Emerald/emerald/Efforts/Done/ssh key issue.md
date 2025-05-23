---
related:
  - "[[ssh agent]]"
  - "[[The SSH Protocol]]"
  - "[[ssh key]]"
directly-connected:
  - "[[SSH issues with GIT]]"
tags:
  - ticket/bug
status:
  - finished 🏁
implemented: true
---
- [x] #task resolve the [[ssh key issue]] completely 🆔 LiCazI 🔼 ⏳ 2025-05-22 📅 2025-05-23 ✅ 2025-05-23
___

**Ubuntu** is still persisting in asking for the `ssh` passwords 

- [x] used `.zprofile` file to re-initialize the ssh agent [^1]
- [x] add valid keys during `init`
- [x] add `password` keys addition in `.zshrc_l` [^3]

### what was done

1. created the `.zprofile` file [^1]
2. added the ssh agent `eval`
3. added `ssh-add` instructions to add the keys
4. added `ssh-add` for password keys inside `.zshrc_l`

### what still doesn't work 💔
1. ~~automatically adding keys with `passwords`~~

### what could be done 🌅

1. [x] ==explore== how to add keys with passwords
	- **could be** done inside of the `rc` file[^2]

[^1]: [[Zsh Profile File (.profile, .zprofile, .zshrc) – LinuxTect]]
[^2]: [[What Is rc and What Are rc Files]]
[^3]: [[zshrc]]