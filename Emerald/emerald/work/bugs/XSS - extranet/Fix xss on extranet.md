---
related:
---
[[extranet]]
[JIRA](https://avivgroup.atlassian.net/browse/LUNA-247), related [JIRA-268](https://avivgroup.atlassian.net/browse/LUNA-268)


## intro

### Proof Of Concept

When going in the **"RDV Vendeur Qualité"** feature, the user have access to the different projects. On each project, **documents** can be `uploaded` with the following request :

If we modify the "document_title’ argument and set the following payload : <script>alert('XSS intitle')</script> we see that the code is triggered :

The document sent is not checked on the backend side, meaning that an attacker can send all types of document (malicious executable for example). Here the attacker will upload a malicious SVG file with a code injection in it. The following request is the request/response for the `SVG` file upload :

**Note the `URL` on which the document is downloadable and replace the "download" action by "display' :**

#### Affected assets:
https:/extranet-staging.meilleursagents.org/projects/\<ID\>/documents

---

## active

### sanitize

![[sanitize input]]

[[xss testing tmp]]
