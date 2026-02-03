---
source: https://en.wikipedia.org/wiki/Time-based_one-time_password
published: 2009-11-03
created: 2025-11-02
tags:
  - algoritam
---

**Time-based one-time password** (**TOTP**) is a computer algorithm that generates a [one-time password](https://en.wikipedia.org/wiki/One-time_password "One-time password") (OTP) using the current time as a source of uniqueness. As an extension of the [HMAC-based one-time password](https://en.wikipedia.org/wiki/HMAC-based_one-time_password "HMAC-based one-time password") (HOTP) algorithm, it has been adopted as [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force") (IETF) standard [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [6238](https://www.rfc-editor.org/rfc/rfc6238).[^1]

![[~/×/262cce73f973c76c57b5f193d2598d63_MD5.png]]

Aegis Authenticator, showing time-based one-time passwords

TOTP is a cornerstone of the [Initiative for Open Authentication](https://en.wikipedia.org/wiki/Initiative_for_Open_Authentication "Initiative for Open Authentication") (OATH) and is used in a number of [two-factor authentication](https://en.wikipedia.org/wiki/Two-factor_authentication "Two-factor authentication") (2FA) systems.

Through the collaboration of several OATH members, a TOTP draft was developed in order to create an industry-backed standard. It complements the event-based one-time standard HOTP, and it offers end user organizations and enterprises more choice in selecting technologies that best fit their application requirements and [security](https://en.wikipedia.org/wiki/Security "Security") guidelines. In 2008, OATH submitted a draft version of the specification to the IETF. This version incorporates all the feedback and commentary that the authors received from the technical community based on the prior versions submitted to the IETF.[^2] In May 2011, TOTP officially became [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") 6238.[^1]

To establish TOTP authentication, the authenticatee and authenticator must pre-establish both the [HOTP parameters](https://en.wikipedia.org/wiki/HMAC-based_One-time_Password_algorithm#parameters "HMAC-based One-time Password algorithm") and the following TOTP parameters:

- *T* <sub>0</sub>, the [Unix time](https://en.wikipedia.org/wiki/Unix_time "Unix time") from which to start counting time steps (default is 0),
- *T <sub>X</sub>*, an interval which will be used to calculate the value of the counter *C <sub>T</sub>* (default is 30 seconds).

Both the authenticator and the authenticatee compute the TOTP value, then the authenticator checks whether the TOTP value supplied by the authenticatee matches the locally generated TOTP value. Some authenticators allow values that should have been generated before or after the current time in order to account for slight [clock skews](https://en.wikipedia.org/wiki/Clock_skew "Clock skew"), network latency and user delays.

TOTP uses the HOTP algorithm, replacing the counter with a [non-decreasing](https://en.wikipedia.org/wiki/Increasing "Increasing") value based on the current time:

TOTP value(*K*) = [HOTP value](https://en.wikipedia.org/wiki/HMAC-based_One-time_Password_Algorithm#Definition "HMAC-based One-time Password Algorithm") (*K*, *C <sub>T</sub>*),

calculating counter value 
$$
{\displaystyle C_{T}=\left\lfloor {\frac {T-T_{0}}{T_{X}}}\right\rfloor ,}
$$
 where

- *C <sub>T</sub>* is the count of the number of durations *T <sub>X</sub>* between *T* <sub>0</sub> and *T*,
- *T* is the current time in seconds since a particular [epoch](https://en.wikipedia.org/wiki/Epoch "Epoch"),
- *T* <sub>0</sub> is the epoch as specified in seconds since the [Unix epoch](https://en.wikipedia.org/wiki/Unix_epoch "Unix epoch") (e.g. if using [Unix time](https://en.wikipedia.org/wiki/Unix_time "Unix time"), then *T* <sub>0</sub> is 0),
- *T <sub>X</sub>* is the length of one-time duration (e.g. 30 seconds).

Unlike [passwords](https://en.wikipedia.org/wiki/Password "Password"), TOTP codes are only valid for a limited time. However, users must enter TOTP codes into an authentication page, which creates the potential for [phishing attacks](https://en.wikipedia.org/wiki/Phishing "Phishing"). However, due to the short window in which TOTP codes are valid, attackers must proxy the credentials in real time.[^3]

TOTP credentials are also based on a shared secret known to both the client and the server, creating multiple locations from which a secret can be stolen. An attacker with access to this shared secret could generate new, valid TOTP codes at will. This can be a particular problem if the attacker breaches a large authentication database.[^4]

- [Botan (programming library)](https://en.wikipedia.org/wiki/Botan_\(programming_library\) "Botan (programming library)")
- [FreeOTP](https://en.wikipedia.org/wiki/FreeOTP "FreeOTP")
- [Google Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator "Google Authenticator")
- [multiOTP](https://en.wikipedia.org/wiki/MultiOTP "MultiOTP")
- [Comparison of TOTP applications](https://en.wikipedia.org/wiki/Comparison_of_TOTP_applications "Comparison of TOTP applications")

[^1]: m'Raihi, David; Rydell, Johan; Pei, Mingliang; Machani, Salah (May 2011). ["RFC 6238 – TOTP: Time-Based One-Time Password Algorithm"](https://web.archive.org/web/20110711124823/http://tools.ietf.org/html/rfc6238). Archived from [the original](https://tools.ietf.org/html/rfc6238) on July 11, 2011. Retrieved July 13, 2011.

[^2]: Alexander, Madison. ["OATH Submits TOTP: Time-Based One Time Password Specification to IETF"](http://www.openauthentication.org/news/20080408). *Open Authentication*. [Archived](https://web.archive.org/web/20130409124046/http://www.openauthentication.org/news/20080408) from the original on 9 April 2013. Retrieved 22 February 2010.

[^3]: Umawing, Jovi (21 January 2019). ["Has two-factor authentication been defeated? A spotlight on 2FA's latest challenge"](https://blog.malwarebytes.com/cybercrime/2019/01/two-factor-authentication-defeated-spotlight-2fas-latest-challenge/). *Malwarebytes Labs*. [Archived](https://web.archive.org/web/20200925082641/https://blog.malwarebytes.com/cybercrime/2019/01/two-factor-authentication-defeated-spotlight-2fas-latest-challenge/) from the original on 25 September 2020. Retrieved 9 August 2020.

[^4]: Zetter, Kim. ["RSA Agrees to Replace Security Tokens After Admitting Compromise"](https://www.wired.com/2011/06/rsa-replaces-securid-tokens/). *WIRED*. [Archived](https://web.archive.org/web/20201112032021/https://www.wired.com/2011/06/rsa-replaces-securid-tokens/) from the original on 12 November 2020. Retrieved 17 February 2017.