https://github.com/esm7/obsidian-vimrc-support


```vim

""""""""""""""""""""""
" Navigation
""""""""""""""""""""""

" navigate visual lines rather than logical ones
nnoremap j gj
nnoremap k gk
nnoremap I g0i
nnoremap A g$a

" HJKL behaves like hjkl, but bigger distance
noremap H g0
noremap L g$
nnoremap J 6gj
nnoremap K 6gk
vnoremap J 6j
vnoremap K 6k

" dj = delete 2 lines, dJ = delete 3 lines
onoremap J 2j

" Jumps
nnoremap <C-h> <C-o>
nnoremap <C-l> <C-i>

" :bnext/bprev
exmap goBack obcommand app:go-back
exmap goForward obcommand app:go-forward
nnoremap <BS> :goBack<CR>
nnoremap <S-BS> :goForward<CR>

" sentence navigation
noremap [ (
noremap ] )

" [z]pelling [l]ist (emulates `z=`)
exmap contextMenu obcommand editor:context-menu
nnoremap zl :contextMenu<CR>

" next diagnostic
exmap nextSuggestion obcommand obsidian-languagetool-plugin:ltjump-to-next-suggestion
nnoremap ge :nextSuggestion<CR>
vnoremap ge :nextSuggestion<CR>

" INFO doesn't work in reading mode: https://github.com/timhor/obsidian-editor-shortcuts/issues/20
exmap nextHeading obcommand obsidian-editor-shortcuts:goToNextHeading
exmap prevHeading obcommand obsidian-editor-shortcuts:goToPrevHeading
nnoremap <C-j> :nextHeading<CR>
nnoremap <C-k> :prevHeading<CR>

" INFO doesn't work in visual mode
exmap lineUp obcommand editor:swap-line-up
exmap lineDown obcommand editor:swap-line-down
nnoremap <Up> :lineUp<CR>
nnoremap <Down> :lineDown<CR>
nnoremap <Right> dlp<CR>
nnoremap <Left> dlhhp<CR>

" [m]atch parenthesis
nnoremap m %
vnoremap m %

" [g]oto [s]ymbol via "Another Quick Switcher" Plugin
exmap gotoHeading obcommand obsidian-another-quick-switcher:header-floating-search-in-file
nnoremap gs :gotoHeading<CR>

" [g]oto [w]riting chapters
exmap gotoScene obcommand longform:longform-jump-to-scene
nnoremap gw :gotoScene<CR>

" [g]oto definition / link (shukuchi makes it forward-seeking)
exmap followNextLink obcommand shukuchi:open-link
nnoremap gx :followNextLink<CR>

" [g]oto [o]pen file (= Quick Switcher)
exmap quickSwitcher obcommand obsidian-another-quick-switcher:search-command_recent-search
nnoremap go :quickSwitcher<CR>

" go to last change (HACK, only works to jump to the last location)
nnoremap gc u<C-r>

" increment quicker
nnoremap + <C-a>

""""""""""""""""""""""
" Search
""""""""""""""""""""""

" <Esc> clears highlights
nnoremap <Esc> :nohl

" Another Quick Switcher ripgrep-search
" somewhat close to Telescope's livegrep
exmap liveGrep obcommand obsidian-another-quick-switcher:grep
nnoremap gl :liveGrep

" Obsidian builtin Search & replace
exmap searchReplace obcommand editor:open-search-replace
nnoremap ,ff :searchReplace<CR>

""""""""""""""""""""""
" Editing
""""""""""""""""""""""

" undo/redo consistently on one key
nnoremap U <C-r>

" redo all
nnoremap ,ur 1000<C-r>

" split line
vnoremap ,s gq
nnoremap ,s gqq

" Case Switch via Code Editor Shortcuts Plugin
exmap caseSwitch obcommand obsidian-editor-shortcuts:toggleCase
nnoremap ö :caseSwitch
vnoremap ö :caseSwitch

" do not move to the right on toggling case
nnoremap ~ ~h

" Change Word/Selection
nnoremap <Space> "_ciw
onoremap <Space> iw
onoremap a<Space> iW

" Delete Word/Selection
nnoremap <S-Space> "_daw

" [M]erge Lines
" the merge from Code Editor Shortcuts plugin is smarter than just using `J`
" since it removes stuff like list prefixes
exmap mergeLines obcommand obsidian-editor-shortcuts:joinLines
nnoremap M :mergeLines

" Make o and O respect context (requires Code Editor Shortcuts Plugin)
exmap blankAbove obcommand obsidian-editor-shortcuts:insertLineAbove
nmap &a& :blankAbove
" nmap O &a&i

exmap blankBelow obcommand obsidian-editor-shortcuts:insertLineBelow
nmap &b& :blankBelow
" nmap o &b&i

" Add Blank Line above/below
nnoremap = mzO<Esc>`z
nnoremap _ mzo<Esc>`z

" Dial
nnoremap + <C-a>
nnoremap ä <C-x>

""""""""""""""""""""""""""""
" Leader Mappings
""""""""""""""""""""""""""""

exmap fileRecovery obcommand file-recovery:open
nnoremap ,ut :fileRecovery

" pseudo-code-action: enhance URL with title
exmap enhanceUrlWithTitle obcommand obsidian-auto-link-title:enhance-url-with-title
nnoremap ,c :enhanceUrlWithTitle<CR>

""""""""""""""""""""""""""""
" Markdown/Obsidian specific
""""""""""""""""""""""""""""

" [l]og commands in console
nnoremap ,l :obcommand<CR>

" [g]oto [f]ootnotes
" requires Footnotes Shortcut Plugin
exmap gotoFootnote obcommand obsidian-footnotes:insert-autonumbered-footnote
nnoremap gf :gotoFootnote<CR>

""""""""""""""""""""""
" Critic Markup
""""""""""""""""""""""
" accept all / selection
exmap acceptAll obcommand commentator:commentator-accept-all-suggestions
nnoremap ,a :acceptAll<CR>
exmap acceptSelected obcommand commentator:commentator-accept-selected-suggestions
vnoremap ,a :acceptAll<CR>

" reject all / selection
exmap rejectAll obcommand commentator:commentator-reject-all-suggestions
nnoremap ,A :rejectAll<CR>
exmap rejectSelected obcommand commentator:commentator-reject-selected-suggestions
vnoremap ,A :rejectAll<CR>


""""""""""""""""""""""
" Visual Mode
""""""""""""""""""""""

" so repeated "V" selects more lines
vnoremap V gj

" so 2x v goes to visual block mode
vnoremap v <C-v>

""""""""""""""""""""""
" Text Objects
""""""""""""""""""""""

" quicker access to [m]assive word, [q]uote, [z]ingle quote, inline cod[e],
" [r]ectangular bracket, and [c]urly braces
onoremap am aW
onoremap im iW
onoremap aq a"
onoremap iq i"
onoremap k i"
onoremap az a'
onoremap iz i'
onoremap ae a`
onoremap ie i`
onoremap ir i[
onoremap ar a[
onoremap ac a{
onoremap ic i{

vnoremap am aW
vnoremap im iW
vnoremap aq a"
vnoremap iq i"
vnoremap ay a'
vnoremap iy i'
vnoremap ae a`
vnoremap ie i`
vnoremap ir i[
vnoremap ar a[
vnoremap ac a{
vnoremap ic i{

" emulate some text objects from nvim-various-textobjs
onoremap rg G
vnoremap rg G
onoremap rp }
vnoremap rp }
onoremap m t]
vnoremap m t]
onoremap w t"
vnoremap w t"

""""""""""""""""""""""
" Substitute
""""""""""""""""""""""

" poor man's substitute.nvim/duplicate.nvim:
" brut-forcing all possible text objects 💀
nunmap s
nnoremap ss Vp
nnoremap S vg$p
nnoremap sj vjp
nnoremap sim viWp
nnoremap sam vaWp
nnoremap siw viwp
nnoremap saw vawp
nnoremap sis visp
nnoremap sas vasp
nnoremap sip vipp
nnoremap sap vapp
nnoremap sib vi)p
nnoremap saq va"p
nnoremap siq vi"p
nnoremap sk vi"p
nnoremap saz va'p
nnoremap siz vi'p
nnoremap sae va`p
nnoremap sie vi`p
nnoremap sab va)p
nnoremap sir vi]p
nnoremap sar va]p
nnoremap sic vi}p
nnoremap sac va}p
nnoremap srg vGp
nnoremap sgg vggGp

nunmap w
exmap duplicate obcommand obsidian-editor-shortcuts:duplicateLine
nnoremap ww :duplicate

nnoremap W y$$p
nnoremap wj yjjp
nnoremap wim yiWp
nnoremap wam yaWp
nnoremap wiw yiwp
nnoremap waw yawp
nnoremap wis yisp
nnoremap was yasp
nnoremap wip yipp
nnoremap wap yapp
nnoremap wib yi)p
nnoremap waq ya"p
nnoremap wiq yi"p
nnoremap wk yi"p
nnoremap waz ya'p
nnoremap wiz yi'p
nnoremap wae ya`p
nnoremap wie yi`p
nnoremap wab ya)p
nnoremap wir yi]p
nnoremap war ya]p
nnoremap wic yi}p
nnoremap wac ya}p
nnoremap wrg yGp

""""""""""""""""""""""
" Tabs, Splits & Alt-file
""""""""""""""""""""""

" Close
exmap closeWindow obcommand workspace:close-window
nnoremap ZZ :closeWindow

" Splits
exmap splitVertical obcommand workspace:split-vertical
nnoremap <C-w>v :splitVertical

" Split Switching
exmap nextSplit obcommand cycle-through-panes:cycle-through-panes
nnoremap <C-s> :nextSplit

" Tabs
exmap nextTab obcommand workspace:next-tab
exmap prevTab obcommand workspace:previous-tab
nnoremap gt :nextTab
nnoremap gT :prevTab

" Alt Buffer (emulates `:buffer #`)
exmap altBuffer obcommand grappling-hook:alternate-note
nnoremap <CR> :altBuffer

""""""""""""""""""""""
" Comments
""""""""""""""""""""""
" basically ts-comment-string, i.e. using the appropriate comment syntax when in
" a code block
exmap contextualComment obcommand contextual-comments:advanced-comments
nnoremap qq :contextualComment

""""""""""""""""""""""
" Folding
""""""""""""""""""""""
" Emulate vim folding command
nnoremap zo :togglefold
nnoremap zc :togglefold
nnoremap ^ :togglefold
nnoremap <C-space> :togglefold

exmap unfoldall obcommand editor:unfold-all
exmap foldall obcommand editor:fold-all
nnoremap zm :foldall
nnoremap zr :unfoldall

""""""""""""""""""""""
" Option Toggling
""""""""""""""""""""""

" [O]ption: [s]pellcheck
exmap spellcheck obcommand editor:toggle-spellcheck
nnoremap ,os :spellcheck

" [O]ption: [d]iagnostics
exmap enableDiagnostics obcommand obsidian-languagetool-plugin:ltcheck-text
nnoremap ,od :enableDiagnostics

exmap disableDiagnostics obcommand obsidian-languagetool-plugin:ltclear
nnoremap ,oD :disableDiagnostics

```

[[all commands list]]