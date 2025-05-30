
about:: [[ssh agent]]

 1. Using the ssh-keygen command:

   ssh-keygen -l

  This command will list all public keys in the  ~/.ssh  directory.

  2. Using the ls command:

   ls ~/.ssh

  This command will list all files in the  ~/.ssh  directory, including public
  and private keys.

  3. Using the ssh-add command:

   ssh-add -l

  This command will list all identities (i.e., public keys) that are currently
  added to the SSH agent**.

  4. Using the cat command:

   cat ~/.ssh/id_rsa.pub

  This command will display the contents of the public key file  id_rsa.pub

  Here are the ways to list SSH keys:

  1. Using the ssh-keygen command:

   ssh-keygen -l

  This command will list all public keys in the  ~/.ssh  directory.

  2. Using the ls command:

   ls ~/.ssh

  This command will list all files in the  ~/.ssh  directory, including public
  and private keys.

  3. Using the ssh-add command:

   ssh-add -l

  This command will list all identities (i.e., public keys) that are currently
  added to the SSH agent**.