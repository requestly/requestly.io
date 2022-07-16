---
title: "Simulating 404 HTTP status code in Blinkit Search API"
date: "2022-07-16T17:00:00+05:30"
coverImage: "/assets/blog-images/mock-server.png"
status: publish
permalink: "simulating-404-status-code-in-blinkit-search-api"
author: "Nafees Nehar"
excerpt: "Nobody wants to see errors in their API. But they appear at times when least expected. The possible scenarios when an error pops up could be something is wrong with the request or some problem with the API. Whatever may be the cause, one thing is sure traffic would stop."
type: post
id: 211228
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

Nobody wants to see errors in their API. But they appear at times when least expected. The possible scenarios when an error pops up could be something is wrong with the request or some problem with the API. Whatever may be the cause, one thing is sure traffic would stop.

API crashes shouldn’t disrupt the user experience. Errors should be handled at the client-side so that the user knows that something is wrong and can move on from there.

In the development phase, the consumers of API won’t wait till the API is entirely built to start their development. In this scenario, they can mock server responses and begin their development. Testing the application for error responses is vital so that user traffic is not blocked.

A QA tester or Product manager would want to mock various error responses to check how the application handles the errors.

## How to Simulate API error responses using Requestly

[Requestly](https://requestly.io) is a tool that intercepts all the network requests and allows users to modify them. It enables users to Modify Headers, Redirect URLs, Switch hosts, Mock API responses, Delay network requests, Insert custom scripts. It is available as a desktop app and browser extension on all major browsers.

[Requestly](https://app.requestly.io) app can simulate status code responses by using the redirect rule to redirect to a mock API that overrides the status code. In simple words, you are hitting the mock API instead of the actual API.

![Mock Server](/assets/blog-images/mock-server.png)

I used it to simulate status code responses on certain prominent websites.

I tried this with the following sites to see how the site handles the simulation of 500- Internal Server Error status code.

> If you want to simulate a different status code for network traffic in Android apps, use our [Android Debugger](/debug-android-apps/)

## Simulating 404 status code on blinkit search.

I created a mock using requestly setting 404 status code.

![Mock for simulating 404 response code on blinkit search](/assets/blog-images/mock-404-status.png)
_Mock for simulating 404 response code on blinkit search_

After some observation, I found that blinkit search API follows the pattern `[https://blinkit.in/v5/search/*](https://blinkit.in/v5/search/*)`

![Rule redirecting blinkit search to mock API response](/assets/blog-images/blinkit-404.png)
_Rule redirecting blinkit search to mock API response_

The blinkit website went into infinite loading on searching as a 404 response status code was simulated in the search API. The error is not handled here instead. If some message were to the user, the experience would have been better.

![Searching on Blinkit](/assets/blog-images/blinkit-search.png)
_Searching on Blinkit_

Get the rule here: [https://app.requestly.io/rules/#sharedList/1640614559005-blinkit-search-404](https://app.requestly.io/rules/#sharedList/1640614559005-blinkit-search-404)

This is how I used Requestly to simulate 404 in the blinkit search. I hope this article has helped you and empowers you to simulate different status codes.

Happy Debugging!

Further Resources:

- [Simulate different API status code using Requestly](https://requestly.io/blog/simulate-different-api-status-code-using-requestly/)
- [Simulating 500 when Tweeting](https://requestly.io/blog/simulating-500-status-code-in-create-tweet-api-on-twitter)

By [@nafees87n](https://www.linkedin.com/in/nafees87n/)
