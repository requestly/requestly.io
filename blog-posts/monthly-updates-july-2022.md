---
title: "Requestly July’22 Updates"
date: "2022-08-09T02:53:17+05:30"
coverImage: "/assets/blog-images/monthly-updates.png"
status: publish
permalink: monthly-updates-july-2022
author: "Sachin Jain"
excerpt: "​Record & Replay browser sessions, Analytics Debugger for Android, Improved Modify Headers experience and a lot more!"
type: post
id: 354
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

Yups! that’s what we call anyone who uses Requestly. In this month’s update, I am very excited to announce some terrific product updates. One of the things that people love Requestly is how easy it makes debugging JS in production sites so let's start with that.

After talking to several users, we decided to publish a blog post that explains how you can debug JS in production sites. I am yet to see a company where developers feel confident enough about testing in the Staging environment.

> Production is production. Period.

When you debug JS on the production site (your own site or your client site), It is painful to understand code flow in minified JS and it is very hard to put breakpoints at the right place in the minified JS. But Requestly solves this for you by making it easy to load your local JS instead of prod JS in external sites. Now you can add detailed console logging, debugger statements and what not.

Here’s a [detailed article](https://requestly.io/blog/remote-debugging/) on the same and If you prefer watching to reading, here’s a youtube video demo of remote debugging of javascript.
<p align="center">
<iframe width="900" height="506.25" src="https://www.youtube.com/embed/dTg0GNe8-aY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>

Report High-Quality Bugs with Video, console logs, API logs & env details 🔥
-------------------------------------------------------------------------

As a QA, have you ever been in this situation when the developer says - I can’t reproduce this issue at my end and you don’t know what to do next? Maybe walk up to his desk and sit with him to show?

 ![Meme Devs-QA](/assets/blog-images/meme-devs.png)

Well, with Requestly Session Recording neither QAs nor Devs have to struggle with such situations. Requestly can help QAs & Customer Support engineers to log high-quality issues with all the details automatically captured which in turn makes it really easy for developers to solve the issues 10x faster without asking questions back from the reporter. Here’s a quick demo:

<p align="center">
<iframe width="900" height="506.25" src="https://www.youtube.com/embed/g_qXQAzUQgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>

Improved Modify Headers experience 💪🏼
----------------------------------

We have improved how you create Headers modifications. With our latest experience, now you can define request and response headers modifications separately. Also, you will be able to define multiple headers modifications for a given URL patterns. Here’s a sneak peak --

 ![Improved Headers](/assets/blog-images/improved-headers-annotated.png)

Analytics Debugger for Android Apps 🔥
-----------------------------------

With our first launch of API debugging in Android apps, our next challenge was to make it easier to debug Analytics events. Any single miss in analytics events could lead to a big mess in the business reports so it becomes absolutely critical to do the events sanity but it is hard. Before we move on to solving this in an automated manner, in the first cut we have simplified manual testing of events.

Here’s a quick demo of how you can debug Analytics events to give demo link and here’s the documentation in case you’d like to quick check it out.

 ![Analytics Debugger for Android Apps](/assets/blog-images/analytics-event-debugger-asset.png)

6 Ways how Devs & QAs in AdTech use Requestly today!
---------------------------------------------------

Over the last couple of weeks, we talked to several AdTech customers and published [a detailed blog post](https://requestly.medium.com/how-requestly-empowers-developers-qas-in-adtech-industry-c513eec21b7d) on how Requestly solves multiple problems for Devs & QAs in AdTech Industry. [Here’s the post I made about it](https://www.linkedin.com/feed/update/urn:li:activity:6961225943575072768/).

*   Troubleshooting Ad Tracking Pixels
    
*   Tracing Ad Requests in backend systems
    
*   Serving Ads from local server
    
*   Collaborating on Ads with clients
    
*   Testing new features on Prod
    
*   Development & Testing of CMP
    

[Give this a quick read!](https://requestly.medium.com/how-requestly-empowers-developers-qas-in-adtech-industry-c513eec21b7d)<br>&nbsp;</p>

<p>That’s it for now! Hope you enjoyed reading it. Feel free to <a href="mailto:sachin.jain@requestly.io" class="external-link" rel="nofollow"><u>connect</u></a> if you have any questions!<br></p>

SJ - Founder & CEO, Requestly!  
