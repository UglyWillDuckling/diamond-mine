
## What are MX records?

Mail Exchange records are an integral part of the Domain Name System (DNS) that plays a crucial role in routing email messages. Located in DNS zone files, which are simple text files bundling all records for a particular domain, MX records provide email clients with information about the domain under which a mail server can be accessed. Using the Simple Mail Transfer Protocol (SMTP), they are responsible for directing emails to the correct mail server.

Within a domain, there are usually multiple servers, including web, File Transfer Protocol (FTP), and one or more mail servers, each accessible via different subdomains managed by DNS records. Being a type of DNS record, an MX record enables clients to request the name of the subdomain associated with the mail server, which manages the sending and receiving of emails. This is where control panels, like cPanel, come in handy, providing users with an interface to manage these DNS records.

## Why are MX records needed?

MX records play a vital role in ensuring the smooth delivery of emails by providing a reliable and efficient mechanism for routing messages. Email providers also play a crucial role in efficiently delivering emails, but with properly configured MX records, directing emails to the correct email provider’s mail server is possible.

MX records provide a more advanced email routing solution than the basic **HOSTS.TXT** file-based system, allowing for load distribution across multiple mail servers. This approach enhances efficiency by evenly distributing the load and offering alternative options when needed.
