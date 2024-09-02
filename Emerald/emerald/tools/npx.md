#javascript 
#packages
#package-manager
[[npm]]

## from mods
  
npx  is a package runner tool that comes with **npm** (Node Package Manager).
It allows you to run **Node.js** packages without having to install them
globally on your system.

When you run a command using  npx , it will first check if the package is
already installed locally in your current project's  node_modules  folder.
If it is not found there,  npx  will download and install the package
temporarily in a hidden directory, and then run it. Once the command is
finished executing, the temporary installation is removed from your system.

Using  npx  has several advantages over installing packages globally. It
allows you to use the latest version of a package without having to update
the global installation. It also makes it easy to use different versions of
a package for different projects without conflicts.

Here are some examples of using  npx :

- Running a package's command-line interface (CLI):

```shell
npx create-react-app my-app
```

- Running a package's script:
{
    "scripts": {
    "start": "npx serve"
    }
}

• Running a package's binary:

npx http-server

• Running a package's module:

npx @babel/cli --init

• Running a package's script with custom arguments:

npx -- maven clean install

• Running a package's script with custom environment variables:

{
    "scripts": {
    "start": "npx HOST=my-host react-scripts start"
    }
}

• Running a package's script with custom working directory:

npx --workdir=my-app react-scripts start

• Running a package's script with custom Node.js version:

npx --node-version=14.0.0 react-scripts start

• Running a package's script with custom npm version:

npx --npm-version=7.0.0 react-scripts start

Conversation saved:  aed2362  what is npx
