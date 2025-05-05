1. [**1.** Introduction](Pro%20Git%20-%20Scott%20Chacon/Introduction.md)
1. [**1.1.** Installation](Atlas/Knowledge/tools/dev/Zellij/zellijdoc/installation.md)
2. [**1.2.** Terminology](terminology)
3. [**1.3.** Syntax](syntax)
4. [**1.4.** Settings](settings)
5. [**1.5.** FAQ](Atlas/Knowledge/tools/dev/Zellij/zellijdoc/faq.md)
3. [**2.** Internal Functions](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/internal-functions/overview)
01. [**2.1.** tp.app](app-module)
02. [**2.2.** tp.config](config-module)
03. [**2.3.** tp.date](date-module)
04. [**2.4.** tp.file](file-module)
05. [**2.5.** tp.frontmatter](frontmatter-module)
06. [**2.6.** tp.hooks](hooks-module)
07. [**2.7.** tp.obsidian](obsidian-module)
08. [**2.8.** tp.system](system-module)
09. [**2.9.** tp.web](web-module)
10. [**2.10.** Contributing](contribute)
5. [**3.** User Functions](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/user-functions/overview)
1. [**3.1.** User Scripts](script-user-functions)
2. [**3.2.** System Commands](system-user-functions)
7. [**4.** Commands](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/commands/overview)
1. [**4.1.** Dynamic Commands](dynamic-command)
2. [**4.2.** Execution Commands](execution-command)
3. [**4.3.** Whitespace Control](whitespace-control)

- Light (default)
- Rust
- Coal
- Navy
- Ayu

# Templater

[Print this book](print)

# [Obsidian Module](obsidian-module)

This module exposes all the functions and classes from the Obsidian API.

This is mostly useful when writing scripts.

Refer to the Obsidian API [declaration file](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts) for more information.

## [Examples](obsidian-module)

```javascript
// Get all folders
,+,Atlas,Efforts,MOC,Clippings,Spaces,Pro Git - Scott Chacon,work,~,Knowledge,Active,Projects,dev,tasks,Physical Objects,Appendix A_ Git in Other Environments,Appendix B_ Embedding Git in your Applications,Appendix C_ Git Commands,Customizing Git,Getting Started,Git Basics,Git Branching,Git and Other Systems,Git on the Server,Distributed Git,images,% tmpl,Git Internals,x,GitHub,Git Tools,Projects,bugs,calls,docs,people and teams,tickets,notes,Articles,Education,How To's,Media,concepts,daily_notes,notes,tools,CSV Kit,Obsidian Tinkering,Vim Exploration,people,templates,archive,dev,tasksCalendar,work,general,obsidian,An Example Git-Enforced Policy,Git Attributes,Git Configuration,Git Hooks,Administration,Basic Snapshotting,Branching and Merging,Debugging,Email,External Systems,Getting and Creating Projects,Inspection and Comparison,Patching,Setup and Config,Sharing and Updating Projects,Git in PowerShell,Graphical Interfaces,Dulwich,JGit,Libgit2,go-git,Getting a Git Repository,Recording Changes to the Repository,About Version Control,First-Time Git Setup,Installing Git,What is Git_,Basic Branching and Merging,Branch Management,Branches in a Nutshell,Branching Workflows,Rebasing,Remote Branches,Getting Git on a Server,GitLab,The Protocols,Contributing to a Project,Distributed Workflows,Maintaining a Project,Git as a Client,Migrating to Git,pages,templater,Environment Variables,Git Objects,Git References,Maintenance and Data Recovery,The Refspec,Transfer Protocols,Account Setup and Configuration,Contributing to a Project,Maintaining a Project,Managing an organization,Scripting GitHub,Advanced Merging,Credential Storage,Debugging with Git,Interactive Staging,Revision Selection,Signing Your Work,Stashing and Cleaning,Submodules,Reset Demystified,Rewriting History,Searching,Backyard,LUQA,Media API,archive,1 on 1,CRM,SPRINT,TEAMS,pair programming,AVIV,_archive,SPIKE's,FEAT,archive,chores,AWS,CRM,concepts,backyard,how to,infra,fun,NOVA,LUNA,archive,Obsidian,archive,dev,How To,Obsidian,React,Shell,Typescript,experiments,development,web,writing,Make Tutorial,computer science,2024,archive,2025,ideas and thoughts,links,templater,Books,Film,archive,docs,discovery,questions,PM,dev,obsidian,Explore quick add plugin,Obsidian,nvim - nvim-tree,bugs,docs,howtos,Security issue - General file access, passerell,XSS - extranet,architecture,PLANNING,RETRO,DAILY,backyard,QSL listing feature,Transac Zones update ticket,Diabolocom API transition,Project creation from Lead,pics,GCP Connection,Infra,Portals,application,entities,tools,Alicea Course,React Router,documentation,articles,obsidian,Execute program {},Projects,resources,tasks,things,Agile,source,frontend,short notes 📒,oop,December,November,old,03-March,02-February,04-April,January,Fiction,dev,archive,dev,obsidian,PlantUML,Zellij,deployment,git,js,linux,nvim,php,shell,zsh,dataview,javascript,x,concepts,subs,archive,artifacts,docs,subs,❌,envs,Calls,User Types,docs,diagrams, etc.,subs,notes,DOM and Declarative...,Installation,attachements,notes,Everyday Typescript,Modern Javascript,Execute program,Typescript docs,TS and JS,ADT,patterns,Learning Typescript Book,Patterns of Enterprise,docs,plugins,KDE,react,zellijdoc,AWS connection,code,features,requirements,archive,Long-term solution,UI test solution,archive,diagrams,glossary or concept,Everyday Typescript Lessons,quizes...,small notes 📔,content,estima processing,Templater,Templater,FontAwesome,commands,css,fonts,imgs,internal-functions,user-functions,css,fonts,internal-modules

// Normalize path
Path/to/file.md

// Html to markdown
# Heading

Paragraph

// HTTP request
delectus aut autem

```

[Previous chapter](hooks-module)

[Previous chapter](hooks-module)

