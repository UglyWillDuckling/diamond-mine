#email/auth-method 

**Sender Policy Framework** (SPF) is an email authentication method which ensures the sending mail server is authorized to originate mail from the email sender's domain.[1][2] 
This authentication only applies to the email sender listed in the "envelope from" field during the initial SMTP connection. If the email is bounced, a message is sent to this address,[2] and for downstream transmission it typically appears in the "Return-Path" header. To authenticate the email address which is actually visible to recipients on the "From:" line, other technologies, such as DMARC, must be used. Forgery of this address is known as email spoofing,[3] and is often used in phishing and email spam.

The list of authorized sending hosts and IP addresses for a domain is published in the DNS records for that domain. Sender Policy Framework is defined in RFC 7208 dated April 2014 as a "proposed standard".[4]