
```bash

" Cycle between tabs
exmap tabprev obcommand workspace:previous-tab
nmap H :tabprev
exmap tabnext obcommand workspace:next-tab
nmap L :tabnext

" Yank to system clipboard
set clipboard=unnamed

" Focus on splits
exmap ftop obcommand editor:focus-top
nmap <C-k> :ftop
exmap fbottom obcommand editor:focus-bottom
nmap <C-j> :fbottom
exmap fleft obcommand editor:focus-left
nmap <C-h> :fleft
exmap fright obcommand editor:focus-right
nmap <C-l> :fright

" Insert templates
exmap ins_temp obcommand templater-obsidian:insert-templater
nmap <Space>t :ins_temp

" Toggle zen mode
exmap zen obcommand obsidian-prozen:zenmode
nmap <Space>z :zen

" Open today's note
exmap daily obcommand daily-notes
nmap <Space>d :daily

" Quickly remove search highlights
nmap ,h :nohl<CR>
nmap <S-h> :nohl<CR>

" Splits
exmap vsplit obcommand workspace:split-vertical
nmap <Space>v :vsplit
exmap hsplit obcommand workspace:split-horizontal
nmap <Space>V :hsplit

" Surround
exmap surround_wiki surround [[ ]]
exmap surround_double_quotes surround " "
exmap surround_single_quotes surround ' '
exmap surround_backticks surround ` `
exmap surround_brackets surround ( )
exmap surround_square_brackets surround [ ]
exmap surround_curly_brackets surround { }

map [[ :surround_wiki
nunmap s
vunmap s
map s" :surround_double_quotes
map s' :surround_single_quotes
map s` :surround_backticks
map sb :surround_brackets
map s( :surround_brackets
map s) :surround_brackets
map s[ :surround_square_brackets
map s] :surround_square_brackets
map s{ :surround_curly_brackets
map s} :surround_curly_brackets
```