---
title: How to Migrate Email Services to Hostinger Email | Hostinger Help Center
source: https://support.hostinger.com/en/articles/5240867-how-to-migrate-email-services-to-hostinger-email
published: 
created: 2025-01-02
description: Migrating your email services to Hostinger Email
tags:
  - clippings
  - email
  - migration
---
How to Migrate Email Services to Hostinger Email

Migrating your email services to Hostinger Email

Migrate your email service to Hostinger by following the steps below 👇

## Step 1 – Create Email Accounts With Hostinger Email

It's recommended to **use the same names for email accounts**, so your audience wouldn't even notice that you've migrated. Although, it's possible to import emails to a different account, e.g., from `support@domain.tld` to `contact@business.tld`.

## Step 2 – Recreate Previous Configurations

All of these are bound to the email provider you currently use, so recreating them at Hostinger is a must if you wish these to continue working properly.

## Step 3 – Add the Required Hostinger Email DNS Records

Make sure that **only Hostinger Email records** are present there, and delete any other MX, SPF, and DKIM records:

[![A good and a bad example of DNS records that are responsible for email service](https://downloads.intercomcdn.com/i/o/809465739/9712db43ae8f5fa0dcb6365b/image.png?expires=1735848000&signature=6cbabfd7a1fc2637170824cfbab4845ac34b41976a8b06ad85dac4c4ea52ef50&req=fCAuEs97moJWFb4f3HP0gL7Co4KPcWT6jYIgn5waiutb5p%2FrrATe2jhp7oVn%0AGkZ%2BuUq6Is8fDROijw%3D%3D%0A)](https://downloads.intercomcdn.com/i/o/809465739/9712db43ae8f5fa0dcb6365b/image.png?expires=1735848000&signature=6cbabfd7a1fc2637170824cfbab4845ac34b41976a8b06ad85dac4c4ea52ef50&req=fCAuEs97moJWFb4f3HP0gL7Co4KPcWT6jYIgn5waiutb5p%2FrrATe2jhp7oVn%0AGkZ%2BuUq6Is8fDROijw%3D%3D%0A)

Having only one set of records at a time is needed to avoid possible conflicts and lost emails.

## Step 4 – Wait for DNS Propagation to Complete

Any changes in a domain's DNS zone trigger **[propagation](https://support.hostinger.com/en/articles/4146975-what-is-dns-propagation)**, which can require **up to 24 hours** to complete. To check if DNS propagation is over, head to **[DNS Checker](https://dnschecker.org/)**, enter your domain name, select the DNS record type, and make sure that ✅ is shown on every location:

[![Using the DNS Checker tool](https://downloads.intercomcdn.com/i/o/553057281/a225e0a20519124bc4d19da3/image.png?expires=1735848000&signature=1cfd5d0dddb982e61dcfff6944ec230e4a9f5a8cdcfaef65c8f88be273a517cf&req=cSUkFsx5n4leFb4f3HP0gE1zeU8HP0p38XEH%2F1jVb4ufcVxvyWg8TTwrvg5m%0A24FWh8oFS83Wta4lFg%3D%3D%0A)](https://downloads.intercomcdn.com/i/o/553057281/a225e0a20519124bc4d19da3/image.png?expires=1735848000&signature=1cfd5d0dddb982e61dcfff6944ec230e4a9f5a8cdcfaef65c8f88be273a517cf&req=cSUkFsx5n4leFb4f3HP0gE1zeU8HP0p38XEH%2F1jVb4ufcVxvyWg8TTwrvg5m%0A24FWh8oFS83Wta4lFg%3D%3D%0A)

## Step 5 – Migrate Email Messages

Once the above steps are completed, you can start migrating your emails. There are several ways to do that:

## Step 6 – Set Up Devices and Email Clients

The last step is reconfiguring any devices, email clients, or email plugins that you use:

That’s it! Now you know how to migrate your email services to Hostinger 😊

---

Related Articles

[

How to point a domain to Hostinger

](https://support.hostinger.com/en/articles/1863967-how-to-point-a-domain-to-hostinger)[

What to Do if Hostinger Emails Are Not Working?

](https://support.hostinger.com/en/articles/4768099-what-to-do-if-hostinger-emails-are-not-working)[

Set Up a Domain for Hostinger Email

](https://support.hostinger.com/en/articles/8650765-set-up-a-domain-for-hostinger-email)[

Set Up a Domain for Hostinger Email Automatically

](https://support.hostinger.com/en/articles/8671304-set-up-a-domain-for-hostinger-email-automatically)[

Set Up a Domain for Hostinger Email Manually

](https://support.hostinger.com/en/articles/8671319-set-up-a-domain-for-hostinger-email-manually)