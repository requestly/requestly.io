---
title: "How Requestly empowers developers & QAs in AdTech Industry"
coverImage: "/assets/blog-images/adtech-usecase.png"
date: "2022-08-03T11:31:13+05:30"
status: publish
permalink: adtech-use-cases
author: "Sachin Jain"
excerpt: "Most Tech giants rely on Ads as their primary business model. See how Requestly powers devs & QAs!"
type: post
id: 21720
category:
  - Use Cases
  - Frontend Development
  - Backend Development
  - Debugging
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

<style>
*{
  scroll-padding-top: 80px;
}
#HighlightedLink{
    white-space: pre-wrap; 
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;  
    white-space: -o-pre-wrap;  
    word-wrap: break-word;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 0rem;
}
</style>

<span class="markdownData">

<span class="tableOfContent">

</span>
<span class="content">


Today, ads are all over the internet and are the main reason why so many services are available for free. Massive Tech giants like Facebook (aka Meta), Instagram, Google, etc rely on Ads as their primary business model. Recently, one of our AdTech customers told us that Requestly is the defacto tool when it comes to testing & debugging ad pixels. In this article, we will discuss how Requestly powers devs & QAs in the [AdTech](https://advertising.amazon.com/library/guides/what-is-adtech) Industry.

*   [Troubleshooting Ad Tracking Pixels](#TroubleshootingAdTrackingPixels)
*   [Serving Ads from the local server](#ServingAdsfromthelocalserver)
*   [Collaborating on Ad creative with Clients](#CollaboratingonAdcreativewithClients)
*   [Testing new features on Production/Client websites before deployment](#TestingnewfeaturesonProduction)
*   [Bug Reporting (Video + console logs + network logs)](#BugReporting)
*   [Development & Testing of Consent Management Platform (CMP) script](#Development&Testing)

<div id='TroubleshootingAdTrackingPixels'> </div>

**Troubleshooting Ad Tracking Pixels**
--------------------------------------

In AdTech, ensuring that tracking pixels work correctly is the highest priority item on the devs & QA's checklist because billing is based on tracking pixel data.

A generalized example of a tracking pixel –
<div id='HighlightedLink'> 
https://trk-pixel.com/ev?type=adImpression&crid=26830&pt=s&fp=3663259980&srid=26830&uk=1-0-1-0&pid=66&stid=815&ka_slot=native&ka_id=health&ka_muid=wellness&ka_pv=1&ka_type=article&iid=922736380&aid=4&cid=408&fid=0&srid=26830&suid=35332&rmid=35332&rmtp=1&ts=1655907539678
</div>
<br>

When debugging tracking pixels, there are many variables to account for. QAs use [Requestly Modify Query Parameters Rule](https://requestly.io/feature/modify-query-params/) to modify an existing URL parameter or add a new custom parameter in order to follow its progress into the backend database and to mark testing pixels when testing under different conditions.

**Debugging Backend Tracking**

Image assets are mostly used as tracking pixels and carry ad parameters like creative ID, flight ID, site ID, click, and other user actions in the HTTP request to the server. Requestly Query Parameter Rule is used to change these parameters to ensure that the backend database is recording the parameters correctly.

**Filtering Pixel Requests in Logging Systems**

Passing an additional custom query parameter helps in Identifying the ad pixels fired from your browser in the logging systems like Splunk, DataDog, etc.

**Prevent pixels from firing**

[Requestly Block Request Rule](https://requestly.io/feature/block-network-requests/) is used to prevent tracking pixels from firing in certain situations.

<div id='ServingAdsfromthelocalserver'> </div>

Serving Ads from the local server
---------------------------------

Most of the time during development & testing, When devs test ads on live customer sites, ads are not being served so they use the [Requestly Redirect URL feature to redirect the Ad Requests](https://requestly.io/feature/redirect-url/) sent from the browser to hit the local (or internal) running Ad Server providing dummy ads.

This is mostly used by AdTech companies that act as [SSP (Supply Side Platform)](https://advertising.amazon.com/library/guides/what-is-adtech#:~:text=What%20is%20a%20supply%2Dside%20platform%20(SSP)%3F).

<div id='CollaboratingonAdcreativewithClients'> </div>

Collaborating on Ad creative with Clients
-----------------------------------------

There’s a niche category of ads where clients get to approve (or provide) the ad creative. For example -- Ads like Sponsored Items, Banner Images, Promoted Collections, etc used on eCommerce platforms (Amazon, eBay, etc), Travel booking platforms, etc. In such cases, developers replace existing creative with new creative and get the new creative approved by the clients before making it live. In fact, Clients also use Requestly to iterate on creative design and ensure the right creative lands in production.

<div id='TestingnewfeaturesonProduction'> </div>

Testing new features on Production/Client websites before deployment
--------------------------------------------------------------------

Believe this or not, no company has ever got their staging/testing environment right.

> `Production is production and your users are the real testers of your application.`

Many AdTech developers and QAs have to test the new features on client websites too over which they don’t have any control so before deploying their JS, CSS, or APIs code to production they use the Requestly Redirect feature to redirect production assets/APIs to staging/local assets/APIs and test the new features working smoothly.

**Example1 - Use local server APIs on Client Production Websites**

Replace ```http://trk-pixel.com``` with ```http://localhost:8080```

**Example2 - Use local JS/CSS on Client Production Websites (Manage environments)**

Injecting different versions of a script is how we manage testing environments. Because it's a web application, the whole application is whatever script version is loaded. They replace ```https://adapplication_prod.js``` with ```https://addapplication_staging.js```

**Here is the actual customer response - How Requestly helps them in debugging production Issues**

Devs use it to investigate an issue where -- the production environment was too important to touch but there was no good test environment, so no way to test the fixes. We had to test against production code but could not modify production. Here are the requestly replacements I made in the Jira ticket to accomplish this test and find the issue.

Here’s an actual Image from one of our customer’s Jira ticket

![Customer Jira Ticket](/assets/blog-images/customer-response-adtech.png)

<div id='BugReporting'> </div>

Bug Reporting (Video + console logs + network logs)
---------------------------------------------------

When QAs make bug tickets, the goal is to allow the developer to see the issue with their own eyes as quickly and easily as possible, including any relevant details that might assist.

They pair steps to reproduce with a video of the issue and a .har file. With [session recording](https://app.requestly.io/sessions), they only need to share a link in the steps, and it displays a recording of how the bug was triggered and shows console messages and network traffic in real-time. This feature dramatically improves the quality of bug tickets and also allows developers to see bugs more easily and dig deeper without extra effort.

<div id='Development&Testing'> </div>

Development & Testing of Consent Management Platform (CMP) script
-----------------------------------------------------------------

Websites typically incorporate Consent Management Platforms (CMPs), such as [OneTrust](https://www.onetrust.com/) and [CookieBot](https://www.cookiebot.com/), to convey user consent to the embedded advertisers, with the expectation that the consent will be respected. Only when the users opt-in, can these entities collect, process, and share user data.

One of our customers in the AdTech domain uses Requestly for testing & development of CMP dialog in the production environment. [Requestly Redirect Rule](https://requestly.io/feature/redirect-url/) helps them redirect production builds to development builds that they serve on their local server. QAs & Product managers then easily test out the new features in the CMP dialog.

I hope this was useful and you learned something new today. If you have any questions, feel free to ask them in our [community section](https://community.requestly.io/).

</span>
</span>