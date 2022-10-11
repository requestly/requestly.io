---
title: "Requestly Sep’22 Updates"
date: "2022-10-10T02:53:17+05:30"
coverImage: "/assets/blog-images/sep-2022-product-update-blog.png"
status: publish
permalink: monthly-updates-sep-2022
author: "Sachin Jain"
excerpt: "Unblock frontend developers when APIs are not ready"
type: post
id: 355
category:
  - Announcements
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "60"
_yoast_wpseo_primary_category:
  - "8"
---

Hey Requestlian 👋,

In this newsletter, I bring the latest Requestly developments in the month of Sep'22. Despite having many popular Mock Servers, developing frontend when APIs are not ready is painful. Developers often resort to hard-code JSON they get from backend developers while developing the UI. We took a jab at solving this, So Instead of hardcoding JSON in the code, define the JSON in the Requestly Modify API Response rule and keep it there forever, no more removing it before creating pull requests or hacking around your code base. Quickly enable/disable with a single click. Sharing is easy and whatnot. Now you can use <a href="https://requestly.io/feature/modify-response/" class="external-link" rel="nofollow"><u>Modify API response</u></a> for the following use cases

<ul>
  <li>Develop UI when the APIs are not ready (Non-existent endpoints)</li>
  <li>Modify API Responses programmatically to simulate error paths in code flows (Existent endpoints)</li>
</ul>

Here's a quick demo video that I created on Loom -
<div style="position: relative; padding-bottom: 64.98194945848375%; height: 0;"><iframe src="https://www.loom.com/embed/1028b13fb19b49a1ab373f6e5239485f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" ></iframe></div> <br>

Feel free to <a href="https://calendly.com/sachin-rq" class="external-link" rel="nofollow">schedule a demo</a> with me in case you need help with something.<br>

<h2>Charles Proxy alternative 🔥</h2>

Requestly continues to be the best, modern, <a href="https://requestly.io/charles-proxy-alternative/" class="external-link" rel="nofollow"><u>lightweight alternative to Charles Proxy</u></a> when it comes to web debugging. We keep getting feedback from our users about how much they love Requestly after moving from Charles. We published a blog post showing different things Requestly simplifies.<br>

Here are a couple of references we found on the Internet this month: <br>
<blockquote class="twitter-tweet" align="center"><p lang="en" dir="ltr">Requestly brings the power of Charles Proxy in the browser! If you are a web developer, you gotta try it (<a href="https://t.co/FsCVBlL3Z2">https://t.co/FsCVBlL3Z2</a>)</p>&mdash; Michael Thomas (@MikeThomasDev) <a href="https://twitter.com/MikeThomasDev/status/1577774519929929729?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> <br>

<p align="center"> <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6967851411178975234" height="715" width="560" frameborder="0" allowfullscreen="" title="Embedded post" style="border: 1px solid #D0D9DC; border-radius: 10px;"></iframe></p> <br>

<h2>Adobe &amp; Requestly (The love saga continues..❤️)</h2><br>

Requestly continues to be one of the favorite tools to swap tag management libraries across environments. Digital Analytics consultants and Implementation managers use Requestly extensively to swap libraries and inject custom scripts on their client websites, and sometimes also modify the request/response headers &amp; API responses. When it comes to swapping out Adobe Launch libraries across environments, Requestly is one of the most loved tools as said by <a href="https://www.linkedin.com/feed/update/urn:li:activity:6967851411980046337/" class="external-link" rel="nofollow"><u>Andy Lunsford in his LinkedIn post.</u></a></p>
<p>We also published how you can <a href="https://requestly.io/blog/replace-adobe-launch-production-script-with-development-script/" class="external-link" rel="nofollow"><u>load the development version of the Adobe launch tag </u> </a> in the production sites. </p>
<p>One of our users funnily mentioned this to me in our LinkedIn conversation. This couldn't be better expressed than this.

<p align="center"> <img src="/assets/blog-images/chat-ss.png" alt="adobe and RQ" width="560"/> </p>

<h2>Bug Fixing &amp; Performance Improvements ⚡️</h2><br>

We improved app loading performance significantly and took down the page loading time from 9s to less than 1s. We primarily optimized on caching Firebase queries &amp; a few other things. We will soon share our learnings as a blog post. <br>
Based on a feature request, we added the capability to add description &amp; start time offset while sharing a<a href="https://www.youtube.com/watch?v=g_qXQAzUQgU" class="external-link" rel="nofollow"> session recording with teammates.</a></p>
<p align="center"> <img src="/assets/blog-images/sesh-record.png" alt="adobe and RQ" width="1000"/> </p>

Use the <a href="https://www.youtube.com/watch?v=g_qXQAzUQgU" class="external-link" rel="nofollow"> Session Recording feature to 10x your bug reporting</a> within your company.<br>

<h2>Customer of the Month 🤝🏻</h2> <br>

<a href="https://www.joyned.co/" class="external-link" rel="nofollow"><u>Joyned</u></a> is Social Commerce as a Service, that provides a cross-website, live shopping experience for online shoppers.
<ul>
  <li> Joyned Devs use Requestly to test local SDK changes directly on staging/prod sites without deployment</li>
  <li> Joyned QAs use Requestly to test SDK changes on existing customer sites </li>
  <li> Joyned Product &amp; Sales team use Requestly to demo Joyned product live on potential customer sites thereby making demos </li>
</ul>

<a href="https://requestly.io/customer-stories/joyned-uses-requestly-to-test-local-js-sdk-changes-directly-on-customers-production-sites/" class="external-link" rel="nofollow">Read the complete story here</a> <br>

<h2>Highlights | Requestly on Web 💪🏻</h2><br>

<a href="https://devtools.tech/" class="external-link" rel="nofollow"><u>Devtools.tech</u></a> is a great place to know about JS, React, and developer tools. We stumbled upon a recent video from them where they explain how web developers can supercharge their development &amp; testing workflows using Requestly. 
<p align="center"> <iframe width="560" height="315" src="https://www.youtube.com/embed/c97qp-tfY1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </p> <br>

That’s it for now! Hope you enjoyed reading it. Feel free to <a href="mailto:sachin.jain@requestly.io" class="external-link" rel="nofollow"><u>connect</u></a> if you have any questions!<br>&nbsp;</p>

SJ - Founder & CEO, Requestly!  
