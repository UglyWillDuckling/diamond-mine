---
author:
  - "[[Shivam]]"
published: 2024-01-24
created: 2025-02-28
source: "https://learnaws.io/blog/fat-lambda"
tags:
---
![fit in fat out lambda](https://learnaws.io/_astro/fit-in-fat-out-lambda.BScKCcro_JbHJS.png "Click to zoom fit in fat out lambda image")

You might have a **fat Lambda**, and you might **not even know it**.

Why did Lambdas get fat and how did Lambdas start gaining the pounds? Did we give the Lambdas too much code to eat at our party?

Before we get into that investigation, what *even* is a fat lambda?

## Fat Lambda

A fat Lambda is an AWS Lambda function which has been bloated with code performing multiple tasks e.g. an ExpressJS app which handles multiple API requests.

## How to know a *fat* Lambda when you see one?

Red flags to spot :

- All your routes invoke the same Lambda e.g. `GET /user`, `POST /product`
- Your Lambda deployment package (zipped) is greater than 10 MB
- You’re attaching multiple Lambda layers to your Lambda function

## What could go wrong with a fat Lambda?

Just as an obese person can’t perform at their peak, there are disadvantages to a fat Lambda too:

- Slow Lambda cold start / boot
- Lambda Throttling
- Single Point Of Failure
- Violates Least Privilege Policy
- Poor CloudWatch logging / debugging
- Poor Lambda CloudWatch metrics
- Using API Gateway just to invoke the Lambda function

Why? Your Lambda is a choking hazard, if you’ve put multiple API routes in a single Lambda.

> With serverless, the goal is to build decoupled services (microservices).

### Slow Lambda Cold Start / Boot

It takes longer than usual for a Lambda function to process the initial request. Why?

#### This is what happens every time you invoke your Lambda:

![diagram showing AWS Lambda lifecycle](https://learnaws.io/_astro/lambda-execution-flow.DcrhAM-__1kveLe.webp)

1. Lambda downloads the code
2. A new Lambda instance gets launched
3. The code outside handler gets initialised
4. Handler function is run
5. The handler function routes the request
6. After processing request, response can be returned

Cold start takes longer → Requests don’t get processed on time. You don’t want to lose your first customer of the day, do you? It will most definitely occur if you have a fat Lambda.

### Lambda Throttling

#### What’s throttling in AWS Lambda?

When your Lambda is unable to take any more requests to process, it will start throwing error for the extra requests made.

You can have up to 1000 unique Lambda function instances in a span of 10 seconds. If you receive 1001 requests on your Lambda at once, and your Lambda takes 10 seconds to process each request, then the last request (1001th) will throw an error with status `429` Too Many Requests.

To see the detailed explanation of AWS Lambda scaling [follow docs](https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html).

### Single Point of Failure

Having multiple Lambda functions to handle individual requests reduces single point of failure, because all your code is not in the same function.

You make one mistake in setting up your Lambda function; all your APIs go down, not just one. Examples:

- Forgetting to add environment variables
- Top level `await` which throws an error
- Insufficient IAM permission provided to Lambda role

This way, if one Lambda function goes down → None of your APIs will work, resulting in status 5xx server errors.

### Violates Least Privilege Policy

#### What is least privilege policy in IAM?

Giving the minimum permission required to perform an operation maintaining the maximum security possible is called **Least Privilege Policy**. You can ensure this in AWS IAM Roles.

#### Example:

Your friend Ben asked if he can park his cycle in your garage. Ben is your friend, of course you’ll help him!

#### How will you ensure maximum security without losing your friendship?

- You give Ben a key to the entire house.
- You give Ben nothing and break up with him.
- You go and park his cycle yourself.
- You give Ben a key, but just to the garage.

#### AWS Lambda Least Privilege Policy Example

By default, AWS Lambda doesn’t have access to anything but CloudWatch logs.

Example: Your Lambda function needs to read a CSV file from S3. You shouldn’t give your Lambda full access to S3:

```astro
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "BAD CODE - Do not copy!",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```

Instead, give your Lambda function the permission to only perform the `GetObject` operation on the specific S3 bucket and only on the files which have `.csv` extension (best practice):

```astro
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1706106939799",
      "Action": ["s3:GetObject"],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::BUCKET_NAME/*.csv"
    }
  ]
}
```

### Poor CloudWatch Logging / Debugging

In this case, the log of a particular route won’t be easy to find in CloudWatch logs, because everything is being logged to a single CloudWatch log group.

It becomes tedious to filter the logs of API Gateway routes as well, because here the sole purpose of API Gateway becomes to just invoke the Lambda function.

### Poor Lambda CloudWatch Metrics

![AWS Lambda CloudWatch metrics dashboard showing invocations, duration, error, throttles and total concurrent executions](https://learnaws.io/_astro/lambda-cloudwatch-metrics-dashboard.uEcXsgJq_ZCh7ef.webp) Since all APIs exist in a single Lambda, you can’t set CloudWatch alarms on particular routes, or monitor the performance of the AWS Lambda Function.

### Using API Gateway just to invoke the Lambda function

AWS API Gateway doesn’t get used to its full potential, because the router is built into the fat Lambda function.

We should be using API Gateway routes to map our routes with different Lambda function which can be seen [below](https://learnaws.io/blog/#api-gateway-request-mapping-example).

## How to shred the fat from your Lambda?

![Fat lambda inside a fat girl, working hard to shred those fats](https://learnaws.io/_astro/fat-lambda-on-the-runway.Br17VB29_Bj4t9.webp) You can’t make your Lambda hit the gym. Or can you?

### Fat Lambda optimization workout plan:

- Start by ditching the request router from your Lambda e.g. Express, Django. API Gateway exist.
- Create multiple Lambdas with IaC like CDK, Serverless framework or SST
- Use Amazon API Gateway to route your requests
- Map requests in API Gateway based on the method and route parameters

#### API Gateway request mapping example

| **Path** | **Method** | **Lambda handler** | **Policy** |
| --- | --- | --- | --- |
| /product/:id | GET | get-product | Read access to DB |
| /product | POST | add-product | Write access to DB |
| /product/:id | DELETE | delete-product | Delete access to DB |

### Middleware - The traffic controller

Every framework like ExpressJS gives you a handy-dandy middleware but how do we get them on Lambda?

I hate manually writing code to validate every request!

I bring to you [MiddyJS](https://middy.js.org/) — the stylish NodeJS middleware engine for AWS Lambda.

Here is a simple example from their website:

```astro
import middy from "@middy/core";

const lambdaHandler = (event, context) => {
  // REAL BUSINESS LOGIC
  return doSomethingUsefulWith(event);
};

export const handler = middy(lambdaHandler)
  .use(/* Your own behaviour in a reusable fashion */)
  .use(/* logging and tracing */)
  .use(/* input validation */)
  .use(/* authentication */)
  .use(/* error handling */)
  .use(/* other behaviour */);
```

## The fat Lambda alternative (no gym)

If you don’t want to deal with spawning EC2 to deal with scalability, let me introduce you to [AWS Fargate.](https://aws.amazon.com/fargate/)

Serverless compute for containers

If you already have an application which has built-in API Gateway and all the code is interdependent, you can use Fargate as a serverless container service, which will scale up and down automatically.

> With Fargate you will need use Elastic Load Balancer to route the requests, which might cost you ~ $20/month.

So, when are you sending your Lambda to gym?