---
source: https://github.com/charmbracelet/gum
author:
published:
created: 2026-04-11
tags:
---
- [ ] #task checkout [[gum - A tool for glamorous shell scripts 🎀]] gummy 🆔 giHmuV
___

A tool for glamorous shell scripts. Leverage the power of [Bubbles](https://github.com/charmbracelet/bubbles) and [Lip Gloss](https://github.com/charmbracelet/lipgloss) in your scripts and aliases without writing any Go code!

[![Shell running the ./demo.sh script|400](https://camo.githubusercontent.com/3c8cdaaab97ac07d823f7b645fd3c62453acf025d532f174dfa4670f36ac4e09/68747470733a2f2f7668732e636861726d2e73682f7668732d31715935375272516c584375796473456744703638472e676966)](https://camo.githubusercontent.com/3c8cdaaab97ac07d823f7b645fd3c62453acf025d532f174dfa4670f36ac4e09/68747470733a2f2f7668732e636861726d2e73682f7668732d31715935375272516c584375796473456744703638472e676966)

The above example is running from a single shell script ([source](https://github.com/charmbracelet/gum/blob/main/examples/demo.sh)).

## Tutorial

Gum provides highly configurable, ready-to-use utilities to help you write useful shell scripts and dotfile aliases with just a few lines of code. Let's build a simple script to help you write [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for your dotfiles.

Ask for the commit type with gum choose:

```
gum choose "fix" "feat" "docs" "style" "refactor" "test" "chore" "revert"
```

> [!note] Note
> This command itself will print to stdout which is not all that useful. To make use of the command later on you can save the stdout to a `$VARIABLE` or `file.txt`.

Prompt for the scope of these changes:

```sh
gum input --placeholder "scope"
```

Prompt for the summary and description of changes:

```sh
gum input --value "$TYPE$SCOPE: " --placeholder "Summary of this change"
gum write --placeholder "Details of this change"
```

Confirm before committing:

```sh
gum confirm "Commit changes?" && git commit -m "$SUMMARY" -m "$DESCRIPTION"
```

Check out the [complete example](https://github.com/charmbracelet/gum/blob/main/examples/commit.sh) for combining these commands in a single script.

[![Running the ./examples/commit.sh script to commit to git|400](https://camo.githubusercontent.com/b980987feb87e5760ce5adad90d5cf3e778e82233763739bfe74037e4a768570/68747470733a2f2f7668732e636861726d2e73682f7668732d37725271334c7345754a5677687772307866364572372e676966)]

## Commands

- [`choose`](#choose): Choose an option from a list of choices
- [`confirm`](#confirm): Ask a user to confirm an action
- [`file`](#file): Pick a file from a folder
- [`filter`](#filter): Filter items from a list
- [`format`](#format): Format a string using a template
- [`input`](#input): Prompt for some input
- [`join`](#join): Join text vertically or horizontally
- [`pager`](#pager): Scroll through a file
- [`spin`](#spin): Display spinner while running a command
- [`style`](#style): Apply coloring, borders, spacing to text
- [`table`](#table): Render a table of data
- [`write`](#write): Prompt for long-form text
- [`log`](#log): Log messages to output

## Customization

You can customize `gum` options and styles with `--flags` and `$ENVIRONMENT_VARIABLES`. See `gum <command> --help` for a full view of each command's customization and configuration options.

Customize with `--flags`:

```
gum input --cursor.foreground "#FF0" \
          --prompt.foreground "#0FF" \
          --placeholder "What's up?" \
          --prompt "* " \
          --width 80 \
          --value "Not much, hby?"
```

Customize with `ENVIRONMENT_VARIABLES`:

```
export GUM_INPUT_CURSOR_FOREGROUND="#FF0"
export GUM_INPUT_PROMPT_FOREGROUND="#0FF"
export GUM_INPUT_PLACEHOLDER="What's up?"
export GUM_INPUT_PROMPT="* "
export GUM_INPUT_WIDTH=80

# --flags can override values set with environment
gum input
```

[![Gum input displaying most customization options](https://camo.githubusercontent.com/bb4b1f98a78fd489b549fa3dd51c38907356aeeb566fe6d04ad0c3c983467821/68747470733a2f2f7668732e636861726d2e73682f7668732d357a6239446c5159413730614c395a70594c54774b762e676966)](https://camo.githubusercontent.com/bb4b1f98a78fd489b549fa3dd51c38907356aeeb566fe6d04ad0c3c983467821/68747470733a2f2f7668732e636861726d2e73682f7668732d357a6239446c5159413730614c395a70594c54774b762e676966)

## Input

Prompt for input with a simple command.

```
gum input > answer.txt
gum input --password > password.txt
```

[![Shell running gum input typing Not much, you?](https://camo.githubusercontent.com/f7f98f38f2fda715ab1b031e9f9ae3655fabb6b53e6a8dda8fb949286a08fd28/68747470733a2f2f7668732e636861726d2e73682f7668732d316e5363725374464933424d6c43703579724c7479672e676966)](https://camo.githubusercontent.com/f7f98f38f2fda715ab1b031e9f9ae3655fabb6b53e6a8dda8fb949286a08fd28/68747470733a2f2f7668732e636861726d2e73682f7668732d316e5363725374464933424d6c43703579724c7479672e676966)

## Write

Prompt for some multi-line text (`ctrl+d` to complete text entry).

```sh
gum write > story.txt
```

[![Shell running gum write typing a story|400](https://camo.githubusercontent.com/33757f7a7c2dbbf08e26ef23e2774fa75595de7d0af9c1a030ab267877bd1f50/68747470733a2f2f7668732e636861726d2e73682f7668732d376162644b4b725545756b677839614a6a384f3547582e676966)](https://camo.githubusercontent.com/33757f7a7c2dbbf08e26ef23e2774fa75595de7d0af9c1a030ab267877bd1f50/68747470733a2f2f7668732e636861726d2e73682f7668732d376162644b4b725545756b677839614a6a384f3547582e676966)

## Filter

Filter a list of values with fuzzy matching:

```
echo Strawberry >> flavors.txt
echo Banana >> flavors.txt
echo Cherry >> flavors.txt
gum filter < flavors.txt > selection.txt
```

[![Shell running gum filter on different bubble gum flavors](https://camo.githubusercontent.com/a6d7260fa66eeaa687be8f3079ebf3777ad35a982a7207df2c98dd03131513ad/68747470733a2f2f7668732e636861726d2e73682f7668732d363165754f51744b5074515644376e44704851687a722e676966)](https://camo.githubusercontent.com/a6d7260fa66eeaa687be8f3079ebf3777ad35a982a7207df2c98dd03131513ad/68747470733a2f2f7668732e636861726d2e73682f7668732d363165754f51744b5074515644376e44704851687a722e676966)

Select multiple options with the `--limit` flag or `--no-limit` flag. Use `tab` or `ctrl+space` to select, `enter` to confirm.

```
cat flavors.txt | gum filter --limit 2
cat flavors.txt | gum filter --no-limit
```

## ==Choose==

Choose an option from a list of choices.

```
echo "Pick a card, any card..."
CARD=$(gum choose --height 15 {{A,K,Q,J},{10..2}}" "{♠,♥,♣,♦})
echo "Was your card the $CARD?"
```

You can also select multiple items with the `--limit` or `--no-limit` flag, which determines the maximum of items that can be chosen.

```
cat songs.txt | gum choose --limit 5
cat foods.txt | gum choose --no-limit --header "Grocery Shopping"
```

[![Shell running gum choose with numbers and gum flavors](https://camo.githubusercontent.com/4ea305a9735054e1e1b22a3a9dd56f65a39a268b5a3ae41e13ebac567d0683fd/68747470733a2f2f7668732e636861726d2e73682f7668732d337a56314c766f66413643626e35764275314e48486c2e676966)](https://camo.githubusercontent.com/4ea305a9735054e1e1b22a3a9dd56f65a39a268b5a3ae41e13ebac567d0683fd/68747470733a2f2f7668732e636861726d2e73682f7668732d337a56314c766f66413643626e35764275314e48486c2e676966)
## <mark style="background: #FFB86CA6;">Confirm</mark>

Confirm whether to perform an action. Exits with code `0` (affirmative) or `1` (negative) depending on selection.

```
gum confirm && rm file.txt || echo "File not removed"
```

[![Shell running gum confirm](https://camo.githubusercontent.com/7b60aa7851440e8b33cddadb6ae2beeeb9344bb36e0feda78610c332f169b62d/68747470733a2f2f7668732e636861726d2e73682f7668732d3378524676626551346c7147657262485937793371322e676966)](https://camo.githubusercontent.com/7b60aa7851440e8b33cddadb6ae2beeeb9344bb36e0feda78610c332f169b62d/68747470733a2f2f7668732e636861726d2e73682f7668732d3378524676626551346c7147657262485937793371322e676966)
## File

Prompt the user to select a file from the file tree.

```sh
$EDITOR $(gum file $HOME)
```

[![Shell running gum file](https://camo.githubusercontent.com/d4e987d6f124b0c388e1283109161d2f88b336a9b7de27cd4e82a82d8e8c34e6/68747470733a2f2f7668732e636861726d2e73682f7668732d32524d52716d6e4f506e656e654967564a4a336d49312e676966)](https://camo.githubusercontent.com/d4e987d6f124b0c388e1283109161d2f88b336a9b7de27cd4e82a82d8e8c34e6/68747470733a2f2f7668732e636861726d2e73682f7668732d32524d52716d6e4f506e656e654967564a4a336d49312e676966)

## Pager

Scroll through a long document with line numbers and a fully customizable viewport.

```
gum pager < README.md
```

[![Shell running gum pager](https://camo.githubusercontent.com/3c4720d076bbe63ac3afde772c0c2d5d3eb1de32f4cd5403fc183ad9a5d6af7a/68747470733a2f2f7668732e636861726d2e73682f7668732d33694d4470674f4c6d625972306a72594547626b37702e676966)](https://camo.githubusercontent.com/3c4720d076bbe63ac3afde772c0c2d5d3eb1de32f4cd5403fc183ad9a5d6af7a/68747470733a2f2f7668732e636861726d2e73682f7668732d33694d4470674f4c6d625972306a72594547626b37702e676966)
## Spin

Display a spinner while running a script or command. The spinner will automatically stop after the given command exits.

To view or pipe the command's output, use the `--show-output` flag.

```
gum spin --spinner dot --title "Buying Bubble Gum..." -- sleep 5
```

[![Shell running gum spin while sleeping for 5 seconds](https://camo.githubusercontent.com/e631805dfbe989f4dc7100e626eb7958eac360989c661c8e33eb3b6f8aebb2f6/68747470733a2f2f7668732e636861726d2e73682f7668732d3359467377436d6f59346f3351374d797a576c3673532e676966)](https://camo.githubusercontent.com/e631805dfbe989f4dc7100e626eb7958eac360989c661c8e33eb3b6f8aebb2f6/68747470733a2f2f7668732e636861726d2e73682f7668732d3359467377436d6f59346f3351374d797a576c3673532e676966)

Available spinner types include: `line`, `dot`, `minidot`, `jump`, `pulse`, `points`, `globe`, `moon`, `monkey`, `meter`, `hamburger`.

## Table

Select a row from some tabular data.

```
gum table < flavors.csv | cut -d ',' -f 1
```

## Style

Pretty print any string with any layout with one command.

```
gum style \
    --foreground 212 --border-foreground 212 --border double \
    --align center --width 50 --margin "1 2" --padding "2 4" \
    'Bubble Gum (1¢)' 'So sweet and so fresh!'
```
[![Bubble Gum, So sweet and so fresh!](https://private-user-images.githubusercontent.com/42545625/319907882-67468acf-b3e0-4e78-bd89-360739eb44fa.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU5NDUwMTUsIm5iZiI6MTc3NTk0NDcxNSwicGF0aCI6Ii80MjU0NTYyNS8zMTk5MDc4ODItNjc0NjhhY2YtYjNlMC00ZTc4LWJkODktMzYwNzM5ZWI0NGZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDExVDIxNTgzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIzNjc0ZDYxNzhiMjk2Y2M5Zjk4MTFhYWE4ZjdlODFjZDc2NzlmZDVhMGYwNTA5MWU4YTM3NDJhYWRiMTkzYzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.VQlDjwiecxioxXq6EPErDbdplvKZFhWi9-q24miYT_Y)](https://private-user-images.githubusercontent.com/42545625/319907882-67468acf-b3e0-4e78-bd89-360739eb44fa.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU5NDUwMTUsIm5iZiI6MTc3NTk0NDcxNSwicGF0aCI6Ii80MjU0NTYyNS8zMTk5MDc4ODItNjc0NjhhY2YtYjNlMC00ZTc4LWJkODktMzYwNzM5ZWI0NGZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDExVDIxNTgzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIzNjc0ZDYxNzhiMjk2Y2M5Zjk4MTFhYWE4ZjdlODFjZDc2NzlmZDVhMGYwNTA5MWU4YTM3NDJhYWRiMTkzYzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.VQlDjwiecxioxXq6EPErDbdplvKZFhWi9-q24miYT_Y)

## Join

Combine text vertically or horizontally. Use this command with `gum style` to build layouts and pretty output.

Tip: Always wrap the output of `gum style` in quotes to preserve newlines (`\n`) when using it as an argument in the `join` command.

```
I=$(gum style --padding "1 5" --border double --border-foreground 212 "I")
LOVE=$(gum style --padding "1 4" --border double --border-foreground 57 "LOVE")
BUBBLE=$(gum style --padding "1 8" --border double --border-foreground 255 "Bubble")
GUM=$(gum style --padding "1 5" --border double --border-foreground 240 "Gum")

I_LOVE=$(gum join "$I" "$LOVE")
BUBBLE_GUM=$(gum join "$BUBBLE" "$GUM")
gum join --align center --vertical "$I_LOVE" "$BUBBLE_GUM"
```
[![I LOVE Bubble Gum written out in four boxes with double borders around them.](https://private-user-images.githubusercontent.com/42545625/319907745-68f7a25d-b495-48dd-982a-cee0c8ea5786.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU5NDUwMTUsIm5iZiI6MTc3NTk0NDcxNSwicGF0aCI6Ii80MjU0NTYyNS8zMTk5MDc3NDUtNjhmN2EyNWQtYjQ5NS00OGRkLTk4MmEtY2VlMGM4ZWE1Nzg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDExVDIxNTgzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQyODdmYTM1ZWE0ZDNlNDkwNmQwZjFhOWM1MDI0MWYzZGMxN2FlNjlhNmE0MzVlMmJmMzIwMTc2ZjQxMGFjNTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.xrrXJpvjs-kKjqW1YuqpyviPyMmN7ql8g-3nHSF3R1E)](https://private-user-images.githubusercontent.com/42545625/319907745-68f7a25d-b495-48dd-982a-cee0c8ea5786.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU5NDUwMTUsIm5iZiI6MTc3NTk0NDcxNSwicGF0aCI6Ii80MjU0NTYyNS8zMTk5MDc3NDUtNjhmN2EyNWQtYjQ5NS00OGRkLTk4MmEtY2VlMGM4ZWE1Nzg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDExVDIxNTgzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQyODdmYTM1ZWE0ZDNlNDkwNmQwZjFhOWM1MDI0MWYzZGMxN2FlNjlhNmE0MzVlMmJmMzIwMTc2ZjQxMGFjNTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.xrrXJpvjs-kKjqW1YuqpyviPyMmN7ql8g-3nHSF3R1E)

## Format

`format` processes and formats bodies of text. `gum format` can parse markdown, template strings, and named emojis.

```
# Format some markdown
gum format -- "# Gum Formats" "- Markdown" "- Code" "- Template" "- Emoji"
echo "# Gum Formats\n- Markdown\n- Code\n- Template\n- Emoji" | gum format

# Syntax highlight some code
cat main.go | gum format -t code

# Render text any way you want with templates
echo '{{ Bold "Tasty" }} {{ Italic "Bubble" }} {{ Color "99" "0" " Gum " }}' \
    | gum format -t template

# Display your favorite emojis!
echo 'I :heart: Bubble Gum :candy:' | gum format -t emoji
```

For more information on template helpers, see the [Termenv docs](https://github.com/muesli/termenv#template-helpers). For a full list of named emojis see the [GitHub API](https://api.github.com/emojis).

[![Running gum format for different types of formats](https://private-user-images.githubusercontent.com/42545625/319907423-5cfbb0c8-0022-460d-841b-fec37527ca66.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU5NDUwMTUsIm5iZiI6MTc3NTk0NDcxNSwicGF0aCI6Ii80MjU0NTYyNS8zMTk5MDc0MjMtNWNmYmIwYzgtMDAyMi00NjBkLTg0MWItZmVjMzc1MjdjYTY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDExVDIxNTgzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ0MDMxMWIyYjQwNjAxNTMzMzU5OThiNDljODQzNzBiNzFmYTVjMjUyODA0YTFkODQ4MmY5Njg2N2I4NmJmMGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.UA1HdUMWZPXYlguRMgaqcLEM2Zq7hs0OBE1GyeKTdgY)](https://private-user-images.githubusercontent.com/42545625/319907423-5cfbb0c8-0022-460d-841b-fec37527ca66.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU5NDUwMTUsIm5iZiI6MTc3NTk0NDcxNSwicGF0aCI6Ii80MjU0NTYyNS8zMTk5MDc0MjMtNWNmYmIwYzgtMDAyMi00NjBkLTg0MWItZmVjMzc1MjdjYTY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDExVDIxNTgzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ0MDMxMWIyYjQwNjAxNTMzMzU5OThiNDljODQzNzBiNzFmYTVjMjUyODA0YTFkODQ4MmY5Njg2N2I4NmJmMGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.UA1HdUMWZPXYlguRMgaqcLEM2Zq7hs0OBE1GyeKTdgY)

## Log

`log` logs messages to the terminal at using different levels and styling using the [`charmbracelet/log`](https://github.com/charmbracelet/log) library.

```
# Log some debug information.
gum log --structured --level debug "Creating file..." name file.txt
# DEBUG Unable to create file. name=temp.txt

# Log some error.
gum log --structured --level error "Unable to create file." name file.txt
# ERROR Unable to create file. name=temp.txt

# Include a timestamp.
gum log --time rfc822 --level error "Unable to create file."
```

See the Go [`time` package](https://pkg.go.dev/time#pkg-constants) for acceptable `--time` formats.

See [`charmbracelet/log`](https://github.com/charmbracelet/log) for more usage.

[![Running gum log with debug and error levels](https://camo.githubusercontent.com/1ebcaf160ba16ba187a7ffc58c4483e69bc02e73fe181461b76fbbb0e4fe7044/68747470733a2f2f7668732e636861726d2e73682f7668732d366a757075464d3073326658695572424530493176552e676966)](https://camo.githubusercontent.com/1ebcaf160ba16ba187a7ffc58c4483e69bc02e73fe181461b76fbbb0e4fe7044/68747470733a2f2f7668732e636861726d2e73682f7668732d366a757075464d3073326658695572424530493176552e676966)

## Examples

How to use `gum` in your daily workflows:

See the [examples](https://github.com/charmbracelet/gum/blob/main/examples) directory for more real world use cases.

- Write a commit message:
```
git commit -m "$(gum input --width 50 --placeholder "Summary of changes")" \
           -m "$(gum write --width 80 --placeholder "Details of changes")"
```
- Open files in your `$EDITOR`
```
$EDITOR $(gum filter)
```
- Connect to a `tmux` session
```
SESSION=$(tmux list-sessions -F \#S | gum filter --placeholder "Pick session...")
tmux switch-client -t "$SESSION" || tmux attach -t "$SESSION"
```
- Pick a commit hash from `git` history
```
git log --oneline | gum filter | cut -d' ' -f1 # | copy
```
- Simple [`skate`](https://github.com/charmbracelet/skate) password selector.

```
skate list -k | gum filter | xargs skate get
```

- Uninstall packages
```
brew list | gum choose --no-limit | xargs brew uninstall
```
- Clean up `git` branches
```
git branch | cut -c 3- | gum choose --no-limit | xargs git branch -D
```
- Checkout GitHub pull requests with [`gh`](https://cli.github.com/)
```
gh pr list | cut -f1,2 | gum choose | cut -f1 | xargs gh pr checkout
```
- Copy command from shell history
```
gum filter < $HISTFILE --height 20
```
- `sudo` replacement
```
alias please="gum input --password | sudo -nS"
```

## Contributing

See [contributing](https://github.com/charmbracelet/gum/contribute).

## Feedback

We’d love to hear your thoughts on this project. Feel free to drop us a note!