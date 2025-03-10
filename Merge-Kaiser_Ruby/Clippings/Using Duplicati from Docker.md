---
source: https://docs.duplicati.com/detailed-descriptions/using-duplicati-from-docker
author: 
created: 2025-03-03
tags:
  - howto/duplicati/docker
---
1. [Detailed descriptions](https://docs.duplicati.com/detailed-descriptions)

## Using Duplicati from Docker

This page describes common scenarios for configuring Duplicati with Docker

The Duplicati Docker images are available from [DockerHub](https://hub.docker.com/r/duplicati/duplicati) and are released as part of the regular releases. The Docker images provided by Duplicati are quite minimal and includes only the binaries required to run Duplicati. There are also variations of the [Duplicati images provided by third parties](https://hub.docker.com/search?q=duplicati), including the popular [linuxserver/duplicati](https://hub.docker.com/r/linuxserver/duplicati) variant.

The Duplicati Docker images are using `/data` inside the container to store configurations and any files that should persist between container restarts. Note that other images may choose a different location to store data, so be sure to follow the instructions if using a different image.

You also need a way to sign in to the server after it has started. You can either watch the log output, which will emit a special signin url with a token that expires a few minutes after the server has started, or provide the password from within the configuration file.

To ensure that any secrets configured within the application are not stored in plain text, it is also important to set up the database encryption key.

## Managing secrets in Docker

Ideally, you need at least the settings encryption key provided to the container, but perhaps also the webservice password. You can easily provide this via a regular environment variable:

```yaml
services:
  myapp:
    image: duplicati/duplicati:latest
    volumes:
      - ./data:/data
    environment:
      SETTINGS_ENCRYPTION_KEY: "<real encryption key>"
      DUPLICATI__WEBSERVICE_PASSWORD: "<ui password>"
```

But you can make it a bit more secure by using [Docker secrets](https://docs.docker.com/compose/how-tos/use-secrets/) which are abstracted as files that are mounted under `/run/secrets/`. Since Duplicati does not support reading files in place of the environment variables, you can either use a [preload configuration file](https://docs.duplicati.com/detailed-descriptions/preload-settings) or use one of [the secret providers](https://docs.duplicati.com/detailed-descriptions/using-the-secret-provider).

To use the preload approach, prepare a `preload.json` file with your encryption key:

```
{
  "env": {
    "server": {
        "SETTINGS_ENCRYPTION_KEY": "<real encryption key>",
        "DUPLICATI__WEBSERVICE_PASSWORD": "<ui password>"
    }
  }
}
```

You can then configure this in the compose file:

```
services:
  myapp:
    image: duplicati/duplicati:latest
    volumes:
      - ./data:/data
    environment:
      DUPLICATI_PRELOAD_SETTINGS: /run/secrets/preloadsettings
    secrets:
      - preloadsettings

secrets:
  preloadsettings:
    file: ./preload.json
```

Setting up the secret manager is a bit more work, but it has the benefit of benig able to configure multiple secrets in a single place. To configure the file-based secret provider, you need to create a `secrets.json` file such as this:

```
{
  "settings-key": "<real encryption key>",
  "ui-password": "<real UI password>"
}
```

Then set it up in the compose file:

```
services:
  myapp:
    image: duplicati/duplicati:latest
    volumes:
      - ./data:/data
    environment:
      SETTINGS_ENCRYPTION_KEY: "$$settings-key"
      DUPLICATI__SECRET_PROVIDER: file-secret:///run/secrets/secretprovider
      DUPLICATI__WEBSERVICE_PASSWORD: "$$ui-password"
    secrets:
      - secretprovider

secrets:
  secretprovider:
    file: ./secrets.json
```

It is also possible to use one of the other secret providers, such as one that fetches secrets from a secure key vault. In this case, you do not need the `secrets.json` file, but can just configure the provider.

Duplicati has support for LVM-based snapshots which is the recommended way for getting a consistent point-in-time copy of the disk. For some uses, it is not possible to configure LVM snapshots, and this can cause problems due to some files being locked. By default, Duplicati will respect the advisory file locking and fail to open locked files, as the lock is usually an indication that the files are in use, and reading it may not result in a meaningful copy.

If you prefer to make a best-effort backup, which was the default in Duplicati v2.0.8.1 and older, you can disable advisory file locking for individual jobs with the advanced option: `--ignore-advisory-locking=true`. You can also disable file locking support entirely in Duplicati:

```
services:
  myapp:
    image: duplicati/duplicati:latest
    volumes:
      - ./data:/data
    environment:
      SETTINGS_ENCRYPTION_KEY: "<real encryption key>"
      DUPLICATI__WEBSERVICE_PASSWORD: "<ui password>"
      DOTNET_SYSTEM_IO_DISABLEFILELOCKING: true
```

---