#howto/ssh

- [ ] remind me (@[[2025-02-27]])
___

  1. Open a terminal window on your local machine.
  2. Generate a new SSH key pair by running the following command:

    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

  This command will generate a new RSA key pair with a length of 4096 bits and
  an email address of  your_email@example.com . You can replace these values
  with your own.

  1. When prompted, enter a filename for your new SSH key. You can use the
  default filename of  id_rsa , or choose a different name if you prefer.
  2. Enter a passphrase to protect your SSH key. This is optional, but
  recommended.
  3. Once your SSH key has been generated, you can add it to the ssh-agent by
  running the following command:

    ssh-add ~/.ssh/id_rsa
