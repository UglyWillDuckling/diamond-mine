 #tool #feature 

part_of:: [[git]]

 In Git, define "format" most commonly refers to the way in which Git stores
  and displays information, such as the format of a commit object, a tag
  object, or a Git repository itself.

  For example, the format of a commit object in Git includes:

  • A 20-byte sequence that identifies the object (SHA-1 hash)
  • The type of the object (commit)
  • The size of the object in bytes
  • A set of parent commit objects (up to 2)
  • The commit message
  • The author information (name, email, and timestamp)
  • The committer information (name, email, and timestamp)

  Another common use of the term "format" in Git refers to how Git commands
  display information, for example, the  --format  option in many Git commands
  allows you to specify a custom format for the output.

  For example, you can use the  --format  option in the  git log  command to
  display the author date, commit message and hash in a specific format using:

    git log --format="%ad %s %h"

  You can find more information about the available placeholders for different
  formats in the Git-Log documentation https://git-scm.com/docs/git-log
