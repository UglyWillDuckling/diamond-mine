---
source: "https://en.wikipedia.org/wiki/Dart_(programming_language)"
author:
published:
created: 2025-05-03
tags:
---
We’re looking for Wikipedia readers like you to take part in research studies that will help improve user experiences. Click the link below to join our research participant list. You’ll be contacted periodically with opportunities to participate, and you can unsubscribe at any time.

---

**Dart** is a [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") designed by [Lars Bak](https://en.wikipedia.org/wiki/Lars_Bak_\(computer_programmer\) "Lars Bak (computer programmer)") and Kasper Lund and developed by [Google](https://en.wikipedia.org/wiki/Google "Google").[^8] It can be used to develop [web](https://en.wikipedia.org/wiki/Web_application "Web application") and [mobile apps](https://en.wikipedia.org/wiki/Mobile_app "Mobile app") as well as [server](https://en.wikipedia.org/wiki/Server_\(computing\) "Server (computing)") and [desktop applications](https://en.wikipedia.org/wiki/Application_software "Application software").

Dart is an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming "Object-oriented programming"), [class-based](https://en.wikipedia.org/wiki/Class-based_programming "Class-based programming"), [garbage-collected](https://en.wikipedia.org/wiki/Garbage_collection_\(computer_science\) "Garbage collection (computer science)") language with [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") -style [syntax](https://en.wikipedia.org/wiki/Syntax_\(programming_languages\) "Syntax (programming languages)").[^9] It can [compile](https://en.wikipedia.org/wiki/Compiler "Compiler") to [machine code](https://en.wikipedia.org/wiki/Machine_code "Machine code"), [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript"), or [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly "WebAssembly"). It supports [interfaces](https://en.wikipedia.org/wiki/Interface_\(object-oriented_programming\) "Interface (object-oriented programming)"), [mixins](https://en.wikipedia.org/wiki/Mixin "Mixin"), [abstract classes](https://en.wikipedia.org/wiki/Abstract_class "Abstract class"), [reified](https://en.wikipedia.org/wiki/Reification_\(computer_science\) "Reification (computer science)") [generics](https://en.wikipedia.org/wiki/Generic_programming "Generic programming") and [type inference](https://en.wikipedia.org/wiki/Type_inference "Type inference").[^4]

## History

Dart was unveiled at the GOTO conference in [Aarhus](https://en.wikipedia.org/wiki/Aarhus "Aarhus"), Denmark, October 10–12, 2011.[^10] [Lars Bak](https://en.wikipedia.org/wiki/Lars_Bak_\(computer_programmer\) "Lars Bak (computer programmer)") and Kasper Lund founded the project.[^11] Dart 1.0 was released on November 14, 2013.[^12]

Dart had a mixed reception at first. Some criticized the Dart initiative for fragmenting the web because of plans to include a Dart [VM](https://en.wikipedia.org/wiki/Virtual_machine "Virtual machine") in [Chrome](https://en.wikipedia.org/wiki/Google_Chrome "Google Chrome"). Those plans were dropped in 2015 with the Dart 1.9 release. Focus changed to compiling Dart code to JavaScript.[^13]

Dart 2.0 was released in August 2018 with language changes including a type system.[^14]

Dart 2.6 introduced a new extension, `dart2native`. This extended native compilation to the Linux, macOS, and Windows desktop platforms.[^15] Earlier developers could create new tools using only Android or iOS devices. With this extension, developers could deploy a program into self-contained executables. The Dart SDK doesn't need to be installed to run these self-contained executables.[^16] The [Flutter](https://en.wikipedia.org/wiki/Flutter_\(software\) "Flutter (software)") toolkit integrates Dart, so it can compile on small services like backend support.[^17] [^18]

Dart 3.0 was released in May 2023 [^19] with changes to the type system to require sound null safety. This release included new features like records, patterns,[^20] and class modifiers.[^21]

Dart can compile to [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly "WebAssembly") since version 3.4.[^22]

## Specification

Dart released the 5th edition of its language specification on April 9, 2021.[^23] This covers all syntax through Dart 2.10. A draft of the 6th edition includes all syntax through 2.13.[^24] [Accepted proposals](https://github.com/dart-lang/language/tree/main/accepted) for the specification and [drafts of potential features](https://github.com/dart-lang/language/tree/main/working) can be found in the Dart language repository on GitHub.[^25]

[ECMA International](https://en.wikipedia.org/wiki/Ecma_International "Ecma International") formed technical committee, TC52,[^26] to standardize Dart. ECMA approved the first edition of the Dart language specification as ECMA-408 [^27] in July 2014 at its 107th General Assembly.[^28] Subsequent editions were approved in December 2014,[^29] June 2015, and December 2015.[^27]

## Deploying apps

The Dart [software development kit](https://en.wikipedia.org/wiki/Software_development_kit "Software development kit") (SDK) ships with a standalone Dart runtime. This allows Dart code to run in a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface "Command-line interface") environment. The SDK includes tools to compile and [package](https://en.wikipedia.org/wiki/Package_manager "Package manager") Dart apps.[^30] Dart ships with a complete [standard library](https://en.wikipedia.org/wiki/Standard_library "Standard library") allowing users to write fully working system apps like custom web servers.[^31]

Developers can deploy Dart apps in six ways:

| Deployment type | Target platform | Platform-   specific | Requires   Dart VM | Compile   speed | Execution   speed |
| --- | --- | --- | --- | --- | --- |
| JavaScript | Browser | No | No | Slow | Fast |
| WebAssembly [^22] [^32] | Browser | No | No | Slow | Fast |
| Self-contained executable | macOS, Windows, Linux | Yes | No | Slow | Fast |
| Ahead-of-time module | macOS, Windows, Linux | Yes | No | Slow | Fast |
| Just-in-time module | macOS, Windows, Linux | Yes | Yes | Fast | Slow |
| Portable module | macOS, Windows, Linux | No | Yes | Fast | Slow |

Dart 3 can deploy apps to the web as either JavaScript or WebAssembly apps. Dart supports compiling to WebAssembly as of May 2024.

#### JavaScript

To run in mainstream [web browsers](https://en.wikipedia.org/wiki/Web_browser "Web browser"), Dart relies on a [source-to-source compiler](https://en.wikipedia.org/wiki/Source-to-source_compiler "Source-to-source compiler") to [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript"). This makes Dart apps compatible with all major browsers. Dart optimizes the compiled JavaScript output to avoid expensive checks and operations. This results in JavaScript code that can run faster than equivalent code handwritten in plain JavaScript.[^33]

The first Dart-to-JavaScript compiler was `dartc`. It was deprecated in Dart 2.0.

The second Dart-to-JavaScript compiler was frog.[^34] Written in Dart, it was introduced in 2013 and deprecated in 2020. This should not be confused with Dart Frog,[^35] an open-source Dart framework for building backend systems from [Very Good Ventures](https://en.wikipedia.org/w/index.php?title=Very_Good_Ventures&action=edit&redlink=1 "Very Good Ventures (page does not exist)").

The third Dart-to-JavaScript compiler is `dart2js`. Introduced in Dart 2.0,[^36] the Dart-based `dart2js` evolved from earlier compilers. It intended to implement the full Dart language specification and semantics. Developers use this compiler for production builds. It compiles to [minified JavaScript](https://en.wikipedia.org/wiki/Minification_\(programming\) "Minification (programming)").

The fourth Dart-to-JavaScript compiler is `dartdevc`.[^37] Developers could use this compiler for development builds. It compiles to human-readable JavaScript. On March 28, 2013, the Dart team posted an update on their blog addressing Dart code compiled to JavaScript with the `dart2js` compiler,[^38] stating that it now runs faster than handwritten JavaScript on [Chrome's V8 JavaScript engine](https://en.wikipedia.org/wiki/V8_\(JavaScript_engine\) "V8 (JavaScript engine)") for the DeltaBlue benchmark.[^39]

Prior to Dart 2.18, both `dart2js` and `dartdevc` could be called from the command line. Dart 2.18 folded these functions into the Dart SDK. This removed the direct command line wrappers but kept the two compilers. The `webdev serve` command calls the `dartdevc` compiler. The `webdev build` command calls the `dart2js` compiler.

The Dart SDK compiles to JavaScript in two ways.

To debug code, run `webdev serve` to compile a larger JavaScript file with human-readable code. Dart-generated JavaScript can be debugged using [Chrome](https://en.wikipedia.org/wiki/Google_Chrome "Google Chrome") only.

```
$ cd <dart_app_directory>
$ webdev serve [--debug] [-o <target.js>]
```

To create production apps, run `webdev build` to compile a minified JavaScript file.

```
$ cd <dart_app_directory>
$ webdev build [-o <target.js>]
```

#### WebAssembly

With the Dart 3.22 release, Google announced support for compiling Dart code to [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly "WebAssembly").[^22] Full support for [Wasm](https://en.wikipedia.org/wiki/WebAssembly "WebAssembly") requires adoption of the WasmGC [^40] feature into the Wasm standard. Chrome 119 [^41] supports WasmGC. [Firefox](https://en.wikipedia.org/wiki/Firefox "Firefox") [^42] 120 and later could support WasmGC, but a current bug is blocking compatibility.[^43] [Safari](https://en.wikipedia.org/wiki/Safari_\(web_browser\) "Safari (web browser)") [^44] and [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge "Microsoft Edge") are integrating WasmGC support.

Dart can compile to native machine code for macOS, Windows, and Linux as command line tools. Dart can compile apps with user interfaces to the web, iOS, Android, macOS, Windows, and Linux using the [Flutter](https://en.wikipedia.org/wiki/Flutter_\(software\) "Flutter (software)") framework.

#### Self-contained executable

Self-contained executables include native machine code compiled from the specified Dart code file, its dependencies, and a small Dart runtime. The runtime handles type checking and garbage collection. The compiler produces output specific to the architecture on which the developer compiled it. This file can be distributed as any other native executable.

```
$ dart compile exe <source.dart> -o <target_app>
Generated: <target_app>
$ ./<target_app>
```

#### Ahead-of-time module

When [compiled ahead of time](https://en.wikipedia.org/wiki/AOT_compilation "AOT compilation"),[^45] Dart code produces performant and platform-specific modules. It includes all dependent libraries and packages the app needs. This increases its compilation time. The compiler outputs an app specific to the architecture on which it was compiled.

```
$ dart compile aot-snapshot <source.dart>
Generated <target_app.aot>
$ dartaotruntime <target_app.aot>
```

#### Just-in-time module

When [compiled just in time](https://en.wikipedia.org/wiki/Just-in-time_compilation "Just-in-time compilation"), Dart code produces performant modules that compile fast. This module needs the Dart VM included with the SDK to run. The compiler loads all parsed classes and compiled code into memory the first time the app runs. This speeds up any subsequent run of the app. The compiler outputs an app specific to the architecture on which it was compiled.

```
$ dart compile jit-snapshot <source.dart>
Compiling <source.dart> to jit-snapshot file <target_app.jit>
Hello world!
$ dart run <target_app.jit>
Hello world!
```

When compiled as a kernel module, Dart code produces a machine-independent format called the Dart Intermediate Representation (Dart IR). The Dart IR bytecode format can work on any architecture that has a Dart VM. This makes this format very portable and quick to compile, but less performant than other compilation outputs.

```
$ dart compile kernel <source.dart>
Compiling <source.dart> to kernel file <target_app>.dill.
$ dart run <target_app>.dill
```

## Concurrency

To achieve [concurrency](https://en.wikipedia.org/wiki/Concurrency_\(computer_science\) "Concurrency (computer science)"), Dart uses isolated, independent workers that do not share memory, but use [message passing](https://en.wikipedia.org/wiki/Message_passing "Message passing"),[^46] similarly to [Erlang](https://en.wikipedia.org/wiki/Erlang_\(programming_language\) "Erlang (programming language)") processes (also see [actor model](https://en.wikipedia.org/wiki/Actor_model "Actor model")). Every Dart program uses at least one isolate, which is the main isolate. Since Dart 2, the Dart web platform no longer supports isolates, and suggests developers use [Web Workers](https://en.wikipedia.org/wiki/Web_worker "Web worker") instead.[^47]

## Null safety

Starting with Dart 2.12, Dart introduced sound [null safety](https://en.wikipedia.org/wiki/Void_safety "Void safety").[^48] This serves as a guarantee that variables cannot return a null value unless it has explicit permission. Null safety prevents the developer from introducing null-pointer exceptions, a common, but difficult to debug, error. With Dart 3.0, all code must follow sound null safety.

## Data storage

Snapshot files, a core part of the Dart VM, store objects and other runtime data.[^46]

Script snapshots

Dart programs can be compiled into snapshot files containing all of the program code and dependencies preparsed and ready to execute, allowing fast startups.

Full snapshots

The Dart core libraries can be compiled into a snapshot file that allows fast loading of the libraries. Most standard distributions of the main Dart VM have a prebuilt snapshot for the core libraries that is loaded at runtime.

Object snapshots

Dart uses [snapshots](https://en.wikipedia.org/wiki/Snapshot_\(computer_storage\) "Snapshot (computer storage)") to *[serialize](https://en.wikipedia.org/wiki/Serial_communication "Serial communication")* messages that it passes between isolates. As a very [asynchronous](https://en.wikipedia.org/wiki/Asynchronous_I/O "Asynchronous I/O") language, Dart uses isolates for [concurrency](https://en.wikipedia.org/wiki/Concurrency_\(computer_science\) "Concurrency (computer science)").[^49] An object generates a [snapshot](https://en.wikipedia.org/wiki/Snapshot_\(computer_storage\) "Snapshot (computer storage)"), transfers it to another isolate, then the isolate deserializes it.

## Editors

On November 18, 2011, Google released *Dart Editor*, an open-source program based on [Eclipse](https://en.wikipedia.org/wiki/Eclipse_\(software\) "Eclipse (software)") components, for [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS"), [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows"), and [Linux](https://en.wikipedia.org/wiki/Linux "Linux") -based [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system").[^50] The editor supports [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting "Syntax highlighting"), [code completion](https://en.wikipedia.org/wiki/Autocomplete "Autocomplete"), JavaScript compiling, running web and server Dart applications, and [debugging](https://en.wikipedia.org/wiki/Debugging "Debugging").

On August 13, 2012, Google announced the release of an Eclipse plugin for Dart development.[^51]

On April 18, 2015, Google retired the Dart Editor in favor of the [JetBrains](https://en.wikipedia.org/wiki/JetBrains "JetBrains") [integrated development environment](https://en.wikipedia.org/wiki/Integrated_development_environment "Integrated development environment") (IDE).[^52] [Android Studio](https://en.wikipedia.org/wiki/Android_Studio "Android Studio"), [IntelliJ IDEA](https://en.wikipedia.org/wiki/IntelliJ_IDEA "IntelliJ IDEA"), [PyCharm](https://en.wikipedia.org/wiki/PyCharm "PyCharm"), [PhpStorm](https://en.wikipedia.org/wiki/PhpStorm "PhpStorm") and [WebStorm](https://en.wikipedia.org/wiki/WebStorm "WebStorm") support a Dart plugin.[^53] This plugin supports many features such as syntax highlighting, code completion, analysis, refactoring, debugging, and more. Other editors include plugins for Dart [^54] including [Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text "Sublime Text"),[^55] [Atom](https://en.wikipedia.org/wiki/Atom_\(text_editor\) "Atom (text editor)"),[^56] [Emacs](https://en.wikipedia.org/wiki/Emacs "Emacs"),[^57] [Vim](https://en.wikipedia.org/wiki/Vim_\(text_editor\) "Vim (text editor)") [^58] and [Visual Studio Code](https://en.wikipedia.org/wiki/Visual_Studio_Code "Visual Studio Code").[^59]

In 2013, the Chromium team began work on an open source, [Chrome App](https://en.wikipedia.org/wiki/Chrome_App "Chrome App") -based development environment with a reusable library of [GUI widgets](https://en.wikipedia.org/wiki/GUI_widget "GUI widget"), codenamed Spark.[^60] The project was later renamed as Chrome Dev Editor.[^61] Built in Dart, it contained Spark which is powered by Polymer.[^62]

In June 2015, Google transferred the CDE project to GitHub as a free software project and ceased active investment in CDE.[^63] The Chrome Dev Editor project was archived on April 24, 2021.[^64]

### DartPad

To provide an easier way to start using Dart, the Dart team created [DartPad](https://dartpad.dev/) at the start of 2015. This online editor allows developers to experiment with Dart [application programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") (APIs) and run Dart code. It provides syntax highlighting, code analysis, code completion, documentation, and HTML and CSS editing.[^65]

## Development tools

The Dart DevTools, written in Dart,[^66] include debugging and performance tools.

## Flutter

Google introduced [Flutter](https://en.wikipedia.org/wiki/Flutter_\(software\) "Flutter (software)") for native app development. Built using Dart, C, C++ and Skia, Flutter is an open-source, multi-platform app UI framework. Prior to Flutter 2.0, developers could only target [Android](https://en.wikipedia.org/wiki/Android_\(operating_system\) "Android (operating system)"), [iOS](https://en.wikipedia.org/wiki/IOS "IOS") and the web. Flutter 2.0 released support for macOS, Linux, and Windows as a beta feature.[^67] Flutter 2.10 released with production support for [Windows](https://en.wikipedia.org/wiki/Windows "Windows") [^68] and Flutter 3 released production support for all desktop platforms.[^69] It provides a framework, widgets, and tools. This framework gives developers a way to build and deploy mobile, desktop, and web apps.[^70] Flutter works with [Firebase](https://en.wikipedia.org/wiki/Firebase "Firebase") [^71] and supports extending the framework through add-ons called packages. These can be found on their package repository, pub.dev.[^72] JetBrains also supports a Flutter plugin.[^73]

## Example

A [Hello, World!](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program "\"Hello, World!\" program") example:

```
void main() {
  print('Hello, World!');
}
```

A simple [for-loop](https://en.wikipedia.org/wiki/For-loop "For-loop"):[^74]

```
void main() {
  for (var i = 1; i <= 10; i++) {
    print(i);
  }
}
```

A function to calculate the nth [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number "Fibonacci number"):

```
void main() {
  var i = 20;
  print('fibonacci($i) = ${fibonacci(i)}');
}

/// Computes the nth Fibonacci number.
int fibonacci(int n) {
  return n < 2 ? n : (fibonacci(n - 1) + fibonacci(n - 2));
}
```

A simple class:

```
// Import the math library to get access to the sqrt function.
// Imported with \`math\` as name, so accesses need to use \`math.\` as prefix.
import 'dart:math' as math;

// Create a class for Point.
class Point {

  // Final variables cannot be changed once they are assigned.
  // Declare two instance variables.
  final num x, y;

  // A constructor, with syntactic sugar for setting instance variables.
  // The constructor has two mandatory parameters.
  Point(this.x, this.y);

  // A named constructor with an initializer list.
  Point.origin()
      : x = 0,
        y = 0;

  // A method.
  num distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return math.sqrt(dx * dx + dy * dy);
  }
  
  // Example of a "getter".
  // Acts the same as a final variable, but is computed on each access.
  num get magnitude => math.sqrt(x * x + y * y);

  // Example of operator overloading
  Point operator +(Point other) => Point(x + other.x, y + other.y);
  // When instantiating a class such as Point in Dart 2+, new is 
  // an optional word
}

// All Dart programs start with main().
void main() {
  // Instantiate point objects.
  var p1 = Point(10, 10);
  print(p1.magnitude);
  var p2 = Point.origin();
  var distance = p1.distanceTo(p2);
  print(distance);
}
```

Dart belongs to the [ALGOL](https://en.wikipedia.org/wiki/ALGOL "ALGOL") language family.[^75] Its members include C, Java, C#, JavaScript, and others.

The [method cascade](https://en.wikipedia.org/wiki/Method_cascading "Method cascading") syntax was adopted from Smalltalk.[^76] This syntax provides a shortcut for invoking several methods one after another on the same object.

Dart's [mixins](https://en.wikipedia.org/wiki/Mixin "Mixin") were influenced by [Strongtalk](https://en.wikipedia.org/wiki/Strongtalk "Strongtalk") [^77] [^78] and [Ruby](https://en.wikipedia.org/wiki/Ruby_\(programming_language\) "Ruby (programming language)").

Dart makes use of isolates as a concurrency and security unit when structuring applications.[^79] The Isolate concept builds upon the [Actor model](https://en.wikipedia.org/wiki/Actor_model "Actor model") implemented in Erlang.[^80]

In 2004, [Gilad Bracha](https://en.wikipedia.org/wiki/Gilad_Bracha "Gilad Bracha") (who was a member of the Dart team) and [David Ungar](https://en.wikipedia.org/wiki/David_Ungar "David Ungar") first proposed Mirror API for performing controlled and secure [reflection](https://en.wikipedia.org/wiki/Reflective_programming "Reflective programming") in a paper.[^81] The concept was first implemented in [Self](https://en.wikipedia.org/wiki/Self_\(programming_language\) "Self (programming language)").

## See also

- [Google Web Toolkit](https://en.wikipedia.org/wiki/Google_Web_Toolkit "Google Web Toolkit")
- [TypeScript](https://en.wikipedia.org/wiki/TypeScript "TypeScript"), a strongly-typed programming language that [transpiles](https://en.wikipedia.org/wiki/Transpile "Transpile") to JavaScript
- [Flutter](https://en.wikipedia.org/wiki/Flutter_\(software\) "Flutter (software)"), an open-source UI software development kit for cross-platform applications

## References

## Bibliography

## External links

- [Official website](https://dart.dev/)
- [DartPad](https://dartpad.dev/)

[^1]: Kopec, David (30 June 2014). [*Dart for Absolute Beginners*](https://books.google.com/books?id=EcvjAwAAQBAJ&q=dart%20multi-paradigm&pg=PA56). Apress. p. 56. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781430264828](https://en.wikipedia.org/wiki/Special:BookSources/9781430264828 "Special:BookSources/9781430264828"). Retrieved 24 November 2015.

[^2]: Bak, Lars (10 October 2011). ["Dart: a language for structured web programming"](http://googlecode.blogspot.com/2011/10/dart-language-for-structured-web.html). *Google Code Blog*. Retrieved 31 January 2016.

[^3]: . Retrieved 18 April 2025.

[^4]: ["The Dart type system"](https://dart.dev/guides/language/sound-dart). *dart.dev*.

[^5]: ["Web Languages and VMs: Fast Code is Always in Fashion. (V8, Dart) - Google I/O 2013"](https://www.youtube.com/watch?v=huawCRlo9H4&t=30m10s). *[YouTube](https://en.wikipedia.org/wiki/YouTube "YouTube")*. 16 May 2013. Retrieved 22 December 2013.

[^6]: ["The Dart Team Welcomes TypeScript"](https://news.dartlang.org/2012/10/the-dart-team-welcomes-typescript.html). 10 September 2019. Retrieved 22 February 2020.

[^7]: ["Dart SDK Tags"](https://github.com/dart-lang/sdk/tags). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*.

[^8]: ["A Bit About Dart - Learn Dart: First Step to Flutter"](https://www.educative.io/courses/learn-dart-first-step-to-flutter/g7kmn5r74ok). *Educative: Interactive Courses for Software Developers*. Retrieved 2023-06-20.

[^9]: ["A Tour of the Dart Language"](https://dart.dev/guides/language/language-tour#important-concepts). *dart.dev*. Retrieved 2018-08-09.

[^10]: ["Dart, a new programming language for structured web programming"](http://gotocon.com/aarhus-2011/presentation/Opening%20Keynote:%20Dart,%20a%20new%20programming%20language%20for%20structured%20web%20programming), [*GOTO conference*](http://gotocon.com/aarhus-2011/) (presentation) (opening keynote), Århus conference, 2011-10-10 `{{[citation](https://en.wikipedia.org/wiki/Template:Citation "Template:Citation")}}`: CS1 maint: location missing publisher ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher "Category:CS1 maint: location missing publisher"))

[^11]: Ladd, Seth. ["What is Dart"](http://radar.oreilly.com/2012/03/what-is-dart.html). *What is Dart?*. O'Reilly. Retrieved August 16, 2014.

[^12]: ["Dart 1.0: A stable SDK for structured web apps"](https://news.dartlang.org/2013/11/dart-10-stable-sdk-for-structured-web.html). *news.dartlang.org*. Retrieved 2018-08-08.

[^13]: Seth Ladd (10 September 2019). ["Dart News & Updates"](http://news.dartlang.org/2015/03/dart-for-entire-web.html). *dartlang.org*.

[^14]: Moore, Kevin (2018-08-07). ["Announcing Dart 2 Stable and the Dart Web Platform"](https://medium.com/dartlang/dart-2-stable-and-the-dart-web-platform-3775d5f8eac7). *Dart*. Retrieved 2018-08-08.

[^15]: ["Dart language evolution"](https://dart.dev/guides/language/evolution). *dart.dev*. Retrieved 2023-06-20.

[^16]: ["Dart overview"](https://dart.dev/overview.html). *dart.dev*. Retrieved 2023-05-12.

[^17]: ["Dart 2.5 brings native compilation to the desktop"](https://www.infoworld.com/article/3454623/dart-26-brings-native-compilation-to-the-desktop.html). *Infoworld*. 20 November 2019. Retrieved 2019-11-28.

[^18]: ["Dart 2.6 released with dart2native"](https://sdtimes.com/goog/dart-2-6-released-with-dart2native/). *SDtimes*. 7 November 2019. Retrieved 2019-11-28.

[^19]: ["Dart language evolution"](https://dart.dev/guides/language/evolution). *dart.dev*. Retrieved 2024-01-09.

[^20]: ["Patterns"](https://dart.dev/language/patterns.html). *dart.dev*. Retrieved 2023-05-12.

[^21]: ["Class modifiers"](https://dart.dev/language/class-modifiers).

[^22]: Thomsen, Michael (2024-05-14). ["Landing Flutter 3.22 and Dart 3.4 at Google I/O 2024"](https://medium.com/flutter/io24-5e211f708a37). *Flutter*. Retrieved 2024-05-17.

[^23]: ["Dart Programming Language Specification, 5th edition"](https://dart.dev/guides/language/specifications/DartLangSpec-v2.10.pdf) (PDF).

[^24]: ["Dart Programming Language Specification, 6th edition draft"](https://spec.dart.dev/DartLangSpecDraft.pdf) (PDF).

[^25]: ["Dart language GitHub repository"](https://github.com/dart-lang/language). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*.

[^26]: ["TC52 - Dart"](https://web.archive.org/web/20160802100651/http://www.ecma-international.org/memento/TC52.htm). Archived from [the original](http://www.ecma-international.org/memento/TC52.htm) on 2016-08-02. Retrieved 2013-12-16.

[^27]: ["ECMA-408"](https://www.ecma-international.org/publications-and-standards/standards/ecma-408/). *Ecma International*. Retrieved 2023-05-12.

[^28]: Anders Thorhauge Sandholm (10 September 2019). ["Dart News & Updates"](http://news.dartlang.org/2014/07/ecma-approves-1st-edition-of-dart.html). *dartlang.org*.

[^29]: Anders Thorhauge Sandholm (10 September 2019). ["Dart News & Updates"](http://news.dartlang.org/2014/12/enums-and-async-primitives-in-dart.html). *dartlang.org*.

[^30]: ["Packages of publisher tools.dart.dev"](https://pub.dev/publishers/tools.dart.dev/packages). *Dart packages*. Retrieved 2023-05-12.

[^31]: ["An Introduction to the dart:io Library"](https://dart.dev/guides/libraries/library-tour#dartio). *dart.dev*. Retrieved 2013-07-21.

[^32]: Thomsen, Michael (2023-05-10). ["Announcing Dart 3"](https://medium.com/dartlang/announcing-dart-3-53f065a10635). *Dart*. Retrieved 2023-05-13.

[^33]: ["JavaScript as a compilation target: Making it fast"](https://web.archive.org/web/20160702204820/http://www.dartlang.org/slides/2012/10/jsconfeu/javascript-as-compilation-target-florian-loitsch.pdf) (PDF). Dartlang.org. Archived from [the original](http://www.dartlang.org/slides/2012/10/jsconfeu/javascript-as-compilation-target-florian-loitsch.pdf) (PDF) on 2016-07-02. Retrieved 2013-08-18.

[^34]: ["Towards a single Dart to JavaScript compiler"](https://news.dartlang.org/2012/02/towards-single-dart-to-javascript.html). 10 September 2019. Retrieved 2023-05-13.

[^35]: ["Dart Frog"](https://dartfrog.vgv.dev/). *dartfrog.vgv.dev*. Retrieved 2023-05-13.

[^36]: Moore, Kevin (2018-08-08). ["Announcing Dart 2 Stable and the Dart Web Platform"](https://medium.com/dartlang/dart-2-stable-and-the-dart-web-platform-3775d5f8eac7). *Dart*. Retrieved 2023-05-13.

[^37]: ["dartdevc: The Dart development compiler"](https://dart.dev/tools/dartdevc.html). *dart.dev*. Retrieved 2023-05-13.

[^38]: Ladd, Seth (2013-03-28). ["Dart News & Updates: Why dart2js produces faster JavaScript code from Dart"](http://news.dartlang.org/2013/03/why-dart2js-produces-faster-javascript.html). *News.dartlang.org*. Retrieved 2013-07-21.

[^39]: ["Dart Performance"](https://web.archive.org/web/20170103041945/http://www.dartlang.org/performance/). *Dartlang.org*. Archived from [the original](http://www.dartlang.org/performance/) on 2017-01-03. Retrieved 2013-07-21.

[^40]: [*GC Proposal for WebAssembly*](https://github.com/WebAssembly/gc/blob/5431d631547c8af09a6377e29fee5126219f33c5/proposals/gc/Overview.md), WebAssembly, 2023-05-12, retrieved 2023-05-13

[^41]: ["WebAssembly Garbage Collection (WasmGC) now enabled by default in Chrome | Blog"](https://developer.chrome.com/blog/wasmgc). *Chrome for Developers*. Retrieved 2024-05-17.

[^42]: ["SpiderMonkey Newsletter (Firefox 110-111)"](https://spidermonkey.dev/blog/2023/02/16/newsletter-firefox-110-111.html). *SpiderMonkey JavaScript/WebAssembly Engine*. 2023-02-16. Retrieved 2023-05-13.

[^43]: ["1788206 - OffscreenCanvas.transferToImageBitmap incurs a copy"](https://bugzilla.mozilla.org/show_bug.cgi?id=1788206). *bugzilla.mozilla.org*. Retrieved 2024-05-17.

[^44]: ["Safari Technology Preview 167 Release Notes"](https://docs.developer.apple.com/documentation/safari-technology-preview-release-notes/stp-release-167). *Apple Developer Documentation*. Retrieved 2023-05-13.

[^45]: Obinna, Onuoha (2020-04-07). ["How does JIT and AOT work in Dart?"](https://onuoha.medium.com/how-does-jit-and-aot-work-in-dart-cab2f31d9cb5). *Medium*. Retrieved 2023-06-20.

[^46]: ["The Essence of Google Dart: Building Applications, Snapshots, Isolates"](https://www.infoq.com/articles/google-dart/). *InfoQ*. Retrieved 2021-08-29.

[^47]: Moore, Kevin (February 23, 2018). ["Dart2 Breaking Change: Removing web support for dart:mirrors and dart:isolate"](https://groups.google.com/a/dartlang.org/d/msg/misc/djfFMNCWmkE/F7WE8a0JAwAJ). *Google Groups*.

[^48]: Hracek, Filip (2020-06-10). ["Announcing sound null safety"](https://medium.com/dartlang/announcing-sound-null-safety-defd2216a6f3). *Dart*. Retrieved 2023-05-12.

[^49]: ["Concurrency in Dart"](https://dart.dev/language/concurrency/). *dart.dev*. Retrieved 2023-05-12.

[^50]: ["Google Releases Dart Editor for Windows, Mac OS X, and Linux"](https://web.archive.org/web/20131203024218/http://dartr.com/google-releases-dart-editor/). Archived from [the original](http://dartr.com/google-releases-dart-editor/) on 2013-12-03. Retrieved 2011-11-29.

[^51]: ["Dart plugin for Eclipse is Ready for Preview"](https://news.dartlang.org/2012/08/dart-plugin-for-eclipse-is-ready-for.html). 10 September 2019.

[^52]: Ladd, Seth (2015-04-30). ["The present and future of editors and IDEs for Dart"](http://news.dartlang.org/2015/04/the-present-and-future-of-editors-and.html). *Dart News & Updates*. Retrieved 2015-05-18.

[^53]: ["JetBrains Plugin Repository: Dart"](http://plugins.intellij.net/plugin/?idea&id=6351). *Plugins.intellij.net*. Retrieved 2013-07-21.

[^54]: ["Dart Tools"](https://dart.dev/tools). *dart.dev*. Retrieved 2016-11-15.

[^55]: ["Dart - Packages - Package Control"](https://packagecontrol.io/packages/Dart). *packagecontrol.io*. Retrieved 2023-05-13.

[^56]: ["dart - Dart plugin for Atom"](https://dart-atom.github.io/dart/). *dart-atom.github.io*. Retrieved 2023-05-13.

[^57]: Trainor, Brady (2023-04-15), [*bradyt/dart-mode*](https://github.com/bradyt/dart-mode), retrieved 2023-05-13

[^58]: [*Dart Support for Vim*](https://github.com/dart-lang/dart-vim-plugin), Dart, 2023-05-09, retrieved 2023-05-13

[^59]: ["Dart - Visual Studio Marketplace"](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code). *marketplace.visualstudio.com*. Retrieved 2023-05-13.

[^60]: Beaufort, François. ["The chromium team is currently actively working"](https://plus.google.com/+FrancoisBeaufort/posts/giSLiGvA4ye).

[^61]: ["A Chrome app based development environment"](https://github.com/dart-lang/spark). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*. 26 October 2021.

[^62]: ["Spark, A Chrome App from Google is an IDE for Your Chromebook"](https://news.dartlang.org/2013/11/dart-used-to-build-new-development.html). November 22, 2013.

[^63]: Saroop, Sri. ["Chrome Dev Editor: Announcements"](https://plus.google.com/+SriSaroop/posts/6EwgknKpesS).

[^64]: ["Chrome Dev Editor is a developer tool for building apps on the Chrome platform: Chrome Apps and Web Apps, in JavaScript or Dart. (NO LONGER IN ACTIVE DEVELOPMENT) - googlearchive/chromedeveditor"](https://github.com/googlearchive/chromedeveditor). July 29, 2019 – via GitHub.

[^65]: Ladd, Seth (2015-05-06). ["Announcing DartPad: A friction-free way to explore Dart code"](http://news.dartlang.org/2015/05/announcing-dartpad-friction-free-way-to.html). *Dart News & Updates*. Retrieved 2015-05-18.

[^66]: [*Dart & Flutter DevTools*](https://github.com/flutter/devtools), Flutter, 2023-05-12, retrieved 2023-05-12

[^67]: Sells, Chris (2021-03-03). ["What's New in Flutter 2.0"](https://medium.com/flutter/whats-new-in-flutter-2-0-fe8e95ecc65). *Flutter*. Retrieved 2023-05-12.

[^68]: Sneath, Tim (February 3, 2022). ["Announcing Flutter for Windows"](https://medium.com/flutter/announcing-flutter-for-windows-6979d0d01fed).

[^69]: Chisholm, Kevin (2022-05-12). ["What's new in Flutter 3"](https://medium.com/flutter/whats-new-in-flutter-3-8c74a5bc32d0). *Flutter*. Retrieved 2023-05-12.

[^70]: ["FAQ"](https://flutter.dev/docs/resources/faq). *flutter.dev*. Retrieved 2021-08-29.

[^71]: ["Firebase"](https://flutter.dev/docs/development/data-and-backend/firebase). *flutter.dev*. Retrieved 2021-08-29.

[^72]: ["Dart packages"](https://pub.dev/). *Dart packages*. Retrieved 2023-05-12.

[^73]: ["Flutter - IntelliJ IDEs Plugin | Marketplace"](https://plugins.jetbrains.com/plugin/9212-flutter). *JetBrains Marketplace*. Retrieved 2023-05-13.

[^74]: ["Loops in Dart | Fluter World | Dart and Flutter Tutorials"](https://www.flutterworld.tech/tutorials/dart-tutorials/dart-basics/loops-in-dart/#for-loop).

[^75]: ["Algol Family"](http://c2.com/cgi/wiki?AlgolFamily). *c2.com*.

[^76]: ["Method Cascades in Dart"](https://news.dartlang.org/2012/02/method-cascades-in-dart-posted-by-gilad.html). 10 September 2019. Retrieved 2023-05-13.

[^77]: Bracha, Gilad; Griswold, David (September 1996). ["Extending the Smalltalk Language with Mixins"](http://ftp.linux62.org/~glibersat/publis/p331-bracha.pdf) (PDF). *OOPSLA Workshop*. OOPSLA.

[^78]: Ladd, Seth (November 13, 2011). ["Transcription of A Quick Tour of Dart by Gilad Bracha"](http://blog.sethladd.com/2011/11/transcription-of-quick-tour-of-dart-by.html). Retrieved 2023-05-13.

[^79]: ["The Essence of Google Dart: Building Applications, Snapshots, Isolates"](http://www.infoq.com/articles/google-dart/). *InfoQ*.

[^80]: ["Fearless concurrency: how Clojure, Rust, Pony, Erlang and Dart let you achieve that. - Renato Athaydes"](https://web.archive.org/web/20230513052456/https://sites.google.com/a/athaydes.com/renato-athaydes/posts/fearlessconcurrencyhowclojurerustponyerlanganddartletyouachievethat#TOC-The-Actor-Model-Erlang-Dart-). *sites.google.com*. Archived from [the original](https://sites.google.com/a/athaydes.com/renato-athaydes/posts/fearlessconcurrencyhowclojurerustponyerlanganddartletyouachievethat#TOC-The-Actor-Model-Erlang-Dart-) on 2023-05-13. Retrieved 2023-05-13.

[^81]: Bracha, Gilad; Ungar, David (2004). ["Mirrors: design principles for meta-level facilities of object-oriented programming languages"](http://ftp.linux62.org/~glibersat/publis/p331-bracha.pdf) (PDF). *ACM SIGPLAN Notices*. **39** (10). ACM: 331– 344. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/1035292.1029004](https://doi.org/10.1145%2F1035292.1029004). Retrieved 15 February 2014.