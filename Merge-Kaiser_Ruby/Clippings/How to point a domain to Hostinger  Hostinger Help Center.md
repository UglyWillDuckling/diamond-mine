---
title: How to point a domain to Hostinger | Hostinger Help Center
source: https://support.hostinger.com/en/articles/1863967-how-to-point-a-domain-to-hostinger
author: 
published: 
created: 2025-01-05
description: Change nameservers to Hostinger and point your domain to Hostinger nameservers
tags:
  - article
favicon: https://intercom.help/hostinger-global/assets/favicon
related:
  - "[[hostinger]]"
---
You can use **any domain** you own with your hosting plan at Hostinger.
All you need to do is point it to us. If your domain is currently pointed elsewhere, you can easily switch it using the following method.

## Step 1 – Change the domain **nameservers**

Go to your domain provider's domain management area and update the **NS** or nameserver records with [Hostinger values](https://support.hostinger.com/en/articles/1583247-where-to-find-hostinger-nameservers). 
The nameservers for our [web](https://www.hostinger.com/web-hosting) and [cloud](https://www.hostinger.com/cloud-hosting) hosting plans are:
- ns1.dns-parking.com
- ns2.dns-parking.com

If you prefer to keep the DNS zone with your current provider or if changing NS values is not supported, you can use an [A record](https://www.hostinger.com/tutorials/how-to-point-domain-to-hostinger#Pointing_a_Domain_Name_via_A_Record) to direct the domain to the [IP address of your hosting plan](https://support.hostinger.com/en/articles/4407303-where-can-i-find-a-record) instead.

After making DNS changes, such as updating nameservers or DNS records, allow up to 24 hours for [propagation](https://support.hostinger.com/en/articles/4146975-what-is-dns-propagation).

Your website may be temporarily unavailable during this time. Usually, it takes a couple of hours for changes to take effect. Meanwhile, you can continue with the next step.

**NOTE**
- Pointing your domain via nameservers will configure your email records to **Hostinger Email**. If you use a different email service, make sure to set the [MX records](https://support.hostinger.com/en/articles/4443666-how-to-manage-mx-records) to your email provider's values after propagation. Also, remember to review and update SPF and DKIM records as needed.

## Step 2 – Add the domain to your hosting plan

Navigate to the **[Websites](https://hpanel.hostinger.com/websites)** section of hPanel and click on **Add website**:

[![](https://downloads.intercomcdn.com/i/o/1139781871/675031a3578588fece40075e/image.png?expires=1736100000&signature=f5622a1586b769a9c4252472fc4f7de531abd3a59b8d92c243c8a7e91993bb87&req=dSEkH852nIlYWPMW1HO4zR0MVOgNPzisfsTW9BCHTZpBo3zti8iPtoHW39GH%0A%2BY6WDm5AftM6KUrVeiw%3D%0A)](https://downloads.intercomcdn.com/i/o/1139781871/675031a3578588fece40075e/image.png?expires=1736100000&signature=f5622a1586b769a9c4252472fc4f7de531abd3a59b8d92c243c8a7e91993bb87&req=dSEkH852nIlYWPMW1HO4zR0MVOgNPzisfsTW9BCHTZpBo3zti8iPtoHW39GH%0A%2BY6WDm5AftM6KUrVeiw%3D%0A)
Next, follow the onboarding process. Once propagation is completed, you may be able to manage your domain's records using the [DNS Zone Editor](https://support.hostinger.com/en/articles/1583249-how-to-manage-dns-records-at-hostinger).



You may also check the following video tutorial:

![vid](https://www.youtube.com/watch?v=UAsYeTL8cZc)
