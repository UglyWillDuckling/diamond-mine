#ticket 

related:: [[Team Create-Edit Modal Component]]
___
- [x] #task [[LUQA Onboarding]] 🆔 zT8KZb ⏳ 2025-02-20 📅 2025-02-28 ✅ 2025-04-03
	- [x] #task service access 🆔 C72A1R ✅ 2025-03-19
		- [x] [[Lokalize]] service: **check** status
		- [x] [[sonar testing suite]]
	- [x] #task explore projects code 🆔 ii12pe ✅ 2025-04-14
		- [x] #task examine and study the [[#folder structure]] 🆔 PEayUI ✅ 2025-05-02
		- [x]  #task study the [[#tools in use]] 🆔 xCxe9D ✅ 2025-05-02
		- [x] #task check [[vim]] `integration` with JS and the rest #small 🆔 lzakH5 ✅ 2025-03-05
		- [x] #task examine deployment [[#deployment]] 🆔 GyExTb ✅ 2025-05-02
	- [x] #task experiment with making a [[# new component]] 🆔 hoz77n ✅ 2025-03-19
	- [x] #task checkout [Storybook](https://gemini-storybook.prompt-scorpion-preview.aws.aviv.eu/?path=/docs/introduction-getting-started--docs) 🆔 U6ldLo ✅ 2025-03-05
	- [ ] open the project i both [[vscode]] and [[Phpstorm]]

___
# notes

### to remember
- SLMP is short for **SeLoger**
- [[Atlas/Knowledge/tools/dev/js/react/react|react]] treats any function that returns a `jsx` as a [[react component]]

### [[Lokalize]] access
**project id**: 7742713467a213388b6c79.78436734

# folder structure

The project has the main root directory use to setup the 

### project as **application**

- auto reloading([[hot reloading]]) is enabled
	- each time a value is changed the code is recompiled by [[WebPack]]
	- the page is reloaded

# deployment

uses [[circleci]]
config file: `.circleci/continue-config.yml`

# new component
> Just a sample component to start with

**interesting findinds**
- [[useeffect]]
- [[useref react]]
%% I can move this later to somewhere less prominent %%
