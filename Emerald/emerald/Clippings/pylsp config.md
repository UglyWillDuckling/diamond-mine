
 Pylsp is a plugin for the LSP (Language Server Protocol) that enables
  features such as code completion, linting, and diagnostics for Python files.
  To configure pylsp to use a specific directory, you'll need to create a
  pylsconfig.json  file in the root directory of your project and define the
  settings  and  files  sections. Here's an example:

    {
        "files": {
            "config": {
                "pylsp": {
                    "projectRoots": ["."]
                }
            }
        },
        "settings": {
            "pylsp": {
                "pythonPaths": ["."]
            }
        }
    }

  However, there's a more direct way to tell pylsp to use a workspace folder.
  It's possible if you configure pylsp to use the workspace folder directly by
  using a configuration that tells LSP to use the current workspace.

  Here's how to configure the pyls plugin to use workspace folders:

    {
        "files": {
            "config": {
                "pylsp": {
                    "workspaceFolders": true,
                    "workspaceFoldersInclude": ["."],
                    "workspaceFolder": ".",
                    "workspaceFolders": []
                }
            }
        }
    }

  However, you can also simply use the pylsp configuration directly as below:

    {
      "settings": {
        "python.pythonPath": "./",
      }
    }

  You also can change the workspace root directory by creating a workspace
  folder:

  Here's a basic workspace folder configuration in the pyls configuration
  file. In the settings object, we can configure workspace folders using the
  workspaceRoots  array.

```json
{
	"settings": {
		"workspaceFoldersInclude": true,
		"workspaceRoots": ["./src"]
	}
}
```
  In the configuration above,  ./src  is assumed to be the workspace folder
  where pylsp will run. All the files and folders within this workspace will
  be scanned by pylsp and will be available for its functionalities.

  You can also use the  lsp.workspaceFolders  setting directly:

    {
        "settings": {
            "lsp.workspaceFolders": [{ "name": "", "path": "./src" }]
        }
    }

  This will do the same thing as the configuration above but is the direct
  pyls configuration. The above configuration can be used to specify custom
  workspace folders.

  To activate these configurations in pylsp, you can follow these general
  steps:

  • Open the pylsp settings (you can do this with  Ctrl+Shift+P  and then
  typing "pylsp: open settings")
  • Change the setting to "Workspace folder"
  • Add your custom workspace folder path

  Please note that pyls configuration and workspace folder settings can be
  complex, and may need to be further modified and customized to suit specific
  project requirements.

  Alternatively, you can configure pyls settings using a simple configuration
  file. The steps to do this are as follows:

  • Open the pyls settings
  • Change the setting to "JSON"
  • Set the pyls configuration to the following JSON configuration:

    {
        "python.pythonPath": "./"
    }

  This will configure pyls to use the workspace folder directly.

  However, the above configuration will be overwritten if you make changes to
  pyls configuration using pyls settings. You will be able to use the pyls
  settings by opening the pyls settings with  Ctrl+Shift+P . Then typing and
  selecting "pylsp: open settings". Then you can configure all the pyls
  settings that you want.
___

  You can create a configuration file for pylsp, typically named  .pylsconfig
  in the root directory of your project. Here's an example configuration:

    {
        "python.analysis.pathMappings": [
            {
                "from": "${workspaceRoot}",
                "to": "/path/to/python/site-packages",
                "globPatterns": "**/*"
            }
        ],
        "python.analysis.workspaceFolders": [
            {
                "identifier": "path/to/your/project"
            }
        ]
    }

  This configuration tells pylsp to use the  /path/to/python/site-packages
  directory as the site-packages directory for the project located at
  /path/to/your/project .
