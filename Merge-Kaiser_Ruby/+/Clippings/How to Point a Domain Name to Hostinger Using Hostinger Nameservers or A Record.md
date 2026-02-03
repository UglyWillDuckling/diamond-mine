---
title: "How to Point a Domain Name to Hostinger Using Hostinger Nameservers or A Record"
source: "https://www.hostinger.com/tutorials/how-to-point-domain-to-hostinger"
author:
  - "[[Domantas G.]]"
published: 2019-11-14
created: 2024-12-22
description: "Learn how to point a domain to Hostinger nameservers: 1. Change the nameservers at the domain registrar 2. Point the domain via A record."
tags:
  - "clippings"
---
Oct 01, 2024

Domantas G. & Ignas R.

6min Read

![[~/×/62ef02c6bbc5ba725be3b3eb59028145_MD5.webp]]

Understanding how to direct a domain to Hostinger becomes crucial when you want us to [host your website](https://www.hostinger.com/tutorials/how-to-host-a-website) while keeping the domain registered elsewhere. It is also advisable to verify this configuration before transferring your domain away to minimize any potential website downtime.

This guide will present you with two methods to point your [domain](https://www.hostinger.com/domain-name-search) to Hostinger. The first option involves using **Hostinger nameservers**, while the second method utilizes **A records**. By following these steps, you can seamlessly integrate your domain with [Hostinger’s hosting services](https://www.hostinger.com/web-hosting), ensuring a smooth online experience for your website visitors.

**Important!** Before we start, take into account that [DNS changes](https://www.hostinger.com/tutorials/what-is-dns) can take up to **24 hours** to fully propagate worldwide.

![[~/×/ba9b0636b5c33aeb431a77b4b7c1aa32_MD5.webp]]

- [What Does Domain Pointing Mean?](https://www.hostinger.com/tutorials/#What_Does_Domain_Pointing_Mean "What Does Domain Pointing Mean?")
- [How to Point Your Domain to Hostinger – Video Tutorial](https://www.hostinger.com/tutorials/#How_to_Point_Your_Domain_to_Hostinger_%E2%80%93_Video_Tutorial "How to Point Your Domain to Hostinger – Video Tutorial")
- [How to Point a Domain Name to Hostinger Nameservers](https://www.hostinger.com/tutorials/#How_to_Point_a_Domain_Name_to_Hostinger_Nameservers "How to Point a Domain Name to Hostinger Nameservers")
- [Changing Domain Nameservers (Recommended Method)](https://www.hostinger.com/tutorials/#Changing_Domain_Nameservers_Recommended_Method "Changing Domain Nameservers (Recommended Method)")
- [Pointing a Domain Name via A Record](https://www.hostinger.com/tutorials/#Pointing_a_Domain_Name_via_A_Record "Pointing a Domain Name via A Record")
- [How to Point a Domain – FAQ](https://www.hostinger.com/tutorials/#How_to_Point_a_Domain_%E2%80%93_FAQ "How to Point a Domain – FAQ")
- [Why Is My Domain Not Pointing to Hostinger?](https://www.hostinger.com/tutorials/#Why_Is_My_Domain_Not_Pointing_to_Hostinger "Why Is My Domain Not Pointing to Hostinger?")
- [How Do I Point My GoDaddy Site to Hostinger?](https://www.hostinger.com/tutorials/#How_Do_I_Point_My_GoDaddy_Site_to_Hostinger "How Do I Point My GoDaddy Site to Hostinger?")
- [How Do I Check My DNS Pointing?](https://www.hostinger.com/tutorials/#How_Do_I_Check_My_DNS_Pointing "How Do I Check My DNS Pointing?")

## What Does Domain Pointing Mean?

  
When you point to a domain, you connect your domain name to the correct server that stores your website’s data. This way, you can connect with different service providers and have the optimal setup for your website.  

## How to Point Your Domain to Hostinger – Video Tutorial

In this Hostinger Academy video, you will learn how to point a domain name to a new host from any domain registrar.

![](https://www.youtube.com/watch?v=UAsYeTL8cZc)

![[~/×/bea472b6596f32190d7a3e485d235107_MD5.jpg]]

Subscribe For more educational videos! Hostinger Academy

## How to Point a Domain Name to Hostinger Nameservers

You can easily [find Hostinger’s nameservers](https://support.hostinger.com/en/articles/1583247-where-can-i-find-hostinger-nameservers) on hPanel. They are as follows:

```
ns1.dns-parking.com
ns2.dns-parking.com
```

#### Pro Tip

For DNS to resolve correctly, make sure that **the domain is added to a hosting plan first** before pointing it anywhere else. This will ensure that the domain will have an active DNS zone.

You should use these nameservers to point your domain to [[Hostinger]]. There are two ways to do so:

- **Changing the nameservers to your domain name registrar.** This method is recommended since your DNS zone will be automatically configured to match the hosting’s IP address. Plus, it allows you to transfer the control of your domain settings to Hostinger’s [hPanel](https://www.hostinger.com/tutorials/hpanel-tutorial), making management convenient.
- **Pointing the domain name via an [[A Record]]**. This method requires you to change 
 the [[IP]] address connected to the DNS records. That way, your domain control stays in the [[registrar]]. This procedure is only recommended if you’re sure the IP address will be static. Remember that with this method, you must create and [check a new A record](https://www.hostinger.com/tutorials/how-to-check-if-domain-a-record-is-pointed-correctly) each time you make a subdomain.

**Important!** This guide shows how to point to a domain name if it’s **NOT** registered with Hostinger. For a general tutorial on pointing a domain name to another provider, check out our tutorial on [How to Change Domain Nameservers](https://www.hostinger.com/tutorials/how-to-change-domain-nameservers).

### Changing Domain Nameservers (Recommended Method)

The process of [changing nameservers](https://www.hostinger.com/tutorials/how-to-change-domain-nameservers) on various registrars is quite similar. Here’s what you need to do to point your domain name to Hostinger:

1. Find Hostinger’s nameservers by accessing the hPanel. You can do this by opening [hPanel’s **DNS Zone Editor**](https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor) and entering **“ns”** into the search bar. We use two nameservers to ensure stability and maximum connectivity. So, if one nameserver fails, the other will resolve the requests.

![[~/×/1fd00c0f944d838bf7391d6a87b04c50_MD5.webp]]

2. All nameservers correspond to an **IP address**, which you can locate by opening the **Details** section on hPanel. While in most cases you only need the names, some registrars may require the IP as well:

```
ns1.dns-parking.com (162.159.24.201)
ns2.dns-parking.com (162.159.25.42)
```

3. Log in to your domain registrar’s control panel. If you need to remember the name of the registrar’s company, use [WHOIS lookup](https://www.hostinger.com/whois).
4. Search for your domain registrar’s own **DNS Zone Editor.** However, depending on the registrar, it can be named differently. Common names include **“DNS Editor,” “Manage DNS Settings,” “Change Nameservers,”** or **DNS** **Details**.
5. Delete all values (if any) from the nameserver fields and replace them with Hostinger’s nameservers. Save your changes.
6. It might take **up to 24 hours** for DNS to fully propagate worldwide. However, another option is to edit the nameservers via the dedicated nameservers section.

**Important!** It’s **NOT** recommended to edit the NS records directly in the DNS zone. We highly suggest making changes in a dedicated NS section instead. However, if the registrar doesn’t have such a section, proceed with the changes.

### Pointing a Domain Name via [[A Record]]

Alternatively, if you want to keep on managing the DNS zone via the original registrar, you can opt for the A record option.

**Step 1: Changing A Records**

**A Record** maps a domain name to its appropriate [[IP]] address.
Therefore, you can modify these records by replacing the old IP address with Hostinger’s nameservers to point your domain name correctly.

In most cases, you must create <mark style="background: #FFB86CA6;">two</mark> A records for your domain name – one with the **www subdomain** and one without.

For instance, if you have a domain named **domain.[tld](https://www.hostinger.com/tutorials/what-is-tld)** and want to point it to **185.185.185.185** as its IP address, you need to create A Record entries that look similar to the image below.

![[~/×/33ddb161a08908e10760eb2ba4e0df59_MD5.webp]]

**Important!** It’s also possible that your **[[www]]** [[subdomain]] is pointed to the **[[CNAME record|CNAME]]** (an <mark style="background: #FFF3A3A6;">alias</mark>) record. In that case, you only have to change the [[A Record]] for your root domain name.

- **Name/Host** – the domain or the subdomain you want to point to. Some registrars use the **“@”** symbol instead of a name to represent the root domain.
- **[[TTL]]** – is short for **time-to-live**. It determines how long the server caches DNS-related information before refreshing it. The default value is usually **14,400 seconds**.
- **Type** – the record type.
- **Record/Address** – the target IPv4 address.

**Step 2: Changing MX Record for Email (<mark style="background: #ABF7F7A6;">Optional</mark>)**

**Important!**Changing MX records is **OPTIONAL**. This step is only required if you also want to use Hostinger’s email services.

To use a different email service, [update the MX records](https://support.hostinger.com/en/articles/4443666-how-to-manage-mx-records) on your DNS zone at Hostinger with your email provider’s information. Make sure to do this after the nameserver change has fully propagated.

The **MX record** specifies mail servers that handle incoming emails. To use Hostinger servers to receive emails sent to your domain, you need to change your domain’s MX records.

At Hostinger, the MX records can also be found in the **DNS Zone Editor**.

![[~/×/b56f7f85fd5e79418baa11ec2b33177e_MD5.webp]]

Take note of the mail server’s address. Then, open your domain’s MX record and replace the old mail server:

- **Name** – **“@”** symbol should be used as your domain name.
- **Priority** – if you have more than one server, this field determines the priority of each server. The lowest number represents the highest priority. We recommend sticking with **“5”** or **“10”** priority.
- **Type** – you should select **MX** as your record type here.
- **Address/Points to** – destination/address of the server responsible for receiving emails. Hostinger’s default MX records are:

```
mx1.hostinger.com
mx2.hostinger.com
```

#### Pro Tip

Hostinger offers **free email** and a **30-day money-back guarantee** for all hosting plans. Take advantage of the latter to find the best hosting type that best fits your needs.

**Step 3: Changing AAAA Record (Optional)**

Unlike an A record, which maps the IPv4 of your hosting server to a domain, an AAAA record maps the IPv6 address.

If you are an advanced user and want to point your domain via AAAA and A records, proceed with the instructions below. However, remember that your hosting will work without any issues, even with an A record only.

At Hostinger, AAAA records can be found in the **DNS Zone Editor**.

![[~/×/2d38635b6cce2fdfc48abaaa0b05f7b6_MD5.webp]]

Fill in the values that look similar to the ones shown above. Each field stands for:

- **Name/Host** – the domain or the subdomain you want to point to. Depending on the registrar, you can use the **“@”** symbol or the root domain name.
- **TTL** – is short for time-to-live, and it determines how long the server caches DNS-related information before refreshing it. The default value is usually **14,400 seconds**.
- **Type** – record type, choose AAAA.
- **Record/Address** – target IPv6 address.

![[~/×/bdd2d1c93c76e44368b9ab031a6271a5_MD5.webp]]

## Conclusion

Connecting and pointing your domain to the correct nameservers is the key aspect of getting your website up and running. We discussed the procedures for pointing your domain to Hostinger using both nameservers and A records.

We highly recommend the nameservers method, as it streamlines the process by eliminating the need to set up emails, subdomains, and confirmation records individually. However, the A records method can give you more control over the nameservers settings for a more advanced configuration.

We hope that you found this tutorial helpful. In case you have any questions, leave them in the comments section below.

## How to Point a Domain – FAQ

Here are a few of the most frequently asked questions on how to point a domain.

### Why Is My Domain Not Pointing to Hostinger?

The activation process may take a few hours to complete, especially if you have just bought your domain. If you recently pointed your domain to Hostinger, the changes may take up to 24 hours to propagate.

There may also be a problem with the domain verification process in general. Propagation can be checked live via tools like the [DNS Checker](https://dnschecker.org/).

### How Do I Point My GoDaddy Site to Hostinger?

To point your GoDaddy Site to Hostinger, log in to your GoDaddy account and access the DNS management page of your domain. Take note of the NS records and update these records in your domain’s DNS zone. You might also consider [transferring your GoDaddy domain to Hostinger](https://www.hostinger.com/tutorials/how-to-transfer-domain-from-godaddy-to-hostinger) completely.

### How Do I Check My DNS Pointing?

Simply log in to your hosting account, select the domain, and view the current NS and A records. You can also check the propagation using the DNS Checker tool.

![[~/×/a6d10fcfbc9f86b55afafbb7d59ad8d5_MD5.png]]

Domantas leads the content and SEO teams forward with fresh ideas and out of the box approaches. Armed with extensive SEO and marketing knowledge, he aims to spread the word of Hostinger to every corner of the world. During his free time, Domantas likes to hone his web development skills and travel to exotic places.

![[~/×/6f561266aac1c53ade664f9c94c4b17a_MD5.webp]]

Ignas takes great satisfaction in helping people tackle even the most complex technical issues. His current goal is to write easy-to-follow articles so that these issues will not happen at all. During his free time, Ignas likes to play video games and fix up things around his house.