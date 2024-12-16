---
title: "Getting Started With Choreo"
date: "2024-12-14"
updated: "2024-12-16"
collections:
  - "devops"
  - "wso2"
  - "choreo"
coverWidth: 16
coverHeight: 9
status: "published"
excerpt: A basic guide to get started with Choreo by WSO2.
---

Choreo is an Application Platform. It's as simple as that. 

It can host applications based on common buildpacks like NodeJS or Golang, or it can use a Dockerfile to build a Docker image or use a Docker image directly.

## But what makes it special ?

Well, generally speaking, DevOps is a huge part of Application development. There are a lot of things that need to be configured: Kubernetes clusters, ArgoCD, Vaults, Monitoring, Logs, and the list goes on. Configuring this is not fun; it doesn't necessarily make a product run better, you can rarely optimize it, and it's a chore.

And all of that time can be focused on developing the application. And that's what Choreo does - it takes all of those chores and automates/abstracts them. It's so good that even this blog is deployed on Choreo.

But what about the alternatives? Digital Ocean App platform, Heroku? Although it seems similar, Choreo does things in a way so that you won't need a DevOps engineer. Best if I show what it is.

## Deploying Overview

You need an app first, if you don't have an app, you can use [this](https://github.com/sathirak/deploy). Then you can create a new component in your project. 

![Create a new component](/images/blog/choreo-create-a-component.png)

For this we are going to go with a web application and use the Dockerfile to build the image.

![Configure new component](/images/blog/choreo-configure-component.png)

Select the Dockerfile and map the port to 8080 and `Create`

![Building the application](/images/blog/choreo-build.png)

After that the Dockerfile is scanned, then the Docker image is built and scanned for vulnerabilities with [Trivy](https://github.com/aquasecurity/trivy), you can deploy it via `Deploy`

In the deployment section, you can deploy to `Development` and then promote the build to `Production`

![Deploying the application](/images/blog/choreo-deploy.png)

And it's done and dusted, go to the `Web App URL` and then tadaaa!

![Application succesfully deployed](/images/blog/choreo-complete.png)

That's a successful deployment! *Easy Peasy Lemon Squeezy!*

## The Judgement

So generally, deployment is easy using Choreo. But we have seen this in Heroku, Vercel, or Digital Ocean App Platform. The thing I like about Choreo is that it gives developers a lot more interfaces than other platforms. And that's what makes this product really viable for a team of devs.

While it's easy to use all these platforms, scaling, managing, and monitoring your apps on other platforms can be challenging. Choreo provides developers with more control and helps mitigate these issues. It's so feature filled that you can even configure volumes.

Choreo data planes for AWS and Azure are available on the market, which is also really nice.

But there are some features missing, domain routing is done via CNAMEs, which is problematic because apex domains ( domains without prefixes like example.com) can't be configured to your applications.

And cold starts are considerably slow on their cloud, specifically in the `Developer` pricing plan. But I really feel like this could be useful. Because a few weeks ago, I wanted a platform just like this, and I was only able to find [Coolify](https://coolify.io/) (which is super, BTW). Still, I wouldn't recommend Choreo to a startup, for many reasons. But my main reasoning is the pricing plans - only two devs can use it in the `Developer` (AKA free tier), and if we need to upgrade plans, it's $150 per application or component. And that's very expensive.

But if it wasn't for the pricing, would I use it? Mostly yes, as mentioned before, dealing with Kubernetes is a pain, and I want to build something rather than configure it.