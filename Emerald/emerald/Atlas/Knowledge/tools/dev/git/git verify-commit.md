#tool/git/command 

- [ ] remind me (@[[2025-05-27]])
___

 git verify-commit
  
  Check for **GPG** verification of commits. [^1]
  If no commits are verified, nothing will be printed, regardless of options specified.
  More information: https://git-scm.com/docs/git-verify-commit.

## options

- `--raw` : print raw details
- `--verbose` : show details

[^1]: [[GPG Introduction]]

## examples

  - Check commits for a GPG signature:
    git verify-commit commit_hash1 optional_commit_hash2 ...

  - Check commits for a GPG signature and show details of each commit:
    git verify-commit commit_hash1 optional_commit_hash2 ... --verbose

  - Check commits for a GPG signature and print the raw details:
    git verify-commit commit_hash1 optional_commit_hash2 ... --raw

