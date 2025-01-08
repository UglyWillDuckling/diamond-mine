---
related:
  - "[[ports]]"
  - "[[IMAP]]"
---
  1. [[SMTP]] (Simple Mail Transfer Protocol): Port 25
    • Used for sending emails between mail servers.
    • Also used for sending emails from a mail client (like Outlook or Gmail) to
    a mail server.
  2. Submission: Port 587
    • Used for sending emails from a mail client to a mail server, similar to    port 25.
    • This port is commonly used for sending emails from a mail client to a mail
    server, as it's often allowed by firewalls and ISPs.
  3. [[IMAP]] (Internet Message Access Protocol): Port 143
    • Used for retrieving emails from a mail server to a mail client.
    • Allows users to access their email accounts on a remote server.
  4. [[POP3]] (Post Office Protocol version 3): Port 110
    • Also used for retrieving emails from a mail server to a mail client.
    • Similar to IMAP, but with some differences in how emails are stored and
    retrieved.

## smtp
port: 25
ssl ports: 465,587

## imap
port: 143
ssl port: 993




