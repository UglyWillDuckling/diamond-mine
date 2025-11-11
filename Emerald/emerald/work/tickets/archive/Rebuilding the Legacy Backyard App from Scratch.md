[[Ivan Majstorovic]], [[vladimir sedlar]], [[Yoan Haouzi]], [[Zvonimir Lokmer]].
___

## Why

The current legacy application has become increasingly difficult to maintain and extend. Its codebase is disorganized, with files scattered across the project, making it challenging to refactor or add new functionality without introducing further complexity.

A significant portion of the existing code is obsolete, creating unnecessary noise and confusion. Additionally, we're limited in adopting modern tools and frameworks because the application runs on an outdated PHP version. Many modern solutions require PHP 8.1 or higher, and upgrading the legacy app to support this version would be time-consuming and potentially introduce new bugs.

Given these challenges, our proposed solution is to build a new application from scratch, running in parallel with the legacy system. We will gradually port features over, starting with the simplest ones. Until a feature is fully migrated, the new app will redirect to the corresponding functionality in the legacy app.

## How

We plan to develop the new application within its own Docker container, allowing us to leverage a modern development environment based on PHP 8.4. For the framework, we've chosen **Laravel**, which offers a clean architecture, built-in tools, and best practices that will enable faster and more maintainable development.

This approach allows us to:

* Build a modern, maintainable codebase.
* Use up-to-date development tools and practices.
* Migrate incrementally with minimal disruption to current functionality.

### Migration and Redirecting Requests to the Legacy Application

We will begin development of the new application by implementing the `User` model and the authentication feature (login). This will enable users to log in through the new system. In addition, we will prioritize the **"My Space"** page, as it is the first screen users see upon logging in.

For any features or routes not yet implemented in the new application, the system will return a `404 Not Found` response. At that point, **Nginx will intercept the request and redirect it to the corresponding route in the legacy application**.

### Authentication Bridge
`note: not needed.`

To make this redirection work seamlessly, we must establish an authentication bridge between the new and legacy applications. Since users logging into the new app are not automatically authenticated in the old app, we will use a secure query string-based mechanism to pass authentication context.

Specifically, when redirecting to the old app, we will include two query parameters:

* `user_id`: The ID of the authenticated user.
* `signature`: A SHA-512 hash generated from the user ID and a shared secret key.

Upon receiving the request, the legacy application will verify the signature. If it is valid, the user will be automatically logged in with the provided user ID, ensuring a smooth and secure transition between the two systems.

## things to cover

1. testing : each step should be properly tested and the results should give us the confidence that the migrated section fully works
2. each migration step should be fully **isolated** , meaning that an entire project section should be moved at once. We wish to avoid that at any time the two applications do the same thing.

## what to avoid 🛑

- code duplication: either on FE or BE is not desired. We don't want to find ourselves needing to update the codebase in two places at the same time
- reusing obsolete code. We don't want to reuse too much of the old code base, especially if it's badly written, has too many dependencies(external or internal) ...

## possible options to explore

1. BY as an API for the new app

### BY as API

We can create api routes specifically for the migration process. Each route could isolate and handle a single action on BY required by the new application. This could then break up the process into even smaller pieces and allow us to transition more quickly and more safely.

**example**

API for the initial projects(dossiers) page. We can create API endpoints for each of the kpi values displayed at the top of the page. We would then make async requests from the new application to the old one.


