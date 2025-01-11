---
title: Identity and access management - Wikipedia
source: https://en.wikipedia.org/wiki/Identity_and_access_management
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2004-08-25
created: 2025-01-09
description: 
tags:
  - clippings
  - dev
  - authentication
  - concept
related:
  - "[[AWS]]"
  - "[[GCP]]"
---
Technical and Policy systems to give users appropriate access

**Identity and access management** (**IAM** or **IdAM**) or **Identity management** (**IdM**), is a framework of policies and technologies to ensure that the right users (that are part of the ecosystem connected to or within an enterprise) have the appropriate access to technology resources. 
IAM systems fall under the overarching umbrellas of [IT security](https://en.wikipedia.org/wiki/Computer_security "Computer security") and [data management](https://en.wikipedia.org/wiki/Data_management "Data management"). Identity and access management systems not only identify, authenticate, and control access for individuals who will be utilizing IT resources but also the hardware and applications employees need to access.

IdM addresses the need to ensure appropriate access to resources across increasingly heterogeneous technology environments and to meet increasingly rigorous compliance requirements.[^:0-3]

The terms "identity management" (IdM) and "identity and access management" are used interchangeably in the area of identity access management.[^4]

[Identity-management systems](https://en.wikipedia.org/wiki/Identity_management_systems "Identity management systems"), products, applications and platforms manage identifying and ancillary data about entities that include individuals, computer-related hardware, and [software applications](https://en.wikipedia.org/wiki/Software_application "Software application").

IdM covers issues such as how users gain an [identity](https://en.wikipedia.org/wiki/Digital_identity "Digital identity"), the roles, and sometimes the permissions that identity grants, the protection of that identity, and the technologies supporting that protection (e.g., [network protocols](https://en.wikipedia.org/wiki/Protocol_\(computing\) "Protocol (computing)"), [digital certificates](https://en.wikipedia.org/wiki/Public_key_certificate "Public key certificate"), [passwords](https://en.wikipedia.org/wiki/Password "Password"), etc.).

Identity management (ID management) – or identity and access management (IAM) – is the organizational and technical processes for first registering and authorizing access rights in the configuration phase, and then in the operation phase for identifying, authenticating and controlling individuals or groups of people to have access to applications, systems or networks based on previously authorized access rights. Identity management (IdM) is the task of controlling information about users on computers. Such information includes information that [authenticates](https://en.wikipedia.org/wiki/Authentication "Authentication") the identity of a user, and information that describes data and actions they are [authorized](https://en.wikipedia.org/wiki/Authorization "Authorization") to access and/or perform.
It also includes the management of descriptive information about the user and how and by whom that information can be accessed and modified. In addition to users, managed entities typically include hardware and network resources and even applications.[^5] 
The **diagram** below shows the relationship between the configuration and operation phases of **IAM**, as well as the distinction between `identity` management and `access` management.

[![Phases and steps of IAM](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Fig-IAM-phases.png/400px-Fig-IAM-phases.png)](https://en.wikipedia.org/wiki/File:Fig-IAM-phases.png "Phases and steps of IAM")

[Access control](https://en.wikipedia.org/wiki/Access_control "Access control") is the enforcement of access rights defined as part of [access authorization](https://en.wikipedia.org/wiki/Authorization "Authorization").

[Digital identity](https://en.wikipedia.org/wiki/Digital_identity "Digital identity") is an entity's online presence, encompassing [[personal identifying information]] (PII) and ancillary information. 

In the real-world context of engineering online systems, identity management can involve **five** basic functions:

- Pure identity function: Creation, management and deletion of identities without regard to access or entitlements
- User access (log-on) function: For example, a [smart card](https://en.wikipedia.org/wiki/Smart_card "Smart card") and its associated data used by a customer to log on to a service or services (a traditional view)
- Service function: A system that delivers personalized, role-based, online, on-demand, multimedia (content), presence-based services to users and their devices
- [[Identity federation]]: A system that relies on [federated identity](https://en.wikipedia.org/wiki/Federated_identity "Federated identity") to authenticate a user without knowing their password
- Audit function: Monitors bottlenecks, malfunctions and suspect behaviors

A general model of [identity](https://en.wikipedia.org/wiki/Identity_\(philosophy\) "Identity (philosophy)") can be constructed from a small set of axioms, for example that all identities in a given [namespace](https://en.wikipedia.org/wiki/Namespace "Namespace") are unique, or that such identities bear a specific relationship to corresponding entities in the real world. Such an axiomatic model expresses "pure identity" in the sense that the model is not constrained by a specific application context.

In general, an entity (real or virtual) can have multiple identities and each identity can encompass multiple attributes, some of which are unique within a given name space. The diagram below illustrates the conceptual relationship between identities and entities, as well as between identities and their attributes.

[![Identity conceptual view](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Identity-concept.svg/400px-Identity-concept.svg.png)](https://en.wikipedia.org/wiki/File:Identity-concept.svg "Identity conceptual view")

In most theoretical and all practical models of [digital identity](https://en.wikipedia.org/wiki/Digital_identity "Digital identity"), a given identity object consists of a finite set of [properties](https://en.wikipedia.org/wiki/Property_\(philosophy\) "Property (philosophy)") (attribute values). These properties record information about the object, either for purposes external to the model or to operate the model, for example in classification and retrieval. A "pure identity" model is strictly not concerned with the external [semantics](https://en.wikipedia.org/wiki/Semantics "Semantics") of these properties.

The most common departure from "pure identity" in practice occurs with properties intended to assure some aspect of identity, for example a [digital signature](https://en.wikipedia.org/wiki/Digital_signature "Digital signature")[^:0-3] or [software token](https://en.wikipedia.org/wiki/Software_token "Software token") which the model may use internally to verify some aspect of the identity in satisfaction of an external purpose. To the extent that the model expresses such semantics internally, it is not a pure model.

Contrast this situation with properties that might be externally used for purposes of [information security](https://en.wikipedia.org/wiki/Information_security "Information security") such as managing access or entitlement, but which are simply stored, maintained and retrieved, without special treatment by the model. The absence of external semantics within the model qualifies it as a "pure identity" model.

Identity management can thus be defined as a set of operations on a given identity model, or more generally, as a set of capabilities with reference to it.

In practice, identity management often expands to express how model content is to be [provisioned](https://en.wikipedia.org/wiki/Provisioning_\(technology\) "Provisioning (technology)") and [reconciled](https://en.wikipedia.org/wiki/Reconciliation_\(Accounting\) "Reconciliation (Accounting)") among multiple identity models. The process of reconciling accounts may also be referred to as de-provisioning.[^9]

User access enables users to assume a specific digital identity across applications, which enables access controls to be assigned and evaluated against this identity. The use of a single identity for a given user across multiple systems eases tasks for administrators and users. It simplifies access monitoring and verification and allows the organizations to minimize excessive privileges granted to one user. Ensuring user access security is crucial in this process, as it involves protecting the integrity and confidentiality of user credentials and preventing unauthorized access. Implementing robust authentication mechanisms, such as multi-factor authentication (MFA), regular security audits, and strict access controls, helps safeguard user identities and sensitive data. User access can be tracked from initiation to termination of user access.[^10]

When organizations deploy an identity management process or system, their motivation is normally not primarily to manage a set of identities, but rather to grant appropriate access rights to those entities via their identities. In other words, access management is normally the motivation for identity management and the two sets of processes are consequently closely related.[^:1-11]

Organizations continue to add services for both internal users and by customers. Many such services require identity management to properly provide these services. Increasingly, identity management has been partitioned from application functions so that a single identity can serve many or even all of an organization's activities.[^:1-11]

For internal use identity management is evolving to control access to all digital assets, including devices, network equipment, servers, portals, content, applications and/or products.

Services often require access to extensive information about a user, including address books, preferences, entitlements and contact information. Since much of this information is subject to privacy and/or confidentiality requirements, controlling access to it is vital.[^12]

### Identity federation

Identity federation comprises one or more systems that share user access and allow users to log in based on authenticating against one of the systems participating in the federation. This trust between several systems is often known as a "circle of trust". In this setup, one system acts as the [identity provider](https://en.wikipedia.org/wiki/Identity_provider_\(SAML\) "Identity provider (SAML)") (IdP) and other systems act as [service providers](https://en.wikipedia.org/wiki/Service_provider "Service provider") (SPs). When a user needs to access some service controlled by SP, they first authenticate against the IdP. Upon successful authentication, the IdP sends a secure "assertion" to the SP. "SAML assertions, specified using a markup language intended for describing security assertions, can be used by a verifier to make a statement to a relying party about the identity of a claimant. SAML assertions may optionally be digitally signed."[^13]

#### Popular SAML languages

The most popular reference implementations of the SAML specifications are [Shibboleth](https://en.wikipedia.org/wiki/Shibboleth_\(software\) "Shibboleth (software)") and Simple-SAML.php. Both of these languages also provide single sign on (SSO) capabilities. [^14]

## System capabilities

In addition to creation, deletion, modification of user identity data either assisted or self-service, identity management controls ancillary entity data for use by applications, such as contact information or location.

- [Authentication](https://en.wikipedia.org/wiki/Authentication "Authentication"): Verification that an entity is who/what it claims to be using a password, biometrics such as a fingerprint, or distinctive behavior such as a gesture pattern on a touchscreen.
- [Authorization](https://en.wikipedia.org/wiki/Authorization "Authorization"): Managing authorization information that defines what operations an entity can perform in the context of a specific application. For example, one user might be authorized to enter a sales order, while a different user is authorized to approve the credit request for that order.
- [Roles](https://en.wikipedia.org/wiki/Role-based_access_control "Role-based access control"): Roles are groups of operations and/or other roles. Users are granted roles often related to a particular job or job function. Roles are granted authorizations, effectively authorizing all users which have been granted the role. For example, a user administrator role might be authorized to reset a user's password, while a system administrator role might have the ability to assign a user to a specific server.
- [Delegation](https://en.wikipedia.org/wiki/Delegation_\(computer_security\) "Delegation (computer security)"): Delegation allows local administrators or supervisors to perform system modifications without a global administrator or for one user to allow another to perform actions on their behalf. For example, a user could delegate the right to manage office-related information.
- Interchange: The [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language "Security Assertion Markup Language") [protocol](https://en.wikipedia.org/wiki/Communication_protocol "Communication protocol") is a prominent means used to exchange identity information between two identity domains.[^15] [OpenID Connect](https://en.wikipedia.org/wiki/OpenID_Connect "OpenID Connect") is another such protocol.

Putting personal information onto computer networks necessarily raises [privacy](https://en.wikipedia.org/wiki/Privacy "Privacy") concerns. Absent proper protections, the data may be used to implement a [surveillance society](https://en.wikipedia.org/wiki/Mass_surveillance "Mass surveillance").[^footnotetaylorlipsorgan2009-16]

[Social web](https://en.wikipedia.org/wiki/Social_web "Social web") and [online social networking](https://en.wikipedia.org/wiki/Online_social_networking "Online social networking") services make heavy use of identity management. Helping users decide how to manage access to their personal information has become an issue of broad concern.[^footnotegrossacquistiheinz2005-17][^footnotetaylor2008-18]

[Identity theft](https://en.wikipedia.org/wiki/Identity_theft "Identity theft") happens when thieves gain access to identity information – such as the personal details needed to get access to a bank account.

Research related to the management of identity covers disciplines such as technology, social sciences, humanities and the law.[^footnotehalperinbackhouse2008-19]

Decentralized identity management is identity management based on [decentralized identifiers](https://en.wikipedia.org/wiki/Decentralized_identifiers "Decentralized identifiers") (DIDs).[^w3c-20]

Within the [Seventh Research Framework Programme](https://en.wikipedia.org/wiki/Seventh_Framework_Programme "Seventh Framework Programme") of the European Union from 2007 to 2013, several new projects related to Identity Management started.

The PICOS Project investigates and develops a state-of-the-art platform for providing trust, privacy and identity management in mobile communities.[^21]

PrimeLife develops concepts and technologies to help individuals to protect autonomy and retain control over personal information, irrespective of activities.[^22]

SWIFT focuses on extending identity functions and federation to the network while addressing usability and privacy concerns and leverages identity technology as a key to integrate service and transport infrastructures for the benefit of users and the providers.[^23]

Ongoing projects include Future of Identity in the Information Society (FIDIS),[^24] GUIDE,[^istrg.som.surrey.ac.uk-25] and PRIME.[^prime-project.eu_2006-26]

[Academic journals](https://en.wikipedia.org/wiki/Academic_journals "Academic journals") that publish articles related to identity management include:

- *Ethics and Information Technology*
- *Identity in the Information Society*
- *Surveillance & Society*<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (May 2016)">citation needed</span></a></i>]</sup>

Less specialized journals publish on the topic and, for instance, have special issues on identity such as:

- *Online Information Review*.[^online_information_review:_vol._33_iss._31-27]

[ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization") (and more specifically [ISO/IEC JTC 1](https://en.wikipedia.org/wiki/ISO/IEC_JTC_1 "ISO/IEC JTC 1"), SC27 IT Security techniques WG5 Identity Access Management and Privacy techniques) is conducting some standardization work for identity management ([ISO 2009](https://en.wikipedia.org/wiki/#CITEREFISO2009)), such as the elaboration of a framework for identity management, including the definition of identity-related terms. The published standards and current work items includes the following:

- ISO/IEC 24760-1 a framework for identity management – Part 1: Terminology and concepts
- ISO/IEC 24760-2 a framework for identity management – Part 2: Reference architecture and requirements
- ISO/IEC DIS 24760-3 a framework for identity management – Part 3: Practice
- ISO/IEC 29115 entity authentication assurance
- ISO/IEC 29146 a framework for access management
- ISO/IEC CD 29003 identity proofing and verification
- ISO/IEC 29100 privacy framework
- ISO/IEC 29101 privacy architecture
- ISO/IEC 29134 privacy impact assessment methodology

## Organization implications

In each organization there is normally a role or department that is responsible for managing the schema of digital identities of their staff and their own objects, which are represented by object identities or [object identifiers](https://en.wikipedia.org/wiki/Object_identifier "Object identifier") (OID).[^28] The organizational policies and processes and procedures related to the oversight of identity management are sometimes referred to as *Identity Governance and Administration* (IGA). Commercial software tools exist to help automate and simplify such organizational-level identity management functions.[^29] How effectively and appropriately such tools are used falls within scope of broader [governance, risk management, and compliance](https://en.wikipedia.org/wiki/Governance,_risk_management,_and_compliance "Governance, risk management, and compliance") regimes.

Since 2016 identity and access management professionals have their own professional organization, IDPro. In 2018 the committee initiated the publication of An Annotated Bibliography, listing a number of important publications, books, presentations and videos.[^30]

An **identity-management system** refers to an [information system](https://en.wikipedia.org/wiki/Information_system "Information system"), or to a set of technologies that can be used for enterprise or cross-network identity management.

The following terms are used in relationship with "identity-management system":[^31]

- Access-governance system
- Identity and [access management](https://en.wikipedia.org/wiki/Access_management "Access management") system
- Entitlement-management system
- [User provisioning system](https://en.wikipedia.org/wiki/User_provisioning_software "User provisioning software")

**Identity management**, otherwise known as identity and access management (IAM) is an identity security framework that works to authenticate and authorize user access to resources such as applications, data, systems, and cloud platforms. It seeks to ensure only the right people are being provisioned to the right tools, and for the right reasons. As our digital ecosystem continues to advance, so does the world of identity management.[^32]

"Identity management" and "access and identity management" (or AIM) are terms that are used interchangeably under the title of identity management while identity management itself falls under the umbrella of [IT security](https://en.wikipedia.org/wiki/IT_security "IT security")[^33] and information privacy[^34][^35] and privacy risk[^36] as well as usability and e-inclusion studies.[^37][^38]

There are three components of [Identity and Access Management (IAM)](https://www.sailpoint.com/identity-library/identity-and-access-management/):

- Access management/Single sign-on to verify users' identities before they can access the network and applications
- Identity governance to ensure that user access is being granted according to appropriate access policies for onboarding and role/responsibility changes
- Privileged access management to control and monitor access to highly privileged accounts, applications and system assets

These technologies can be combined using identity governance, which provides the foundation for automated workflows and processes.[^39]

### Modes of identity management

Identity is conceptualized in three different modes, according to an analysis:from the FIDIS Network of Excellence:[^40]

1. Idem-identity: A third-person (i.e., objectified) attribution of sameness. Such an objectified perspective can not only be taken towards others but also towards oneself.
2. Ipse-identity: The ipse-identity perspective is the first-person perspective on what constitutes oneself as a continuous being (idem) in the course of time, while experiencing multiplicity and difference in the here and now.
3. me-identity: The 'me' (G. H. Mead) is the organised set of attitudes of others which one assumes. It is coconstituted by the 'I', the first person perspective, which incorporates the variety of third person perspectives it encounters and develops. Thus, the 'me' is continuously reconstituted in the face of changing third person perspectives on the self.

In Bertino's and Takahashi's textbook,[^41] three categories of identity are defined that are to a degree overlapping with the FIDIS identity concepts:

- "Me-Identity": What I define as identity
- "Our-Identity": What others and I define as identity
- "Their-Identity": What others define as my identity

### Purposes for using identity management systems

Identity management systems are concerned with the creation, the administration and the deployment of:

- Identifiers: Data used to identify a subject.
- Credentials: Data providing evidence for claims about identities or parts thereof.
- Attributes: Data describing characteristics of a subject.

The purposes of identity management systems are:

- Identification: Who is the user – used on logon or database lookup
- Authentication: Is this the real user? Systems needs to provide evidence!
- Authorization and non-repudiation: Authorization of documents or transaction with e-ID and most often with digital signature based on e-ID. Generates non-repudiation and receipts.

### Commercial solutions

Identity-management systems, products, applications, and platforms are commercial Identity-management solutions implemented for enterprises and organizations.[^42]

Technologies, services, and terms related to identity management include [Microsoft Windows active directory](https://en.wikipedia.org/wiki/Active_directory "Active directory"), [service providers](https://en.wikipedia.org/wiki/Service_provider "Service provider"), [identity providers](https://en.wikipedia.org/wiki/Identity_provider "Identity provider"), [Web services](https://en.wikipedia.org/wiki/Web_service "Web service"), [access control](https://en.wikipedia.org/wiki/Access_control "Access control"), [digital identities](https://en.wikipedia.org/wiki/Digital_identity "Digital identity"), [password managers](https://en.wikipedia.org/wiki/Password_manager "Password manager"), [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on "Single sign-on"), [security tokens](https://en.wikipedia.org/wiki/Security_token "Security token"), [security token services](https://en.wikipedia.org/wiki/Security_token_service "Security token service") (STS), [workflows](https://en.wikipedia.org/wiki/Workflow_application "Workflow application"), [OpenID](https://en.wikipedia.org/wiki/OpenID "OpenID"), [WS-Security](https://en.wikipedia.org/wiki/WS-Security "WS-Security"), [WS-Trust](https://en.wikipedia.org/wiki/WS-Trust "WS-Trust"), [SAML 2.0](https://en.wikipedia.org/wiki/SAML_2.0 "SAML 2.0"), [OAuth](https://en.wikipedia.org/wiki/OAuth "OAuth"), and [RBAC](https://en.wikipedia.org/wiki/RBAC "RBAC").[^43]

### Electronic identity management

| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ambox_current_red.svg/42px-Ambox_current_red.svg.png) | This article's **[factual accuracy](https://en.wikipedia.org/wiki/Wikipedia:Accuracy_dispute "Wikipedia:Accuracy dispute") may be compromised due to out-of-date information**. Please help update this article to reflect recent events or newly available information. *(January 2012)* |
| --- | --- |

In general, electronic IdM can be said to cover the management of any form of digital identities. The focus on identity management goes back to the development of directories, such as [X.500](https://en.wikipedia.org/wiki/X.500 "X.500"), where a [namespace](https://en.wikipedia.org/wiki/Namespace "Namespace") serves to hold named objects that represent real-life "identified" entities, such as countries, organizations, applications, subscribers or devices. The [X.509](https://en.wikipedia.org/wiki/X.509 "X.509") [ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T") standard defined certificates carried identity attributes as two directory names: the certificate subject and the certificate issuer. X.509 certificates and [PKI](https://en.wikipedia.org/wiki/Public_key_infrastructure "Public key infrastructure") systems operate to prove the online "identity" of a subject. Therefore, in IT terms, one can consider identity management as the management of information (as held in a directory) that represents items identified in real life (e.g. users, organizations, devices, services, etc.). The design of such systems requires explicit information and identity engineering tasks.

The evolution of identity management follows the progression of [Internet](https://en.wikipedia.org/wiki/Internet "Internet") technology closely. In the environment of static web pages and static portals of the early 1990s, corporations investigated the delivery of informative web content such as the "white pages" of employees. Subsequently, as the information changed (due to employee turnover, provisioning and de-provisioning), the ability to perform self-service and help-desk updates more efficiently morphed into what became known as Identity Management today<sup class="plainlinks noexcerpt noprint asof-tag update"><a class="external text" href="https://en.wikipedia.org/w/index.php?title=Identity_and_access_management&amp;action=edit">[update]</a></sup>.

[Solutions](https://en.wikipedia.org/wiki/Solution_marketing "Solution marketing") which fall under the category of identity management may include:

**Management of identities**

- [User account provisioning](https://en.wikipedia.org/wiki/User_account_provisioning "User account provisioning") and de-provisioning
- [Workflow automation](https://en.wikipedia.org/wiki/Workflow_automation "Workflow automation")
- [Delegated administration](https://en.wikipedia.org/wiki/Delegated_administration "Delegated administration")
- [Password synchronization](https://en.wikipedia.org/wiki/Password_synchronization "Password synchronization")
- [Self-service password reset](https://en.wikipedia.org/wiki/Self-service_password_reset "Self-service password reset")

**Access control**

- [Password manager](https://en.wikipedia.org/wiki/Password_manager "Password manager")
- [Single sign-on](https://en.wikipedia.org/wiki/Single_sign-on "Single sign-on") (SSO)
- Web single sign-on (Web SSO)
- [Role-based access control](https://en.wikipedia.org/wiki/Role-based_access_control "Role-based access control") (RBAC)
- [Attribute based access control](https://en.wikipedia.org/wiki/Attribute-based_access_control "Attribute-based access control") (ABAC)

**Directory services**

- [x.500](https://en.wikipedia.org/wiki/X.500 "X.500") and [LDAP](https://en.wikipedia.org/wiki/LDAP "LDAP")
- [Microsoft Active Directory](https://en.wikipedia.org/wiki/Active_Directory "Active Directory")
- [Microsoft Entra ID](https://en.wikipedia.org/wiki/Microsoft_Entra_ID "Microsoft Entra ID") (Formally Microsoft Azure Active Directory)
- [NetIQ eDirectory](https://en.wikipedia.org/wiki/NetIQ_eDirectory "NetIQ eDirectory")
- Identity repository (directory services for the administration of user account attributes)
- [Metadata](https://en.wikipedia.org/wiki/Metadata "Metadata") replication and synchronization
- Directory virtualization ([Virtual directory](https://en.wikipedia.org/wiki/Virtual_directory "Virtual directory"))
- [e-Business](https://en.wikipedia.org/wiki/E-Business "E-Business") scale directory systems
- Next-generation systems – Composite Adaptive Directory Services (CADS) and CADS SDP

**Other categories**

- [Federation](https://en.wikipedia.org/wiki/Federated_identity "Federated identity") of user access rights on web applications across otherwise untrusted networks
- Directory-enabled networking and [802.1X EAP](https://en.wikipedia.org/wiki/IEEE_802.1X "IEEE 802.1X")

- [SAML 2.0](https://en.wikipedia.org/wiki/SAML_2.0 "SAML 2.0")
- [OAuth](https://en.wikipedia.org/wiki/OAuth "OAuth")
- [OpenID](https://en.wikipedia.org/wiki/OpenID "OpenID")
- [Liberty Alliance](https://en.wikipedia.org/wiki/Liberty_Alliance "Liberty Alliance") – A consortium promoting federated identity management
- [Shibboleth (Internet2)](https://en.wikipedia.org/wiki/Shibboleth_\(Internet2\) "Shibboleth (Internet2)") – Identity standards targeted towards educational environments
- Global Trust Center
- [Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service "Central Authentication Service")
- NIST SP 800-63

- [Access control](https://en.wikipedia.org/wiki/Access_control "Access control")
- [Authentication](https://en.wikipedia.org/wiki/Authentication "Authentication")
- [Authorization](https://en.wikipedia.org/wiki/Authorization "Authorization")
- [Directory service](https://en.wikipedia.org/wiki/Directory_service "Directory service")
- [Federated identity](https://en.wikipedia.org/wiki/Federated_identity "Federated identity")
- [Identity driven networking](https://en.wikipedia.org/wiki/Identity_driven_networking "Identity driven networking")
- [Identity verification service](https://en.wikipedia.org/wiki/Identity_verification_service "Identity verification service")
- [Identity provider](https://en.wikipedia.org/wiki/Identity_provider "Identity provider")
- [Identity-based security](https://en.wikipedia.org/wiki/Identity-based_security "Identity-based security")
- [Identity threat detection and response](https://en.wikipedia.org/wiki/Identity_threat_detection_and_response "Identity threat detection and response")
- [Information privacy](https://en.wikipedia.org/wiki/Information_privacy "Information privacy")
- [Mobile identity management](https://en.wikipedia.org/wiki/Mobile_identity_management "Mobile identity management")
- [Multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication "Multi-factor authentication")
- [Mutual authentication](https://en.wikipedia.org/wiki/Mutual_authentication "Mutual authentication")
- [OAuth](https://en.wikipedia.org/wiki/OAuth "OAuth")
- [Online identity management](https://en.wikipedia.org/wiki/Online_identity_management "Online identity management")
- [OpenID](https://en.wikipedia.org/wiki/OpenID "OpenID")
- [Password management](https://en.wikipedia.org/wiki/Password_management "Password management")
- [Role-based access control](https://en.wikipedia.org/wiki/Role-based_access_control "Role-based access control")
- [Self-sovereign identity](https://en.wikipedia.org/wiki/Self-sovereign_identity "Self-sovereign identity")
- [Single sign-on](https://en.wikipedia.org/wiki/Single_sign-on "Single sign-on")
- [User modeling](https://en.wikipedia.org/wiki/User_modeling "User modeling")

## footnotes

[^1]: Stroud, Forrest (22 June 2015). ["What Is Identity and Access Management (IAM)? Webopedia Definition"](https://www.webopedia.com/TERM/I/iam-identity-and-access-management.html). *webopedia.com*. Retrieved 27 February 2019.

[^2]: Silva, Edelberto Franco; Muchaluat-Saade, Débora Christina; Fernandes, Natalia Castro (1 January 2018). ["ACROSS: A generic framework for attribute-based access control with distributed policies for virtual organizations"](http://www.sciencedirect.com/science/article/pii/S0167739X17316060). *Future Generation Computer Systems*. **78**: 1–17\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/j.future.2017.07.049](https://doi.org/10.1016%2Fj.future.2017.07.049). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0167-739X](https://search.worldcat.org/issn/0167-739X).

[^:0-3]: Compare: ["Gartner IT Glossary > Identity and Access Management (IAM)"](http://blogs.gartner.com/it-glossary/identity-and-access-management-iam/). Gartner. Retrieved 2 September 2016. Identity and access management (IAM) is the security discipline that enables the right individuals to access the right resources at the right times for the right reasons. \[...\] IAM addresses the mission-critical need to ensure appropriate access to resources across increasingly heterogeneous technology environments, and to meet increasingly rigorous compliance requirements.

[^4]: ["identity management (ID management)"](http://searchsecurity.techtarget.com/definition/identity-management-ID-management). SearchSecurity. 1 October 2013. Retrieved 2 March 2017.

[^5]: ["What is identity management (ID management) ? – Definition from WhatIs.com"](https://searchsecurity.techtarget.com/definition/identity-management-ID-management). *SearchSecurity*. Retrieved 20 December 2019.

[^6]: [Functional requirements for privacy enhancing systems](http://www.oecd.org/dataoecd/36/30/38573952.pdf) Fred Carter, OECD Workshop on Digital Identity Management, Trondheim, Norway, 9 May 2007 (PPT presentation)

[^7]: [Guide to Protecting the Confidentiality of Personally Identifiable Information (PII)](http://csrc.nist.gov/publications/drafts/800-122/Draft-SP800-122.pdf) [Archived](https://web.archive.org/web/20090813014849/http://csrc.nist.gov/publications/drafts/800-122/Draft-SP800-122.pdf) 13 August 2009 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), Recommendations of the National Institute of Standards and Technology, January 2009

[^8]: [PII (Personally Identifiable Information)](http://www.cdt.org/privacy/issues/pii/) [Archived](https://web.archive.org/web/20090428062932/http://www.cdt.org/privacy/issues/pii/) 28 April 2009 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), The Center For Democracy & Technology, 14 September 2007

[^9]: ["What is IAM? Identity and access management explained"](https://www.csoonline.com/article/518296/what-is-iam-identity-and-access-management-explained.html). *CSO Online*. Retrieved 24 April 2024.

[^10]: ["IBM Cloud Docs"](https://console.bluemix.net/docs/iam/users_roles.html#userroles). *console.bluemix.net*. Retrieved 3 December 2018.

[^:1-11]: ["What is identity management (ID management) ? – Definition from WhatIs.com"](https://searchsecurity.techtarget.com/definition/identity-management-ID-management). *SearchSecurity*. Retrieved 3 December 2018.

[^12]: Networks, Institute of Medicine (US) Committee on Regional Health Data; Donaldson, Molla S.; Lohr, Kathleen N. (1994). [*Confidentiality and Privacy of Personal Data*](https://www.ncbi.nlm.nih.gov/books/NBK236546/). National Academies Press (US).

[^13]: Burr, William E.; Dodson, Donna F.; Polk, W. Timothy (2006). ["Information Security"](http://csrc.nist.gov/publications/nistpubs/800-63/SP800-63V1_0_2.pdf) (PDF). *NIST Special Publication*. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.153.2795](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.153.2795). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.6028/NIST.SP.800-63v1.0.2](https://doi.org/10.6028%2FNIST.SP.800-63v1.0.2). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [655513066](https://search.worldcat.org/oclc/655513066). Retrieved 10 October 2015.

[^14]: Labitzke, Sebastian. ["Avoiding Unintended Flows of Personally Identifiable Information : Enterprise Identity Management and Online Social Networks"](https://publikationen.bibliothek.kit.edu/1000036269/2877915).

[^15]: ["Working Groups | Identity Commons"](http://www.idcommons.org/working-groups/). Idcommons.org. Retrieved 12 January 2013.

[^footnotetaylorlipsorgan2009-16]: [Taylor, Lips & Organ 2009](https://en.wikipedia.org/wiki/#CITEREFTaylorLipsOrgan2009).

[^footnotegrossacquistiheinz2005-17]: [Gross, Acquisti & Heinz 2005](https://en.wikipedia.org/wiki/#CITEREFGrossAcquistiHeinz2005).

[^footnotetaylor2008-18]: [Taylor 2008](https://en.wikipedia.org/wiki/#CITEREFTaylor2008).

[^footnotehalperinbackhouse2008-19]: [Halperin & Backhouse 2008](https://en.wikipedia.org/wiki/#CITEREFHalperinBackhouse2008).

[^w3c-20]: ["Decentralized Identifiers (DIDs)"](https://www.w3.org/TR/did-core/#dfn-decentralized-identity-management). *[World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium "World Wide Web Consortium")*. 8 June 2020. Retrieved 22 June 2020.

[^21]: PICOS

[^22]: ["PrimeLife – Privacy and Identity Management in Europe for Life"](http://www.primelife.eu/).

[^23]: ["ist-swift.org"](http://www.ist-swift.org/).

[^24]: FIDISCoord (DR). ["Home: Future of IDentity in the Information Society"](http://www.fidis.net/home/).

[^istrg.som.surrey.ac.uk-25]: ["Creating a European Identity Management Architecture for eGovernment"](https://web.archive.org/web/20090508154029/http://istrg.som.surrey.ac.uk/projects/guide/). *istrg.som.surrey.ac.uk*. Archived from [the original](http://istrg.som.surrey.ac.uk/projects/guide/) on 8 May 2009.

[^prime-project.eu_2006-26]: ["PRIME – Privacy and Identity Management for Europe"](https://web.archive.org/web/20071010224256/https://www.prime-project.eu/). *Portal for the PRIME Project*. 28 September 2006. Archived from [the original](https://www.prime-project.eu/) on 10 October 2007.

[^online_information_review:_vol._33_iss._31-27]: ["Special Issue: Special section on: Digital identity management"](https://www.emerald.com/insight/publication/issn/1468-4527/vol/33/iss/3). *Online Information Review*. **33** (3). Bradford: MCB University Press. 19 June 2009. [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [1468-4527](https://search.worldcat.org/issn/1468-4527). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [807197565](https://www.worldcat.org/oclc/807197565), [676858452](https://www.worldcat.org/oclc/676858452). Retrieved 29 January 2021.

[^28]: [Object Id's (OID'S)](http://doc.sumy.ua/db/pgsql_book/node72.html), PostgreSQL: Introduction and Concepts, in Bruce Momjian, 21 November 1999

[^29]: Canner, Ben (24 July 2018). ["The 17 Best Identity Governance and Administration Platforms of 2018"](https://solutionsreview.com/identity-management/17-best-identity-governance-and-administration-platforms/). Solutions Review. Retrieved 17 December 2019.

[^30]: ["An Annotated Bibliography"](https://idpro.org/resources/Documents/IDProBibliography0619.pdf) (PDF). Retrieved 6 September 2019.

[^31]: ["What is identity management (ID management)? Definition from SearchSecurity"](https://www.techtarget.com/searchsecurity/definition/identity-management-ID-management). *Security*. Retrieved 16 April 2023.

[^32]: ["History of Identity Management"](https://www.sailpoint.com/identity-library/history-of-identity-management/). *sailpoint.com*. SailPoint Technologies. Retrieved 12 May 2021.

[^33]: ["Identity management as a component of IT Security"](http://www.computerweekly.com/resources/Identity-and-access-management-products).

[^34]: Rannenberg, Kai; Royer, Denis; Deuker, André, eds. (2009). *The Future of Identity in the Information Society*. Berlin, Heidelberg: Springer Berlin Heidelberg. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-3-642-01820-6](https://doi.org/10.1007%2F978-3-642-01820-6). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-540-88480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-88480-4 "Special:BookSources/978-3-540-88480-4"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [153140099](https://api.semanticscholar.org/CorpusID:153140099).

[^35]: Fritsch, Lothar (March 2013). ["The Clean Privacy Ecosystem of the Future Internet"](https://doi.org/10.3390%2Ffi5010034). *Future Internet*. **5** (1): 34–45\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.3390/fi5010034](https://doi.org/10.3390%2Ffi5010034).

[^36]: Paintsil, Ebenezer; Fritsch, Lothar (2013), "Executable Model-Based Risk Analysis Method for Identity Management Systems: Using Hierarchical Colored Petri Nets", *Trust, Privacy, and Security in Digital Business*, Springer Berlin Heidelberg, pp. 48–61, [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-3-642-40343-9\_5](https://doi.org/10.1007%2F978-3-642-40343-9_5), [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-642-40342-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-40342-2 "Special:BookSources/978-3-642-40342-2")

[^37]: Fritsch, Lothar; Fuglerud, Kristin Skeide; Solheim, Ivar (1 December 2010). ["Towards inclusive identity management"](https://doi.org/10.1007%2Fs12394-010-0075-6). *Identity in the Information Society*. **3** (3): 515–538\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/s12394-010-0075-6](https://doi.org/10.1007%2Fs12394-010-0075-6). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [1876-0678](https://search.worldcat.org/issn/1876-0678).

[^38]: Røssvoll, Till Halbach; Fritsch, Lothar (2013). "Trustworthy and Inclusive Identity Management for Applications in Social Media". In Kurosu, Masaaki (ed.). *Human-Computer Interaction. Users and Contexts of Use*. Lecture Notes in Computer Science. Vol. 8006. Springer Berlin Heidelberg. pp. 68–77\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-3-642-39265-8\_8](https://doi.org/10.1007%2F978-3-642-39265-8_8). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-642-39265-8](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-39265-8 "Special:BookSources/978-3-642-39265-8").

[^39]: ["What Is Identity and Access Management?"](https://www.sailpoint.com/identity-library/identity-and-access-management/). *sailpoint.com*. SailPoint Technologies. Retrieved 12 May 2021.

[^40]: Hildebrandt, M., Koops, E. J., & de Vries, K. (2008). *D7.14a: Where idem-identity meets ipse-identity: Conceptual explorations*. Brussel: FIDIS.[http://www.fidis.net/fileadmin/fidis/deliverables/fidis-WP7-del7.14a-idem\_meets\_ipse\_conceptual\_explorations.pdf](http://www.fidis.net/fileadmin/fidis/deliverables/fidis-WP7-del7.14a-idem_meets_ipse_conceptual_explorations.pdf), accessed 2019-12-09

[^41]: Bertino, Elisa. (2010). *Identity Management : concepts, technologies, and systems*. Takahashi, Kenji. Boston, MA: Artech House. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-60807-039-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-60807-039-8 "Special:BookSources/978-1-60807-039-8"). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [700220032](https://search.worldcat.org/oclc/700220032).

[^42]: ["FREE Verification App for 4.2 Billion Online Users"](https://iverified.org/).

[^43]: ["Identity management security"](http://msdn.microsoft.com/en-us/security/aa570351).

- Gross, Ralph; Acquisti, Alessandro; Heinz, J. H. (2005). "Information revelation and privacy in online social networks". *Workshop On Privacy In The Electronic Society; Proceedings of the 2005 ACM workshop on Privacy in the electronic society*. pp. 71–80\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/1102199.1102214](https://doi.org/10.1145%2F1102199.1102214). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1595932280](https://en.wikipedia.org/wiki/Special:BookSources/978-1595932280 "Special:BookSources/978-1595932280"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [9923609](https://api.semanticscholar.org/CorpusID:9923609).
- Halperin, Ruth; Backhouse, James (2008). ["A roadmap for research on identity in the information society"](https://doi.org/10.1007%2Fs12394-008-0004-0). *Identity in the Information Society*. **1** (1) (published 2009): 71. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/s12394-008-0004-0](https://doi.org/10.1007%2Fs12394-008-0004-0).
- Lusoli, Wainer; Miltgen, Caroline (2009). ["Young People and Emerging Digital Services. An Exploratory Survey on Motivations, Perceptions and Acceptance of Risks"](https://web.archive.org/web/20170316165914/http://ipts.jrc.ec.europa.eu/publications/pub.cfm?id=2119). *JRC Scientific and Technical Reports* (EUR 23765 EN) (published March 2009). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2791/68925](https://doi.org/10.2791%2F68925). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9789279113307](https://en.wikipedia.org/wiki/Special:BookSources/9789279113307 "Special:BookSources/9789279113307"). Archived from [the original](http://ipts.jrc.ec.europa.eu/publications/pub.cfm?id=2119) on 16 March 2017. Retrieved 17 March 2009.
- [ISO, IEC](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization") (2009). ["Information Technology—Security Techniques—A Framework for Identity Management"](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=57914). ISO/IEC WD 24760 (Working draft).
- Pohlman, M.B. (2008). *Oracle Identity Management: Governance, Risk and Compliance Architecture*. Auerbach Publications. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4200-7247-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4200-7247-1 "Special:BookSources/978-1-4200-7247-1").
- Pounder, C. N. M. (2008). ["Nine principles for assessing whether privacy is protected in a surveillance society"](https://doi.org/10.1007%2Fs12394-008-0002-2). *Identity in the Information Society*. **1** (published 2009): 1. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/s12394-008-0002-2](https://doi.org/10.1007%2Fs12394-008-0002-2).
- Taylor, John A.; Lips, Miriam; Organ, Joe (2009). ["Identification practices in government: citizen surveillance and the quest for public service improvement"](https://doi.org/10.1007%2Fs12394-009-0007-5). *Identity in the Information Society*. **1**: 135. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/s12394-009-0007-5](https://doi.org/10.1007%2Fs12394-009-0007-5).
- Taylor, John A. (2008). "Zero Privacy". *IEEE Spectrum*. **45** (7): 20. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/MSPEC.2008.4547499](https://doi.org/10.1109%2FMSPEC.2008.4547499).
- Williamson, Graham; Yip, David; Sharni, Ilan; Spaulding, Kent (1 September 2009). *Identity Management: A Primer*. MC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-58347-093-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-58347-093-0 "Special:BookSources/978-1-58347-093-0").
- Bernal Bernabe, Jorge; Hernandez-Ramos, Jose L.; Skarmeta, Antonio (2017). ["Holistic Privacy-Preserving Identity Management System for the Internet of Things"](https://doi.org/10.1155%2F2017%2F6384186). *Mobile Information Systems*. **2017** (6384186): 1–20\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1155/2017/6384186](https://doi.org/10.1155%2F2017%2F6384186).

- [General Public Tutorial about Privacy and Identity Management](https://web.archive.org/web/20070928023206/https://www.prime-project.eu/tutorials/gpto/)
- [Identity Management Overview](https://web.archive.org/web/20090327053442/http://www.computerweekly.com/Articles/2007/07/23/225715/identity-management-the-expert-view.htm) (*Computer Weekly*)
- [Secure Widespread Identities for Federated Telecommunications (SWIFT)](https://web.archive.org/web/20160311200438/http://www.ist-swift.org/)
- [Identity management and information sharing in ISO 18876 Industrial automation systems and integration](http://www.iso.org/iso/search.htm?qt=18876&searchSubmit=Search&sort=rel&type=simple&published=on)
- [50 Data Principles for Loosely-Coupled Identity Management: SlideShare](https://www.slideshare.net/ganeshcprasad/50-data-principles-for-loosely-coupled-identity-management-v1-0)
- [Stop Remembering Password and Switch to Identity Management: Business Insider](https://www.businessinsider.com/stop-remembering-passwords-and-switch-to-identity-management-2012-10)
- [NIST SP 800-63](https://csrc.nist.gov/publications/detail/sp/800-63/4/draft)