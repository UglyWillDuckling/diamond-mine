---
source: https://en.wikipedia.org/wiki/Single-page_application
author: 
published: 
created: 2025-04-08
tags:
  - concept
  - concept/web
---
A **single-page application** ( **SPA** ) is a [web application](https://en.wikipedia.org/wiki/Web_application "Web application") or [website](https://en.wikipedia.org/wiki/Website "Website") that interacts with the user by dynamically rewriting the current [web page](https://en.wikipedia.org/wiki/Web_page "Web page") with new data from the [web server](https://en.wikipedia.org/wiki/Web_server "Web server"), instead of the default method of loading entire new pages. The goal is faster transitions that make the website [feel](https://en.wikipedia.org/wiki/User_experience "User experience") more like a [native](https://en.wikipedia.org/wiki/Native_\(computing\) "Native (computing)") [app](https://en.wikipedia.org/wiki/Application_software "Application software").

In a SPA, a page refresh never occurs; instead, all necessary [HTML](https://en.wikipedia.org/wiki/HTML "HTML"), [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript"), and [CSS](https://en.wikipedia.org/wiki/CSS "CSS") code is either retrieved by the browser with a single page load,[^1] or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

## History

The origins of the term *single-page application* are unclear, though the concept was discussed at least as early as 2003 by technology evangelists from Netscape.[^2] Stuart Morris, a programming student at Cardiff University, Wales, wrote the [self-contained](https://en.wikipedia.org/wiki/Self-contained_system_\(software\) "Self-contained system (software)") website at slashdotslash.com with the same goals and functions in April 2002,[^3] and later the same year Lucas Birdeau, Kevin Hakman, Michael Peachey and Clifford Yeh described a single-page application implementation in US patent 8,136,109.[^4] Earlier forms were called [rich web applications](https://en.wikipedia.org/wiki/Rich_web_application "Rich web application").

JavaScript can be used in a web browser to display the [user interface](https://en.wikipedia.org/wiki/User_interface "User interface") (UI), run application logic, and communicate with a web server. Mature [free](https://en.wikipedia.org/wiki/Free_software "Free software") libraries are available that support the building of a SPA, reducing the amount of JavaScript code developers have to write.

## Technical approaches

There are various techniques available that enable the browser to retain a single page even when the application requires server communication.

### Document hashes

HTML authors can leverage element IDs to show or hide different sections of the HTML document. Then, using CSS, authors can use the `:target` pseudo-class selector to only show the section of the page which the browser navigated to.

### JavaScript frameworks

Web browser JavaScript frameworks and libraries, such as [Angular](https://en.wikipedia.org/wiki/Angular_\(web_framework\) "Angular (web framework)"), [Ember.js](https://en.wikipedia.org/wiki/Ember.js "Ember.js"), [ExtJS](https://en.wikipedia.org/wiki/ExtJS "ExtJS"), [Knockout.js](https://en.wikipedia.org/wiki/Knockout.js "Knockout.js"), [Meteor.js](https://en.wikipedia.org/wiki/Meteor_\(web_framework\) "Meteor (web framework)"), [React](https://en.wikipedia.org/wiki/React_\(JavaScript_library\) "React (JavaScript library)"), [Vue.js](https://en.wikipedia.org/wiki/Vue.js "Vue.js"), and [Svelte](https://en.wikipedia.org/wiki/Svelte "Svelte") have adopted SPA principles. Aside from ExtJS, all of these are free.

- [AngularJS](https://en.wikipedia.org/wiki/AngularJS "AngularJS") is a discontinued fully client-side framework. AngularJS's templating is based on bidirectional [UI data binding](https://en.wikipedia.org/wiki/UI_data_binding "UI data binding"). Data-binding is an automatic way of updating the view whenever the model changes, as well as updating the model whenever the view changes. The HTML template is compiled in the browser. The compilation step creates pure HTML, which the browser re-renders into the live view. The step is repeated for subsequent page views. In traditional server-side HTML programming, concepts such as controller and model interact within a server process to produce new HTML views. In the AngularJS framework, the controller and model states are maintained within the client browser. Therefore, new pages are capable of being generated without any interaction with a server.
- [Angular 2+](https://en.wikipedia.org/wiki/Angular_\(web_framework\) "Angular (web framework)") is a SPA Framework developed by Google after AngularJS. There is a strong community of developers using this framework. The framework is updated twice every year. New features and fixes are frequently added in this framework.
- [Ember.js](https://en.wikipedia.org/wiki/Ember.js "Ember.js") is a client-side JavaScript web application framework based on the [model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller "Model–view–controller") (MVC) software architectural pattern. It allows developers to create scalable single-page applications by incorporating common idioms and best practices into a framework that provides a rich object model, declarative two-way data binding, computed properties, automatically updating templates powered by Handlebars.js, and a router for managing application state.
- [ExtJS](https://en.wikipedia.org/wiki/ExtJS "ExtJS") is also a client side framework that allows creating MVC applications. It has its own event system, window and layout management, state management (stores) and various UI components (grids, dialog windows, form elements etc.). It has its own class system with either dynamic or static loader. The application built with ExtJS can either exist on its own (with state in the browser) or with the server (e.g. with [REST](https://en.wikipedia.org/wiki/REST "REST") API that is used to fill its internal stores). ExtJS has only built in capabilities to use localStorage so larger applications need a server to store state.
- [Knockout.js](https://en.wikipedia.org/wiki/Knockout.js "Knockout.js") is a client side framework which uses templates based on the [Model-View-ViewModel](https://en.wikipedia.org/wiki/Model-View-ViewModel "Model-View-ViewModel") pattern.
- [Meteor.js](https://en.wikipedia.org/wiki/Meteor_\(web_framework\) "Meteor (web framework)") is a full-stack (client-server) JavaScript framework designed exclusively for SPAs. It features simpler data binding than Angular, Ember or ReactJS,[^5] and uses the [Distributed Data Protocol](https://en.wikipedia.org/wiki/Distributed_Data_Protocol "Distributed Data Protocol") [^6] and a [publish–subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern "Publish–subscribe pattern") to automatically propagate data changes to clients in real-time without requiring the developer to write any synchronization code. Full stack reactivity ensures that all layers, from the database to the templates, update themselves automatically when necessary. Ecosystem packages such as *Server Side Rendering* [^7] address the problem of search engine optimization.
- [React](https://en.wikipedia.org/wiki/React_\(JavaScript_library\) "React (JavaScript library)") is a [JavaScript library](https://en.wikipedia.org/wiki/JavaScript_library "JavaScript library") for building [user interfaces](https://en.wikipedia.org/wiki/User_interfaces "User interfaces"). It is maintained by [Facebook](https://en.wikipedia.org/wiki/Facebook "Facebook"), [Instagram](https://en.wikipedia.org/wiki/Instagram "Instagram") and a community of individual developers and corporations. React uses a syntax extension for JavaScript, named [JSX](https://en.wikipedia.org/wiki/JSX_\(JavaScript\) "JSX (JavaScript)"), which is a mix of JS and HTML (a subset of HTML). Several companies use React with [Redux (JavaScript library)](https://en.wikipedia.org/wiki/Redux_\(JavaScript_library\) "Redux (JavaScript library)") which adds state management capabilities, which (with several other libraries) lets developers create complex applications.[^8]
- [Vue.js](https://en.wikipedia.org/wiki/Vue.js "Vue.js") is a JavaScript framework for building user interfaces. Vue developers also provide Pinia for state management.
- [Svelte](https://en.wikipedia.org/wiki/Svelte "Svelte") is a framework for building user interfaces that compiles Svelte code to JavaScript DOM (Document Object Model) manipulations, avoiding the need to bundle a framework to the client, and allowing for simpler application development syntax.

#### Capabilities and trade-offs in modern frameworks

JavaScript-based web application frameworks, such as React and Vue, provide extensive capabilities but come with associated trade-offs. These frameworks often extend or enhance features available through native web technologies, such as routing, component-based development, and state management. While native web standards, including Web Components, modern JavaScript APIs like Fetch and ES Modules, and browser capabilities like Shadow DOM, have advanced significantly, frameworks remain widely used for their ability to enhance developer productivity, offer structured patterns for large-scale applications, simplify handling edge cases, and provide tools for performance optimization.[^9] [^10] [^11]

Frameworks can introduce abstraction layers that may contribute to performance overhead, larger bundle sizes, and increased complexity. Modern frameworks, such as React 18 and Vue 3, address these challenges with features like concurrent rendering, tree-shaking, and selective hydration. While these advancements improve rendering efficiency and resource management, their benefits depend on the specific application and implementation context. Lightweight frameworks, such as Svelte and Preact, take different architectural approaches, with Svelte eliminating the virtual DOM entirely in favor of compiling components to efficient JavaScript code, and Preact offering a minimal, compatible alternative to React. Framework choice depends on an application’s requirements, including the team’s expertise, performance goals, and development priorities.[^9] [^10] [^11]

A newer category of web frameworks, including enhance.dev, Astro, and Fresh, leverages native web standards while minimizing abstractions and development tooling.[^12] [^13] [^14] These solutions emphasize [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement "Progressive enhancement"), [server-side rendering](https://en.wikipedia.org/wiki/Server-side_rendering "Server-side rendering"), and optimizing performance. Astro renders static HTML by default while hydrating only interactive parts. Fresh focuses on server-side rendering with zero runtime overhead. Enhance.dev prioritizes progressive enhancement patterns using Web Components. While these tools reduce reliance on client-side JavaScript by shifting logic to build-time or server-side execution, they still use JavaScript where necessary for interactivity. This approach makes them particularly suitable for performance-critical and content-focused applications.[^9] [^10] [^11]

### WebAssembly-based frameworks

The following frameworks utilize [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly "WebAssembly") or can build single-page applications (SPAs) with WebAssembly as a core technology or support mechanism. These frameworks enable high-performance and interactive client-side development, extending the SPA paradigm across languages and ecosystems.

- [Avalonia](https://en.wikipedia.org/wiki/Avalonia_\(software_framework\) "Avalonia (software framework)") is primarily a cross-platform desktop [UI](https://en.wikipedia.org/wiki/User_interface "User interface") framework, but experimental support for [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly "WebAssembly") allows it to be used for SPA development. It has an XAML-based UI design and native-style application features.
- [Blazor WebAssembly](https://en.wikipedia.org/wiki/Blazor "Blazor") is a.NET-based framework that allows developers to build SPAs using [C#](https://en.wikipedia.org/wiki/C_Sharp_\(programming_language\) "C Sharp (programming language)") and [Razor](https://en.wikipedia.org/wiki/ASP.NET_Razor "ASP.NET Razor") syntax. It runs [.NET](https://en.wikipedia.org/wiki/.NET ".NET") code in the browser via WebAssembly, enabling a full-stack.NET development experience without relying on JavaScript.
- [Flutter on the Web](https://en.wikipedia.org/wiki/Flutter_\(software\) "Flutter (software)") extends Flutter’s cross-platform development capabilities to web-based SPAs. Using Dart and its Skia graphics engine, Flutter allows developers to create visually rich SPAs that run in the browser.
- [OpenSilver](https://en.wikipedia.org/wiki/OpenSilver "OpenSilver") is another open-source reimplementation of Silverlight but targeted toward SPAs developed with C# and [XAML](https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language "Extensible Application Markup Language"). It uses WebAssembly to run the.NET code in the browser, so it's fitted for highly interactive client-side applications.
- [Uno Platform](https://en.wikipedia.org/wiki/Uno_Platform "Uno Platform") is a cross-platform framework that supports SPA development through WebAssembly. It allows developers to use XAML and C# to build applications that run on the Web, mobile, and desktop platforms, with UI components rendered directly in the browser.

### Ajax

As of 2006, the most prominent technique used was [Ajax](https://en.wikipedia.org/wiki/Ajax_\(programming\) "Ajax (programming)").[^1] Ajax involves using asynchronous requests to a server for [XML](https://en.wikipedia.org/wiki/XML "XML") or [JSON](https://en.wikipedia.org/wiki/JSON "JSON") data, such as with JavaScript's [XMLHttpRequest](https://en.wikipedia.org/wiki/XMLHttpRequest "XMLHttpRequest") or more modern `fetch()` (since 2017), or the deprecated [ActiveX Object](https://en.wikipedia.org/wiki/ActiveX_Data_Objects "ActiveX Data Objects"). In contrast to the [declarative](https://en.wikipedia.org/wiki/Declarative_programming "Declarative programming") approach of most SPA frameworks, with Ajax the website directly uses JavaScript or a JavaScript library such as [jQuery](https://en.wikipedia.org/wiki/JQuery "JQuery") to manipulate the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model "Document Object Model") and edit HTML elements. Ajax has further been popularized by libraries like [jQuery](https://en.wikipedia.org/wiki/JQuery "JQuery"), which provides a simpler syntax and normalizes Ajax behavior across different browsers which historically had varying behavior.

### WebSockets

[WebSockets](https://en.wikipedia.org/wiki/WebSocket "WebSocket") are a bidirectional real-time client-server communication technology that are part of the HTML specification. For real-time communication, their use is superior to Ajax in terms of performance [^15] and simplicity.

### Server-sent events

[Server-sent events](https://en.wikipedia.org/wiki/Server-sent_events "Server-sent events") (SSEs) is a technique whereby servers can initiate data transmission to browser clients. Once an initial connection has been established, an event stream remains open until closed by the client. SSEs are sent over traditional HTTP and have a variety of features that WebSockets lack by design such as automatic reconnection, event IDs, and the ability to send arbitrary events.[^16]

### Browser plugins

Although this method is outdated, asynchronous calls to the server may also be achieved using browser plug-in technologies such as [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight "Microsoft Silverlight"), [Flash](https://en.wikipedia.org/wiki/Adobe_Flash "Adobe Flash"), or [Java applets](https://en.wikipedia.org/wiki/Java_applet "Java applet").

### Data transport (XML, JSON and Ajax)

Requests to the server typically result in either raw data (e.g., [XML](https://en.wikipedia.org/wiki/XML "XML") or [JSON](https://en.wikipedia.org/wiki/JSON "JSON") ), or new [HTML](https://en.wikipedia.org/wiki/HTML "HTML") being returned. In the case where HTML is returned by the server, JavaScript on the client updates a partial area of the DOM ( [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model "Document Object Model") ). When raw data is returned, often a client-side JavaScript [XML](https://en.wikipedia.org/wiki/XML "XML") / ( [XSL](https://en.wikipedia.org/wiki/XSL "XSL") ) process (and in the case of JSON a [template](https://en.wikipedia.org/wiki/Web_template_system#Client-Side_Systems "Web template system") ) is used to translate the raw data into HTML, which is then used to update a partial area of the DOM.

### Server architecture

#### Thin server architecture

A SPA moves logic from the server to the client, with the role of the web server evolving into a pure data API or web service. This architectural shift has, in some circles, been coined "Thin Server Architecture" to highlight that complexity has been moved from the server to the client, with the argument that this ultimately reduces overall complexity of the system.

#### Thick stateful server architecture

The server keeps the necessary state in memory of the client state of the page. In this way, when any request hits the server (usually user actions), the server sends the appropriate HTML and/or JavaScript with the concrete changes to bring the client to the new desired state (usually adding/deleting/updating a part of the client DOM). At the same time, the state in server is updated. Most of the logic is executed on the server, and HTML is usually also rendered on the server. In some ways, the server simulates a web browser, receiving events and performing delta changes in server state which are automatically propagated to client.

This approach needs more server memory and server processing, but the advantage is a simplified development model because a) the application is usually fully coded in the server, and b) data and UI state in the server are shared in the same memory space with no need for custom client/server communication bridges.

#### Thick stateless server architecture

This is a variant of the stateful server approach. The client page sends data representing its current state to the server, usually through Ajax requests. Using this data, the server is able to reconstruct the client state of the part of the page which needs to be modified and can generate the necessary data or code (for instance, as JSON or JavaScript), which is returned to the client to bring it to a new state, usually modifying the page DOM tree according to the client action that motivated the request.

This approach requires that more data be sent to the server and may require more computational resources per request to partially or fully reconstruct the client page state in the server. At the same time, this approach is more easily scalable because there is no per-client page data kept in the server and, therefore, Ajax requests can be dispatched to different server nodes with no need for session data sharing or server affinity.

## Running locally

Some SPAs may be executed from a local file using the [file URI scheme](https://en.wikipedia.org/wiki/File_URI_scheme "File URI scheme"). This gives users the ability to download the SPA from a server and run the file from a local storage device, without depending on server connectivity. If such a SPA wants to store and update data, it must use browser-based [Web Storage](https://en.wikipedia.org/wiki/Web_Storage "Web Storage"). These applications benefit from advances available with [HTML](https://en.wikipedia.org/wiki/HTML "HTML").[^17]

## Challenges with the SPA model

Because the SPA is an evolution away from the stateless page-redraw model that browsers were originally designed for, some new challenges have emerged. Possible solutions (of varying complexity, comprehensiveness, and author control) include:[^18]

- client-side JavaScript libraries
- server-side web frameworks that specialize in the SPA model [^19] [^20] [^21]
- the evolution of browsers and the HTML specification,[^22] designed for the SPA model

### Search-engine optimization

Because of the lack of JavaScript execution on crawlers of some popular [Web search engines](https://en.wikipedia.org/wiki/Web_search_engines "Web search engines"),[^23] SEO ( [search engine optimization](https://en.wikipedia.org/wiki/Search_engine_optimization "Search engine optimization") ) has historically presented a problem for public facing websites wishing to adopt the SPA model.[^24]

Between 2009 and 2015, [Google Webmaster Central](https://en.wikipedia.org/wiki/Google_Webmaster_Tools "Google Webmaster Tools") proposed and then recommended an "AJAX crawling scheme" [^25] [^26] using an initial exclamation mark in fragment identifiers for stateful [AJAX](https://en.wikipedia.org/wiki/AJAX "AJAX") pages ( `#!`). Special behavior must be implemented by the SPA site to allow extraction of relevant metadata by the search engine's crawler. For search engines that do not support this [URL hash](https://en.wikipedia.org/wiki/URI_fragment "URI fragment") scheme, the hashed URLs of the SPA remain invisible. These "hash-bang" URIs have been considered problematic by a number of writers including Jeni Tennison at the W3C because they make pages inaccessible to those who do not have [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript") activated in their browser. They also break [HTTP referer](https://en.wikipedia.org/wiki/HTTP_referer "HTTP referer") headers as browsers are not allowed to send the fragment identifier in the Referer header.[^27] In 2015, Google deprecated their hash-bang AJAX crawling proposal.[^28]

Alternatively, applications may render the first page load on the server and subsequent page updates on the client. This is traditionally difficult, because the rendering code might need to be written in a different language or framework on the server and in the client. Using logic-less templates, cross-compiling from one language to another, or using the same language on the server and the client may help to increase the amount of code that can be shared.

In 2018, Google introduced dynamic rendering as another option for sites wishing to offer crawlers a non-JavaScript heavy version of a page for indexing purposes.[^29] Dynamic rendering switches between a version of a page that is rendered client-side and a pre-rendered version for specific user agents. This approach involves your web server detecting crawlers (via the user agent) and routing them to a renderer, from which they are then served a simpler version of HTML content. As of 2024, Google no longer recommends dynamic rendering,[^30] suggesting " [server-side rendering](https://en.wikipedia.org/wiki/Server-side_rendering "Server-side rendering"), [static rendering](https://en.wikipedia.org/wiki/Static_rendering "Static rendering"), or [hydration](https://en.wikipedia.org/wiki/Hydration_\(web_development\) "Hydration (web development)") " instead.

Because SEO compatibility is not trivial in SPAs, SPAs are commonly not used in a context where search engine indexing is either a requirement, or desirable. Use cases include applications that surface private data hidden behind an [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication") system. In the cases where these applications are consumer products, often a classic "page redraw" model is used for the applications landing page and marketing site, which provides enough meta data for the application to appear as a hit in a search engine query. Blogs, support forums, and other traditional page redraw artifacts often sit around the SPA that can seed search engines with relevant terms.

As of 2021 and Google specifically, SEO compatibility for a plain SPA is straightforward and requires just a few simple conditions to be met.[^31]

One way to increase the amount of code that can be shared between servers and clients is to use a logic-less template language like [Mustache](https://en.wikipedia.org/wiki/Mustache_\(template_system\) "Mustache (template system)") or [Handlebars](https://en.wikipedia.org/wiki/Handlebars_\(template_system\) "Handlebars (template system)"). Such templates can be rendered from different host languages, such as [Ruby](https://en.wikipedia.org/wiki/Ruby_\(programming_language\) "Ruby (programming language)") on the server and [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript") in the client. However, merely sharing templates typically requires duplication of [business logic](https://en.wikipedia.org/wiki/Business_logic "Business logic") used to choose the correct templates and populate them with data. Rendering from templates may have negative performance effects when only updating a small portion of the page—such as the value of a text input within a large template. Replacing an entire template might also disturb a user's selection or cursor position, where updating only the changed value might not. To avoid these problems, applications can use [UI data bindings](https://en.wikipedia.org/wiki/UI_data_binding "UI data binding") or granular [DOM](https://en.wikipedia.org/wiki/Document_Object_Model "Document Object Model") manipulation to only update the appropriate parts of the page instead of re-rendering entire templates.[^32]

### Browser history

With a SPA being, by definition, "a single page", the model breaks the browser's design for page history navigation using the "forward" or "back" buttons. This presents a usability impediment when a user presses the back button, expecting the previous screen state within the SPA, but instead, the application's single page unloads and the previous page in the browser's history is presented.

The traditional solution for SPAs has been to change the browser URL's hash [fragment identifier](https://en.wikipedia.org/wiki/Fragment_identifier "Fragment identifier") in accord with the current screen state. This can be achieved with JavaScript, and causes URL history events to be built up within the browser. As long as the SPA is capable of resurrecting the same screen state from information contained within the URL hash, the expected back-button behavior is retained.

To further address this issue, the HTML specification has introduced [pushState](http://www.w3.org/html/wg/drafts/html/master/browsers.html#dom-history-pushstate) and [replaceState](http://www.w3.org/html/wg/drafts/html/master/browsers.html#dom-history-replacestate) providing programmatic access to the actual URL and browser history.

### Analytics

Analytics tools such as [Google Analytics](https://en.wikipedia.org/wiki/Google_Analytics "Google Analytics") rely heavily upon entire new pages loading in the browser, initiated by a new page load. SPAs do not work this way.

After the first page load, all subsequent page and content changes are handled internally by the application, which should simply call a function to update the analytics package. Failing to call such a function, the browser never triggers a new page load, nothing gets added to the browser history, and the analytics package has no idea who is doing what on the site.

### Security scanning

Similarly to the problems encountered with search engine crawlers, [DAST tools](https://en.wikipedia.org/wiki/Dynamic_application_security_testing "Dynamic application security testing") may struggle with these JavaScript-rich applications. Problems can include the lack of hypertext links, memory usage concerns and resources loaded by the SPA typically being made available by an [Application Programming Interface](https://en.wikipedia.org/wiki/Application_Programming_Interface "Application Programming Interface") or API. Single-page applications are still subject to the same security risks as traditional web pages such as [Cross-Site Scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting "Cross-site scripting"), but also a host of other unique vulnerabilities such as data exposure via API and client-side logic and client-side enforcement of server-side security.[^33] In order to effectively scan a single-page application, a DAST scanner must be able to navigate the client-side application in a reliable and repeatable manner to allow discovery of all areas of the application and interception of all requests that the application sends to remote servers (e.g. API requests).

### Adding page loads to a SPA

It is possible to add page load events to a SPA using the HTML History API; this will help integrate analytics. The difficulty comes in managing this and ensuring that everything is being tracked accurately – this involves checking for missing reports and double entries. Some frameworks provide free analytics integrations addressing most of the major analytics providers. Developers can integrate them into the application and make sure that everything is working correctly, but there is no need to do everything from scratch.[^32]

### Speeding up the page load

There are some ways of speeding up the initial load of a SPA, such as selective prerendering of the SPA landing/index page, caching and various code splitting techniques including lazy-loading modules when needed. But it's not possible to get away from the fact that it needs to download the framework, at least some of the application code; and will hit an API for data if the page is dynamic.[^32] This is a "pay me now, or pay me later" trade-off scenario. The question of performance and wait-times remains a decision that the developer must make.

## Page lifecycle

A SPA is fully loaded in the initial page load and then page regions are replaced or updated with new page fragments loaded from the server on demand. To avoid excessive downloading of unused features, a SPA will often progressively download more features as they become required, either small fragments of the page, or complete screen modules.

In this way an analogy exists between "states" in a SPA and "pages" in a traditional website. Because "state navigation" in the same page is analogous to page navigation, in theory, any page-based web site could be converted to single-page replacing in the same page only the changed parts.

The SPA approach on the web is similar to the [single-document interface](https://en.wikipedia.org/wiki/Multiple-document_interface "Multiple-document interface") (SDI) presentation technique popular in [native](https://en.wikipedia.org/wiki/Native_\(computing\) "Native (computing)") desktop applications.

## See also

- [Progressive web application (PWA)](https://en.wikipedia.org/wiki/Progressive_web_application "Progressive web application")
- [Server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting "Server-side scripting")

## References

## External links

- [Migrating Multi-page Web Applications to Single-page Ajax Interfaces (Delft University of Technology)](https://arxiv.org/abs/cs/0610094)
- [The Single Page Interface Manifesto](http://itsnat.sourceforge.net/php/spim/spi_manifesto_en.php)
- [Dynamic Rendering](https://developers.google.com/search/docs/guides/dynamic-rendering)

[^1]: Flanagan, David, " [JavaScript - The Definitive Guide](https://books.google.com/books?id=2weL0iAfrEMC&q=%22single-page%22) ", 5th ed., *O'Reilly, Sebastopol, CA, 2006*, p.497

[^2]: ["Inner-Browsing: Extending Web Browsing the Navigation Paradigm"](https://web.archive.org/web/20030810102320/http://devedge.netscape.com/viewsource/2003/inner-browsing). Archived from [the original](http://devedge.netscape.com/viewsource/2003/inner-browsing) on August 10, 2003. Retrieved May 16, 2003.

[^3]: ["Slashdotslash.com: A self contained website using DHTML"](http://www.slashdotslash.com/scws/index.html). Retrieved July 6, 2012.

[^4]: ["US patent 8,136,109"](https://patents.google.com/patent/US8136109). Retrieved April 12, 2002.

[^5]: ["Meteor Blaze"](https://github.com/meteor/blaze). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*. 6 May 2022. Blaze is a powerful library for creating user interfaces by writing reactive HTML templates.

[^6]: [Introducing DDP](http://meteor.com/blog/2012/03/21/introducing-ddp), March 21, 2012

[^7]: ["Server Side Rendering for Meteor"](https://web.archive.org/web/20150320063111/https://meteorhacks.com/server-side-rendering.html). Archived from [the original](https://meteorhacks.com/server-side-rendering.html) on March 20, 2015. Retrieved January 31, 2015.

[^8]: ["Single-page applications vs. multiple-page applications: pros, cons, pitfalls - BLAKIT - IT Solutions"](https://blak-it.com/blog/spa-advantages/). *blak-it.com*. BLAKIT - IT Solutions. October 17, 2017. Retrieved October 19, 2017.

[^9]: *JavaScript Frameworks for Modern Web Development: The Essential Frameworks, Libraries, and Tools to Learn Right Now*. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1484249949](https://en.wikipedia.org/wiki/Special:BookSources/978-1484249949 "Special:BookSources/978-1484249949").

[^10]: Rojas, Carlos (13 November 2020). *Building Native Web Components: Front-End Development with Polymer and Vue.js*. Apress. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1484259047](https://en.wikipedia.org/wiki/Special:BookSources/978-1484259047 "Special:BookSources/978-1484259047").

[^11]: *Hands-On JavaScript High Performance: Build faster web apps using Node.js, Svelte.js, and WebAssembly*. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1838821098](https://en.wikipedia.org/wiki/Special:BookSources/978-1838821098 "Special:BookSources/978-1838821098").

[^12]: ["Enhance"](https://github.com/enhance-dev). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*.

[^13]: ["Astro framework"](https://github.com/withastro/astro). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*.

[^14]: ["Fresh"](https://github.com/denoland/fresh). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*.

[^15]: ["Real-Time Monitoring using AJAX and WebSockets"](http://www.computer.org/csdl/proceedings/ecbs/2013/4991/00/4991a110-abs.html). *www.computer.org*. Retrieved June 1, 2016.

[^16]: ["Server-Sent Events"](http://www.w3.org/TR/eventsource/). W3C. July 17, 2013.

[^17]: ["Unhosted web apps"](https://unhosted.org/).

[^18]: ["The Single Page Interface Manifesto"](http://itsnat.sourceforge.net/php/spim/spi_manifesto_en.php). Retrieved April 25, 2014.

[^19]: ["Derby"](http://derbyjs.com/). Retrieved December 11, 2011.

[^20]: ["Sails.js"](https://github.com/balderdashy/sails). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*. Retrieved February 20, 2013.

[^21]: ["Tutorial: Single Page Interface Web Site With ItsNat"](http://itsnat.sourceforge.net/index.php?_page=support.tutorial.spi_site). Retrieved January 13, 2011.

[^22]: [HTML5](https://en.wikipedia.org/wiki/HTML5 "HTML5")

[^23]: ["What the user sees, what the crawler sees"](https://developers.google.com/webmasters/ajax-crawling/docs/learn-more). Retrieved January 6, 2014. the browser can execute JavaScript and produce content on the fly - the crawler cannot

[^24]: ["Making Ajax Applications Crawlable"](https://developers.google.com/webmasters/ajax-crawling/). Retrieved January 6, 2014. Historically, Ajax applications have been difficult for search engines to process because Ajax content is produced

[^25]: ["Proposal for making AJAX crawlable"](http://googlewebmastercentral.blogspot.com/2009/10/proposal-for-making-ajax-crawlable.html). Google. October 7, 2009. Retrieved July 13, 2011.

[^26]: ["(Specifications) Making AJAX Applications Crawlable"](https://developers.google.com/webmasters/ajax-crawling/). Google Inc. Retrieved March 4, 2013.

[^27]: ["Hash URIs"](http://www.w3.org/QA/2011/05/hash_uris.html). *W3C Blog*. May 12, 2011. Retrieved July 13, 2011.

[^28]: ["Deprecating our AJAX crawling scheme"](https://webmasters.googleblog.com/2015/10/deprecating-our-ajax-crawling-scheme.html). *Official Google Webmaster Central Blog*. Retrieved February 23, 2017.

[^29]: ["Implement dynamic rendering"](https://developers.google.com/search/docs/guides/dynamic-rendering). *Google Search Central*. October 13, 2018. Retrieved January 7, 2021.

[^30]: ["Dynamic rendering as a workaround"](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering). *Google Search Central*. March 18, 2024. Retrieved July 2, 2024.

[^31]: ["Fix a single-page app for Google Search"](https://codelabs.developers.google.com/codelabs/making-a-single-page-app-search-friendly). *Google Codelabs*. Retrieved 2021-12-15.

[^32]: Holmes, Simone (2015). *Getting MEAN with Mongo, Express, Angular, and Node*. Manning Publications. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-6172-9203-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-6172-9203-3 "Special:BookSources/978-1-6172-9203-3")

[^33]: ["Single Page Applications (SPA)"](https://appcheck-ng.com/single-page-applications/). *Appcheck Ltd*.