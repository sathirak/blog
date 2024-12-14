---
title: "Getting Started With Choreo"
date: "2024-12-14"
updated: "2024-12-14"
categories:
  - "devops"
  - "wso2"
  - "choreo"
coverWidth: 16
coverHeight: 9
status: "published"
excerpt: A comprehensive guide to get started with Choreo by WSO2.
---

Choreo is an Application Platform. It's as simple as that. 

It can host applications based on common buildpacks like NodeJS or Golang, or it can use a Dockerfile to build a Docker image or use a Docker image directly.

## But what makes Choreo a viable solution for a team of developers, what makes it special ?

Well generally speaking, DevOps is a huge part of Application development. There are a lot of stuff that needs to be configured, Kubernetes clusters, ArgoCD, Vaults, Monitoring, Logs and the list goes on. And configuring this is not fun, it doesn't necessarily make a product run better, you can rarely optimize it and it's a chore. 

And all of that time can be focused for developing the application. And that's what choreo does, it takes all of those chores and automates/abstracts them, it's so good that even this blog is deployed on Choreo.

But what about the alternatives? Digital Ocean App platform, Heroku? Although it seems similar, Choreo does things in a way so that you won't need a DevOps engineer. Best if I show what it is.

## Getting Started

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