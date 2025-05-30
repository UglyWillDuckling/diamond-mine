  
  about:: [[ssh agent]]
  
  Remove a specific key

    ssh-add -d ~/.ssh/my_key

  This will remove the key located at  ~/.ssh/my_key  from the agent.

  Remove all keys

    ssh-add -D

  This will remove all keys from the agent.

  Check the list of keys

    ssh-add -l

  This will list all the keys currently loaded into the SSH agent.