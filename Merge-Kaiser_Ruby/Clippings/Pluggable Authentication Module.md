---
aliases:
  - PAM
source: https://en.wikipedia.org/wiki/Pluggable_Authentication_Module
published: 2004-05-18
created: 2025-02-15
tags:
  - PAM
  - auth-mechanism
related:
  - "[[unix]]"
  - "[[PAM Unix]]"
---
**Flexible** mechanism for authenticating users

> [!NOTE]- structure
> ![[~/×/55d31599b134fa897bf0dafde85e3eef_MD5.png|400]]


A **pluggable authentication module** (**PAM**) is a mechanism to integrate multiple low-level [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication") schemes into a high-level [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") (API). PAM allows programs that rely on authentication to be written independently of the underlying authentication scheme. It was first proposed by [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems") in an [Open Software Foundation](https://en.wikipedia.org/wiki/Open_Software_Foundation "Open Software Foundation") [Request for Comments](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") (RFC) 86.0 dated October 1995.[^1] It was adopted as the authentication framework of the [Common Desktop Environment](https://en.wikipedia.org/wiki/Common_Desktop_Environment "Common Desktop Environment"). As a stand-alone [open-source](https://en.wikipedia.org/wiki/Open-source "Open-source") infrastructure, PAM first appeared in [Red Hat Linux](https://en.wikipedia.org/wiki/Red_Hat_Linux "Red Hat Linux") 3.0.4 in August 1996 in the [Linux PAM](https://en.wikipedia.org/wiki/Linux_PAM "Linux PAM") project. PAM is currently supported in the [AIX operating system](https://en.wikipedia.org/wiki/AIX_operating_system "AIX operating system"), [DragonFly BSD](https://en.wikipedia.org/wiki/DragonFly_BSD "DragonFly BSD"),[^2] [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD"), [HP-UX](https://en.wikipedia.org/wiki/HP-UX "HP-UX"), [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS"), [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD") and [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)").

Since no central standard of PAM behavior exists, there was a later attempt to standardize PAM as part of the [X/Open](https://en.wikipedia.org/wiki/X/Open "X/Open") UNIX standardization process, resulting in the **X/Open Single Sign-on** (**XSSO**) standard. This standard was not ratified, but the standard draft has served as a reference point for later PAM implementations (for example, [OpenPAM](https://en.wikipedia.org/wiki/OpenPAM "OpenPAM")).

Since most PAM implementations do not interface with remote clients themselves, PAM, on its own, cannot implement [Kerberos](https://en.wikipedia.org/wiki/Kerberos_\(protocol\) "Kerberos (protocol)"), the most common type of [SSO](https://en.wikipedia.org/wiki/Single_sign-on "Single sign-on") used in Unix environments. This led to SSO's incorporation as the "primary authentication" portion of the would-be XSSO standard and the advent of technologies such as [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO "SPNEGO") and [SASL](https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer "Simple Authentication and Security Layer"). This lack of functionality is also the reason [SSH](https://en.wikipedia.org/wiki/Secure_Shell "Secure Shell") does its own authentication mechanism negotiation.

In most PAM implementations, pam\_krb5 only fetches [Ticket Granting Tickets](https://en.wikipedia.org/wiki/Ticket_Granting_Ticket "Ticket Granting Ticket"), which involves prompting the user for credentials, and this is only used for the initial login in an SSO environment. To fetch a service ticket for a particular application, and not prompt the user to enter credentials again, that application must be specifically coded to support Kerberos. This is because pam\_krb5 cannot itself get service tickets, although there are versions of PAM-KRB5 that are attempting to work around the issue.[^3]

- Implementations:
- [Java Authentication and Authorization Service](https://en.wikipedia.org/wiki/Java_Authentication_and_Authorization_Service "Java Authentication and Authorization Service")
- [Linux PAM](https://en.wikipedia.org/wiki/Linux_PAM "Linux PAM")
- [OpenPAM](https://en.wikipedia.org/wiki/OpenPAM "OpenPAM")
- [Identity management](https://en.wikipedia.org/wiki/Identity_management "Identity management") – the general topic
- [Name Service Switch](https://en.wikipedia.org/wiki/Name_Service_Switch "Name Service Switch") – manages user databases
- [System Security Services Daemon](https://en.wikipedia.org/wiki/System_Security_Services_Daemon "System Security Services Daemon") – SSO implementation based on PAM and NSS

[^1]: [The Original Solaris PAM RFC](https://www.kernel.org/pub/linux/libs/pam/pre/doc/rfc86.0.txt.gz)

[^2]: [PAM manual page of DragonFly BSD](http://leaf.dragonflybsd.org/cgi/web-man?command=pam&section=ANY)

[^3]: [PAM-KRB5](http://www.eyrie.org/~eagle/software/pam-krb5/)

Specifications:

- [The Original Solaris PAM RFC](https://www.kernel.org/pub/linux/libs/pam/pre/doc/rfc86.0.txt.gz)
- [X/Open Single Sign-on (XSSO) 1997 Draft Working Paper](https://pubs.opengroup.org/onlinepubs/8329799/toc.pdf)

Guides:

- [PAM and password control](https://web.archive.org/web/20130819174111/http://www.linux.ie/articles/pam.php) at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") (archived August 19, 2013)
- [Pluggable Authentication Modules for Linux](http://www.linuxjournal.com/article/2120)
- [Making the Most of Pluggable Authentication Modules (PAM)](http://www.informit.com/articles/article.aspx?p=20968)
- [Oracle Solaris Administration: Security Services: Using PAM](http://docs.oracle.com/cd/E23824_01/html/821-1456/pam-1.html)

___

## From Ai

 **PAM** (Pluggable Authentication Modules) is a Linux-PAM (Linux Pluggable
  Authentication Modules) framework that provides a flexible and modular way to
  authenticate users on a Linux system, including Ubuntu.

 PAM is a set of **libraries** that allow system administrators to integrate multiple
  authentication mechanisms into their systems. It provides a way to authenticate
  **users, manage passwords, and enforce access control policies** in a highly
  customizable and flexible manner.

  Here are some key features and benefits of PAM on Ubuntu:

 **Modules**: PAM consists of a collection of modules, each of which provides a
  specific authentication mechanism. Examples of PAM modules include:

  •  pam_unix.so : provides traditional Unix password authentication
  •  pam_sss.so : integrates with SSSD (System Security Services Daemon) for
  authentication with LDAP, Kerberos, and other identity stores
  •  pam_krb5.so : provides Kerberos authentication
  •  pam_ldap.so : provides LDAP authentication

 **Configuration**: PAM configuration is stored in the  `/etc/pam.d/`  directory, which
  contains configuration files for each PAM-enabled service (e.g.,  login ,  ssh ,
  sudo ). Each configuration file specifies the PAM modules to be used for
  authentication, account management, and session management.

 **Stacking**: One of the key features of PAM is its ability to **stack multiple**
  **modules** together to create a customized authentication process. This allows
  administrators to combine different authentication mechanisms to achieve complex
  access control policies.

 **PAM categorie**s: PAM modules can be categorized into four types:

  •  **auth** : authenticates users (e.g., password verification)
  •  **account** : manages user accounts (e.g., account expiration, access control)
  •  **password** : manages password changes and updates
  •  **session** : manages user sessions (e.g., login, logout)

 **Default** PAM configuration on Ubuntu: By default, Ubuntu comes with a set of PAM
  configuration files that provide a basic authentication mechanism using the
  pam_unix.so  module. This module uses the traditional Unix password file
  /etc/passwd  for authentication.

  Common PAM use cases on Ubuntu:

  • Enabling password-less SSH login using public key authentication with  pam_ssh.
  so
  • Integrating Ubuntu with **Active Directory** using  pam_krb5.so  and  pam_sss.so
  • Implementing [[two-factor authentication]] using  pam_google_authenticator.so  and
  pam_unix.so[^4] [^5]
  
[^4]: [[Google Authenticatior]]
[^5]: [[PAM Unix]]