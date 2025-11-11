---
author:
  - "[[Michael Guarino]]"
created: 2025-08-22
published: 2025-07-30
source: https://www.plural.sh/blog/kubernetes-helm-charts-guide/
tags:
  - helm-charts/guide
about:
  - "[[Helm Charts]]"
---
![Helm chart for Kubernetes deployment.](https://www.plural.sh/blog/content/images/size/w346/2025/07/kubernetes-helm-charts-a-practical-guide-418623.webp)

Helm chart for Kubernetes deployment.

Managing applications consistently across a large fleet of Kubernetes clusters is one of the biggest operational challenges for modern platform teams. Without a standardized approach to packaging and deployment, you risk configuration drift, inconsistent security policies, and wasted engineering effort. That’s why a robust, repeatable packaging strategy is essential—and Helm Charts are at the center of it.

For platform engineers, Helm provides the foundational building blocks to create a scalable, reliable internal platform. It brings structure to Kubernetes deployments by enabling reusable templates, configurable defaults, and predictable lifecycle management. But to unlock its full potential, you need more than a “hello world” example.

This guide takes you beyond the basics. We'll explore how to structure Helm charts for long-term maintainability, embed security policies directly into your templates, and integrate Helm into a GitOps workflow that can scale to hundreds of microservices. With the right practices, Helm becomes more than a packaging tool—it becomes a critical part of your enterprise-grade Kubernetes strategy.

### Unified Cloud Orchestration for Kubernetes

Manage Kubernetes at scale through a single, enterprise-ready platform.

GitOps Deployment

Secure Dashboards

Infrastructure-as-Code

[Book a demo](https://www.plural.sh/contact)

## Key takeaways:

- **Treat deployments as packages, not loose files**: A Helm chart bundles all Kubernetes manifests into a single, versioned unit. This approach simplifies complex deployments, ensures consistency by separating configuration from templates, and makes your applications portable.
- **Control the entire application lifecycle**: Helm tracks every deployment as a versioned release. This allows you to perform reliable upgrades and instant rollbacks to a previously stable state, providing a critical safety net for your operations.
- [**Use GitOps to manage Helm at scale**](https://www.plural.sh/blog/managing-kubernetes-resources-helm/): Manually deploying charts across a large fleet is unreliable. A GitOps workflow, managed through a platform like Plural, automates this process by using your Git repository as the single source of truth for all deployments, ensuring consistency and auditability.

## What Helm Charts Do

At its core, a Helm chart bundles Kubernetes manifests and configuration into a structured, reusable format. This abstraction simplifies deployment and ensures consistency across clusters. With a single `helm install` command, you can deploy an entire application stack, including custom configuration, namespacing, and lifecycle metadata.

Charts eliminate the need to manually apply files with `kubectl`, reducing human error and making deployments reproducible. Since the chart defines not only *what* to deploy, but also *how* it can be configured (via `values.yaml`), it makes your applications portable across clusters and teams.

## How Helm and Kubernetes Work Together

Helm is a client-side CLI tool that interacts with your Kubernetes API server to manage application lifecycles. It doesn’t run a persistent service in your cluster.

When you install a chart, Helm:

1. Renders the chart’s templates into raw Kubernetes manifests based on your input (`values.yaml` or `--set` flags).
2. Sends the rendered manifests to the Kubernetes API.
3. Tracks the resulting deployment as a **release** —a named, versioned instance of that chart in a specific namespace.

With Helm, you can:

- **Upgrade** releases to new chart versions.
- **Rollback** to previous versions if a deployment fails.
- **Uninstall** cleanly, removing all associated Kubernetes resources.

This lifecycle management makes Helm a critical tool for production-ready Kubernetes workflows.

## Anatomy of a Helm Chart

A Helm chart isn’t a single file—it’s a standardized directory structure that packages everything needed to deploy a Kubernetes application. At its core, a chart is a collection of YAML templates, metadata, and default configuration values. Understanding this structure is essential for building maintainable and reusable charts that scale across teams and environments.

Let’s break down the three most important components of a chart: `Chart.yaml`, `values.yaml`, and the `templates/` directory. Together, these define *what* your application is, *how* it can be configured, and *what* Kubernetes resources it creates.

### Chart.yaml: The Chart’s Identity

Located at the root of every chart, `Chart.yaml` is the metadata file that defines the identity of the chart. Think of it as the chart’s manifest—it specifies:

- `name`: The chart’s name
- `version`: The version of the chart (separate from the app version)
- `description`: A human-readable summary
- `apiVersion`: The chart API version (e.g., `v2` for Helm 3)
- `dependencies`: A list of other charts this one depends on

This file is critical for versioning and dependency management. For example, `Plural` uses the version metadata to track chart versions across your fleet, making it easy to see exactly which version of each service is running in each environment.

Well-managed `Chart.yaml` files form the backbone of a reliable CI/CD pipeline.

### values.yaml: Default Configuration

The `values.yaml` file defines default configuration values for the chart’s templates. This file is where you specify things like:

- Image names and tags
- Replica counts
- Resource requests and limits
- Feature flags
- Custom labels or annotations

These values act as the input for your templates and can be overridden at install or upgrade time via `--values` or `--set`. This makes charts flexible and environment-agnostic by design.

When managing a large number of services, separating configuration from logic becomes crucial. With Plural’s GitOps approach, you can store environment-specific `values.yaml` files in version control. This ensures consistent, auditable, and automated deployments across clusters.

### templates/: Dynamic Kubernetes Manifests

The `templates/` directory contains Go-templated Kubernetes YAML files—these are the blueprints for the actual Kubernetes resources. These templates are rendered at install time by combining them with the values from `values.yaml` (and any user overrides). The result is a set of valid Kubernetes manifests that get applied to the cluster.

This templating engine enables:

- Dynamic resource creation using conditionals and loops
- Reusability through `include` and partials
- Fine-grained control over every aspect of a deployment

For example, you can include a `ServiceMonitor` only if monitoring is enabled in the values file, or switch image registries based on the target environment.

Once rendered, Plural CD deploys these manifests to your clusters. You can inspect and manage the resulting workloads directly from the embedded Kubernetes dashboard—no `kubectl` access required.

## Why Use Helm Charts?

Helm charts fundamentally transform how you manage applications on Kubernetes. Rather than treating deployments as collections of loosely coupled YAML files, Helm introduces a structured, versioned, and repeatable packaging system. This shift enables consistency, scalability, and operational control—especially valuable for platform teams managing large Kubernetes fleets.

### Simplify Application Deployment

Without Helm, deploying an application often involves manually applying multiple Kubernetes manifests in a specific order. This process is error-prone and difficult to automate. Helm eliminates that friction by packaging everything—Deployments, Services, ConfigMaps, Secrets—into a single, installable unit. With a single `helm install` command, you can deploy an entire application stack in a consistent and repeatable way.

This abstraction is critical for CI/CD automation. Helm separates infrastructure (what gets deployed) from configuration (how it’s deployed), using `values.yaml` to define environment-specific variables. Tools like Plural’s GitOps engine build on this capability, enabling consistent deployments across dev, staging, and production environments through declarative workflows.

### Manage Versions and Rollbacks

Helm manages applications as versioned **releases**, keeping a full deployment history. Every time you update a chart or modify its configuration, Helm creates a new version while archiving the old state. If a change causes issues, you can revert instantly with a `helm rollback` —no need to dig through Git history or recover lost YAML.

This versioning is crucial in complex environments, where rapid change is the norm. It provides a clear audit trail and minimizes the risks of deploying updates. In platforms like Plural, this release history becomes even more powerful, allowing you to visualize what’s deployed where, and orchestrate rollbacks at scale.

### Reuse and Share Charts

Helm promotes **reusability** and **standardization**. Instead of creating Kubernetes manifests from scratch for each deployment, teams can use community-maintained charts from sources like [Artifact Hub](https://artifacthub.io/), or create internal charts for their own services.

This reuse saves engineering time, reduces configuration drift, and encourages best practices. Internally, teams can maintain private Helm repositories, ensuring that every application is deployed from secure, reviewed templates. Platforms like Plural extend this by offering a marketplace of open-source, production-ready charts that work across any Kubernetes cluster.

## Create and Deploy Your First Helm Chart

### 1\. Set Up the Chart Structure

Getting started with a new chart is straightforward. Helm provides a command to generate a standard directory structure, which saves you from creating the boilerplate files manually. By running `helm create <chart-name>`, you get a well-organized folder containing everything you need. This includes a `templates/` directory for your Kubernetes manifests, a `Chart.yaml` file for metadata, and a `values.yaml` file for default configuration values. This standardized layout is one of the key benefits of Helm, as it ensures consistency across different charts and makes it easier for other engineers to understand and contribute to your project. It’s the foundation upon which you’ll build your application’s deployment logic.

Every Helm chart needs an identity, which is defined in the `Chart.yaml` file. This file contains critical metadata about your chart, such as its name, version, and a brief description of what it does. The `apiVersion` field specifies the chart API version to use (e.g., `v2` for Helm 3), while the `appVersion` field indicates the version of the application you are packaging. You can also list any dependencies your chart has on other charts in this file. Properly versioning and describing your chart in `Chart.yaml` is essential for effective and collaboration, as it provides a clear record of what the chart contains and how it has evolved over time.

### 3\. Write Kubernetes Resource Templates

The core of your Helm chart resides in the `templates/` directory. This is where you place the Kubernetes manifest files for your application, such as `deployment.yaml`, `service.yaml`, and `ingress.yaml`. However, instead of static YAML, these files are treated as templates. Helm uses the Go template language, allowing you to insert variables and use programming logic like loops and conditionals. These templates are populated with values from the `values.yaml` file at installation time. This templating engine is what makes Helm so powerful; it allows you to create flexible and reusable charts that can be configured for different environments without duplicating or manually editing your core Kubernetes resource definitions.

### 4\. Install and Customize Your Chart

Once your chart is structured and your templates are written, you can deploy your application to a Kubernetes cluster using the `helm install` command. During installation, Helm combines the templates in your `templates/` directory with the default configurations in `values.yaml` to generate the final Kubernetes manifests. You can easily customize a deployment by creating a separate values file or by using the `--set` flag to override specific settings directly from the command line. While `helm install` is great for a single cluster, managing deployments across a large fleet requires a more robust solution. Plural’s continuous deployment system extends this capability, enabling you to manage Helm releases across all your clusters through a unified, GitOps-driven workflow.

## Manage and Update Helm Charts

Creating a Helm chart is just the beginning. To operate effectively at scale, platform teams need to manage the full chart lifecycle—from versioning and dependency management to upgrades and rollbacks. A well-maintained chart ensures reliability, predictability, and ease of use for developers, which is essential for keeping large-scale Kubernetes environments stable.

### Maintain Your Charts

A good Helm strategy begins with a **single source of truth** —typically a Git repository that tracks every change to your chart. This forms the backbone of a GitOps workflow. Instead of manually updating charts across clusters, changes are committed to Git, triggering automated deployment pipelines. Platforms like Plural fully embrace this model, using Git as the control plane and automatically syncing Helm chart changes to your Kubernetes fleet.

Packaging your chart and publishing it to a Helm repository (either public or private) is another best practice. This makes it easier for teams to discover and consume internal charts in a standardized way, promoting reuse and reducing configuration drift.

### Define a Versioning and Release Strategy

Helm charts should follow **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`. This versioning system communicates the scope of changes—whether a new release introduces breaking changes, backward-compatible features, or minor fixes.

It’s also important to distinguish between:

- `version`: the chart’s version (used by Helm).
- `appVersion`: the version of the application being deployed.

By clearly versioning both the chart and the app, you help consumers understand what’s changed and what to expect during upgrades. Following Helm's official [Chart Best Practices Guide](https://helm.sh/docs/chart_best_practices/) can further improve maintainability and reduce surprises during deployment.

### Handle Dependencies

Most real-world applications are composed of multiple services. Helm supports **subcharts** for managing these dependencies. You can declare them in the `dependencies:` section of `Chart.yaml`, and pull them in with `helm dependency update`.

This modular design promotes **separation of concerns** —each subchart can be versioned and maintained independently. For example, a web app chart might include subcharts for PostgreSQL and Redis. Rather than duplicating manifests, you simply reference shared, battle-tested components.

However, this power introduces complexity. Each dependency may have its own `values.yaml` structure, upgrade path, and configuration options. It’s important to document how dependencies are wired into your chart to ensure teams can safely extend or customize them.

### Upgrade and Roll Back Releases

Helm makes updates safe and straightforward. The `helm upgrade` command applies changes to a running release, while the `--install` flag allows you to use the same command for first-time installs—making your CI/CD pipelines idempotent.

Every upgrade creates a **versioned release history**. If something breaks in production, you can quickly revert with `helm rollback`, restoring the application to a known-good state. This built-in safety net is vital in complex environments, helping reduce downtime and simplify incident response.

When integrated into GitOps workflows, this upgrade-and-rollback model becomes even more powerful. Rollbacks can be triggered automatically by reverting a commit, and the entire history of changes remains visible in Git.

## Go Further with Advanced Helm Techniques

Once you are comfortable creating and deploying basic charts, you can start using Helm’s more advanced features to handle complex application requirements. These techniques help you automate operational tasks, validate release quality, and manage multi-service architectures with greater control and efficiency. Mastering them is key to building truly robust and maintainable deployments on Kubernetes. By incorporating hooks, tests, and subcharts, you move from simply deploying applications to managing their entire lifecycle in a structured, repeatable way. This is where Helm transitions from a simple packaging tool to a powerful orchestration assistant, giving you the primitives to manage stateful services, ensure application health post-deployment, and compose complex systems from modular, reusable components. These capabilities are essential for production-grade environments where reliability and automation are non-negotiable.

### Use Helm Hooks for Complex Lifecycles

Helm hooks allow you to run specific jobs at defined points in a release's lifecycle. Think of them as triggers for performing actions that fall outside of standard Kubernetes resource management. For instance, you can use a `pre-upgrade` hook to run a database schema migration before your application pods are updated, ensuring the database is ready for the new code. Other common uses include backing up data before a release is deleted with a `pre-delete` hook or running a smoke test after an installation with a `post-install` hook. The official provides a full list of available hooks you can use to manage stateful applications and other complex deployment scenarios.

### Implement Chart Tests to Ensure Quality

A successful deployment isn't just about resources being created; it's about the application working correctly. Helm provides a simple but powerful framework for [chart testing](https://helm.sh/docs/chart_best_practices/) to automate this validation. You can define one or more test pods within your chart that run after a `helm install` or `helm upgrade` completes. A common test case involves a pod that runs a simple script to `curl` a service endpoint and verify a `200 OK` response. If the test fails, the release is marked as failed, giving you immediate feedback that something is wrong. This practice helps you catch bugs, configuration errors, and broken dependencies early, ensuring that only healthy releases are deployed.

### Leverage Subcharts for Complex Applications

For complex applications composed of multiple services, subcharts allow you to manage dependencies cleanly. This "chart of charts" approach lets you treat a multi-tier application as a single unit. For example, your main application chart can declare dependencies on standard charts for PostgreSQL and Redis, bundling them into a single, deployable artifact. When you install the parent chart, Helm automatically installs the dependent charts as well. This promotes modularity and reusability, as you can pull in well-maintained community or internal charts instead of redefining common components. It’s one of the [best practices for using Helm charts](https://www.baeldung.com/ops/helm-charts-best-practices) to manage microservices and other distributed systems effectively.

## Distribute and Share Helm Charts

Once you've created a Helm chart, the next step is to make it available to your team or the wider community. Effective distribution ensures that your applications can be deployed consistently and reliably, forming the backbone of a scalable operational workflow. This involves using chart repositories, participating in the community, and integrating charts into your automated pipelines.

### Use Public and Private Repositories

To share your charts, you'll use a chart repository. Public repositories like [Artifact Hub](https://artifacthub.io/) serve as a central directory for thousands of community-maintained charts. For internal use, you can create a private repository. This is typically a simple web server that hosts your packaged charts and an `index.yaml` file, which acts as a catalog. Hosting your own repository gives you full control over chart versions and access, ensuring your teams deploy standardized and vetted applications. This practice is fundamental for maintaining consistency across development, staging, and production environments, preventing configuration drift before it starts.

### Contribute to the Community

The strength of Helm comes from its active open-source community. Contributing back is a great way to improve the ecosystem and deepen your own expertise. You can find opportunities to contribute by joining the official Helm community discussions on Slack or attending developer meetings. Contributions aren't limited to code; improving documentation, triaging issues, or helping other users are all valuable. For developers looking to get started, the project maintains a list of "good first issues" that provide a clear entry point for making an impact. Engaging with the community helps ensure Helm continues to evolve to meet real-world needs.

### Integrate Helm into Your CI/CD Pipeline

Helm is a natural fit for CI/CD workflows, providing the structure needed for automated application delivery. During the continuous integration (CI) phase, you can use `helm lint` and `helm template` to validate your charts and catch errors early. For continuous deployment (CD), you need a robust engine to manage releases across your clusters. Plural’s GitOps-based CD automates this process, syncing Helm charts from your Git repositories to your entire Kubernetes fleet. Our agent-based architecture ensures that deployments are handled securely and efficiently, even in private or on-prem environments, turning your Git repository into the single source of truth for all your Helm-managed applications.

## Manage Helm at Enterprise Scale

Using Helm for a few applications is straightforward, but managing it across a large organization with dozens of teams and hundreds of services introduces significant challenges. At enterprise scale, you need to enforce consistency, maintain security, and ensure that deployments are repeatable and auditable. Without a clear strategy, you can end up with configuration drift, security vulnerabilities, and operational overhead that slows down development teams.

The key is to move from ad-hoc Helm commands to a systematic, automated approach for managing your charts across the entire fleet. This involves standardizing chart structures, embedding security into your workflow, and using tooling that can handle the complexity of a multi-cluster environment.

### Structure Charts for Maintainability

As your collection of Helm charts grows, maintaining them becomes a primary concern. A poorly structured chart is difficult for other engineers to understand, modify, and reuse. To avoid this, establish clear conventions from the start. Adhering to the standard chart structure is the first step, but you should also enforce internal best practices.

Use a `_helpers.tpl` file to define named templates for reusable blocks of YAML, which keeps your resource templates clean and DRY. In your `values.yaml` file, create a logical hierarchy by grouping related parameters under parent keys. This makes the chart’s configuration more intuitive.

For a comprehensive overview of community-accepted standards, Helm’s official Chart Best Practices Guide is an excellent resource.

### Harden Your Helm Chart Security

Helm charts simplify deployment, but they can also become a vector for introducing security risks if not managed carefully. A chart might reference a container image with known vulnerabilities or define insecure configurations, like running a container as the root user.

To mitigate this, you must integrate security scanning directly into your development lifecycle. Automated tools like [Trivy](https://github.com/aquasecurity/trivy) and [kubescape](https://github.com/kubescape/kubescape) can scan your charts and the container images they reference for vulnerabilities before they ever reach a production cluster.

According to a security review by Wiz, this automated scanning is critical to prevent unnoticed vulnerabilities from being exploited.

You can also use policy-as-code tools like OPA Gatekeeper to enforce security rules at the cluster level, blocking deployments that don't meet your organization's security standards.

### Scale Helm Across Large Fleets

Manually running `helm install` or `helm upgrade` across a large fleet of Kubernetes clusters is not a scalable or reliable strategy. It’s prone to human error and makes it difficult to ensure consistency.

A common best practice for managing Helm at scale is to create a **standardized service template** —a single, abstracted Helm chart that encapsulates your organization's best practices for logging, monitoring, and security. As noted in platform engineering forums, this approach allows you to push updates and security fixes to all services from a central place.

Combining this with a GitOps workflow allows you to manage all your Helm releases declaratively. Changes are proposed via pull requests, giving you a complete audit trail and a chance for peer review before anything is deployed.

### Unify Helm Management with Plural

Plural provides a unified platform to implement these best practices and manage Helm across your entire enterprise. It uses a GitOps-based continuous deployment engine, Plural CD, to automatically sync Helm charts from your Git repositories to any number of target clusters. This eliminates manual deployments and ensures every environment is configured exactly as defined in code.

With Plural, you can manage Kubernetes resources with Helm from a single pane of glass, giving you visibility into the state of all your releases without needing to juggle kubeconfigs.

Plural’s PR automation further simplifies the process by allowing developers to self-service new applications based on predefined templates, ensuring every new service automatically adheres to your organization's standards for security and operations.

- [Managing Kubernetes Resources with Helm: A Practical Guide](https://www.plural.sh/blog/managing-kubernetes-resources-helm/)

### Unified Cloud Orchestration for Kubernetes

Manage Kubernetes at scale through a single, enterprise-ready platform.

GitOps Deployment

Secure Dashboards

Infrastructure-as-Code

[Book a demo](https://www.plural.sh/contact)

## Frequently Asked Questions

**What is the difference between a Helm chart and a Helm release?** A Helm chart is the package itself—the collection of templates, default values, and metadata that defines an application. Think of it as a blueprint or a recipe. A release, on the other hand, is a running instance of that chart in your Kubernetes cluster. You can use the same chart to create multiple releases, each with its own unique configuration. For example, you might deploy the same PostgreSQL chart twice: one release named `postgres-prod` for your production database and another named `postgres-staging` for your staging environment.

**How should I handle configurations for different environments like development and production?** The best practice is to use separate values files for each environment. Your chart's `values.yaml` file should contain the default configuration, but you can create additional files like `values-prod.yaml` or `values-dev.yaml` to override those defaults. When you deploy, you specify which values file to use with the `-f` or `--values` flag in your `helm install` or `upgrade` command. In a GitOps workflow, you would store these environment-specific files in your Git repository, providing a clear, auditable record of each environment's configuration.

**My deployment failed because of a CRD issue. What's the best way to handle CRDs with Helm?** This is a common challenge because Helm, by design, does not manage the lifecycle of Custom Resource Definitions (CRDs). It will install them on the first run but won't upgrade or delete them afterward to avoid accidentally breaking other applications that might depend on them. The recommended approach is to manage CRDs separately from your application charts. You should apply CRDs to your cluster before deploying any charts that depend on them. This can be done through a separate manual process or, preferably, through a dedicated automation step in your CI/CD pipeline.

**When does it make sense to use a subchart instead of just deploying two separate charts?** You should use a subchart when two components are tightly coupled and should be managed as a single logical unit. For example, if your web application cannot function without a specific version of a Redis cache, it makes sense to include the Redis chart as a dependency in your application's parent chart. This ensures they are deployed, upgraded, and versioned together. If the components are independent and can be managed on separate lifecycles, deploying them as separate charts is often simpler and more flexible.

**We have dozens of services. How can we manage all these Helm charts without creating a maintenance nightmare?**[Managing a large fleet of Helm charts requires standardization and automation.](https://www.plural.sh/blog/managing-kubernetes-resources-helm/) Instead of running Helm commands manually, you should adopt a GitOps-based approach where a tool automatically syncs the state of your Git repository to your clusters. This is where a platform like Plural becomes essential. Plural’s continuous deployment engine automates Helm releases across your entire fleet, using Git as the single source of truth. This ensures consistency and provides a full audit trail for every change, turning what could be a maintenance headache into a streamlined, repeatable process.

---