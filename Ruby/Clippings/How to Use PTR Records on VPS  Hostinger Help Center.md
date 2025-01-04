---
title: How to Use PTR Records on VPS | Hostinger Help Center
source: https://support.hostinger.com/en/articles/4805528-how-to-use-ptr-records-on-vps
author: 
published: 
created: 2024-12-31
description: Using PTR record on VPS at Hostinger
tags:
  - clippings
  - email
  - howto
  - hostinger
related:
  - "[[hostinger]]"
  - "[[email]]"
  - "[[PTR record]]"
---
How to Use PTR Records on [[VPS]]

## What is a PTR Record?

PTR (Pointer) records are a type of DNS record used to **map an IP address to a domain name** in a reverse fashion compared to A records. While A records link domain names to IP addresses, PTR records perform the opposite task by associating IP addresses with their corresponding domain names.

PTR records are mainly used for a specific internet function known as **reverse DNS lookup**. This process is commonly used for security purposes, email verification, and network diagnostics.

## How to Add a PTR Record

To manage PTR records on your VPS, follow these steps:

## Step 1 - Preparations

First, make sure that **the domain** is pointing to your VPS by **A record**. You can find the IP address of your VPS at the top of the **[VPS information](https://support.hostinger.com/en/articles/5139756-how-to-find-your-vps-ip-address)** tab. Go to your domain's DNS Zone, according to its nameservers to verify it:

If you made any changes to the domain's records, wait up to 24 hours for the **[propagation](https://support.hostinger.com/en/articles/4146975-what-is-dns-propagation)** to be completed, then proceed to the next step.

## Step 2 - Set the PTR Record

Unlike **A records**, which are created on the domain's DNS Zone, PTR records should be **created on the server**. Open the **[VPS](https://hpanel.hostinger.com/servers/)** section of your hPanel, select your server, and open the **Settings** page:

[![](https://downloads.intercomcdn.com/i/o/894889834/9ebe6f26b85a745694f7a03b/vps-settings-en.png?expires=1735668000&signature=7fc7e8253df28da623a36c343a5e87c14165252c60ac4e800190081569fe538a&req=fCkjHsF3lYJbFb4f3HP0gMFB6ZMDVs9n%2BCd%2F6X2pQjREgIs%2BhQt296SRXD0V%0Apq%2BbFDhCrMJKopTqfQ%3D%3D%0A)](https://downloads.intercomcdn.com/i/o/894889834/9ebe6f26b85a745694f7a03b/vps-settings-en.png?expires=1735668000&signature=7fc7e8253df28da623a36c343a5e87c14165252c60ac4e800190081569fe538a&req=fCkjHsF3lYJbFb4f3HP0gMFB6ZMDVs9n%2BCd%2F6X2pQjREgIs%2BhQt296SRXD0V%0Apq%2BbFDhCrMJKopTqfQ%3D%3D%0A)

Go to the **IP address tab**, and click on **Set PTR record** next to the IPv4 or IPv6 address of your server according to your requirements.

On the pop-up window that will appear, enter the **PTR record name**, that is, the name of your domain, and click on **Save**. Once **[propagation](https://support.hostinger.com/en/articles/4146975-what-is-dns-propagation)** is completed, your PTR record will be fully operational.

If you need to **remove** an existing PTR record, you can do so in the same section by clicking on **Delete**:

[![The IP address section of VPS Settings showing how to delete a PTR record](https://downloads.intercomcdn.com/i/o/417856972/17cf58587e387ab82d45af5d/image1.png?expires=1735668000&signature=507f17a439f285bd3e6c9aab2e61dd75a08ab7075a833ca46c9e8feb9fffec25&req=cCEgHsx4lIZdFb4f3HP0gBc3Nvq0dAIyCr3%2BR5T1xZ1yHojcb29fP4j7Z4E1%0APmY3A04cNCEup%2FZNjQ%3D%3D%0A)](https://downloads.intercomcdn.com/i/o/417856972/17cf58587e387ab82d45af5d/image1.png?expires=1735668000&signature=507f17a439f285bd3e6c9aab2e61dd75a08ab7075a833ca46c9e8feb9fffec25&req=cCEgHsx4lIZdFb4f3HP0gBc3Nvq0dAIyCr3%2BR5T1xZ1yHojcb29fP4j7Z4E1%0APmY3A04cNCEup%2FZNjQ%3D%3D%0A)

Deleting a PTR record will allow you to set a new one, for example, if you change your domain name.

---

Related Articles

[

How to point a domain to your VPS

](https://support.hostinger.com/en/articles/1583227-how-to-point-a-domain-to-your-vps)[

Where to find Hostinger nameservers

](https://support.hostinger.com/en/articles/1583247-where-to-find-hostinger-nameservers)[

How to point a domain to Hostinger

](https://support.hostinger.com/en/articles/1863967-how-to-point-a-domain-to-hostinger)[

How to Manage MX Records

](https://support.hostinger.com/en/articles/4443666-how-to-manage-mx-records)[

How to manage AAAA records

](https://support.hostinger.com/en/articles/8899705-how-to-manage-aaaa-records)