---
tags:
  - email-protocol
  - protocol
---
Internet Message Access Protocol is the standard protocol used to access and manage emails.
## key things

**ports**:
 standard: 143
 ssl: 993

- $ Two way communication - bi-directional synchronization
- $ Remote mail storage
- Folder management
- ? Message flags
- Search capabilities - **queries** based on various criteria
- $ Uses [[SSL/TLS]] for encryption

## in detail

  **IMAP** (Internet Message Access Protocol) is a protocol used for accessing and
  managing email on a remote mail server. It is a more recent alternative to POP
  (Post Office Protocol) and provides more features and flexibility.

  **Features**:

  1. Two-way communication: IMAP allows the email client and server to communicate
  with each other in real-time, enabling **bi-directional synchronization** of email
  messages.
  2. Remote mail storage: Email messages are stored on the mail server, and the
  client can access them from anywhere, at any time.
  3. Email folder management: IMAP allows users to create, delete, and rename
  folders on the mail server, and organize their email messages accordingly.
  4. Message flags: IMAP enables users to mark messages as read, unread, deleted,
  or flagged, and these flags are synchronized across all clients and devices.
  5. Search capabilities: IMAP provides a powerful search function that allows
  users to search for specific messages based on various criteria, such as sender,
  subject, or content.

  **Benefits**:

  1. Accessibility: IMAP allows users to access their email from anywhere, using
  any device with an internet connection.
  2. Synchronization: IMAP ensures that email messages are synchronized across all
  devices and clients, eliminating the need for manual synchronization.
  3. Security: IMAP uses SSL/TLS encryption to secure the connection between the
  client and server, protecting email messages from interception.
  4. Flexibility: IMAP provides more flexibility than POP, allowing users to
  access their email from multiple devices and clients without worrying about
  message duplication or loss.
  5. Scalability: IMAP is designed to handle large volumes of email traffic,
  making it suitable for business and enterprise environments.

  Common IMAP **commands**:

  1.  LOGIN : Authenticate with the mail server using a username and password.
  2.  **SELECT** : Select a specific mailbox or folder for access.
  3.  **LIST** : List the available mailboxes or folders on the server.
  4.  **SEARCH** : Search for specific messages based on various criteria.
  5.  FETCH : Retrieve a specific message or a range of messages from the server.
  6.  **STORE** : Update the flags or status of a message on the server.
  7.  **COPY** : Copy a message from one mailbox to another.
  8.  **MOVE** : Move a message from one mailbox to another.
  9.  **DELETE** : Delete a message or a mailbox.

  **IMAP vs. POP**:

  IMAP and [[POP3]] are both email protocols used for accessing email, but they have
  some key differences:

| Feature             | IMAP               | POP             |
| ------------------- | ------------------ | --------------- |
| Mail storage        | Remote             | Local           |
| Mail access         | Bi-directional     | Uni-directional |
| Folder management   | Supported          | Not supported   |
| Message flags       | Supported          | Not supported   |
| Search capabilities | Supported          | Limited         |
| Security            | SSL/TLS encryption | Optional        |

## footer

**Related**: [[SMTP]], [[POP3]]
