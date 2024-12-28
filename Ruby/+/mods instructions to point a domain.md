---
related:
  - "[[Setup hosting]]"
  - "[[pointing a domain to Hostinger trial]]"
tags:
  - howto
  - instructions
---
Here's a step-by-step guide on how to point a domain to your [[VPS]] 

---
## Prerequisites:

  • You have a registered [[domain name]] (e.g., example.com)
  • You have a [[VPS]] with a [[static IP address]] (e.g., 192.0.2.1)
  • You have access to your domain's [[DNS]] settings (e.g., through your domain
  registrar or a DNS service like Cloudflare)

  ## Step 1: Update Your Domain's DNS Settings

  • Log in to your domain registrar or[[ DNS service]] provider
  • Go to the DNS settings for your domain (e.g., example.com)
  • Create a new [[A Record]] or update an existing one to point to your **VPS's IP**
  address:
    • Hostname:  @  (or  example.com  if your DNS provider requires it)
    • [[IP]] Address:  192.0.2.1  (*example*)
    • **TTL** (Time To Live): set a reasonable value, such as **3600** (1 hour) or **14400**
    (4 hours)
## Step 3: Configure Your VPS's Web Server
<mark style="background: #ABF7F7A6;">this is also optional</mark>

  1. Install and configure a web server software on your VPS (e.g., [[Apache]] [[Nginx]], [[Lighttpd]])
  3. Create a new virtual host or update an existing one to serve your domain:
    1. ServerName:  example.com  (your domain name)
    1. DocumentRoot:  /var/www/html  (or the directory where your website's files
    1. are located)
    1. Save the changes and restart your web server software

  Step 4: Verify Your Domain's DNS Propagation

  • Wait for the DNS changes to propagate globally (this can take anywhere from a
  few minutes to 48 hours, depending on your TTL and the DNS service providers
  involved)
  • Use online tools like [[What's My DNS]]? or [[DNSChecker]] to verify that your
  domain's [[DNS]] records are updated correctly

  