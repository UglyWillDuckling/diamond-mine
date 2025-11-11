---
author:
  - "[[OpenID Foundation - Helping people assert their identity wherever they choose]]"
created: 2025-11-11
published: 2023-02-14
source: "https://openid.net/developers/how-connect-works/"
tags:
---
OpenID Connect is an interoperable authentication protocol based on the OAuth 2.0 framework of specifications (IETF RFC 6749 and 6750). It simplifies the way to verify the identity of users based on the authentication performed by an Authorization Server and to obtain user profile information in an interoperable and REST-like manner.

OpenID Connect enables application and website developers to launch sign-in flows and receive verifiable assertions about users across Web-based, mobile, and JavaScript clients. And the specification suite is extensible to support a range of optional features such as encryption of identity data, discovery of OpenID Providers, and session logout.

For developers, it provides a secure and verifiable answer to the question “What is the identity of the person currently using the browser or mobile app that is connected?” Best of all, it removes the responsibility of setting, storing, and managing passwords which is frequently associated with credential-based data breaches.

                ![OpenID Connect Spec Map](https://openid.net/wp-content/uploads/2023/06/OpenIDConnect-Map-December2023.png)

![](https://openid.net/wp-content/uploads/2022/11/dots-how-300x191.png)

OpenID Connect enables an Internet identity ecosystem through easy integration and support, security and privacy-preserving configuration, interoperability, wide support of clients and devices, and enabling any entity to be an OpenID Provider (OP).

The OpenID Connect protocol, in abstract, follows these steps:

##### Client

A client is a piece of software that requests tokens either for authenticating a user or for accessing a resource (also often called a relying party or RP). A client must be registered with the OP. Clients can be web applications, native mobile and desktop applications, etc.

##### OpenID Provider (OP) or Identity Provider (IDP)

An OpenID Provider (OP) is an entity that has implemented the OpenID Connect and OAuth 2.0 protocols, OP’s can sometimes be referred to by the role it plays, such as: a security token service, an identity provider (IDP), or an authorization server.

##### Identity Token

An identity token represents the outcome of an authentication process. It contains at a bare minimum an identifier for the user (called the sub aka subject claim) and information about how and when the user authenticated. It can contain additional identity data.

Why should developers use OpenID Connect?

It is easy, reliable, secure, and eliminates storing and managing people’s passwords. It improves the user experience of sign-up and registration and reduces website abandonment. Furthermore, Public-key-encryption-based authentication frameworks like OpenID Connect increase the security of the whole Internet by putting the responsibility for user identity verification in the hands of the most expert service providers.

Does OpenID Connect work for native and mobile apps?

Yes. There are already system-level APIs built into the Android operating system to provide OpenID Connect services. OpenID Connect can also accessed by interacting with the built-in system browser on mobile and desktop platforms; a variety of libraries are under construction to simplify this process.

OAuth 2.0, is a framework, specified by the IETF in RFCs 6749 and 6750 (published in 2012) designed to support the development of authentication and authorization protocols. It provides a variety of standardized message flows based on JSON and HTTP; OpenID Connect uses these to provide Identity services.

How is OpenID Connect different from OpenID2.0?

OpenID Connect has many architectural similarities to OpenID 2.0, and in fact the protocols solve a very similar set of problems. However, OpenID 2.0 used XML and a custom message signature scheme that in practice sometimes proved difficult for developers to get right, with the effect that OpenID 2.0 implementations would sometimes mysteriously refuse to interoperate. OAuth 2.0, the substrate for OpenID Connect, outsources the necessary encryption to the Web’s built-in TLS (also called HTTPS or SSL) infrastructure, which is universally implemented on both client and server platforms. OpenID Connect uses standard JSON Web Token (JWT) data structures when signatures are required. This makes OpenID Connect dramatically easier for developers to implement, and in practice has resulted in much better interoperability.

How does OpenID Connect relate to the FIDO Alliance?

The FIDO Alliance is one organization in which non-password authentication technologies are being explored. Some OpenID Foundation members are also members of the FIDO Alliance, working on authentication technologies there that can be used by OpenID Providers.

How does OpenID Connect relate to SAML?

The Security Assertion Markup Language (SAML) is an XML-based federation technology used in some enterprise and academic use cases. OpenID Connect can satisfy these same use cases but with a simpler, JSON/REST based protocol. OpenID Connect was designed to also support native apps and mobile applications, whereas SAML was designed only for Web-based applications. SAML and OpenID Connect will likely coexist for quite some time, with each being deployed in situations where they make sense.

Who can be an IDP or OP?

The OpenID Connect protocol designs are open to encourage an open ecosystem of IDPs. While the leading IDPs are currently large cloud services providers, such as Google and Microsoft, OpenID Connect enables many kinds of OP for Website, applications, clients, and devices.

OpenID Connect identifies a set of personal attributes that can be exchanged between Identity Providers and the apps that use them and includes an approval step (aka authorization) so that users can consent (or deny) the sharing of this information.