---
title: "Simulating 500 HTTP status code in Create Tweet API on Twitter"
date: "2022-07-16T17:00:00+05:30"
coverImage: "/assets/blog-images/mock-server.png"
status: publish
permalink: "simulating-500-status-code-in-create-tweet-api-on-twitter"
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

In the development phase, API consumers won’t wait until the API is entirely built to start their development. In this scenario, they can mock server responses and begin their development. Testing the application for error responses is crucial so that user traffic is not blocked.

A QA tester or Product manager would want to mock various error responses to check how the application handles the errors.

## How to Simulate API error responses using Requestly

[Requestly](https://requestly.io) is a tool that intercepts all the network requests and allows users to modify them. It enables users to Modify Headers, Redirect URLs, Switch hosts, Mock API responses, Delay network requests, Insert custom scripts. It is available as a desktop app and browser extension on all major browsers.

[Requestly](https://app.requestly.io) app can simulate status code responses by using the redirect rule to redirect to a mock API that overrides the status code. In simple words, you are hitting the mock API instead of the actual API.

![Mock Server](/assets/blog-images/mock-server.png)

I used it to simulate status code responses on Twitter

I tried this with the following sites to see how the site handles the simulation of 500- Internal Server Error status code.

> If you want to simulate a different status code for network traffic in Android apps, use our [Android Debugger](/debug-android-apps/)

## Simulating 500 status code when Tweeting

I created a mock API using requestly setting Status Code as 500.

![Mock for simulating 500 error response on Twitter](/assets/blog-images/mock-500-status.png)
_Mock for simulating 500 error response on Twitter_

After some reverse engineering, I noticed that when the tweet button is clicked, a POST request is sent to a Twitter API ending with `CreateTweet`.

So I created the Requestly rule to be applied only when the URL matches `*/CreateTweet`using wildcard match.

![Redirect Rule redirecting to mock API](/assets/blog-images/createTweet-API.png)
_Redirect Rule redirecting to mock API_

The redirection to mock API won’t work due to [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)- [connect-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src) directive, which restricts the URLs loaded using script interfaces.

You can use the [Requestly marketplace](https://app.requestly.io/marketplace) rule to bypass this, which is a prebuilt rule to remove the `content-security-policy` header.

![Requestly Marketplace](/assets/blog-images/marketplace.png)

When I tried tweeting something, 500 status code was simulated and handled as following.

![500 error response simulated when tweeting](/assets/blog-images/twitter-screenshot.png)
_500 error response simulated when tweeting_

Get the rule here- [https://app.requestly.io/rules/#sharedList/1640613384657-twitter-500-simulate](https://app.requestly.io/rules/#sharedList/1640613384657-twitter-500-simulate)

This is how I used Requestly to simulate 500 when tweeting. I hope this article has helped you and empowers you to simulate different status codes.

Happy Debugging!

Further Resources:

- [Simulate different API status code using Requestly](https://requestly.io/blog/simulate-different-api-status-code-using-requestly)
- [Simulating 404 on Blinkit Search](https://requestly.io/blog/2021/12/28/simulate-404-API-status-code-in-blinkit-search-API)

By [@nafees87n](https://www.linkedin.com/in/nafees87n/)
