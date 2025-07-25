#tool/command/cli #tool/dns

  DNS lookup utility.
  More information: https://manned.org/dig.
___
## description

The  **dig**  command is a command - (domain name system) tool that is used to
query **DNS records** and obtain information about a specific domain name **or IP**
**address**. It is typically used for troubleshooting DNS issues, checking the
availability of a domain, or obtaining information about a domain's DNS
records.

## how to's

  - Lookup the IP(s) associated with a hostname (A records):
    dig +short example.com

  - Get a detailed answer for a given domain (A records):
    dig +noall +answer example.com

  - Query a specific DNS record type associated with a given domain name:
    dig +short example.com A|MX|TXT|CNAME|NS

  - Specify an alternate DNS server to query and optionally use DNS over TLS (DoT):
    dig +tls @1.1.1.1|8.8.8.8|9.9.9.9|... example.com

  - Perform a reverse DNS lookup on an IP address (PTR record):
    dig -x 8.8.8.8

  - Find authoritative name servers for the zone and display SOA records:
    dig +nssearch example.com

  - Perform iterative queries and display the entire trace path to resolve a domain name:
    dig +trace example.com

  - Query a DNS server over a non-standard [p]ort using the TCP protocol:
    dig +tcp -p port @dns_server_ip example.com

## more

  • To look up the IP address associated with a domain name:

    dig example.com

  • To look up the MX records (mail servers) for a domain:

    dig mx example.com

  • To look up the TXT records (text records) for a domain:

    dig txt example.com

  • To look up the IP address of a domain and perform a **reverse DNS lookup** to
  obtain the corresponding domain name:

    dig -x 192.0.2.1

  • To perform a recursive query and show all records for a domain:

    dig +recurse example.com

  • To look up the SOA (start of authority) record for a domain, which
  contains information about the DNS server responsible for the domain:

    dig soa example.com

  There are many other options and flags that you can use with the  dig
  command to customize its output and behavior. You can find more information
  and examples in the  dig  man page by running  man dig  on your system.
