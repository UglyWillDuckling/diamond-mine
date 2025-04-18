#concept/development 

 A **checksum** is a **small piece of data** that is calculated from a larger
  dataset, such as a file or a block of data, using a specific [[algorithm]].
The resulting checksum value is typically a fixed-length string of characters,
 which is unique to the original data.

  The primary purpose of a checksum is to ensure the integrity of the data
  during transmission or storage. Here are some ways checksums are used:

  1. Error detection: When data is transmitted or stored, errors can occur due
  to various reasons like noise, corruption, or data loss. A checksum helps
  detect such errors by calculating the checksum of the received data and
  comparing it with the original checksum. If the two values don't match, it
  indicates that an error has occurred.
  2. Data validation: Checksums can be used to validate the authenticity of
  data. For example, when downloading a file, a checksum can be calculated and
  compared with the original checksum provided by the file's author to ensure
  that the file has not been tampered with.
  3. Data compression: Checksums can be used in data compression algorithms to
  ensure that the compressed data can be decompressed correctly.

  There are different types of checksums, including:

  1. **Simple** checksum: A basic checksum that adds up the bytes of the data and
  takes the remainder modulo a certain value.
  2. **CRC** (Cyclic Redundancy Check): A more advanced checksum that uses a
  polynomial equation to calculate the checksum value.
  3. **MD5** (Message-Digest Algorithm 5): A cryptographic hash function that
  produces a 128-bit checksum value.
  4. **SHA** (Secure Hash Algorithm): A family of cryptographic hash functions
  that produce a checksum value of varying lengths (e.g., SHA-256, SHA-512).