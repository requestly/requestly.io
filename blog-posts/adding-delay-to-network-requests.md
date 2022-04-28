---
title: "Adding Delay to Network Requests"
coverImage: "/assets/blog-images/networkTab.png"
date: "2021-07-02T11:31:13+05:30"
status: publish
permalink: adding-delay-to-network-requests
author: "Requestly Team"
excerpt: "As a frontend developer or QA, Testing certain parts of web applications require you to simulate delay in one or more components of the web app. Here are some scenarios where you would like to delay the network requests."
type: post
id: 2172
category:
  - Use Cases
  - Features
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

<span class="markdownData">

<span class="tableOfContent">

</span>
<span class="content">

# Adding Delay to Network Requests

\#APITesting #SimulateLatency #WebAppTesting #SlowNetwork #DevTools

As a frontend developer or QA, Testing certain parts of web applications require you to simulate delay in one or more components of the web app.

Here are some scenarios where you would like to delay the network requests.

- Test performance of your web app on a slower condition
- Test behaviour of your app when one or more APIs respond slow (API Latency has gone up)
- Check if any race conditions exist when some resource X gets loaded after/before another resource Y.
- Test the impact of slow loading of external resources impact on your app.
- Test your loading experience in the app.

It is important for a developer to test the website performance in poor network conditions. This article focuses on the different methods which could enable developers to simulate network conditions.

## Approach 1: Network throttling feature of DevTools. Available in Chrome, Firefox and Edge.

The network tab in DevTools provides an option to throttle network requests. With this you can experience the same network conditions what one might face when using slow 3G, 2G connections or offline.

### Steps to use the throttler:

- Open DevTools (Ctrl + Shift + I)
- Switch to the Network Tab.
- By default, the throttler is set to ‘No Throttle’.
- From the dropdown menu, you can select the type of network to simulate.
- Long Press the reload icon while the DevTools panel is open.

![Long press the reload icon to see advanced reload options](/assets/blog-images/networkTab.png)
Long press the reload icon to see advanced reload options

_Source: https://css-tricks.com/throttling-the-network/_

- Select ‘Empty Cache and Hard Reload’ from the advanced reload options.

> It is important to empty cache to examine the page as a first time visitor.

### Limitations

- It throttles the entire network. It is not possible to delay a particular network request.
- It might not be helpful in cases where you want to selectively delay network requests.

For more information, refer the documentation: <a href="https://developer.chrome.com/docs/devtools/network/reference/">Docs</a>

## Approach 2: Server Side Delay - Using public APIs to add delay in requests

APIs like [deelay.me](https://deelay.me/) and [https://app.requestly.io/delay](https://app.requestly.io/delay) allow selectively delaying a network request. This kind of delay does not impact the browser.

### How to use the API:

Change the link to be delayed as:

    https://app.requestly.io/delay/<delay_in_millisecods>/<URL_to_be_delayed>

For example - Suppose you want to delay
[https://code.jquery.com/jquery-3.6.0.slim.js](https://code.jquery.com/jquery-3.6.0.slim.js)
by 4000 ms and see the impact on your app as your libraries heavily depend on jQuery. This url has to be changed to :

<pre>https://app.requestly.io/delay/4000/https://code.jquery.com/jquery-3.6.0.slim.js</pre>

or

<pre>https://deelay.me/4000/https://code.jquery.com/jquery-3.6.0.slim.js</pre>

You can configure a Redirect Rule in Requestly to redirect jQuery CDN URL [https://code.jquery.com/jquery-3.6.0.slim.js](https://code.jquery.com/jquery-3.6.0.slim.js) to above mentioned URL like

<pre>https://app.requestly.io/delay/4000/https://code.jquery.com/jquery-3.6.0.slim.js</pre>

### Limitations

- As the requests are redirected to public APIs, it cannot be applied on XHR requests as [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy would block the redirected resources.

## Method 3: ClientSide Delay - Using Requestly browser extension (Chrome, Firefox, Edge, Opera, Brave)

Using [Requestly](https://requestly.io/), you can Modify Headers, Redirect URLs, Switch hosts, Mock API response, Delay network requests, Insert custom scripts and much more.

Requestly delay rule works primarily on client side. This is how you can create a Delay Request Rule.

![Selecting Delay Rule in Requestly](/assets/blog-images/delayRuleSelector.png)Selecting Delay Rule in Requestly

![Configuring Delay Rule in Requestly](/assets/blog-images/delayRuleBuilder.png)Configuring Delay Rule in Requestly

- It supports delaying multiple requests which contain a certain keyword or match against the regex.
- It also works with AJAX requests.

You can also combine this with other rules of requestly, which is helpful in many situations, like somewhere you want to modify the headers of the request after delaying it. It could be easily solved using requestly.

### Limitations

- The Requestly extension actually adds the delay in the browser.
- Adding the delay in the browser could lead to poor browsing experience when the delay is applied to too many requests or it is applied for a large duration.

## Conclusion

- To test your entire application on a slower network, prefer using the browser's network throttling feature.
- To add delays to external resources like CSS, JS etc prefer using Server Side delay.
- To add delays to API requests (& AJAX requests) prefer using Client Side delay.

Hope this article gives you clarity on how you can test your applications on a slower network or simulate API latency in your app.

We share news about developer tools. Follow us on [Twitter](http://twitter.com/requestlyIO) to learn more about devtools. We are also reachable on email at contact@requestly.io
</span>
</span>
