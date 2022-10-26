---
title: "How to load local Javascript files on live Production websites"
date: "2022-10-26T20:13:18+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: how-to-load-local-javascript-files-on-live-production-websites
author: "Requestly Team"
excerpt: "Debugging is faster when you can test your local files directly on live websites. Here is how you can do this using Requestly."
type: post
id: 716
category:
  - Guides
tag:
  - debugging
  - Chrome
  - domains
  - Extension
  - Privacy
post_format: []
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

Debugging is faster when you can test your local files directly on live websites. Here is how you can do this using Requestly.

For this demonstration, We've chosen a JavaScript file from StackOverflow.
here, we're using jquery.

![stackoverflow](/assets/blog-images/stackoverflow.png)

Now we have a jquery.min.js which is being loaded from ajax.googleapis.com 

We already have a jquery downloaded in our machine which is the development version of 3.6.1. 
Unfortunately Chrome does not allow loading file based URLs on the live
website so we are using a simple HTTP server, for this we refer to http server (https://github.com/http-party/http-server) which is a node module and install this with command `npm install --global http-server`

Once installed, we're able to run HTTP server command on Terminal with a cors option enabled (`http-server --cors`)

![terminal](/assets/blog-images/terminal.png) 

This will allow us to open all the contents of this directory over **localhost:8081**

Here we're able to access our jQuery over 127.0.0.1 which is equivalent to localhost.

![url](/assets/blog-images/url.png)

In our local jquery version, we added a custom console log statement just to verify that this script has been loaded in stack overflow.

![consolelog](/assets/blog-images/consolelog.png)

Now we head over to Requestly to configure this.

You can  configure a New Rule to modify any part of the traffic.
Requestly provides several modification capabilities like setting up redirects or changing the API or the endpoints, modifying headers, modifying API responses.

In our case, we use Redirect Request. 
Name the rule: <u>load jQuery from local machine</u> and specify that when URL contains jquery.min.js then redirect to our localhost version which is 127.0.0.1:8081/jquery-3.6.1js (localhost: 8081/\_\_) and Save!

![redirect](/assets/blog-images/redirect.png)

Now we go back  to StackOverflow and search for jquery, this time you can see our jQuery is loaded.

![loaded](/assets/blog-images/loaded.png)

Under 'Response' we  can see the console log.

In the console log we can find our custom statement written.

![custom](/assets/blog-images/custom.png)

With a single click, we can  deactivate this tool after we're done. 

Pro tip: You can also pin the rule! 
Once you pin the rule you can access your rule in the extension pop-up and directly enable or disable from there.

![requestly](/assets/blog-images/requestly-pin.png)

We hope this helps! 

Install the extension now from the [Chrome Web Store](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en)!
