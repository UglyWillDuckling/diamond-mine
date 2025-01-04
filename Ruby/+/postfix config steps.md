### mail name step
 
 │ The 'mail name' is the [[domain]] name used to 'qualify' _ALL_ mail addresses without   │
 │ a domain name. This includes mail to and from <root>: 

 │ This name will also be used by other programs. It should be the single, fully       │
 │ qualified domain name ([[Fully qualified domain name - Wikipedia|FQDN]]).                                                       │
 │ Thus, if a mail address on the local host is foo@example.org, the correct value     │
 │ for this option would be example.org.                                               │
 │                                                                                     │
 │ System mail name:                                                                   │
 │                           

[[Fully Qualified Domain Name]]

### after install

[[Postfix]] (main.cf) is now set up with a default configuration.  If you need to
make changes, edit /etc/postfix/main.cf (and others) as needed.  To view
Postfix configuration values, see postconf(1).

After modifying main.cf, be sure to run 'systemctl reload postfix'.
