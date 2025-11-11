---
created: 2025-08-19
source: https://docs.integration.meilleursagents.tech/usage/cli/
tags:
  - howto/mactl
---
The `mactl` CLI is here to help to use the Integration environment.

## Use cases

Here is a list of features you can benefit from using the CLI.

Info

Those commands won't apply any modification on your local filesystem. To grab the modifications that have been pushed to the repository, do not forget to fetch.

Debug mode

For all the commands, you can use the `--verbose` flag to have further information on completed actions.

### I want to list available environments

It is possible to list all existing environments, using the following command:

```js
mactl list
```

### I want to initialize the CLI

To initialize the CLI, use the following command:

```js
mactl init
```

You will be prompted to enter your environment name. To ensure initialization worked properly, you can check the configuration file contents in `${HOME}/.mactl.yml` using `cat ~/.mactl.yml`. It must contain:

```js
environment: <environment_name>
```

Changing the configuration

If you need to configure another environment in the future, you can run the same command again.

### I want to know the status of my environment

To know the state of your environment, configured from [`mactl init`](https://docs.integration.meilleursagents.tech/usage/cli/#i-want-to-initialize-the-cli), you can run:

```js
mactl status
```

The output of this command is presented as follows:![Image](https://docs.integration.meilleursagents.tech/usage/img/mactl-status-output.png)

You will have access to: - Applications list for which the common values (`values/<app>.common.yaml`) are not aligned with master - Applications list for which the umbrella values (`deployments/<environment>/<app>/values.yaml`) are not aligned with the templated values on master (`.tmpl/deployments/<app>/values.yaml.tmpl`) - Applications list for which the charts (`charts/<app>`) are not aligned with master - Applications list deployed with a custom version by using the `overrideTag` field

### I want to reset my environment

To fetch the new chart versions from master, the new common values and re-apply the deployment templates, use:

```js
mactl reset
```

Warning

This command does not do deep merges. It means that any custom deployment using an `overrideTag` with values changes will be lost for all applications. It is an environment reset without requiring to drop and re-create it.

Warning

There might be some **files created on your environment branch but not on master branch**. In the context of a reset, it is relevant to delete them. But we prefer asking for authorization. A message will list the files and prompt if you want to delete them or not.

New chart

Contrary to the precedent warning, any creation of a new chart won't be lost.

#### I want to reset only a subset of the applications

To apply the `reset` only to a subset of the applications, use the `--applicaitons` flag. Use the following command:

```js
mactl reset --applications <comma_separated_application_names>
```

Chart environment

When specifying the `applications` flag, the `environment` chart will be reset. It is possible to reinitialize only this chart using the command `mactl reset --environmentOnly`.

### I want to override the version of an application in my environment

#### Adding an overrideTag

To automate the usage of the `overrideTag`, use the following command:

```js
mactl override add <application> --repository <repository> --overrideTag <tag>
```
- The value of `repository` allows you to choose where the specific version of your application should be pulled from (default value is `ma-dev2/dev-images`).
- The tag that matches the value you want to specify in the `overrideTag` field and consequently the Docker image version of the application you want to use.

#### Deleting an overrideTag

To delete the tag override, use the following command:

```js
mactl override remove <application> --repository <repository>
```

Repository

The possible values for `repository` are `ma-backbone` and `ma-dev2/dev-images`.

### I want to create a new chart in my environment

To create a chart as specified in the [new application deployment documentation](https://docs.integration.meilleursagents.tech/usage/create-new-app/#the-mactl-command), use the following command:

```js
mactl chart <chart_name> --starter <starter>
```

The different starters

The possible values for `starter` are `backend-generic`, `backend-with-workers`, `frontend` and `default`.

### I want to disable the ArgoCD synchronization for an application

To disable the ArgoCD synchronization of an application, use the following command:

```js
mactl sync disable <application>
```

### I want to enable the ArgoCD synchronization for an application

To enable the synchronization, use the following command:

```js
mactl sync enable <application>
```

### I want to create local access to a database

To create [local access](https://docs.integration.meilleursagents.tech/usage/use-db-access/) to a database, use the following command:

```js
mactl db-access <instance_name>
```

### I want to disable all the applications of my environment

To disable your environment while preventing it from being reactivated by the lifecycle, use the following command:

```js
mactl sleep
```

### I want to disable some applications of my environment

To disable some applications while preventing them from being reactivated by the lifecycle, use the following command:

```js
mactl sleep --applications <comma_separated_application_names>
```

### I want to enable all the applications of my environment

To reactivate your environment, use the following command:

```js
mactl wake-up
```

### I want to enable some applications of my environment

To enable some applications, use the following command:

```js
mactl wake-up --applications <comma_separated_application_names>
```

### I want to create a new environment

To create a new environment, use the following command:

```js
mactl create <environment_name>
```

#### I want to create a new restricted environment

It is possible to deploy an environment with only a subset of the applications for specific usages using the following command:

```js
mactl create <environment_name> --applications <comma_separated_application_names>
```

Value for applications

An example of value for the `applications` flag is `agencyapi,estima,estimaapi`.

### I want to delete an environment

To delete an environment, use the following command:

```js
mactl delete <environment_name>
```

### I want to update the mactl CLI

Use the following command to update automatically the `mactl` CLI:

```js
mactl update
```

This command will download the last release of the CLI and install it in place of the currently installed executable file. This command uses your web browser cookies by default to make an authenticated request to GitHub. Those cookies are most of the time stored in a local SQLite database.

It is however also possible to use the GitHub API. To do so, you need to create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and export it in the `GITHUB_TOKEN` environment variable. If this variable exists, the `update` command will use it and fallback to your browser cookies if an error occurs.

Warning

Currently, this command downloads the latest available release, without checking it if is actually newer that the currently installed one.

This command was tested on Linux, macOS and Windows. If you use the Windows Subsystem for Linux (WSL), it might not be possible to read the cookies of your browser (which sits outside of WSL). You will consequently need to follow the step above by using a *personal access token*.
