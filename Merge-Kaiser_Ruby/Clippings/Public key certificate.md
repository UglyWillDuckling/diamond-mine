---
title: Public key certificate - Wikipedia
source: https://en.wikipedia.org/wiki/Public_key_certificate
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2003-05-09
created: 2024-12-23
description: 
tags:
  - clippings
related:
  - "[[HTTPS]]"
---
<mark style="background: #FF5582A6;">Electronic document used to prove the ownership of a public key</mark>

In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), a **public key certificate**, also known as a **digital certificate** or **identity certificate**, is an [electronic document](https://en.wikipedia.org/wiki/Electronic_document "Electronic document") used to prove the validity of a [public key](https://en.wikipedia.org/wiki/Key_authentication "Key authentication").[^:0-1][^2] The certificate includes the public key and information about it, information about the identity of its owner (called the subject), and the [digital signature](https://en.wikipedia.org/wiki/Digital_signature "Digital signature") of an entity that has verified the certificate's contents (called the issuer). If the device examining the certificate trusts the issuer and finds the signature to be a valid signature of that issuer, then it can use the included public key to communicate securely with the certificate's subject. In [email encryption](https://en.wikipedia.org/wiki/Email_encryption "Email encryption"), [code signing](https://en.wikipedia.org/wiki/Code_signing "Code signing"), and [e-signature](https://en.wikipedia.org/wiki/Electronic_signature "Electronic signature") systems, a certificate's subject is typically a person or organization. However, in [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") (TLS) a certificate's subject is typically a computer or other device, though TLS certificates may identify organizations or individuals in addition to their core role in identifying devices. TLS, sometimes called by its older name [Secure Sockets Layer](https://en.wikipedia.org/wiki/Secure_Sockets_Layer "Secure Sockets Layer") (SSL), is notable for being a part of [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS"), a [protocol](https://en.wikipedia.org/wiki/Communications_protocol "Communications protocol") for securely browsing the [web](https://en.wikipedia.org/wiki/World_Wide_Web "World Wide Web").

In a typical [public-key infrastructure](https://en.wikipedia.org/wiki/Public-key_infrastructure "Public-key infrastructure") (PKI) scheme, the certificate issuer is a [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority "Certificate authority") (CA),[^3] usually a company that charges customers a fee to issue certificates for them. By contrast, in a [web of trust](https://en.wikipedia.org/wiki/Web_of_trust "Web of trust") scheme, individuals sign each other's keys directly, in a format that performs a similar function to a public key certificate. In case of key compromise, a certificate may need to be [revoked](https://en.wikipedia.org/wiki/Certificate_revocation "Certificate revocation").

The most common format for public key certificates is defined by [X.509](https://en.wikipedia.org/wiki/X.509 "X.509"). Because X.509 is very general, the format is further constrained by profiles defined for certain use cases, such as [Public Key Infrastructure (X.509)](https://en.wikipedia.org/wiki/PKIX "PKIX") as defined in [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [5280](https://datatracker.ietf.org/doc/html/rfc5280).

## Types of certificate

![[~/×/19921636ac911b948beafac6a99ba0d3_MD5.png]]

The roles of root certificate, intermediate certificate and end-entity certificate as in the [chain of trust](https://en.wikipedia.org/wiki/Chain_of_trust "Chain of trust").

### TLS/SSL server certificate

The [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") (TLS) protocol – as well as its outdated predecessor, the [Secure Sockets Layer](https://en.wikipedia.org/wiki/Secure_Sockets_Layer "Secure Sockets Layer") (SSL) protocol – ensures that the communication between a [client computer](https://en.wikipedia.org/wiki/Client_\(computing\) "Client (computing)") and a [server](https://en.wikipedia.org/wiki/Server_\(computing\) "Server (computing)") is secure. The protocol requires the server to present a digital certificate, proving that it is the intended destination. The connecting client conducts [certification path validation](https://en.wikipedia.org/wiki/Certification_path_validation_algorithm "Certification path validation algorithm"), ensuring that:

1. The subject of the certificate matches the [hostname](https://en.wikipedia.org/wiki/Hostname "Hostname") (not to be confused with the [domain name](https://en.wikipedia.org/wiki/Domain_name "Domain name")) to which the client is trying to connect.
2. A trusted certificate authority has signed the certificate.

The *Subject* field of the certificate must identify the primary hostname of the server as the *Common Name*.<sup class="noprint Inline-Template">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Please_clarify" title="Wikipedia:Please clarify"><span title="The text near this tag may need clarification or removal of jargon. (September 2022)">clarification needed</span></a></i>]</sup> The hostname must be publicly accessible, not using [private addresses](https://en.wikipedia.org/wiki/Private_address "Private address") or [reserved domains](https://en.wikipedia.org/wiki/Reserved_domains "Reserved domains").[^4] A certificate may be valid for multiple hostnames (e.g., a domain and its subdomains). Such certificates are commonly called *Subject Alternative Name (SAN) certificates* or *Unified Communications Certificates (UCC)*. These certificates contain the [Subject Alternative Name](https://en.wikipedia.org/wiki/Subject_Alternative_Name "Subject Alternative Name") field, though many CAs also put them into the *Subject Common Name* field for backward compatibility. If some of the hostnames contain an asterisk (\*), a certificate may also be called a [wildcard certificate](https://en.wikipedia.org/wiki/Wildcard_certificate "Wildcard certificate").

Once the certification path validation is successful, the client can establish an encrypted connection with the server.

Internet-facing servers, such as public [web servers](https://en.wikipedia.org/wiki/Web_server "Web server"), must obtain their certificates from a trusted, public certificate authority (CA).

### TLS/SSL client certificate

Client certificates authenticate the client connecting to a TLS service, for instance to provide access control. Because most services provide access to individuals, rather than devices, most client certificates contain an email address or personal name rather than a hostname. In addition, the certificate authority that issues the client certificate is usually the service provider to which client connects because it is the provider that needs to perform authentication. Some service providers even offer free SSL certificates as part of their packages.[^5]

While most web browsers support client certificates, the most common form of authentication on the Internet is a username and password pair. Client certificates are more common in [virtual private networks](https://en.wikipedia.org/wiki/Virtual_private_network "Virtual private network") (VPN) and [Remote Desktop Services](https://en.wikipedia.org/wiki/Remote_Desktop_Services "Remote Desktop Services"), where they authenticate devices.

In accordance with the [S/MIME](https://en.wikipedia.org/wiki/S/MIME "S/MIME") protocol, email certificates can both establish the message integrity and encrypt messages. To establish encrypted email communication, the communicating parties must have their digital certificates in advance. Each must send the other one digitally signed email and opt to import the sender's certificate.

Some publicly trusted certificate authorities provide email certificates, but more commonly S/MIME is used when communicating within a given organization, and that organization runs its own CA, which is trusted by participants in that email system.

### Self-signed and root certificates

A [self-signed certificate](https://en.wikipedia.org/wiki/Self-signed_certificate "Self-signed certificate") is a certificate with a subject that matches its issuer, and a signature that can be verified by its own public key.

Self-signed certificates have their own limited uses. They have full trust value when the issuer and the sole user are the same entity. For example, the Encrypting File System on Microsoft Windows issues a self-signed certificate on behalf of the encrypting user and uses it to transparently decrypt data on the fly. The digital certificate chain of trust starts with a self-signed certificate, called a *[root certificate](https://en.wikipedia.org/wiki/Root_certificate "Root certificate")*, *trust anchor*, or *trust root*. A certificate authority self-signs a root certificate to be able to sign other certificates.

An intermediate certificate has a similar purpose to the root certificate – its only use is to sign other certificates. However, an intermediate certificate is not self-signed. A root certificate or another intermediate certificate needs to sign it.

An end-entity or leaf certificate is any certificate that cannot sign other certificates. For instance, TLS/SSL server and client certificates, email certificates, code signing certificates, and qualified certificates are all end-entity certificates.

### Subject Alternative Name certificate

![[~/×/c0e6a3a6b6ae26eec0f10d6cc950fb42_MD5.png]]

An example of a Subject Alternative Name section for domain names owned by the [Wikimedia Foundation](https://en.wikipedia.org/wiki/Wikimedia_Foundation "Wikimedia Foundation")

Subject Alternative Name (SAN) certificates are an [extension](https://en.wikipedia.org/wiki/X.509#Extensions_informing_a_specific_usage_of_a_certificate "X.509") to [X.509](https://en.wikipedia.org/wiki/X.509 "X.509") that allows various values to be associated with a security certificate using a `subjectAltName` field.[^6] These values are called *Subject Alternative Names* (SANs). Names include:[^7]

- [Email addresses](https://en.wikipedia.org/wiki/Email_addresses "Email addresses")
- [IP addresses](https://en.wikipedia.org/wiki/IP_address "IP address")
- [URIs](https://en.wikipedia.org/wiki/URI "URI")
- [DNS names](https://en.wikipedia.org/wiki/DNS_name "DNS name"): this is usually also provided as the Common Name [RDN](https://en.wikipedia.org/wiki/Distinguished_Name#Directory_structure "Distinguished Name") within the Subject field of the main certificate.
- Directory names: alternative [Distinguished Names](https://en.wikipedia.org/wiki/Distinguished_Name#Directory_structure "Distinguished Name") to that given in the Subject.
- Other names, given as a *General Name* or *Universal Principal Name*: a registered [object identifier](https://en.wikipedia.org/wiki/Object_identifier "Object identifier") followed by a value.

[RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [2818](https://datatracker.ietf.org/doc/html/rfc2818) (May 2000) specifies Subject Alternative Names as the preferred method of adding DNS names to certificates, deprecating the previous method of putting DNS names in the `commonName` field.[^chrome58-8] [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome "Google Chrome") version 58 (March 2017) removed support for checking the `commonName` field at all, instead only looking at the SANs.[^chrome58-8]

As shown in the picture of Wikimedia's section on the right, the SAN field can contain wildcards.[^9] Not all vendors support or endorse mixing wildcards into SAN certificates.[^10]

### Wildcard certificate

![[~/×/9c8c5984740c82dd5c0544528d6fd8e5_MD5.png]]

An example of a wildcard certificate on comifuro.net (note the [asterisk](https://en.wikipedia.org/wiki/Asterisk "Asterisk"): `*`)

A public key certificate which uses an [asterisk](https://en.wikipedia.org/wiki/Asterisk "Asterisk") `*` (the *wildcard*) in its [domain name](https://en.wikipedia.org/wiki/Domain_name "Domain name") fragment is called a Wildcard certificate. Through the use of `*`, a single certificate may be used for multiple [sub-domains](https://en.wikipedia.org/wiki/Subdomain "Subdomain"). It is commonly used for [transport layer security](https://en.wikipedia.org/wiki/Transport_layer_security "Transport layer security") in [computer networking](https://en.wikipedia.org/wiki/Computer_networking "Computer networking").

For example, a single wildcard certificate for `https://*.example.com` will secure all these subdomains on the `https://*.example.com` domain:

- `payment.example.com`
- `contact.example.com`
- `login-secure.example.com`
- `www.example.com`

Instead of getting separate certificates for subdomains, you can use a single certificate for all main domains and subdomains and reduce cost.[^11]

Because the wildcard only covers one level of subdomains (the asterisk doesn't match full stops),[^12] these domains would not be valid for the certificates:[^13]

- `test.login.example.com`
- `example.com`

Note possible exceptions by CAs, for example wildcard-plus cert by DigiCert contains an automatic "Plus" property for the naked domain `example.com`.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (September 2024)">citation needed</span></a></i>]</sup>

Only a single level of [subdomain](https://en.wikipedia.org/wiki/Subdomain "Subdomain") matching is supported in accordance with [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [2818](https://datatracker.ietf.org/doc/html/rfc2818).[^:0-1]

It is not possible to get a wildcard for an [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate "Extended Validation Certificate").[^14] A workaround could be to add every virtual host name in the [Subject Alternative Name](https://en.wikipedia.org/wiki/Subject_Alternative_Name "Subject Alternative Name") (SAN) extension,[^15][^16] the major problem being that the certificate needs to be reissued whenever a new virtual server is added. (See *[Transport Layer Security § Support for name-based virtual servers](https://en.wikipedia.org/wiki/Transport_Layer_Security#Support_for_name-based_virtual_servers "Transport Layer Security")* for more information.)

Wildcards can be added as domains in multi-domain certificates or [Unified Communications Certificates](https://en.wikipedia.org/wiki/Unified_Communications_Certificate "Unified Communications Certificate") (UCC). In addition, wildcards themselves can have `subjectAltName` extensions, including other wildcards. For example, the wildcard certificate `*.wikipedia.org` has `*.m.wikimedia.org` as a Subject Alternative Name. Thus it secures `www.wikipedia.org` as well as the completely different website name `meta.m.wikimedia.org`.[^17]

[RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [6125](https://datatracker.ietf.org/doc/html/rfc6125) argues against wildcard certificates on security grounds, in particular "partial wildcards".[^18]

The wildcard applies only to one level of the domain name. `*.example.com` matches `sub1.example.com` but not `example.com` and not `sub2.sub1.domain.com`

The wildcard may appear anywhere inside a label as a "partial wildcard" according to early specifications[^19]

`f*.domain.com` is OK. It will match `frog.domain.com` but not `frog.super.domain.com`

`baz*.example.net` is OK and matches `baz1.example.net`

`*baz.example.net` is OK and matches `foobaz.example.net`

`b*z.example.net` is OK and matches `buzz.example.net`

However, use of "partial-wildcard" certs is not recommended. As of 2011, partial wildcard support is optional, and is explicitly disallowed in SubjectAltName headers that are required for multi-name certificates.[^20] All major browsers have deliberately **removed** support for partial-wildcard certificates;[^21][^22] they will result in a "SSL\_ERROR\_BAD\_CERT\_DOMAIN" error. Similarly, it is typical for standard libraries in programming languages to not support "partial-wildcard" certificates. For example, any "partial-wildcard" certificate will not work with the latest versions of both Python[^23] and Go. Thus,

Do not allow a label that consists entirely of just a wildcard unless it is the left-most label

*`sub1.*.domain.com`* is not allowed.

A cert with multiple wildcards in a name is not allowed.

`*.*.domain.com`

A cert with `*` plus a top-level domain is not allowed.

`*.com`

Too general and should not be allowed.

`*`

International domain names encoded in ASCII (A-label) are labels that are [ASCII-encoded](https://en.wikipedia.org/wiki/Punycode "Punycode") and begin with `xn--`. URLs with international labels cannot contain wildcards.[^24]

`xn--caf-dma.com` is `café.com`

`xn--caf-dma*.com` is not allowed

`Lw*.xn--caf-dma.com` is allowed

- EMV certificate: [EMV](https://en.wikipedia.org/wiki/EMV "EMV") is a payment method based on a technical standard for [payment cards](https://en.wikipedia.org/wiki/Payment_card "Payment card"), [payment terminals](https://en.wikipedia.org/wiki/Payment_terminal "Payment terminal") and [automated teller machines](https://en.wikipedia.org/wiki/Automated_teller_machine "Automated teller machine") (ATM). EMV payment cards are preloaded with a card issuer certificate, signed by the EMV certificate authority[^certs-25] to validate authenticity of the payment card during the payment transaction.
- [Code-signing certificate](https://en.wikipedia.org/wiki/Code_signing "Code signing"): Certificates can validate [apps](https://en.wikipedia.org/wiki/Computer_program "Computer program") (or their [binaries](https://en.wikipedia.org/wiki/Binaries "Binaries")) to ensure they were not tampered with during delivery.
- [Qualified certificate](https://en.wikipedia.org/wiki/Qualified_digital_certificate "Qualified digital certificate"): A certificate identifying an individual, typically for [electronic signature](https://en.wikipedia.org/wiki/Electronic_signature "Electronic signature") purposes. These are most commonly used in Europe, where the [eIDAS](https://en.wikipedia.org/wiki/EIDAS "EIDAS") regulation standardizes them and requires their recognition.
- Role-based certificate: Defined in the *[X.509](https://en.wikipedia.org/wiki/X.509 "X.509") Certificate Policy for the Federal Bridge Certification Authority (FBCA)*, role-based certificates "identify a specific role on behalf of which the subscriber is authorized to act rather than the subscriber’s name and are issued in the interest of supporting accepted business practices."[^26]
- Group certificate: Defined in the *[X.509](https://en.wikipedia.org/wiki/X.509 "X.509") Certificate Policy for the Federal Bridge Certification Authority (FBCA)*, for "cases where there are several entities acting in one capacity, and where non-repudiation for transactions is not desired."[^27]

These are some of the most common fields in certificates. Most certificates contain a number of fields not listed here. Note that in terms of a certificate's X.509 representation, a certificate is not "flat" but contains these fields nested in various structures within the certificate.

- *Serial Number*: Used to uniquely identify the certificate within a CA's systems. In particular this is used to track revocation information.
- *Subject*: The entity a certificate belongs to: a machine, an individual, or an organization.
- *Issuer*: The entity that verified the information and signed the certificate.
- *Not Before*: The earliest time and date on which the certificate is valid. Usually set to a few hours or days prior to the moment the certificate was issued, to avoid [clock skew](https://en.wikipedia.org/wiki/Clock_skew#On_a_network "Clock skew") problems.
- *Not After*: The time and date past which the certificate is no longer valid.
- *Key Usage*: The valid cryptographic uses of the certificate's public key. Common values include digital signature validation, key encipherment, and certificate signing.
- *Extended Key Usage*: The applications in which the certificate may be used. Common values include TLS server authentication, email protection, and code signing.
- *Public Key*: A public key belonging to the certificate subject.
- *Signature Algorithm*: This contain a hashing algorithm and a digital signature algorithm. For example "sha256RSA" where sha256 is the hashing algorithm and RSA is the signature algorithm.
- *Signature*: The body of the certificate is hashed (hashing algorithm in "Signature Algorithm" field is used) and then the hash is signed (signature algorithm in the "Signature Algorithm" field is used) with the issuer's private key.

This is an example of a decoded SSL/TLS certificate retrieved from SSL.com's website. The issuer's common name (CN) is shown as `SSL.com EV SSL Intermediate CA RSA R3`, identifying this as an [Extended Validation](https://en.wikipedia.org/wiki/Extended_Validation_Certificate "Extended Validation Certificate") (EV) certificate. Validated information about the website's owner (SSL Corp) is located in the `Subject` field. The `X509v3 Subject Alternative Name` field contains a list of domain names covered by the certificate. The `X509v3 Extended Key Usage` and `X509v3 Key Usage` fields show all appropriate uses.

```
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            72:14:11:d3:d7:e0:fd:02:aa:b0:4e:90:09:d4:db:31
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, ST=Texas, L=Houston, O=SSL Corp, CN=SSL.com EV SSL Intermediate CA RSA R3
        Validity
            Not Before: Apr 18 22:15:06 2019 GMT
            Not After : Apr 17 22:15:06 2021 GMT
        Subject: C=US, ST=Texas, L=Houston, O=SSL Corp/serialNumber=NV20081614243, CN=www.ssl.com/postalCode=77098/businessCategory=Private Organization/street=3100 Richmond Ave/jurisdictionST=Nevada/jurisdictionC=US
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                RSA Public-Key: (2048 bit)
                Modulus:
                    00:ad:0f:ef:c1:97:5a:9b:d8:1e ...
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Authority Key Identifier: 
                keyid:BF:C1:5A:87:FF:28:FA:41:3D:FD:B7:4F:E4:1D:AF:A0:61:58:29:BD

            Authority Information Access: 
                CA Issuers - URI:http://www.ssl.com/repository/SSLcom-SubCA-EV-SSL-RSA-4096-R3.crt
                OCSP - URI:http://ocsps.ssl.com

            X509v3 Subject Alternative Name: 
                DNS:www.ssl.com, DNS:answers.ssl.com, DNS:faq.ssl.com, DNS:info.ssl.com, DNS:links.ssl.com, DNS:reseller.ssl.com, DNS:secure.ssl.com, DNS:ssl.com, DNS:support.ssl.com, DNS:sws.ssl.com, DNS:tools.ssl.com
            X509v3 Certificate Policies: 
                Policy: 2.23.140.1.1
                Policy: 1.2.616.1.113527.2.5.1.1
                Policy: 1.3.6.1.4.1.38064.1.1.1.5
                  CPS: https://www.ssl.com/repository

            X509v3 Extended Key Usage: 
                TLS Web Client Authentication, TLS Web Server Authentication
            X509v3 CRL Distribution Points:

                Full Name:
                  URI:http://crls.ssl.com/SSLcom-SubCA-EV-SSL-RSA-4096-R3.crl

            X509v3 Subject Key Identifier: 
                E7:37:48:DE:7D:C2:E1:9D:D0:11:25:21:B8:00:33:63:06:27:C1:5B
            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment
            CT Precertificate SCTs: 
                Signed Certificate Timestamp:
                    Version   : v1 (0x0)
                    Log ID    : 87:75:BF:E7:59:7C:F8:8C:43:99 ...
                    Timestamp : Apr 18 22:25:08.574 2019 GMT
                    Extensions: none
                    Signature : ecdsa-with-SHA256
                                30:44:02:20:40:51:53:90:C6:A2 ...
                Signed Certificate Timestamp:
                    Version   : v1 (0x0)
                    Log ID    : A4:B9:09:90:B4:18:58:14:87:BB ...
                    Timestamp : Apr 18 22:25:08.461 2019 GMT
                    Extensions: none
                    Signature : ecdsa-with-SHA256
                                30:45:02:20:43:80:9E:19:90:FD ...
                Signed Certificate Timestamp:
                    Version   : v1 (0x0)
                    Log ID    : 55:81:D4:C2:16:90:36:01:4A:EA ...
                    Timestamp : Apr 18 22:25:08.769 2019 GMT
                    Extensions: none
                    Signature : ecdsa-with-SHA256
                                30:45:02:21:00:C1:3E:9F:F0:40 ...
    Signature Algorithm: sha256WithRSAEncryption
         36:07:e7:3b:b7:45:97:ca:4d:6c ...
```

## Usage in the European Union

In the European Union, [(advanced) electronic signatures](https://en.wikipedia.org/wiki/Advanced_electronic_signature "Advanced electronic signature") on legal documents are commonly performed using [digital signatures](https://en.wikipedia.org/wiki/Digital_signature "Digital signature") with accompanying identity certificates. However, only [qualified electronic signatures](https://en.wikipedia.org/wiki/Qualified_electronic_signature "Qualified electronic signature") (which require using a qualified trust service provider and signature creation device) are given the same power as a physical signature.

## Certificate authorities

![[~/×/9770fde17737fb6d90049c730aac2428_MD5.png]]

The procedure of obtaining a Public key certificate

In the [X.509](https://en.wikipedia.org/wiki/X.509 "X.509") trust model, a certificate authority (CA) is responsible for signing certificates. These certificates act as an introduction between two parties, which means that a CA acts as a trusted third party. A CA processes requests from people or organizations requesting certificates (called subscribers), verifies the information, and potentially signs an end-entity certificate based on that information. To perform this role effectively, a CA needs to have one or more broadly trusted root certificates or intermediate certificates and the corresponding private keys. CAs may achieve this broad trust by having their root certificates included in popular software, or by obtaining a cross-signature from another CA delegating trust. Other CAs are trusted within a relatively small community, like a business, and are distributed by other mechanisms like Windows [Group Policy](https://en.wikipedia.org/wiki/Group_Policy "Group Policy").

Certificate authorities are also responsible for maintaining up-to-date revocation information about certificates they have issued, indicating whether certificates are still valid. They provide this information through [Online Certificate Status Protocol](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol "Online Certificate Status Protocol") (OCSP) and/or Certificate Revocation Lists (CRLs). Some of the larger certificate authorities in the market include [IdenTrust](https://en.wikipedia.org/wiki/IdenTrust "IdenTrust"), [DigiCert](https://en.wikipedia.org/wiki/DigiCert "DigiCert"), and [Sectigo](https://en.wikipedia.org/wiki/Sectigo "Sectigo").[^28]

Some major software contain a list of certificate authorities that are trusted by default.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (September 2022)">citation needed</span></a></i>]</sup> This makes it easier for end-users to validate certificates, and easier for people or organizations that request certificates to know which certificate authorities can issue a certificate that will be broadly trusted. This is particularly important in HTTPS, where a web site operator generally wants to get a certificate that is trusted by nearly all potential visitors to their web site.

The policies and processes a provider uses to decide which certificate authorities their software should trust are called root programs. The most influential root programs are:<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (September 2022)">citation needed</span></a></i>]</sup>

- [Microsoft Root Program](https://technet.microsoft.com/en-us/library/cc751157.aspx)
- [Apple Root Program](https://www.apple.com/certificateauthority/ca_program.html)
- [Mozilla Root Program](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/policy/)
- [Oracle Java root program](http://www.oracle.com/technetwork/java/javase/javasecarootcertsprogram-1876540.html)
- Adobe [AATL](https://helpx.adobe.com/acrobat/kb/approved-trust-list2.html) Adobe Approved Trust List and [EUTL](https://blogs.adobe.com/documentcloud/eu-trusted-list-now-available-in-adobe-acrobat/) root programs (used for document signing)

Browsers other than Firefox generally use the operating system's facilities to decide which certificate authorities are trusted. So, for instance, Chrome on Windows trusts the certificate authorities included in the Microsoft Root Program, while on macOS or iOS, Chrome trusts the certificate authorities in the Apple Root Program.[^29] Edge and Safari use their respective operating system trust stores as well, but each is only available on a single OS. Firefox uses the Mozilla Root Program trust store on all platforms.

The Mozilla Root Program is operated publicly, and its certificate list is part of the [open source](https://en.wikipedia.org/wiki/Open-source_software "Open-source software") Firefox web browser, so it is broadly used outside Firefox.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (September 2022)">citation needed</span></a></i>]</sup> For instance, while there is no common Linux Root Program, many Linux distributions, like Debian,[^30] include a package that periodically copies the contents of the Firefox trust list, which is then used by applications.

Root programs generally provide a set of valid purposes with the certificates they include. For instance, some CAs may be considered trusted for issuing TLS server certificates, but not for code signing certificates. This is indicated with a set of trust bits in a root certificate storage system.

A certificate may be revoked before it expires, which signals that it is no longer valid. Without revocation, an attacker would be able to exploit such a compromised or misissued certificate until expiry.[^footnotesmithdickinsonseamons20201-31] Hence, revocation is an important part of a [public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure "Public key infrastructure").[^footnotesheffersaint-andrefossati20227.5._certificate_revocation-32] Revocation is performed by the issuing [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority "Certificate authority"), which produces a [cryptographically authenticated](https://en.wikipedia.org/wiki/Cryptographically_authenticated "Cryptographically authenticated") statement of revocation.[^footnotechunglokchandrasekaranchoffnes20183-33]

For distributing revocation information to clients, timeliness of the discovery of revocation (and hence the window for an attacker to exploit a compromised certificate) trades off against resource usage in querying revocation statuses and privacy concerns.[^footnotesmithdickinsonseamons202010-34] If revocation information is unavailable (either due to accident or an attack), clients must decide whether to *fail-hard* and treat a certificate as if it is revoked (and so degrade [availability](https://en.wikipedia.org/wiki/Availability "Availability")) or to *fail-soft* and treat it as unrevoked (and allow attackers to sidestep revocation).[^footnotelarischchoffneslevinmaggs2017542-35]

Due to the cost of revocation checks and the availability impact from potentially-unreliable remote services, [Web browsers](https://en.wikipedia.org/wiki/Web_browsers "Web browsers") limit the revocation checks they will perform, and will fail-soft where they do.[^footnotesmithdickinsonseamons20201-2-36] [Certificate revocation lists](https://en.wikipedia.org/wiki/Certificate_revocation_lists "Certificate revocation lists") are too bandwidth-costly for routine use, and the [Online Certificate Status Protocol](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol "Online Certificate Status Protocol") presents connection latency and privacy issues. Other schemes have been proposed but have not yet been successfully deployed to enable fail-hard checking.[^footnotesheffersaint-andrefossati20227.5._certificate_revocation-32]

The most common use of certificates is for [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS")\-based web sites. A [web browser](https://en.wikipedia.org/wiki/Web_browser "Web browser") validates that an HTTPS [web server](https://en.wikipedia.org/wiki/Web_server "Web server") is authentic, so that the user can feel secure that his/her interaction with the [web site](https://en.wikipedia.org/wiki/Web_site "Web site") has no eavesdroppers and that the web site is who it claims to be. This security is important for [electronic commerce](https://en.wikipedia.org/wiki/Electronic_commerce "Electronic commerce"). In practice, a web site operator obtains a certificate by applying to a certificate authority with a [certificate signing request](https://en.wikipedia.org/wiki/Certificate_signing_request "Certificate signing request"). The certificate request is an electronic document that contains the web site name, company information and the public key. The certificate provider signs the request, thus producing a public certificate. During web browsing, this public certificate is served to any web browser that connects to the web site and proves to the web browser that the provider believes it has issued a certificate to the owner of the web site.

As an example, when a user connects to `https://www.example.com/` with their browser, if the browser does not give any certificate warning message, then the user can be theoretically sure that interacting with `https://www.example.com/` is equivalent to interacting with the entity in contact with the email address listed in the public registrar under "example.com", even though that email address may not be displayed anywhere on the web site.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (September 2022)">citation needed</span></a></i>]</sup> No other surety of any kind is implied. Further, the relationship between the purchaser of the certificate, the operator of the web site, and the generator of the web site content may be tenuous and is not guaranteed.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (September 2022)">citation needed</span></a></i>]</sup> At best, the certificate guarantees uniqueness of the web site, provided that the web site itself has not been compromised (hacked) or the certificate issuing process subverted.

A certificate provider can opt to issue three types of certificates, each requiring its own degree of vetting rigor. In order of increasing rigor (and naturally, cost) they are: Domain Validation, Organization Validation and Extended Validation. These rigors are loosely agreed upon by voluntary participants in the [CA/Browser Forum](https://en.wikipedia.org/wiki/CA/Browser_Forum "CA/Browser Forum").<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (September 2022)">citation needed</span></a></i>]</sup>

A certificate provider will issue a domain-validated (DV) certificate to a purchaser if the purchaser can demonstrate one vetting criterion: the right to administratively manage the affected DNS domain(s).

#### Organization validation

A certificate provider will issue an organization validation (OV) class certificate to a purchaser if the purchaser can meet two criteria: the right to administratively manage the domain name in question, and perhaps, the organization's actual existence as a legal entity. A certificate provider publishes its OV vetting criteria through its [certificate policy](https://en.wikipedia.org/wiki/Certificate_policy "Certificate policy").

#### Extended validation

To acquire an [Extended Validation](https://en.wikipedia.org/wiki/Extended_Validation_Certificate "Extended Validation Certificate") (EV) certificate, the purchaser must persuade the certificate provider of its legal identity, including manual verification checks by a human. As with OV certificates, a certificate provider publishes its EV vetting criteria through its [certificate policy](https://en.wikipedia.org/wiki/Certificate_policy "Certificate policy").

Until 2019, major browsers such as Chrome and Firefox generally offered users a visual indication of the legal identity when a site presented an EV certificate. This was done by showing the legal name before the domain, and a bright green color to highlight the change. Most browsers deprecated this feature[^37][^38] providing no visual difference to the user on the type of certificate used. This change followed security concerns raised by forensic experts and successful attempts to purchase EV certificates to impersonate famous organizations, proving the inefficiency of these visual indicators and highlighting potential abuses.[^39]

A [web browser](https://en.wikipedia.org/wiki/Web_browser "Web browser") will give no warning to the user if a web site suddenly presents a different certificate, even if that certificate has a lower number of key bits, even if it has a different provider, and even if the previous certificate had an expiry date far into the future.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (April 2012)">citation needed</span></a></i>]</sup> Where certificate providers are under the jurisdiction of governments, those governments may have the freedom to order the provider to generate any certificate, such as for the purposes of law enforcement. Subsidiary wholesale certificate providers also have the freedom to generate any certificate.

All web browsers come with an extensive built-in list of trusted [root certificates](https://en.wikipedia.org/wiki/Root_certificate "Root certificate"), many of which are controlled by organizations that may be unfamiliar to the user.[^:0-1] Each of these organizations is free to issue any certificate for any web site and have the guarantee that web browsers that include its root certificates will accept it as genuine. In this instance, end users must rely on the developer of the browser software to manage its built-in list of certificates and on the certificate providers to behave correctly and to inform the browser developer of problematic certificates. While uncommon, there have been incidents in which fraudulent certificates have been issued: in some cases, the browsers have detected the fraud; in others, some time passed before browser developers removed these certificates from their software.[^40][^41]

The list of built-in certificates is also not limited to those provided by the browser developer: users (and to a degree applications) are free to extend the list for special purposes such as for company intranets.[^42] This means that if someone gains access to a machine and can install a new root certificate in the browser, that browser will recognize websites that use the inserted certificate as legitimate.

For [provable security](https://en.wikipedia.org/wiki/Provable_security "Provable security"), this reliance on something external to the system has the consequence that any public key certification scheme has to rely on some special setup assumption, such as the existence of a [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority "Certificate authority").[^43]

### Usefulness versus unsecured web sites

In spite of the limitations described above, certificate-authenticated TLS is considered mandatory by all security guidelines whenever a web site hosts confidential information or performs material transactions. This is because, in practice, in spite of the [weaknesses](https://en.wikipedia.org/wiki/#Weaknesses) described above, web sites secured by public key certificates are still more secure than unsecured [http://](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") web sites.[^44]

The National Institute of Standards and Technology ([NIST](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology "National Institute of Standards and Technology")) Computer Security Division[^45] provides guidance documents for public key certificates:

- SP 800-32 Introduction to Public Key Technology and the Federal PKI Infrastructure[^46]
- SP 800-25 Federal Agency Use of Public Key Technology for Digital Signatures and Authentication[^47]

- [Authorization certificate](https://en.wikipedia.org/wiki/Authorization_certificate "Authorization certificate")
- [Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy "Pretty Good Privacy")

[^:0-1]: [Wildcard SSL certificate limitation on QuovadisGlobal.com](https://support.quovadisglobal.com/KB/a60/will-ssl-work-with-multilevel-wildcards.aspx?KBSearchID=10223) Cite error: The named reference ":0" was defined multiple times with different content (see the [help page](https://en.wikipedia.org/wiki/Help:Cite_errors/Cite_error_references_duplicate_key "Help:Cite errors/Cite error references duplicate key")).

[^2]: Alrawais, Arwa; Alhothaily, Abdulrahman; [Cheng, Xiuzhen](https://en.wikipedia.org/wiki/Xiuzhen_Cheng "Xiuzhen Cheng"); Hu, Chunqiang; Yu, Jiguo (2018-06-01). ["SecureGuard: A Certificate Validation System in Public Key Infrastructure"](https://ieeexplore.ieee.org/document/8290970). *IEEE Transactions on Vehicular Technology*. **67** (6): 5399–5408. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/TVT.2018.2805700](https://doi.org/10.1109%2FTVT.2018.2805700). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0018-9545](https://search.worldcat.org/issn/0018-9545). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [49270949](https://api.semanticscholar.org/CorpusID:49270949). [Archived](https://web.archive.org/web/20220826181642/https://ieeexplore.ieee.org/document/8290970/) from the original on 2022-08-26. Retrieved 2022-08-26.

[^3]: Chadwick, David W; Basden, Andrew (2001-10-31). ["Evaluating Trust in a Public Key Certification Authority"](https://www.sciencedirect.com/science/article/pii/S0167404801007106). *Computers & Security*. **20** (7): 592–611. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/S0167-4048(01)00710-6](https://doi.org/10.1016%2FS0167-4048%2801%2900710-6). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0167-4048](https://search.worldcat.org/issn/0167-4048). [Archived](https://web.archive.org/web/20220226191547/https://www.sciencedirect.com/science/article/pii/S0167404801007106) from the original on 2022-02-26. Retrieved 2022-02-26.

[^4]: ["Internal names"](https://docs.digicert.com/en/certcentral/certificate-tools/discovery-user-guide/tls-ssl-certificate-vulnerabilities/internal-names.html). [DigiCert](https://en.wikipedia.org/wiki/DigiCert "DigiCert") Documentation.

[^5]: ["Free SSL Certificate | IONOS by 1&1"](https://www.ionos.co.uk/security/free-ssl). *www.ionos.co.uk*. [Archived](https://web.archive.org/web/20220718121336/https://www.ionos.co.uk/security/free-ssl) from the original on 2022-07-18. Retrieved 2022-07-15.

[^6]: ["x509v3\_config - X509 V3 certificate extension configuration format"](https://www.openssl.org/docs/manmaster/man5/x509v3_config.html#Subject-Alternative-Name). [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL "OpenSSL"). Retrieved 2020-01-16.

[^7]: [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [5280](https://datatracker.ietf.org/doc/html/rfc5280): 4.2.1.6. Subject Alternative Name

[^chrome58-8]: Medley, Joseph (March 2017). ["Deprecations and Removals in Chrome 58"](https://developers.google.com/web/updates/2017/03/chrome-58-deprecations#remove_support_for_commonname_matching_in_certificates). Google Inc. Retrieved 2022-01-04.

[^9]: ["Common Name (CN) for a wildcard certificate"](https://docs.digicert.com/en/certcentral/certificate-tools/certificate-lifecycle-automation-guides/certcentral-managed-automation/common-name--cn--for-a-wildcard-certificate.html). DigiCert Documentation.

[^10]: ["Wildcard and SAN: Understanding Multi-Use SSL Certificates"](https://www.thawte.com/resources/pdfs/Thawte_Multiuse_SSL_WP.pdf) (PDF). [Thawte](https://en.wikipedia.org/wiki/Thawte "Thawte"). 2013.

[^11]: ["Wildcard Certificate Explained in Simpler Terms"](http://searchsecurity.techtarget.com/definition/wildcard-certificate). 23 May 2016.

[^12]: ["RFC 2818 - HTTP Over TLS"](http://tools.ietf.org/html/rfc2818#page-5). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). May 2000. p. 5. Retrieved 2014-12-15. \[...\] \*.a.com matches foo.a.com but not bar.foo.a.com.

[^13]: Newman, C. (June 1999). [*RFC 2595 - Using TLS with IMAP, POP3 and ACAP*](https://tools.ietf.org/html/rfc2595#page-3#page-3). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). p. 3. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2595](https://doi.org/10.17487%2FRFC2595). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2595](https://datatracker.ietf.org/doc/html/rfc2595). Retrieved 2014-12-15. For example, \*.example.com would match a.example.com, foo.example.com, etc. but would not match example.com.

[^14]: ["Guidelines For The Issuance And Management Of Extended Validation Certificates, Version 1.5.2"](https://cabforum.org/wp-content/uploads/EV-V1_5_2Libre.pdf#page=16) (PDF). CA/Browser Forum. 2014-10-16. p. 10. Retrieved 2014-12-15. Wildcard certificates are not allowed for EV Certificates.

[^15]: [x509v3\_config Subject Alternative Name](https://www.openssl.org/docs/apps/x509v3_config.html#Subject_Alternative_Name_)

[^16]: [The SAN option is available for EV SSL Certificates on Symantec.com](https://web.archive.org/web/20120613211438/http://www.symantec.com/theme.jsp?themeid=san-ssl-certificates)

[^17]: [SSLTools Certificate Lookup of Wikipedia.org's wildcard ssl certificate](http://www.ssltools.com/certificate_lookup/www.wikipedia.org)

[^18]: Saint-Andre, P.; Hodges, J. (March 2011). [*RFC 6125 - Representation and Verification of Domain-Based Application Service Identity within Internet Public Key Infrastructure Using X.509 (PKIX) Certificates in the Context of Transport Layer Security (TLS)*](https://tools.ietf.org/html/rfc6125#section-7.2#page-31). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). p. 31. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6125](https://doi.org/10.17487%2FRFC6125). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6125](https://datatracker.ietf.org/doc/html/rfc6125). Retrieved 2014-12-10. This document states that the wildcard character '\*' SHOULD NOT be included in presented identifiers but MAY be checked by application clients (mainly for the sake of backward compatibility with deployed infrastructure). \[...\] Several security considerations justify tightening the rules: \[...\]

[^19]: Rescorla, E. (May 2000). ["RFC 2818 - HTTP Over TLS"](https://tools.ietf.org/html/rfc2818.html). *tools.ietf.org*. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2818](https://doi.org/10.17487%2FRFC2818). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2818](https://datatracker.ietf.org/doc/html/rfc2818). Retrieved 2019-04-20.

[^20]: Saint-Andre, P.; Hodges, J. (March 2011). ["RFC 6125 - Representation and Verification of Domain-Based Application Service Identity within Internet Public Key Infrastructure Using X.509 (PKIX) Certificates in the Context of Transport Layer Security (TLS)"](https://tools.ietf.org/html/rfc6125.html). *tools.ietf.org*. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6125](https://doi.org/10.17487%2FRFC6125). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6125](https://datatracker.ietf.org/doc/html/rfc6125). Retrieved 2019-04-20.

[^21]: ["Disallow support for a\*.example.net, \*a.example.net, and a\*b.example.net in certificate wildcard handling"](https://codereview.chromium.org/762013002). The Chromium Projects, Google Inc. 3 December 2014. Retrieved 21 October 2020.

[^22]: ["Limit wildcard DNS ID support to names of the form \*.example.com (not foo\*.example.com)"](https://bugzilla.mozilla.org/show_bug.cgi?id=1107791). The Mozilla Foundation. 10 December 2014. Retrieved 21 October 2020.

[^23]: ["Disallow support for a\*.example.net, \*a.example.net, and a\*b.example.net in certificate wildcard handling"](https://bugs.python.org/issue23033). The Python Software Foundation. 26 November 2017. Retrieved 21 October 2020.

[^24]: ["Restrictions on data entries for public certificates"](https://docs.digicert.com/en/certcentral/manage-certificates/public-certificates---data-entries-that-violate-industry-standards.html#idp433257). [DigiCert](https://en.wikipedia.org/wiki/DigiCert "DigiCert") Documentation.

[^certs-25]: ["EMV CA"](https://emvca.com/index.html#EMV-CA). EMV Certificate Authority Worldwide. 2 December 2010. [Archived](https://web.archive.org/web/20200704133359/https://emvca.com/index.html#EMV-CA) from the original on 4 July 2020. Retrieved January 20, 2020.

[^26]: ["X.509 Certificate Policy For The Federal Bridge Certification Authority (FBCA)"](https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-policy-fbca.pdf) (PDF). [Archived](https://web.archive.org/web/20210318002502/https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-policy-fbca.pdf) (PDF) from the original on 2021-03-18. Retrieved 2021-05-07.

[^27]: ["X.509 Certificate Policy For The Federal Bridge Certification Authority (FBCA)"](https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-policy-fbca.pdf) (PDF). [Archived](https://web.archive.org/web/20210318002502/https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-policy-fbca.pdf) (PDF) from the original on 2021-03-18. Retrieved 2021-05-07.

[^28]: ["Usage Statistics and Market Share of SSL Certificate Authorities for Websites, May 2020"](https://w3techs.com/technologies/overview/ssl_certificate). *w3techs.com*. [Archived](https://web.archive.org/web/20220630123456/https://w3techs.com/technologies/overview/ssl_certificate) from the original on 2022-06-30. Retrieved 2020-05-01.

[^29]: ["Root Certificate Policy – The Chromium Projects"](https://www.chromium.org/Home/chromium-security/root-ca-policy). *www.chromium.org*. [Archived](https://web.archive.org/web/20170320053911/https://www.chromium.org/Home/chromium-security/root-ca-policy) from the original on 2017-03-20. Retrieved 2017-03-19.

[^30]: ["ca-certificates in Launchpad"](https://launchpad.net/ca-certificates). *launchpad.net*. 30 April 2010. [Archived](https://web.archive.org/web/20170320055526/https://launchpad.net/ca-certificates) from the original on 2017-03-20. Retrieved 2017-03-19.

[^footnotesmithdickinsonseamons20201-31]: [Smith, Dickinson & Seamons 2020](https://en.wikipedia.org/wiki/#CITEREFSmithDickinsonSeamons2020), p. 1.

[^footnotesheffersaint-andrefossati20227.5._certificate_revocation-32]: [Sheffer, Saint-Andre & Fossati 2022](https://en.wikipedia.org/wiki/#CITEREFShefferSaint-AndreFossati2022), 7.5. Certificate Revocation.

[^footnotechunglokchandrasekaranchoffnes20183-33]: [Chung et al. 2018](https://en.wikipedia.org/wiki/#CITEREFChungLokChandrasekaranChoffnes2018), p. 3.

[^footnotesmithdickinsonseamons202010-34]: [Smith, Dickinson & Seamons 2020](https://en.wikipedia.org/wiki/#CITEREFSmithDickinsonSeamons2020), p. 10.

[^footnotelarischchoffneslevinmaggs2017542-35]: [Larisch et al. 2017](https://en.wikipedia.org/wiki/#CITEREFLarischChoffnesLevinMaggs2017), p. 542.

[^footnotesmithdickinsonseamons20201-2-36]: [Smith, Dickinson & Seamons 2020](https://en.wikipedia.org/wiki/#CITEREFSmithDickinsonSeamons2020), p. 1-2.

[^37]: ["Firefox-dev Google group - Intent to Ship: Move Extended Validation Information out of the URL bar"](https://groups.google.com/forum/m/?fromgroups&hl=en#!topic/firefox-dev/6wAg_PpnlY4). *groups.google.com*. [Archived](https://web.archive.org/web/20200812031241/https://groups.google.com/forum/m/?hl=en&fromgroups#!topic/firefox-dev/6wAg_PpnlY4) from the original on 2020-08-12. Retrieved 2020-08-03.

[^38]: ["Chrome Security-dev Google group - Upcoming Change to Chrome's Identity Indicators"](https://groups.google.com/a/chromium.org/forum/m/#!msg/security-dev/h1bTcoTpfeI/jUTk1z7VAAAJ). *groups.google.com*. [Archived](https://web.archive.org/web/20200607075453/https://groups.google.com/a/chromium.org/forum/m/#!msg/security-dev/h1bTcoTpfeI/jUTk1z7VAAAJ) from the original on 2020-06-07. Retrieved 2020-08-03.

[^39]: ["Extended Validation Certificates are (Really, Really) Dead"](https://www.troyhunt.com/extended-validation-certificates-are-really-really-dead/). *troyhunt.com*. 12 August 2019. [Archived](https://web.archive.org/web/20200716132825/https://www.troyhunt.com/extended-validation-certificates-are-really-really-dead/) from the original on 2020-07-16. Retrieved 2020-08-03.

[^40]: ["DigiNotar removal by Mozilla"](https://blog.mozilla.org/security/2011/09/02/diginotar-removal-follow-up/). Mozilla.org. 2 September 2011. [Archived](https://web.archive.org/web/20120603095436/http://blog.mozilla.org/security/2011/09/02/diginotar-removal-follow-up/) from the original on 3 June 2012. Retrieved 30 July 2012.

[^41]: ["DigitNotar removal by Google"](http://googleonlinesecurity.blogspot.com/2011/08/update-on-attempted-man-in-middle.html). [Archived](https://web.archive.org/web/20110913024152/http://googleonlinesecurity.blogspot.com/2011/08/update-on-attempted-man-in-middle.html) from the original on 13 September 2011. Retrieved 30 July 2012.

[^42]: ["Using certificates article at Mozilla.org"](https://www.mozilla.org/projects/security/pki/psm/help_21/using_certs_help.html). Mozilla.org. [Archived](https://web.archive.org/web/20120712233633/http://www.mozilla.org/projects/security/pki/psm/help_21/using_certs_help.html) from the original on 12 July 2012. Retrieved 30 July 2012.

[^43]: Ran Canetti: Universally Composable Signature, Certification, and Authentication. CSFW 2004, [http://eprint.iacr.org/2003/239](http://eprint.iacr.org/2003/239) [Archived](https://web.archive.org/web/20090828160103/http://eprint.iacr.org/2003/239) 2009-08-28 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^44]: [Ben Laurie](https://en.wikipedia.org/wiki/Ben_Laurie "Ben Laurie"), [Ian Goldberg](https://en.wikipedia.org/wiki/Ian_Goldberg "Ian Goldberg") (18 January 2014). ["Replacing passwords on the Internet AKA post-Snowden Opportunistic Encryption"](https://www.w3.org/2014/strint/papers/46.pdf) (PDF). [Archived](https://web.archive.org/web/20141027134430/https://www.w3.org/2014/strint/papers/46.pdf) (PDF) from the original on 27 October 2014. Retrieved 15 November 2014.

[^45]: ["NIST Computer Security Publications – NIST Special Publications (SPs)"](http://csrc.nist.gov/publications/PubsSPs.html). *csrc.nist.gov*. [Archived](https://web.archive.org/web/20170917101423/http://csrc.nist.gov/publications/PubsSPs.html) from the original on 2017-09-17. Retrieved 2016-06-19.

[^46]: ["SP 800-32 Introduction to Public Key Technology and the Federal PKI Infrastructure"](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-32.pdf) (PDF). National Institute of Standards and Technology. [Archived](https://web.archive.org/web/20180605104516/https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-32.pdf) (PDF) from the original on 2018-06-05. Retrieved 2016-06-19.

[^47]: ["SP 800-25 Federal Agency Use of Public Key Technology for Digital Signatures and Authentication"](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-25.pdf) (PDF). National Institute of Standards and Technology. [Archived](https://web.archive.org/web/20180602102217/https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-25.pdf) (PDF) from the original on 2018-06-02. Retrieved 2016-06-19.

- Chung, Taejoong; Lok, Jay; Chandrasekaran, Balakrishnan; Choffnes, David; Levin, Dave; Maggs, Bruce M.; Mislove, Alan; Rula, John; Sullivan, Nick; Wilson, Christo (2018). ["Is the Web Ready for OCSP Must-Staple?"](https://taejoong.github.io/pubs/publications/chung-2018-ocsp.pdf) (PDF). *Proceedings of the Internet Measurement Conference 2018*. pp. 105–118. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/3278532.3278543](https://doi.org/10.1145%2F3278532.3278543). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781450356190](https://en.wikipedia.org/wiki/Special:BookSources/9781450356190 "Special:BookSources/9781450356190"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [53223350](https://api.semanticscholar.org/CorpusID:53223350).
- Larisch, James; Choffnes, David; Levin, Dave; Maggs, Bruce M.; Mislove, Alan; Wilson, Christo (2017). "CRLite: A Scalable System for Pushing All TLS Revocations to All Browsers". *2017 IEEE Symposium on Security and Privacy (SP)*. pp. 539–556. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/sp.2017.17](https://doi.org/10.1109%2Fsp.2017.17). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-5090-5533-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5090-5533-3 "Special:BookSources/978-1-5090-5533-3"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [3926509](https://api.semanticscholar.org/CorpusID:3926509).
- Sheffer, Yaron; Saint-Andre, Pierre; Fossati, Thomas (November 2022). [*Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)*](https://datatracker.ietf.org/doc/html/rfc9325). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC9325](https://doi.org/10.17487%2FRFC9325). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [9325](https://datatracker.ietf.org/doc/html/rfc9325).
- Smith, Trevor; Dickinson, Luke; Seamons, Kent (2020). "Let's Revoke: Scalable Global Certificate Revocation". *Proceedings 2020 Network and Distributed System Security Symposium*. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.14722/ndss.2020.24084](https://doi.org/10.14722%2Fndss.2020.24084). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-891562-61-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-891562-61-7 "Special:BookSources/978-1-891562-61-7"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [211268930](https://api.semanticscholar.org/CorpusID:211268930).