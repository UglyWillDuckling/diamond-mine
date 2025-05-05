
# issues

`scanf()` **leaves a newline character in the input buffer**: When you press Enter
  after typing a character, a newline character ( \n ) is left in the input buffer.
  The next iteration of the loop will read this newline character instead of the
  next character you type. You can fix this by adding a space before the  %c
  format specifier in the  scanf()  call, like this:  scanf(" %c", &znak); . The
  space tells  scanf()  to ignore any whitespace characters (including newlines)
  before reading the next character.
