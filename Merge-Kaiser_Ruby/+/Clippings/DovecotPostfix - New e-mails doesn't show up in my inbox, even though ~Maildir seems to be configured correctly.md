---
title: Dovecot/Postfix - New e-mails doesn't show up in my inbox, even though ~/Maildir seems to be configured correctly?
source: https://serverfault.com/questions/928770/dovecot-postfix-new-e-mails-doesnt-show-up-in-my-inbox-even-though-maildir
author:
  - "[[Server Fault]]"
published: 2018-08-30
created: 2025-01-06
description: first off, there is a very similar question to mine. I am aware of that, however the method the people on this thread presented unfortunately didn't work in the same expected way for me as it did ...
tags:
  - format
  - email
favicon: https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea
related:
  - "[[Dovecot]]"
  - "[[Postfix]]"
  - "[[email]]"
  - "[[mail server]]"
  - "[[mail formats]]"
---
![icon](https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea]

first off, there is a very similar [question](https://serverfault.com/questions/654789/maildir-new-has-messages-but-inbox-is-empty) to mine. I am aware of that, however the method the people on this thread presented unfortunately didn't work in the same expected way for me as it did for them.

That's why I am creating a new question.

---

I have installed a mail server on a Debian based Raspibian system with Dovecot and Postfix.

Output of `apt list --installed | grep dovecot`:

```
dovecot-core/stable,now 1:2.2.27-3+deb9u2 armhf [installed]
dovecot-imapd/stable,now 1:2.2.27-3+deb9u2 armhf [installed]
dovecot-managesieved/stable,now 1:2.2.27-3+deb9u2 armhf [installed]
dovecot-pop3d/stable,now 1:2.2.27-3+deb9u2 armhf [installed]
dovecot-sieve/stable,now 1:2.2.27-3+deb9u2 armhf [installed]
```

Output of `apt list --installed | grep postfix`

```
postfix/stable,now 3.1.8-0+deb9u1 armhf [installed]
postfix-sqlite/stable,now 3.1.8-0+deb9u1 armhf [installed,automatic]
```

---

Now to my problem I face: I can send emails and according to the files in `~/Maildir/new` also receive emails like with any other normal working mail server. However my problem is that I don't get any emails to my inbox.

I don't know where in the configuration for Dovecot and Postfix my mistake lies.

This is the output of `/etc/dovecot/conf.d/10-mail.conf`

```
     1  ##
     2  ## Mailbox locations and namespaces
     3  ##
     4
     5  # Location for users' mailboxes. The default is empty, which means that Dovecot
     6  # tries to find the mailboxes automatically. This won't work if the user
     7  # doesn't yet have any mail, so you should explicitly tell Dovecot the full
     8  # location.
     9  #
    10  # If you're using mbox, giving a path to the INBOX file (eg. /var/mail/%u)
    11  # isn't enough. You'll also need to tell Dovecot where the other mailboxes are
    12  # kept. This is called the "root mail directory", and it must be the first
    13  # path given in the mail_location setting.
    14  #
    15  # There are a few special variables you can use, eg.:
    16  #
    17  #   %u - username
    18  #   %n - user part in user@domain, same as %u if there's no domain
    19  #   %d - domain part in user@domain, empty if there's no domain
    20  #   %h - home directory
    21  #
    22  # See doc/wiki/Variables.txt for full list. Some examples:
    23  #
    24  #   mail_location = maildir:~/Maildir
    25  #   mail_location = mbox:~/mail:INBOX=/var/mail/%u
    26  #   mail_location = mbox:/var/mail/%d/%1n/%n:INDEX=/var/indexes/%d/%1n/%n
    27  #
    28  # <doc/wiki/MailLocation.txt>
    29  #
    30  mail_location = mbox:~/Maildir:INBOX=/var/mail/%u
    31
    32  # If you need to set multiple mailbox locations or want to change default
    33  # namespace settings, you can do it by defining namespace sections.
    34  #
    35  # You can have private, shared and public namespaces. Private namespaces
    36  # are for user's personal mails. Shared namespaces are for accessing other
    37  # users' mailboxes that have been shared. Public namespaces are for shared
    38  # mailboxes that are managed by sysadmin. If you create any shared or public
    39  # namespaces you'll typically want to enable ACL plugin also, otherwise all
    40  # users can access all the shared mailboxes, assuming they have permissions
    41  # on filesystem level to do so.
    42  namespace inbox {
    43    # Namespace type: private, shared or public
    44    #type = private
    45
    46    # Hierarchy separator to use. You should use the same separator for all
    47    # namespaces or some clients get confused. '/' is usually a good one.
    48    # The default however depends on the underlying mail storage format.
    49    #separator = 
    50
    51    # Prefix required to access this namespace. This needs to be different for
    52    # all namespaces. For example "Public/".
    53    #prefix = 
    54
    55    # Physical location of the mailbox. This is in same format as
    56    # mail_location, which is also the default for it.
    57    #location =
    58
    59    # There can be only one INBOX, and this setting defines which namespace
    60    # has it.
    61    inbox = yes
    62
    63    # If namespace is hidden, it's not advertised to clients via NAMESPACE
    64    # extension. You'll most likely also want to set list=no. This is mostly
    65    # useful when converting from another server with different namespaces which
    66    # you want to deprecate but still keep working. For example you can create
    67    # hidden namespaces with prefixes "~/mail/", "~%u/mail/" and "mail/".
    68    #hidden = no
    69
    70    # Show the mailboxes under this namespace with LIST command. This makes the
    71    # namespace visible for clients that don't support NAMESPACE extension.
    72    # "children" value lists child mailboxes, but hides the namespace prefix.
    73    #list = yes
    74
    75    # Namespace handles its own subscriptions. If set to "no", the parent
    76    # namespace handles them (empty prefix should always have this as "yes")
    77    #subscriptions = yes
    78
    79    # See 15-mailboxes.conf for definitions of special mailboxes.
    80  }
    81
    82  # Example shared namespace configuration
    83  #namespace {
    84    #type = shared
    85    #separator = /
    86
    87    # Mailboxes are visible under "shared/user@domain/"
    88    # %%n, %%d and %%u are expanded to the destination user.
    89    #prefix = shared/%%u/
    90
    91    # Mail location for other users' mailboxes. Note that %variables and ~/
    92    # expands to the logged in user's data. %%n, %%d, %%u and %%h expand to the
    93    # destination user's data.
    94    #location = maildir:%%h/Maildir:INDEX=~/Maildir/shared/%%u
    95
    96    # Use the default namespace for saving subscriptions.
    97    #subscriptions = no
    98
    99    # List the shared/ namespace only if there are visible shared mailboxes.
   100    #list = children
   101  #}
   102  # Should shared INBOX be visible as "shared/user" or "shared/user/INBOX"?
   103  #mail_shared_explicit_inbox = no
   104
   105  # System user and group used to access mails. If you use multiple, userdb
   106  # can override these by returning uid or gid fields. You can use either numbers
   107  # or names. <doc/wiki/UserIds.txt>
   108  #mail_uid =
   109  #mail_gid =
   110
   111  # Group to enable temporarily for privileged operations. Currently this is
   112  # used only with INBOX when either its initial creation or dotlocking fails.
   113  # Typically this is set to "mail" to give access to /var/mail.
   114  #mail_privileged_group =
   115
   116  # Grant access to these supplementary groups for mail processes. Typically
   117  # these are used to set up access to shared mailboxes. Note that it may be
   118  # dangerous to set these if users can create symlinks (e.g. if "mail" group is
   119  # set here, ln -s /var/mail ~/mail/var could allow a user to delete others'
   120  # mailboxes, or ln -s /secret/shared/box ~/mail/mybox would allow reading it).
   121  #mail_access_groups =
   122
   123  # Allow full filesystem access to clients. There's no access checks other than
   124  # what the operating system does for the active UID/GID. It works with both
   125  # maildir and mboxes, allowing you to prefix mailboxes names with eg. /path/
   126  # or ~user/.
   127  #mail_full_filesystem_access = no
   128
   129  # Dictionary for key=value mailbox attributes. This is used for example by
   130  # URLAUTH and METADATA extensions.
   131  #mail_attribute_dict =
   132
   133  # A comment or note that is associated with the server. This value is
   134  # accessible for authenticated users through the IMAP METADATA server
   135  # entry "/shared/comment". 
   136  #mail_server_comment = ""
   137
   138  # Indicates a method for contacting the server administrator. According to
   139  # RFC 5464, this value MUST be a URI (e.g., a mailto: or tel: URL), but that
   140  # is currently not enforced. Use for example mailto:admin@example.com. This
   141  # value is accessible for authenticated users through the IMAP METADATA server
   142  # entry "/shared/admin".
   143  #mail_server_admin = 
   144
   145  ##
   146  ## Mail processes
   147  ##
   148
   149  # Don't use mmap() at all. This is required if you store indexes to shared
   150  # filesystems (NFS or clustered filesystem).
   151  #mmap_disable = no
   152
   153  # Rely on O_EXCL to work when creating dotlock files. NFS supports O_EXCL
   154  # since version 3, so this should be safe to use nowadays by default.
   155  #dotlock_use_excl = yes
   156
   157  # When to use fsync() or fdatasync() calls:
   158  #   optimized (default): Whenever necessary to avoid losing important data
   159  #   always: Useful with e.g. NFS when write()s are delayed
   160  #   never: Never use it (best performance, but crashes can lose data)
   161  #mail_fsync = optimized
   162
   163  # Locking method for index files. Alternatives are fcntl, flock and dotlock.
   164  # Dotlocking uses some tricks which may create more disk I/O than other locking
   165  # methods. NFS users: flock doesn't work, remember to change mmap_disable.
   166  #lock_method = fcntl
   167
   168  # Directory in which LDA/LMTP temporarily stores incoming mails >128 kB.
   169  #mail_temp_dir = /tmp
   170
   171  # Valid UID range for users, defaults to 500 and above. This is mostly
   172  # to make sure that users can't log in as daemons or other system users.
   173  # Note that denying root logins is hardcoded to dovecot binary and can't
   174  # be done even if first_valid_uid is set to 0.
   175  #first_valid_uid = 500
   176  #last_valid_uid = 0
   177
   178  # Valid GID range for users, defaults to non-root/wheel. Users having
   179  # non-valid GID as primary group ID aren't allowed to log in. If user
   180  # belongs to supplementary groups with non-valid GIDs, those groups are
   181  # not set.
   182  #first_valid_gid = 1
   183  #last_valid_gid = 0
   184
   185  # Maximum allowed length for mail keyword name. It's only forced when trying
   186  # to create new keywords.
   187  #mail_max_keyword_length = 50
   188
   189  # ':' separated list of directories under which chrooting is allowed for mail
   190  # processes (ie. /var/mail will allow chrooting to /var/mail/foo/bar too).
   191  # This setting doesn't affect login_chroot, mail_chroot or auth chroot
   192  # settings. If this setting is empty, "/./" in home dirs are ignored.
   193  # WARNING: Never add directories here which local users can modify, that
   194  # may lead to root exploit. Usually this should be done only if you don't
   195  # allow shell access for users. <doc/wiki/Chrooting.txt>
   196  #valid_chroot_dirs = 
   197
   198  # Default chroot directory for mail processes. This can be overridden for
   199  # specific users in user database by giving /./ in user's home directory
   200  # (eg. /home/./user chroots into /home). Note that usually there is no real
   201  # need to do chrooting, Dovecot doesn't allow users to access files outside
   202  # their mail directory anyway. If your home directories are prefixed with
   203  # the chroot directory, append "/." to mail_chroot. <doc/wiki/Chrooting.txt>
   204  #mail_chroot = 
   205
   206  # UNIX socket path to master authentication server to find users.
   207  # This is used by imap (for shared users) and lda.
   208  #auth_socket_path = /var/run/dovecot/auth-userdb
   209
   210  # Directory where to look up mail plugins.
   211  #mail_plugin_dir = /usr/lib/dovecot/modules
   212
   213  # Space separated list of plugins to load for all services. Plugins specific to
   214  # IMAP, LDA, etc. are added to this list in their own .conf files.
   215  #mail_plugins = 
   216
   217  ##
   218  ## Mailbox handling optimizations
   219  ##
   220
   221  # Mailbox list indexes can be used to optimize IMAP STATUS commands. They are
   222  # also required for IMAP NOTIFY extension to be enabled.
   223  #mailbox_list_index = no
   224
   225  # The minimum number of mails in a mailbox before updates are done to cache
   226  # file. This allows optimizing Dovecot's behavior to do less disk writes at
   227  # the cost of more disk reads.
   228  #mail_cache_min_mail_count = 0
   229
   230  # When IDLE command is running, mailbox is checked once in a while to see if
   231  # there are any new mails or other changes. This setting defines the minimum
   232  # time to wait between those checks. Dovecot can also use inotify and
   233  # kqueue to find out immediately when changes occur.
   234  #mailbox_idle_check_interval = 30 secs
   235
   236  # Save mails with CR+LF instead of plain LF. This makes sending those mails
   237  # take less CPU, especially with sendfile() syscall with Linux and FreeBSD.
   238  # But it also creates a bit more disk I/O which may just make it slower.
   239  # Also note that if other software reads the mboxes/maildirs, they may handle
   240  # the extra CRs wrong and cause problems.
   241  #mail_save_crlf = no
   242
   243  # Max number of mails to keep open and prefetch to memory. This only works with
   244  # some mailbox formats and/or operating systems.
   245  #mail_prefetch_count = 0
   246
   247  # How often to scan for stale temporary files and delete them (0 = never).
   248  # These should exist only after Dovecot dies in the middle of saving mails.
   249  #mail_temp_scan_interval = 1w
   250
   251  ##
   252  ## Maildir-specific settings
   253  ##
   254
   255  # By default LIST command returns all entries in maildir beginning with a dot.
   256  # Enabling this option makes Dovecot return only entries which are directories.
   257  # This is done by stat()ing each entry, so it causes more disk I/O.
   258  # (For systems setting struct dirent->d_type, this check is free and it's
   259  # done always regardless of this setting)
   260  #maildir_stat_dirs = no
   261
   262  # When copying a message, do it with hard links whenever possible. This makes
   263  # the performance much better, and it's unlikely to have any side effects.
   264  #maildir_copy_with_hardlinks = yes
   265
   266  # Assume Dovecot is the only MUA accessing Maildir: Scan cur/ directory only
   267  # when its mtime changes unexpectedly or when we can't find the mail otherwise.
   268  #maildir_very_dirty_syncs = no
   269
   270  # If enabled, Dovecot doesn't use the S=<size> in the Maildir filenames for
   271  # getting the mail's physical size, except when recalculating Maildir++ quota.
   272  # This can be useful in systems where a lot of the Maildir filenames have a
   273  # broken size. The performance hit for enabling this is very small.
   274  #maildir_broken_filename_sizes = no
   275
   276  # Always move mails from new/ directory to cur/, even when the \Recent flags
   277  # aren't being reset.
   278  #maildir_empty_new = no
   279
   280  ##
   281  ## mbox-specific settings
   282  ##
   283
   284  # Which locking methods to use for locking mbox. There are four available:
   285  #  dotlock: Create <mailbox>.lock file. This is the oldest and most NFS-safe
   286  #           solution. If you want to use /var/mail/ like directory, the users
   287  #           will need write access to that directory.
   288  #  dotlock_try: Same as dotlock, but if it fails because of permissions or
   289  #               because there isn't enough disk space, just skip it.
   290  #  fcntl  : Use this if possible. Works with NFS too if lockd is used.
   291  #  flock  : May not exist in all systems. Doesn't work with NFS.
   292  #  lockf  : May not exist in all systems. Doesn't work with NFS.
   293  #
   294  # You can use multiple locking methods; if you do the order they're declared
   295  # in is important to avoid deadlocks if other MTAs/MUAs are using multiple
   296  # locking methods as well. Some operating systems don't allow using some of
   297  # them simultaneously.
   298  #
   299  # The Debian value for mbox_write_locks differs from upstream Dovecot. It is
   300  # changed to be compliant with Debian Policy (section 11.6) for NFS safety.
   301  #       Dovecot: mbox_write_locks = dotlock fcntl
   302  #       Debian:  mbox_write_locks = fcntl dotlock
   303  #
   304  #mbox_read_locks = fcntl
   305  #mbox_write_locks = fcntl dotlock
   306
   307  # Maximum time to wait for lock (all of them) before aborting.
   308  #mbox_lock_timeout = 5 mins
   309
   310  # If dotlock exists but the mailbox isn't modified in any way, override the
   311  # lock file after this much time.
   312  #mbox_dotlock_change_timeout = 2 mins
   313
   314  # When mbox changes unexpectedly we have to fully read it to find out what
   315  # changed. If the mbox is large this can take a long time. Since the change
   316  # is usually just a newly appended mail, it'd be faster to simply read the
   317  # new mails. If this setting is enabled, Dovecot does this but still safely
   318  # fallbacks to re-reading the whole mbox file whenever something in mbox isn't
   319  # how it's expected to be. The only real downside to this setting is that if
   320  # some other MUA changes message flags, Dovecot doesn't notice it immediately.
   321  # Note that a full sync is done with SELECT, EXAMINE, EXPUNGE and CHECK 
   322  # commands.
   323  #mbox_dirty_syncs = yes
   324
   325  # Like mbox_dirty_syncs, but don't do full syncs even with SELECT, EXAMINE,
   326  # EXPUNGE or CHECK commands. If this is set, mbox_dirty_syncs is ignored.
   327  #mbox_very_dirty_syncs = no
   328
   329  # Delay writing mbox headers until doing a full write sync (EXPUNGE and CHECK
   330  # commands and when closing the mailbox). This is especially useful for POP3
   331  # where clients often delete all mails. The downside is that our changes
   332  # aren't immediately visible to other MUAs.
   333  #mbox_lazy_writes = yes
   334
   335  # If mbox size is smaller than this (e.g. 100k), don't write index files.
   336  # If an index file already exists it's still read, just not updated.
   337  #mbox_min_index_size = 0
   338
   339  # Mail header selection algorithm to use for MD5 POP3 UIDLs when
   340  # pop3_uidl_format=%m. For backwards compatibility we use apop3d inspired
   341  # algorithm, but it fails if the first Received: header isn't unique in all
   342  # mails. An alternative algorithm is "all" that selects all headers.
   343  #mbox_md5 = apop3d
   344
   345  ##
   346  ## mdbox-specific settings
   347  ##
   348
   349  # Maximum dbox file size until it's rotated.
   350  #mdbox_rotate_size = 2M
   351
   352  # Maximum dbox file age until it's rotated. Typically in days. Day begins
   353  # from midnight, so 1d = today, 2d = yesterday, etc. 0 = check disabled.
   354  #mdbox_rotate_interval = 0
   355
   356  # When creating new mdbox files, immediately preallocate their size to
   357  # mdbox_rotate_size. This setting currently works only in Linux with some
   358  # filesystems (ext4, xfs).
   359  #mdbox_preallocate_space = no
   360
   361  ##
   362  ## Mail attachments
   363  ##
   364
   365  # sdbox and mdbox support saving mail attachments to external files, which
   366  # also allows single instance storage for them. Other backends don't support
   367  # this for now.
   368
   369  # Directory root where to store mail attachments. Disabled, if empty.
   370  #mail_attachment_dir =
   371
   372  # Attachments smaller than this aren't saved externally. It's also possible to
   373  # write a plugin to disable saving specific attachments externally.
   374  #mail_attachment_min_size = 128k
   375
   376  # Filesystem backend to use for saving attachments:
   377  #  posix : No SiS done by Dovecot (but this might help FS's own deduplication)
   378  #  sis posix : SiS with immediate byte-by-byte comparison during saving
   379  #  sis-queue posix : SiS with delayed comparison and deduplication
   380  #mail_attachment_fs = sis posix
   381
   382  # Hash format to use in attachment filenames. You can add any text and
   383  # variables: %{md4}, %{md5}, %{sha1}, %{sha256}, %{sha512}, %{size}.
   384  # Variables can be truncated, e.g. %{sha256:80} returns only first 80 bits
   385  #mail_attachment_hash = %{sha1}
```

And this is the output for `/etc/postfix/main.cf`

```
 1  # See /usr/share/postfix/main.cf.dist for a commented, more complete version
 2
 3
 4  # Debian specific:  Specifying a file name will cause the first
 5  # line of that file to be used as the name.  The Debian default
 6  # is /etc/mailname.
 7  #myorigin = /etc/mailname
 8
 9  smtpd_banner = $myhostname ESMTP $mail_name (Raspbian)
10  biff = no
11
12  # appending .domain is the MUA's job.
13  append_dot_mydomain = no
14
15  # Uncomment the next line to generate "delayed mail" warnings
16  #delay_warning_time = 4h
17
18  readme_directory = no
19
20  # See http://www.postfix.org/COMPATIBILITY_README.html -- default to 2 on
21  # fresh installs.
22  compatibility_level = 2
23
24  # TLS parameters
25  smtpd_tls_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
26  smtpd_tls_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
27  smtpd_use_tls=yes
28  smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache
29  smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache
30
31  # See /usr/share/doc/postfix/TLS_README.gz in the postfix-doc package for
32  # information on enabling SSL in the smtp client.
33
34  myhostname = example.net
35  alias_maps = hash:/etc/aliases
36  alias_database = hash:/etc/aliases
37  mydestination = example.net, localhost.localdomain, localhost
38  mynetworks = 0.0.0.0
39  #mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128
40  mailbox_size_limit = 0
41  message_size_limit = 50000000
42  recipient_delimiter = +
43  home_mailbox = Maildir/
44  smtpd_sasl_auth_enable = yes
45  smtpd_sasl_type = dovecot
46  smtpd_sasl_path = private/dovecot-auth
47  smtpd_sasl_authenticated_header = yes
48  smtpd_sasl_local_domain = $myhostname
49  broken_sasl_auth_clients = yes
50  smtpd_recipient_restrictions = reject_unknown_sender_domain reject_unknown_recipient_domain reject_unauth_pipelining permit_mynetworks permit_sasl_authenticated reject_unauth_destination
51  smtpd_sender_restrictions = reject_unknown_sender_domain
52  mailbox_command = /usr/lib/dovecot/deliver -c /etc/dovecot/conf.d/01-mail-stack-delivery.conf -m "${EXTENSION}"
53  smtp_use_tls = yes
54  smtpd_tls_received_header = yes
55  smtpd_tls_mandatory_protocols = SSLv3, TLSv1
56  smtpd_tls_mandatory_ciphers = medium
57  smtpd_tls_auth_only = yes
58  tls_random_source = dev:/dev/urandom
59  virtual_alias_maps = hash:/etc/postfix/virtual
60  inet_interfaces = all
```


## answer

You have:

```
mail_location = mbox:~/Maildir:INBOX=/var/mail/%u
```

However you also write that new messages are written to `~/Maildir/new/`, which is Maildir format, not mbox.

Change that line to

```
mail_location = maildir:~/Maildir
```

and you should be able to read your messages.