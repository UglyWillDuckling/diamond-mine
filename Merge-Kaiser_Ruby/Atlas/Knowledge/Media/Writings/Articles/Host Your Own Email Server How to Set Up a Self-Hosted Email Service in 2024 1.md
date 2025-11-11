---
title: "Host Your Own Email Server: How to Set Up a Self-Hosted Email Service in 2024"
source: https://www.hostinger.com/tutorials/how-to-host-your-own-email-server-on-a-vps-with-cyberpanel
author:
  - "[[Aris Sentika]]"
published: 2021-07-20
created: 2024-12-19
description: "Learn how to make your own email server using Hostinger VPS with CyberPanel: 1. Purchase VPS 2. Set up your server 3. Point your domain + more."
tags:
  - article
  - dev/article
related:
  - "[[Setup hosting]]"
  - "[[hostinger]]"
---
[[Setup hosting]] [[hostinger]]

Sep 17, 2024

Aris S.

8min Read

Business owners typically use pre-configured mail servers from third-party providers to host their mailing services. While they are sufficient for some users, others might need higher flexibility and control.

For such users, self-hosting email servers can be a better option. In addition to providing complete control over the service, they are more secure since each account has a dedicated, isolated environment.

In this article, we will explain how to host your own email server with Hostinger’s virtual private server (VPS) using the CyberPanel control panel. Before getting into the steps, we will also explain the benefits of creating a private mail server.

![[~/×/9608f8554e39eab5c2fc15310c34734a_MD5.webp]]

- [Why Host Your Own Email Server?](https://www.hostinger.com/tutorials/#Why_Host_Your_Own_Email_Server "Why Host Your Own Email Server?")
- [How to Host Your Own Mail Server](https://www.hostinger.com/tutorials/#How_to_Host_Your_Own_Mail_Server "How to Host Your Own Mail Server")
- [1\. Select the Right VPS Plan](https://www.hostinger.com/tutorials/#1_Select_the_Right_VPS_Plan "1. Select the Right VPS Plan")
- [2\. Set Up Your Virtual Private Server](https://www.hostinger.com/tutorials/#2_Set_Up_Your_Virtual_Private_Server "2. Set Up Your Virtual Private Server")
- [3\. Point the Domain to Your Mail Server](https://www.hostinger.com/tutorials/#3_Point_the_Domain_to_Your_Mail_Server "3. Point the Domain to Your Mail Server")
- [4\. Create a Website Container](https://www.hostinger.com/tutorials/#4_Create_a_Website_Container "4. Create a Website Container")
- [5\. Create Nameservers in CyberPanel](https://www.hostinger.com/tutorials/#5_Create_Nameservers_in_CyberPanel "5. Create Nameservers in CyberPanel")
- [6\. Issue an SSL Certificate for the Domain](https://www.hostinger.com/tutorials/#6_Issue_an_SSL_Certificate_for_the_Domain "6. Issue an SSL Certificate for the Domain")
- [7\. Set Up Reverse DNS for Your VPS](https://www.hostinger.com/tutorials/#7_Set_Up_Reverse_DNS_for_Your_VPS "7. Set Up Reverse DNS for Your VPS")
- [8\. Create Your Email Account](https://www.hostinger.com/tutorials/#8_Create_Your_Email_Account "8. Create Your Email Account")
- [9\. Test Your Email Server](https://www.hostinger.com/tutorials/#9_Test_Your_Email_Server "9. Test Your Email Server")
- [Host Your Own Email Server FAQ](https://www.hostinger.com/tutorials/#Host_Your_Own_Email_Server_FAQ "Host Your Own Email Server FAQ")
- [Is It Worth Hosting Your Own Email Server?](https://www.hostinger.com/tutorials/#Is_It_Worth_Hosting_Your_Own_Email_Server "Is It Worth Hosting Your Own Email Server?")
- [How Much Does It Cost to Host Your Own Email Server?](https://www.hostinger.com/tutorials/#How_Much_Does_It_Cost_to_Host_Your_Own_Email_Server "How Much Does It Cost to Host Your Own Email Server?")
- [Is Hosting My Own Email Server Secure?](https://www.hostinger.com/tutorials/#Is_Hosting_My_Own_Email_Server_Secure "Is Hosting My Own Email Server Secure?")

## Why Host Your Own Email Server?

A self-hosted email server requires some technical expertise to set up and manage. However, it has many benefits compared to a third-party service:

- **Control**. Users can choose a mail transfer agent (MTA), set up any email server software, and customize the features. This is different from third-party providers, commonly offering pre-configured plans with limited customization.
- **Data privacy**. A VPS provides each account with an isolated environment. It prevents other users from accessing your data, improving your email server privacy.
- **Reputation**. A free email provider usually lacks a [dedicated IP address](https://www.hostinger.com/tutorials/dedicated-ip). This might impact deliverability since other mailing services within the same server can affect it.
- **Cost efficiency**. Mailing hosting services might be cheaper in the short term. However, a self-hosted server can host more email accounts and provide more storage.
- **Scalability**. Users can scale up their private email server hardware and set up a load balancer. In comparison, email hosting providers usually offer limited plans with fixed resources.
- **Security**. A self-hosted server is safer when properly configured since users can implement any security measures and firewall rules based on their needs.

## How to Host Your Own Mail Server

In this section, we will explain the steps on how to host your own private email server, from purchasing a VPS hosting plan to sending a test email.

### 1\. Select the Right VPS Plan

While you can host an email service on a personal computer, managing it requires more time and effort. Moreover, you would need server-grade hardware to run the machine 24/7, increasing the total cost.

Email hosting on a VPS is simpler since the provider will set up and manage the hardware. As such, it is more cost-efficient and offers various features that help simplify the email server configuration process.

To pick the [best VPS hosting provider](https://www.hostinger.com/tutorials/best-vps-hosting) and plan for your needs, consider the following factors:

- **Resources**. The VPS plan must offer sufficient bandwidth, storage, and computing power to host your email service.
- **Reliability and uptime**. The ideal VPS hosting plan should guarantee high uptime to maintain your mailing service availability.
- **Dedicated IP**. A dedicated IP address isolates your mailing service from other users, improving email reputation and deliverability.
- **Management tool**. Management tools like a graphical control panel and one-click installer help simplify email server maintenance and configuration.

Hostinger offers four [VPS KVM plans](https://www.hostinger.com/vps-hosting) starting at **$4.99/month** with a 30-day money-back guarantee. We use reliable hardware and network infrastructure to ensure **99.9% uptime**, ideal for self-hosted email for businesses.

All Hostinger VPS hosting plans include a dedicated IP address to improve email deliverability and reputation. Moreover, users can configure various operating systems and control panels in one click via **hPanel** without any [Linux commands](https://www.hostinger.com/tutorials/linux-commands).

We also provide the [Kodee AI Assistant](https://www.hostinger.com/blog/vps-ai-assistant) to help troubleshoot server problems using simple prompts. For example, ask, “I have pointed my domain using custom nameservers, but it won’t propagate. Explain the issues and their solutions,” and the tool will give the guide to fix it.

![[~/×/20205e2cc9cc8700a31ecc62f7141788_MD5.webp]]

### 2\. Set Up Your Virtual Private Server

After purchasing a plan, navigate to the **VPS** section on the top menu of hPanel and select your new server. Complete the setup process by entering a hostname, selecting a server location, and choosing an operating system.

For this tutorial, we will use **AlmaLinux 8 with CyberPanel**. You can change the operating system anytime by following these steps:

1. Log in to [hPanel](https://hpanel.hostinger.com/) and head to **VPS** on the top menu. Select your server.
2. On the sidebar, go to **Settings** → **OS & Panel** → **Operating System**.
3. Select **OS with Control Panel**.
4. From the drop-down menu, select **AlmaLinux 8 with CyberPanel**.
5. Click **Change OS**.

![[~/×/a98b63ffba5df0c3bbf7bdc45d309d0e_MD5.webp]]

**Warning!** Changing your VPS operating system and control panel will wipe all your existing data. We strongly suggest creating a backup before doing so.

If you prefer to use another Linux distribution, install CyberPanel using commands. To do so, connect to your remote server [using an SSH client like PuTTY](https://www.hostinger.com/tutorials/how-to-use-putty-ssh).

Enter the SSH login credentials, which you can obtain in your VPS overview’s **SSH Access** tab. Run the following command to start the installation wizard and follow the instructions:

```
sh <(curl https://cyberpanel.net/install.sh || wget -O - https://cyberpanel.net/install.sh)
```

### 3\. Point the Domain to Your Mail Server

After setting up your VPS, [purchase a domain](https://www.hostinger.com/domain-name-search) from Hostinger. Log in to **hPanel** and follow these steps to point it to your outgoing mail server:

1. Go to **Domains** on the top menu.
2. Select the domain you want to configure.
3. Navigate to **DNS/Nameservers** on the sidebar → **Child Nameservers**.
4. Name your child nameservers. For simplicity, we’ll name them **ns1.domain.tld** and **ns2.domain.tld**.
5. Enter your VPS **IP address**. You can find this information in the **VPS overview** menu. Then, press both of the **Save** buttons.

![[~/×/05790256b87cacaf0123e17f89178149_MD5.webp]]

6. Navigate to the **DNS Record** tab.
7. Under the **Nameservers** section, click **Change nameservers**.
8. Select **Change nameservers** and enter the two child nameservers. Leave the rest of the fields empty.
9. Press **Save** to apply the changes.

![[~/×/61579c647986f3bf3d0a5f91d59e948b_MD5.webp]]

Wait until the propagation process is complete, which can take up to 24 hours.

Note that once finished, your domain might still not point to several DNS records. We will configure them later in CyberPanel.

### 4\. Create a Website Container

Self-hosting an email server in a [CyberPanel VPS](https://www.hostinger.com/vps/cyberpanel-hosting) requires creating an empty website as a container. It is essential for domain binding and DNS configuration.

To do so, enter **https://your\_vps\_ip:8090** in your web browser to open CyberPanel. Alternatively, click the panel access link in hPanel’s **Operating System** menu.

Enter the **admin username** and **password** to log in. If you forget the credentials, reset them via the **Operating System** menu. On the CyberPanel dashboard, follow these steps:

1. Go to **Websites** → **Create Website**.
2. Select **Default** from the **Select Package** drop-down menu.
3. Choose **admin** as the **Owner**.
4. Turn off the **Test Domain** toggle and enter your domain name without **www**.
5. Enter an **email address** – this account will be used for email server administration.
6. Select the **PHP** version, ideally the newest one.
7. Check the **DKIM Support** box. It will improve your mail security, prevent spoofing, and ensure deliverability.
8. Click **Create Website** to complete the process.

![[~/×/fe95d9893516e70ec58e53d37ff98808_MD5.webp]]

**Important!** When accessing CyberPanel for the first time, your web browser might warn you about an unsafe website. You can ignore the warning and proceed to the login page.

### 5\. Create Nameservers in CyberPanel

Create nameservers in CyberPanel to connect your mailing service with the domain. Here are the steps:

1. On your CyberPanel dashboard, navigate to **DNS** → **Create Nameserver**.
2. Enter your **child nameservers** and your **VPS IP address** in the respective fields.
3. Select **Create Nameserver**.

CyberPanel will generate all the DNS records, including **MX**, which allows your server to receive and send emails. Check them by navigating to **DNS → Add/Delete record**.

In addition, head to **Email** → **DKIM Manager** and select your website from the list. Ensure your domain has the **public** and **private key** pairs. Otherwise, email providers like **Gmail** might flag your messages as spam.

Before creating an email account, wait until the propagation completes. Use an online [DNS checker tool](https://dnschecker.org/all-dns-records-of-domain.php) to see if all the records appear, then proceed to the next step.

### 6\. Issue an SSL Certificate for the Domain

[Secure sockets layer (SSL)](https://www.hostinger.com/tutorials/what-is-ssl) certificates enable encryption to improve your email server security. CyberPanel provides free, unlimited Let’s Encrypt SSL, which you can issue via the control panel dashboard.

To do so, go to **SSL** → **MailServer SSL**. Select your domain from the drop-down list, then click **Issue SSL**. The process might take a few minutes.

### 7\. Set Up Reverse DNS for Your VPS

Setting up a reverse DNS helps improve message deliverability. It enables other mail servers like **Gmail** and **Yahoo** to track back your server IP address using the domain, bypassing the spam filters.

Hostinger users can set up a reverse DNS using [PTR records](https://www.hostinger.com/tutorials/what-is-a-ptr-record-and-how-to-do-reverse-ip-lookup) via hPanel. Here are the steps:

1. In **hPanel**, click **VPS** on the top bar.
2. Select the relevant **VPS** and click **Settings** on the sidebar.
3. Hit the **IP address** tab → **Set PTR record**.
4. Enter your **domain name** and click **Save**.

![[~/×/dab23c8c441d67bd60f0dae0e3a5da03_MD5.webp]]

Wait until the propagation process finishes. To check if your VPS IP address resolves to the correct domain, run this command on Terminal:

```
dig -x ip_address
```

### 8\. Create Your Email Account

After the server and domain are set, create your mail address. Open your CyberPanel dashboard and navigate to **Email** → **Create Email**.

Select the **domain** from the drop-down list. Enter your **email address** and **password**, then press **Create Email**.

![[~/×/4ba18a3cfdc3b5a6a91965ee5baad638_MD5.webp]]

To see all the email accounts, navigate to **Email** → **List Emails** on the sidebar. This menu also displays the **SMTP** and **POP3/IMAP** server configuration for setting up email clients like Thunderbird.

Integrating your SMTP mail server into your service helps improve deliverability and security.

### 9\. Test Your Email Server

Check whether your server works properly by sending emails. Here’s how to do so using CyberPanel’s built-in **Webmail** mail client:

1. On your CyberPanel dashboard, go to **Email** → **Access Webmail**.
2. It will redirect you to the email client dashboard. Input your login credentials and press **Enter**.
3. Press the **New** button on the top left corner to create a new email.
4. Write a test email and send it to another account.
5. Open the destination email inbox to check if the server successfully sends the message.
6. In return, send email messages to the server’s inbox to see if it receives them.

#### Pro Tip

For mobile devices, switch the Webmail user interface by enabling the **Mobile version** in your account settings.

In addition, test your email server’s spam score. To do so, use an online tool like [Mail Tester](https://www.mail-tester.com/), which will rate your email deliverability from the recipient server side.

When using this tool, ensure your test emails are long enough and don’t contain words like **test**. Otherwise, the anti-spam filter might falsely flag them, negatively impacting the score. Then, expand the report to see suggested areas of improvement, like configuring spam protection software.

Moreover, use **Kodee**, our AI assistant, to help identify deliverability problems and their solutions.

## Conclusion

Hosting email on a Linux server provides users with control and flexibility. It also offers higher performance, storage, and scalability than third-party services, making it suitable for businesses wanting to host many accounts.

In this tutorial, we have explained the steps of email server setup with your own domain. Here’s a recap:

1. **Purchase a VPS hosting plan**. Buy a VPS hosting plan with a dedicated IP address, control panel support**,** and a high uptime guarantee like one from Hostinger.
2. **Set up the VPS**. Choose a data center location, set a root password, and install the **AlmaLinux 8 with CyberPanel** template via hPanel.
3. **Point your domain**. Create child nameservers pointing to your VPS IP address and configure your domain.
4. **Create a website container**. Open the CyberPanel dashboard and navigate to the **Website** menu to create a new empty website.
5. **Create nameservers in CyberPanel**. Create **ns1.domain.tld** and **ns2.domain.tld** nameservers via CyberPanel’s DNS menu.
6. **Issue an SSL certificate**. Open CyberPanel’s **SSL** section and install the free **Let’s Encrypt SSL** certificate to enable secure email hosting.
7. **Set up reverse DNS**. Navigate to hPanel and add the domain as the reverse **PTR record** for your VPS IP addresses.
8. **Create your email account**. Go to the **Email** section on the CyberPanel dashboard and create a new email account.
9. **Test your email server**. Open the **Access Webmail** menu and log in to your new account. Send a test email to another address inbox and check deliverability using a tool like **Mail Tester**.

Keep in mind that the process might differ depending on your hosting provider and server requirements. If you have a question, leave us a comment below. Good luck!

## Host Your Own Email Server FAQ

In this section, we will answer several questions about hosting a private email server. 

### Is It Worth Hosting Your Own Email Server?

It depends on your needs. Self-hosting your personal email server is worth the effort if you prioritize control, flexibility, and scalability. However, email hosting services are more suitable if you want a preconfigured and simple solution.

### How Much Does It Cost to Host Your Own Email Server?

The cost of VPS email hosting depends on the provider. For example, Hostinger VPS plans start at **$4.99/month**. Also, consider other fees like domain subscriptions and software licenses.

We don’t recommend using a personal machine since setting up and maintaining it requires a lot of effort.

### Is Hosting My Own Email Server Secure?

A self-hosted mail server is secure if you configure it properly, like installing an SSL certificate and enabling a firewall. Conversely, DIY email hosting is more prone to cyber attacks when misconfigured since the user is responsible for managing all the security aspects.

![[~/×/b48f7ea6351f7c7a73b0ead927563f0b_MD5.jpg]]

Aris is a Content Writer specializing in Linux and WordPress development. He has a passion for networking, front-end web development, and server administration. By combining his IT and writing experience, Aris creates content that helps people easily understand complex technical topics to start their online journey. Follow him on [LinkedIn](https://www.linkedin.com/in/aris-sentika).