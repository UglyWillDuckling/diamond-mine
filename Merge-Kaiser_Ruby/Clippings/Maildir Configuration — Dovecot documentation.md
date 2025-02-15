---
title: Maildir Configuration — Dovecot documentation
source: https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/
author: 
published: 
created: 2025-01-04
description: 
tags:
  - docs
  - config
related:
  - "[[Dovecot]]"
---
See [Maildir](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/maildir/#maildir-mbox-format) for a technical description of how Dovecot has implemented Maildir support.

## Mail Location¶

Maildir exists almost always in `~/Maildir` directory. The mail location is specified with:

```
mail_location = maildir:~/Maildir
```

## Directory Layout¶

By default, Dovecot uses Maildir++ directory layout. This means that all mailboxes are stored in a single directory and prefixed with a dot. For example:

- Maildir/.folder/
- Maildir/.folder.subfolder/

If you want Maildirs to use hierarchical directories, such as:

- Maildir/folder/
- Maildir/folder/subfolder/

you’ll need to enable fs layout:

```
mail_location = maildir:~/Maildir:LAYOUT=fs
```

## Default `mail_location` Keys[¶](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#default-mail-location-keys "Permalink to this heading")

For Maildir, the default [Keys](https://doc.dovecot.org/2.3/configuration_manual/mail_location/#mail-location-settings-keys) are:

| Key | Default Value |
| --- | --- |
| `FULLDIRNAME` | <empty> |

## Control Files¶

Dovecot stores some Maildir metadata into two control files:

- `dovecot-uidlist` file contains IMAP UID <-> Maildir filename mapping
- `dovecot-keywords` file contains Maildir filename flag (a..z = 0..25) <-> keyword name mapping

Both of these files are described fully in [Maildir Mailbox Format](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/maildir/#maildir-mbox-format). The important thing to remember about them is that they shouldn’t be treated the same way as index files. Index files can be deleted and rebuilt without any side effects, but if you delete control files you’ll cause messages to get new UIDs and possibly lose keyword names.

If the messages get new UIDs, the IMAP clients will invalidate their local cache and download the messages all over again. If you do this for all the users, you could cause huge disk I/O bursts to your server.

Dovecot cannot currently handle not being able to write the control files, so it will cause problems with [filesystem quota](https://doc.dovecot.org/2.3/configuration_manual/quota/quota_fs/#quota-backend-fs). To avoid problems with this, you should place control files into a partition where quota isn’t checked. You can specify this by adding `:CONTROL=<path>` to `mail_location`:

```
mail_location = maildir:~/Maildir:CONTROL=/var/no-quota/%u
```

## Index Files¶

By default, index files are stored in the actual Maildirs.

See [Index Files](https://doc.dovecot.org/2.3/configuration_manual/mail_location/#mail-location-settings-index-files) for an explanation of how to change the index path. Example:

```
mail_location = maildir:~/Maildir:INDEX=/var/indexes/%u
```

## Optimizations¶

- [`maildir_copy_with_hardlinks = yes`](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_copy_with_hardlinks "core_setting-maildir_copy_with_hardlinks")
- [`maildir_stat_dirs = no`](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_stat_dirs "core_setting-maildir_stat_dirs")
- [`maildir_very_dirty_syncs = yes`](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_very_dirty_syncs "core_setting-maildir_very_dirty_syncs")

### Filesystem Optimizations¶

See [Maildir and Filesystems](https://doc.dovecot.org/2.3/admin_manual/mailbox_formats/maildir/#maildir-and-filesystems).

## Mailbox Directory Name¶

When using `LAYOUT=fs`, there is a potential for naming collisions between Maildir’s `new/`, `cur/`, and `tmp/` subdirectories, and mail folders of the same names.

For example, consider a mail folder `foo/bar`. Under `LAYOUT=fs`, data for this mail folder will be stored under Maildir’s usual three directories `~/Maildir/foo/bar/{new,cur,tmp}/`. If the user then tries to create a mail folder `foo/bar/new`, this would then imply that data should be stored in Maildir’s three directories `~/Maildir/foo/bar/new/{new,cur,tmp}/`. But this would overlap Maildir’s `new/` subdirectory of mail folder `foo/bar`.

This may not be a problem in many installations, but if a risk of collisions with Maildir’s three subdirectory names is perceived, then the `DIRNAME` parameter can be used. For example, if we specify mail location as:

```
mail_location = maildir:~/Maildir:LAYOUT=fs:DIRNAME=mAildir
```

then this will push Maildir’s `new/`, `cur/`, and `tmp/` subdirectories down into a subdirectory `mAildir/`, so a mail folder `foo/bar` would be stored at `~/Maildir/foo/bar/mAildir/{new,cur,tmp}/`. A mail folder `foo/bar/new` would be stored at `~/Maildir/foo/bar/new/mAildir/{new,cur,tmp}/`, which would then have no overlap with the mail folder `foo/bar`.

`DIRNAME` affects INBOX slightly differently. Without `DIRNAME`, INBOX will be stored at `~/Maildir/{new,cur,tmp}/`, but when `DIRNAME` is specified, we get an extra path component `INBOX/` immediately prior to the `DIRNAME` value, so in the example above INBOX would be stored at `~/Maildir/INBOX/mAildir/{new,cur,tmp}/`.

The value for `DIRNAME` should be chosen carefully so as to minimise the chances of clashing with mail folder names. In the example here, unusual upper/lower casing has been used.

## Multiple Namespaces pointing to INBOX¶

When there are multiple namespaces that point to the same INBOX namespace, `dovecot.list.index` can potentially keep fighting over whether INBOX exists or not.

For example:

```
mail_location = maildir:~/Maildir:LAYOUT=fs
namespace {
  inbox = yes
  prefix = INBOX/
  separator = /
  subscriptions = no
}
namespace {
  prefix =
  separator = /
  alias_for = INBOX/
  location = maildir:~/Maildir:LAYOUT=fs # Alias location
  subscriptions = yes
}
```

The solution is to disable `dovecot.list.index` for the alias namespace. In the above example, this is done by changing the “Alias location” line to:

```
location = maildir:~/Maildir:LAYOUT=fs:LISTINDEX=
```

## Settings¶

maildir\_broken\_filename\_sizes[¶](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_broken_filename_sizes "Permalink to this definition")

- Default: `no`
- Values: [Boolean](https://doc.dovecot.org/2.3/settings/types/#boolean)

If enabled, do not obtain a mail message’s physical size from the `S=<size>` data in the Maildir filename except when recalculating the Maildir++ quota.

maildir\_copy\_with\_hardlinks[¶](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_copy_with_hardlinks "Permalink to this definition")

- Default: `yes`
- Values: [Boolean](https://doc.dovecot.org/2.3/settings/types/#boolean)

If enabled, copying of a message is done with hard links whenever possible.

This makes the performance much better, and it’s unlikely to have any side effects. The only reason to disable this is if you’re using a filesystem where hard links are slow (e.g. HFS+).

maildir\_empty\_new[¶](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_empty_new "Permalink to this definition")

- Default: `no`
- Values: [Boolean](https://doc.dovecot.org/2.3/settings/types/#boolean)

Should mail messages always be moved from the `new/` directory to `cur/`, even when the `\Recent` flags aren’t being reset?

maildir\_stat\_dirs[¶](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_stat_dirs "Permalink to this definition")

- Default: `no`
- Values: [Boolean](https://doc.dovecot.org/2.3/settings/types/#boolean)

If enabled, don’t include non-directory files in a LIST response that begin with a dot. Thus, if disabled, Dovecot assumes that all the files beginning with a dot in the Maildir are Maildirs.

You shouldn’t have any non-directory files beginning with a dot in the Maildirs, but if you do you may need to set this to `yes`, in which case Dovecot needs to `stat()` each directory entry, which degrades the performance. Some filesystems (e.g. ext4) provide the directory/non-directory status for free without having to `stat()`. In those filesystems this setting is ignored.

maildir\_very\_dirty\_syncs[¶](https://doc.dovecot.org/2.3/configuration_manual/mail_location/Maildir/#core_setting-maildir_very_dirty_syncs "Permalink to this definition")

- Default: `no`
- Values: [Boolean](https://doc.dovecot.org/2.3/settings/types/#boolean)

If enabled (`yes`), Dovecot is assumed to be the only MUA that accesses Maildir directly, so the `cur/` directory is scanned only when its mtime changes unexpectedly or when the mail cannot otherwise be found.

If enabled and another process (or a Dovecot process which doesn’t update index files) does changes to `cur/` while the mailbox is simultaneously being modified by Dovecot, Dovecot may not notice those external changes. It is still safe to deliver new mails to `new/` using non-Dovecot software (except with [`mailbox_list_index`](https://doc.dovecot.org/2.3/settings/core/#core_setting-mailbox_list_index "core_setting-mailbox_list_index") = `yes`, changes aren’t noticed outside INBOX).