```css
article,aside,details,figcaption,figure,footer,header,hgroup,nav,section {
    display: block
}

audio,canvas,video {
    display: inline-block;
    *display: inline;
    *zoom:1}

audio:not([controls]) {
    display: none
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
}

a:focus {
    outline: thin dotted #333;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

a:hover,a:active {
    outline: 0
}

sub,sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline
}

sup {
    top: -0.5em
}

sub {
    bottom: -0.25em
}

img {
    max-width: 100%;
    width: auto\9;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic
}

#map_canvas img,.google-maps img {
    max-width: none
}

button,input,select,textarea {
    margin: 0;
    font-size: 100%;
    vertical-align: middle
}

button,input {
    *overflow: visible;
    line-height: normal
}

button::-moz-focus-inner,input::-moz-focus-inner {
    padding: 0;
    border: 0
}

button,html input[type="button"],input[type="reset"],input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
}

input[type="search"] {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-appearance: textfield
}

input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none
}

textarea {
    overflow: auto;
    vertical-align: top
}

.clearfix {
    *zoom:1}

.clearfix:before,.clearfix:after {
    display: table;
    content: "";
    line-height: 0
}

.clearfix:after {
    clear: both
}

.hide-text {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0
}

.input-block-level {
    display: block;
    width: 100%;
    min-height: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

body {
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    line-height: 20px;
    color: #333;
    background-color: #fff
}

a {
    color: #08c;
    text-decoration: none
}

a:hover {
    color: #005580;
    text-decoration: underline
}

.img-rounded {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px
}

.img-polaroid {
    padding: 4px;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1)
}

.img-circle {
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    border-radius: 500px
}

.row {
    margin-left: -20px;
    *zoom:1}

.row:before,.row:after {
    display: table;
    content: "";
    line-height: 0
}

.row:after {
    clear: both
}

[class*="span"] {
    float: left;
    min-height: 1px;
    margin-left: 20px
}

.container,.navbar-static-top .container,.navbar-fixed-top .container,.navbar-fixed-bottom .container {
    width: 940px
}

.span12 {
    width: 940px
}

.span11 {
    width: 860px
}

.span10 {
    width: 780px
}

.span9 {
    width: 700px
}

.span8 {
    width: 620px
}

.span7 {
    width: 540px
}

.span6 {
    width: 460px
}

.span5 {
    width: 380px
}

.span4 {
    width: 300px
}

.span3 {
    width: 220px
}

.span2 {
    width: 140px
}

.span1 {
    width: 60px
}

.offset12 {
    margin-left: 980px
}

.offset11 {
    margin-left: 900px
}

.offset10 {
    margin-left: 820px
}

.offset9 {
    margin-left: 740px
}

.offset8 {
    margin-left: 660px
}

.offset7 {
    margin-left: 580px
}

.offset6 {
    margin-left: 500px
}

.offset5 {
    margin-left: 420px
}

.offset4 {
    margin-left: 340px
}

.offset3 {
    margin-left: 260px
}

.offset2 {
    margin-left: 180px
}

.offset1 {
    margin-left: 100px
}

.row-fluid {
    width: 100%;
    *zoom:1}

.row-fluid:before,.row-fluid:after {
    display: table;
    content: "";
    line-height: 0
}

.row-fluid:after {
    clear: both
}

.row-fluid [class*="span"] {
    display: block;
    width: 100%;
    min-height: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    margin-left: 2.12765957%;
    *margin-left: 2.07446809%
}

.row-fluid [class*="span"]:first-child {
    margin-left: 0
}

.row-fluid .controls-row [class*="span"]+[class*="span"] {
    margin-left: 2.12765957%
}

.row-fluid .span12 {
    width: 100%;
    *width: 99.94680851%
}

.row-fluid .span11 {
    width: 91.4893617%;
    *width: 91.43617021%
}

.row-fluid .span10 {
    width: 82.9787234%;
    *width: 82.92553191%
}

.row-fluid .span9 {
    width: 74.46808511%;
    *width: 74.41489362%
}

.row-fluid .span8 {
    width: 65.95744681%;
    *width: 65.90425532%
}

.row-fluid .span7 {
    width: 57.44680851%;
    *width: 57.39361702%
}

.row-fluid .span6 {
    width: 48.93617021%;
    *width: 48.88297872%
}

.row-fluid .span5 {
    width: 40.42553191%;
    *width: 40.37234043%
}

.row-fluid .span4 {
    width: 31.91489362%;
    *width: 31.86170213%
}

.row-fluid .span3 {
    width: 23.40425532%;
    *width: 23.35106383%
}

.row-fluid .span2 {
    width: 14.89361702%;
    *width: 14.84042553%
}

.row-fluid .span1 {
    width: 6.38297872%;
    *width: 6.32978723%
}

.row-fluid .offset12 {
    margin-left: 104.25531915%;
    *margin-left: 104.14893617%
}

.row-fluid .offset12:first-child {
    margin-left: 102.12765957%;
    *margin-left: 102.0212766%
}

.row-fluid .offset11 {
    margin-left: 95.74468085%;
    *margin-left: 95.63829787%
}

.row-fluid .offset11:first-child {
    margin-left: 93.61702128%;
    *margin-left: 93.5106383%
}

.row-fluid .offset10 {
    margin-left: 87.23404255%;
    *margin-left: 87.12765957%
}

.row-fluid .offset10:first-child {
    margin-left: 85.10638298%;
    *margin-left: 85%
}

.row-fluid .offset9 {
    margin-left: 78.72340426%;
    *margin-left: 78.61702128%
}

.row-fluid .offset9:first-child {
    margin-left: 76.59574468%;
    *margin-left: 76.4893617%
}

.row-fluid .offset8 {
    margin-left: 70.21276596%;
    *margin-left: 70.10638298%
}

.row-fluid .offset8:first-child {
    margin-left: 68.08510638%;
    *margin-left: 67.9787234%
}

.row-fluid .offset7 {
    margin-left: 61.70212766%;
    *margin-left: 61.59574468%
}

.row-fluid .offset7:first-child {
    margin-left: 59.57446809%;
    *margin-left: 59.46808511%
}

.row-fluid .offset6 {
    margin-left: 53.19148936%;
    *margin-left: 53.08510638%
}

.row-fluid .offset6:first-child {
    margin-left: 51.06382979%;
    *margin-left: 50.95744681%
}

.row-fluid .offset5 {
    margin-left: 44.68085106%;
    *margin-left: 44.57446809%
}

.row-fluid .offset5:first-child {
    margin-left: 42.55319149%;
    *margin-left: 42.44680851%
}

.row-fluid .offset4 {
    margin-left: 36.17021277%;
    *margin-left: 36.06382979%
}

.row-fluid .offset4:first-child {
    margin-left: 34.04255319%;
    *margin-left: 33.93617021%
}

.row-fluid .offset3 {
    margin-left: 27.65957447%;
    *margin-left: 27.55319149%
}

.row-fluid .offset3:first-child {
    margin-left: 25.53191489%;
    *margin-left: 25.42553191%
}

.row-fluid .offset2 {
    margin-left: 19.14893617%;
    *margin-left: 19.04255319%
}

.row-fluid .offset2:first-child {
    margin-left: 17.0212766%;
    *margin-left: 16.91489362%
}

.row-fluid .offset1 {
    margin-left: 10.63829787%;
    *margin-left: 10.53191489%
}

.row-fluid .offset1:first-child {
    margin-left: 8.5106383%;
    *margin-left: 8.40425532%
}

[class*="span"].hide,.row-fluid [class*="span"].hide {
    display: none
}

[class*="span"].pull-right,.row-fluid [class*="span"].pull-right {
    float: right
}

.container {
    margin-right: auto;
    margin-left: auto;
    *zoom:1}

.container:before,.container:after {
    display: table;
    content: "";
    line-height: 0
}

.container:after {
    clear: both
}

.container-fluid {
    padding-right: 20px;
    padding-left: 20px;
    *zoom:1}

.container-fluid:before,.container-fluid:after {
    display: table;
    content: "";
    line-height: 0
}

.container-fluid:after {
    clear: both
}

p {
    margin: 0 0 10px
}

.lead {
    margin-bottom: 20px;
    font-size: 19.5px;
    font-weight: 200;
    line-height: 30px
}

small {
    font-size: 85%
}

strong {
    font-weight: bold
}

em {
    font-style: italic
}

cite {
    font-style: normal
}

.muted {
    color: #999
}

.text-warning {
    color: #c09853
}

a.text-warning:hover {
    color: #a47e3c
}

.text-error {
    color: #b94a48
}

a.text-error:hover {
    color: #953b39
}

.text-info {
    color: #3a87ad
}

a.text-info:hover {
    color: #2d6987
}

.text-success {
    color: #468847
}

a.text-success:hover {
    color: #356635
}

h1,h2,h3,h4,h5,h6 {
    margin: 10px 0;
    font-family: inherit;
    font-weight: bold;
    line-height: 20px;
    color: inherit;
    text-rendering: optimizelegibility
}

h1 small,h2 small,h3 small,h4 small,h5 small,h6 small {
    font-weight: normal;
    line-height: 1;
    color: #999
}

h1,h2,h3 {
    line-height: 40px
}

h1 {
    font-size: 35.75px
}

h2 {
    font-size: 29.25px
}

h3 {
    font-size: 22.75px
}

h4 {
    font-size: 16.25px
}

h5 {
    font-size: 13px
}

h6 {
    font-size: 11.05px
}

h1 small {
    font-size: 22.75px
}

h2 small {
    font-size: 16.25px
}

h3 small {
    font-size: 13px
}

h4 small {
    font-size: 13px
}

.page-header {
    padding-bottom: 9px;
    margin: 20px 0 30px;
    border-bottom: 1px solid #eee
}

ul,ol {
    padding: 0;
    margin: 0 0 10px 25px
}

ul ul,ul ol,ol ol,ol ul {
    margin-bottom: 0
}

li {
    line-height: 20px
}

ul.unstyled,ol.unstyled {
    margin-left: 0;
    list-style: none
}

dl {
    margin-bottom: 20px
}

dt,dd {
    line-height: 20px
}

dt {
    font-weight: bold
}

dd {
    margin-left: 10px
}

.dl-horizontal {
    *zoom:1}

.dl-horizontal:before,.dl-horizontal:after {
    display: table;
    content: "";
    line-height: 0
}

.dl-horizontal:after {
    clear: both
}

.dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.dl-horizontal dd {
    margin-left: 180px
}

hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #fff
}

abbr[title],abbr[data-original-title] {
    cursor: help;
    border-bottom: 1px dotted #999
}

abbr.initialism {
    font-size: 90%;
    text-transform: uppercase
}

blockquote {
    padding: 0 0 0 15px;
    margin: 0 0 20px;
    border-left: 5px solid #eee
}

blockquote p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 25px
}

blockquote small {
    display: block;
    line-height: 20px;
    color: #999
}

blockquote small:before {
    content: '\2014 \00A0'
}

blockquote.pull-right {
    float: right;
    padding-right: 15px;
    padding-left: 0;
    border-right: 5px solid #eee;
    border-left: 0
}

blockquote.pull-right p,blockquote.pull-right small {
    text-align: right
}

blockquote.pull-right small:before {
    content: ''
}

blockquote.pull-right small:after {
    content: '\00A0 \2014'
}

q:before,q:after,blockquote:before,blockquote:after {
    content: ""
}

address {
    display: block;
    margin-bottom: 20px;
    font-style: normal;
    line-height: 20px
}

code,pre {
    padding: 0 3px 2px;
    font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
    font-size: 11px;
    color: #333;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px
}

code {
    padding: 2px 4px;
    color: #d14;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8
}

pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 12px;
    line-height: 20px;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre;
    white-space: pre-wrap;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,0.15);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

pre.prettyprint {
    margin-bottom: 20px
}

pre code {
    padding: 0;
    color: inherit;
    background-color: transparent;
    border: 0
}

.pre-scrollable {
    max-height: 340px;
    overflow-y: scroll
}

form {
    margin: 0 0 20px
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0
}

legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    font-size: 19.5px;
    line-height: 40px;
    color: #333;
    border: 0;
    border-bottom: 1px solid #e5e5e5
}

legend small {
    font-size: 15px;
    color: #999
}

label,input,button,select,textarea {
    font-size: 13px;
    font-weight: normal;
    line-height: 20px
}

input,button,select,textarea {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
}

label {
    display: block;
    margin-bottom: 5px
}

select,textarea,input[type="text"],input[type="password"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="month"],input[type="time"],input[type="week"],input[type="number"],input[type="email"],input[type="url"],input[type="search"],input[type="tel"],input[type="color"],.uneditable-input {
    display: inline-block;
    height: 20px;
    padding: 4px 6px;
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 20px;
    color: #555;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    vertical-align: middle
}

input,textarea,.uneditable-input {
    width: 206px
}

textarea {
    height: auto
}

textarea,input[type="text"],input[type="password"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="month"],input[type="time"],input[type="week"],input[type="number"],input[type="email"],input[type="url"],input[type="search"],input[type="tel"],input[type="color"],.uneditable-input {
    background-color: #fff;
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -webkit-transition: border linear .2s, box-shadow linear .2s;
    -moz-transition: border linear .2s, box-shadow linear .2s;
    -o-transition: border linear .2s, box-shadow linear .2s;
    transition: border linear .2s, box-shadow linear .2s
}

textarea:focus,input[type="text"]:focus,input[type="password"]:focus,input[type="datetime"]:focus,input[type="datetime-local"]:focus,input[type="date"]:focus,input[type="month"]:focus,input[type="time"]:focus,input[type="week"]:focus,input[type="number"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="search"]:focus,input[type="tel"]:focus,input[type="color"]:focus,.uneditable-input:focus {
    border-color: rgba(82,168,236,0.8);
    outline: 0;
    outline: thin dotted \9;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)
}

input[type="radio"],input[type="checkbox"] {
    margin: 4px 0 0;
    *margin-top: 0;
    margin-top: 1px \9;
    line-height: normal;
    cursor: pointer
}

input[type="file"],input[type="image"],input[type="submit"],input[type="reset"],input[type="button"],input[type="radio"],input[type="checkbox"] {
    width: auto
}

select,input[type="file"] {
    height: 30px;
    *margin-top: 4px;
    line-height: 30px
}

select {
    width: 220px;
    border: 1px solid #ccc;
    background-color: #fff
}

select[multiple],select[size] {
    height: auto
}

select:focus,input[type="file"]:focus,input[type="radio"]:focus,input[type="checkbox"]:focus {
    outline: thin dotted #333;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

.uneditable-input,.uneditable-textarea {
    color: #999;
    background-color: #fcfcfc;
    border-color: #ccc;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.025);
    -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.025);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.025);
    cursor: not-allowed
}

.uneditable-input {
    overflow: hidden;
    white-space: nowrap
}

.uneditable-textarea {
    width: auto;
    height: auto
}

input:-moz-placeholder,textarea:-moz-placeholder {
    color: #999
}

input:-ms-input-placeholder,textarea:-ms-input-placeholder {
    color: #999
}

input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
    color: #999
}

.radio,.checkbox {
    min-height: 20px;
    padding-left: 20px
}

.radio input[type="radio"],.checkbox input[type="checkbox"] {
    float: left;
    margin-left: -20px
}

.controls>.radio:first-child,.controls>.checkbox:first-child {
    padding-top: 5px
}

.radio.inline,.checkbox.inline {
    display: inline-block;
    padding-top: 5px;
    margin-bottom: 0;
    vertical-align: middle
}

.radio.inline+.radio.inline,.checkbox.inline+.checkbox.inline {
    margin-left: 10px
}

.input-mini {
    width: 60px
}

.input-small {
    width: 90px
}

.input-medium {
    width: 150px
}

.input-large {
    width: 210px
}

.input-xlarge {
    width: 270px
}

.input-xxlarge {
    width: 530px
}

input[class*="span"],select[class*="span"],textarea[class*="span"],.uneditable-input[class*="span"],.row-fluid input[class*="span"],.row-fluid select[class*="span"],.row-fluid textarea[class*="span"],.row-fluid .uneditable-input[class*="span"] {
    float: none;
    margin-left: 0
}

.input-append input[class*="span"],.input-append .uneditable-input[class*="span"],.input-prepend input[class*="span"],.input-prepend .uneditable-input[class*="span"],.row-fluid input[class*="span"],.row-fluid select[class*="span"],.row-fluid textarea[class*="span"],.row-fluid .uneditable-input[class*="span"],.row-fluid .input-prepend [class*="span"],.row-fluid .input-append [class*="span"] {
    display: inline-block
}

input,textarea,.uneditable-input {
    margin-left: 0
}

.controls-row [class*="span"]+[class*="span"] {
    margin-left: 20px
}

.span12,textarea.span12,.uneditable-input.span12 {
    width: 926px
}

.span11,textarea.span11,.uneditable-input.span11 {
    width: 846px
}

.span10,textarea.span10,.uneditable-input.span10 {
    width: 766px
}

.span9,textarea.span9,.uneditable-input.span9 {
    width: 686px
}

.span8,textarea.span8,.uneditable-input.span8 {
    width: 606px
}

.span7,textarea.span7,.uneditable-input.span7 {
    width: 526px
}

.span6,textarea.span6,.uneditable-input.span6 {
    width: 446px
}

.span5,textarea.span5,.uneditable-input.span5 {
    width: 366px
}

.span4,textarea.span4,.uneditable-input.span4 {
    width: 286px
}

.span3,textarea.span3,.uneditable-input.span3 {
    width: 206px
}

.span2,textarea.span2,.uneditable-input.span2 {
    width: 126px
}

.span1,textarea.span1,.uneditable-input.span1 {
    width: 46px
}

.controls-row {
    *zoom:1}

.controls-row:before,.controls-row:after {
    display: table;
    content: "";
    line-height: 0
}

.controls-row:after {
    clear: both
}

.controls-row [class*="span"],.row-fluid .controls-row [class*="span"] {
    float: left
}

.controls-row .checkbox[class*="span"],.controls-row .radio[class*="span"] {
    padding-top: 5px
}

input[disabled],select[disabled],textarea[disabled],input[readonly],select[readonly],textarea[readonly] {
    cursor: not-allowed;
    background-color: #eee
}

input[type="radio"][disabled],input[type="checkbox"][disabled],input[type="radio"][readonly],input[type="checkbox"][readonly] {
    background-color: transparent
}

.control-group.warning>label,.control-group.warning .help-block,.control-group.warning .help-inline {
    color: #c09853
}

.control-group.warning .checkbox,.control-group.warning .radio,.control-group.warning input,.control-group.warning select,.control-group.warning textarea {
    color: #c09853
}

.control-group.warning input,.control-group.warning select,.control-group.warning textarea {
    border-color: #c09853;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075)
}

.control-group.warning input:focus,.control-group.warning select:focus,.control-group.warning textarea:focus {
    border-color: #a47e3c;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #dbc59e;
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #dbc59e;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #dbc59e
}

.control-group.warning .input-prepend .add-on,.control-group.warning .input-append .add-on {
    color: #c09853;
    background-color: #fcf8e3;
    border-color: #c09853
}

.control-group.error>label,.control-group.error .help-block,.control-group.error .help-inline {
    color: #b94a48
}

.control-group.error .checkbox,.control-group.error .radio,.control-group.error input,.control-group.error select,.control-group.error textarea {
    color: #b94a48
}

.control-group.error input,.control-group.error select,.control-group.error textarea {
    border-color: #b94a48;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075)
}

.control-group.error input:focus,.control-group.error select:focus,.control-group.error textarea:focus {
    border-color: #953b39;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392;
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392
}

.control-group.error .input-prepend .add-on,.control-group.error .input-append .add-on {
    color: #b94a48;
    background-color: #f2dede;
    border-color: #b94a48
}

.control-group.success>label,.control-group.success .help-block,.control-group.success .help-inline {
    color: #468847
}

.control-group.success .checkbox,.control-group.success .radio,.control-group.success input,.control-group.success select,.control-group.success textarea {
    color: #468847
}

.control-group.success input,.control-group.success select,.control-group.success textarea {
    border-color: #468847;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075)
}

.control-group.success input:focus,.control-group.success select:focus,.control-group.success textarea:focus {
    border-color: #356635;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b;
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b
}

.control-group.success .input-prepend .add-on,.control-group.success .input-append .add-on {
    color: #468847;
    background-color: #dff0d8;
    border-color: #468847
}

.control-group.info>label,.control-group.info .help-block,.control-group.info .help-inline {
    color: #3a87ad
}

.control-group.info .checkbox,.control-group.info .radio,.control-group.info input,.control-group.info select,.control-group.info textarea {
    color: #3a87ad
}

.control-group.info input,.control-group.info select,.control-group.info textarea {
    border-color: #3a87ad;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075)
}

.control-group.info input:focus,.control-group.info select:focus,.control-group.info textarea:focus {
    border-color: #2d6987;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7ab5d3;
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7ab5d3;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7ab5d3
}

.control-group.info .input-prepend .add-on,.control-group.info .input-append .add-on {
    color: #3a87ad;
    background-color: #d9edf7;
    border-color: #3a87ad
}

input:focus:required:invalid,textarea:focus:required:invalid,select:focus:required:invalid {
    color: #b94a48;
    border-color: #ee5f5b
}

input:focus:required:invalid:focus,textarea:focus:required:invalid:focus,select:focus:required:invalid:focus {
    border-color: #e9322d;
    -webkit-box-shadow: 0 0 6px #f8b9b7;
    -moz-box-shadow: 0 0 6px #f8b9b7;
    box-shadow: 0 0 6px #f8b9b7
}

.form-actions {
    padding: 19px 20px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border-top: 1px solid #e5e5e5;
    *zoom:1}

.form-actions:before,.form-actions:after {
    display: table;
    content: "";
    line-height: 0
}

.form-actions:after {
    clear: both
}

.help-block,.help-inline {
    color: #595959
}

.help-block {
    display: block;
    margin-bottom: 10px
}

.help-inline {
    display: inline-block;
    *display: inline;
    *zoom:1;vertical-align: middle;
    padding-left: 5px
}

.input-append,.input-prepend {
    margin-bottom: 5px;
    font-size: 0;
    white-space: nowrap
}

.input-append input,.input-prepend input,.input-append select,.input-prepend select,.input-append .uneditable-input,.input-prepend .uneditable-input,.input-append .dropdown-menu,.input-prepend .dropdown-menu {
    font-size: 13px
}

.input-append input,.input-prepend input,.input-append select,.input-prepend select,.input-append .uneditable-input,.input-prepend .uneditable-input {
    position: relative;
    margin-bottom: 0;
    *margin-left: 0;
    vertical-align: top;
    -webkit-border-radius: 0 4px 4px 0;
    -moz-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0
}

.input-append input:focus,.input-prepend input:focus,.input-append select:focus,.input-prepend select:focus,.input-append .uneditable-input:focus,.input-prepend .uneditable-input:focus {
    z-index: 2
}

.input-append .add-on,.input-prepend .add-on {
    display: inline-block;
    width: auto;
    height: 20px;
    min-width: 16px;
    padding: 4px 5px;
    font-size: 13px;
    font-weight: normal;
    line-height: 20px;
    text-align: center;
    text-shadow: 0 1px 0 #fff;
    background-color: #eee;
    border: 1px solid #ccc
}

.input-append .add-on,.input-prepend .add-on,.input-append .btn,.input-prepend .btn {
    vertical-align: top;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.input-append .active,.input-prepend .active {
    background-color: #a9dba9;
    border-color: #46a546
}

.input-prepend .add-on,.input-prepend .btn {
    margin-right: -1px
}

.input-prepend .add-on:first-child,.input-prepend .btn:first-child {
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px
}

.input-append input,.input-append select,.input-append .uneditable-input {
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px
}

.input-append input+.btn-group .btn,.input-append select+.btn-group .btn,.input-append .uneditable-input+.btn-group .btn {
    -webkit-border-radius: 0 4px 4px 0;
    -moz-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0
}

.input-append .add-on,.input-append .btn,.input-append .btn-group {
    margin-left: -1px
}

.input-append .add-on:last-child,.input-append .btn:last-child {
    -webkit-border-radius: 0 4px 4px 0;
    -moz-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0
}

.input-prepend.input-append input,.input-prepend.input-append select,.input-prepend.input-append .uneditable-input {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.input-prepend.input-append input+.btn-group .btn,.input-prepend.input-append select+.btn-group .btn,.input-prepend.input-append .uneditable-input+.btn-group .btn {
    -webkit-border-radius: 0 4px 4px 0;
    -moz-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0
}

.input-prepend.input-append .add-on:first-child,.input-prepend.input-append .btn:first-child {
    margin-right: -1px;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px
}

.input-prepend.input-append .add-on:last-child,.input-prepend.input-append .btn:last-child {
    margin-left: -1px;
    -webkit-border-radius: 0 4px 4px 0;
    -moz-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0
}

.input-prepend.input-append .btn-group:first-child {
    margin-left: 0
}

input.search-query {
    padding-right: 14px;
    padding-right: 4px \9;
    padding-left: 14px;
    padding-left: 4px \9;
    margin-bottom: 0;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px
}

.form-search .input-append .search-query,.form-search .input-prepend .search-query {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.form-search .input-append .search-query {
    -webkit-border-radius: 14px 0 0 14px;
    -moz-border-radius: 14px 0 0 14px;
    border-radius: 14px 0 0 14px
}

.form-search .input-append .btn {
    -webkit-border-radius: 0 14px 14px 0;
    -moz-border-radius: 0 14px 14px 0;
    border-radius: 0 14px 14px 0
}

.form-search .input-prepend .search-query {
    -webkit-border-radius: 0 14px 14px 0;
    -moz-border-radius: 0 14px 14px 0;
    border-radius: 0 14px 14px 0
}

.form-search .input-prepend .btn {
    -webkit-border-radius: 14px 0 0 14px;
    -moz-border-radius: 14px 0 0 14px;
    border-radius: 14px 0 0 14px
}

.form-search input,.form-inline input,.form-horizontal input,.form-search textarea,.form-inline textarea,.form-horizontal textarea,.form-search select,.form-inline select,.form-horizontal select,.form-search .help-inline,.form-inline .help-inline,.form-horizontal .help-inline,.form-search .uneditable-input,.form-inline .uneditable-input,.form-horizontal .uneditable-input,.form-search .input-prepend,.form-inline .input-prepend,.form-horizontal .input-prepend,.form-search .input-append,.form-inline .input-append,.form-horizontal .input-append {
    display: inline-block;
    *display: inline;
    *zoom:1;margin-bottom: 0;
    vertical-align: middle
}

.form-search .hide,.form-inline .hide,.form-horizontal .hide {
    display: none
}

.form-search label,.form-inline label,.form-search .btn-group,.form-inline .btn-group {
    display: inline-block
}

.form-search .input-append,.form-inline .input-append,.form-search .input-prepend,.form-inline .input-prepend {
    margin-bottom: 0
}

.form-search .radio,.form-search .checkbox,.form-inline .radio,.form-inline .checkbox {
    padding-left: 0;
    margin-bottom: 0;
    vertical-align: middle
}

.form-search .radio input[type="radio"],.form-search .checkbox input[type="checkbox"],.form-inline .radio input[type="radio"],.form-inline .checkbox input[type="checkbox"] {
    float: left;
    margin-right: 3px;
    margin-left: 0
}

.control-group {
    margin-bottom: 10px
}

legend+.control-group {
    margin-top: 20px;
    -webkit-margin-top-collapse: separate
}

.form-horizontal .control-group {
    margin-bottom: 20px;
    *zoom:1}

.form-horizontal .control-group:before,.form-horizontal .control-group:after {
    display: table;
    content: "";
    line-height: 0
}

.form-horizontal .control-group:after {
    clear: both
}

.form-horizontal .control-label {
    float: left;
    width: 160px;
    padding-top: 5px;
    text-align: right
}

.form-horizontal .controls {
    *display: inline-block;
    *padding-left: 20px;
    margin-left: 180px;
    *margin-left: 0
}

.form-horizontal .controls:first-child {
    *padding-left: 180px
}

.form-horizontal .help-block {
    margin-bottom: 0
}

.form-horizontal input+.help-block,.form-horizontal select+.help-block,.form-horizontal textarea+.help-block {
    margin-top: 10px
}

.form-horizontal .form-actions {
    padding-left: 180px
}

table {
    max-width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0
}

.table {
    width: 100%;
    margin-bottom: 20px
}

.table th,.table td {
    padding: 8px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #ddd
}

.table th {
    font-weight: bold
}

.table thead th {
    vertical-align: bottom
}

.table caption+thead tr:first-child th,.table caption+thead tr:first-child td,.table colgroup+thead tr:first-child th,.table colgroup+thead tr:first-child td,.table thead:first-child tr:first-child th,.table thead:first-child tr:first-child td {
    border-top: 0
}

.table tbody+tbody {
    border-top: 2px solid #ddd
}

.table-condensed th,.table-condensed td {
    padding: 4px 5px
}

.table-bordered {
    border: 1px solid #ddd;
    border-collapse: separate;
    *border-collapse: collapse;
    border-left: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

.table-bordered th,.table-bordered td {
    border-left: 1px solid #ddd
}

.table-bordered caption+thead tr:first-child th,.table-bordered caption+tbody tr:first-child th,.table-bordered caption+tbody tr:first-child td,.table-bordered colgroup+thead tr:first-child th,.table-bordered colgroup+tbody tr:first-child th,.table-bordered colgroup+tbody tr:first-child td,.table-bordered thead:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child td {
    border-top: 0
}

.table-bordered thead:first-child tr:first-child th:first-child,.table-bordered tbody:first-child tr:first-child td:first-child {
    -webkit-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px
}

.table-bordered thead:first-child tr:first-child th:last-child,.table-bordered tbody:first-child tr:first-child td:last-child {
    -webkit-border-top-right-radius: 4px;
    border-top-right-radius: 4px;
    -moz-border-radius-topright: 4px
}

.table-bordered thead:last-child tr:last-child th:first-child,.table-bordered tbody:last-child tr:last-child td:first-child,.table-bordered tfoot:last-child tr:last-child td:first-child {
    -webkit-border-radius: 0 0 0 4px;
    -moz-border-radius: 0 0 0 4px;
    border-radius: 0 0 0 4px;
    -webkit-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px
}

.table-bordered thead:last-child tr:last-child th:last-child,.table-bordered tbody:last-child tr:last-child td:last-child,.table-bordered tfoot:last-child tr:last-child td:last-child {
    -webkit-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
    -moz-border-radius-bottomright: 4px
}

.table-bordered caption+thead tr:first-child th:first-child,.table-bordered caption+tbody tr:first-child td:first-child,.table-bordered colgroup+thead tr:first-child th:first-child,.table-bordered colgroup+tbody tr:first-child td:first-child {
    -webkit-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px
}

.table-bordered caption+thead tr:first-child th:last-child,.table-bordered caption+tbody tr:first-child td:last-child,.table-bordered colgroup+thead tr:first-child th:last-child,.table-bordered colgroup+tbody tr:first-child td:last-child {
    -webkit-border-top-right-radius: 4px;
    border-top-right-radius: 4px;
    -moz-border-radius-topright: 4px
}

.table-striped tbody tr:nth-child(odd) td,.table-striped tbody tr:nth-child(odd) th {
    background-color: #f9f9f9
}

.table-hover tbody tr:hover td,.table-hover tbody tr:hover th {
    background-color: #f5f5f5
}

table td[class*="span"],table th[class*="span"],.row-fluid table td[class*="span"],.row-fluid table th[class*="span"] {
    display: table-cell;
    float: none;
    margin-left: 0
}

.table td.span1,.table th.span1 {
    float: none;
    width: 44px;
    margin-left: 0
}

.table td.span2,.table th.span2 {
    float: none;
    width: 124px;
    margin-left: 0
}

.table td.span3,.table th.span3 {
    float: none;
    width: 204px;
    margin-left: 0
}

.table td.span4,.table th.span4 {
    float: none;
    width: 284px;
    margin-left: 0
}

.table td.span5,.table th.span5 {
    float: none;
    width: 364px;
    margin-left: 0
}

.table td.span6,.table th.span6 {
    float: none;
    width: 444px;
    margin-left: 0
}

.table td.span7,.table th.span7 {
    float: none;
    width: 524px;
    margin-left: 0
}

.table td.span8,.table th.span8 {
    float: none;
    width: 604px;
    margin-left: 0
}

.table td.span9,.table th.span9 {
    float: none;
    width: 684px;
    margin-left: 0
}

.table td.span10,.table th.span10 {
    float: none;
    width: 764px;
    margin-left: 0
}

.table td.span11,.table th.span11 {
    float: none;
    width: 844px;
    margin-left: 0
}

.table td.span12,.table th.span12 {
    float: none;
    width: 924px;
    margin-left: 0
}

.table tbody tr.success td {
    background-color: #dff0d8
}

.table tbody tr.error td {
    background-color: #f2dede
}

.table tbody tr.warning td {
    background-color: #fcf8e3
}

.table tbody tr.info td {
    background-color: #d9edf7
}

.table-hover tbody tr.success:hover td {
    background-color: #d0e9c6
}

.table-hover tbody tr.error:hover td {
    background-color: #ebcccc
}

.table-hover tbody tr.warning:hover td {
    background-color: #faf2cc
}

.table-hover tbody tr.info:hover td {
    background-color: #c4e3f3
}

.dropup,.dropdown {
    position: relative
}

.dropdown-toggle {
    *margin-bottom: -3px
}

.dropdown-toggle:active,.open .dropdown-toggle {
    outline: 0
}

.caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: top;
    border-top: 4px solid #000;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    content: ""
}

.dropdown .caret {
    margin-top: 8px;
    margin-left: 2px
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,0.2);
    *border-right-width: 2px;
    *border-bottom-width: 2px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box
}

.dropdown-menu.pull-right {
    right: 0;
    left: auto
}

.dropdown-menu .divider {
    *width: 100%;
    height: 1px;
    margin: 9px 1px;
    *margin: -5px 0 5px;
    overflow: hidden;
    background-color: #e5e5e5;
    border-bottom: 1px solid #fff
}

.dropdown-menu li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 20px;
    color: #333;
    white-space: nowrap
}

.dropdown-menu li>a:hover,.dropdown-menu li>a:focus,.dropdown-submenu:hover>a {
    text-decoration: none;
    color: #fff;
    background-color: #0081c2;
    background-image: -moz-linear-gradient(top, #08c, #0077b3);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#0077b3));
    background-image: -webkit-linear-gradient(top, #08c, #0077b3);
    background-image: -o-linear-gradient(top, #08c, #0077b3);
    background-image: linear-gradient(to bottom, #08c, #0077b3);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)
}

.dropdown-menu .active>a,.dropdown-menu .active>a:hover {
    color: #333;
    text-decoration: none;
    outline: 0;
    background-color: #0081c2;
    background-image: -moz-linear-gradient(top, #08c, #0077b3);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#0077b3));
    background-image: -webkit-linear-gradient(top, #08c, #0077b3);
    background-image: -o-linear-gradient(top, #08c, #0077b3);
    background-image: linear-gradient(to bottom, #08c, #0077b3);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)
}

.dropdown-menu .disabled>a,.dropdown-menu .disabled>a:hover {
    color: #999
}

.dropdown-menu .disabled>a:hover {
    text-decoration: none;
    background-color: transparent;
    background-image: none;
    cursor: default
}

.open {
    *z-index: 1000
}

.open>.dropdown-menu {
    display: block
}

.pull-right>.dropdown-menu {
    right: 0;
    left: auto
}

.dropup .caret,.navbar-fixed-bottom .dropdown .caret {
    border-top: 0;
    border-bottom: 4px solid #000;
    content: ""
}

.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-bottom: 1px
}

.dropdown-submenu {
    position: relative
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px 6px;
    border-radius: 0 6px 6px 6px
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block
}

.dropup .dropdown-submenu>.dropdown-menu {
    top: auto;
    bottom: 0;
    margin-top: 0;
    margin-bottom: -2px;
    -webkit-border-radius: 5px 5px 5px 0;
    -moz-border-radius: 5px 5px 5px 0;
    border-radius: 5px 5px 5px 0
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff
}

.dropdown-submenu.pull-left {
    float: none
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px
}

.dropdown .dropdown-menu .nav-header {
    padding-left: 20px;
    padding-right: 20px
}

.typeahead {
    margin-top: 2px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.05)
}

.well blockquote {
    border-color: #ddd;
    border-color: rgba(0,0,0,0.15)
}

.well-large {
    padding: 24px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px
}

.well-small {
    padding: 9px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px
}

.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -moz-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear
}

.fade.in {
    opacity: 1
}

.collapse {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition: height .35s ease;
    -moz-transition: height .35s ease;
    -o-transition: height .35s ease;
    transition: height .35s ease
}

.collapse.in {
    height: auto
}

.close {
    float: right;
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .2;
    filter: alpha(opacity=20)
}

.close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: .4;
    filter: alpha(opacity=40)
}

button.close {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance: none
}

.btn {
    display: inline-block;
    *display: inline;
    *zoom:1;padding: 4px 12px;
    margin-bottom: 0;
    font-size: 13px;
    line-height: 20px;
    *line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    color: #333;
    text-shadow: 0 1px 1px rgba(255,255,255,0.75);
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top, #fff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #fff, #e6e6e6);
    background-image: -o-linear-gradient(top, #fff, #e6e6e6);
    background-image: linear-gradient(to bottom, #fff, #e6e6e6);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0);
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #e6e6e6;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
    border: 1px solid #bbb;
    *border: 0;
    border-bottom-color: #a2a2a2;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    *margin-left: .3em;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)
}

.btn:hover,.btn:active,.btn.active,.btn.disabled,.btn[disabled] {
    color: #333;
    background-color: #e6e6e6;
    *background-color: #d9d9d9
}

.btn:active,.btn.active {
    background-color: #ccc \9
}

.btn:first-child {
    *margin-left: 0
}

.btn:hover {
    color: #333;
    text-decoration: none;
    background-color: #e6e6e6;
    *background-color: #d9d9d9;
    background-position: 0 -15px;
    -webkit-transition: background-position .1s linear;
    -moz-transition: background-position .1s linear;
    -o-transition: background-position .1s linear;
    transition: background-position .1s linear
}

.btn:focus {
    outline: thin dotted #333;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

.btn.active,.btn:active {
    background-color: #e6e6e6;
    background-color: #d9d9d9 \9;
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05);
    -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05);
    box-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05)
}

.btn.disabled,.btn[disabled] {
    cursor: default;
    background-color: #e6e6e6;
    background-image: none;
    opacity: .65;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none
}

.btn-large {
    padding: 11px 19px;
    font-size: 16.25px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px
}

.btn-large [class^="icon-"],.btn-large [class*=" icon-"] {
    margin-top: 2px
}

.btn-small {
    padding: 2px 10px;
    font-size: 11.05px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px
}

.btn-small [class^="icon-"],.btn-small [class*=" icon-"] {
    margin-top: 0
}

.btn-mini {
    padding: 1px 6px;
    font-size: 9.75px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px
}

.btn-block {
    display: block;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.btn-block+.btn-block {
    margin-top: 5px
}

input[type="submit"].btn-block,input[type="reset"].btn-block,input[type="button"].btn-block {
    width: 100%
}

.btn-primary.active,.btn-warning.active,.btn-danger.active,.btn-success.active,.btn-info.active,.btn-inverse.active {
    color: rgba(255,255,255,0.75)
}

.btn {
    border-color: #c5c5c5;
    border-color: rgba(0,0,0,0.15) rgba(0,0,0,0.15) rgba(0,0,0,0.25)
}

.btn-primary {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #006dcc;
    background-image: -moz-linear-gradient(top, #08c, #04c);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#04c));
    background-image: -webkit-linear-gradient(top, #08c, #04c);
    background-image: -o-linear-gradient(top, #08c, #04c);
    background-image: linear-gradient(to bottom, #08c, #04c);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0044cc', GradientType=0);
    border-color: #04c #04c #002a80;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #04c;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

.btn-primary:hover,.btn-primary:active,.btn-primary.active,.btn-primary.disabled,.btn-primary[disabled] {
    color: #fff;
    background-color: #04c;
    *background-color: #003bb3
}

.btn-primary:active,.btn-primary.active {
    background-color: #039 \9
}

.btn-warning {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #faa732;
    background-image: -moz-linear-gradient(top, #fbb450, #f89406);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fbb450), to(#f89406));
    background-image: -webkit-linear-gradient(top, #fbb450, #f89406);
    background-image: -o-linear-gradient(top, #fbb450, #f89406);
    background-image: linear-gradient(to bottom, #fbb450, #f89406);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffbb450', endColorstr='#fff89406', GradientType=0);
    border-color: #f89406 #f89406 #ad6704;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #f89406;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

.btn-warning:hover,.btn-warning:active,.btn-warning.active,.btn-warning.disabled,.btn-warning[disabled] {
    color: #fff;
    background-color: #f89406;
    *background-color: #df8505
}

.btn-warning:active,.btn-warning.active {
    background-color: #c67605 \9
}

.btn-danger {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #da4f49;
    background-image: -moz-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#bd362f));
    background-image: -webkit-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -o-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: linear-gradient(to bottom, #ee5f5b, #bd362f);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffbd362f', GradientType=0);
    border-color: #bd362f #bd362f #802420;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #bd362f;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

.btn-danger:hover,.btn-danger:active,.btn-danger.active,.btn-danger.disabled,.btn-danger[disabled] {
    color: #fff;
    background-color: #bd362f;
    *background-color: #a9302a
}

.btn-danger:active,.btn-danger.active {
    background-color: #942a25 \9
}

.btn-success {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #5bb75b;
    background-image: -moz-linear-gradient(top, #62c462, #51a351);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#62c462), to(#51a351));
    background-image: -webkit-linear-gradient(top, #62c462, #51a351);
    background-image: -o-linear-gradient(top, #62c462, #51a351);
    background-image: linear-gradient(to bottom, #62c462, #51a351);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff62c462', endColorstr='#ff51a351', GradientType=0);
    border-color: #51a351 #51a351 #387038;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #51a351;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

.btn-success:hover,.btn-success:active,.btn-success.active,.btn-success.disabled,.btn-success[disabled] {
    color: #fff;
    background-color: #51a351;
    *background-color: #499249
}

.btn-success:active,.btn-success.active {
    background-color: #408140 \9
}

.btn-info {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #49afcd;
    background-image: -moz-linear-gradient(top, #5bc0de, #2f96b4);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#5bc0de), to(#2f96b4));
    background-image: -webkit-linear-gradient(top, #5bc0de, #2f96b4);
    background-image: -o-linear-gradient(top, #5bc0de, #2f96b4);
    background-image: linear-gradient(to bottom, #5bc0de, #2f96b4);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff2f96b4', GradientType=0);
    border-color: #2f96b4 #2f96b4 #1f6377;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #2f96b4;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

.btn-info:hover,.btn-info:active,.btn-info.active,.btn-info.disabled,.btn-info[disabled] {
    color: #fff;
    background-color: #2f96b4;
    *background-color: #2a85a0
}

.btn-info:active,.btn-info.active {
    background-color: #24748c \9
}

.btn-inverse {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #363636;
    background-image: -moz-linear-gradient(top, #444, #222);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#444), to(#222));
    background-image: -webkit-linear-gradient(top, #444, #222);
    background-image: -o-linear-gradient(top, #444, #222);
    background-image: linear-gradient(to bottom, #444, #222);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff444444', endColorstr='#ff222222', GradientType=0);
    border-color: #222 #222 #000;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #222;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

.btn-inverse:hover,.btn-inverse:active,.btn-inverse.active,.btn-inverse.disabled,.btn-inverse[disabled] {
    color: #fff;
    background-color: #222;
    *background-color: #151515
}

.btn-inverse:active,.btn-inverse.active {
    background-color: #080808 \9
}

button.btn,input[type="submit"].btn {
    *padding-top: 3px;
    *padding-bottom: 3px
}

button.btn::-moz-focus-inner,input[type="submit"].btn::-moz-focus-inner {
    padding: 0;
    border: 0
}

button.btn.btn-large,input[type="submit"].btn.btn-large {
    *padding-top: 7px;
    *padding-bottom: 7px
}

button.btn.btn-small,input[type="submit"].btn.btn-small {
    *padding-top: 3px;
    *padding-bottom: 3px
}

button.btn.btn-mini,input[type="submit"].btn.btn-mini {
    *padding-top: 1px;
    *padding-bottom: 1px
}

.btn-link,.btn-link:active,.btn-link[disabled] {
    background-color: transparent;
    background-image: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none
}

.btn-link {
    border-color: transparent;
    cursor: pointer;
    color: #08c;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.btn-link:hover {
    color: #005580;
    text-decoration: underline;
    background-color: transparent
}

.btn-link[disabled]:hover {
    color: #333;
    text-decoration: none
}

.btn-group {
    position: relative;
    display: inline-block;
    *display: inline;
    *zoom:1;font-size: 0;
    vertical-align: middle;
    white-space: nowrap;
    *margin-left: .3em
}

.btn-group:first-child {
    *margin-left: 0
}

.btn-group+.btn-group {
    margin-left: 5px
}

.btn-toolbar {
    font-size: 0;
    margin-top: 10px;
    margin-bottom: 10px
}

.btn-toolbar .btn+.btn,.btn-toolbar .btn-group+.btn,.btn-toolbar .btn+.btn-group {
    margin-left: 5px
}

.btn-group>.btn {
    position: relative;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.btn-group>.btn+.btn {
    margin-left: -1px
}

.btn-group>.btn,.btn-group>.dropdown-menu {
    font-size: 13px
}

.btn-group>.btn-mini {
    font-size: 11px
}

.btn-group>.btn-small {
    font-size: 12px
}

.btn-group>.btn-large {
    font-size: 16px
}

.btn-group>.btn:first-child {
    margin-left: 0;
    -webkit-border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
    border-top-left-radius: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    border-bottom-left-radius: 4px
}

.btn-group>.btn:last-child,.btn-group>.dropdown-toggle {
    -webkit-border-top-right-radius: 4px;
    -moz-border-radius-topright: 4px;
    border-top-right-radius: 4px;
    -webkit-border-bottom-right-radius: 4px;
    -moz-border-radius-bottomright: 4px;
    border-bottom-right-radius: 4px
}

.btn-group>.btn.large:first-child {
    margin-left: 0;
    -webkit-border-top-left-radius: 6px;
    -moz-border-radius-topleft: 6px;
    border-top-left-radius: 6px;
    -webkit-border-bottom-left-radius: 6px;
    -moz-border-radius-bottomleft: 6px;
    border-bottom-left-radius: 6px
}

.btn-group>.btn.large:last-child,.btn-group>.large.dropdown-toggle {
    -webkit-border-top-right-radius: 6px;
    -moz-border-radius-topright: 6px;
    border-top-right-radius: 6px;
    -webkit-border-bottom-right-radius: 6px;
    -moz-border-radius-bottomright: 6px;
    border-bottom-right-radius: 6px
}

.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active {
    z-index: 2
}

.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle {
    outline: 0
}

.btn-group>.btn+.dropdown-toggle {
    padding-left: 8px;
    padding-right: 8px;
    -webkit-box-shadow: inset 1px 0 0 rgba(255,255,255,.125), inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
    -moz-box-shadow: inset 1px 0 0 rgba(255,255,255,.125), inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
    box-shadow: inset 1px 0 0 rgba(255,255,255,.125), inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
    *padding-top: 5px;
    *padding-bottom: 5px
}

.btn-group>.btn-mini+.dropdown-toggle {
    padding-left: 5px;
    padding-right: 5px;
    *padding-top: 2px;
    *padding-bottom: 2px
}

.btn-group>.btn-small+.dropdown-toggle {
    *padding-top: 5px;
    *padding-bottom: 4px
}

.btn-group>.btn-large+.dropdown-toggle {
    padding-left: 12px;
    padding-right: 12px;
    *padding-top: 7px;
    *padding-bottom: 7px
}

.btn-group.open .dropdown-toggle {
    background-image: none;
    -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05);
    -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05);
    box-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05)
}

.btn-group.open .btn.dropdown-toggle {
    background-color: #e6e6e6
}

.btn-group.open .btn-primary.dropdown-toggle {
    background-color: #04c
}

.btn-group.open .btn-warning.dropdown-toggle {
    background-color: #f89406
}

.btn-group.open .btn-danger.dropdown-toggle {
    background-color: #bd362f
}

.btn-group.open .btn-success.dropdown-toggle {
    background-color: #51a351
}

.btn-group.open .btn-info.dropdown-toggle {
    background-color: #2f96b4
}

.btn-group.open .btn-inverse.dropdown-toggle {
    background-color: #222
}

.btn .caret {
    margin-top: 8px;
    margin-left: 0
}

.btn-mini .caret,.btn-small .caret,.btn-large .caret {
    margin-top: 6px
}

.btn-large .caret {
    border-left-width: 5px;
    border-right-width: 5px;
    border-top-width: 5px
}

.dropup .btn-large .caret {
    border-bottom-width: 5px
}

.btn-primary .caret,.btn-warning .caret,.btn-danger .caret,.btn-info .caret,.btn-success .caret,.btn-inverse .caret {
    border-top-color: #fff;
    border-bottom-color: #fff
}

.btn-group-vertical {
    display: inline-block;
    *display: inline;
    *zoom:1}

.btn-group-vertical .btn {
    display: block;
    float: none;
    width: 100%;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.btn-group-vertical .btn+.btn {
    margin-left: 0;
    margin-top: -1px
}

.btn-group-vertical .btn:first-child {
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0
}

.btn-group-vertical .btn:last-child {
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px
}

.btn-group-vertical .btn-large:first-child {
    -webkit-border-radius: 6px 6px 0 0;
    -moz-border-radius: 6px 6px 0 0;
    border-radius: 6px 6px 0 0
}

.btn-group-vertical .btn-large:last-child {
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px
}

.alert {
    padding: 8px 35px 8px 14px;
    margin-bottom: 20px;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5);
    background-color: #fcf8e3;
    border: 1px solid #fbeed5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #c09853
}

.alert h4 {
    margin: 0
}

.alert .close {
    position: relative;
    top: -2px;
    right: -21px;
    line-height: 20px
}

.alert-success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #468847
}

.alert-danger,.alert-error {
    background-color: #f2dede;
    border-color: #eed3d7;
    color: #b94a48
}

.alert-info {
    background-color: #d9edf7;
    border-color: #bce8f1;
    color: #3a87ad
}

.alert-block {
    padding-top: 14px;
    padding-bottom: 14px
}

.alert-block>p,.alert-block>ul {
    margin-bottom: 0
}

.alert-block p+p {
    margin-top: 5px
}

.nav {
    margin-left: 0;
    margin-bottom: 20px;
    list-style: none
}

.nav>li>a {
    display: block
}

.nav>li>a:hover {
    text-decoration: none;
    background-color: #eee
}

.nav>.pull-right {
    float: right
}

.nav-header {
    display: block;
    padding: 3px 15px;
    font-size: 11px;
    font-weight: bold;
    line-height: 20px;
    color: #999;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5);
    text-transform: uppercase
}

.nav li+.nav-header {
    margin-top: 9px
}

.nav-list {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 0
}

.nav-list>li>a,.nav-list .nav-header {
    margin-left: -15px;
    margin-right: -15px;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5)
}

.nav-list>li>a {
    padding: 3px 15px
}

.nav-list>.active>a,.nav-list>.active>a:hover {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.2);
    background-color: #08c
}

.nav-list [class^="icon-"],.nav-list [class*=" icon-"] {
    margin-right: 2px
}

.nav-list .divider {
    *width: 100%;
    height: 1px;
    margin: 9px 1px;
    *margin: -5px 0 5px;
    overflow: hidden;
    background-color: #e5e5e5;
    border-bottom: 1px solid #fff
}

.nav-tabs,.nav-pills {
    *zoom:1}

.nav-tabs:before,.nav-pills:before,.nav-tabs:after,.nav-pills:after {
    display: table;
    content: "";
    line-height: 0
}

.nav-tabs:after,.nav-pills:after {
    clear: both
}

.nav-tabs>li,.nav-pills>li {
    float: left
}

.nav-tabs>li>a,.nav-pills>li>a {
    padding-right: 12px;
    padding-left: 12px;
    margin-right: 2px;
    line-height: 14px
}

.nav-tabs {
    border-bottom: 1px solid #ddd
}

.nav-tabs>li {
    margin-bottom: -1px
}

.nav-tabs>li>a {
    padding-top: 8px;
    padding-bottom: 8px;
    line-height: 20px;
    border: 1px solid transparent;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0
}

.nav-tabs>li>a:hover {
    border-color: #eee #eee #ddd
}

.nav-tabs>.active>a,.nav-tabs>.active>a:hover {
    color: #555;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
    cursor: default
}

.nav-pills>li>a {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 2px;
    margin-bottom: 2px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.nav-pills>.active>a,.nav-pills>.active>a:hover {
    color: #fff;
    background-color: #08c
}

.nav-stacked>li {
    float: none
}

.nav-stacked>li>a {
    margin-right: 0
}

.nav-tabs.nav-stacked {
    border-bottom: 0
}

.nav-tabs.nav-stacked>li>a {
    border: 1px solid #ddd;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.nav-tabs.nav-stacked>li:first-child>a {
    -webkit-border-top-right-radius: 4px;
    -moz-border-radius-topright: 4px;
    border-top-right-radius: 4px;
    -webkit-border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
    border-top-left-radius: 4px
}

.nav-tabs.nav-stacked>li:last-child>a {
    -webkit-border-bottom-right-radius: 4px;
    -moz-border-radius-bottomright: 4px;
    border-bottom-right-radius: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    border-bottom-left-radius: 4px
}

.nav-tabs.nav-stacked>li>a:hover {
    border-color: #ddd;
    z-index: 2
}

.nav-pills.nav-stacked>li>a {
    margin-bottom: 3px
}

.nav-pills.nav-stacked>li:last-child>a {
    margin-bottom: 1px
}

.nav-tabs .dropdown-menu {
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px
}

.nav-pills .dropdown-menu {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px
}

.nav .dropdown-toggle .caret {
    border-top-color: #08c;
    border-bottom-color: #08c;
    margin-top: 6px
}

.nav .dropdown-toggle:hover .caret {
    border-top-color: #005580;
    border-bottom-color: #005580
}

.nav-tabs .dropdown-toggle .caret {
    margin-top: 8px
}

.nav .active .dropdown-toggle .caret {
    border-top-color: #fff;
    border-bottom-color: #fff
}

.nav-tabs .active .dropdown-toggle .caret {
    border-top-color: #555;
    border-bottom-color: #555
}

.nav>.dropdown.active>a:hover {
    cursor: pointer
}

.nav-tabs .open .dropdown-toggle,.nav-pills .open .dropdown-toggle,.nav>li.dropdown.open.active>a:hover {
    color: #fff;
    background-color: #999;
    border-color: #999
}

.nav li.dropdown.open .caret,.nav li.dropdown.open.active .caret,.nav li.dropdown.open a:hover .caret {
    border-top-color: #fff;
    border-bottom-color: #fff;
    opacity: 1;
    filter: alpha(opacity=100)
}

.tabs-stacked .open>a:hover {
    border-color: #999
}

.tabbable {
    *zoom:1}

.tabbable:before,.tabbable:after {
    display: table;
    content: "";
    line-height: 0
}

.tabbable:after {
    clear: both
}

.tab-content {
    overflow: auto
}

.tabs-below>.nav-tabs,.tabs-right>.nav-tabs,.tabs-left>.nav-tabs {
    border-bottom: 0
}

.tab-content>.tab-pane,.pill-content>.pill-pane {
    display: none
}

.tab-content>.active,.pill-content>.active {
    display: block
}

.tabs-below>.nav-tabs {
    border-top: 1px solid #ddd
}

.tabs-below>.nav-tabs>li {
    margin-top: -1px;
    margin-bottom: 0
}

.tabs-below>.nav-tabs>li>a {
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px
}

.tabs-below>.nav-tabs>li>a:hover {
    border-bottom-color: transparent;
    border-top-color: #ddd
}

.tabs-below>.nav-tabs>.active>a,.tabs-below>.nav-tabs>.active>a:hover {
    border-color: transparent #ddd #ddd #ddd
}

.tabs-left>.nav-tabs>li,.tabs-right>.nav-tabs>li {
    float: none
}

.tabs-left>.nav-tabs>li>a,.tabs-right>.nav-tabs>li>a {
    min-width: 74px;
    margin-right: 0;
    margin-bottom: 3px
}

.tabs-left>.nav-tabs {
    float: left;
    margin-right: 19px;
    border-right: 1px solid #ddd
}

.tabs-left>.nav-tabs>li>a {
    margin-right: -1px;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px
}

.tabs-left>.nav-tabs>li>a:hover {
    border-color: #eee #ddd #eee #eee
}

.tabs-left>.nav-tabs .active>a,.tabs-left>.nav-tabs .active>a:hover {
    border-color: #ddd transparent #ddd #ddd;
    *border-right-color: #fff
}

.tabs-right>.nav-tabs {
    float: right;
    margin-left: 19px;
    border-left: 1px solid #ddd
}

.tabs-right>.nav-tabs>li>a {
    margin-left: -1px;
    -webkit-border-radius: 0 4px 4px 0;
    -moz-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0
}

.tabs-right>.nav-tabs>li>a:hover {
    border-color: #eee #eee #eee #ddd
}

.tabs-right>.nav-tabs .active>a,.tabs-right>.nav-tabs .active>a:hover {
    border-color: #ddd #ddd #ddd transparent;
    *border-left-color: #fff
}

.nav>.disabled>a {
    color: #999
}

.nav>.disabled>a:hover {
    text-decoration: none;
    background-color: transparent;
    cursor: default
}

.navbar {
    overflow: visible;
    margin-bottom: 20px;
    color: #777;
    *position: relative;
    *z-index: 2
}

.navbar-inner {
    min-height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #fafafa;
    background-image: -moz-linear-gradient(top, #ffffff, #f2f2f2);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#f2f2f2));
    background-image: -webkit-linear-gradient(top, #ffffff, #f2f2f2);
    background-image: -o-linear-gradient(top, #ffffff, #f2f2f2);
    background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff2f2f2', GradientType=0);
    border: 1px solid #d4d4d4;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,0.065);
    -moz-box-shadow: 0 1px 4px rgba(0,0,0,0.065);
    box-shadow: 0 1px 4px rgba(0,0,0,0.065);
    *zoom:1}

.navbar-inner:before,.navbar-inner:after {
    display: table;
    content: "";
    line-height: 0
}

.navbar-inner:after {
    clear: both
}

.navbar .container {
    width: auto
}

.nav-collapse.collapse {
    height: auto;
    overflow: visible
}

.navbar .brand {
    float: left;
    display: block;
    padding: 10px 20px 10px;
    margin-left: -20px;
    font-size: 20px;
    font-weight: 200;
    color: #777;
    text-shadow: 0 1px 0 #ffffff
}

.navbar .brand:hover {
    text-decoration: none
}

.navbar-text {
    margin-bottom: 0;
    line-height: 40px
}

.navbar-link {
    color: #777
}

.navbar-link:hover {
    color: #333
}

.navbar .divider-vertical {
    height: 40px;
    margin: 0 9px;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #ffffff
}

.navbar .btn,.navbar .btn-group {
    margin-top: 5px
}

.navbar .btn-group .btn,.navbar .input-prepend .btn,.navbar .input-append .btn {
    margin-top: 0
}

.navbar-form {
    margin-bottom: 0;
    *zoom:1}

.navbar-form:before,.navbar-form:after {
    display: table;
    content: "";
    line-height: 0
}

.navbar-form:after {
    clear: both
}

.navbar-form input,.navbar-form select,.navbar-form .radio,.navbar-form .checkbox {
    margin-top: 5px
}

.navbar-form input,.navbar-form select,.navbar-form .btn {
    display: inline-block;
    margin-bottom: 0
}

.navbar-form input[type="image"],.navbar-form input[type="checkbox"],.navbar-form input[type="radio"] {
    margin-top: 3px
}

.navbar-form .input-append,.navbar-form .input-prepend {
    margin-top: 6px;
    white-space: nowrap
}

.navbar-form .input-append input,.navbar-form .input-prepend input {
    margin-top: 0
}

.navbar-search {
    position: relative;
    float: left;
    margin-top: 5px;
    margin-bottom: 0
}

.navbar-search .search-query {
    margin-bottom: 0;
    padding: 4px 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    font-weight: normal;
    line-height: 1;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px
}

.navbar-static-top {
    position: static;
    margin-bottom: 0
}

.navbar-static-top .navbar-inner {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.navbar-fixed-top,.navbar-fixed-bottom {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 500;
    margin-bottom: 0
}

.navbar-fixed-top .navbar-inner,.navbar-static-top .navbar-inner {
    border-width: 0 0 1px
}

.navbar-fixed-bottom .navbar-inner {
    border-width: 1px 0 0
}

.navbar-fixed-top .navbar-inner,.navbar-fixed-bottom .navbar-inner {
    padding-left: 0;
    padding-right: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.navbar-static-top .container,.navbar-fixed-top .container,.navbar-fixed-bottom .container {
    width: 940px
}

.navbar-fixed-top {
    top: 0
}

.navbar-fixed-top .navbar-inner,.navbar-static-top .navbar-inner {
    -webkit-box-shadow: 0 1px 10px rgba(0,0,0,.1);
    -moz-box-shadow: 0 1px 10px rgba(0,0,0,.1);
    box-shadow: 0 1px 10px rgba(0,0,0,.1)
}

.navbar-fixed-bottom {
    bottom: 0
}

.navbar-fixed-bottom .navbar-inner {
    -webkit-box-shadow: 0 -1px 10px rgba(0,0,0,.1);
    -moz-box-shadow: 0 -1px 10px rgba(0,0,0,.1);
    box-shadow: 0 -1px 10px rgba(0,0,0,.1)
}

.navbar .nav {
    position: relative;
    left: 0;
    display: block;
    float: left;
    margin: 0 10px 0 0
}

.navbar .nav.pull-right {
    float: right;
    margin-right: 0
}

.navbar .nav>li {
    float: left
}

.navbar .nav>li>a {
    float: none;
    padding: 10px 15px 10px;
    color: #777;
    text-decoration: none;
    text-shadow: 0 1px 0 #ffffff
}

.navbar .nav .dropdown-toggle .caret {
    margin-top: 8px
}

.navbar .nav>li>a:focus,.navbar .nav>li>a:hover {
    background-color: transparent;
    color: #333;
    text-decoration: none
}

.navbar .nav>.active>a,.navbar .nav>.active>a:hover,.navbar .nav>.active>a:focus {
    color: #555;
    text-decoration: none;
    background-color: #e5e5e5;
    -webkit-box-shadow: inset 0 3px 8px rgba(0,0,0,0.125);
    -moz-box-shadow: inset 0 3px 8px rgba(0,0,0,0.125);
    box-shadow: inset 0 3px 8px rgba(0,0,0,0.125)
}

.navbar .btn-navbar {
    display: none;
    float: right;
    padding: 7px 10px;
    margin-left: 5px;
    margin-right: 5px;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #ededed;
    background-image: -moz-linear-gradient(top, #f2f2f2, #e5e5e5);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f2f2f2), to(#e5e5e5));
    background-image: -webkit-linear-gradient(top, #f2f2f2, #e5e5e5);
    background-image: -o-linear-gradient(top, #f2f2f2, #e5e5e5);
    background-image: linear-gradient(to bottom, #f2f2f2, #e5e5e5);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2f2f2', endColorstr='#ffe5e5e5', GradientType=0);
    border-color: #e5e5e5 #e5e5e5 #bfbfbf;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #e5e5e5;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.075);
    -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.075)
}

.navbar .btn-navbar:hover,.navbar .btn-navbar:active,.navbar .btn-navbar.active,.navbar .btn-navbar.disabled,.navbar .btn-navbar[disabled] {
    color: #fff;
    background-color: #e5e5e5;
    *background-color: #d9d9d9
}

.navbar .btn-navbar:active,.navbar .btn-navbar.active {
    background-color: #ccc \9
}

.navbar .btn-navbar .icon-bar {
    display: block;
    width: 18px;
    height: 2px;
    background-color: #f5f5f5;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.25);
    -moz-box-shadow: 0 1px 0 rgba(0,0,0,0.25);
    box-shadow: 0 1px 0 rgba(0,0,0,0.25)
}

.btn-navbar .icon-bar+.icon-bar {
    margin-top: 3px
}

.navbar .nav>li>.dropdown-menu:before {
    content: '';
    display: inline-block;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ccc;
    border-bottom-color: rgba(0,0,0,0.2);
    position: absolute;
    top: -7px;
    left: 9px
}

.navbar .nav>li>.dropdown-menu:after {
    content: '';
    display: inline-block;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    position: absolute;
    top: -6px;
    left: 10px
}

.navbar-fixed-bottom .nav>li>.dropdown-menu:before {
    border-top: 7px solid #ccc;
    border-top-color: rgba(0,0,0,0.2);
    border-bottom: 0;
    bottom: -7px;
    top: auto
}

.navbar-fixed-bottom .nav>li>.dropdown-menu:after {
    border-top: 6px solid #fff;
    border-bottom: 0;
    bottom: -6px;
    top: auto
}

.navbar .nav li.dropdown.open>.dropdown-toggle,.navbar .nav li.dropdown.active>.dropdown-toggle,.navbar .nav li.dropdown.open.active>.dropdown-toggle {
    background-color: #e5e5e5;
    color: #555
}

.navbar .nav li.dropdown>.dropdown-toggle .caret {
    border-top-color: #777;
    border-bottom-color: #777
}

.navbar .nav li.dropdown.open>.dropdown-toggle .caret,.navbar .nav li.dropdown.active>.dropdown-toggle .caret,.navbar .nav li.dropdown.open.active>.dropdown-toggle .caret {
    border-top-color: #555;
    border-bottom-color: #555
}

.navbar .pull-right>li>.dropdown-menu,.navbar .nav>li>.dropdown-menu.pull-right {
    left: auto;
    right: 0
}

.navbar .pull-right>li>.dropdown-menu:before,.navbar .nav>li>.dropdown-menu.pull-right:before {
    left: auto;
    right: 12px
}

.navbar .pull-right>li>.dropdown-menu:after,.navbar .nav>li>.dropdown-menu.pull-right:after {
    left: auto;
    right: 13px
}

.navbar .pull-right>li>.dropdown-menu .dropdown-menu,.navbar .nav>li>.dropdown-menu.pull-right .dropdown-menu {
    left: auto;
    right: 100%;
    margin-left: 0;
    margin-right: -1px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px
}

.navbar-inverse {
    color: #999
}

.navbar-inverse .navbar-inner {
    background-color: #1b1b1b;
    background-image: -moz-linear-gradient(top, #222222, #111111);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#222222), to(#111111));
    background-image: -webkit-linear-gradient(top, #222222, #111111);
    background-image: -o-linear-gradient(top, #222222, #111111);
    background-image: linear-gradient(to bottom, #222222, #111111);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff222222', endColorstr='#ff111111', GradientType=0);
    border-color: #252525
}

.navbar-inverse .brand,.navbar-inverse .nav>li>a {
    color: #999;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25)
}

.navbar-inverse .brand:hover,.navbar-inverse .nav>li>a:hover {
    color: #fff
}

.navbar-inverse .nav>li>a:focus,.navbar-inverse .nav>li>a:hover {
    background-color: transparent;
    color: #fff
}

.navbar-inverse .nav .active>a,.navbar-inverse .nav .active>a:hover,.navbar-inverse .nav .active>a:focus {
    color: #fff;
    background-color: #111111
}

.navbar-inverse .navbar-link {
    color: #999
}

.navbar-inverse .navbar-link:hover {
    color: #fff
}

.navbar-inverse .divider-vertical {
    border-left-color: #111111;
    border-right-color: #222222
}

.navbar-inverse .nav li.dropdown.open>.dropdown-toggle,.navbar-inverse .nav li.dropdown.active>.dropdown-toggle,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle {
    background-color: #111111;
    color: #fff
}

.navbar-inverse .nav li.dropdown>.dropdown-toggle .caret {
    border-top-color: #999;
    border-bottom-color: #999
}

.navbar-inverse .nav li.dropdown.open>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.active>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle .caret {
    border-top-color: #fff;
    border-bottom-color: #fff
}

.navbar-inverse .navbar-search .search-query {
    color: #fff;
    background-color: #515151;
    border-color: #111111;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1), 0 1px 0 rgba(255,255,255,.15);
    -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.1), 0 1px 0 rgba(255,255,255,.15);
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1), 0 1px 0 rgba(255,255,255,.15);
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none
}

.navbar-inverse .navbar-search .search-query:-moz-placeholder {
    color: #ccc
}

.navbar-inverse .navbar-search .search-query:-ms-input-placeholder {
    color: #ccc
}

.navbar-inverse .navbar-search .search-query::-webkit-input-placeholder {
    color: #ccc
}

.navbar-inverse .navbar-search .search-query:focus,.navbar-inverse .navbar-search .search-query.focused {
    padding: 5px 15px;
    color: #333;
    text-shadow: 0 1px 0 #fff;
    background-color: #fff;
    border: 0;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.15);
    -moz-box-shadow: 0 0 3px rgba(0,0,0,0.15);
    box-shadow: 0 0 3px rgba(0,0,0,0.15);
    outline: 0
}

.navbar-inverse .btn-navbar {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #0e0e0e;
    background-image: -moz-linear-gradient(top, #151515, #040404);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#151515), to(#040404));
    background-image: -webkit-linear-gradient(top, #151515, #040404);
    background-image: -o-linear-gradient(top, #151515, #040404);
    background-image: linear-gradient(to bottom, #151515, #040404);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff151515', endColorstr='#ff040404', GradientType=0);
    border-color: #040404 #040404 #000;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #040404;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

.navbar-inverse .btn-navbar:hover,.navbar-inverse .btn-navbar:active,.navbar-inverse .btn-navbar.active,.navbar-inverse .btn-navbar.disabled,.navbar-inverse .btn-navbar[disabled] {
    color: #fff;
    background-color: #040404;
    *background-color: #000
}

.navbar-inverse .btn-navbar:active,.navbar-inverse .btn-navbar.active {
    background-color: #000 \9
}

.breadcrumb {
    padding: 8px 15px;
    margin: 0 0 20px;
    list-style: none;
    background-color: #f5f5f5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

.breadcrumb li {
    display: inline-block;
    *display: inline;
    *zoom:1;text-shadow: 0 1px 0 #fff
}

.breadcrumb .divider {
    padding: 0 5px;
    color: #ccc
}

.breadcrumb .active {
    color: #999
}

.pagination {
    margin: 20px 0
}

.pagination ul {
    display: inline-block;
    *display: inline;
    *zoom:1;margin-left: 0;
    margin-bottom: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    box-shadow: 0 1px 2px rgba(0,0,0,0.05)
}

.pagination ul>li {
    display: inline
}

.pagination ul>li>a,.pagination ul>li>span {
    float: left;
    padding: 4px 12px;
    line-height: 20px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0
}

.pagination ul>li>a:hover,.pagination ul>.active>a,.pagination ul>.active>span {
    background-color: #f5f5f5
}

.pagination ul>.active>a,.pagination ul>.active>span {
    color: #999;
    cursor: default
}

.pagination ul>.disabled>span,.pagination ul>.disabled>a,.pagination ul>.disabled>a:hover {
    color: #999;
    background-color: transparent;
    cursor: default
}

.pagination ul>li:first-child>a,.pagination ul>li:first-child>span {
    border-left-width: 1px;
    -webkit-border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
    border-top-left-radius: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    border-bottom-left-radius: 4px
}

.pagination ul>li:last-child>a,.pagination ul>li:last-child>span {
    -webkit-border-top-right-radius: 4px;
    -moz-border-radius-topright: 4px;
    border-top-right-radius: 4px;
    -webkit-border-bottom-right-radius: 4px;
    -moz-border-radius-bottomright: 4px;
    border-bottom-right-radius: 4px
}

.pagination-centered {
    text-align: center
}

.pagination-right {
    text-align: right
}

.pagination-large ul>li>a,.pagination-large ul>li>span {
    padding: 11px 19px;
    font-size: 16.25px
}

.pagination-large ul>li:first-child>a,.pagination-large ul>li:first-child>span {
    -webkit-border-top-left-radius: 6px;
    -moz-border-radius-topleft: 6px;
    border-top-left-radius: 6px;
    -webkit-border-bottom-left-radius: 6px;
    -moz-border-radius-bottomleft: 6px;
    border-bottom-left-radius: 6px
}

.pagination-large ul>li:last-child>a,.pagination-large ul>li:last-child>span {
    -webkit-border-top-right-radius: 6px;
    -moz-border-radius-topright: 6px;
    border-top-right-radius: 6px;
    -webkit-border-bottom-right-radius: 6px;
    -moz-border-radius-bottomright: 6px;
    border-bottom-right-radius: 6px
}

.pagination-mini ul>li:first-child>a,.pagination-small ul>li:first-child>a,.pagination-mini ul>li:first-child>span,.pagination-small ul>li:first-child>span {
    -webkit-border-top-left-radius: 3px;
    -moz-border-radius-topleft: 3px;
    border-top-left-radius: 3px;
    -webkit-border-bottom-left-radius: 3px;
    -moz-border-radius-bottomleft: 3px;
    border-bottom-left-radius: 3px
}

.pagination-mini ul>li:last-child>a,.pagination-small ul>li:last-child>a,.pagination-mini ul>li:last-child>span,.pagination-small ul>li:last-child>span {
    -webkit-border-top-right-radius: 3px;
    -moz-border-radius-topright: 3px;
    border-top-right-radius: 3px;
    -webkit-border-bottom-right-radius: 3px;
    -moz-border-radius-bottomright: 3px;
    border-bottom-right-radius: 3px
}

.pagination-small ul>li>a,.pagination-small ul>li>span {
    padding: 2px 10px;
    font-size: 11.05px
}

.pagination-mini ul>li>a,.pagination-mini ul>li>span {
    padding: 1px 6px;
    font-size: 9.75px
}

.pager {
    margin: 20px 0;
    list-style: none;
    text-align: center;
    *zoom:1}

.pager:before,.pager:after {
    display: table;
    content: "";
    line-height: 0
}

.pager:after {
    clear: both
}

.pager li {
    display: inline
}

.pager li>a,.pager li>span {
    display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px
}

.pager li>a:hover {
    text-decoration: none;
    background-color: #f5f5f5
}

.pager .next>a,.pager .next>span {
    float: right
}

.pager .previous>a,.pager .previous>span {
    float: left
}

.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>span {
    color: #999;
    background-color: #fff;
    cursor: default
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000
}

.modal-backdrop.fade {
    opacity: 0
}

.modal-backdrop,.modal-backdrop.fade.in {
    opacity: .8;
    filter: alpha(opacity=80)
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1050;
    width: 560px;
    margin: -250px 0 0 -280px;
    background-color: #fff;
    border: 1px solid #999;
    border: 1px solid rgba(0,0,0,0.3);
    *border: 1px solid #999;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 7px rgba(0,0,0,0.3);
    -moz-box-shadow: 0 3px 7px rgba(0,0,0,0.3);
    box-shadow: 0 3px 7px rgba(0,0,0,0.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    outline: none
}

.modal.fade {
    -webkit-transition: opacity .3s linear, top .3s ease-out;
    -moz-transition: opacity .3s linear, top .3s ease-out;
    -o-transition: opacity .3s linear, top .3s ease-out;
    transition: opacity .3s linear, top .3s ease-out;
    top: -25%
}

.modal.fade.in {
    top: 50%
}

.modal-header {
    padding: 9px 15px;
    border-bottom: 1px solid #eee
}

.modal-header .close {
    margin-top: 2px
}

.modal-header h3 {
    margin: 0;
    line-height: 30px
}

.modal-body {
    overflow-y: auto;
    max-height: 400px;
    padding: 15px
}

.modal-form {
    margin-bottom: 0
}

.modal-footer {
    padding: 14px 15px 15px;
    margin-bottom: 0;
    text-align: right;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px;
    -webkit-box-shadow: inset 0 1px 0 #fff;
    -moz-box-shadow: inset 0 1px 0 #fff;
    box-shadow: inset 0 1px 0 #fff;
    *zoom:1}

.modal-footer:before,.modal-footer:after {
    display: table;
    content: "";
    line-height: 0
}

.modal-footer:after {
    clear: both
}

.modal-footer .btn+.btn {
    margin-left: 5px;
    margin-bottom: 0
}

.modal-footer .btn-group .btn+.btn {
    margin-left: -1px
}

.modal-footer .btn-block+.btn-block {
    margin-left: 0
}

.tooltip {
    position: absolute;
    z-index: 1020;
    display: block;
    visibility: visible;
    font-size: 11px;
    opacity: 0;
    filter: alpha(opacity=0)
}

.tooltip.in {
    opacity: .8;
    filter: alpha(opacity=80)
}

.tooltip.top {
    margin-top: -3px;
    padding: 5px 0
}

.tooltip.right {
    margin-left: 3px;
    padding: 0 5px
}

.tooltip.bottom {
    margin-top: 3px;
    padding: 5px 0
}

.tooltip.left {
    margin-left: -3px;
    padding: 0 5px
}

.tooltip-inner {
    max-width: 200px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: #000;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

.tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
}

.tooltip.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000
}

.tooltip.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #000
}

.tooltip.left .tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #000
}

.tooltip.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000
}

.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1010;
    display: none;
    width: 236px;
    padding: 1px;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,0.2);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2)
}

.popover.top {
    margin-top: -10px
}

.popover.right {
    margin-left: 10px
}

.popover.bottom {
    margin-top: 10px
}

.popover.left {
    margin-left: -10px
}

.popover-title {
    margin: 0;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0
}

.popover-content {
    padding: 9px 14px
}

.popover-content p,.popover-content ul,.popover-content ol {
    margin-bottom: 0
}

.popover .arrow,.popover .arrow:after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
}

.popover .arrow:after {
    content: "";
    z-index: -1
}

.popover.top .arrow {
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px 10px 0;
    border-top-color: #fff
}

.popover.top .arrow:after {
    border-width: 11px 11px 0;
    border-top-color: rgba(0,0,0,0.25);
    bottom: -1px;
    left: -11px
}

.popover.right .arrow {
    top: 50%;
    left: -10px;
    margin-top: -10px;
    border-width: 10px 10px 10px 0;
    border-right-color: #fff
}

.popover.right .arrow:after {
    border-width: 11px 11px 11px 0;
    border-right-color: rgba(0,0,0,0.25);
    bottom: -11px;
    left: -1px
}

.popover.bottom .arrow {
    top: -10px;
    left: 50%;
    margin-left: -10px;
    border-width: 0 10px 10px;
    border-bottom-color: #fff
}

.popover.bottom .arrow:after {
    border-width: 0 11px 11px;
    border-bottom-color: rgba(0,0,0,0.25);
    top: -1px;
    left: -11px
}

.popover.left .arrow {
    top: 50%;
    right: -10px;
    margin-top: -10px;
    border-width: 10px 0 10px 10px;
    border-left-color: #fff
}

.popover.left .arrow:after {
    border-width: 11px 0 11px 11px;
    border-left-color: rgba(0,0,0,0.25);
    bottom: -11px;
    right: -1px
}

.thumbnails {
    margin-left: -20px;
    list-style: none;
    *zoom:1}

.thumbnails:before,.thumbnails:after {
    display: table;
    content: "";
    line-height: 0
}

.thumbnails:after {
    clear: both
}

.row-fluid .thumbnails {
    margin-left: 0
}

.thumbnails>li {
    float: left;
    margin-bottom: 20px;
    margin-left: 20px
}

.thumbnail {
    display: block;
    padding: 4px;
    line-height: 20px;
    border: 1px solid #ddd;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.055);
    -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.055);
    box-shadow: 0 1px 3px rgba(0,0,0,0.055);
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out
}

a.thumbnail:hover {
    border-color: #08c;
    -webkit-box-shadow: 0 1px 4px rgba(0,105,214,0.25);
    -moz-box-shadow: 0 1px 4px rgba(0,105,214,0.25);
    box-shadow: 0 1px 4px rgba(0,105,214,0.25)
}

.thumbnail>img {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto
}

.thumbnail .caption {
    padding: 9px;
    color: #555
}

.media,.media-body {
    overflow: hidden;
    *overflow: visible;
    zoom:1}

.media,.media .media {
    margin-top: 15px
}

.media:first-child {
    margin-top: 0
}

.media-object {
    display: block
}

.media-heading {
    margin: 0 0 5px
}

.media .pull-left {
    margin-right: 10px
}

.media .pull-right {
    margin-left: 10px
}

.media-list {
    margin-left: 0;
    list-style: none
}

.label,.badge {
    display: inline-block;
    padding: 2px 4px;
    font-size: 10.998px;
    font-weight: bold;
    line-height: 14px;
    color: #fff;
    vertical-align: baseline;
    white-space: nowrap;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #999
}

.label {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px
}

.badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px
}

a.label:hover,a.badge:hover {
    color: #fff;
    text-decoration: none;
    cursor: pointer
}

.label-important,.badge-important {
    background-color: #b94a48
}

.label-important[href],.badge-important[href] {
    background-color: #953b39
}

.label-warning,.badge-warning {
    background-color: #f89406
}

.label-warning[href],.badge-warning[href] {
    background-color: #c67605
}

.label-success,.badge-success {
    background-color: #468847
}

.label-success[href],.badge-success[href] {
    background-color: #356635
}

.label-info,.badge-info {
    background-color: #3a87ad
}

.label-info[href],.badge-info[href] {
    background-color: #2d6987
}

.label-inverse,.badge-inverse {
    background-color: #333
}

.label-inverse[href],.badge-inverse[href] {
    background-color: #1a1a1a
}

.btn .label,.btn .badge {
    position: relative;
    top: -1px
}

.btn-mini .label,.btn-mini .badge {
    top: 0
}

@-webkit-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

@-moz-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

@-ms-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

@-o-keyframes progress-bar-stripes {
    from {
        background-position: 0 0
    }

    to {
        background-position: 40px 0
    }
}

@keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

.progress {
    overflow: hidden;
    height: 20px;
    margin-bottom: 20px;
    background-color: #f7f7f7;
    background-image: -moz-linear-gradient(top, #f5f5f5, #f9f9f9);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f5f5f5), to(#f9f9f9));
    background-image: -webkit-linear-gradient(top, #f5f5f5, #f9f9f9);
    background-image: -o-linear-gradient(top, #f5f5f5, #f9f9f9);
    background-image: linear-gradient(to bottom, #f5f5f5, #f9f9f9);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#fff9f9f9', GradientType=0);
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

.progress .bar {
    width: 0%;
    height: 100%;
    color: #fff;
    float: left;
    font-size: 12px;
    text-align: center;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #0e90d2;
    background-image: -moz-linear-gradient(top, #149bdf, #0480be);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#149bdf), to(#0480be));
    background-image: -webkit-linear-gradient(top, #149bdf, #0480be);
    background-image: -o-linear-gradient(top, #149bdf, #0480be);
    background-image: linear-gradient(to bottom, #149bdf, #0480be);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf', endColorstr='#ff0480be', GradientType=0);
    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,0.15);
    -moz-box-shadow: inset 0 -1px 0 rgba(0,0,0,0.15);
    box-shadow: inset 0 -1px 0 rgba(0,0,0,0.15);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: width .6s ease;
    -moz-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease
}

.progress .bar+.bar {
    -webkit-box-shadow: inset 1px 0 0 rgba(0,0,0,.15), inset 0 -1px 0 rgba(0,0,0,.15);
    -moz-box-shadow: inset 1px 0 0 rgba(0,0,0,.15), inset 0 -1px 0 rgba(0,0,0,.15);
    box-shadow: inset 1px 0 0 rgba(0,0,0,.15), inset 0 -1px 0 rgba(0,0,0,.15)
}

.progress-striped .bar {
    background-color: #149bdf;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255,255,255,0.15)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255,255,255,0.15)), color-stop(.75, rgba(255,255,255,0.15)), color-stop(.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    -webkit-background-size: 40px 40px;
    -moz-background-size: 40px 40px;
    -o-background-size: 40px 40px;
    background-size: 40px 40px
}

.progress.active .bar {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -moz-animation: progress-bar-stripes 2s linear infinite;
    -ms-animation: progress-bar-stripes 2s linear infinite;
    -o-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite
}

.progress-danger .bar,.progress .bar-danger {
    background-color: #dd514c;
    background-image: -moz-linear-gradient(top, #ee5f5b, #c43c35);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#c43c35));
    background-image: -webkit-linear-gradient(top, #ee5f5b, #c43c35);
    background-image: -o-linear-gradient(top, #ee5f5b, #c43c35);
    background-image: linear-gradient(to bottom, #ee5f5b, #c43c35);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffc43c35', GradientType=0)
}

.progress-danger.progress-striped .bar,.progress-striped .bar-danger {
    background-color: #ee5f5b;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255,255,255,0.15)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255,255,255,0.15)), color-stop(.75, rgba(255,255,255,0.15)), color-stop(.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)
}

.progress-success .bar,.progress .bar-success {
    background-color: #5eb95e;
    background-image: -moz-linear-gradient(top, #62c462, #57a957);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#62c462), to(#57a957));
    background-image: -webkit-linear-gradient(top, #62c462, #57a957);
    background-image: -o-linear-gradient(top, #62c462, #57a957);
    background-image: linear-gradient(to bottom, #62c462, #57a957);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff62c462', endColorstr='#ff57a957', GradientType=0)
}

.progress-success.progress-striped .bar,.progress-striped .bar-success {
    background-color: #62c462;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255,255,255,0.15)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255,255,255,0.15)), color-stop(.75, rgba(255,255,255,0.15)), color-stop(.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)
}

.progress-info .bar,.progress .bar-info {
    background-color: #4bb1cf;
    background-image: -moz-linear-gradient(top, #5bc0de, #339bb9);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#5bc0de), to(#339bb9));
    background-image: -webkit-linear-gradient(top, #5bc0de, #339bb9);
    background-image: -o-linear-gradient(top, #5bc0de, #339bb9);
    background-image: linear-gradient(to bottom, #5bc0de, #339bb9);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff339bb9', GradientType=0)
}

.progress-info.progress-striped .bar,.progress-striped .bar-info {
    background-color: #5bc0de;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255,255,255,0.15)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255,255,255,0.15)), color-stop(.75, rgba(255,255,255,0.15)), color-stop(.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)
}

.progress-warning .bar,.progress .bar-warning {
    background-color: #faa732;
    background-image: -moz-linear-gradient(top, #fbb450, #f89406);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fbb450), to(#f89406));
    background-image: -webkit-linear-gradient(top, #fbb450, #f89406);
    background-image: -o-linear-gradient(top, #fbb450, #f89406);
    background-image: linear-gradient(to bottom, #fbb450, #f89406);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffbb450', endColorstr='#fff89406', GradientType=0)
}

.progress-warning.progress-striped .bar,.progress-striped .bar-warning {
    background-color: #fbb450;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255,255,255,0.15)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255,255,255,0.15)), color-stop(.75, rgba(255,255,255,0.15)), color-stop(.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)
}

.accordion {
    margin-bottom: 20px
}

.accordion-group {
    margin-bottom: 2px;
    border: 1px solid #e5e5e5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

.accordion-heading {
    border-bottom: 0
}

.accordion-heading .accordion-toggle {
    display: block;
    padding: 8px 15px
}

.accordion-toggle {
    cursor: pointer
}

.accordion-inner {
    padding: 9px 15px;
    border-top: 1px solid #e5e5e5
}

.carousel {
    position: relative;
    margin-bottom: 20px;
    line-height: 1
}

.carousel-inner {
    overflow: hidden;
    width: 100%;
    position: relative
}

.carousel .item {
    display: none;
    position: relative;
    -webkit-transition: .6s ease-in-out left;
    -moz-transition: .6s ease-in-out left;
    -o-transition: .6s ease-in-out left;
    transition: .6s ease-in-out left
}

.carousel .item>img {
    display: block;
    line-height: 1
}

.carousel .active,.carousel .next,.carousel .prev {
    display: block
}

.carousel .active {
    left: 0
}

.carousel .next,.carousel .prev {
    position: absolute;
    top: 0;
    width: 100%
}

.carousel .next {
    left: 100%
}

.carousel .prev {
    left: -100%
}

.carousel .next.left,.carousel .prev.right {
    left: 0
}

.carousel .active.left {
    left: -100%
}

.carousel .active.right {
    left: 100%
}

.carousel-control {
    position: absolute;
    top: 40%;
    left: 15px;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    font-size: 60px;
    font-weight: 100;
    line-height: 30px;
    color: #fff;
    text-align: center;
    background: #222;
    border: 3px solid #fff;
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 23px;
    opacity: .5;
    filter: alpha(opacity=50)
}

.carousel-control.right {
    left: auto;
    right: 15px
}

.carousel-control:hover {
    color: #fff;
    text-decoration: none;
    opacity: .9;
    filter: alpha(opacity=90)
}

.carousel-caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    background: #333;
    background: rgba(0,0,0,0.75)
}

.carousel-caption h4,.carousel-caption p {
    color: #fff;
    line-height: 20px
}

.carousel-caption h4 {
    margin: 0 0 5px
}

.carousel-caption p {
    margin-bottom: 0
}

.hero-unit {
    padding: 60px;
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 200;
    line-height: 30px;
    color: inherit;
    background-color: #eee;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px
}

.hero-unit h1 {
    margin-bottom: 0;
    font-size: 60px;
    line-height: 1;
    color: inherit;
    letter-spacing: -1px
}

.hero-unit li {
    line-height: 30px
}

.pull-right {
    float: right
}

.pull-left {
    float: left
}

.hide {
    display: none
}

.show {
    display: block
}

.invisible {
    visibility: hidden
}

.affix {
    position: fixed
}

.multiselect-container {
    position: absolute;
    list-style-type: none;
    margin: 0;
    padding: 0
}

.multiselect-container input[type="text"] {
    width: 70%
}

.multiselect-container .input-prepend {
    padding: 3px
}

.multiselect-container>li {
    padding: 0
}

.multiselect-container>li>a.multiselect-all label {
    font-weight: bold
}

.multiselect-container>li>label {
    margin: 0;
    padding: 3px 20px 3px 20px;
    height: 100%;
    cursor: pointer
}

.multiselect-container>li>label.multiselect-header {
    margin: 0;
    padding: 3px 20px 3px 20px;
    height: 100%
}

.multiselect-container>li>label>input[type="checkbox"] {
    margin-bottom: 5px
}

@font-face {
    font-family: 'Elusive-Icons';
    src: url('../font/Elusive-Icons.eot');
    src: url('../font/Elusive-Icons.eot?#iefix') format('embedded-opentype'),url('../font/Elusive-Icons.svg#Elusive-Icons') format('svg'),url('../font/Elusive-Icons.woff') format('woff'),url('../font/Elusive-Icons.ttf') format('truetype');
    font-weight: normal;
    font-style: normal
}

[data-icon]:before {
    font-family: 'Elusive-Icons';
    content: attr(data-icon);
    speak: none;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased
}

[class^="icon-"]:before,[class*=" icon-"]:before {
    font-family: 'Elusive-Icons';
    font-weight: normal;
    font-style: normal;
    speak: none;
    line-height: 1;
    display: inline-block;
    text-decoration: inherit;
    -webkit-font-smoothing: antialiased
}

a [class^="icon-"],a [class*=" icon-"] {
    display: inline-block;
    text-decoration: inherit
}

.icon-large:before {
    vertical-align: middle;
    font-size: 1.33em
}

.btn [class^="icon-"],.nav-tabs [class^="icon-"],.btn [class*=" icon-"],.nav-tabs [class*=" icon-"] {
    line-height: .9em
}

li [class^="icon-"],li [class*=" icon-"] {
    display: inline-block;
    width: 1.25em;
    text-align: center
}

li .icon-large:before,li .icon-large:before {
    width: 1.875em
}

ul.icons {
    list-style-type: none;
    margin-left: 2em;
    text-indent: -0.8em
}

ul.icons li [class^="icon-"],ul.icons li [class*=" icon-"] {
    width: .8em
}

ul.icons li .icon-large:before,ul.icons li .icon-large:before {
    vertical-align: initial
}

.btn-large [class^="icon-"],.btn-large [class*=" icon-"] {
    margin-top: 0
}

.icon-move:before {
    content: "\e074"
}

.icon-music:before {
    content: "\e073"
}

.icon-network:before {
    content: "\e072"
}

.icon-off:before {
    content: "\e071"
}

.icon-ok:before {
    content: "\e070"
}

.icon-ok-circle:before {
    content: "\e06f"
}

.icon-ok-sign:before {
    content: "\e06e"
}

.icon-paper-clip:before {
    content: "\e06d"
}

.icon-paper-clip-alt:before {
    content: "\e06c"
}

.icon-path:before {
    content: "\e06b"
}

.icon-plus-sign:before {
    content: "\e059"
}

.icon-print:before {
    content: "\e058"
}

.icon-qrcode:before {
    content: "\e057"
}

.icon-question:before {
    content: "\e056"
}

.icon-question-sign:before {
    content: "\e055"
}

.icon-quotes:before {
    content: "\e054"
}

.icon-quotes-alt:before {
    content: "\e053"
}

.icon-random:before {
    content: "\e052"
}

.icon-record:before {
    content: "\e051"
}

.icon-reddit:before {
    content: "\e050"
}

.icon-refresh:before {
    content: "\e04f"
}

.icon-screenshot:before {
    content: "\e03f"
}

.icon-search:before {
    content: "\e03e"
}

.icon-search-alt:before {
    content: "\e03d"
}

.icon-share:before {
    content: "\e03c"
}

.icon-share-alt:before {
    content: "\e03b"
}

.icon-shopping-cart:before {
    content: "\e03a"
}

.icon-shopping-cart-sign:before {
    content: "\e039"
}

.icon-signal:before {
    content: "\e038"
}

.icon-skype:before {
    content: "\e037"
}

.icon-slideshare:before {
    content: "\e036"
}

.icon-smiley:before {
    content: "\e035"
}

.icon-th-large:before {
    content: "\e023"
}

.icon-th-list:before {
    content: "\e022"
}

.icon-thumbs-down:before {
    content: "\e021"
}

.icon-thumbs-up:before {
    content: "\e020"
}

.icon-time:before {
    content: "\e01f"
}

.icon-time-alt:before {
    content: "\e01e"
}

.icon-tint:before {
    content: "\e01d"
}

.icon-torso:before {
    content: "\e01c"
}

.icon-trash:before {
    content: "\e01b"
}

.icon-trash-alt:before {
    content: "\e01a"
}

.icon-tumblr:before {
    content: "\e019"
}

.icon-w3c:before {
    content: "\e00a"
}

.icon-warning-sign:before {
    content: "\e009"
}

.icon-website:before {
    content: "\e008"
}

.icon-website-alt:before {
    content: "\e007"
}

.icon-wheelchair:before {
    content: "\e006"
}

.icon-wordpress:before {
    content: "\e005"
}

.icon-wrench:before {
    content: "\e004"
}

.icon-wrench-alt:before {
    content: "\e003"
}

.icon-youtube:before {
    content: "\e002"
}

.icon-zoom-in:before {
    content: "\e001"
}

.icon-zoom-out:before {
    content: "\e000"
}

.icon-pause-alt:before {
    content: "\e069"
}

.icon-pencil:before {
    content: "\e068"
}

.icon-pencil-alt:before {
    content: "\e067"
}

.icon-person:before {
    content: "\e066"
}

.icon-phone:before {
    content: "\e065"
}

.icon-phone-alt:before {
    content: "\e064"
}

.icon-photo:before {
    content: "\e063"
}

.icon-photo-alt:before {
    content: "\e062"
}

.icon-picasa:before {
    content: "\e061"
}

.icon-picture:before {
    content: "\e060"
}

.icon-pinterest:before {
    content: "\e05f"
}

.icon-plane:before {
    content: "\e05e"
}

.icon-play-alt:before {
    content: "\e05c"
}

.icon-play-circle:before {
    content: "\e05b"
}

.icon-plus:before {
    content: "\e05a"
}

.icon-remove:before {
    content: "\e04e"
}

.icon-remove-circle:before {
    content: "\e04d"
}

.icon-remove-sign:before {
    content: "\e04c"
}

.icon-repeat:before {
    content: "\e04b"
}

.icon-repeat-alt:before {
    content: "\e04a"
}

.icon-resize-full:before {
    content: "\e049"
}

.icon-resize-horizontal:before {
    content: "\e048"
}

.icon-resize-small:before {
    content: "\e047"
}

.icon-resize-vertical:before {
    content: "\e046"
}

.icon-retweet:before {
    content: "\e045"
}

.icon-reverse-alt:before {
    content: "\e044"
}

.icon-road:before {
    content: "\e043"
}

.icon-rss:before {
    content: "\e042"
}

.icon-screen:before {
    content: "\e041"
}

.icon-screen-alt:before {
    content: "\e040"
}

.icon-smiley-alt:before {
    content: "\e034"
}

.icon-speaker:before {
    content: "\e033"
}

.icon-stackoverflow:before {
    content: "\e032"
}

.icon-star:before {
    content: "\e031"
}

.icon-star-alt:before {
    content: "\e030"
}

.icon-star-empty:before {
    content: "\e02f"
}

.icon-stop-alt:before {
    content: "\e02b"
}

.icon-stumbleupon:before {
    content: "\e02a"
}

.icon-tag:before {
    content: "\e029"
}

.icon-tags:before {
    content: "\e028"
}

.icon-tasks:before {
    content: "\e027"
}

.icon-text-height:before {
    content: "\e026"
}

.icon-text-width:before {
    content: "\e025"
}

.icon-th:before {
    content: "\e024"
}

.icon-twitter:before {
    content: "\e018"
}

.icon-universal-access:before {
    content: "\e017"
}

.icon-unlock:before {
    content: "\e016"
}

.icon-unlock-alt:before {
    content: "\e015"
}

.icon-upload:before {
    content: "\e014"
}

.icon-user:before {
    content: "\e013"
}

.icon-video:before {
    content: "\e012"
}

.icon-video-alt:before {
    content: "\e011"
}

.icon-video-chat:before {
    content: "\e010"
}

.icon-view-mode:before {
    content: "\e00f"
}

.icon-vimeo:before {
    content: "\e00e"
}

.icon-vkontakte:before {
    content: "\e10e"
}

.icon-volume-down:before {
    content: "\e00d"
}

.icon-volume-off:before {
    content: "\e00c"
}

.icon-volume-up:before {
    content: "\e00b"
}

.icon-backward:before {
    content: "\e0ab"
}

.icon-fast-backward:before {
    content: "\e09a"
}

.icon-fast-forward:before {
    content: "\e099"
}

.icon-forward:before {
    content: "\e093"
}

.icon-play:before {
    content: "\e05d"
}

.icon-step-backward:before {
    content: "\e02e"
}

.icon-step-forward:before {
    content: "\e02d"
}

.icon-briefcase:before {
    content: "\e10d"
}

.icon-bullhorn:before {
    content: "\e10c"
}

.icon-calendar:before {
    content: "\e10b"
}

.icon-calendar-sign:before {
    content: "\e10a"
}

.icon-address-book:before {
    content: "\e0dd"
}

.icon-address-book-alt:before {
    content: "\e0dc"
}

.icon-adjust:before {
    content: "\e0db"
}

.icon-adult:before {
    content: "\e0da"
}

.icon-align-center:before {
    content: "\e0d9"
}

.icon-align-justify:before {
    content: "\e0d8"
}

.icon-align-left:before {
    content: "\e0d7"
}

.icon-align-right:before {
    content: "\e0d6"
}

.icon-arrow-down:before {
    content: "\e0d5"
}

.icon-arrow-left:before {
    content: "\e0d4"
}

.icon-arrow-right:before {
    content: "\e0af"
}

.icon-arrow-up:before {
    content: "\e0ae"
}

.icon-asl:before {
    content: "\e0ad"
}

.icon-asterisk:before {
    content: "\e0ac"
}

.icon-ban-circle:before {
    content: "\e0aa"
}

.icon-barcode:before {
    content: "\e0d3"
}

.icon-behance:before {
    content: "\e0d2"
}

.icon-bell:before {
    content: "\e0d1"
}

.icon-blind:before {
    content: "\e0d0"
}

.icon-blogger:before {
    content: "\e0cf"
}

.icon-bold:before {
    content: "\e0ce"
}

.icon-book:before {
    content: "\e0f5"
}

.icon-bookmark:before {
    content: "\e0f4"
}

.icon-bookmark-empty:before {
    content: "\e0f3"
}

.icon-braille:before {
    content: "\e0f2"
}

.icon-camera:before {
    content: "\e0a9"
}

.icon-cc:before {
    content: "\e0a8"
}

.icon-certificate:before {
    content: "\e0a7"
}

.icon-check:before {
    content: "\e0a6"
}

.icon-check-empty:before {
    content: "\e0a5"
}

.icon-chevron-down:before {
    content: "\e0a4"
}

.icon-chevron-left:before {
    content: "\e0cd"
}

.icon-chevron-right:before {
    content: "\e0cc"
}

.icon-chevron-up:before {
    content: "\e0cb"
}

.icon-child:before {
    content: "\e0ca"
}

.icon-circle-arrow-down:before {
    content: "\e0c9"
}

.icon-circle-arrow-left:before {
    content: "\e0c8"
}

.icon-circle-arrow-right:before {
    content: "\e0f1"
}

.icon-circle-arrow-up:before {
    content: "\e0f0"
}

.icon-cloud:before {
    content: "\e0ef"
}

.icon-cloud-alt:before {
    content: "\e0ee"
}

.icon-cog:before {
    content: "\e109"
}

.icon-cog-alt:before {
    content: "\e108"
}

.icon-cogs:before {
    content: "\e107"
}

.icon-comment:before {
    content: "\e106"
}

.icon-comment-alt:before {
    content: "\e0a3"
}

.icon-compass:before {
    content: "\e0a2"
}

.icon-compass-alt:before {
    content: "\e0a1"
}

.icon-credit-card:before {
    content: "\e0a0"
}

.icon-css:before {
    content: "\e09f"
}

.icon-dashboard:before {
    content: "\e09e"
}

.icon-delicious:before {
    content: "\e0c7"
}

.icon-deviantart:before {
    content: "\e0c6"
}

.icon-digg:before {
    content: "\e0c5"
}

.icon-download:before {
    content: "\e0c4"
}

.icon-download-alt:before {
    content: "\e0c3"
}

.icon-dribble:before {
    content: "\e0c2"
}

.icon-edit:before {
    content: "\e0ed"
}

.icon-eject:before {
    content: "\e0ec"
}

.icon-envelope:before {
    content: "\e0eb"
}

.icon-envelope-alt:before {
    content: "\e0ea"
}

.icon-error:before {
    content: "\e105"
}

.icon-error-alt:before {
    content: "\e104"
}

.icon-exclamation-sign:before {
    content: "\e103"
}

.icon-eye-close:before {
    content: "\e102"
}

.icon-eye-open:before {
    content: "\e09d"
}

.icon-facebook:before {
    content: "\e09c"
}

.icon-facetime-video:before {
    content: "\e09b"
}

.icon-female:before {
    content: "\e098"
}

.icon-file:before {
    content: "\e0c1"
}

.icon-file-alt:before {
    content: "\e0c0"
}

.icon-file-edit:before {
    content: "\e0bf"
}

.icon-file-edit-alt:before {
    content: "\e0be"
}

.icon-file-new:before {
    content: "\e0bd"
}

.icon-file-new-alt:before {
    content: "\e0bc"
}

.icon-film:before {
    content: "\e0e9"
}

.icon-filter:before {
    content: "\e0e8"
}

.icon-fire:before {
    content: "\e0e7"
}

.icon-flag:before {
    content: "\e0e6"
}

.icon-flag-alt:before {
    content: "\e101"
}

.icon-flickr:before {
    content: "\e100"
}

.icon-folder:before {
    content: "\e0ff"
}

.icon-folder-close:before {
    content: "\e0fe"
}

.icon-folder-open:before {
    content: "\e097"
}

.icon-folder-sign:before {
    content: "\e096"
}

.icon-font:before {
    content: "\e095"
}

.icon-fontsize:before {
    content: "\e094"
}

.icon-forward-alt:before {
    content: "\e092"
}

.icon-foursquare:before {
    content: "\e0bb"
}

.icon-friendfeed:before {
    content: "\e0ba"
}

.icon-friendfeed-rect:before {
    content: "\e0b9"
}

.icon-fullscreen:before {
    content: "\e0b8"
}

.icon-gift:before {
    content: "\e0b7"
}

.icon-github:before {
    content: "\e0b6"
}

.icon-github-text:before {
    content: "\e0e5"
}

.icon-glass:before {
    content: "\e0e4"
}

.icon-glasses:before {
    content: "\e0e3"
}

.icon-globe:before {
    content: "\e0e2"
}

.icon-globe-alt:before {
    content: "\e0fd"
}

.icon-googleplus:before {
    content: "\e0fc"
}

.icon-graph:before {
    content: "\e0fb"
}

.icon-graph-alt:before {
    content: "\e0fa"
}

.icon-group:before {
    content: "\e091"
}

.icon-group-alt:before {
    content: "\e090"
}

.icon-guidedog:before {
    content: "\e08f"
}

.icon-hand-down:before {
    content: "\e08e"
}

.icon-hand-left:before {
    content: "\e08d"
}

.icon-hand-right:before {
    content: "\e08c"
}

.icon-hand-up:before {
    content: "\e0b5"
}

.icon-hdd:before {
    content: "\e0b4"
}

.icon-headphones:before {
    content: "\e0b3"
}

.icon-hearing-impaired:before {
    content: "\e0b2"
}

.icon-heart:before {
    content: "\e0b1"
}

.icon-heart-alt:before {
    content: "\e0b0"
}

.icon-heart-empty:before {
    content: "\e0e1"
}

.icon-home:before {
    content: "\e0e0"
}

.icon-home-alt:before {
    content: "\e0df"
}

.icon-idea:before {
    content: "\e0de"
}

.icon-idea-alt:before {
    content: "\e0f9"
}

.icon-inbox:before {
    content: "\e0f8"
}

.icon-inbox-alt:before {
    content: "\e0f7"
}

.icon-inbox-box:before {
    content: "\e0f6"
}

.icon-indent-left:before {
    content: "\e08b"
}

.icon-indent-right:before {
    content: "\e08a"
}

.icon-info-sign:before {
    content: "\e089"
}

.icon-instagram:before {
    content: "\e088"
}

.icon-iphone-home:before {
    content: "\e087"
}

.icon-italic:before {
    content: "\e086"
}

.icon-key:before {
    content: "\e085"
}

.icon-laptop:before {
    content: "\e084"
}

.icon-laptop-alt:before {
    content: "\e083"
}

.icon-leaf:before {
    content: "\e082"
}

.icon-linkedin:before {
    content: "\e081"
}

.icon-list:before {
    content: "\e080"
}

.icon-list-alt:before {
    content: "\e07f"
}

.icon-lock:before {
    content: "\e07e"
}

.icon-lock-alt:before {
    content: "\e07d"
}

.icon-magnet:before {
    content: "\e07c"
}

.icon-male:before {
    content: "\e07b"
}

.icon-map-marker:before {
    content: "\e07a"
}

.icon-map-marker-alt:before {
    content: "\e079"
}

.icon-mic:before {
    content: "\e078"
}

.icon-mic-alt:before {
    content: "\e077"
}

.icon-minus:before {
    content: "\e076"
}

.icon-minus-sign:before {
    content: "\e075"
}

.icon-pause:before {
    content: "\e06a"
}

.icon-fork:before {
    content: "\e10f"
}

.icon-broom:before {
    content: "\e110"
}

.icon-return-key:before {
    content: "\e111"
}

.icon-lastfm:before {
    content: "\e112"
}

.icon-livejournal:before {
    content: "\e113"
}

.icon-myspace:before {
    content: "\e114"
}

.icon-soundcloud:before {
    content: "\e115"
}

.icon-viadeo:before {
    content: "\e116"
}

.icon-spotify:before {
    content: "\e117"
}

.icon-caret-left:before {
    content: "\e119"
}

.icon-caret-up:before {
    content: "\e02c"
}

.icon-caret-right:before {
    content: "\e118"
}

.icon-caret-down:before {
    content: "\e11a"
}

.hidden {
    display: none
}

.vcenter,.vcenter td {
    vertical-align: middle
}

.vcenter input,.vcenter td input {
    margin: 0
}

.unread,tr.unread {
    opacity: 1;
    filter: alpha(opacity=100)
}

.read,tr.read {
    opacity: .66;
    filter: alpha(opacity=66)
}

.center {
    text-align: center
}

.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.strong {
    font-weight: bold
}

.muted {
    color: #777
}

small,.small {
    font-size: 12px
}

.sign {
    text-align: right;
    font-size: 12px;
    color: #999;
    color: #777
}

.noresult {
    color: #999;
    color: #777;
    font-style: italic
}

.pointer {
    cursor: pointer
}

.admin,.admin:hover {
    color: red;
    font-size: 12px
}

a.label:hover {
    color: white
}

.table tbody td.checkable {
    vertical-align: middle;
    text-align: center
}

.table tbody td.checkable.checked {
    background: #dff0d8
}

.table tbody td.checkable.tick {
    background: #dff0d8 url('../img/tick.png') no-repeat center center
}

.table tbody td.checkable.warning {
    background: #fcf8e3 url('../img/warning.png') no-repeat center center
}

tr.success td {
    background: #dff0d8 !important
}

.hspan1 {
    height: 80px
}

.hspan2 {
    height: 160px
}

.hspan3 {
    height: 240px
}

.hspan4 {
    height: 320px
}

.hspan5 {
    height: 400px
}

.hspan6 {
    height: 480px
}

.colorgrad {
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5)
}

.colorgrad1 {
    background-color: #bc1300
}

.colorgrad2 {
    background-color: #d02d02
}

.colorgrad3 {
    background-color: #ed5905
}

.colorgrad4 {
    background-color: #f87f06
}

.colorgrad5 {
    background-color: #f8a306
}

.colorgrad6 {
    background-color: #ecc706
}

.colorgrad7 {
    background-color: #d6c20b
}

.colorgrad8 {
    background-color: #b7c212
}

.colorgrad9 {
    background-color: #90bc17
}

.colorgrad10 {
    background-color: #5da31a
}

.colorgrad11 {
    background-color: #378f1c
}

.colorgrad12 {
    background-color: #2f7b18
}

table td.danger {
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    background-color: #9d261d !important
}

table td.warning {
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    background-color: #f89406 !important
}

table td.success {
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    background-color: #46a546 !important
}

.rotate45 {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg)
}

.rotate45:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg)
}

.tleft {
    text-align: left
}

.tright {
    text-align: right
}

.tjustify,.justify {
    text-align: justify
}

.tcenter {
    text-align: center
}

.center {
    text-align: center;
    margin-left: auto;
    margin-right: auto
}

.padding-none,.nopadding {
    padding: 0px !important
}

h1 {
    font-size: 28px;
    margin-bottom: 20px
}

h2 {
    font-size: 22px;
    margin-bottom: 10px
}

table th {
    text-align: left
}

.well.notice {
    background-color: #d9edf7;
    border-color: #d9edf7;
    border-color: rgba(0,0,0,0.05)
}

.well.notice hr {
    border-top-color: #d9edf7
}

.well.tip {
    background-color: #ffeb99;
    border-color: #ffd733;
    border-color: rgba(0,0,0,0.05)
}

.well.tip hr {
    border-top-color: #ffd733
}

.well.white {
    background-color: white;
    border-color: rgba(0,0,0,0.2)
}

.well.white hr {
    border-top-color: rgba(0,0,0,0.2)
}

.well legend {
    font-size: 15px;
    font-weight: bold
}

.well-nav {
    padding: 8px 0
}

.thumbnail>img {
    max-height: 100%
}

.progress.progress-warning .bar {
    background-color: #faa732;
    background-image: -moz-linear-gradient(top, #fbb450, #f89406);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fbb450), to(#f89406));
    background-image: -webkit-linear-gradient(top, #fbb450, #f89406);
    background-image: -o-linear-gradient(top, #fbb450, #f89406);
    background-image: linear-gradient(to bottom, #fbb450, #f89406);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffbb450', endColorstr='#fff89406', GradientType=0)
}

.progress.progress-warning.progress-striped .bar {
    background-color: #f89406;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255,255,255,0.15)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255,255,255,0.15)), color-stop(.75, rgba(255,255,255,0.15)), color-stop(.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)
}

.progress.progress-small {
    height: 8px
}

.btn.btn-mini {
    font-size: 11px;
    padding: 1px 5px
}

.btn.btn-warning {
    color: white
}

div.kpi_font_value {
    font-family: Georgia;
    text-shadow: 2px 2px #ccc;
    line-height: 45px;
    font-size: 40px;
    text-align: right
}

div.kpi_font_label {
    font-size: 12pt;
    font-weight: bold;
    white-space: nowrap;
    display: table-cell;
    vertical-align: middle;
    line-height: 45px
}

div.kpi_value {
    text-align: right;
    white-space: nowrap
}

div.kpi_label {
    font-size: 12pt;
    font-weight: bold;
    white-space: nowrap
}

div.kpi_label a {
    background-color: transparent;
    color: #222222;
    text-decoration: none
}

div.kpi_label a:hover {
    color: #222222;
    text-decoration: underline
}

div.kpi_details {
    text-align: left
}

.kpi_details_positive {
    color: green;
    font-weight: bold
}

.kpi_details_negative {
    color: #666666
}

table tbody tr.errors td,.table-striped tbody tr.errors td {
    background-color: #f2dede
}

h4 {
    font-size: 14px;
    margin: 0px
}

.popover {
    width: 400px;
    text-align: left
}

.popover-inner {
    width: 400px
}

.popover-title {
    font-weight: bold
}

.choice-block {
    display: inline-block;
    vertical-align: top;
    padding: 5px;
    background: transparent;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    *display: block;
    *float: left;
    letter-spacing: 0
}

.choice-block.focused,.choice-block:hover {
    background-color: #aad6f3;
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#badef7), color-stop(30%, #badef7), to(#6cb7e3));
    background-image: -webkit-linear-gradient(#badef7, #badef7 30%, #6cb7e3);
    background-image: -moz-linear-gradient(top, #badef7, #badef7 30%, #6cb7e3);
    background-image: -o-linear-gradient(#badef7, #badef7 30%, #6cb7e3);
    background-image: linear-gradient(#badef7, #badef7 30%, #6cb7e3);
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffbadef7', endColorstr='#ff6cb7e3', GradientType=0)
}

.choice-block.active {
    background-color: #61b1eb;
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#79bef0), color-stop(30%, #79bef0), to(#017fd6));
    background-image: -webkit-linear-gradient(#79bef0, #79bef0 30%, #017fd6);
    background-image: -moz-linear-gradient(top, #79bef0, #79bef0 30%, #017fd6);
    background-image: -o-linear-gradient(#79bef0, #79bef0 30%, #017fd6);
    background-image: linear-gradient(#79bef0, #79bef0 30%, #017fd6);
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff79bef0', endColorstr='#ff017fd6', GradientType=0)
}

.choice-block label,.choice-block a {
    display: block;
    position: relative;
    padding: 10px;
    font-size: 13px;
    font-weight: bold;
    color: #333;
    text-shadow: 0px 1px 0 white;
    line-height: 16px;
    background: #FFF;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid;
    border-color: #DBDBDB;
    border-color: #EEE rgba(20,20,20,0.2) #D2D2D2;
    -webkit-box-shadow: 0 1px 2px rgba(20,20,20,0.1);
    -moz-box-shadow: 0 1px 2px rgba(20,20,20,0.1);
    box-shadow: 0 1px 2px rgba(20,20,20,0.1);
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    background-color: #efefef;
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#FDFDFD), color-stop(80%, #F0F0F0), to(#EDEDED));
    background-image: -webkit-linear-gradient(#FDFDFD, #F0F0F0 80%, #EDEDED);
    background-image: -moz-linear-gradient(top, #FDFDFD, #F0F0F0 80%, #EDEDED);
    background-image: -o-linear-gradient(#FDFDFD, #F0F0F0 80%, #EDEDED);
    background-image: linear-gradient(#FDFDFD, #F0F0F0 80%, #EDEDED);
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffdfdfd', endColorstr='#ffededed', GradientType=0)
}

.choice-block label:hover,.choice-block a:hover {
    text-decoration: none
}

.choice-block.active label,.choice-block.active a {
    background: white;
    -webkit-box-shadow: inset 0 2px 10px rgba(20,20,20,0.2);
    -moz-box-shadow: inset 0 2px 10px rgba(20,20,20,0.2);
    box-shadow: inset 0 2px 10px rgba(20,20,20,0.2);
    border-color: #2A95DF;
    border-color: #79BEF0 #79BEF0 #017FD6
}

.choice-block div {
    display: block;
    margin: 0px auto 10px auto
}

.choice-block strong {
    display: block;
    font-size: 22px;
    line-height: 30px
}

.choice-block small {
    font-weight: normal;
    font-size: 13px;
    color: #777
}

.uneditable-field {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    display: inline-block;
    *display: inline;
    *zoom:1;padding: 6px 4px;
    margin-bottom: 0;
    font-size: 13px;
    line-height: 20px;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    border: none;
    white-space: normal;
    width: auto;
    height: auto
}

.modal {
    width: 760px;
    margin-left: -380px
}

body {
    background: #999;
    padding-top: 40px
}

.page {
    position: relative;
    max-width: 1300px;
    min-width: 800px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 20px 0;
    background: #fff;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.25);
    -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.25);
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    z-index: 0
}

.page.wide {
    max-width: none;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.subhead {
    background-color: #f8f8f8;
    background-image: -moz-linear-gradient(top, #fff, #eee);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fff), to(#eee));
    background-image: -webkit-linear-gradient(top, #fff, #eee);
    background-image: -o-linear-gradient(top, #fff, #eee);
    background-image: linear-gradient(to bottom, #fff, #eee);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffeeeeee', GradientType=0);
    padding-bottom: 10px;
    border-bottom: 1px solid #d5d5d5;
    margin-bottom: 20px;
    -webkit-box-shadow: inset 0 -5px 10px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 -5px 10px rgba(0,0,0,0.05);
    box-shadow: inset 0 -5px 10px rgba(0,0,0,0.05)
}

.subhead h3 {
    line-height: 18px;
    padding-bottom: 3px
}

.subfoot {
    border-top: 1px solid #d5d5d5;
    padding-top: 20px;
    -webkit-box-shadow: inset 0 5px 20px rgba(0,0,0,0.1);
    -moz-box-shadow: inset 0 5px 20px rgba(0,0,0,0.1);
    box-shadow: inset 0 5px 20px rgba(0,0,0,0.1)
}

#nav-header .container {
    position: relative;
    width: auto;
    margin: auto;
    max-width: 1300px;
    min-width: 800px
}

#nav-header .container .ma-icon-logo {
    margin: 4px
}

#nav-header .mini-links {
    position: absolute;
    left: auto;
    top: 0px;
    right: 0px;
    margin: 0px;
    background-color: #1b1b1b;
    background-image: -moz-linear-gradient(top, #222222, #111111);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#222222), to(#111111));
    background-image: -webkit-linear-gradient(top, #222222, #111111);
    background-image: -o-linear-gradient(top, #222222, #111111);
    background-image: linear-gradient(to bottom, #222222, #111111);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff222222', endColorstr='#ff111111', GradientType=0)
}

#nav-header .mini-links li {
    margin: 0px;
    font-size: 12px
}

#header_flow {
    height: 40px
}

form .controls ul.inline-inputs {
    margin: 0
}

form .controls ul.inline-inputs:after {
    clear: both
}

form .controls ul.inline-inputs li {
    float: left;
    margin-right: 5px
}

form .control-label {
    color: #555
}

form legend {
    margin-bottom: 5px !important;
    -webkit-margin-bottom-collapse: separate
}

form legend+.control-group,form legend+div {
    margin-top: 5px !important;
    -webkit-margin-top-collapse: separate
}

form fieldset {
    margin-bottom: 20px
}

form help-inline {
    display: inline-block
}

form .required label:after {
    content: " *";
    color: red
}

#facebox input {
    z-index: auto !important
}

input.datepicker {
    width: 70px
}

input.timepicker {
    width: 50px
}

input.numeric {
    text-align: right
}

input[type=file] {
    width: auto
}

.form-horizontal .control-label {
    width: 140px
}

.form-horizontal .controls {
    margin-left: 160px
}

.form-horizontal .help-inline {
    display: inline-block;
    padding-top: 5px;
    line-height: 18px;
    margin-bottom: 5px;
    vertical-align: top
}

.form-condensed .control-group {
    margin-bottom: 0px;
    padding: 2px 0px 4px 2px
}

.form-condensed .control-label {
    width: 200px;
    margin-bottom: 0px
}

.form-alignleft .control-group>label {
    text-align: left
}

.form-largelabels .control-group>label {
    width: 200px
}

.form-largelabels .controls {
    margin-left: 220px
}

.form-narrow .control-group>label {
    width: 160px
}

.form-narrow .controls {
    margin-left: 180px !important
}

.form-readonly input,.form-readonly textarea,.form-readonly select,.form-readonly .help-inline,.form-readonly .uneditable-input,.form-readonly .input-prepend,.form-readonly .input-append {
    display: inline-block;
    *display: inline;
    *zoom:1;margin-bottom: 0;
    vertical-align: middle
}

.form-readonly .hide {
    display: none
}

.form-readonly .control-group {
    margin-bottom: 20px;
    *zoom:1}

.form-readonly .control-group:before,.form-readonly .control-group:after {
    display: table;
    content: "";
    line-height: 0
}

.form-readonly .control-group:after {
    clear: both
}

.form-readonly .control-label {
    float: left;
    width: 160px;
    padding-top: 5px;
    text-align: right
}

.form-readonly .controls {
    *display: inline-block;
    *padding-left: 20px;
    margin-left: 180px;
    *margin-left: 0
}

.form-readonly .controls:first-child {
    *padding-left: 180px
}

.form-readonly .help-block {
    margin-bottom: 0
}

.form-readonly input+.help-block,.form-readonly select+.help-block,.form-readonly textarea+.help-block {
    margin-top: 10px
}

.form-readonly .form-actions {
    padding-left: 180px
}

.form-readonly .control-label {
    width: 140px
}

.form-readonly .controls {
    margin-left: 160px
}

.form-readonly .help-inline {
    display: inline-block;
    padding-top: 5px;
    line-height: 18px;
    margin-bottom: 5px;
    vertical-align: top
}

.form-readonly .control-group {
    margin-bottom: 0px;
    padding: 2px 0px 4px 2px
}

.form-readonly .control-label {
    width: 200px;
    margin-bottom: 0px
}

.form-readonly .control-group>label {
    text-align: left
}

.form-readonly .control-group>label {
    width: 200px
}

.form-readonly .controls {
    margin-left: 220px
}

.form-priorities .control-group {
    padding-left: 8px;
    border-left: 4px solid #eee;
    margin-bottom: 0;
    padding-bottom: 20px
}

.form-priorities .control-group.priority-high {
    border-left-color: #999
}

.form-priorities .control-group.required {
    border-left-color: #555
}

.form-priorities .required label:after {
    content: none
}

.search-tag {
    border: 1px solid #0064cd;
    background: #049cdb;
    color: white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 2px 10px;
    margin: 5px 5px;
    cursor: default
}

.dropdown-menu {
    min-width: 140px
}

.dropdown-menu li>a,.dropdown-menu li>a:hover {
    text-decoration: none;
    text-align: left;
    padding: 2px 10px
}

.dropdown-menu li.active>a,.dropdown-menu li.active>a:hover {
    color: white
}

.comments li {
    border-top: 1px solid #e5e5e5;
    padding-top: 5px;
    margin-top: 5px
}

.comments li .body {
    max-height: 75px;
    max-width: 940px;
    overflow: hidden;
    font-size: 12px;
    line-height: 15px
}

.comments li.full-height .body {
    max-height: none
}

.comments li.full-height .more {
    display: none
}

.comms .comm div {
    display: inline-block
}

#opportunity_form input,#contract_form input,#opportunity_form textarea,#contract_form textarea,#opportunity_form select,#contract_form select,#opportunity_form .help-inline,#contract_form .help-inline,#opportunity_form .uneditable-input,#contract_form .uneditable-input,#opportunity_form .input-prepend,#contract_form .input-prepend,#opportunity_form .input-append,#contract_form .input-append {
    display: inline-block;
    *display: inline;
    *zoom:1;margin-bottom: 0;
    vertical-align: middle
}

#opportunity_form .hide,#contract_form .hide {
    display: none
}

#opportunity_form .control-group,#contract_form .control-group {
    margin-bottom: 20px;
    *zoom:1}

#opportunity_form .control-group:before,#contract_form .control-group:before,#opportunity_form .control-group:after,#contract_form .control-group:after {
    display: table;
    content: "";
    line-height: 0
}

#opportunity_form .control-group:after,#contract_form .control-group:after {
    clear: both
}

#opportunity_form .control-label,#contract_form .control-label {
    float: left;
    width: 160px;
    padding-top: 5px;
    text-align: right
}

#opportunity_form .controls,#contract_form .controls {
    *display: inline-block;
    *padding-left: 20px;
    margin-left: 180px;
    *margin-left: 0
}

#opportunity_form .controls:first-child,#contract_form .controls:first-child {
    *padding-left: 180px
}

#opportunity_form .help-block,#contract_form .help-block {
    margin-bottom: 0
}

#opportunity_form input+.help-block,#contract_form input+.help-block,#opportunity_form select+.help-block,#contract_form select+.help-block,#opportunity_form textarea+.help-block,#contract_form textarea+.help-block {
    margin-top: 10px
}

#opportunity_form .form-actions,#contract_form .form-actions {
    padding-left: 180px
}

#opportunity_form .control-label,#contract_form .control-label {
    width: 140px
}

#opportunity_form .controls,#contract_form .controls {
    margin-left: 160px
}

#opportunity_form .help-inline,#contract_form .help-inline {
    display: inline-block;
    padding-top: 5px;
    line-height: 18px;
    margin-bottom: 5px;
    vertical-align: top
}

#opportunity_form .control-group,#contract_form .control-group {
    margin-bottom: 0px;
    padding: 2px 0px 4px 2px
}

#opportunity_form .control-label,#contract_form .control-label {
    width: 200px;
    margin-bottom: 0px
}

#opportunity_form .control-group>label,#contract_form .control-group>label {
    text-align: left
}

#opportunity_form .control-group>label,#contract_form .control-group>label {
    width: 200px
}

#opportunity_form .controls,#contract_form .controls {
    margin-left: 220px
}

#opportunity_form .control-group,#contract_form .control-group {
    padding-left: 8px;
    border-left: 4px solid #eee;
    margin-bottom: 0;
    padding-bottom: 20px
}

#opportunity_form .control-group.priority-high,#contract_form .control-group.priority-high {
    border-left-color: #999
}

#opportunity_form .control-group.required,#contract_form .control-group.required {
    border-left-color: #555
}

#opportunity_form .required label:after,#contract_form .required label:after {
    content: none
}

#header_customer_communications li input {
    visibility: hidden
}

#header_customer_communications li:hover input {
    visibility: visible
}

#search_attendee {
    background: url(../img/searchbox_bg.png) no-repeat left center;
    padding-left: 18px
}

.table-blocks {
    border: 1px solid #DDD;
    border-top: none;
    border-left: none
}

.table-blocks tbody tr:nth-child(odd) td,.table-blocks tbody tr:nth-child(odd) th {
    background-color: #f9f9f9
}

.table-blocks tr {
    border-left: 5px solid #DDD
}

.table-blocks tr.featured {
    border-left-color: #ee5f5b
}

.table-sorter .headerSortDown:after {
    content: ' ▲'
}

.table-sorter .headerSortUp:after {
    content: ' ▼'
}

.table-sorter thead th {
    cursor: pointer
}

#global_search {
    width: 100px;
    padding: 2px 20px;
    margin-right: 4px;
    margin-top: 3px;
    background: #fff url("../img/searchbox_bg.png") no-repeat left center;
    border: 1px solid #333;
    opacity: .75;
    filter: alpha(opacity=75);
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out
}

#global_search:hover {
    opacity: 1;
    filter: alpha(opacity=100)
}

#global_search:focus {
    width: 500px;
    opacity: 1;
    filter: alpha(opacity=100)
}

.header_search_results {
    width: 500px
}

.header_search_results .result {
    background: #fff no-repeat 2px center;
    padding-left: 24px;
    border-bottom: 1px dotted #E0E0E0;
    overflow: hidden;
    color: #222
}

.header_search_results .ac_over {
    background-color: #F9F9F9
}

.header_search_results .contact {
    background-image: url('../img/user_green.png')
}

.header_search_results .realtor {
    background-image: url('../img/icons/building.png')
}

.header_search_results .realtor_contact {
    background-image: url('../img/icons/user_suit.png')
}

.header_search_results .project {
    background-image: url('../img/document.png')
}

.header_search_results .place {
    background-image: url('../img/map.png')
}

.header_search_results .more_results {
    color: #08C;
    font-size: 11px;
    text-align: right;
    border-bottom: 1px solid #c0c0c0
}

#search_results li {
    background-repeat: no-repeat;
    padding-left: 20px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #E0E0E0
}

#search_results .contact {
    background-image: url('../img/user_green.png')
}

#search_results .realtor {
    background-image: url('../img/icons/building.png')
}

#search_results .realtor_contact {
    background-image: url('../img/icons/user_suit.png')
}

#search_results .project {
    background-image: url('../img/document.png')
}

#search_results .place {
    background-image: url('../img/map.png')
}

#search_results li.more {
    background-image: none;
    border-bottom: 0
}

#map,.map {
    height: 398px;
    margin: 0;
    padding: 0;
    border: 1px solid #cecece;
    overflow: hidden
}

#map .gmnoprint a:hover {
    background-color: transparent
}

.multi_map {
    height: 398px;
    margin: 0;
    padding: 0;
    border: 1px solid #bfbfbf;
    overflow: hidden
}

.map_realtor {
    height: 300px;
    margin: 0;
    padding: 0;
    border: 1px solid #bfbfbf;
    overflow: hidden
}

.full_screen {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    z-index: 10000;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
}

.full_screen #map,.full_screen .map {
    height: 100% !important;
    border: 0px !important
}

div.map_bar {
    background: #e8e9eb url('../img/map_controls.png') repeat-x 0 0;
    background-position: 0 -145px !important;
    border: 1px solid #bfbfbf;
    border-top-width: 0;
    height: 24px;
    font-size: 8pt
}

a.map_expand {
    background: transparent url('../img/map_controls.png') no-repeat 0 0;
    background-position: -100px -101px !important;
    padding: 4px 0 4px 31px ;
    line-height: 24px;
    height: 24px
}

a.map_shrink {
    background: transparent url('../img/map_controls.png') no-repeat 0 0;
    background-position: -100px -120px !important;
    padding: 4px 0 4px 31px ;
    line-height: 24px;
    height: 24px
}

#map_legends,.map_legends {
    padding: 5px 8px;
    border: 1px solid #bfbfbf;
    background-color: #f9f9f9;
    border-top-width: 0
}

#map_legends ul li {
    float: left;
    margin-right: 15px;
    line-height: 20px
}

#map_legend_realtor {
    background: transparent url('../img/map_legends.png') no-repeat 0 0;
    width: 20px;
    height: 20px;
    float: left
}

#map_legend_reference {
    background: transparent url('../img/map_legends.png') no-repeat -20px 0;
    width: 20px;
    height: 20px;
    float: left
}

#map_legend_reference_small {
    background: transparent url('../img/map_legends.png') no-repeat -40px -1px;
    width: 20px;
    height: 20px;
    float: left
}

#map_legend_house {
    background: transparent url('../img/map_legends.png') no-repeat -20px -20px;
    width: 20px;
    height: 20px;
    float: left
}

.map_legend_available li div {
    border: 2px solid #FFF;
    float: left;
    height: 14px;
    margin: 1px 4px;
    width: 14px
}

.map_legend_available_now {
    background-color: #455d13
}

.map_legend_available_next {
    background-color: #145585
}

.map_legend_available_soon {
    background-color: #567c9c
}

#realtor_ref_map #map {
    height: 250px;
    border: 1px solid #bfbfbf
}

#realtor_map #map {
    width: 298px;
    height: 250px;
    border: 1px solid #C0C0C0
}

#item_map #map {
    width: 298px;
    height: 250px;
    border: 1px solid #C0C0C0
}

#item_map .map {
    width: 298px;
    height: 250px;
    border: 1px solid #C0C0C0
}

#customer_map #map {
    width: 298px;
    height: 250px;
    border: 1px solid #C0C0C0
}

.iw_bubble {
    z-index: 100000
}

#close_iw {
    display: block;
    width: 22px;
    height: 22px;
    cursor: pointer;
    float: right;
    background: transparent url('http://maps.google.com/intl/en_ALL/mapfiles/transparent.png') no-repeat -272px -4px
}

.map_native_infowindow h1 {
    color: #000 !important;
    font-size: 14pt !important
}

.iw_content {
    padding: 6px;
    overflow: auto;
    width: 275px;
    height: 132px
}

.iw_window {
    margin: 0
}

.iw_window h1 {
    margin: 0 0 4px 0;
    padding: 1px 0 0 4px;
    font-size: 10pt;
    color: white;
    line-height: 22px;
    width: 260px;
    height: 22px;
    overflow: hidden;
    font-family: Arial;
    font-weight: bold
}

.iw_window h2 {
    border-bottom: 1px solid #C0C0C0;
    margin: 0;
    font-size: 10pt;
    line-height: 20px
}

.iw_window p {
    margin: 0 0 8px 0
}

.iw_window .price {
    color: #CC0000;
    font-weight: bold;
    font-size: 14pt;
    padding-left: 5px
}

.iw_window p.action a {
    padding: 3px 5px;
    font-weight: bold
}

.iw_window p.action a:hover {
    padding: 3px 5px;
    font-weight: bold
}

.iw_window ul.neighborhoods {
    margin: 6px 0 0 0;
    padding: 0;
    list-style: none
}

.iw_window ul.neighborhoods li {
    margin: 0;
    padding: 0 0 0 20px;
    font-size: 9pt;
    background: transparent url('../img/bullet_blue.png') no-repeat top left
}

.iw_window p.sqm_price_apartment {
    background: transparent url('../img/buildings.png') no-repeat 0 0;
    margin-bottom: 0px;
    margin-left: 10px;
    padding-left: 50px;
    height: 45px
}

.iw_window p.sqm_price_house {
    background: transparent url('../img/buildings.png') no-repeat 0 -45px;
    margin-top: 0px;
    margin-left: 10px;
    padding-left: 50px;
    height: 45px
}

.map_place_link {
    padding: 3px 6px 4px 6px;
    background-color: black;
    color: white;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    white-space: nowrap;
    -ms-border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border: 1px solid white
}

.map_place_link a {
    color: white;
    font-weight: bold
}

.map_price_legends {
    background-color: #f5f5f5;
    border: 1px solid #cecece;
    border-top-width: 0;
    padding: 5px;
    border-collapse: separate
}

.mplc {
    line-height: 12px;
    font-size: 12px
}

.mpll {
    line-height: 12px;
    font-size: 11px
}

.mplc12 {
    background-color: #ff0000
}

.mplc11 {
    background-color: #cc3300
}

.mplc10 {
    background-color: #e76832
}

.mplc9 {
    background-color: #e7961a
}

.mplc8 {
    background-color: #ffae00
}

.mplc7 {
    background-color: #ffff33
}

.mplc6 {
    background-color: #d7f221
}

.mplc5 {
    background-color: #abd74c
}

.mplc4 {
    background-color: #708f03
}

.mplc3 {
    background-color: #486900
}

.mplc2 {
    background-color: #026850
}

.mplc1 {
    background-color: #004635
}

.mpl9c9 {
    background-color: #cc3300
}

.mpl9c8 {
    background-color: #e76832
}

.mpl9c7 {
    background-color: #e7961a
}

.mpl9c6 {
    background-color: #ffae00
}

.mpl9c5 {
    background-color: #ffff33
}

.mpl9c4 {
    background-color: #d7f221
}

.mpl9c3 {
    background-color: #abd74c
}

.mpl9c2 {
    background-color: #708f03
}

.mpl9c1 {
    background-color: #486900
}

.mpl7c7 {
    background-color: #cc3300
}

.mpl7c6 {
    background-color: #e76832
}

.mpl7c5 {
    background-color: #ffae00
}

.mpl7c4 {
    background-color: #ffff33
}

.mpl7c3 {
    background-color: #d7f221
}

.mpl7c2 {
    background-color: #abd74c
}

.mpl7c1 {
    background-color: #708f03
}

.map_control {
    border: 1px solid black;
    background-color: white;
    padding: 5px
}

.map_control input {
    display: inline
}

.map_layers {
    position: absolute
}

#load_notifier {
    background: #feee8a;
    font-weight: bold;
    height: 22px;
    text-align: center;
    line-height: 22px;
    position: fixed;
    top: 0;
    right: 50%;
    left: 50%;
    margin-left: -125px;
    width: 250px;
    z-index: 20000;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.5);
    box-shadow: 0 2px 5px rgba(0,0,0,0.5)
}

.notifier {
    position: fixed;
    background-color: rgba(0,0,0,0.66);
    border: 3px solid white;
    color: #FFF;
    padding: 5px;
    position: absolute;
    top: 55px;
    right: -268px;
    width: 280px;
    -webkit-box-shadow: 0 1px 5px rgba(0,0,0,0.33);
    -moz-box-shadow: 0 1px 5px rgba(0,0,0,0.33);
    box-shadow: 0 1px 5px rgba(0,0,0,0.33);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    transition-delay: .5s;
    -moz-transition-delay: .5s;
    -webkit-transition-delay: .5s;
    -o-transition-delay: .5s
}

.notifier:hover {
    right: -20px;
    transition-delay: 0s;
    -moz-transition-delay: 0s;
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s
}

.notifier a {
    color: #FFF
}

.notifier a:hover {
    background-color: transparent;
    text-decoration: underline
}

.notifier ul {
    list-style: none;
    margin: 0
}

.notifier .error {
    background-color: transparent;
    font-weight: bold
}

.notifier .warning {
    background-color: transparent;
    font-weight: bold
}

.notifier .info {
    background-color: transparent;
    font-weight: bold
}

.notifier .error .img {
    background: transparent url(../img/sprites.png) no-repeat -32px -16px;
    float: left;
    height: 16px;
    margin: 1px 4px 0px 0px;
    width: 16px
}

.notifier .warning .img {
    background: transparent url(../img/sprites.png) no-repeat -96px -16px;
    float: left;
    height: 16px;
    margin: 1px 4px 0px 0px;
    width: 16px
}

.notifier .info .img {
    background: transparent url(../img/sprites.png) no-repeat 0 -16px;
    float: left;
    height: 16px;
    margin: 1px 4px 0px 0px;
    width: 16px
}

.notifier .check .img {
    background: transparent url(../img/sprites.png) no-repeat -16px -16px;
    float: left;
    height: 16px;
    margin: 1px 4px 0px 0px;
    width: 16px
}

.ma-icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    *margin-right: .3em;
    line-height: 14px;
    vertical-align: text-top;
    background-position: 14px 14px;
    background-repeat: no-repeat;
    margin-top: 1px
}

.ma-icon-logo {
    width: 32px;
    height: 32px
}

.ma-icon-info {
    width: 16px;
    height: 16px;
    background-image: url(../img/information.png);
    background-position: top left
}

.ma-icon-edit {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/page_white_edit.png);
    background-position: top left
}

.ma-icon-add {
    width: 16px;
    height: 16px;
    background-image: url(../img/add.png);
    background-position: top left
}

.ma-icon-delete {
    width: 16px;
    height: 16px;
    background-image: url(../img/cross_gray.png);
    background-position: top left
}

.ma-icon-delete:hover {
    background-image: url(../img/cross.png);
    background-position: top left
}

.ma-icon-tick {
    width: 16px;
    height: 16px;
    background-image: url(../img/tick.png);
    background-position: top left
}

.ma-icon-cross {
    width: 16px;
    height: 16px;
    background-image: url(../img/cross.png);
    background-position: top left
}

.ma-icon-warning {
    width: 16px;
    height: 16px;
    background-image: url(../img/warning.png);
    background-position: top left
}

.ma-icon-star {
    width: 16px;
    height: 16px;
    background-image: url(../img/star.png);
    background-position: top left
}

.ma-icon-star-gray {
    width: 16px;
    height: 16px;
    background-image: url(../img/star_gray.png);
    background-position: top left
}

.ma-icon-calendar {
    width: 16px;
    height: 16px;
    background-image: url(../img/calendar.png);
    background-position: top left
}

.ma-icon-time {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/time.png);
    background-position: top left
}

.ma-icon-comment {
    width: 16px;
    height: 16px;
    background-image: url(../img/comments.png);
    background-position: top left
}

.ma-icon-play {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/control_play.png);
    background-position: top left
}

.ma-icon-phone {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/phone.png);
    background-position: top left
}

.ma-icon-anonymous {
    width: 20px;
    height: 20px;
    background-image: url(../img/icons/anonymous_call.png);
    background-position: top left
}

.ma-icon-email {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/email.png);
    background-position: top left
}

.ma-icon-fax {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/printer.png);
    background-position: top left
}

.ma-icon-linkout {
    width: 8px;
    height: 8px;
    margin-top: 6px;
    margin-left: 4px;
    background-image: url(../img/icons/linkout.png);
    background-position: bottom left
}

.ma-icon-house {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/house.png);
    background-position: top left
}

.ma-icon-user {
    width: 16px;
    height: 16px;
    background-image: url(../img/user_green.png);
    background-position: top left
}

.ma-icon-opportunities {
    width: 16px;
    height: 16px;
    background-image: url(../img/user_green.png);
    background-position: top left
}

.ma-icon-commercial {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/user_suit.png);
    background-position: top left
}

.ma-icon-contract {
    width: 16px;
    height: 16px;
    background-image: url(../img/document.png);
    background-position: top left
}

.ma-icon-realtor {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/building.png);
    background-position: top left
}

.ma-icon-realtor-user {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/user_suit.png);
    background-position: top left
}

.ma-icon-tasker {
    width: 16px;
    height: 16px;
    background-image: url(../img/icons/newspaper.png);
    background-position: top left
}

.ma-icon-analytics {
    width: 16px;
    height: 16px;
    background-image: url(../img/chart_bar.png);
    background-position: top left
}

.ma-icon-tools {
    width: 16px;
    height: 16px;
    background-image: url(../img/wrench.png);
    background-position: top left
}

.ma-icon-admin {
    width: 16px;
    height: 16px;
    background-image: url(../img/tux.png);
    background-position: top left
}

.ma-icon-data {
    width: 16px;
    height: 16px;
    background-image: url(../img/map.png);
    background-position: top left
}

.ma-icon-grip {
    width: 16px;
    height: 16px;
    background: transparent url('../img/sprites.png') no-repeat 0 0;
    background-position: -48px -128px
}

.ma-icon-pencil {
    width: 16px;
    height: 16px;
    background: transparent url('../img/pencil.png') no-repeat 0 0;
    background-position: top left
}

.ma-icon-zoom {
    width: 16px;
    height: 16px;
    background: transparent url('../img/zoom.png') no-repeat 0 0;
    background-position: top left
}

.ma-icon-triangle-top,.ma-icon-triangle-right,.ma-icon-triangle-bottom,.ma-icon-triangle-left {
    display: inline-block;
    width: 0px;
    height: 0px;
    vertical-align: middle;
    padding: 0px;
    margin: 5px;
    content: ""
}

a .ma-icon-triangle-top,a .ma-icon-triangle-top,a .ma-icon-triangle-bottom,a .ma-icon-triangle-left {
    opacity: 1;
    filter: alpha(opacity=100)
}

.ma-icon-triangle-top {
    border-bottom: 5px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent
}

a .ma-icon-triangle-top {
    border-bottom-color: #08C
}

a:hover .ma-icon-triangle-top {
    border-bottom-color: #c60000
}

.ma-icon-triangle-right {
    border-left: 4px solid black;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent
}

a .ma-icon-triangle-right {
    border-left-color: #08C
}

a:hover .ma-icon-triangle-right {
    border-left-color: #c60000
}

.ma-icon-triangle-bottom {
    border-top: 5px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent
}

a .ma-icon-triangle-bottom {
    border-top-color: #08C
}

a:hover .ma-icon-triangle-bottom {
    border-top-color: #c60000
}

.ma-icon-triangle-left {
    border-right: 5px solid black;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent
}

a .ma-icon-triangle-left {
    border-right-color: #08C
}

a:hover .ma-icon-triangle-left {
    border-right-color: #c60000
}

.ma-icon-stars0 {
    width: 84px;
    height: 16px;
    background-image: url(../img/icons/stars_sprite.png);
    background-position: -85px 0
}

.ma-icon-stars1 {
    width: 84px;
    height: 16px;
    background-image: url(../img/icons/stars_sprite.png);
    background-position: -68px 0
}

.ma-icon-stars2 {
    width: 84px;
    height: 16px;
    background-image: url(../img/icons/stars_sprite.png);
    background-position: -51px 0
}

.ma-icon-stars3 {
    width: 84px;
    height: 16px;
    background-image: url(../img/icons/stars_sprite.png);
    background-position: -34px 0
}

.ma-icon-stars4 {
    width: 84px;
    height: 16px;
    background-image: url(../img/icons/stars_sprite.png);
    background-position: -17px 0
}

.ma-icon-stars5 {
    width: 84px;
    height: 16px;
    background-image: url(../img/icons/stars_sprite.png);
    background-position: 0px 0px
}

.ma-icon-red-light {
    width: 14px;
    height: 14px;
    background: transparent url('../img/bg_kpi_red.png') no-repeat 0 0
}

.ma-icon-green-light {
    width: 14px;
    height: 14px;
    background: transparent url('../img/bg_kpi_green.png') no-repeat 0 0
}

.ma-icon-orange-light {
    width: 14px;
    height: 14px;
    background: transparent url('../img/bg_kpi_orange.png') no-repeat 0 0
}

.file_big_icon {
    background-image: url(../img/fileicons32.png);
    background-repeat: no-repeat;
    float: left;
    height: 32px;
    margin-right: 7px;
    width: 30px;
    background-position: -30px -160px
}

.big_doc,.big_docx {
    background-position: 0px 0px
}

.big_jpeg,.big_jpg {
    background-position: -30px 0
}

.big_pdf {
    background-position: 0 -32px
}

.big_png {
    background-position: -30px -32px
}

.big_ppt,.big_pptx {
    background-position: 0 -64px
}

.big_tif,.big_tif {
    background-position: -30px -64px
}

.big_txt {
    background-position: 0 -96px
}

.big_vcf {
    background-position: -30px -96px
}

.big_xls,.big_xlsx {
    background-position: 0 -128px
}

.big_zip,.big_gzip,.big_rar {
    background-position: -30px -128px
}

.big_gif {
    background-position: 0 -160px
}

.ma-icon-redstars0 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -90px -16px;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars10 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -72px -16px;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars20 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -54px -16px;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars30 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -36px -16px;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars40 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -18px -16px;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars50 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: 0 -16px;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars5 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -72px 0;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars15 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -54px 0;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars25 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -36px 0;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars35 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: -18px 0;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars45 {
    width: 90px;
    height: 16px;
    background-image: url(../img/ratings/redstars_sprite.png);
    background-position: 0px 0px;
    margin-top: -1px;
    margin-right: 5px;
    line-height: 16px
}

.ma-icon-redstars-small0 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -60px -11px;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small10 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -48px -11px;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small20 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -36px -11px;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small30 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -24px -11px;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small40 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -12px -11px;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small50 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: 0 -11px;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small5 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -60px 0;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small15 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -36px 0;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small25 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -24px 0;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small35 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: -12px 0;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-redstars-small45 {
    width: 60px;
    height: 11px;
    background-image: url(../img/ratings/redstars_sprite-small.png);
    background-position: 0px 0px;
    margin-top: -1px;
    margin-right: 0;
    line-height: 14px
}

.ma-icon-buyer-feedbacks {
    display: inline-block;
    width: 158px;
    height: 12px;
    background: transparent url('../img/icons/buyer_feedbacks_sprite.png') no-repeat top left
}

.ma-icon-buyer-whiteface {
    display: inline-block;
    width: 66px;
    height: 66px;
    background: transparent url('../img/icons/white_face_sprite.png') no-repeat top center
}

.score-red .ma-icon-buyer-whiteface {
    background-position: 0 0
}

.score-orange .ma-icon-buyer-whiteface {
    background-position: -66px 0
}

.score-green .ma-icon-buyer-whiteface {
    background-position: -132px 0
}

.product-label {
    font-weight: 600;
    color: #fff;
    padding: 3px
}

.product-label-standard {
    font-size: 13px;
    text-transform: none
}

.product-label-serenity {
    background-color: #2A8950
}

.product-label-liberty {
    background-color: #4477EE
}

.product-label-promising-sellers {
    background-color: #594F9B
}

.pastille,.pastille_not_bind,.pastille_v,.pastille_v_not_bind {
    background-color: white;
    border: 1px solid black;
    display: inline-block;
    font-weight: bold;
    font-size: 11pt;
    height: 16px;
    line-height: 16px;
    margin: 2px;
    text-align: center;
    width: 16px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px
}

.pastille_v,.pastille_v_not_bind {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px
}

.pastille_disabled {
    border-color: #999999;
    color: #999999
}

.pastille_owner {
    border-color: #016a3c;
    color: #016a3c
}

.pastille_rent {
    border-color: #ce311d;
    color: #ce311d
}

.pastille_seller {
    border-color: #016a3c;
    color: #016a3c
}

.pastille_now {
    border-color: #016a3c;
    color: #016a3c
}

.pastille_soon {
    border-color: #016a3c;
    color: #016a3c
}

.pastille_solo {
    border-color: #fd7929;
    color: #fd7929
}

.pastille_contract {
    border-color: #fd7929;
    color: #fd7929
}

.pastille_buyer {
    border-color: #0b4a9e;
    color: #0b4a9e
}

.pastille_sold {
    border-color: #000000;
    color: #000000
}

.pastille_coverage_now {
    border-color: #006633;
    color: #006633
}

.pastille_coverage_soon {
    border-color: #ff9900;
    color: #ff9900
}

.pastille_coverage_sold {
    border-color: #ce311d;
    color: #ce311d
}

.pastille_coverage_none {
    border-color: #ce311d;
    color: #ce311d
}

.pastille_filled_green {
    background-color: #006633;
    border-color: #006633;
    color: white
}

.pastille_filled_orange {
    background-color: #ff9900;
    border-color: #ff9900;
    color: white
}

.pastille_filled_red {
    background-color: #ce311d;
    border-color: #ce311d;
    color: white
}

.pastilles_set {
    border: 1px solid #FFF;
    cursor: pointer;
    margin: 4px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.pastilles_set:hover {
    background-color: #ffd75e;
    border-color: #ffd75e
}

.pastilles_set.pastille {
    float: left
}

.table-noborder th,.table-noborder td {
    padding: 4px 0px;
    border-top: none
}

.table tbody th {
    font-size: 12px;
    color: #555;
    font-weight: normal
}

.table-vmiddle thead th {
    vertical-align: middle
}

.table-vmiddle tbody td,.table-vmiddle td {
    vertical-align: middle
}

.table-tcenter thead th {
    text-align: center
}

.table-tcenter tbody td,.table-tcenter td {
    text-align: center
}

.chart-discvalue {
    font-size: 22px;
    text-align: center;
    background: #08c;
    color: white;
    border-radius: 100px;
    height: 50px;
    line-height: 50px;
    width: 50px;
    padding: 5px
}

.chart-discvalue .chart-discvalue-figure {
    background: white;
    color: #333;
    border-radius: 100px;
    line-height: 50px;
    width: 50px
}

.chart-discvalue-small {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    width: 40px;
    padding: 3px
}

.chart-discvalue-small .chart-discvalue-figure {
    line-height: 40px;
    width: 40px
}

.tags h3 {
    margin: 0px !important;
    padding-top: 10px
}

.tags {
    *zoom:1}

.tags:before,.tags:after {
    display: table;
    content: "";
    line-height: 0
}

.tags:after {
    clear: both
}

.tag {
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: #eee !important;
    color: #555 !important;
    line-height: 12px;
    padding: 2px 6px;
    margin-right: 4px;
    margin-bottom: 3px;
    font-size: 12px;
    border: 1px solid rgba(0,0,0,0.15)
}

.tag.selected,.tag:hover {
    background-color: #dadada !important;
    color: #626262 !important
}

.tag span.tag-icon {
    text-align: center;
    margin: 0;
    padding: 0;
    margin-left: 3px;
    opacity: .5;
    filter: alpha(opacity=50)
}

.tag:hover {
    color: #555;
    text-decoration: none
}

.tag.selected:hover .tag-icon {
    opacity: 1;
    filter: alpha(opacity=100)
}

.tag.filter_tag_link.selected {
    border: 2px solid rgba(0,0,0,0.5);
    padding: 1px 5px
}

.tag.filter_tag_link:hover .tag-icon {
    opacity: .5;
    filter: alpha(opacity=50)
}

.recommended_tags .tag.selected {
    border: 2px solid rgba(0,0,0,0.5);
    padding: 1px 5px
}

.tag_colors_dropdown {
    border: 1px solid #C0C0C0;
    background-color: #FFF;
    display: none;
    padding: 4px;
    position: absolute;
    width: 140px
}

.tag_color {
    border: 1px solid #FFF;
    cursor: pointer;
    float: left;
    height: 13px;
    line-height: 11px;
    margin: 2px;
    width: 13px;
    text-align: center
}

.current_tag_color {
    background-color: #f1f5ec;
    border: 1px solid #E0E0E0;
    height: 13px;
    line-height: 11px;
    text-align: center;
    width: 13px
}

.tag_light_blue {
    background-color: #e0ecff !important;
    color: #206cff !important
}

.tag_light_blue.selected,.tag_light_blue:hover {
    background-color: #b7d3ff !important;
    color: #3a7dff !important
}

.tag_light_brown {
    background-color: #fde9f4 !important;
    color: #854f61 !important
}

.tag_light_brown.selected,.tag_light_brown:hover {
    background-color: #fac4e1 !important;
    color: #95596d !important
}

.tag_light_gray {
    background-color: #dee5f2 !important;
    color: #5a6986 !important
}

.tag_light_gray.selected,.tag_light_gray:hover {
    background-color: #c1cee6 !important;
    color: #647595 !important
}

.tag_light_navy {
    background-color: #dfe2ff !important;
    color: #00c !important
}

.tag_light_navy.selected,.tag_light_navy:hover {
    background-color: #b6bdff !important;
    color: #0000e6 !important
}

.tag_light_purple {
    background-color: #e0d5f9 !important;
    color: #5229a3 !important
}

.tag_light_purple.selected,.tag_light_purple:hover {
    background-color: #c6b1f4 !important;
    color: #5c2eb7 !important
}

.tag_light_red {
    background-color: #ffe3e3 !important;
    color: #c00 !important
}

.tag_light_red.selected,.tag_light_red:hover {
    background-color: #ffbaba !important;
    color: #e60000 !important
}

.tag_dark_gray {
    background-color: #5a6986 !important;
    color: #dee5f2 !important
}

.tag_dark_gray.selected,.tag_dark_gray:hover {
    background-color: #4a566e !important;
    color: #f0f3f9 !important
}

.tag_dark_blue {
    background-color: #206cff !important;
    color: #e0ecff !important
}

.tag_dark_blue.selected,.tag_dark_blue:hover {
    background-color: #0054f6 !important;
    color: #fafcff !important
}

.tag_dark_navy {
    background-color: #00c !important;
    color: #dfe2ff !important
}

.tag_dark_navy.selected,.tag_dark_navy:hover {
    background-color: #0000a3 !important;
    color: #f9f9ff !important
}

.tag_dark_purple {
    background-color: #5229a3 !important;
    color: #e0d5f9 !important
}

.tag_dark_purple.selected,.tag_dark_purple:hover {
    background-color: #422182 !important;
    color: #f0ebfc !important
}

.tag_dark_brown {
    background-color: #854f61 !important;
    color: #fde9f4 !important
}

.tag_dark_brown.selected,.tag_dark_brown:hover {
    background-color: #6b404e !important;
    color: #fff !important
}

.tag_dark_red {
    background-color: #c00 !important;
    color: #ffe3e3 !important
}

.tag_dark_red.selected,.tag_dark_red:hover {
    background-color: #a30000 !important;
    color: #fffdfd !important
}

.tag_light_orange {
    background-color: #fff0e1 !important;
    color: #ec7000 !important
}

.tag_light_orange.selected,.tag_light_orange:hover {
    background-color: #ffdcb8 !important;
    color: #ff7c07 !important
}

.tag_light_chocolate {
    background-color: #fadcb3 !important;
    color: #b36d00 !important
}

.tag_light_chocolate.selected,.tag_light_chocolate:hover {
    background-color: #f7ca8d !important;
    color: #cc7d00 !important
}

.tag_light_olive {
    background-color: #f3e7b3 !important;
    color: #ab8b00 !important
}

.tag_light_olive.selected,.tag_light_olive:hover {
    background-color: #eddc90 !important;
    color: #c4a000 !important
}

.tag_light_olivedrab {
    background-color: #ffffd4 !important;
    color: #636330 !important
}

.tag_light_olivedrab.selected,.tag_light_olivedrab:hover {
    background-color: #ffffab !important;
    color: #747438 !important
}

.tag_light_yellowgreen {
    background-color: #f9ffef !important;
    color: #64992c !important
}

.tag_light_yellowgreen.selected,.tag_light_yellowgreen:hover {
    background-color: #eaffc6 !important;
    color: #71ad32 !important
}

.tag_light_green {
    background-color: #f1f5ec !important;
    color: #063 !important
}

.tag_light_green.selected,.tag_light_green:hover {
    background-color: #dde7d1 !important;
    color: #008040 !important
}

.tag_dark_orange {
    background-color: #ec7000 !important;
    color: #fff0e1 !important
}

.tag_dark_orange.selected,.tag_dark_orange:hover {
    background-color: #c35d00 !important;
    color: #fffdfb !important
}

.tag_dark_chocolate {
    background-color: #b36d00 !important;
    color: #fadcb3 !important
}

.tag_dark_chocolate.selected,.tag_dark_chocolate:hover {
    background-color: #8a5400 !important;
    color: #fce7cb !important
}

.tag_dark_olive {
    background-color: #ab8b00 !important;
    color: #f3e7b3 !important
}

.tag_dark_olive.selected,.tag_dark_olive:hover {
    background-color: #826a00 !important;
    color: #f6eec9 !important
}

.tag_dark_olivedrab {
    background-color: #636330 !important;
    color: #ffffd4 !important
}

.tag_dark_olivedrab.selected,.tag_dark_olivedrab:hover {
    background-color: #484823 !important;
    color: #ffe !important
}

.tag_dark_yellowgreen {
    background-color: #64992c !important;
    color: #f9ffef !important
}

.tag_dark_yellowgreen.selected,.tag_dark_yellowgreen:hover {
    background-color: #4f7923 !important;
    color: #fff !important
}

.tag_dark_green {
    background-color: #063 !important;
    color: #f1f5ec !important
}

.tag_dark_green.selected,.tag_dark_green:hover {
    background-color: #003d1f !important;
    color: #fdfefd !important
}

.tags_checklist_box_container {
    position: relative
}

.tags_checklist_box_container input {
    cursor: text;
    z-index: 3
}

.tags_checklist_box_container h3 {
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px
}

.tags_checklist_box {
    background: #fff;
    border: 1px solid #CCC;
    font-size: 11px;
    overflow: auto;
    padding: 6px;
    position: absolute;
    top: 27px;
    left: 0px;
    right: 0px;
    z-index: 2
}

.tags_checklist_box ul {
    margin: 0 0 0 4px;
    list-style: none;
    max-width: 300px
}

.tags_checklist_box ul li {
    display: block;
    height: 18px;
    line-height: 14px;
    padding: 0;
    margin: 0
}

.chart {
    overflow: auto;
    width: 930px;
    margin-bottom: 40px
}

.barchart {
    border-collapse: collapse
}

.barchart td {
    text-align: center
}

.barchart tr.bar td {
    height: 100%;
    vertical-align: bottom
}

.barchart tr.bar td.splited {
    min-width: 60px
}

.barchart tr.bar td div.bar_value {
    font-size: 10px;
    margin: 0 auto;
    white-space: nowrap
}

.barchart tr.bar td div.bar {
    width: 35px;
    background-color: #0077cc;
    margin: 0 auto
}

.barchart tr.bar td div.blankbar {
    width: 35px;
    margin: 0 auto
}

.barchart tr.legends_line td {
    border: 1px solid black;
    white-space: nowrap
}

.barchart tr.label td {
    font-size: 10px;
    line-height: 12px;
    vertical-align: bottom
}

.barchart_legend {
    display: inline-block;
    height: 12px;
    line-height: 12px;
    margin-right: 5px;
    width: 12px;
    -moz-box-shadow: 0 0 2px 0 #000;
    -webkit-box-shadow: 0 0 2px 0 #000
}

.hbarchart {
    background-color: #FFF;
    border: 1px solid #000;
    font-size: 1px;
    height: 8px;
    margin-top: 4px;
    width: 100%
}

.hbarchart .hbar {
    border-right: 1px solid #000;
    background-color: #0077cc;
    height: 8px
}

.price_acc_5 {
    width: 74px;
    height: 8px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -150px
}

.price_acc_4 {
    width: 74px;
    height: 8px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -170px
}

.price_acc_3 {
    width: 74px;
    height: 8px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -190px
}

.price_acc_2 {
    width: 74px;
    height: 8px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -210px
}

.price_acc_1 {
    width: 74px;
    height: 8px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -230px
}

.price_acc_big_5 {
    width: 74px;
    height: 12px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 0
}

.price_acc_big_4 {
    width: 74px;
    height: 12px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -30px
}

.price_acc_big_3 {
    width: 74px;
    height: 12px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -60px
}

.price_acc_big_2 {
    width: 74px;
    height: 12px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -90px
}

.price_acc_big_1 {
    width: 74px;
    height: 12px;
    background: transparent url('../img/sprites_stars.png') no-repeat 0 -120px
}

div.rate0 {
    width: 98px;
    height: 20px;
    background: transparent url('../img/stars.gif') no-repeat 0 -100px
}

div.rate1 {
    width: 98px;
    height: 20px;
    background: transparent url('../img/stars.gif') no-repeat 0 -80px
}

div.rate2 {
    width: 98px;
    height: 20px;
    background: transparent url('../img/stars.gif') no-repeat 0 -60px
}

div.rate3 {
    width: 98px;
    height: 20px;
    background: transparent url('../img/stars.gif') no-repeat 0 -40px
}

div.rate4 {
    width: 98px;
    height: 20px;
    background: transparent url('../img/stars.gif') no-repeat 0 -20px
}

div.rate5 {
    width: 98px;
    height: 20px;
    background: transparent url('../img/stars.gif') no-repeat 0 0
}

.rating_bar {
    background: transparent url('../img/input_stars.png') no-repeat -162px 0;
    height: 24px
}

.rating_bar_3 {
    width: 82px
}

.rating_bar_4 {
    width: 109px
}

.rating_bar_5 {
    width: 136px
}

.rating_bar_1_5 {
    background: transparent url('../img/input_stars.png') no-repeat -108px 0
}

.rating_bar_2_5 {
    background: transparent url('../img/input_stars.png') no-repeat -81px 0
}

.rating_bar_3_5 {
    background: transparent url('../img/input_stars.png') no-repeat -54px 0
}

.rating_bar_4_5 {
    background: transparent url('../img/input_stars.png') no-repeat -27px 0
}

.rating_bar_5_5 {
    background: transparent url('../img/input_stars.png') no-repeat 0 0
}

.rating_bar_1_4 {
    background: transparent url('../img/input_stars.png') no-repeat -108px 0
}

.rating_bar_2_4 {
    background: transparent url('../img/input_stars.png') no-repeat -81px 0
}

.rating_bar_3_4 {
    background: transparent url('../img/input_stars.png') no-repeat -54px 0
}

.rating_bar_4_4 {
    background: transparent url('../img/input_stars.png') no-repeat -27px 0
}

.rating_bar_1_3 {
    background: transparent url('../img/input_stars.png') no-repeat -108px 0
}

.rating_bar_2_3 {
    background: transparent url('../img/input_stars.png') no-repeat -81px 0
}

.rating_bar_3_3 {
    background: transparent url('../img/input_stars.png') no-repeat -54px 0
}

.rating_bar a,.rating_bar a:hover {
    display: block;
    float: left;
    height: 24px;
    width: 27px;
    text-decoration: none;
    background: transparent;
    outline: none
}

.rating_bar_small {
    background: transparent url('../img/input_stars.png') no-repeat -114px -34px;
    height: 16px
}

.rating_bar_small_3 {
    width: 58px
}

.rating_bar_small_4 {
    width: 77px
}

.rating_bar_small_5 {
    width: 96px
}

.rating_bar_small_1_5 {
    background: transparent url('../img/input_stars.png') no-repeat -76px -34px
}

.rating_bar_small_2_5 {
    background: transparent url('../img/input_stars.png') no-repeat -57px -34px
}

.rating_bar_small_3_5 {
    background: transparent url('../img/input_stars.png') no-repeat -38px -34px
}

.rating_bar_small_4_5 {
    background: transparent url('../img/input_stars.png') no-repeat -19px -34px
}

.rating_bar_small_5_5 {
    background: transparent url('../img/input_stars.png') no-repeat 0 -34px
}

.rating_bar_small_1_4 {
    background: transparent url('../img/input_stars.png') no-repeat -76px -34px
}

.rating_bar_small_2_4 {
    background: transparent url('../img/input_stars.png') no-repeat -57px -34px
}

.rating_bar_small_3_4 {
    background: transparent url('../img/input_stars.png') no-repeat -38px -34px
}

.rating_bar_small_4_4 {
    background: transparent url('../img/input_stars.png') no-repeat -19px -34px
}

.rating_bar_small_1_3 {
    background: transparent url('../img/input_stars.png') no-repeat -76px -34px
}

.rating_bar_small_2_3 {
    background: transparent url('../img/input_stars.png') no-repeat -57px -34px
}

.rating_bar_small_3_3 {
    background: transparent url('../img/input_stars.png') no-repeat -38px -34px
}

.rating_bar_small a,.rating_bar_small a:hover {
    display: block;
    float: left;
    height: 16px;
    width: 19px;
    text-decoration: none;
    background: transparent;
    outline: none
}

div.rating_bar_0_5 {
    height: 24px;
    width: 136px;
    background: transparent url('../img/input_stars.png') no-repeat -162px 0
}

div.rating_bar_1_5 {
    height: 24px;
    width: 136px;
    background: transparent url('../img/input_stars.png') no-repeat -108px 0
}

div.rating_bar_2_5 {
    height: 24px;
    width: 136px;
    background: transparent url('../img/input_stars.png') no-repeat -81px 0
}

div.rating_bar_3_5 {
    height: 24px;
    width: 136px;
    background: transparent url('../img/input_stars.png') no-repeat -54px 0
}

div.rating_bar_4_5 {
    height: 24px;
    width: 136px;
    background: transparent url('../img/input_stars.png') no-repeat -27px 0
}

div.rating_bar_5_5 {
    height: 24px;
    width: 136px;
    background: transparent url('../img/input_stars.png') no-repeat 0 0
}

div.rating_bar_small_0_5 {
    height: 16px;
    width: 96px;
    background: transparent url('../img/input_stars.png') no-repeat -114px -34px
}

div.rating_bar_small_1_5 {
    height: 16px;
    width: 96px;
    background: transparent url('../img/input_stars.png') no-repeat -76px -34px
}

div.rating_bar_small_2_5 {
    height: 16px;
    width: 96px;
    background: transparent url('../img/input_stars.png') no-repeat -57px -34px
}

div.rating_bar_small_3_5 {
    height: 16px;
    width: 96px;
    background: transparent url('../img/input_stars.png') no-repeat -38px -34px
}

div.rating_bar_small_4_5 {
    height: 16px;
    width: 96px;
    background: transparent url('../img/input_stars.png') no-repeat -19px -34px
}

div.rating_bar_small_5_5 {
    height: 16px;
    width: 96px;
    background: transparent url('../img/input_stars.png') no-repeat 0 -34px
}

#facebox {
    display: none;
    max-width: 960px;
    min-width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    z-index: 600
}

#facebox.facebox-large {
    max-width: 1300px
}

#facebox .borders {
    clear: both;
    background-color: #7c7c7c;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    opacity: .6;
    filter: alpha(opacity=60);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px
}

#facebox .content {
    background-color: #fff;
    min-width: 200px;
    overflow: auto;
    padding: 8px;
    position: relative
}

#facebox .footer {
    background-color: #dcdcdc;
    position: relative
}

#facebox .close {
    background: transparent url(../img/popup_close.png) no-repeat scroll left top;
    display: block;
    position: absolute;
    top: -3px;
    right: -3px;
    width: 28px;
    height: 28px;
    z-index: 610;
    text-indent: -9999px;
    overflow: hidden;
    outline: none;
    opacity: 1;
    filter: alpha(opacity=100)
}

#facebox .loading,#facebox .image {
    text-align: center
}

#facebox .footer img {
    vertical-align: middle
}

#facebox_overlay {
    background-color: #000;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 590;
    opacity: .3;
    filter: alpha(opacity=30)
}

.facebox_hide {
    z-index: 500
}

#ui-datepicker-div {
    z-index: 10001 !important
}

input[type="hidden"] {
    display: none !important
}

.inline>input[type=radio] {
    margin-right: 10px
}

.inline>input[type=checkbox] {
    margin-right: 10px
}

.row-fluid input[type="text"].span12,.row-fluid textarea.span12 {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.row-fluid input[type="text"].span12 {
    height: 28px
}

.ma_map img,.map img {
    max-width: none
}

.pano img {
    max-width: none
}

.t1 {
    background: #9d261d
}

.t2 {
    background: #049cdb
}

.t3 {
    background: #46a546
}

.t4 {
    background: #ffc40d
}

.t5 {
    background: #c3325f
}

.iq {
    width: 140px;
    text-align: center;
    font-family: Arial;
    font-size: 22pt;
    font-weight: bold;
    height: 50px;
    line-height: 50px
}

.iq .iq-label {
    display: inline-block;
    background-color: white;
    color: black;
    height: 48px;
    line-height: 48px;
    border: 1px solid #cecece;
    border-right-width: 0;
    margin-right: 0;
    width: 69px
}

.iq .iq-value {
    display: inline-block;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    margin-left: 0;
    width: 70px
}

.iq .iq-value.iq-low {
    background: #c00000;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #b20000;
    background-image: -moz-linear-gradient(top, #c00000, #9c0000);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#c00000), to(#9c0000));
    background-image: -webkit-linear-gradient(top, #c00000, #9c0000);
    background-image: -o-linear-gradient(top, #c00000, #9c0000);
    background-image: linear-gradient(to bottom, #c00000, #9c0000);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc00000', endColorstr='#ff9c0000', GradientType=0);
    border-color: #9c0000 #9c0000 #500000;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25)
}

.iq .iq-value.iq-middle {
    background: #f89406;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #ea8c06;
    background-image: -moz-linear-gradient(top, #f89406, #d57f05);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f89406), to(#d57f05));
    background-image: -webkit-linear-gradient(top, #f89406, #d57f05);
    background-image: -o-linear-gradient(top, #f89406, #d57f05);
    background-image: linear-gradient(to bottom, #f89406, #d57f05);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff89406', endColorstr='#ffd57f05', GradientType=0);
    border-color: #d57f05 #d57f05 #8a5303;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25)
}

.iq .iq-value.iq-high {
    background: #2d801c;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #297419;
    background-image: -moz-linear-gradient(top, #2d801c, #236316);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#2d801c), to(#236316));
    background-image: -webkit-linear-gradient(top, #2d801c, #236316);
    background-image: -o-linear-gradient(top, #2d801c, #236316);
    background-image: linear-gradient(to bottom, #2d801c, #236316);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff2d801c', endColorstr='#ff236316', GradientType=0);
    border-color: #236316 #236316 #0d2408;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25)
}

.iq.iq-medium {
    width: 80px;
    height: 32px;
    line-height: 32px;
    font-size: 16px
}

.iq.iq-medium .iq-label {
    width: 39px;
    height: 30px;
    line-height: 30px
}

.iq.iq-medium .iq-value {
    width: 40px
}

.iq.iq-small {
    width: 60px;
    height: 24px;
    line-height: 24px;
    font-size: 14px
}

.iq.iq-small .iq-label {
    width: 29px;
    height: 22px;
    line-height: 22px
}

.iq.iq-small .iq-value {
    width: 30px
}

.funnel {
    width: 153px;
    height: 132px
}

.funnel_value {
    font-weight: bold;
    font-size: 12pt;
    line-height: 132px;
    margin-left: 44px
}

.funnel0 {
    background: transparent url('../img/funnel/h/funnel_10.gif') no-repeat left center
}

.funnel10 {
    background: transparent url('../img/funnel/h/funnel_10.gif') no-repeat left center
}

.funnel20 {
    background: transparent url('../img/funnel/h/funnel_20.gif') no-repeat left center
}

.funnel30 {
    background: transparent url('../img/funnel/h/funnel_30.gif') no-repeat left center
}

.funnel40 {
    background: transparent url('../img/funnel/h/funnel_40.gif') no-repeat left center
}

.funnel50 {
    background: transparent url('../img/funnel/h/funnel_50.gif') no-repeat left center
}

.funnel60 {
    background: transparent url('../img/funnel/h/funnel_60.gif') no-repeat left center
}

.funnel70 {
    background: transparent url('../img/funnel/h/funnel_70.gif') no-repeat left center
}

.funnel80 {
    background: transparent url('../img/funnel/h/funnel_80.gif') no-repeat left center
}

.funnel90 {
    background: transparent url('../img/funnel/h/funnel_90.gif') no-repeat left center
}

.funnel100 {
    background: transparent url('../img/funnel/h/funnel_100.gif') no-repeat left center
}

.stats-ma {
    width: 340px;
    border-collapse: collapse
}

.stats-ma th {
    color: #777;
    font-size: 14px
}

.stats-ma tr:last-of-type>* {
    border-top: 1px #c0c0c0 solid
}

.stats-ma td {
    padding: 10px 5px
}

.stats-ma td .legend {
    width: 20px;
    height: 20px;
    margin: 0px;
    padding: 0px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.stats-ma strong {
    font-weight: bold;
    font-size: 18px
}

#my table.campaign {
    margin-top: 10px;
    width: 100%;
    border-collapse: collapse;
    vertical-align: middle;
    height: 150px
}

#my .campaign th {
    border-right: 1px #c0c0c0 solid;
    font-size: 16px;
    text-align: right
}

#my .campaign td,#my .campaign th {
    padding: 10px;
    vertical-align: middle
}

#my .campaign tr:first-child {
    border-bottom: 1px #c0c0c0 solid
}

#my .campaign td div {
    text-align: center;
    width: 100px;
    padding: 5px 0px
}

#my .good_job {
    color: white;
    background-color: #5BB75B;
    border: #3c893c 1px solid;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.6)
}

#my .normal_job {
    color: white;
    background-color: #faa732;
    border: #f39106 1px solid;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.3)
}

#my .bad_job {
    color: white;
    background-color: #DA4F49;
    border: #b22a24 1px solid;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.6)
}

#my .planning-container {
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    left: 0;
    right: 0
}

#my .planning-container table td {
    background-color: white
}

#my .planning-container .planning-events {
    margin: 0
}

#my .planning-container .planning-events td.appel,#my .planning-container .planning-events td.pause,#my .planning-container .planning-events td.appel,#my .planning-container .planning-events td.attente,#my .planning-container .planning-events td.bad {
    background-color: #fafafa;
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fff), color-stop(25%, #fff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(#fff, #fff 25%, #e6e6e6);
    background-image: -moz-linear-gradient(top, #fff, #fff 25%, #e6e6e6);
    background-image: -o-linear-gradient(#fff, #fff 25%, #e6e6e6);
    background-image: linear-gradient(#fff, #fff 25%, #e6e6e6);
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0)
}

#my .planning-container .planning-events td.pause {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #49afcd;
    background-image: -moz-linear-gradient(top, #5bc0de, #2f96b4);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#5bc0de), to(#2f96b4));
    background-image: -webkit-linear-gradient(top, #5bc0de, #2f96b4);
    background-image: -o-linear-gradient(top, #5bc0de, #2f96b4);
    background-image: linear-gradient(to bottom, #5bc0de, #2f96b4);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff2f96b4', GradientType=0);
    border-color: #2f96b4 #2f96b4 #1f6377;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #2f96b4;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

#my .planning-container .planning-events td.pause:hover,#my .planning-container .planning-events td.pause:active,#my .planning-container .planning-events td.pause.active,#my .planning-container .planning-events td.pause.disabled,#my .planning-container .planning-events td.pause[disabled] {
    color: #fff;
    background-color: #2f96b4;
    *background-color: #2a85a0
}

#my .planning-container .planning-events td.pause:active,#my .planning-container .planning-events td.pause.active {
    background-color: #24748c \9
}

#my .planning-container .planning-events td.bad {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #da4f49;
    background-image: -moz-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#bd362f));
    background-image: -webkit-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -o-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: linear-gradient(to bottom, #ee5f5b, #bd362f);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffbd362f', GradientType=0);
    border-color: #bd362f #bd362f #802420;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #bd362f;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

#my .planning-container .planning-events td.bad:hover,#my .planning-container .planning-events td.bad:active,#my .planning-container .planning-events td.bad.active,#my .planning-container .planning-events td.bad.disabled,#my .planning-container .planning-events td.bad[disabled] {
    color: #fff;
    background-color: #bd362f;
    *background-color: #a9302a
}

#my .planning-container .planning-events td.bad:active,#my .planning-container .planning-events td.bad.active {
    background-color: #942a25 \9
}

#my .planning-container .planning-events td.appel {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #5bb75b;
    background-image: -moz-linear-gradient(top, #62c462, #51a351);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#62c462), to(#51a351));
    background-image: -webkit-linear-gradient(top, #62c462, #51a351);
    background-image: -o-linear-gradient(top, #62c462, #51a351);
    background-image: linear-gradient(to bottom, #62c462, #51a351);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff62c462', endColorstr='#ff51a351', GradientType=0);
    border-color: #51a351 #51a351 #387038;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #51a351;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

#my .planning-container .planning-events td.appel:hover,#my .planning-container .planning-events td.appel:active,#my .planning-container .planning-events td.appel.active,#my .planning-container .planning-events td.appel.disabled,#my .planning-container .planning-events td.appel[disabled] {
    color: #fff;
    background-color: #51a351;
    *background-color: #499249
}

#my .planning-container .planning-events td.appel:active,#my .planning-container .planning-events td.appel.active {
    background-color: #408140 \9
}

#my .planning-container .planning-events td.attente {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #faa732;
    background-image: -moz-linear-gradient(top, #fbb450, #f89406);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fbb450), to(#f89406));
    background-image: -webkit-linear-gradient(top, #fbb450, #f89406);
    background-image: -o-linear-gradient(top, #fbb450, #f89406);
    background-image: linear-gradient(to bottom, #fbb450, #f89406);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffbb450', endColorstr='#fff89406', GradientType=0);
    border-color: #f89406 #f89406 #ad6704;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #f89406;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false)
}

#my .planning-container .planning-events td.attente:hover,#my .planning-container .planning-events td.attente:active,#my .planning-container .planning-events td.attente.active,#my .planning-container .planning-events td.attente.disabled,#my .planning-container .planning-events td.attente[disabled] {
    color: #fff;
    background-color: #f89406;
    *background-color: #df8505
}

#my .planning-container .planning-events td.attente:active,#my .planning-container .planning-events td.attente.active {
    background-color: #c67605 \9
}

#my .planning-container .planning-events td.appel,#my .planning-container .planning-events td.pause,#my .planning-container .planning-events td.appel,#my .planning-container .planning-events td.attente,#my .planning-container .planning-events td.bad {
    border-top: white solid 1px;
    border-bottom: white solid 1px;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    color: white
}

#my .planning-container .planning-events td.appel a,#my .planning-container .planning-events td.pause a,#my .planning-container .planning-events td.appel a,#my .planning-container .planning-events td.attente a,#my .planning-container .planning-events td.bad a {
    color: white
}

#my .planning-container .planning-event-details {
    display: none
}

.margin {
    margin: 15px
}

.margin-right,.right_margin {
    margin-right: 15px
}

.margin-left,.left_margin {
    margin-left: 15px
}

.margin-top,.top_margin {
    margin-top: 15px
}

.margin-bottom,.bottom_margin {
    margin-bottom: 15px
}

.margin-x2 {
    margin: 30px
}

.margin-top-x2 {
    margin-top: 30px
}

.margin-right-x2 {
    margin-right: 30px
}

.margin-bottom-x2 {
    margin-bottom: 30px
}

.margin-left-x2 {
    margin-left: 30px
}

.margin-xlarge {
    margin: 50px
}

.margin-top-xlarge {
    margin-top: 50px
}

.margin-right-xlarge {
    margin-right: 50px
}

.margin-bottom-xlarge {
    margin-bottom: 50px
}

.margin-left-xlarge {
    margin-left: 50px
}

.margin-half {
    margin: 5px
}

.margin-top-half {
    margin-top: 5px
}

.margin-right-half {
    margin-right: 5px
}

.margin-bottom-half {
    margin-bottom: 5px
}

.margin-left-half {
    margin-left: 5px
}

.margin-none,.nomargin,.reset_margin {
    margin: 0px !important
}

.padding {
    padding: 15px
}

.padding-top {
    padding-top: 15px
}

.padding-right {
    padding-right: 15px
}

.padding-bottom {
    padding-bottom: 15px
}

.padding-left {
    padding-left: 15px
}

.padding-x2 {
    padding: 30px
}

.padding-top-x2 {
    padding-top: 30px
}

.padding-right-x2 {
    padding-right: 30px
}

.padding-bottom-x2 {
    padding-bottom: 30px
}

.padding-left-x2 {
    padding-left: 30px
}

.padding-xlarge {
    padding: 50px
}

.padding-top-xlarge {
    padding-top: 50px
}

.padding-right-xlarge {
    padding-right: 50px
}

.padding-bottom-xlarge {
    padding-bottom: 50px
}

.padding-left-xlarge {
    padding-left: 50px
}

.padding-half {
    padding: 5px
}

.padding-top-half {
    padding-top: 5px
}

.padding-right-half {
    padding-right: 5px
}

.padding-bottom-half {
    padding-bottom: 5px
}

.padding-left-half {
    padding-left: 5px
}

.padding-none,.nopadding {
    padding: 0px !important
}

.figure-small {
    font-size: 18px;
    font-weight: normal;
    line-height: 20px;
    color: #444455
}

.figure {
    font-size: 22px;
    font-weight: normal;
    line-height: 25px;
    color: #444455
}

.figure-large {
    font-size: 26px;
    font-weight: normal;
    line-height: 30px;
    color: #444455
}

.backyard_header h3 {
    margin-bottom: 4px;
    font-size: 12pt;
    font-weight: normal
}

#backyard_contact_header p {
    margin-bottom: 4px
}

#backyard_contract_header {
    border-left: 1px dotted #ccc;
    padding-left: 20px
}

.project_status {
    border-left: 1px solid #dedede;
    margin: 0
}

.project_status li {
    float: left;
    display: block;
    width: 140px;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #dedede;
    border-left-width: 0;
    font-size: 12px;
    line-height: 18px;
    height: 18px;
    text-align: center;
    background-color: white;
    color: #888;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.project_status li.done {
    background-color: #7fcc7f;
    color: white
}

.project_status li.active {
    background-color: #009100;
    color: white;
    font-weight: bold
}

.project_status li.exit {
    background-color: #c60000;
    color: white
}

#contact_bottom_bar {
    position: fixed;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-top: 4px solid #c60000;
    background-color: #efefef;
    background-image: -moz-linear-gradient(top, #f9f9f9, #e0e0e0);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f9f9f9), to(#e0e0e0));
    background-image: -webkit-linear-gradient(top, #f9f9f9, #e0e0e0);
    background-image: -o-linear-gradient(top, #f9f9f9, #e0e0e0);
    background-image: linear-gradient(to bottom, #f9f9f9, #e0e0e0);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9', endColorstr='#ffe0e0e0', GradientType=0);
    -webkit-box-shadow: inset 0 1px 2px #fff,0 1px 2px #fff;
    -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.2),0 1px 2px #fff;
    box-shadow: inset 0 1px 0 #fff,0 -2px 10px rgba(0,0,0,0.1)
}

#contact_bottom_bar .content {
    max-width: 1300px;
    min-width: 800px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 0 6px 0
}

li.dropdown_actions_tab {
    float: right
}

li.dropdown_actions_tab a.dropdown-toggle {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #006dcc;
    background-image: -moz-linear-gradient(top, #08c, #04c);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#04c));
    background-image: -webkit-linear-gradient(top, #08c, #04c);
    background-image: -o-linear-gradient(top, #08c, #04c);
    background-image: linear-gradient(to bottom, #08c, #04c);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0044cc', GradientType=0);
    border-color: #04c #04c #002a80;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    *background-color: #04c;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
    border: none
}

li.dropdown_actions_tab a.dropdown-toggle:hover,li.dropdown_actions_tab a.dropdown-toggle:active,li.dropdown_actions_tab a.dropdown-toggle.active,li.dropdown_actions_tab a.dropdown-toggle.disabled,li.dropdown_actions_tab a.dropdown-toggle[disabled] {
    color: #fff;
    background-color: #04c;
    *background-color: #003bb3
}

li.dropdown_actions_tab a.dropdown-toggle:active,li.dropdown_actions_tab a.dropdown-toggle.active {
    background-color: #039 \9
}

li.dropdown_actions_tab a.dropdown-toggle .caret {
    border-top-color: #fff;
    border-bottom-color: #fff
}

#project_timeline {
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    height: 290px;
    width: 100%
}

#project_timeline>div {
    position: absolute;
    top: 0;
    left: 0
}

#project_timeline table {
    height: 280px
}

#project_timeline tbody td:nth-child(odd),#project_timeline thead td:nth-child(odd) {
    background-color: whitesmoke
}

#project_timeline tbody td {
    padding: 0;
    vertical-align: top
}

#project_timeline tbody tr:last-child td {
    vertical-align: bottom
}

#project_timeline td {
    text-align: center
}

#project_timeline td.current {
    background-color: #d9edf7 !important
}

#project_timeline tfoot td {
    background-color: #FFF;
    border-top: 1px solid #666;
    height: 20px
}

#project_timeline .vertical-bar {
    margin: 0 auto;
    background-color: #227096;
    width: 40%;
    text-align: center;
    font-size: 11px;
    color: #ffffff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.6);
    -webkit-border-radius: 5px 5px 0px 0px;
    border-radius: 5px 5px 0px 0px
}

.link {
    color: #0088cc;
    cursor: hand;
    font-weight: bold
}

#map {
    height: 600px
}

#map img {
    max-width: none
}

#map_ui_actions {
    position: absolute;
    top: 5px;
    left: 90px;
    padding: 0px 5px
}

#map_ui_scope {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 0px 5px
}

#map_box {
    height: 500px
}

#map_ui_alerte {
    border: 1px solid 333;
    position: absolute;
    top: 37px;
    left: 94px;
    background-color: fff;
    opacity: .8;
    padding: 5px;
    width: 194px
}

#map_study_controls {
    padding-left: 20px
}

#map_study_controls input[type=text] {
    width: 45px;
    margin: 0 0 3px 0
}

#map_study_controls_proportion {
    margin-left: 20px
}

.mplv1 {
    background-color: #004635
}

.mplv2 {
    background-color: #486900
}

.mplv3 {
    background-color: #708f03
}

.mplv4 {
    background-color: #abd74c
}

.mplv5 {
    background-color: #d7f221
}

.mplv6 {
    background-color: #ffff33
}

.mplv7 {
    background-color: #ffae00
}

.mplv8 {
    background-color: #e7961a
}

.mplv9 {
    background-color: #e76832
}

.mplv10 {
    background-color: #ff0000
}

.mplfbblue {
    background-color: #133aac
}

.mplfbbtw {
    background-color: #6d4f04
}

.mplfbbtd {
    background-color: #aa4f10
}

.ac_results {
    border: 1px solid gray;
    border-top: 0px;
    background-color: white;
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 10000
}

.ac_results li {
    color: #101010;
    cursor: pointer;
    padding: 3px 5px;
    text-align: left;
    white-space: nowrap
}

.ac_over {
    color: #FFF;
    background-color: #39f
}

.ac_match {
    color: black;
    font-weight: bold
}

.ui-autocomplete {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    display: none;
    min-width: 160px;
    padding: 4px 0;
    list-style: none;
    background-color: #ffffff;
    border-color: #ccc;
    border-color: rgba(0,0,0,0.2);
    border-style: solid;
    border-width: 1px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
    *border-right-width: 2px;
    *border-bottom-width: 2px
}

.ui-menu-item>a.ui-corner-all {
    display: block;
    padding: 3px 15px;
    clear: both;
    font-weight: normal;
    line-height: 18px;
    color: #555555;
    white-space: nowrap;
    text-decoration: none
}

.ui-state-hover,.ui-state-active {
    color: #ffffff;
    text-decoration: none;
    background-color: #0088cc;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    background-image: none
}

.ui-menu-item {
    cursor: pointer
}

div.time-picker {
    background: #fff;
    border-radius: 4px;
    border: 1px solid #aaa;
    height: 200px;
    overflow: auto;
    position: absolute;
    width: 4em;
    z-index: 1003
}

div.time-picker-12hours {
    width: 6em
}

div.time-picker ul {
    list-style-type: none;
    margin: 0;
    padding: 0
}

div.time-picker li {
    padding: 1px;
    cursor: pointer
}

div.time-picker li.selected {
    background: #316AC5;
    color: #fff
}

div.wysiwyg {
    border: 1px solid #999;
    padding: 0;
    background: #fff url('/img/jwysiwyg/jquery.wysiwyg.bg.png') repeat-x top;
    -moz-box-shadow: 0 0 3px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.15);
    box-shadow: 0 0 3px rgba(0,0,0,0.15)
}

div.wysiwyg * {
    margin: 0;
    padding: 0
}

div.wysiwyg ul.toolbar li.jwysiwyg-custom-command {
    overflow: hidden
}

div.wysiwyg div.toolbar-wrap {
    width: 100%;
    border-bottom: 1px solid #ccc
}

div.wysiwyg ul.toolbar {
    list-style: none;
    float: left;
    padding: 0 3px 0 3px;
    margin: 0
}

div.wysiwyg ul.toolbar li {
    display: block;
    float: left;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid transparent;
    margin: 3px 0 3px 0;
    text-indent: -5000px;
    background: url('/img/jwysiwyg/jquery.wysiwyg.gif') no-repeat -640px -800px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none
}

div.wysiwyg ul.toolbar li.separator {
    background: none;
    width: 1px;
    height: 20px;
    margin: 3px 4px 3px 5px;
    border: none;
    border-left: 1px solid #ccc
}

div.wysiwyg ul.toolbar li.wysiwyg-button-hover,div.wysiwyg ul.toolbar li.active {
    background-color: transparent;
    width: 18px;
    height: 18px;
    border: 1px solid #d0d0d0;
    border-left-color: #aaa;
    border-top-color: #aaa
}

div.wysiwyg ul.toolbar li.disabled {
    background-color: transparent;
    opacity: .5;
    filter: alpha(opacity=50);
    cursor: auto
}

div.wysiwyg ul.toolbar li.bold {
    background-position: -1px -15px
}

div.wysiwyg ul.toolbar li.italic {
    background-position: -18px -15px
}

div.wysiwyg ul.toolbar li.strikeThrough {
    background-position: -36px -15px
}

div.wysiwyg ul.toolbar li.underline {
    background-position: -55px -15px
}

div.wysiwyg ul.toolbar li.highlight {
    background-position: -48px -96px
}

div.wysiwyg ul.toolbar li.justifyLeft {
    background-position: 0 2px
}

div.wysiwyg ul.toolbar li.justifyCenter {
    background-position: -18px 2px
}

div.wysiwyg ul.toolbar li.justifyRight {
    background-position: -36px 2px
}

div.wysiwyg ul.toolbar li.justifyFull {
    background-position: -55px 2px
}

div.wysiwyg ul.toolbar li.indent {
    background-position: -74px 1px
}

div.wysiwyg ul.toolbar li.outdent {
    background-position: -92px 1px
}

div.wysiwyg ul.toolbar li.subscript {
    background-position: -74px -15px
}

div.wysiwyg ul.toolbar li.superscript {
    background-position: -92px -15px
}

div.wysiwyg ul.toolbar li.undo {
    background-position: 0 -68px
}

div.wysiwyg ul.toolbar li.redo {
    background-position: -18px -69px
}

div.wysiwyg ul.toolbar li.insertOrderedList {
    background-position: -36px -49px
}

div.wysiwyg ul.toolbar li.insertUnorderedList {
    background-position: -19px -49px
}

div.wysiwyg ul.toolbar li.insertHorizontalRule {
    background-position: 0 -49px
}

div.wysiwyg ul.toolbar li.h1 {
    background-position: 0 -31px
}

div.wysiwyg ul.toolbar li.h2 {
    background-position: -18px -31px
}

div.wysiwyg ul.toolbar li.h3 {
    background-position: -36px -31px
}

div.wysiwyg ul.toolbar li.h4 {
    background-position: -55px -31px
}

div.wysiwyg ul.toolbar li.h5 {
    background-position: -74px -31px
}

div.wysiwyg ul.toolbar li.h6 {
    background-position: -92px -31px
}

div.wysiwyg ul.toolbar li.paragraph {
    background-position: 0 -106px
}

div.wysiwyg ul.toolbar li.colorpicker {
    background-position: -18px -106px
}

div.wysiwyg ul.toolbar li.fullscreen {
    background-position: -36px -106px
}

div.wysiwyg ul.toolbar li.cut {
    background-position: -36px -68px
}

div.wysiwyg ul.toolbar li.copy {
    background-position: -55px -68px
}

div.wysiwyg ul.toolbar li.paste {
    background-position: -74px -68px
}

div.wysiwyg ul.toolbar li.insertTable {
    background-position: -74px -49px
}

div.wysiwyg ul.toolbar li.increaseFontSize {
    background-position: -18px -87px
}

div.wysiwyg ul.toolbar li.decreaseFontSize {
    background-position: -36px -87px
}

div.wysiwyg ul.toolbar li.createLink {
    background-position: -92px -48px
}

div.wysiwyg ul.toolbar li.unLink {
    background-position: -74px -87px
}

div.wysiwyg ul.toolbar li.insertImage {
    background-position: -92px -87px
}

div.wysiwyg ul.toolbar li.html {
    background-position: -55px -49px
}

div.wysiwyg ul.toolbar li.removeFormat {
    background-position: -92px -68px
}

div.wysiwyg ul.toolbar li.empty {
    background-position: -73px -86px
}

div.wysiwyg ul.toolbar li.code {
    background-position: -74px -106px
}

div.wysiwyg ul.toolbar li.cssWrap {
    background-position: -92px -106px
}

div.wysiwyg-dialogRow {
    float: left;
    width: 100%;
    font-size: 16px
}

div.wysiwyg iframe {
    clear: left;
    background-color: white;
    padding: 0px;
    margin: 0;
    display: block;
    width: 100%
}

div.wysiwyg>textarea {
    border: 0;
    outline: none;
    box-shadow: none
}

.wysiwyg-dialog {
    position: fixed;
    top: 50px;
    left: 50px;
    width: 450px;
    height: 300px;
    background: transparent;
    font: 14px "Helvetic Neue",Helvetica,Arial,sans-serif
}

.wysiwyg-dialog .wysiwyg-dialog-topbar {
    background: #333;
    border: 1px #111 solid;
    color: white;
    padding: 10px;
    position: relative
}

.wysiwyg-dialog .wysiwyg-dialog-topbar .wysiwyg-dialog-close-wrapper .wysiwyg-dialog-close-button {
    color: white;
    text-decoration: none;
    display: block;
    padding: 6px 10px;
    position: absolute;
    right: 12px;
    top: 50%;
    height: 14px;
    margin-top: -12px
}

.wysiwyg-dialog .wysiwyg-dialog-topbar .wysiwyg-dialog-close-wrapper a.wysiwyg-dialog-close-button:hover {
    background: #666
}

.wysiwyg-dialog .wysiwyg-dialog-topbar .wysiwyg-dialog-title {
    font-size: 20px;
    font-weight: bold;
    padding: 5px
}

.wysiwyg-dialog .wysiwyg-dialog-content {
    border: 1px #ccc solid;
    border-top: 0;
    padding: 15px;
    background: white
}

.wysiwyg-dialog-modal-div {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-color: rgba(0,0,0,0.5)
}

.wysiwyg-dialog-content form.wysiwyg fieldset {
    border: 1px #ccc solid
}

.wysiwyg-dialog-content form.wysiwyg legend {
    padding: 7px
}

.wysiwyg-dialog-content form.wysiwyg .form-row {
    clear: both;
    padding: 4px 0
}

.wysiwyg-dialog-content form.wysiwyg .form-row label,.wysiwyg-dialog form.wysiwyg .form-row .form-row-key {
    display: block;
    float: left;
    width: 35%;
    text-align: right;
    padding: 4px 5px
}

.wysiwyg-dialog-content form.wysiwyg .form-row .form-row-value {
    display: block;
    float: left;
    width: 55%
}

.wysiwyg-dialog-content form.wysiwyg .form-row input.width-auto {
    width: auto
}

.wysiwyg-dialog-content form.wysiwyg input.width-small {
    width: 50px;
    min-width: 50px;
    max-width: 50px
}

.wysiwyg-dialog-content form.wysiwyg input,.wysiwyg-dialog form.wysiwyg select {
    padding: 2px;
    width: 100%;
    margin: 2px
}

.wysiwyg-dialog-content form.wysiwyg input[type=submit],.wysiwyg-dialog form.wysiwyg input[type=reset] {
    padding: 2px 7px;
    width: auto
}

.ui-helper-hidden {
    display: none
}

.ui-helper-hidden-accessible {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px)
}

.ui-helper-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    line-height: 1.3;
    text-decoration: none;
    font-size: 100%;
    list-style: none
}

.ui-helper-clearfix:before,.ui-helper-clearfix:after {
    content: "";
    display: table
}

.ui-helper-clearfix:after {
    clear: both
}

.ui-helper-clearfix {
    zoom:1}

.ui-helper-zfix {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    filter: alpha(opacity=0)
}

.ui-state-disabled {
    cursor: default !important
}

.ui-icon {
    display: block;
    text-indent: -99999px;
    overflow: hidden;
    background-repeat: no-repeat
}

.ui-widget-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.ui-widget {
    font-family: Verdana,Arial,sans-serif;
    font-size: 1.1em
}

.ui-widget .ui-widget {
    font-size: 1em
}

.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button {
    font-family: Verdana,Arial,sans-serif;
    font-size: 1em
}

.ui-widget-content {
    border: 1px solid #aaaaaa;
    background: #ffffff url(../img/jquery.ui/1.8.18/ui-bg_glass_75_ffffff_1x400.png) 50% 50% repeat-x;
    color: #222222
}

.ui-widget-content a {
    color: #222222
}

.ui-widget-header {
    border: 1px solid #aaaaaa;
    background: #cccccc url(../img/jquery.ui/1.8.18/ui-bg_highlight-soft_75_cccccc_1x100.png) 50% 50% repeat-x;
    color: #222222;
    font-weight: bold
}

.ui-widget-header a {
    color: #222222
}

.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default {
    border: 1px solid #d3d3d3;
    background: #e6e6e6 url(../img/jquery.ui/1.8.18/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x;
    font-weight: normal;
    color: #555555
}

.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited {
    color: #555555;
    text-decoration: none
}

.ui-state-hover,.ui-widget-content .ui-state-hover,.ui-widget-header .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus,.ui-widget-header .ui-state-focus {
    border: 1px solid #999999;
    background: #dadada url(../img/jquery.ui/1.8.18/ui-bg_glass_75_dadada_1x400.png) 50% 50% repeat-x;
    font-weight: normal;
    color: #212121
}

.ui-state-hover a,.ui-state-hover a:hover {
    color: #212121;
    text-decoration: none
}

.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active {
    border: 1px solid #aaaaaa;
    background: #ffffff url(../img/jquery.ui/1.8.18/ui-bg_glass_65_ffffff_1x400.png) 50% 50% repeat-x;
    font-weight: normal;
    color: #212121
}

.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited {
    color: #212121;
    text-decoration: none
}

.ui-widget :active {
    outline: none
}

.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight {
    border: 1px solid #fcefa1;
    background: #fbf9ee url(../img/jquery.ui/1.8.18/ui-bg_glass_55_fbf9ee_1x400.png) 50% 50% repeat-x;
    color: #363636
}

.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a {
    color: #363636
}

.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error {
    border: 1px solid #cd0a0a;
    background: #fef1ec url(../img/jquery.ui/1.8.18/ui-bg_inset-soft_95_fef1ec_1x100.png) 50% bottom repeat-x;
    color: #cd0a0a
}

.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a {
    color: #cd0a0a
}

.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text {
    color: #cd0a0a
}

.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header .ui-priority-primary {
    font-weight: bold
}

.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,.ui-widget-header .ui-priority-secondary {
    opacity: .7;
    filter: alpha(opacity=70);
    font-weight: normal
}

.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled {
    opacity: .35;
    filter: alpha(opacity=35);
    background-image: none
}

.ui-icon {
    width: 16px;
    height: 16px;
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_222222_256x240.png)
}

.ui-widget-content .ui-icon {
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_222222_256x240.png)
}

.ui-widget-header .ui-icon {
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_222222_256x240.png)
}

.ui-state-default .ui-icon {
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_888888_256x240.png)
}

.ui-state-hover .ui-icon,.ui-state-focus .ui-icon {
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_454545_256x240.png)
}

.ui-state-active .ui-icon {
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_454545_256x240.png)
}

.ui-state-highlight .ui-icon {
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_2e83ff_256x240.png)
}

.ui-state-error .ui-icon,.ui-state-error-text .ui-icon {
    background-image: url(../img/jquery.ui/1.8.18/ui-icons_cd0a0a_256x240.png)
}

.ui-icon-carat-1-n {
    background-position: 0 0
}

.ui-icon-carat-1-ne {
    background-position: -16px 0
}

.ui-icon-carat-1-e {
    background-position: -32px 0
}

.ui-icon-carat-1-se {
    background-position: -48px 0
}

.ui-icon-carat-1-s {
    background-position: -64px 0
}

.ui-icon-carat-1-sw {
    background-position: -80px 0
}

.ui-icon-carat-1-w {
    background-position: -96px 0
}

.ui-icon-carat-1-nw {
    background-position: -112px 0
}

.ui-icon-carat-2-n-s {
    background-position: -128px 0
}

.ui-icon-carat-2-e-w {
    background-position: -144px 0
}

.ui-icon-triangle-1-n {
    background-position: 0 -16px
}

.ui-icon-triangle-1-ne {
    background-position: -16px -16px
}

.ui-icon-triangle-1-e {
    background-position: -32px -16px
}

.ui-icon-triangle-1-se {
    background-position: -48px -16px
}

.ui-icon-triangle-1-s {
    background-position: -64px -16px
}

.ui-icon-triangle-1-sw {
    background-position: -80px -16px
}

.ui-icon-triangle-1-w {
    background-position: -96px -16px
}

.ui-icon-triangle-1-nw {
    background-position: -112px -16px
}

.ui-icon-triangle-2-n-s {
    background-position: -128px -16px
}

.ui-icon-triangle-2-e-w {
    background-position: -144px -16px
}

.ui-icon-arrow-1-n {
    background-position: 0 -32px
}

.ui-icon-arrow-1-ne {
    background-position: -16px -32px
}

.ui-icon-arrow-1-e {
    background-position: -32px -32px
}

.ui-icon-arrow-1-se {
    background-position: -48px -32px
}

.ui-icon-arrow-1-s {
    background-position: -64px -32px
}

.ui-icon-arrow-1-sw {
    background-position: -80px -32px
}

.ui-icon-arrow-1-w {
    background-position: -96px -32px
}

.ui-icon-arrow-1-nw {
    background-position: -112px -32px
}

.ui-icon-arrow-2-n-s {
    background-position: -128px -32px
}

.ui-icon-arrow-2-ne-sw {
    background-position: -144px -32px
}

.ui-icon-arrow-2-e-w {
    background-position: -160px -32px
}

.ui-icon-arrow-2-se-nw {
    background-position: -176px -32px
}

.ui-icon-arrowstop-1-n {
    background-position: -192px -32px
}

.ui-icon-arrowstop-1-e {
    background-position: -208px -32px
}

.ui-icon-arrowstop-1-s {
    background-position: -224px -32px
}

.ui-icon-arrowstop-1-w {
    background-position: -240px -32px
}

.ui-icon-arrowthick-1-n {
    background-position: 0 -48px
}

.ui-icon-arrowthick-1-ne {
    background-position: -16px -48px
}

.ui-icon-arrowthick-1-e {
    background-position: -32px -48px
}

.ui-icon-arrowthick-1-se {
    background-position: -48px -48px
}

.ui-icon-arrowthick-1-s {
    background-position: -64px -48px
}

.ui-icon-arrowthick-1-sw {
    background-position: -80px -48px
}

.ui-icon-arrowthick-1-w {
    background-position: -96px -48px
}

.ui-icon-arrowthick-1-nw {
    background-position: -112px -48px
}

.ui-icon-arrowthick-2-n-s {
    background-position: -128px -48px
}

.ui-icon-arrowthick-2-ne-sw {
    background-position: -144px -48px
}

.ui-icon-arrowthick-2-e-w {
    background-position: -160px -48px
}

.ui-icon-arrowthick-2-se-nw {
    background-position: -176px -48px
}

.ui-icon-arrowthickstop-1-n {
    background-position: -192px -48px
}

.ui-icon-arrowthickstop-1-e {
    background-position: -208px -48px
}

.ui-icon-arrowthickstop-1-s {
    background-position: -224px -48px
}

.ui-icon-arrowthickstop-1-w {
    background-position: -240px -48px
}

.ui-icon-arrowreturnthick-1-w {
    background-position: 0 -64px
}

.ui-icon-arrowreturnthick-1-n {
    background-position: -16px -64px
}

.ui-icon-arrowreturnthick-1-e {
    background-position: -32px -64px
}

.ui-icon-arrowreturnthick-1-s {
    background-position: -48px -64px
}

.ui-icon-arrowreturn-1-w {
    background-position: -64px -64px
}

.ui-icon-arrowreturn-1-n {
    background-position: -80px -64px
}

.ui-icon-arrowreturn-1-e {
    background-position: -96px -64px
}

.ui-icon-arrowreturn-1-s {
    background-position: -112px -64px
}

.ui-icon-arrowrefresh-1-w {
    background-position: -128px -64px
}

.ui-icon-arrowrefresh-1-n {
    background-position: -144px -64px
}

.ui-icon-arrowrefresh-1-e {
    background-position: -160px -64px
}

.ui-icon-arrowrefresh-1-s {
    background-position: -176px -64px
}

.ui-icon-arrow-4 {
    background-position: 0 -80px
}

.ui-icon-arrow-4-diag {
    background-position: -16px -80px
}

.ui-icon-extlink {
    background-position: -32px -80px
}

.ui-icon-newwin {
    background-position: -48px -80px
}

.ui-icon-refresh {
    background-position: -64px -80px
}

.ui-icon-shuffle {
    background-position: -80px -80px
}

.ui-icon-transfer-e-w {
    background-position: -96px -80px
}

.ui-icon-transferthick-e-w {
    background-position: -112px -80px
}

.ui-icon-folder-collapsed {
    background-position: 0 -96px
}

.ui-icon-folder-open {
    background-position: -16px -96px
}

.ui-icon-document {
    background-position: -32px -96px
}

.ui-icon-document-b {
    background-position: -48px -96px
}

.ui-icon-note {
    background-position: -64px -96px
}

.ui-icon-mail-closed {
    background-position: -80px -96px
}

.ui-icon-mail-open {
    background-position: -96px -96px
}

.ui-icon-suitcase {
    background-position: -112px -96px
}

.ui-icon-comment {
    background-position: -128px -96px
}

.ui-icon-person {
    background-position: -144px -96px
}

.ui-icon-print {
    background-position: -160px -96px
}

.ui-icon-trash {
    background-position: -176px -96px
}

.ui-icon-locked {
    background-position: -192px -96px
}

.ui-icon-unlocked {
    background-position: -208px -96px
}

.ui-icon-bookmark {
    background-position: -224px -96px
}

.ui-icon-tag {
    background-position: -240px -96px
}

.ui-icon-home {
    background-position: 0 -112px
}

.ui-icon-flag {
    background-position: -16px -112px
}

.ui-icon-calendar {
    background-position: -32px -112px
}

.ui-icon-cart {
    background-position: -48px -112px
}

.ui-icon-pencil {
    background-position: -64px -112px
}

.ui-icon-clock {
    background-position: -80px -112px
}

.ui-icon-disk {
    background-position: -96px -112px
}

.ui-icon-calculator {
    background-position: -112px -112px
}

.ui-icon-zoomin {
    background-position: -128px -112px
}

.ui-icon-zoomout {
    background-position: -144px -112px
}

.ui-icon-search {
    background-position: -160px -112px
}

.ui-icon-wrench {
    background-position: -176px -112px
}

.ui-icon-gear {
    background-position: -192px -112px
}

.ui-icon-heart {
    background-position: -208px -112px
}

.ui-icon-star {
    background-position: -224px -112px
}

.ui-icon-link {
    background-position: -240px -112px
}

.ui-icon-cancel {
    background-position: 0 -128px
}

.ui-icon-plus {
    background-position: -16px -128px
}

.ui-icon-plusthick {
    background-position: -32px -128px
}

.ui-icon-minus {
    background-position: -48px -128px
}

.ui-icon-minusthick {
    background-position: -64px -128px
}

.ui-icon-close {
    background-position: -80px -128px
}

.ui-icon-closethick {
    background-position: -96px -128px
}

.ui-icon-key {
    background-position: -112px -128px
}

.ui-icon-lightbulb {
    background-position: -128px -128px
}

.ui-icon-scissors {
    background-position: -144px -128px
}

.ui-icon-clipboard {
    background-position: -160px -128px
}

.ui-icon-copy {
    background-position: -176px -128px
}

.ui-icon-contact {
    background-position: -192px -128px
}

.ui-icon-image {
    background-position: -208px -128px
}

.ui-icon-video {
    background-position: -224px -128px
}

.ui-icon-script {
    background-position: -240px -128px
}

.ui-icon-alert {
    background-position: 0 -144px
}

.ui-icon-info {
    background-position: -16px -144px
}

.ui-icon-notice {
    background-position: -32px -144px
}

.ui-icon-help {
    background-position: -48px -144px
}

.ui-icon-check {
    background-position: -64px -144px
}

.ui-icon-bullet {
    background-position: -80px -144px
}

.ui-icon-radio-off {
    background-position: -96px -144px
}

.ui-icon-radio-on {
    background-position: -112px -144px
}

.ui-icon-pin-w {
    background-position: -128px -144px
}

.ui-icon-pin-s {
    background-position: -144px -144px
}

.ui-icon-play {
    background-position: 0 -160px
}

.ui-icon-pause {
    background-position: -16px -160px
}

.ui-icon-seek-next {
    background-position: -32px -160px
}

.ui-icon-seek-prev {
    background-position: -48px -160px
}

.ui-icon-seek-end {
    background-position: -64px -160px
}

.ui-icon-seek-start {
    background-position: -80px -160px
}

.ui-icon-seek-first {
    background-position: -80px -160px
}

.ui-icon-stop {
    background-position: -96px -160px
}

.ui-icon-eject {
    background-position: -112px -160px
}

.ui-icon-volume-off {
    background-position: -128px -160px
}

.ui-icon-volume-on {
    background-position: -144px -160px
}

.ui-icon-power {
    background-position: 0 -176px
}

.ui-icon-signal-diag {
    background-position: -16px -176px
}

.ui-icon-signal {
    background-position: -32px -176px
}

.ui-icon-battery-0 {
    background-position: -48px -176px
}

.ui-icon-battery-1 {
    background-position: -64px -176px
}

.ui-icon-battery-2 {
    background-position: -80px -176px
}

.ui-icon-battery-3 {
    background-position: -96px -176px
}

.ui-icon-circle-plus {
    background-position: 0 -192px
}

.ui-icon-circle-minus {
    background-position: -16px -192px
}

.ui-icon-circle-close {
    background-position: -32px -192px
}

.ui-icon-circle-triangle-e {
    background-position: -48px -192px
}

.ui-icon-circle-triangle-s {
    background-position: -64px -192px
}

.ui-icon-circle-triangle-w {
    background-position: -80px -192px
}

.ui-icon-circle-triangle-n {
    background-position: -96px -192px
}

.ui-icon-circle-arrow-e {
    background-position: -112px -192px
}

.ui-icon-circle-arrow-s {
    background-position: -128px -192px
}

.ui-icon-circle-arrow-w {
    background-position: -144px -192px
}

.ui-icon-circle-arrow-n {
    background-position: -160px -192px
}

.ui-icon-circle-zoomin {
    background-position: -176px -192px
}

.ui-icon-circle-zoomout {
    background-position: -192px -192px
}

.ui-icon-circle-check {
    background-position: -208px -192px
}

.ui-icon-circlesmall-plus {
    background-position: 0 -208px
}

.ui-icon-circlesmall-minus {
    background-position: -16px -208px
}

.ui-icon-circlesmall-close {
    background-position: -32px -208px
}

.ui-icon-squaresmall-plus {
    background-position: -48px -208px
}

.ui-icon-squaresmall-minus {
    background-position: -64px -208px
}

.ui-icon-squaresmall-close {
    background-position: -80px -208px
}

.ui-icon-grip-dotted-vertical {
    background-position: 0 -224px
}

.ui-icon-grip-dotted-horizontal {
    background-position: -16px -224px
}

.ui-icon-grip-solid-vertical {
    background-position: -32px -224px
}

.ui-icon-grip-solid-horizontal {
    background-position: -48px -224px
}

.ui-icon-gripsmall-diagonal-se {
    background-position: -64px -224px
}

.ui-icon-grip-diagonal-se {
    background-position: -80px -224px
}

.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl {
    -moz-border-radius-topleft: 4px;
    -webkit-border-top-left-radius: 4px;
    -khtml-border-top-left-radius: 4px;
    border-top-left-radius: 4px
}

.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr {
    -moz-border-radius-topright: 4px;
    -webkit-border-top-right-radius: 4px;
    -khtml-border-top-right-radius: 4px;
    border-top-right-radius: 4px
}

.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl {
    -moz-border-radius-bottomleft: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -khtml-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br {
    -moz-border-radius-bottomright: 4px;
    -webkit-border-bottom-right-radius: 4px;
    -khtml-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px
}

.ui-widget-overlay {
    background: #aaaaaa url(../img/jquery.ui/1.8.18/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x;
    opacity: .3;
    filter: alpha(opacity=30)
}

.ui-widget-shadow {
    margin: -8px 0 0 -8px;
    padding: 8px;
    background: #aaaaaa url(../img/jquery.ui/1.8.18/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x;
    opacity: .3;
    filter: alpha(opacity=30);
    -moz-border-radius: 8px;
    -khtml-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px
}

.ui-slider {
    position: relative;
    text-align: left
}

.ui-slider .ui-slider-handle {
    position: absolute;
    z-index: 2;
    width: 1.2em;
    height: 1.2em;
    cursor: default
}

.ui-slider .ui-slider-range {
    position: absolute;
    z-index: 1;
    font-size: .7em;
    display: block;
    border: 0;
    background-position: 0 0
}

.ui-slider-horizontal {
    height: .8em
}

.ui-slider-horizontal .ui-slider-handle {
    top: -0.3em;
    margin-left: -0.6em
}

.ui-slider-horizontal .ui-slider-range {
    top: 0;
    height: 100%
}

.ui-slider-horizontal .ui-slider-range-min {
    left: 0
}

.ui-slider-horizontal .ui-slider-range-max {
    right: 0
}

.ui-slider-vertical {
    width: .8em;
    height: 100px
}

.ui-slider-vertical .ui-slider-handle {
    left: -0.3em;
    margin-left: 0;
    margin-bottom: -0.6em
}

.ui-slider-vertical .ui-slider-range {
    left: 0;
    width: 100%
}

.ui-slider-vertical .ui-slider-range-min {
    bottom: 0
}

.ui-slider-vertical .ui-slider-range-max {
    top: 0
}

.ui-datepicker {
    width: 17em;
    padding: .2em .2em 0;
    display: none
}

.ui-datepicker .ui-datepicker-header {
    position: relative;
    padding: .2em 0
}

.ui-datepicker .ui-datepicker-prev,.ui-datepicker .ui-datepicker-next {
    position: absolute;
    top: 2px;
    width: 1.8em;
    height: 1.8em
}

.ui-datepicker .ui-datepicker-prev-hover,.ui-datepicker .ui-datepicker-next-hover {
    top: 1px
}

.ui-datepicker .ui-datepicker-prev {
    left: 2px
}

.ui-datepicker .ui-datepicker-next {
    right: 2px
}

.ui-datepicker .ui-datepicker-prev-hover {
    left: 1px
}

.ui-datepicker .ui-datepicker-next-hover {
    right: 1px
}

.ui-datepicker .ui-datepicker-prev span,.ui-datepicker .ui-datepicker-next span {
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -8px;
    top: 50%;
    margin-top: -8px
}

.ui-datepicker .ui-datepicker-title {
    margin: 0 2.3em;
    line-height: 1.8em;
    text-align: center
}

.ui-datepicker .ui-datepicker-title select {
    font-size: 1em;
    margin: 1px 0
}

.ui-datepicker select.ui-datepicker-month-year {
    width: 100%
}

.ui-datepicker select.ui-datepicker-month,.ui-datepicker select.ui-datepicker-year {
    width: 49%
}

.ui-datepicker table {
    width: 100%;
    font-size: .9em;
    border-collapse: collapse;
    margin: 0 0 .4em
}

.ui-datepicker th {
    padding: .7em .3em;
    text-align: center;
    font-weight: bold;
    border: 0
}

.ui-datepicker td {
    border: 0;
    padding: 1px
}

.ui-datepicker td span,.ui-datepicker td a {
    display: block;
    padding: .2em;
    text-align: right;
    text-decoration: none
}

.ui-datepicker .ui-datepicker-buttonpane {
    background-image: none;
    margin: .7em 0 0 0;
    padding: 0 .2em;
    border-left: 0;
    border-right: 0;
    border-bottom: 0
}

.ui-datepicker .ui-datepicker-buttonpane button {
    float: right;
    margin: .5em .2em .4em;
    cursor: pointer;
    padding: .2em .6em .3em .6em;
    width: auto;
    overflow: visible
}

.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {
    float: left
}

.ui-datepicker.ui-datepicker-multi {
    width: auto
}

.ui-datepicker-multi .ui-datepicker-group {
    float: left
}

.ui-datepicker-multi .ui-datepicker-group table {
    width: 95%;
    margin: 0 auto .4em
}

.ui-datepicker-multi-2 .ui-datepicker-group {
    width: 50%
}

.ui-datepicker-multi-3 .ui-datepicker-group {
    width: 33.3%
}

.ui-datepicker-multi-4 .ui-datepicker-group {
    width: 25%
}

.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header {
    border-left-width: 0
}

.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {
    border-left-width: 0
}

.ui-datepicker-multi .ui-datepicker-buttonpane {
    clear: left
}

.ui-datepicker-row-break {
    clear: both;
    width: 100%;
    font-size: 0em
}

.ui-datepicker-rtl {
    direction: rtl
}

.ui-datepicker-rtl .ui-datepicker-prev {
    right: 2px;
    left: auto
}

.ui-datepicker-rtl .ui-datepicker-next {
    left: 2px;
    right: auto
}

.ui-datepicker-rtl .ui-datepicker-prev:hover {
    right: 1px;
    left: auto
}

.ui-datepicker-rtl .ui-datepicker-next:hover {
    left: 1px;
    right: auto
}

.ui-datepicker-rtl .ui-datepicker-buttonpane {
    clear: right
}

.ui-datepicker-rtl .ui-datepicker-buttonpane button {
    float: left
}

.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current {
    float: right
}

.ui-datepicker-rtl .ui-datepicker-group {
    float: right
}

.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header {
    border-right-width: 0;
    border-left-width: 1px
}

.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {
    border-right-width: 0;
    border-left-width: 1px
}

.ui-datepicker-cover {
    display: block;
    position: absolute;
    z-index: -1;
    filter: mask();
    top: -4px;
    left: -4px;
    width: 200px;
    height: 200px
}

.search-tag i {
    margin-left: 2px;
    margin-top: 2px
}

.listing-search-place-input .tt-hint {
    color: #bbb;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.listing-search-place-input input:focus {
    box-shadow: 0 0 0 #ffffff
}

.listing-search-place-input .twitter-typeahead {
    width: 100%
}

.listing-search-place-input input {
    width: 100%;
    height: 33px;
    border: 0;
    padding: 0 10px;
    margin: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    box-sizing: border-box
}

.listing-search-place-input .twitter-typeahead span:first-of-type {
    width: 100%
}

.listing-search-place-input .geosearch-input {
    cursor: text !important;
    border: 1px solid #ccc;
    border-radius: 3px
}

.listing-search-place-input .place_proposals {
    width: 100%;
    height: auto;
    padding: 0px;
    margin: 3px;
    margin-top: 0px
}

.listing-search-place-input .place_proposals a {
    margin: 0;
    padding: 0;
    margin-left: 5px
}

.listing-search-place-input .place_proposals .more-proposal i {
    padding: 0;
    margin: 0;
    margin-left: 3px;
    margin-top: 2px
}

.listing-search-place-input {
    margin-bottom: 15px
}

.listing-search-place-input .tt-dropdown-menu {
    background: #f7f7f7;
    width: 100%;
    border: #dddddd 1px solid;
    border-top: 1px #ccc solid
}

.listing-search-place-input .tt-dropdown-menu p {
    padding: 0;
    margin: 0
}

.listing-search-place-input .tt-suggestion {
    border-bottom: #dddddd 1px solid;
    font-size: 12px;
    margin: 4px;
    padding: .5em 3.2em .5em .5em;
    position: relative;
    text-align: left;
    box-sizing: border-box
}

.listing-search-place-input [class^="tt-dataset-"]:not(:empty) {
    border-bottom: #dddddd 1px solid
}

.listing-search-place-input [class^="tt-dataset-"]:last-child,.listing-search-place-input .tt-suggestion:last-child {
    border-bottom-width: 0
}

.listing-search-place-input .tt-cursor,.listing-search-place-input .tt-suggestions *:hover {
    color: #0074e4;
    cursor: pointer
}

.listing-search-place-input .tt-suggestion__sublabel {
    color: #bbb;
    position: absolute;
    right: 0;
    top: 6px;
    width: 3em;
    text-align: right
}

/*!
 * FullCalendar v1.6.4 Stylesheet
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
.fc {
    direction: ltr;
    text-align: left
}

.fc table {
    border-collapse: collapse;
    border-spacing: 0
}

html .fc,.fc table {
    font-size: 1em
}

.fc td,.fc th {
    padding: 0;
    vertical-align: top
}

.fc-header td {
    white-space: nowrap
}

.fc-header-left {
    width: 25%;
    text-align: left
}

.fc-header-center {
    text-align: center
}

.fc-header-right {
    width: 25%;
    text-align: right
}

.fc-header-title {
    display: inline-block;
    vertical-align: top
}

.fc-header-title h2 {
    margin-top: 0;
    white-space: nowrap
}

.fc .fc-header-space {
    padding-left: 10px
}

.fc-header .fc-button {
    margin-bottom: 1em;
    vertical-align: top
}

.fc-header .fc-button {
    margin-right: -1px
}

.fc-header .fc-corner-right,.fc-header .ui-corner-right {
    margin-right: 0
}

.fc-header .fc-state-hover,.fc-header .ui-state-hover {
    z-index: 2
}

.fc-header .fc-state-down {
    z-index: 3
}

.fc-header .fc-state-active,.fc-header .ui-state-active {
    z-index: 4
}

.fc-content {
    clear: both;
    zoom:1}

.fc-view {
    width: 100%;
    overflow: hidden
}

.fc-widget-header,.fc-widget-content {
    border: 1px solid #ddd
}

.fc-state-highlight {
    background: #fcf8e3
}

.fc-cell-overlay {
    background: #bce8f1;
    opacity: .3;
    filter: alpha(opacity=30)
}

.fc-button {
    position: relative;
    display: inline-block;
    padding: 0 .6em;
    overflow: hidden;
    height: 1.9em;
    line-height: 1.9em;
    white-space: nowrap;
    cursor: pointer
}

.fc-state-default {
    border: 1px solid
}

.fc-state-default.fc-corner-left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.fc-state-default.fc-corner-right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
}

.fc-text-arrow {
    margin: 0 .1em;
    font-size: 2em;
    font-family: "Courier New",Courier,monospace;
    vertical-align: baseline
}

.fc-button-prev .fc-text-arrow,.fc-button-next .fc-text-arrow {
    font-weight: bold
}

.fc-button .fc-icon-wrap {
    position: relative;
    float: left;
    top: 50%
}

.fc-button .ui-icon {
    position: relative;
    float: left;
    margin-top: -50%;
    *margin-top: 0;
    *top: -50%
}

.fc-state-default {
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
    background-repeat: repeat-x;
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    color: #333;
    text-shadow: 0 1px 1px rgba(255,255,255,0.75);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05)
}

.fc-state-hover,.fc-state-down,.fc-state-active,.fc-state-disabled {
    color: #333333;
    background-color: #e6e6e6
}

.fc-state-hover {
    color: #333333;
    text-decoration: none;
    background-position: 0 -15px;
    -webkit-transition: background-position .1s linear;
    -moz-transition: background-position .1s linear;
    -o-transition: background-position .1s linear;
    transition: background-position .1s linear
}

.fc-state-down,.fc-state-active {
    background-color: #cccccc;
    background-image: none;
    outline: 0;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05)
}

.fc-state-disabled {
    cursor: default;
    background-image: none;
    opacity: .65;
    filter: alpha(opacity=65);
    box-shadow: none
}

.fc-event-container>* {
    z-index: 8
}

.fc-event-container>.ui-draggable-dragging,.fc-event-container>.ui-resizable-resizing {
    z-index: 9
}

.fc-event {
    border: 1px solid #3a87ad;
    background-color: #3a87ad;
    color: #fff;
    font-size: .85em;
    cursor: default
}

a.fc-event {
    text-decoration: none
}

a.fc-event,.fc-event-draggable {
    cursor: pointer
}

.fc-rtl .fc-event {
    text-align: right
}

.fc-event-inner {
    width: 100%;
    height: 100%;
    overflow: hidden
}

.fc-event-time,.fc-event-title {
    padding: 0 1px
}

.fc .ui-resizable-handle {
    display: block;
    position: absolute;
    z-index: 99999;
    overflow: hidden;
    font-size: 300%;
    line-height: 50%
}

.fc-event-hori {
    border-width: 1px 0;
    margin-bottom: 1px
}

.fc-ltr .fc-event-hori.fc-event-start,.fc-rtl .fc-event-hori.fc-event-end {
    border-left-width: 1px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px
}

.fc-ltr .fc-event-hori.fc-event-end,.fc-rtl .fc-event-hori.fc-event-start {
    border-right-width: 1px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px
}

.fc-event-hori .ui-resizable-e {
    top: 0 !important;
    right: -3px !important;
    width: 7px !important;
    height: 100% !important;
    cursor: e-resize
}

.fc-event-hori .ui-resizable-w {
    top: 0 !important;
    left: -3px !important;
    width: 7px !important;
    height: 100% !important;
    cursor: w-resize
}

.fc-event-hori .ui-resizable-handle {
    _padding-bottom: 14px
}

.fc-event.fc-event-background {
    border-style: solid;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    font-size: .85em;
    cursor: default;
    z-index: 7
}

.fc-event.fc-event-start.fc-event-background {
    border-top-width: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.fc-event.fc-event-end.fc-event-background {
    border-bottom-width: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}

.fc-event.fc-event-background-skin {
    border-color: #999;
    background-color: #edb;
    color: #777;
    text-align: center;
    opacity: .8;
    filter: alpha(opacity=80)
}

table.fc-border-separate {
    border-collapse: separate
}

.fc-border-separate th,.fc-border-separate td {
    border-width: 1px 0 0 1px
}

.fc-border-separate th.fc-last,.fc-border-separate td.fc-last {
    border-right-width: 1px
}

.fc-border-separate tr.fc-last th,.fc-border-separate tr.fc-last td {
    border-bottom-width: 1px
}

.fc-border-separate tbody tr.fc-first td,.fc-border-separate tbody tr.fc-first th {
    border-top-width: 0
}

.fc-grid th {
    text-align: center
}

.fc .fc-week-number {
    width: 22px;
    text-align: center
}

.fc .fc-week-number div {
    padding: 0 2px
}

.fc-grid .fc-day-number {
    float: right;
    padding: 0 2px
}

.fc-grid .fc-other-month .fc-day-number {
    opacity: .3;
    filter: alpha(opacity=30)
}

.fc-grid .fc-day-content {
    clear: both;
    padding: 2px 2px 1px
}

.fc-grid .fc-event-time {
    font-weight: bold
}

.fc-rtl .fc-grid .fc-day-number {
    float: left
}

.fc-rtl .fc-grid .fc-event-time {
    float: right
}

.fc-agenda table {
    border-collapse: separate
}

.fc-agenda-days th {
    text-align: center
}

.fc-agenda .fc-agenda-axis {
    width: 50px;
    padding: 0 4px;
    vertical-align: middle;
    text-align: right;
    white-space: nowrap;
    font-weight: normal
}

.fc-agenda .fc-week-number {
    font-weight: bold
}

.fc-agenda .fc-day-content {
    padding: 2px 2px 1px
}

.fc-agenda-days .fc-agenda-axis {
    border-right-width: 1px
}

.fc-agenda-days .fc-col0 {
    border-left-width: 0
}

.fc-agenda-allday th {
    border-width: 0 1px
}

.fc-agenda-allday .fc-day-content {
    min-height: 34px;
    _height: 34px
}

.fc-agenda-divider-inner {
    height: 2px;
    overflow: hidden
}

.fc-widget-header .fc-agenda-divider-inner {
    background: #eee
}

.fc-agenda-slots th {
    border-width: 1px 1px 0
}

.fc-agenda-slots td {
    border-width: 1px 0 0;
    background: none
}

.fc-agenda-slots td div {
    height: 20px
}

.fc-agenda-slots tr.fc-slot0 th,.fc-agenda-slots tr.fc-slot0 td {
    border-top-width: 0
}

.fc-agenda-slots tr.fc-minor th,.fc-agenda-slots tr.fc-minor td {
    border-top-style: dotted
}

.fc-agenda-slots tr.fc-minor th.ui-widget-header {
    *border-top-style: solid
}

.fc-event-vert {
    border-width: 0 1px
}

.fc-event-vert.fc-event-start {
    border-top-width: 1px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px
}

.fc-event-vert.fc-event-end {
    border-bottom-width: 1px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px
}

.fc-event-vert .fc-event-time {
    white-space: nowrap;
    font-size: 10px
}

.fc-event-vert .fc-event-inner {
    position: relative;
    z-index: 2
}

.fc-event-vert .fc-event-bg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: .25;
    filter: alpha(opacity=25)
}

.fc .ui-draggable-dragging .fc-event-bg,.fc-select-helper .fc-event-bg {
    display: none\9
}

.fc-event-vert .ui-resizable-s {
    bottom: 0 !important;
    width: 100% !important;
    height: 8px !important;
    overflow: hidden !important;
    line-height: 8px !important;
    font-size: 11px !important;
    font-family: monospace;
    text-align: center;
    cursor: s-resize
}

.fc-agenda .ui-resizable-resizing {
    _overflow: hidden
}

.fc-agenda-slots tr:nth-child(odd) {
    background-color: #eee
}

.fc-agenda .closed {
    background-color: #000;
    color: #fff
}

.fc-agenda .timeline {
    position: absolute;
    left: 59px;
    border: none;
    border-top: 2px solid #ff7f6e;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 999
}

```