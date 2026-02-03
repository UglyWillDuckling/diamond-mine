---
source: https://github.com/JetBrains/kotlinconf-app
published:
created: 2025-12-13
tags:
  - app
  - git-repo
---
[Skip to content](https://github.com/JetBrains/#start-of-content)

The official KotlinConf application

[jetbrains.github.io/kotlinconf-app/](https://jetbrains.github.io/kotlinconf-app/ "https://jetbrains.github.io/kotlinconf-app/")

### License

[Apache-2.0 license](https://github.com/JetBrains/kotlinconf-app/blob/main/LICENSE)

[Star](https://github.com/login?return_to=%2FJetBrains%2Fkotlinconf-app)

[Notifications](https://github.com/login?return_to=%2FJetBrains%2Fkotlinconf-app) You must be signed in to change notification settings

## JetBrains/kotlinconf-app

## Folders and files

<table><thead><tr><th colspan="2"><span>Name</span></th><th colspan="1"><span>Name</span></th><th><p><span>Last commit message</span></p></th><th colspan="1"><p><span>Last commit date</span></p></th></tr></thead><tbody><tr><td colspan="3"></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/.devcontainer">.devcontainer</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/.devcontainer">.devcontainer</a></p></td><td><p><a href="https://github.com/JetBrains/kotlinconf-app/commit/9d55e3ad11dbbeb2a0f6d5f0f03bf2f6732db72b">feat(junie): added.devcontainer.json</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/.github/workflows"><span>.github/</span> <span>workflows</span></a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/.github/workflows"><span>.github/</span> <span>workflows</span></a></p></td><td><p><a href="https://github.com/JetBrains/kotlinconf-app/commit/bbae6dcbda61ad1a463d96abc5073d14f7cb098f">Remove news implementation from the backend</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/.idea">.idea</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/.idea">.idea</a></p></td><td><p><a href="https://github.com/JetBrains/kotlinconf-app/commit/2bfe3939d95056507ba1b286f75045f9d87fdb15">Optimize SVGO files using SVGO</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/androidApp">androidApp</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/androidApp">androidApp</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/backend">backend</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/backend">backend</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/core">core</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/core">core</a></p></td><td><p><a href="https://github.com/JetBrains/kotlinconf-app/commit/f57297dceea0a76c5459788022a6e8a7ab24b227">Rename model to core</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/docs">docs</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/docs">docs</a></p></td><td><p><a href="https://github.com/JetBrains/kotlinconf-app/commit/10259d21a8d3e8abbe405f68ed21b9e93bc837f2">Update README, add CONTRIBUTING.md</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/gradle">gradle</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/gradle">gradle</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/iosApp">iosApp</a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/iosApp">iosApp</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/kotlin-js-store/wasm"><span>kotlin-js-store/</span> <span>wasm</span></a></p></td><td colspan="1"><p><a href="https://github.com/JetBrains/kotlinconf-app/tree/main/kotlin-js-store/wasm"><span>kotlin-js-store/</span> <span>wasm</span></a></p></td><td><p><a href="https://github.com/JetBrains/kotlinconf-app/commit/325ff7003eb3aef9dd14d75428b3eee27f1419b5">Bump @js-joda/timezone to latest (2.22.0) (</a><a href="https://github.com/JetBrains/kotlinconf-app/pull/573">#573</a><a href="https://github.com/JetBrains/kotlinconf-app/commit/325ff7003eb3aef9dd14d75428b3eee27f1419b5">)</a></p></td><td></td></tr><tr><td colspan="3"></td></tr></tbody></table>

## KotlinConf App

This repository contains the source code of the official application for [KotlinConf](https://kotlinconf.com/).

[![[~/×/7d13824b02a5c5408e842b7b0d8d3c24_MD5.png]]](https://github.com/JetBrains/kotlinconf-app/blob/main/docs/header.png)

The application is written in Kotlin, sharing code between all of its platforms using [Kotlin Multiplatform](https://www.jetbrains.com/kotlin-multiplatform/).

- The client application for Android, iOS, desktop, and web is built with shared UI using [Compose Multiplatform](https://www.jetbrains.com/compose-multiplatform/).
- The backend application is powered by the [Ktor](https://ktor.io/) server-side framework and the [Exposed](https://www.jetbrains.com/help/exposed/home.html) database library.

The app is published for the following platforms:

- Android: [available on Google Play](https://play.google.com/store/apps/details?id=com.jetbrains.kotlinconf)
- iOS: [available from the App Store](https://apps.apple.com/us/app/kotlinconf/id1299196584)
- Web: [deployed to GitHub Pages](https://jetbrains.github.io/kotlinconf-app/)

To build the project locally:

1. [Set up your environment](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-setup.html) for Kotlin Multiplatform development.
2. Open the project in IntelliJ IDEA or Android Studio.
3. Run the desired platform
	- Android: use the `androidApp` run configuration
	- iOS: use `KotlinConfAppScheme`
	- Desktop: `./gradlew :shared:jvmRunHot -DmainClass=org.jetbrains.kotlinconf.MainKt`
	- Web: `./gradlew :shared:wasmJsBrowserDevelopmentRun `
	- Backend: `./gradlew :backend:run`

## Releases

No releases published

## Languages

- [Kotlin 98.2%](https://github.com/JetBrains/kotlinconf-app/search?l=kotlin)
- Other 1.8%