---
title: "[ADR] QSL Boost Automation - Tech solution - MPD - Oxygen - Confluence"
source: https://avivgroup.atlassian.net/wiki/spaces/OXY/pages/1013219853/ADR+QSL+Boost+Automation+-+Tech+solution?pageId=1013219853
author: 
published: 
created: 2025-01-07
description: 
tags:
  - adr
  - automation
  - doc
  - document
  - confluence
favicon: https://avivgroup.atlassian.net/wiki/s/-696802122/6452/1a88b48fdd90dd2d35e7747f3cbe0d736ca626da/1/_/favicon-update.ico
related:
  - "[[QSL listing]]"
  - "[[QSL listing feature]]"
  - "[[qsl]]"
  - "[[QSL - GCP bucket connection]]"
---
![icon|20](https://avivgroup.atlassian.net/wiki/s/-696802122/6452/1a88b48fdd90dd2d35e7747f3cbe0d736ca626da/1/_/favicon-update.ico)

<table><colgroup><col><col></colgroup><tbody><tr><th rowspan="1" colspan="1"><div><p><strong>Status</strong></p></div></th><th rowspan="1" colspan="1"><div><p><span><span><span><span>Approved</span></span></span></span></p></div></th></tr><tr><td rowspan="1" colspan="1"><p><strong>Participants</strong></p></td><td rowspan="1" colspan="1"><p><span><span><span><span>@Gilles Lorrain</span></span></span></span> <span><span><span><span>@Paulo Baskovic</span></span></span></span> <span><span><span><span>@Louis D Herouville</span></span></span></span> <span><span><span><span>@Laurent Husson</span></span></span></span> <span><span><span><span>@Davy Bensoussan</span></span></span></span> <span><span><span><span>@Prateek Sinha</span></span></span></span></p></td></tr><tr><td rowspan="1" colspan="1"><p><strong>Summary</strong></p></td><td rowspan="1" colspan="1"><p>Revising the options discussed <a href="https://avivgroup.atlassian.net/wiki/spaces/OXY/pages/815071289">here</a> to define best possible option to provide team Luna a dataset containing agent id’s, classified id’s and <span>qsl</span> project id’s for <span><span>QSL</span></span> boost initiative.</p></td></tr><tr><td rowspan="1" colspan="1"><p><strong>Decision</strong></p></td><td rowspan="1" colspan="1"><p>No decision taken or to be taken yet, we’re currently looking for the feasibility of existing options.</p></td></tr><tr><td rowspan="1" colspan="1"><p><strong>Created</strong></p></td><td rowspan="1" colspan="1"><p><span><span>Oct 10, 2024</span></span></p></td></tr><tr><td rowspan="1" colspan="1"><p><strong>Decision date</strong></p></td><td rowspan="1" colspan="1"><p>&nbsp;TBD</p></td></tr><tr><td rowspan="1" colspan="1"><p><strong>Domain</strong></p></td><td rowspan="1" colspan="1"><p><span><span><span><span>Markeplace design</span></span></span></span><span><span><span><span>iNTERMEDIARY</span></span></span></span></p></td></tr><tr><td rowspan="1" colspan="1"><p><strong><span><span>ADR</span></span> Level</strong></p></td><td rowspan="1" colspan="1"><p>&nbsp;<span><span><span><span>CROSS-DOMAIN</span></span></span></span></p></td></tr><tr><td rowspan="1" colspan="1"><p><strong>Whitelabel Capability</strong></p></td><td rowspan="1" colspan="1"><p><span><span><span><span>Seller lead matching</span></span></span></span></p></td></tr></tbody></table>

---

## Context

As per the requirements in [![](https://avivgroup.atlassian.net/images/icons/issuetypes/epic.svg)MO-1370: Identify QSL Listings to unlock QSL Boost Listings AutomationDone](https://avivgroup.atlassian.net/browse/MO-1370) ,[[Oxygen team]] needs to provide agent id’s with the mapping of project id’s and classified id’s to team Luna. Ideally this information was best served via an API but since we do not have enough tech bandwidth we need to chose the next cheapest solution that can unlock Luna keeping in mind the security guidelines as well. The initial solution identified by oxygen and approved by security can be found [here](https://avivgroup.atlassian.net/wiki/spaces/OXY/pages/815071289 "https://avivgroup.atlassian.net/wiki/spaces/OXY/pages/815071289").

The former ADR needs to be revised though in light of the slight changes in requirements stated in [LUNA - 186 / QSL project listings requirements](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/846561647/LUNA+-+186+QSL+project+listings+requirements?atlOrigin=eyJpIjoiOGQ5YWFiNDYtNmM4Zi1iMDZkLTM2MjAtNDRlYTQ3MTMwNmVjIiwicCI6ImMifQ) and also the fact that the architecture diagram proposed in the previous ADR was incorrect. 
**Team LUNA doesn’t own an AWS account** so 
we need a way to push the generated dataset from Flamingo in GBQ outside Aviv Environment **or**
develop a `polling` job that can retrieve the generated dataset from Aviv account to [[GBQ]]. We will explain the proposed options below in greater detail and ask for security’s advice before finalising the solution.

## Options

There will be a batch process and the dataset will be generated once per day. We will be using a jupyter notebook to process data from Flamingo and serve it in **Fraudulent Actor Detection** as a CSV file. This data will then either:

**Option 1 :**

Fetched by Luna from their GCP account via a poling job as described in the diagram below:

![[option-1.png]]

Current workflow to extract data outside Data Platform

### Option 2

Pushed by oxygen into [[GCP]] using [[Glue]] and a connector available in the marketplace (refer this [KB](https://aws.amazon.com/blogs/big-data/migrate-data-from-google-cloud-storage-to-amazon-s3-using-aws-glue/ "https://aws.amazon.com/blogs/big-data/migrate-data-from-google-cloud-storage-to-amazon-s3-using-aws-glue/") to know how we intend pushing data in GCP)

Need bucket creation, saved data as [[CSV]] + connector to GCP to push the data

![[option2.png]]

## Decision
> Oct 24, 2024 @Victor Tran

**This ADR concerns what is the choice of the authentication method between AWS bright-knigthfisher and Google Cloud Platform MA.**

We already had a similar case, which needs transfert some data from a **S3 bucket to CGP**.

<mark style="background: #ABF7F7A6;">We prefer the option 2</mark>

- We could **control and assess** the [[AWS bright-knigthfisher]] account more easier than GCP
- You need use this authentication method “workload identity federation”: [https://github.com/axel-springer-kugawana/aviv\_ciso\_soctools/tree/main/terraform/stacks/gcp-landing-zone](https://github.com/axel-springer-kugawana/aviv_ciso_soctools/tree/main/terraform/stacks/gcp-landing-zone)
- For this case the [[S3 bucket]] needs push the data to [[GCP]].

---
## ==notes== 🗒

[!attention] obsolete
> this document appears to be obsolete.
> We are going with **option 1** in the end
^obsolete
