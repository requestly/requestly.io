---
title: "How to load local JS files on live Production sites"
date: "2022-10-26T20:13:18+05:30"
coverImage: "/assets/blog-images/local-js-testing.png"
status: publish
permalink: how-to-load-local-js-files-on-live-production-sites
author: 
excerpt: "Debugging is faster when you can test your local files directly on live websites. Here is how you can do this using Requestly."
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

As Web developers, we often want to test our local changes directly on production websites - be it for debugging a production bug or for testing local changes before shipping code to production. Tools like Source Maps or Local Overrides don't often work in our setup. With Requestly, you can map your production files to local files on your machine in less than a minute.

In this article, we will cover how we can load a local version of jQuery on live StackOverflow website. 

Here's a demo video of loading local JS from your machine on production/live stackoverflow.com website.
<p align="center"> <iframe width="800" height="450" src="https://www.youtube.com/embed/85GVaOWTnlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </p> <br>


We've chosen a JavaScript file from StackOverflow.
We're using jquery.
<p align="center"> <img src="/assets/blog-images/stackoverflow.png" alt="Stackoverflow" width="800"/> </p>

Now we have a jquery.min.js which is being loaded from ajax.googleapis.com 

We already have a jquery downloaded in our machine which is the development version of 3.6.1. 
Unfortunately Chrome does not allow loading file based URLs on the live
website so we are using a simple HTTP server, for this we refer to http server (https://github.com/http-party/http-server) which is a node module and install this with command `npm install --global http-server`

Once installed, we're able to run HTTP server command on Terminal with a cors option enabled (`http-server --cors`)

<p align="center"> <img src="/assets/blog-images/terminal.png" alt="terminal" width="800"/> </p>

This will allow us to open all the contents of this directory over **localhost:8081**

Here we're able to access our jQuery over 127.0.0.1 which is equivalent to localhost.

<p align="center"> <img src="/assets/blog-images/url.png" alt="url" width="800"/> </p>

In our local jquery version, we added a custom console log statement just to verify that this script has been loaded in stack overflow.

<p align="center"> <img src="/assets/blog-images/consolelog.png" alt="console log" width="800"/> </p>

Now we head over to Requestly to configure this.

You can  configure a New Rule to modify any part of the traffic.
Requestly provides several modification capabilities like <a href="https://requestly.io/feature/redirect-url/" class="external-link" rel="nofollow"><u>setting up redirects</u></a> or <a href="https://requestly.io/feature/modify-query-params/" class="external-link" rel="nofollow"><u>changing the API or the endpoints,</u></a> <a href="https://requestly.io/feature/modify-request-response-headers/" class="external-link" rel="nofollow"><u>modifying headers,</u></a> <a href="https://requestly.io/feature/modify-response/" class="external-link" rel="nofollow"><u>modifying API responses.</u></a>

In our case, we use <a href="https://requestly.io/feature/redirect-url/" class="external-link" rel="nofollow"><u>Redirect Request.</u></a> 
Name the rule: <u>load jQuery from local machine</u> and specify that when URL contains jquery.min.js then redirect to our localhost version which is 127.0.0.1:8081/jquery-3.6.1js (localhost: 8081/\_\_) and Save!

<p align="center"> <img src="/assets/blog-images/redirect.png" alt="redirect" width="800"/> </p>

Now we go back  to StackOverflow and search for jquery, this time you can see our jQuery is loaded.

<p align="center"> <img src="/assets/blog-images/loaded.png" alt="loaded" width="800"/> </p>

Under 'Response' we  can see the console log.

In the console log we can find our custom statement written.

<p align="center"> <img src="/assets/blog-images/custom.png" alt="custom" width="800"/> </p>

With a single click, we can  deactivate this tool after we're done. 

**Pro tip: You can also pin the rule!** 

Once you pin the rule you can access your rule in the extension pop-up and directly enable or disable from there.

<p align="center"> <img src="/assets/blog-images/requestly-pin.png" alt="requestly" width="800"/> </p>

Hope this helps your testing & debugging workflows faster. If you don't use Requestly, you can download Requestly from [Chrome Web Store](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en) and [Download Page](https://requestly.io/downloads/) for other platforms/browsers.  

Happy Debugging 🚀

By <a href="https://www.linkedin.com/in/sachin-jain-20b20731" class="external-link" rel="nofollow"><u>Sachin Jain,</u></a> Founder & CEO.


