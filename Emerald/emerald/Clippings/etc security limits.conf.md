#file #config #unix 

related:: [[unix]]

file: /etc/security/limits.conf

  The  **/etc/security/limits.conf**  file is a configuration file used in Linux
  systems to set user limits on various system resources, such as the number
  of processes a user can run, the maximum amount of memory a user can use,
  and the maximum amount of CPU time a user can consume.

  The file consists of a series of lines, each of which contains a combination
  of user or group names, limit types, and limit values. The limit types
  include:

  •  **soft** : This is the limit that the user can **set for themselves**. This limit
  can be exceeded, but only for a short period of time.
  •  **hard** : This is the maximum limit that can be set for a user. It cannot be
  exceeded.
  •  **unlimited** : This specifies that there is no limit set for the specified
  resource.

  Here is an example of a line in the  /etc/security/limits.conf  file:

    @student hard nofile 1024

  This line sets the hard limit for the number of open files to 1024 for all
  users in the  **student  ==group==**.

  The file can be used to restrict the usage of system resources by
  unauthorized users or to prevent users from consuming too much of a
  particular resource, which can help improve system performance and
  stability.

  It's important to note that changes made to the  /etc/security/limits.conf
  file may require a login/logout or reboot to take effect. Additionally, some
  distributions may use alternative files or methods to set user limits.

