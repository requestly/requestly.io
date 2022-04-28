---
title: "Replace Adobe Launch Production Script to Development Script"
coverImage: "/assets/blog-images/rq-launch.png"
featuredImage: "/assets/blog-images/launch-v2.png"
date: "2022-02-18T20:43:59+05:30"
status: publish
permalink: replace-adobe-launch-production-script-with-development-script
author: "Requestly Team"
excerpt: "Adobe Launch is a next-generation tag management system that unifies the client-side marketing ecosystem by empowering developers to build integrations on a robust, extensible platform that partners, clients, and the broader industry can build on and contribute to."
type: post
id: 2172
category:
  - Use Cases
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

## Introduction

[Adobe Launch](https://www.adobe.com/experience-platform/launch.html) is a next-generation [tag management system](https://www.nabler.com/tag-manager-implementation/) that unifies the client-side marketing ecosystem by empowering developers to build integrations on a robust, extensible platform that partners, clients, and the broader industry can build on and contribute to.

Launch is not an update to the existing Tag Management system by Adobe, namely [Adobe DTM](https://www.nabler.com/adobe-dtm-consulting/). Instead, it is an entirely new product with a new codebase. It has been redesigned from scratch using an API-first approach. Everything is built on a robust set of APIs, which makes the system very powerful, flexible, and customizable.

## Replace Adobe Launch Production Scripts with development version

Digital marketing consultants often needs to debug the instrumentation of analytics events, triggering of the events and the properties sent along with the events. With the production version, it is very hard to debug and validate if everything is working fine So in order to have verbose logging in console, having a development version really helps.

But the problem is consultants do not own the website so they can’t change the production scripts to development version and neither it is a good suggestion to run development version in your production version.

## Using Requestly to replace scripts (Chrome, Firefox)

Requestly is a modern web & mobile debugging proxy. Requestly comes as browser [extension](https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa), [desktop app](https://requestly.io/desktop/) and Android/IOS SDKs (coming soon).

Using Requestly, one can define a URL pattern and redirect it to another. It is called [Redirect Rule (or Map Remote)](http://localhost:8000/feature/redirect-url/) in Requestly.

Create New Rule and Select Redirect Rule. Here’s an example of Redirect Rule for Adobe Launch script replacement from production to development.

![Adobe Launch Production to Development](/assets/blog-images/adobe-launch-prod-to-dev.png)

```jsx
URL Contains https://assets.adobedtm.com/1dd2f3456789/123456abcd/launch-EN1a2b3c4d5e6fg7h8.min.js

Redirect to https://assets.adobedtm.com/1dd2f3456789/123456abcd/launch-12345a1b2c3d4e5-development.min.js
```

Note - Above URLs are dummy. Please use your own production & development environment URLs.

## Validate if the Replacement is happening fine

There are multiple ways using which one can validate whether the script replacement is working fine or not.

### Simulate Rule

Using this feature, you can enter your production environment URL and Requestly behind the scenes will evaluate whether the Redirect rule is configured correctly or not.

![Simulate Rule](/assets/blog-images/adobe-launch-prod-to-dev-simulate.png)

### Chrome Devtools

Open the website where you have the production version of DTM tag and you should see an Internal Redirect to the development version of the tag. (As configured in the rule)

![Chrome Devtools](/assets/blog-images/adobe-launch-prod-to-dev-chrome-devtools.png)

### Requestly console in Devtools

You can also open Requestly console in devtools to validate whether the replacement is working fine or not.

![Requestly console](/assets/blog-images/adobe-launch-prod-to-dev-requestly-devtools.png)

## Replacing Production Tag to Development Tag for Mobile browsers or Safari (Requestly Desktop App)

[Requestly Desktop app](https://requestly.io/desktop/) is available on all platforms - Windows, Linux & MacOS. You can configure your Android & IOS devices to pass the traffic through Requestly desktop app and then you can configure a Redirect Rule in the desktop app as well.

![Requestly Desktop App](/assets/blog-images/adobe-launch-prod-to-dev-desktop-app.png)

Hope it helps! Feel free to reach out to us if you are stuck anywhere while configuring the rule.
