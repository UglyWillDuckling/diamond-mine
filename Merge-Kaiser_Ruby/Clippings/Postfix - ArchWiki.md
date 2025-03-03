---
title: Postfix - ArchWiki
source: https://wiki.archlinux.org/title/Postfix
author: 
published: 
created: 2025-02-27
description: 
tags:
  - howto
---
[Postfix](https://en.wikipedia.org/wiki/Postfix_\(software\) "wikipedia:Postfix (software)") is a [mail transfer agent](https://wiki.archlinux.org/title/Mail_transfer_agent "Mail transfer agent") that according to [its website](http://www.postfix.org/):

attempts to be fast, easy to administer, and secure, while at the same time being sendmail compatible enough to not upset existing users. Thus, the outside has a sendmail-ish flavor, but the inside is completely different.

This article builds upon [Mail server](https://wiki.archlinux.org/title/Mail_server "Mail server"). The goal of this article is to setup Postfix and explain what the basic configuration files do. There are instructions for setting up local system user-only delivery and a link to a guide for virtual user delivery.

## Installation

[Install](https://wiki.archlinux.org/title/Install "Install") the [postfix](https://archlinux.org/packages/?name=postfix) package.

## Configuration

See [Postfix Basic Configuration](http://www.postfix.org/BASIC_CONFIGURATION_README.html). Configuration files are in `/etc/postfix` by default. The two most important files are:

- `master.cf`, defines what Postfix services are enabled and how clients connect to them, see [master(5)](https://man.archlinux.org/man/master.5)
- `main.cf`, the main configuration file, see [postconf(5)](https://man.archlinux.org/man/postconf.5)

Configuration changes need a `postfix.service` [reload](https://wiki.archlinux.org/title/Reload "Reload") or run `postfix reload` in order to take effect.

### Aliases

See [aliases(5)](https://man.archlinux.org/man/postfix/aliases.5).

You can specify aliases (also known as forwarders) in `/etc/postfix/aliases`.

You should map all mail addressed to *root* to another account since it is not a good idea to read mail as root.

Uncomment the following line, and change `you` to a real account.

```
root: you
```

Once you have finished editing `/etc/postfix/aliases` you must run the postalias command:

```
 # postalias /etc/postfix/aliases
```

For later changes you can use:

```
 # newaliases
```

**Tip:** Alternatively you can create the file `~/.forward`, e.g. `/root/.forward` for root. Specify the user to whom root mail should be forwarded, e.g. *user@localhost*.

```
/root/.forward
```
```
user@localhost
```

### Local mail

To only deliver mail to local system users (that are in `/etc/passwd`) update `/etc/postfix/main.cf` to reflect the following configuration. Uncomment, change, or add the following lines:

```
myhostname = localhost
mydomain = localdomain
mydestination = $myhostname, localhost.$mydomain, localhost
inet_interfaces = $myhostname, localhost
mynetworks_style = host
default_transport = error: outside mail is not deliverable
```

All other settings may remain unchanged. After setting up the above configuration file, you may wish to set up some [#Aliases](https://wiki.archlinux.org/title/#Aliases) and then [#Start Postfix](https://wiki.archlinux.org/title/#Start_Postfix).

### Virtual mail

Virtual mail is mail that does not map to a user account (`/etc/passwd`).

#### Virtual aliases

Virtual aliases are used to rewrite the destination addresses for all local, virtual and remote destinations. This can be used to rewrite the destination address for a single recipient, or an entire domain.

##### Virtual address aliases

Set up a virtual alias for a single address.

Enable the virtual alias table:

```
/etc/postfix/main.cf
```
```
virtual_alias_maps = lmdb:/etc/postfix/virtual
```

Populate the virtual alias table:

```
/etc/postfix/virtual
```
```
user@domain address
```

Rebuild the index file:

```
# postmap /etc/postfix/virtual
```

[Restart](https://wiki.archlinux.org/title/Restart "Restart") `postfix.service`.

### Check configuration

Run the `postfix check` command. It should output anything that you might have done wrong in a configuration file.

To see all of your configs, type `postconf`. To see how you differ from the defaults, try `postconf -n`.

## Start Postfix

**Note:** You must run `newaliases` at least once for Postfix to run, even if you did not set up any [#Aliases](https://wiki.archlinux.org/title/#Aliases).

[Start/enable](https://wiki.archlinux.org/title/Start/enable "Start/enable") the `postfix.service`.

## TLS

For more information, see [Postfix TLS Support](http://www.postfix.org/TLS_README.html).

### Secure SMTP (sending)

By default, Postfix/sendmail will not send email encrypted to other SMTP servers. To use TLS when available, add the following line to `main.cf`:

```
/etc/postfix/main.cf
```
```
smtp_tls_security_level = may
```

To *enforce* TLS (and fail when the remote server does not support it), change `may` to `encrypt`. Note, however, that this violates [RFC:2487](https://tools.ietf.org/html/rfc2487 "rfc:2487") if the SMTP server is publicly referenced.

### Secure SMTP (receiving)

**Warning:** If you deploy [TLS](https://en.wikipedia.org/wiki/TLS "wikipedia:TLS"), be sure to follow [weakdh.org's guide](https://weakdh.org/sysadmin.html) to prevent FREAK/Logjam. Since mid-2015, the default settings have been safe against [POODLE](https://en.wikipedia.org/wiki/POODLE "wikipedia:POODLE"). For more information see [Server-side TLS](https://wiki.archlinux.org/title/Server-side_TLS "Server-side TLS").

By default, Postfix will not accept secure mail.

You need to [obtain a certificate](https://wiki.archlinux.org/title/Obtain_a_certificate "Obtain a certificate"). Point Postfix to your TLS certificates by adding the following lines to `main.cf`:

```
/etc/postfix/main.cf
```
```
smtpd_tls_security_level = may
smtpd_use_tls = yes
smtpd_tls_cert_file = /path/to/cert.pem
smtpd_tls_key_file = /path/to/key.pem
```

There are two ways to accept secure mail. STARTTLS over SMTP (port 587 (also called "submission" port)) and SMTPS (port 465 (also called "submissions" port). The latter was previously deprecated but was reinstated by [RFC:8314](https://tools.ietf.org/html/rfc8314 "rfc:8314").

To enable STARTTLS over SMTP (port 587), uncomment the following lines in `master.cf`:

```
/etc/postfix/master.cf
```
```
submission inet n       -       n       -       -       smtpd
  -o syslog_name=postfix/submission
  -o smtpd_tls_security_level=encrypt
  -o smtpd_sasl_auth_enable=yes
  -o smtpd_tls_auth_only=yes
  -o smtpd_reject_unlisted_recipient=no
#  -o smtpd_client_restrictions=$mua_client_restrictions
#  -o smtpd_helo_restrictions=$mua_helo_restrictions
#  -o smtpd_sender_restrictions=$mua_sender_restrictions
  -o smtpd_relay_restrictions=
  -o smtpd_recipient_restrictions=permit_sasl_authenticated,reject
  -o milter_macro_daemon_name=ORIGINATING
```

The `smtpd_*_restrictions` options remain commented because `$mua_*_restrictions` are not defined in main.cf by default. If you do decide to set any of `$mua_*_restrictions`, uncomment those lines too.

To enable SMTPS (port 465), uncomment the following lines in `master.cf`:

```
/etc/postfix/master.cf
```
```
submissions     inet  n       -       n       -       -       smtpd
  -o syslog_name=postfix/smtps
  -o smtpd_tls_wrappermode=yes
  -o smtpd_sasl_auth_enable=yes
  -o smtpd_reject_unlisted_recipient=no
#  -o smtpd_client_restrictions=$mua_client_restrictions
#  -o smtpd_helo_restrictions=$mua_helo_restrictions
#  -o smtpd_sender_restrictions=$mua_sender_restrictions
  -o smtpd_relay_restrictions=
  -o smtpd_relay_restrictions=permit_sasl_authenticated,reject
  -o milter_macro_daemon_name=ORIGINATING
```

The rationale surrounding the `$smtpd_*_restrictions` lines is the same as above.

## Tips and tricks

### Blacklist incoming emails

Manually blacklisting incoming emails by sender address can easily be done with Postfix.

Create and open `/etc/postfix/blacklist_incoming` file and append sender email address:

```
user@example.com REJECT
```

Then use the `postmap` command to create a database:

```
# postmap lmdb:blacklist_incoming
```

Add the following code before the first permit rule in `main.cf`:

```
smtpd_recipient_restrictions = check_sender_access lmdb:/etc/postfix/blacklist_incoming
```

Finally [restart](https://wiki.archlinux.org/title/Restart "Restart") `postfix.service`.

### Hide the sender's IP and user agent in the Received header

This is a privacy concern mostly, if you use Thunderbird and send an email. The received header will contain your LAN and WAN IP and info about the email client you used. (Original source: [AskUbuntu](https://askubuntu.com/questions/78163/when-sending-email-with-postfix-how-can-i-hide-the-senders-ip-and-username-in)) What we want to do is remove the Received header from outgoing emails. This can be done by the following steps:

Add the following line to `main.cf`:

```
smtp_header_checks = regexp:/etc/postfix/smtp_header_checks
```

Create `/etc/postfix/smtp_header_checks` with this content:

```
/^Received: .*/     IGNORE
/^User-Agent: .*/   IGNORE
```

Finally, [restart](https://wiki.archlinux.org/title/Restart "Restart") `postfix.service`.

### Postfix in a chroot jail

Postfix is not put in a chroot jail by default. The Postfix documentation [\[1\]](http://www.postfix.org/BASIC_CONFIGURATION_README.html#chroot_setup) provides details about how to accomplish such a jail. The steps are outlined below and are based on the chroot-setup script provided in the Postfix source code.

First, go into the `master.cf` file in the directory `/etc/postfix` and change all the chroot entries to 'yes' (y) except for the services `qmgr`, `proxymap`, `proxywrite`, `local`, and `virtual`

Second, create two functions that will help us later with copying files over into the chroot jail (see last step)

```
CP="cp -p"
```
```
cond_copy() {
  # find files as per pattern in $1
  # if any, copy to directory $2
  dir=$(dirname "$1")
  pat=$(basename "$1")
  lr=$(find "$dir" -maxdepth 1 -name "$pat")
  if test ! -d "$2" ; then exit 1 ; fi
  if test "x$lr" != "x" ; then $CP $1 "$2" ; fi
}
```

Next, make the new directories for the jail:

```
set -e
umask 022
```
```
POSTFIX_DIR=${POSTFIX_DIR-/var/spool/postfix}
cd ${POSTFIX_DIR}
```
```
mkdir -p etc lib usr/lib/zoneinfo
test -d /lib64 && mkdir -p lib64
```

Find the localtime file

```
lt=/etc/localtime
if test ! -f $lt ; then lt=/usr/lib/zoneinfo/localtime ; fi
if test ! -f $lt ; then lt=/usr/share/zoneinfo/localtime ; fi
if test ! -f $lt ; then echo "cannot find localtime" ; exit 1 ; fi
rm -f etc/localtime
```

Copy localtime and some other system files into the chroot's etc

```
$CP -f $lt /etc/services /etc/resolv.conf /etc/nsswitch.conf etc
$CP -f /etc/host.conf /etc/hosts /etc/passwd etc
ln -s -f /etc/localtime usr/lib/zoneinfo
```

Make sure resolv.conf is owned by root:

```
chown root /var/spool/postfix/etc/resolv.conf
```

Copy required libraries into the chroot using the previously created function `cond_copy`

```
cond_copy '/usr/lib/libnss_*.so*' lib
cond_copy '/usr/lib/libresolv.so*' lib
cond_copy '/usr/lib/libdb.so*' lib
```

And do not forget to [reload](https://wiki.archlinux.org/title/Reload "Reload") Postfix.

### DANE (DNSSEC)

#### Resource Record

**Warning:** This is not a trivial section. Be aware that you make sure you know what you are doing. You better read [Common Mistakes](https://dane.sys4.de/common_mistakes) before.

[DANE](https://wiki.archlinux.org/title/DANE "DANE") supports several types of records, however not all of them are suitable in Postfix.

Certificate usage 0 is unsupported, 1 is mapped to 3 and 2 is optional, thus it is recommendet to publish a "3" record. More on [Resource Records](https://wiki.archlinux.org/title/DANE#Resource_Record "DANE").

#### Configuration

![](https://wiki.archlinux.org/images/1/19/Tango-view-fullscreen.svg)**This article or section needs expansion.**

**Reason:** What does *tempfail* mean? (Discuss in [Talk:Postfix](https://wiki.archlinux.org/title/Talk:Postfix))

Opportunistic DANE is configured this way:

```
/etc/postfix/main.cf
```
```
smtpd_use_tls = yes
smtp_dns_support_level = dnssec
smtp_tls_security_level = dane
```
```
/etc/postfix/master.cf
```
```
dane       unix  -       -       n       -       -       smtp
  -o smtp_dns_support_level=dnssec
  -o smtp_tls_security_level=dane
```

To use per-domain policies, e.g. opportunistic DANE for example.org and mandatory DANE for example.com, use something like this:

```
/etc/postfix/main.cf
```
```
indexed = ${default_database_type}:${config_directory}/

# Per-destination TLS policy
#
smtp_tls_policy_maps = ${indexed}tls_policy

# default_transport = smtp, but some destinations are special:
#
transport_maps = ${indexed}transport
```
```
transport
```
```
example.com dane
example.org dane
```
```
tls_policy
```
```
example.com dane-only
```

**Note:** For global mandatory DANE, change `smtp_tls_security_level` to `dane-only`. Be aware that this makes Postfix tempfail (respond with a `4.X.X` error code) on all deliveries that do not use DANE at all!

Full documentation is found [here](http://www.postfix.org/TLS_README.html#client_tls_dane).

- **[PostfixAdmin](https://wiki.archlinux.org/title/PostfixAdmin "PostfixAdmin")** — A web-based administrative interface for Postfix.

[https://postfixadmin.sourceforge.net/](https://postfixadmin.sourceforge.net/) || [postfixadmin](https://archlinux.org/packages/?name=postfixadmin)

### Postgrey

![](https://wiki.archlinux.org/images/5/53/Tango-edit-clear.svg)**This article or section needs language, wiki syntax or style improvements. See [Help:Style](https://wiki.archlinux.org/title/Help:Style "Help:Style") for reference.**

[Postgrey](https://postgrey.schweikert.ch/) can be used to enable [greylisting](https://en.wikipedia.org/wiki/Greylisting_\(email\) "wikipedia:Greylisting (email)") for a Postfix mail server.

#### Installation

[Install](https://wiki.archlinux.org/title/Install "Install") the [postgrey](https://archlinux.org/packages/?name=postgrey) package. To get it running quickly edit the Postfix configuration file and add these lines:

```
/etc/postfix/main.cf
```
```
smtpd_recipient_restrictions =
  check_policy_service inet:127.0.0.1:10030
```

Then [start/enable](https://wiki.archlinux.org/title/Start/enable "Start/enable") the `postgrey` service. Afterwards, reload the `postfix` service. Now greylisting should be enabled.

#### Configuration

Configuration is done by [extending the unit](https://wiki.archlinux.org/title/Extend_the_unit "Extend the unit") `postgrey.service`.

#### Whitelisting

To add automatic whitelisting (successful deliveries are whitelisted and do not have to wait any more), add the `--auto-whitelist-clients=*N*` option and replace `*N*` by a suitably small number (or leave it at its default of 5).

```
/etc/systemd/system/postgrey.service.d/override.conf
```
```
[Service]
ExecStart=
ExecStart=/usr/bin/postgrey --inet=127.0.0.1:10030 \
       --pidfile=/run/postgrey/postgrey.pid \
       --group=postgrey --user=postgrey \
       --daemonize \
       --greylist-text="Greylisted for %%s seconds" \
       --auto-whitelist-clients
```

To add your own list of whitelisted clients in addition to the default ones, create the file `/etc/postfix/postgrey_whitelist_clients.local` and enter one host or domain per line, then restart `postgrey.service` so the changes take effect.

#### Troubleshooting

If you specify `--unix=/path/to/socket` and the socket file is not created ensure you have removed the default `--inet=127.0.0.1:10030` from the service file.

For a full documentation of possible options see `perldoc postgrey`.

### SpamAssassin

This section describes how to integrate [SpamAssassin](https://wiki.archlinux.org/title/SpamAssassin "SpamAssassin").

#### SpamAssassin stand-alone generic setup

**Note:** If you want to combine SpamAssassin and Dovecot Mail Filtering, ignore the next two lines and continue further down instead.

Edit `/etc/postfix/master.cf` and add the content filter under smtp.

```
smtp      inet  n       -       n       -       -       smtpd
  -o content_filter=spamassassin
```

Also add the following service entry for SpamAssassin

```
spamassassin unix -     n       n       -       -       pipe
  flags=R user=spamd argv=/usr/bin/vendor_perl/spamc -e /usr/bin/sendmail -oi -f ${sender} ${recipient}
```

Now you can [start](https://wiki.archlinux.org/title/Start "Start") and [enable](https://wiki.archlinux.org/title/Enable "Enable") `spamassassin.service`.

#### SpamAssassin combined with Dovecot LDA / Sieve (Mailfiltering)

Set up LDA and the Sieve-Plugin as described in [Dovecot#Sieve](https://wiki.archlinux.org/title/Dovecot#Sieve "Dovecot"). But ignore the last line `mailbox_command... `.

Instead add a pipe in `/etc/postfix/master.cf`:

```
 dovecot   unix  -       n       n       -       -       pipe
       flags=DRhu user=vmail:vmail argv=/usr/bin/vendor_perl/spamc -u spamd -e /usr/lib/dovecot/dovecot-lda -f ${sender} -d ${recipient}
```

And activate it in `/etc/postfix/main.cf`:

```
 virtual_transport = dovecot
```

Alternately, if you do not want to use virtual transports you can use the [mailbox\_command](http://www.postfix.org/postconf.5.html#mailbox_command). This runs with the local user and group, whereas the pipe runs with with the specified user using the `user` setting.

```
 mailbox_command = /usr/bin/vendor_perl/spamc -u spamd -e /usr/lib/dovecot/dovecot-lda -f "$SENDER" -a "$RECIPIENT"
```

#### SpamAssassin combined with Dovecot LMTP / Sieve

Set up the LMTP and Sieve as described in [Dovecot#Sieve](https://wiki.archlinux.org/title/Dovecot#Sieve "Dovecot").

Edit `/etc/dovecot/conf.d/90-plugin.conf` and add:

```
 sieve_before = /etc/dovecot/sieve.before.d/
 sieve_extensions = +vnd.dovecot.filter
 sieve_plugins = sieve_extprograms
 sieve_filter_bin_dir = /etc/dovecot/sieve-filter
 sieve_filter_exec_timeout = 120s #this is often needed for the long running spamassassin scans, default is otherwise 10s
```

Create the directory and put spamassassin in as a binary that can be ran by dovecot:

```
 # mkdir /etc/dovecot/sieve-filter
 # ln -s /usr/bin/vendor_perl/spamc /etc/dovecot/sieve-filter/spamc
```

Create a new file, `/etc/dovecot/sieve.before.d/spamassassin.sieve` which contains:

```
 require [ "vnd.dovecot.filter" ];
 filter "spamc" [ "-d", "127.0.0.1", "--no-safe-fallback" ];
```

Compile the sieve rules `spamassassin.svbin`:

```
 # cd /etc/dovecot/sieve.before.d
 # sievec spamassassin.sieve
```

Finally, [restart](https://wiki.archlinux.org/title/Restart "Restart") `dovecot.service`.

### Rule-based mail processing

With policy services one can easily finetune Postfix' behaviour of mail delivery. [postfwd](https://archlinux.org/packages/?name=postfwd) provides services to do so. This allows you to e.g. implement time-aware grey- and blacklisting of senders and receivers as well as [SPF](https://wiki.archlinux.org/title/SPF "SPF") policy checking.

Policy services are standalone services and connected to Postfix like this:

```
/etc/postfix/main.cf
```
```
smtpd_recipient_restrictions =
  ...
  check_policy_service unix:/run/policyd.sock
  check_policy_service inet:127.0.0.1:10040
```

Placing policy services at the end of the queue reduces load, as only legitimate mails are processed. Be sure to place it before the first permit statement to catch all incoming messages.

### Sender Policy Framework

To use the [Sender Policy Framework](https://wiki.archlinux.org/title/Sender_Policy_Framework "Sender Policy Framework") with Postfix, you can [install](https://wiki.archlinux.org/title/Install "Install") [python-spf-engine](https://aur.archlinux.org/packages/python-spf-engine/)<sup><small>AUR</small></sup>, [python-postfix-policyd-spf](https://aur.archlinux.org/packages/python-postfix-policyd-spf/)<sup><small>AUR</small></sup> or [postfix-policyd-spf-perl](https://aur.archlinux.org/packages/postfix-policyd-spf-perl/)<sup><small>AUR</small></sup>.

#### With spf-engine or python-postfix-policyd-spf

Edit `/etc/python-policyd-spf/policyd-spf.conf` to your needs. An extensively commented version can be found at `/etc/python-policyd-spf/policyd-spf.conf.commented`. Pay some extra attention to the HELO check policy, as standard settings strictly reject HELO failures.

In `main.cf` file, add a timeout for the policyd:

```
/etc/postfix/main.cf
```
```
policy-spf_time_limit = 3600s
```

Then add a transport

```
/etc/postfix/master.cf
```
```
policy-spf  unix  -       n       n       -       0       spawn user=nobody argv=/usr/bin/policyd-spf
```

Lastly you need to add the policyd to the `smtpd_recipient_restrictions`. To minimize load put it to the end of the restrictions but above any `reject_rbl_client` DNSBL line:

```
/etc/postfix/main.cf
```
```
smtpd_recipient_restrictions=
     ...
     permit_sasl_authenticated
     permit_mynetworks
     reject_unauth_destination
     check_policy_service unix:private/policy-spf
```

Now reload the `postfix` service.

You can test your setup with the following:

```
/etc/python-policyd-spf/policyd-spf.conf
```
```
defaultSeedOnly = 0
```

#### With postfix-policyd-spf-perl

Do the same process with postfix as [with python-postfix-policyd-spf](https://wiki.archlinux.org/title/#With_spf-engine_or_python-postfix-policyd-spf), but with the following differences:

Timeout for the policyd in `main.cf` file:

```
/etc/postfix/main.cf
```
```
policy_time_limit = 3600
```

Transport:

```
/etc/postfix/master.cf
```
```
policy  unix  -       n       n       -       0       spawn
     user=nobody argv=/usr/lib/postfix/postfix-policyd-spf-perl
```

Add the policyd to the `smtpd_recipient_restrictions`:

**Warning:** Specify `check_policy_service` after `reject_unauth_destination` or else your system can become an open relay.

```
/etc/postfix/main.cf
```
```
smtpd_recipient_restrictions=
     ...
     reject_unauth_destination
     check_policy_service unix:private/policy
     ...
```

### Sender Rewriting Scheme

To use the [Sender Rewriting Scheme](https://wiki.archlinux.org/title/Sender_Rewriting_Scheme "Sender Rewriting Scheme") with Postfix, [install](https://wiki.archlinux.org/title/Install "Install") [postsrsd](https://aur.archlinux.org/packages/postsrsd/)<sup><small>AUR</small></sup> and adjust the settings:

```
/etc/postsrsd/postsrsd.conf
```
```
domains = { "yourdomain.tld", "yournextdomain.tld", "yournextdomain.tld" }
unprivileged-user = "postsrsd"
```

Enable and start the daemon, making sure it runs after reboot as well. Then configure Postfix accordingly by tweaking the following lines:

```
/etc/postfix/main.cf
```
```
sender_canonical_maps = socketmap:unix:srs:forward
sender_canonical_classes = envelope_sender
recipient_canonical_maps = socketmap:unix:srs:reverse
recipient_canonical_classes = envelope_recipient, header_recipient
```

Restart Postfix and start forwarding mail.

## Troubleshooting

### Warning: "database /etc/postfix/\*.db is older than source file .."

If you get one or both warnings with [journalctl](https://wiki.archlinux.org/title/Journalctl "Journalctl"):

```
warning: database /etc/postfix/virtual.db is older than source file /etc/postfix/virtual
warning: database /etc/postfix/transport.db is older than source file /etc/postfix/transport
```

Then you can fix it by using these commands, depending on the messages you get:

```
postmap /etc/postfix/transport
postmap /etc/postfix/virtual
```

And [restart](https://wiki.archlinux.org/title/Restart "Restart") `postfix.service`.

### Host or domain name not found. Name service error for name=...

If you get the following warning with *journalctl*:

```
Host or domain name not found. Name service error for name=...
```

It could be that you are running Postfix in a `chroot` and `/etc/resolv.conf` is missing. If so, you can fix this by:

```
mkdir -p /var/spool/postfix/etc
cp /etc/resolv.conf /var/spool/postfix/etc/resolv.conf
```

And [restart](https://wiki.archlinux.org/title/Restart "Restart") `postfix.service`.

### error: require command: unknown Sieve capability \`vnd.dovecot.filter'

```
spamassassin: line 1: error: require command: unknown Sieve capability \`vnd.dovecot.filter'.
spamassassin: line 2: error: unknown command 'filter' (only reported once at first occurrence).
spamassassin: error: validation failed.
sievec(root): Fatal: failed to compile sieve script 'spamassassin.sieve'
```

If you get this error when running `sievec` after following [#SpamAssassin combined with Dovecot LMTP / Sieve](https://wiki.archlinux.org/title/#SpamAssassin_combined_with_Dovecot_LMTP_/_Sieve), replace `sieve_extensions` with `sieve_global_extensions` in `/etc/dovecot/sieve.before.d/spamassassin.sieve`.

[Restart](https://wiki.archlinux.org/title/Restart "Restart") `dovecot.service`.

## See also

- [Official documentation](http://www.postfix.org/documentation.html)
- [Postfix Ubuntu documentation](https://help.ubuntu.com/community/Postfix)
- [Virtual user mail system with Postfix, Dovecot and Roundcube](https://wiki.archlinux.org/title/Virtual_user_mail_system_with_Postfix,_Dovecot_and_Roundcube "Virtual user mail system with Postfix, Dovecot and Roundcube")