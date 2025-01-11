---
title: Federated identity - Wikipedia
source: https://en.wikipedia.org/wiki/Federated_identity
published: 2004-12-27
created: 2025-01-09
tags:
  - clippings
  - concept
  - IT
related:
  - "[[Identity federation]]"
  - "[[Identity and access management]]"
  - "[[information techology]]"
---

## in short

A **federated identity** in [information technology](https://en.wikipedia.org/wiki/Information_technology "Information technology") is the means of linking a person's [electronic identity](https://en.wikipedia.org/wiki/Digital_identity "Digital identity") and attributes, stored across multiple distinct [identity management](https://en.wikipedia.org/wiki/Identity_management "Identity management") systems.

Federated identity is related to [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on "Single sign-on") (SSO), in which a user's single [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication") ticket, or [token](https://en.wikipedia.org/wiki/Security_token "Security token"), is trusted **across multiple IT systems** or even organizations.[^2][^3] 
SSO is a subset of federated identity management, as it relates only to authentication and is understood on the level of[[ technical interoperability]], and it would not be possible without some sort of [federation](https://en.wikipedia.org/wiki/Federation_\(information_technology\) "Federation (information technology)").[^chadwick2009-4]

In information technology (IT), federated identity management (FIdM) amounts to having a common set of policies, practices and protocols in place to manage the identity and trust into IT users and devices across organizations.[^5]

Single sign-on (SSO) systems allow a single user authentication process across multiple IT systems or even organizations. SSO is a subset of federated identity management, as it relates only to authentication and technical interoperability.

[Centralized](https://en.wikipedia.org/wiki/Centralized "Centralized") identity management solutions were created to help deal with user and data security where the user and the systems they accessed were within the same network – or at least the same "domain of control". Increasingly, however, users are accessing external systems which are fundamentally outside their domain of control, and external users are accessing internal systems. The increasingly common separation of the user from the systems requiring access is an inevitable by-product of the decentralization brought about by the integration of the Internet into every aspect of both personal and business life. Evolving identity management challenges, and especially the challenges associated with cross-company, cross-domain access, have given rise to a new approach to identity management, known now as "federated identity management".[^6]

FIdM, or the "federation" of identity, describes the technologies, standards and use-cases which serve to enable the portability of identity information across otherwise autonomous security domains. The ultimate goal of identity federation is to enable users of one domain to securely access data or systems of another domain seamlessly, and without the need for completely redundant user administration. Identity federation comes in many flavors, including "user-controlled" or "user-centric" scenarios, as well as enterprise-controlled or [business-to-business](https://en.wikipedia.org/wiki/Business-to-business "Business-to-business") scenarios.

Federation is enabled through the use of open industry standards and/or openly published specifications, such that multiple parties can achieve interoperability for common use-cases. Typical use-cases involve things such as cross-domain, web-based single sign-on, cross-domain user account provisioning, cross-domain entitlement management and cross-domain user attribute exchange.

Use of identity federation standards can reduce cost by eliminating the need to scale one-off or proprietary solutions. It can increase security and lower risk by enabling an organization to identify and authenticate a user once, and then use that identity information across multiple systems, including external partner websites. It can improve privacy compliance by allowing the user to control what information is shared, or by limiting the amount of information shared. And lastly, it can drastically improve the end-user experience by eliminating the need for new account registration through automatic "federated provisioning" or the need to redundantly login through cross-domain single sign-on.

The notion of identity federation is extremely broad, and also evolving. It could involve user-to-user and user-to-application as well as application-to-application use-case scenarios at both the browser tier and the web services or [service-oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture "Service-oriented architecture") (SOA) tier. It can involve high-trust, high-security scenarios as well as low-trust, low-security scenarios. The levels of identity assurance that may be required for a given scenario are also being standardized through a common and open [Identity Assurance Framework](https://en.wikipedia.org/wiki/Identity_Assurance_Framework "Identity Assurance Framework"). It can involve user-centric use-cases, as well as enterprise-centric use-cases. The term "identity federation" is by design a generic term, and is not bound to any one specific protocol, technology, implementation or company. Identity federations may be bi-lateral relationships or multilateral relationships. In the latter case, the multilateral federation frequently occurs in a vertical market, such as in law enforcement (such as the National Identity Exchange Federation - NIEF[^7]), and research and education (such as InCommon).[^8] If the identity federation is bilateral, the two parties can exchange the necessary metadata (assertion signing keys, etc.) to implement the relationship. In a multilateral federation, the metadata exchange among participants is a more complex issue. It can be handled in a hub-and-spoke exchange or by the distribution of a metadata aggregate by a federated operator.

One thing that is consistent, however, is the fact that "federation" describes methods of identity portability which are achieved in an open, often standards-based manner – meaning anyone adhering to the open specification or standard can achieve the full spectrum of use-cases and interoperability.[^9]

Identity federation can be accomplished any number of ways, some of which involve the use of formal Internet standards, such as the [OASIS](https://en.wikipedia.org/wiki/OASIS_\(organization\) "OASIS (organization)") [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language "Security Assertion Markup Language") (SAML) specification, and some of which may involve open-source technologies and/or other openly published specifications (e.g. [Information Cards](https://en.wikipedia.org/wiki/Information_Card "Information Card"), [OpenID](https://en.wikipedia.org/wiki/OpenID "OpenID"), the [Higgins trust framework](https://en.wikipedia.org/wiki/Higgins_trust_framework "Higgins trust framework") or Novell's Bandit project).

Technologies used for federated identity include [SAML (Security Assertion Markup Language)](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language "Security Assertion Markup Language"), [OAuth](https://en.wikipedia.org/wiki/OAuth "OAuth"), OpenID, Security Tokens (Simple Web Tokens, JSON Web Tokens, and SAML assertions), [Web Service Specifications](https://en.wikipedia.org/wiki/List_of_web_service_specifications "List of web service specifications"), and [Windows Identity Foundation](https://en.wikipedia.org/wiki/Windows_Identity_Foundation "Windows Identity Foundation").[^10]

## Government initiatives

In the United States, the [National Institute of Standards and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology "National Institute of Standards and Technology") (NIST), through the [National Cybersecurity Center of Excellence](https://en.wikipedia.org/wiki/National_Cybersecurity_Center_of_Excellence "National Cybersecurity Center of Excellence"), has published a building block white paper in December 2016 on this topic[^11]

The Federal Risk and Authorization Management Program ([FedRAMP](https://en.wikipedia.org/wiki/FedRAMP "FedRAMP")) is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services.

FedRAMP enables Agencies to rapidly adapt from old, insecure legacy IT to mission-enabling, secure, and cost-effective cloud-based IT.[^12]

Digital identity platforms that allow users to log onto third-party websites, applications, mobile devices and gaming systems with their existing identity, i.e. enable [social login](https://en.wikipedia.org/wiki/Social_login "Social login"), include:

- [Amazon](https://en.wikipedia.org/wiki/Amazon.com "Amazon.com")[^13]
- [Dashlane](https://en.wikipedia.org/wiki/Dashlane "Dashlane")
- [Foursquare](https://en.wikipedia.org/wiki/Foursquare_City_Guide "Foursquare City Guide")
- [GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")
- [Google Account](https://en.wikipedia.org/wiki/Google_Account "Google Account")
- [LastPass](https://en.wikipedia.org/wiki/LastPass "LastPass")[^14]
- [Microsoft account](https://en.wikipedia.org/wiki/Microsoft_account "Microsoft account") – Formerly Windows Live ID
- [PayPal](https://en.wikipedia.org/wiki/PayPal "PayPal")
- [Mozilla Persona](https://en.wikipedia.org/wiki/Mozilla_Persona "Mozilla Persona") On November 30, 2016, Mozilla shut down the persona.org services
- [Yahoo!](https://en.wikipedia.org/wiki/Yahoo! "Yahoo!") – users can use their Yahoo! ID to log onto other sites, and users used to have the possibility to log onto Yahoo! with their Google or Facebook IDs.

- [Account pre-hijacking](https://en.wikipedia.org/wiki/Account_pre-hijacking "Account pre-hijacking")
- [Claims-based identity](https://en.wikipedia.org/wiki/Claims-based_identity "Claims-based identity")
- [Digital identity](https://en.wikipedia.org/wiki/Digital_identity "Digital identity")
- [Self-sovereign identity](https://en.wikipedia.org/wiki/Self-sovereign_identity "Self-sovereign identity")

[^1]: Madsen, Paul, ed. (5 December 2005). ["Liberty Alliance Project White Paper: Liberty ID-WSF People Service - federated social identity"](https://web.archive.org/web/20180526195535/http://www.projectliberty.org/liberty/content/download/387/2720/file/Liberty_Federated_Social_Identity.pdf) (PDF). Archived from [the original](http://www.projectliberty.org/liberty/content/download/387/2720/file/Liberty_Federated_Social_Identity.pdf) (PDF) on 2018-05-26. Retrieved 2013-07-11.

[^2]: [Federated Identity for Web Applications](https://msdn.microsoft.com/en-gb/library/ff359110.aspx), *microsoft.com*. Retrieved 3 July 2017.

[^3]: Gaedke, Martin; Johannes, Meinecke; Nussbaumer, Martin (2005-05-01). "A modeling approach to federated identity and access management". [*Special interest tracks and posters of the 14th international conference on World Wide Web - WWW '05*](https://web.archive.org/web/20170913232609/http://wwwconference.org/www2005/cdrom/docs/p1156.pdf) (PDF). pp. 1156–1157\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/1062745.1062916](https://doi.org/10.1145%2F1062745.1062916). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1595930514](https://en.wikipedia.org/wiki/Special:BookSources/978-1595930514 "Special:BookSources/978-1595930514"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [8828239](https://api.semanticscholar.org/CorpusID:8828239). Archived from [the original](http://wwwconference.org/www2005/cdrom/docs/p1156.pdf) (PDF) on 2017-09-13. Retrieved 2017-07-03.

[^chadwick2009-4]: Chadwick, David W. (2009). ["Federated Identity Management"](https://www.cs.kent.ac.uk/pubs/2009/3030/content.pdf) (PDF). *Foundations of Security Analysis and Design V*. Lecture Notes in Computer Science. Vol. 5705. pp. 96–120\. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.250.4705](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.250.4705). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-3-642-03829-7\_3](https://doi.org/10.1007%2F978-3-642-03829-7_3). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-642-03828-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-03828-0 "Special:BookSources/978-3-642-03828-0"). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0302-9743](https://search.worldcat.org/issn/0302-9743). Retrieved 2017-07-03.

[^5]: [http://net.educause.edu/ir/library/pdf/EST0903.pdf](http://net.educause.edu/ir/library/pdf/EST0903.pdf) [Archived](https://web.archive.org/web/20170829201047/http://net.educause.edu/ir/library/pdf/EST0903.pdf) 2017-08-29 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") 7 things you should know about Federated Identity Management

[^6]: Jensen, Jostein (2012). ["Federated Identity Management Challenges"](https://ieeexplore.ieee.org/document/6329187). *2012 Seventh International Conference on Availability, Reliability and Security*. pp. 230–235\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/ares.2012.68](https://doi.org/10.1109%2Fares.2012.68). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4673-2244-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4673-2244-7 "Special:BookSources/978-1-4673-2244-7"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [18145013](https://api.semanticscholar.org/CorpusID:18145013). Retrieved 2023-12-11.

[^7]: ["National Identity Exchange Federation"](https://nief.org/). *nief.org*. Retrieved 2018-05-15.

[^8]: ["InCommon: Security, Privacy and Trust for the Research and Education Community"](http://incommon.org/). *incommon.org*. Retrieved 2018-05-15.

[^9]: Cabarcos, Patricia Arias (2013). ["Dynamic Infrastructure for Federated Identity Management in Open Environments"](http://rgdoi.net/10.13140/RG.2.1.2918.0962). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.13140/RG.2.1.2918.0962](https://doi.org/10.13140%2FRG.2.1.2918.0962).

[^10]: Rountree, Derrick (2012). *Federated Identity Primer*. Syngress Media. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0124071896](https://en.wikipedia.org/wiki/Special:BookSources/978-0124071896 "Special:BookSources/978-0124071896").

[^11]: [https://www.nccoe.nist.gov/publications/project-description/privacy-enhanced-identity-brokers-project-description-final](https://www.nccoe.nist.gov/publications/project-description/privacy-enhanced-identity-brokers-project-description-final) Privacy-Enhanced Identity Federation

[^12]: ["FedRAMP and Azure"](https://techcommunity.microsoft.com/t5/azure-architecture-blog/fedramp-and-azure/ba-p/1781624). *TECHCOMMUNITY.MICROSOFT.COM*. Retrieved 2023-09-13.

[^13]: [Login With Amazon](http://login.amazon.com/)

[^14]: ["Single Sign-On (SSO) Solution | LastPass"](https://www.lastpass.com/products/sso).