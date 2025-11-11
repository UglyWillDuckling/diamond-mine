---
link: 
scheduled: 2025-02-28-09-39
---
#call/work

## who
- [[luna team]]
- [[Amin Khansari]]
---
## 🗒notes
- [[LUQA architecture diagram]]: [link](https://app.diagrams.net/#G1WHeTK9dehWtF3CxhmbSvcqu62VcirKgy#%7B%22pageId%22%3A%22SKX4-Kodgnol6JenRwo7%22%7D)

## discussion 🗯 🗯🗨🗨🗨

### routing 
********
https://aws.amazon.com/blogs/compute/the-serverless-lamp-stack-part-6-from-mvc-to-serverless-microservices

https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/1199145048/Fargate+ECS+vs+Lambda+for+BFF

**ADR** was already done by [[Ivan Culina]].

- [[Amin Khansari]] : [[BFF]] is useful when you have a mobile app
	- [[Express js]] not recommended
	- for each route there is 1 handler

> [!tip] We don't need **permissions** for now
> by [[Amin Khansari]]
> [[Paulo Baskovic|paulo]] - "Challenge the permissions"

- [x] ? [[Amin Khansari]] - how **teams** work
	- nothing special

## decisions 🤝

1. **don't use** **permissions** in the first version
	1. just use the UI to limit access by [[luqa role|role]]
2. setup a meeting for next week to discuss the [[AWS]] implementation
	- [[php-examples-for-aws-lambda0.6-MVC-to-microservice at master · aws-samplesphp-examples-for-aws-lambda]]
	- [[The serverless LAMP stack part 6 From MVC to serverless microservices  Amazon Web Services]]
	- ..
