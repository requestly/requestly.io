---
title: "Learn & bypass Content Security Policy HTTP Response Header"
date: "2022-11-04T02:53:17+05:30"
coverImage: "/assets/blog-images/blog-bypass-csp.png"
status: publish
permalink: learn-and-bypass-content-security-policy-http-response-header
author: "Sachin Jain"
excerpt: "Bypass CSP header to speed up your testing"
type: post
id: 355
category:
  - Guides
  - Debugging
  - Frontend Development
  - HTTP Headers
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "60"
_yoast_wpseo_primary_category:
  - "8"
---

Many SaaS products, such as A/B testing tools (e.g. [Adobe Target](https://business.adobe.com/in/products/target/adobe-target.html), [Optimizely](https://www.optimizely.com/), and [AbTasty](https://www.abtasty.com/)), recommendation engines (e.g. [Outbrain](https://www.outbrain.com/)), and customer feedback & onboarding tools (e.g. [Whatfix](https://whatfix.com/), [Appcues](https://www.appcues.com/)), among others, alter the user experience on websites. If you are from a SaaS Company and your Javascript tag is installed on external websites, keep reading! 

Web developers often want to test their local changes on live websites (sometimes live customer websites), when it comes to fixing a production bug or testing local changes before releasing code to production, but the Content Security Policy prohibits this.

In this article we'll understand what Content-Security-Policy (CSP) is and how we can bypass CSP header to speed up your testing. Here’s a quick video explaining CSP and bypassing CSP.

<p align="center"> <iframe width="950" height="550" src="https://www.youtube.com/embed/zFF_2vgvfQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </p> <br>

## About Content Security Policy

* Content Security Policy (CSP) is designed to prevent websites from security attacks like cross-site scripting (XSS) and clickjacking.

* CSP is a directive to browsers to restrict loading scripts from domains not specified in the policy. CSP can also be used to restrict running inline scripts or unsafe scripts, restrict form submissions, etc.

* CSP can be implemented as Meta tags or as a response header on the main page URL. 

The most common Implementation practice is via adding CSP response header so let's briefly look at an example on apple.com.

When we load apple.com, In the chrome dev tools, we can see Apple has defined a content security policy that includes some permissible domains for loading different types of resources like Iframes (child), Images, scripts & styles.

```
default-src 'self' blob: data: *.akamaized.net *.apple.com *.apple-mapkit.com *.cdn-apple.com *.organicfruitapps.com; 
child-src blob: embed.music.apple.com embed.podcasts.apple.com swdlp.apple.com www.apple.com www.instagram.com platform.twitter.com www.youtube-nocookie.com; 
img-src 'unsafe-inline' blob: data: *.apple.com *.apple-mapkit.com *.cdn-apple.com *.mzstatic.com; 
script-src 'unsafe-inline' 'unsafe-eval' blob: *.apple.com *.apple-mapkit.com www.instagram.com platform.twitter.com; 
style-src 'unsafe-inline' *.apple.com
```

![cspapple](/assets/blog-images/csp-apple.png)

Now if we try to load scripts from domains other than permissible domains under Apple’s CSP, it will fail to load with error stating that the content security policy directive is violated. 

Here’s how [Requestly](https://requestly.io/) comes to rescue.  Requestly helps you Intercept & Modify network requests directly in the browser. Requestly provides several Request Modification features like [Redirecting a Request URL](https://requestly.io/feature/redirect-url/), [Modifying the Response Body of APIs](https://requestly.io/feature/modify-response/), [Injecting Scripts](https://requestly.io/feature/insert-custom-scripts/), and many more. Here, we will simply remove the content security policy header from apple.com using [Modify Headers Rule](https://requestly.io/feature/modify-request-response-headers/).

You can [Install Requestly](https://requestly.io/downloads/) on your choice of browser from and then open [Rules](http://app.requestly.io/rules). 

To remove the CSP header, we will create a new [Modify Headers Rule](https://requestly.io/feature/modify-request-response-headers/) and remove the response header on apple.com and then reload the script.

![cspmodifyrule](/assets/blog-images/csp-modify-rule.png)

You can use [Requestly Insert Script](https://requestly.io/feature/insert-custom-scripts/) rule to insert test any script in live websites or you can also [swap production scripts with your local scripts](https://requestly.io/blog/how-to-load-local-js-files-on-live-production-sites/) using Requestly Redirect Rule and CSP won’t be a blocker anymore.

Hope this makes your testing & debugging workflows faster. Stay tuned and Happy debugging!

-- <a href="https://www.linkedin.com/in/sachin-jain-20b20731" class="external-link" rel="nofollow"><u>Sachin Jain,</u></a> Founder & CEO.

