---
title: "Simulate Fake response status codes using Requestly"
date: "2022-07-16T17:00:00+05:30"
coverImage: "/assets/blog-images/mock-server.png"
status: publish
permalink: "simulate-different-api-status-code-using-requestly"
author: "Nafees Nehar"
excerpt: "This article will take you through how to use Requestly to simulate different API status codes and test your app"
type: post
id: 211229
category:
  - Use Cases
  - Frontend Development
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

This article will take you through how to use [Requestly](https://requestly.io) to simulate fake 404, 500 response status codes and test your frontend app `without changing anything in your codebase`. There are two possible ways to solve this using Requestly:

- [Requestly Desktop App](/desktop) (1 step)
- [Requestly Chrome Extension](https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa) (2 step)
  <br />
  <br />

> If you want to simulate a different status code for network traffic in Android apps, use our [Android Debugger](/debug-android-apps/)

# Using Desktop App

You can use any MITM proxy to intercept the request and simulate the status code. However, using [Requestly Desktop App](/desktop), it is possible in a single step.

### Steps

- Go to Rules Tab and Click on New Rule
- Select Modify Response
- Define the exact URL (or Pattern) and define the status code. That's it.

![Modify Response Status Code Rule](/assets/img/screenshots/desktop-app/modify-status-code.png)

Here's a step by step video [demo](https://youtu.be/nLcIZGmMAtQ) explaning same.

Download Requestly Desktop App from [here](/desktop)

# Using Browser Extension

[Requestly Browser Extension](https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa) can simulate different status codes on an API by redirecting the actual API to a mock API using Requestly's `Redirect Rule`.

![Mock Server](/assets/blog-images/mock-server.png)

## Steps

### 1. Create a mock API using Requestly

Requestly has a Mock Server capability to create a Mock API response. Here are the steps to create one.

- Create a new mock API here- [https://app.requestly.io/mock-server/viewer/create](https://app.requestly.io/mock-server/viewer/create)
- Set the status code you want to simulate (404, 500 ...).
  ![Mock API sending 500 status code](/assets/blog-images/mock-500-status.png)

Example mock Simulating 500 status code- [https://app.requestly.io/mock/aIfQd7toGFUMCL0PZDrc](https://app.requestly.io/mock/aIfQd7toGFUMCL0PZDrc)

_Requestly mock server handles the [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers automatically so that the browser does not block the cross-origin requests._

### 2. Redirecting actual API endpoint to the Mock Server endpoint.

- Setup a [redirect rule](https://requestly.io/feature/redirect-url) to redirect the actual API to the requestly mock API.

![Redirect Blinkit Search API to a mock API simulating 404 status code](/assets/blog-images/blinkit-404.png)

Redirecting Blinkit Search API to a mock API simulating 404 status code

### 3. Removing Content-Security-Policy Headers

Sometimes redirection to mock API won’t work due to [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)- [connect-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src) directive, which restricts the URLs loaded using script interfaces.

You can use the [Requestly marketplace](https://app.requestly.io/marketplace) rule to bypass this, which has a prebuilt rule to remove the `content-security-policy` header. Thats it.

![Requestly Marketplace](/assets/blog-images/marketplace-cors.png)

Download Requestly browser extension from [here](https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa)

I hope this empowers you to do robust testing of your frontend app/website by simulating different API behaviours.

Further Resources:

- [Simulating 500 when Tweeting](https://requestly.io/blog/simulating-500-status-code-in-create-tweet-api-on-twitter)
- [Simulating 404 on Blinkit Search](https://requestly.io/blog/simulating-404-status-code-in-blinkit-search-api)

Happy Debugging!

By [@nafees87n](https://www.linkedin.com/in/nafees87n/)
