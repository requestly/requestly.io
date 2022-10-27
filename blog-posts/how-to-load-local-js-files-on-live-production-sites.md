---
title: "How to load local JS files on live Production sites"
date: "2022-10-26T20:13:18+05:30"
coverImage: "/assets/blog-images/local-js-testing.png"
status: publish
permalink: how-to-load-local-js-files-on-live-production-sites
author: 
excerpt: "Useful in debugging JS production bugs or testing local changes before shipping code to production."
type: post
id: 716
category:
  - Guides
  - Debugging
  - Frontend Development
tag:
  - debugging
  - Chrome
  - frontend
  - guides
post_format: []
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

As Web developers, we often want to test our local changes directly on production websites - be it for debugging a production bug or for testing local changes before shipping code to production. Tools like [Source Maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/) or [Local Overrides](https://developer.chrome.com/blog/new-in-devtools-65/#overrides) don't often work in our setup and have multiple limitations. With Requestly, you can map your production files to local files on your machine in less than a minute. This article covers how we can load a local version of jQuery on live stackOverflow website.

Here's a quick demo of loading jquery from local machine on stackoverflow.com.

<p align="center"> <iframe width="800" height="450" src="https://www.youtube.com/embed/85GVaOWTnlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </p> <br>

There is `jquery.min.js` loaded on stackoverflow.com from ajax.googleapis.com.
<p align="center"> <img src="/assets/blog-images/stackoverflow.png" alt="Stackoverflow" width="800"/> </p>

I have downloaded a development version of jquery v3.6.1 on my machine. Unfortunately Chrome does not allow loading file based URLs on the live
website so we have to use a simple HTTP server, for this we refer to http server node module (https://github.com/http-party/http-server) and install this with command `npm install --global http-server`

Once installed, we're able to run HTTP server command on Terminal with a cors option enabled (`http-server --cors -p 8081`)

<p align="center"> <img src="/assets/blog-images/terminal.png" alt="terminal" width="800"/> </p>

This will allow us to open all the contents of this directory over **localhost:8081**. Here we're able to access our jQuery over 127.0.0.1 which is equivalent to localhost. In our local jquery version, we added a custom console log statement just to verify that this script has been loaded in stack overflow.

<p align="center"> <img src="/assets/blog-images/consolelog.png" alt="console log" width="800"/> </p>

Now we head over to Requestly to configure the mapping. Requestly provides several modification capabilities like <a href="https://requestly.io/feature/redirect-url/" class="external-link" rel="nofollow"><u>setting up redirects</u></a> or <a href="https://requestly.io/feature/modify-query-params/" class="external-link" rel="nofollow"><u>changing the API or the endpoints,</u></a> <a href="https://requestly.io/feature/modify-request-response-headers/" class="external-link" rel="nofollow"><u>modifying headers,</u></a> <a href="https://requestly.io/feature/modify-response/" class="external-link" rel="nofollow"><u>modifying API responses.</u></a>

In this case, we will use <a href="https://requestly.io/feature/redirect-url/" class="external-link" rel="nofollow"><u>Redirect Request.</u></a> 
Name the rule: <u>load jQuery from local machine</u> and specify that when URL contains jquery.min.js then redirect to our localhost version which is http://127.0.0.1:8081/jquery-3.6.1.js and Save!

<p align="center"> <img src="/assets/blog-images/redirect.png" alt="redirect" width="800"/> </p>

Go back to StackOverflow and search for jquery, this time you can see jQuery is loaded from local machine (a 307 redirect)

<p align="center"> <img src="/assets/blog-images/loaded.png" alt="loaded" width="800"/> </p>

Under 'Response' we  can see the custom console log. In the console tab, we can find our custom statement written.

<p align="center"> <img src="/assets/blog-images/custom.png" alt="custom" width="800"/> </p>

**Pro tip: You can also pin the rule for quick activation/deactivation** 

Once you pin the rule you can access your rule in the extension pop-up and directly enable or disable from there.

<p align="center"> <img src="/assets/blog-images/requestly-pin.png" alt="requestly" width="800"/> </p>

Hope this helps your testing & debugging workflows faster. If you don't use Requestly, you can download Requestly from [Chrome Web Store](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en) and [Downloads Page](https://requestly.io/downloads/) for other platforms/browsers.

Happy Debugging 🚀 <br/>
-- <a href="https://www.linkedin.com/in/sachin-jain-20b20731" class="external-link" rel="nofollow"><u>Sachin Jain,</u></a> Founder & CEO.
