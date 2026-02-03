---
source: https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-on-ubuntu-20-04
author:
  - "[[Hanif Jetha and Mark Drake]]"
published: 2001-05-21
created: 2024-12-29
tags:
  - article
---
*A previous version of this tutorial was written by [Justin Ellingwood](https://www.digitalocean.com/community/users/jellingwood)*

### Introduction

[Postfix](http://www.postfix.org/) is a popular open-source [*Mail Transfer Agent*](https://en.wikipedia.org/wiki/Message_transfer_agent) (MTA) that can be used to route and deliver email on a Linux system. It is estimated that around 25% of public mail servers on the internet run Postfix.

In this guide, you’ll learn how to install and configure Postfix on an Ubuntu 20.04 server. Then, you’ll test that Postfix is able to correctly route mail by installing `s-nail`, a [*Mail User Agent*](https://en.wikipedia.org/wiki/Email_client) (MUA), also known as an *email client*.

Note that the goal of this tutorial is to help you get Postfix up and running quickly with only some bare-bones email functionality. You won’t have a full featured email server by the end of this guide, but you will have some of the foundational components of such a setup to help you get started.

## Prerequisites

Setting up and maintaining your own mail server is complicated and time-consuming. For most users, it’s more practical to instead rely on a paid mail service. If you’re considering running your own mail server, we encourage you to review [this article on why you may not want to do so](https://www.digitalocean.com/community/tutorials/why-you-may-not-want-to-run-your-own-mail-server).

If you’re sure you want to follow this guide to install and configure Postfix, then you must first have the following:

- A server running Ubuntu 20.04 to function as your Postfix mail server. This server should have a non-root user with `sudo` privileges and a firewall configured with UFW. You can follow our [Ubuntu 20.04 initial server setup guide](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04) to set this up.
- A Fully Qualified Domain Name pointed at your Ubuntu 20.04 server. You can find help on setting up your domain name with DigitalOcean by following [our Domains and DNS Networking documentation](https://www.digitalocean.com/docs/networking/dns). Be aware that if you plan on accessing mail from an external location, you will need to make sure you have an MX record pointing to your mail server as well.

## Step 1 — Installing Postfix

Postfix is included in Ubuntu’s default repositories, so you can install it with APT.

To begin, update your local `apt` package cache:

Then install the `postfix` package with the following command. Note that here we pass the `DEBIAN_PRIORITY=low` environmental variable into this installation command. This will cause the installation process to prompt you to configure some additional options:

This installation process will open a series of interactive prompts. For the purposes of this tutorial, use the following information to fill in your prompts:

- **General type of mail configuration?**: For this, choose **Internet Site** since this matches our infrastructure needs.
- **System mail name**: This is the base domain used to construct a valid email address when only the account portion of the address is given. For instance, let’s say the hostname of your server is `mail.==example.com==`. You will likely want to set the system mail name to `==example.com==` so that, given the username `user1`, Postfix will use the address `user1@==example.com==`.
- **Root and postmaster mail recipient**: This is the Linux account that will be forwarded mail addressed to `root@` and `postmaster@`. Use your primary account for this. In this example case, **sammy**.
- **Other destinations to accept mail for**: This defines the mail destinations that this Postfix instance will accept. If you need to add any other domains that this server will be responsible for receiving, add those here. Otherwise, the default will be sufficient.
- **Force synchronous updates on mail queue?**: Since you are likely using a journaled filesystem, accept **No** here.
- **Local networks**: This is a list of the networks for which your mail server is configured to relay messages. The default will work for most scenarios. If you choose to modify it, though, make sure to be very restrictive in regards to the network range.
- **Mailbox size limit**: This can be used to limit the size of messages. Setting it to `0` disables any size restriction.
- **Local address extension character**: This is the character that can be used to separate the regular portion of the address from an extension (used to create dynamic aliases). The default, `+` will work for this tutorial.
- **Internet protocols to use**: Choose whether to restrict the IP version that Postfix supports. For the purposes of this tutorial, pick **all**.

To be explicit, these are the settings used in this guide:

- **General type of mail configuration?**: **Internet Site**
- **System mail name**: `==example.com==` (not `==mail.example.com==`)
- **Root and postmaster mail recipient**: The username of your primary Linux account (**sammy** in our examples)
- **Other destinations to accept mail for**: `$myhostname, ==example.com==, ==mail.example.com==, ==localhost.example.com==, localhost`
- **Force synchronous updates on mail queue?**: **No**
- **Local networks**: `127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128`
- **Mailbox size limit**: `0`
- **Local address extension character**: `+`
- **Internet protocols to use**: **all**

**Note**: If you need to ever return to change these settings, you can do so by typing:

The prompts will be pre-populated with your previous responses.

When the installation process finishes, you’re ready to make a few updates to your Postfix configuration.

## Step 2 — Changing the Postfix Configuration

Now you can adjust some settings that the package installation process didn’t prompt you for. Many of Postfix’s configuration settings are defined in the `/etc/postfix/main.cf` file. Rather than editing this file directly, you can use Postfix’s `postconf` command to query or set configuration settings.

To begin, set the location for your non-root Ubuntu user’s mailbox. In this guide, we’ll use the [*Maildir*](https://en.wikipedia.org/wiki/Maildir) format, which separates messages into individual files that are then moved between directories based on user action. The alternative option that isn’t covered in this guide is the [*mbox*](https://en.wikipedia.org/wiki/Mbox) format, which stores all messages within a single file.

Set the `home_mailbox` variable to `Maildir/`. Later, you will create a directory structure under that name within your user’s home directory. Configure `home_mailbox` by typing:

Next, set the location of the `virtual_alias_maps` table, which maps arbitrary email accounts to Linux system accounts. Run the following command, which maps the table location to a hash database file named `/etc/postfix/virtual`:

Now that you’ve defined the location of the virtual maps file in your `main.cf` file, you can create the file itself and begin mapping email accounts to user accounts on your Linux system. Create the file with your preferred text editor; in this example, we’ll use `nano`:

List any addresses that you wish to accept email for, followed by a whitespace and the Linux user you’d like that mail delivered to.

For example, if you would like to accept email at `contact@==example.com==` and `admin@==example.com==` and would like to have those emails delivered to the **sammy** Linux user, you could set up your file like this:

/etc/postfix/virtual

```
contact@example.com sammy
admin@example.com sammy
```

After you’ve mapped all of the addresses to the appropriate server accounts, save and close the file. If you used `nano`, do this by pressing `CTRL + X`, `Y`, then `ENTER`.

Apply the mapping by typing:

Restart the Postfix process to be sure that all of your changes have been applied:

Assuming you followed the [prerequisite Initial Server Setup guide](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04), you will have configured a firewall with UFW. This firewall will block external connections to services on your server by default unless those connections are explicitly allowed, so you’ll have to add a firewall rule to allow an exception for Postfix.

You can allow connections to the service by typing:

With that, Postfix is configured and ready to accept external connections. However, you aren’t yet ready to test it out with a mail client. Before you can install a client and use it to interact with the mail being delivered to your server, you’ll need to make a few changes to your Ubuntu server’s setup.

## Step 3 — Installing the Mail Client and Initializing the Maildir Structure

In order to interact with the mail being delivered, this step will walk you through the process of installing the `s-nail` package. This is a feature-rich variant of the BSD `xmail` client which can handle the Maildir format correctly.

Before installing the client, though, it would be prudent to make sure your `MAIL` environment variable is set correctly. `s-nail` will look for this variable to figure out where to find mail for your user.

To ensure that the `MAIL` variable is set regardless of how you access your account — whether through `ssh`, `su`, `su -`, or `sudo`, for example — you’ll need to set the variable in the `/etc/bash.bashrc` file and add it to a file within `/etc/profile.d` to make sure it is set for all users by default.

To add the variable to these files, type:

To read the variable into your current session, source the `/etc/profile.d/mail.sh` file:

With that complete, install the `s-nail` email client with APT:

Before running the client, there are a few settings you need to adjust. Open the `/etc/s-nail.rc` file in your editor:

At the bottom of the file, add the following options:

/etc/s-nail.rc

```
. . .
set emptystart
set folder=Maildir
set record=+sent
```

Here’s what these lines do:

- `set emptystart`: allows the client to open even with an empty inbox
- `set folder=Maildir`: sets the `Maildir` directory to the internal `folder` variable
- `set record=+sent` creates a `sent` mbox file for storing sent mail within whichever directory is set as the `folder` variable, in this case `Maildir`

Save and close the file when you are finished. You’re now ready to initialize your system’s Maildir structure.

A quick way to create the Maildir structure within your home directory is to send yourself an email with the `s-nail` command. Because the `sent` file will only be available once the Maildir is created, you should disable writing to it for this initial email. Do this by passing the `-Snorecord` option.

Send the email by piping a string to the `s-nail` command. Adjust the command to mark your Linux user as the recipient:

**Note**: You *may* get the following response:

```
OutputCan't canonicalize "/home/sammy/Maildir"
```

This is normal and may only appear when sending this first message.

You can can check to make sure the directory was created by looking for your `~/Maildir` directory:

You will see the directory structure has been created and that a new message file is in the `~/Maildir/new` directory:

```
Output/home/sammy/Maildir/:
cur  new  tmp

/home/sammy/Maildir/cur:

/home/sammy/Maildir/new:
1463177269.Vfd01I40e4dM691221.mail.example.com

/home/sammy/Maildir/tmp:
```

Now that the directory structure has been created, you’re ready to test out the `s-nail` client by viewing the `init` message you sent and sending a message to an external email address.

## Step 4 — Testing the Client

To open the client, run the `s-nail` command:

In your console, you’ll see a rudimentary inbox with the `init` message waiting:

```
Outputs-nail version v14.9.15.  Type \`?' for help
"/home/sammy/Maildir": 1 message 1 new
>N  1 sammy@example.com     2020-05-19 15:40   14/392   init
```

Press `ENTER` to display the message:

```
Output[-- Message  1 -- 14 lines, 369 bytes --]:
From sammy@example.com Tue May 19 15:40:48 2020
Date: Tue, 19 May 2020 15:40:48 +0000
To: sammy@example.com
Subject: init
Message-Id: <20160513220749.A278F228D9@mail.example.com>
From: sammy@example.com

init
```

You can get back to the message list by typing `h`, and then `ENTER`:

```
Output>R  1 sammy@example.com     2020-05-19 15:40   14/392   init 
```

Notice that the message now has a state of `R`, indicating that it’s been read.

Since this message isn’t very useful, you can delete it by pressing `d`, and then `ENTER`:

To get back to the terminal, type `q` and then `ENTER`:

As a final test, check whether `s-nail` is able to correctly send email messages. To do this, you can pipe the contents of a text file into the `s-nail` process, like you did with the `init` message you sent in the previous step.

Begin by writing a test message in a text editor:

Inside, enter some text you’d like to send:

~/test\_message

```
Hello,

This is a test.  Please confirm receipt!
```

Save and close the file after writing your message.

Then, use the `cat` command to pipe the message to the `s-nail` process. You can do so with the following example, which uses these options:

- `-s`: This defines the subject line of the email message
- `-r`: An optional change to the “From:” field of the email. By default, the Linux user you are logged in as will be used to populate this field. The `-r` option allows you to override this with a valid address, such as one of those you defined in the `/etc/postfix/virtual` file. To illustrate, the following command uses `contact@example.com`

Also, be sure to change `==user==@==email.com==` to a valid email address which you have access to:

Then, navigate to the inbox for the email address to which you sent the message. You will see your message waiting there almost immediately.

**Note**: If the message isn’t in your inbox, it may have been delivered to your Spam folder.

You can view your sent messages within your `s-nail` client. Start the interactive client again:

From the email client, view your sent messages by typing:

You’ll see output like this:

```
Output+[/home/sammy/Maildir/]sent: 1 message 1 new
▸N  1 contact@example.com 2020-05-19 15:47   12/297   Test email subject line 
```

You can manage sent mail using the same commands you use for incoming mail.

## Conclusion

> [!NOTE] Title
> Contents

You now have Postfix configured on your Ubuntu 20.04 server. Managing email servers can be a tough task for new system administrators, but with this configuration, you should have enough MTA email functionality to get yourself started.