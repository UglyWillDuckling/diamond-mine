#doc/security/report #outside

Severity HIGH
Score 8.5
https://www.first.org/cvss/calculator/3.1#CVSS:3.1/AV:A/AC:L/PR:H/UI:N/S:C/C:H/I:H/A:H
### Affected assets
• https://backyard.meilleursagents.com/admin/passerelle/files/download?file=<PATH_TRAVERSAL>

### Description

The researcher discovered a path traversal issue on one of the admin features in the backyard.
This vulnerability could be leveraged by a malicious actor (admin or external attacker having stolen the admin session with a vulnerability like "Blind XSS from profile name leads to backyard takeover") to dump all the source code, the configuration files and more on the server.
Proof of Concept
The researcher proved the vulnerability by retrieving the content of the file "/proc/self/mounts":