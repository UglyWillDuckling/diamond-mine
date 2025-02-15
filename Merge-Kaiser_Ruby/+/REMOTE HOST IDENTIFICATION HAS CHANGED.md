---
tags:
  - error
  - error-message
related:
  - "[[Persona]]"
  - "[[SSH]]"
---
The classic error message!

  "REMOTE HOST IDENTIFICATION HAS CHANGED!" is an error message typically seen
  when using SSH (Secure Shell) to connect to a remote server. It indicates that
  the remote host's identification (i.e., its SSH key) has changed since the last
  time you connected.

  This error can occur due to various reasons, including:

  1. Server upgrade or migration: The remote server might have been upgraded or
  migrated to a new machine, resulting in a change to its SSH key.
  2. Key rotation: The server's SSH key might have been rotated (updated) for
  security reasons, which causes the old key to become invalid.
  3. IP address change: If the server's IP address has changed, the SSH key
  associated with the old IP address might no longer match.

  To resolve this issue, you can try the following:

  1. Verify the server's identity: Contact the server administrator or check the
  server's documentation to confirm the new SSH key or fingerprint.
  2. Update your known hosts file: Remove the outdated entry for the server from
  your  ~/.ssh/known_hosts  file (on Linux/macOS) or  %USERPROFILE%\.
  ssh\known_hosts  file (on Windows). You can do this by running  ssh-keygen -R
  <server_ip_or_hostname>  (replace  <server_ip_or_hostname>  with the actual
  server's IP address or hostname).
  3. Re establish connection: Try connecting to the server again using SSH. You
  will be prompted to verify the new key or fingerprint. If you're sure it's
  correct, you can add it to your known hosts file.

  Remember to exercise caution when updating your known hosts file, as it's
  essential to verify the server's identity to prevent man-in-the-middle attacks.

  If you're still unsure about the error or how to resolve it, feel free to
  provide more context or details, and I'll be happy to help!

