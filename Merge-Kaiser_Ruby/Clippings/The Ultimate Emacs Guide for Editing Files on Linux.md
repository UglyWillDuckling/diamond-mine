---
source: "https://www.makeuseof.com/emacs-editing-guide-linux/"
author:
  - "[[MUO]]"
published: 2022-06-15
created: 2025-03-16
tags:
---
Emacs is one of the oldest text editors you can find today. It has been in development for over 40 years as of the year 2022.

Emacs is cross-platform, open-source, and versatile. You can use it for a wide range of things, from editing configuration files to programming and document processing. Understanding how to use this powerful editor can greatly improve your productivity on Linux.

## Installing Emacs on Linux

Before we proceed any further, you should install the Emacs text editor if you do not have it on your PC. Here's how you can use the package manager of your distro to install Emacs.

### On Debian-based Distros

First, update your package sources using the following command:

```sql
sudo apt update
```

Then install the Emacs text editor.

```sql
sudo apt install emacs
```

### On Fedora, CentOS, and RHEL

[Use the DNF package manager](https://www.makeuseof.com/manage-packages-with-dnf/) to install Emacs on Red Hat Enterprise Linux (RHEL), Fedora, and similar distros.

```sql
sudo dnf install emacs
```

### On Arch-based Linux Distros

Use [the Pacman package manager](https://www.makeuseof.com/getting-started-with-pacman-commands/) on Arch-based distros such as Manjaro and Garuda Linux to install Emacs.

```sql
sudo pacman -S emacs
```

## Starting Emacs

You can check the version of Emacs that you are running on your PC using the following command:

```sql
emacs --version
```

![[~/×/2290bd43eb9e9df414970bd302bef6da_MD5.jpg]]

You can start Emacs by running the command **emacs -nw**, and it will start within the terminal. To open Emacs GUI, simply run the command **emacs** without any arguments or parameters.

```sql
emacs -nw
```

Alternatively, you can press the **Super** key on your keyboard and type **emacs** in the search input that appears. You'll be given a choice on whether to start the GUI version of Emacs or the terminal-based version.

Let's look at the terminal-based Emacs because it mostly depends on your ability to use keyboard controls and shortcuts for navigating and processing. You can also use the same commands in the graphical Emacs interface. In addition, you have the GUI buttons that you can click on to access its functionality.

![[~/×/9911113514a4df61472f7d7dd0f9a3b4_MD5.jpg]]

Use the arrow keys to navigate and move the cursor up, down, left, and right as required.

To open a new file, navigate to the text link **Visit New File** then press **Enter**. Emacs will ask you to enter a file name, simply type in **index.txt** or any name of your liking and press **Enter**. By default, the file is saved in your home folder. You can specify another file location if you wish.

Emacs has a main menu bar at the top. Immediately after that is the main buffer which is the window that you use to edit files. At the bottom of the buffer is the status bar, which shows you what file you are editing and its state. Enter some text in the window to proceed.

Press **Ctrl + X** then **Ctrl + C** to exit Emacs. When asked to save any unsaved changes, press **y** for Yes or **n** for No.

You can open the file again by running the command **emacs ~/index.txt -nw**.

## Important Emacs Keyboard Shortcuts

The **Ctrl** key is one of the most important Emacs keys. In fact, it is simply represented by **C**. For example, to get help, you can use the Emacs command **C-h**, i.e. press **Ctrl + H**. To start the Emacs tutorial, run the Emacs command **C-h t**, i.e press **Ctrl + H** then release followed by **T**.

Another important key is **M**, Meta, which is the shorthand for **Alt**, or **Options**. The **Esc** key is simply **E**.

The **Enter** Key is referred to as a **RET** in Emacs, i.e. Return.

## Emacs File Editing on Linux

Let's take a look at some basic editing functions that you'll often use in the Emacs editor. For better learning, the following sections will use the conventional representation of the Emacs commands i.e. **C-key1 key2**.

### Highlighting Text

![[~/×/da2c06d7b8d790044d951e18bc982403_MD5.jpg]]

To highlight or mark text, first, navigate to the text that you want to highlight. Next, press **Ctrl + Space bar** (**C-Space bar**). Emacs will set a start mark point, and you can then simply move the cursor with your arrow keys to highlight the text that you want.

Use **C-x h** to highlight all the text of your current document or buffer. Press **C-Spacebar** to deselect all the highlighted or selected text.

Use **Alt + H** (**M-h**) to select all text in your current paragraph.

### Copying and Pasting

Press **E-w**, that is (**Esc + w**) to copy the highlighted text in Emacs. Navigate to the point you want to paste the text and press **C-y**.

Press **C-w** to cut highlighted or selected text, then navigate to the position you want to paste the text in and press **C-y**.

### Deleting Text

You can use the **Delete** and **Backspace** keys on your keyboard to delete text in Emacs, but to enhance your productivity, let's take it a step further.

For example, to quickly delete a whole word, move your cursor at the beginning of the word and press **M-d**. To delete multiple words, hold **M** (the Meta key) and keep pressing the **d** key.

You can quickly delete an entire line by moving the cursor to the beginning of the line and then pressing **C-k**. The command deletes all text from the beginning of the cursor to the end of the line.

### Undoing Changes

If you have cut or deleted text that you did not intend to, you can use the Emacs undo command to quickly undo your recent actions.

Simply press **C-x u** to undo, and keep repeating the shortcut to undo more recent actions. Alternatively, you can press the **C-/** (forward slash) shortcut.

### Searching Text in Emacs

If you want to search for a specific word or text within your document, simply press **C-s**, and Emacs will do a forward search. It'll prompt you to enter your search term. Emacs actively searches for the keywords as soon as you start typing. To search backward, simply press **C-r**.

## Getting Help With Emacs

Understanding the Emacs vocabulary and commands is key to mastering Emacs. For example, save in Emacs is represented by write, opening a new file is "Visiting New File", etc.

Try to understand what the commands are doing instead of memorizing command strokes. Also, note that we've only touched the tip of the iceberg when it comes to using Emacs. Fortunately, Emacs comes with great documentation, including manuals and tutorials and specific help topics that you can query about.

Run the Emacs command **C-h** to get specific help topics.

Use the command **C-h r** to access the Emacs manual.

Use **C-h t** to access the built-in Emacs tutorial.

## Editing Files on Linux With Emacs

Anyone can easily get started using the Emacs editor on Linux for editing configuration files, text processing, and programming. Using Emacs efficiently will greatly boost your productivity.

sed and awk are two of the most-used string manipulation and processing tools available for Linux. Combine them with your power of Emacs text editing, and you'll have a juggernaut.