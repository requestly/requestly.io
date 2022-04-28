---
title: "How backend devs can save an hour a day in local development & testing"
date: "2021-12-12T17:00:00+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: local-api-development-and-testing-productivity-for-backend-engineers
author: "Sahil Gupta"
excerpt: "In my previous organisation grofers, where I worked as a backend engineer, during development of any feature or even a small bug fix, we used to first develop & test the changes on the locally setup MicroService."
type: post
id: 211212
category:
  - Use Cases
  - Backend Development
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

# Current Setup & the limitations

In my previous organisation [grofers](https://grofers.com), where I worked as a backend engineer, during development of any feature or even a small bug fix, we used to first develop & test the changes on the locally setup MicroService. After that, we deploy the changes on the Kubernetes stage cluster in an isolated namespace, which has all the other services deployed too. The deployment pipeline usually took around 5-10mins to completely deploy all the services. After the stage is setup, we change the API gateway in our debug app to point to the stage environment so we can test the changes end-to-end on the app.

This often requires multiple cycles and sometimes unstable stage environment makes the entire development & testing very frustrating. We often found ourselves fixing the configuration on stage environment and then testing the changes. This is how the process looked like before:

![grofers current testing process](/assets/blog-images/grofers-current-testing-process.png)

## Limitations

- It was very time consuming.
- Multiple deployments required after every change/commit.
- Debugging using breakpoints in IDE was not possible.
- Maintaing a stage environment is very hard. Our Staging environment lacked a lot of data, stability issues so everytime testing on stage was pain.

Almost every developer was using this tedious process to test out the changes. As this process is time consuming, sometimes we missed certain edge cases, which then multiple times had also led to downtimes 😢  and bugs in production.

<u>We tried telepresence too</u> for local testing, but no one ended up using it due to the tedious process in setting it up.

# Introducing Requestly 💪

Requestly is a cross-platform developer tool to intercept all local network traffic and gives request level granular control to modify individual pieces of an API request. Requestly can be leveraged here to reduce the development & testing time and also testing different corner cases.

![Requestly Hero Image](/assets/blog-images/requestly-feature-set-annotated.png)

## How Requestly can help?

Using [Requestly desktop app](http://requestly.io/desktop), you can interecept all traffic from your Android & IOS debug apps. Then you can create a traffic modification rule (simply rule) to redirect a particular endpoint/service to your local machine and not to production endpoint <u>(A No-Code solution for the Coders)</u> This lets users instantly test out any changes directly against production envrionment **without depending on the staging environment**.

On top of this, you can instantly test out how the app reacts when the response of an API changes, without making any changes to the code. You can mock API responses using Requestly. You can also test for 4xx, 5xx scenarios, add artificial latency to your APIs and test your app.

So this is how the process looks like now:

![Local API testing process with Requestly](/assets/blog-images/local-api-testing-process-with-requestly.png)

## Example - Use Search APIs from local in debug app

For example, If you are working on Search service and want to <u>test Type To Search experience</u>, this setup can be really life savior. For this you can configure a Replace Rule in Requestly like this

```
Replace: https://api2.grofers.com/v5/search
With: http://localhost:5000/v5/search
```

Here's how the flow of data look like

![Android & IOS App debugging with Requestly](/assets/blog-images/requestly_android_IOS_Debugging.png)

## Benefits

- Changes instantly reflected on app
- No multiple deployments cycle required.
- Test different edge cases which only exist on production. **Deploy on production with confidence.**
- Debugging with breakpoints in your favourite IDE is now possible
- Minimize dependency on Stage environment

## Configuring Requestly (Step by Step guide)

Now you know the benefits of using Requestly in your local API develoment & testing. It's time to set up Requestly. Here's step by step guide.

### Step1 - Download Requestly Desktop app

Go to [https://requestly.io/desktop](https://requestly.io/desktop) and download the desktop app for your OS - Mac, Linux & Windows.

### Step2 - Install Certificate & Configure Proxy in Android/IOS Debug App

![Requestly Desktop App Setup Steps](/assets/blog-images/requestly-desktop-app-setup-steps.png)

At this point, you should be able to see the traffic from your debug app in the Network Traffic table.

### Step3: Setup Redirection Rule in Requestly

Redirecting `v5/search` endpoint from Production to local server

![Redirect API from Prod to local using Requestly](/assets/blog-images/requestly-redirect-prod-to-local.png)

### Step4: Add Preset headers (If required)

Click on `Create New Rule` and then `Select Modify Headers` to add additional headers to the request which <u>Kong adds in the production environment</u> So that your [localhost](http://localhost) end point also receive the same headers.

![Add Preset Headers using Requestly Headers Rule](/assets/blog-images/requestly-headers-rule.png)

That's it! You should be able to <u>test features like TypeToSearch directly in debug app</u> against the production K8s cluster utilising the production data on ElasticSearch and other production configurations.

<u>Please note</u> we don't intend to discourage testing in the stage environment. We just want to emphazise that you can avoid multiple cycles of deployment on stage during the development. Ofcourse, the ideal practive should to test end to end on local, then doing testing on stage and then deployment on production.

Happy testing! By [Sahil Gupta](https://www.linkedin.com/in/sahil865gupta/)
