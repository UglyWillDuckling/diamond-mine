---
aliases:
  - OCIS
tags:
  - tool/cloud
---
## Overview

ownCloud Infinite Scale, usually shortened to oCIS, is ownCloud's newer platform for file sync, sharing and collaboration on your own server. It is a complete rewrite of the older, PHP-based ownCloud (known as ownCloud Classic or ownCloud 10). It is written in Go, uses a microservices architecture and ships with a Vue.js web frontend. It was developed with help from CERN and is aimed at deployments ranging from a small home server to large universities and research institutions.

oCIS is a separate product, not an in-place upgrade of ownCloud Classic. The two share a purpose and are broadly compatible in the clients they support, but they differ deeply in how they are built, installed and operated.

## Background

ownCloud Classic is built on PHP and a LAMP-style stack, storing metadata in an SQLite, MySQL or PostgreSQL database. Infinite Scale was published in 2021 as the next-generation platform. It removes the PHP, Apache and database layers entirely and replaces them with a single Go program.

OwnCloud still maintains the Classic line. At the time of writing, the latest Classic release found was 10.16.6, and a forum reply from ownCloud staff mentioned an upcoming "oc11" release that would move to Docker-only deployment. No oc11 release announcement was found, so check ownCloud's download page for the current state. A third-party release tracker lists Infinite Scale 8.2.1 as the latest version as of early October 2026; verify this on ownCloud's own site.

## Architecture

### One program, many services

oCIS runs as a single binary that starts a set of internal services together. The proxy service is the front door: browsers, sync clients and API calls all reach oCIS through it, and it routes requests to the other services (web, storage, identity, search and so on). Because everything is bundled, a single container is enough for a basic installation.

### No separate database

oCIS needs no MySQL or PostgreSQL. Instead it keeps the information a database would normally hold in other places:

- **File metadata** (IDs, sizes, etags, shares, permissions) is stored on disk next to the data itself by the default storage driver, called the "ocis" or decomposedfs driver.
- **Embedded services** such as the message bus, the key-value store, the internal LDAP user directory (IDM) and the search index run inside the same process and write to the same data folder.
- **Configuration** lives in a file, `ocis.yaml`, and in environment variables.

This means there is no database to install, tune or back up, and metadata cannot easily drift apart from the files it describes. It also means that copying files directly into the data folder will not work, because oCIS will not know about them. Files must arrive through the web interface, a sync client, WebDAV or the migration tool.

### Web frontend

ownCloud Web is bundled with oCIS. It is built with [[Vue.js]] and talks to the server through APIs, just like the other ownCloud clients.

## Key features

- **Spaces:** shared team areas that are not tied to one user's account, with their own members and permissions. Classic has no direct equivalent.
- **Simplified sharing:** sharing by links was drastically simplified compared with Classic.
- **OpenID Connect authentication:** oCIS uses OpenID Connect (OIDC) for login. It includes a minimal built-in identity provider and a small internal LDAP, and can instead use external providers such as Keycloak, Authelia or authentik.
- **Compliance and security features** introduced by version 3: GDPR data export, accessibility conformance (WCAG), a file firewall that lets admins block content from being uploaded, and an antivirus integration using the ICAP standard.
- **Extensibility:** oCIS extends through its own services and web extensions rather than Classic's PHP apps.

## Authentication

Out of the box, oCIS supports OIDC for user authentication. The built-in identity provider is mainly suitable for smaller installations and does not support login-screen branding. It also does not support back-channel logout, so oCIS treats an access token as valid until it expires. For larger setups, ownCloud recommends replacing it with an external OIDC provider. The built-in IDM (a mini LDAP) is likewise intended for small installations and testing.

## Clients

The ownCloud desktop client and the iOS and Android apps support Infinite Scale, using OIDC for login. The apps appear as built-in clients in the oCIS identity configuration. The web interface is included with the server, and WebDAV access is available for scripts and other tools (basic authentication is disabled by default and must be enabled deliberately).

## oCIS compared with ownCloud Classic

|  | ownCloud Classic (10.x) | ownCloud Infinite Scale |
| --- | --- | --- |
| Language | PHP | Go |
| Architecture | Monolithic LAMP stack | Microservices in one binary |
| Database | SQLite, MySQL or PostgreSQL | None required |
| Frontend | Classic UI, optional Web app | Vue.js ownCloud Web |
| Authentication | Local accounts, optional OIDC | OIDC by default |
| Extensions | PHP apps and Marketplace | oCIS services and web extensions |
| Team areas | Group folders via apps | Spaces |
| Upgrade path | Point releases within 10.x | Separate product, migrate by tool |

## Deployment

The usual way to run oCIS is in Docker using the `owncloud/ocis` image. A minimal test setup has these ingredients:

1. **Persistent folders** for configuration and data, owned by user and group 1000 because the container does not run as root.
2. **A Compose command** of the form `ocis init || true; ocis server`. The `ocis init` step creates `ocis.yaml` with randomly generated secrets and prints a random admin password for first login; it is skipped if a configuration already exists.
3. **Port 9200** published for the proxy service.
4. **`OCIS_URL`** set to the exact public address clients will use, including `https://` and any port.

The most common first-run problem is a mismatch between `OCIS_URL` and the address typed in the browser. If they differ, the web app shows a "Missing or invalid config" error because the configuration it downloads points at the wrong host.

Three variables are worth knowing (described here from general knowledge of oCIS; verify them against the documentation): `OCIS_URL` is the public address; `OCIS_INSECURE` allows self-signed certificates for testing only; `PROXY_HTTP_ADDR` is the address and port the proxy listens on inside the container, normally `0.0.0.0:9200`.

For anything beyond testing, put a reverse proxy such as Caddy or Traefik in front with a real certificate, serve oCIS on port 443, and stop publishing port 9200 directly.

## Backups and operations

- Back up the **data** and **config** folders together. The config folder holds the generated secrets, and without it the data cannot be used.
- Back up while the container is stopped, or use filesystem snapshots, so metadata and files stay consistent.
- Run on a filesystem that supports extended attributes, such as ext4, XFS, Btrfs or ZFS. Some network filesystems can be a problem.
- Pin the image to a specific version rather than `latest`.
- After upgrading, `ocis init --diff` shows which mandatory settings changed between versions.

## ==🔵Migrating== from ownCloud Classic

There is no direct upgrade from ownCloud 10 to Infinite Scale. The approach is to run a new oCIS instance in parallel and move the data across. ownCloud provides a `migrate-to-ocis` app that is installed on the ownCloud 10 side and uses `occ` commands to transfer users, groups, files and shares in sequential steps.

Points to prepare for:

- Run the `verify` step first; it reports users with missing or duplicate email addresses.
- Passwordless public links will not migrate unless the oCIS setting `OCIS_SHARING_PUBLIC_SHARE_MUST_HAVE_PASSWORD=false` is applied beforehand.
- Classic PHP apps do not carry over, so confirm that anything you depend on has an oCIS replacement.
- Migration of users with encrypted data whose passwords are unknown to the administrator is an open question.
- Rehearse the whole process on a copy of your data before touching production.

## Sources

- ownCloud documentation, Migrating to ownCloud Infinite Scale: https://doc.owncloud.com/server/next/admin\_manual/maintenance/migrating\_to\_ocis.html
- ownCloud documentation, The ocis init command: https://doc.owncloud.com/ocis/next/deployment/general/ocis-init.html
- ownCloud documentation, Container setup: https://doc.owncloud.com/ocis/7.0/depl-examples/container-setup.html
- ownCloud documentation, IDP service configuration: https://doc.owncloud.com/ocis/next/deployment/services/s-list/idp.html
- ownCloud Central forum, OIDC in Infinite Scale: https://central.owncloud.org/t/how-owncloud-infinite-scale-handles-authentication-through-oidc/28780
- ownCloud Central forum, Server 10.16.2 release thread: https://central.owncloud.org/t/owncloud-server-10-16-2-released/94541
- ownCloud Classic 10.16.6 announcement: https://github.com/orgs/owncloud/discussions/21
- Wikipedia, ownCloud: https://www.wikipedia.com/wiki/OwnCloud

