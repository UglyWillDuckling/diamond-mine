---
title: Mailbox Formats — Dovecot documentation
source: https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/
author: 
published: 
created: 2025-01-05
description: 
tags: 
favicon: https://doc.dovecot.org/favicon.ico
related:
  - "[[Dovecot]]"
part of:
  - "[[Dovecot]]"
---
![[~/×/2bbff94f3e43ec77e6f24450f2586bcd_MD5.ico]]

Mailbox formats supported by Dovecot:

<table><thead><tr><th><p>Name</p></th><th><p>Tag</p></th><th colspan="2"><p>Description</p></th></tr></thead><tbody><tr><td><p><a href="https://doc.dovecot.org/2.3/configuration_manual/mail_location/obox/#obox-settings"><span>obox</span></a></p></td><td><p><code><span>obox</span></code></p></td><td colspan="2"><p>OX Dovecot Pro object storage mailbox format. (Pro only)</p></td></tr><tr><td><p><a href="https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/mbox/#mbox-mbox-format"><span>mbox</span></a></p></td><td><p><code><span>mbox</span></code></p></td><td colspan="2"><p>Traditional UNIX mailbox format. Users’ INBOX mailboxes are commonly stored in <code><span>/var/spool/mail</span></code> or <code><span>/var/mail</span></code> directory. Single file contains multiple messages.</p></td></tr><tr><td><p><a href="https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/maildir/#maildir-mbox-format"><span>Maildir</span></a></p></td><td><p><code><span>maildir</span></code></p></td><td colspan="2"><p>One file contains one message. A reliable choice since files are never modified and all operations are atomic. The top-level Maildir directory contains the <code><span>Maildir/cur</span></code>, <code><span>Maildir/new</span></code>, and <code><span>Maildir/tmp</span></code> subdirectories.</p></td></tr><tr><td rowspan="2"><p><a href="https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/dbox/#dbox-mbox-format"><span>dbox</span></a></p></td><td><p><code><span>sdbox</span></code></p></td><td><p><strong>single-dbox</strong>, one message per file.</p></td><td rowspan="2"><p>Dovecot’s own high performance mailbox format. Messages are stored in one or more files, each containing one or more messages.</p></td></tr><tr><td><p><code><span>mdbox</span></code></p></td><td><p><strong>multi-dbox</strong>, multiple messages per file.</p></td></tr><tr><td><p><a href="https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/imapc/#imapc-mbox-format"><span>imapc</span></a></p></td><td><p><code><span>imapc</span></code></p></td><td colspan="2"><p>Use remote IMAP server as mail storage.</p></td></tr><tr><td><p><a href="https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/pop3c/#pop3c-mbox-format"><span>pop3c</span></a></p></td><td><p><code><span>pop3c</span></code></p></td><td colspan="2"><p>Use remote POP3 server as mail storage.</p></td></tr></tbody></table>

The Tag column indicates the tag which is used at the beginning of a [mailbox location specification](https://doc.dovecot.org/2.3/configuration_manual/mail_location/#mail-location-settings).

## Configuration¶

See [Mail Location Settings](https://doc.dovecot.org/2.3/configuration_manual/mail_location/#mail-location-settings) for configuration information.

## Physical Storage¶

The mailbox formats define how Dovecot stores mail data, but it does not address where that data will physically live - that is a decision for the administrator to make.

There are two general categories of storage: local and shared.

### Local Storage¶

#### Filesystems¶

- See [Maildir Mailbox Format](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/maildir/#maildir-mbox-format) for Maildir-specific filesystem optimizations
- Dovecot doesn’t rely on atime updates, so you can mount the filesystem with `noatime`

#### Index Files¶

Keeping index files on a different disk than the mail spool gives you better performance. The indexes have a lot of write activity so it is recommended toi use RAID-10 instead of RAID-5 for them.

#### Fsyncing¶

By default, Dovecot calls `fsync()` and `fdatasync()` whenever it’s useful to prevent potential data loss. The main reason for this is so that Dovecot won’t lie that the message was saved to the disk, if in fact a power failure a second later would lose the message. With IMAP clients this is perhaps a less serious problem, because the lost message was most likely either a mail in Draft mailbox or a message in “Sent Messages” mailbox; in other words, a message that the user had already seen. However if [Dovecot LDA](https://doc.dovecot.org/2.3/configuration_manual/protocols/lda/#lda) or [LMTP Server](https://doc.dovecot.org/2.3/configuration_manual/protocols/lmtp_server/#lmtp-server) loses a message, the user never even knew that the message existed, unless the sender decides to resend it.

Since power failures and kernel panics are quite rare, many people are tempted to disable fsyncing because it may increase the performance quite a lot. Dovecot allows this by setting [`mail_fsync`](https://doc.dovecot.org/2.3/settings/core/#core_setting-mail_fsync "core_setting-mail_fsync") to `never`. However, this is dangerous, especially with IMAP, LDA, and LMTP. If you do want to set to `never`, you should only explicitly do this for services that you are comfortable with data loss. Example:

```
# Default
mail_fsync = optimized

protocol pop3 {
  # Enable fsyncing for POP3
  mail_fsync = never
}
```

### Shared Storage¶

The recommended storage solution for large installations that require high-availability and scalable performance is object storage. [OX Dovecot Pro](https://doc.dovecot.org/2.3/installation_guide/dovecot_pro_releases/#ox-dovecot-pro-releases) provides the [obox mailbox format](https://doc.dovecot.org/2.3/configuration_manual/mail_location/obox/#obox-settings) to efficiently interact with selected object storage systems.

Dovecot allows keeping mails and index files in clustered filesystems. Dovecot does not specifically support any specific clustered solution - it is the responsibility of the admin to perform functional and load testing to guarantee the storage solution provides adequate performance.

Dovecot also supports keeping mails and index files on NFS. Everything described in this page applies to NFS as well, but see [NFS](https://doc.dovecot.org/2.3/configuration_manual/nfs/#nfs) for additional NFS-specific problems and optimizations.

#### Memory Mapping¶

By default, Dovecot `mmap()s` the index files. This may not work with all clustered filesystems, and it most certainly won’t work with NFS.

Setting `mmap_disable = yes` disables `mmap()` and Dovecot does its own internal caching. If `mmap()` is supported by your filesystem, it’s still not certain that it gives better performance. Try benchmarking to make sure.

#### Locking¶

Dovecot supports locking index files with fcntl (default), flock or dotlocks. Some clustered filesystems may not support fcntl, so you can change it to use flock instead. Fcntl locks may also cause problems with some NFS configurations, in which case you can try if switching to dotlocks helps. Note that dotlocks are the slowest locking method.

You can change the locking method from [`lock_method`](https://doc.dovecot.org/2.3/settings/core/#core_setting-lock_method "core_setting-lock_method") setting. Regardless of the `lock_method` setting, Dovecot always uses dotlocks for some locks.

#### Clock Synchronization¶

Run ntpd on each node to make sure clocks are synchronized. If the clocks are more than one second apart from each others and multiple computers access the same mailbox simultaneously, you may get errors from Dovecot.

#### Caching¶

Your cluster will probably perform better if users are usually redirected to the same server. This is because the mailbox may already be cached in the memory and it may also reduce the traffic between the clusterfs nodes. You can use [Dovecot Director](https://doc.dovecot.org/2.3/admin_manual/director/dovecotdirector/#dovecot-director) service to handle this. Or at the very least, make sure that your load balancer redirects connections from the same IP address to the same server.

#### FUSE / GlusterFS¶

FUSE caches dentries and file attributes internally. If you’re using multiple GlusterFS clients to access the same mailboxes, you’re going to have problems. Worst of these problems can be avoided by using NFS cache flushes, which just happen to work with FUSE as well:

```
mail_nfs_index = yes
mail_nfs_storage = yes
```

These probably don’t work perfectly.

#### Samba / CIFS¶

Dovecot’s temporary files may include a colon character `:` in their filename, which is not a permitted character when using CIFS.

Dovecot also renames the temporary files whilst holding a lock in them, which generates the error `Text file is busy`.

Cifs/smbfs is unlikely to work as a remote filesystem.

### Mailbox Format Pages¶

- [dbox Mailbox Format](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/dbox/)
- [Imapc Mailbox Format](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/imapc/)
- [Maildir Mailbox Format](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/maildir/)
- [Mbox Mailbox Format](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/mbox/)
- [Pop3c Mailbox Format](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/pop3c/)