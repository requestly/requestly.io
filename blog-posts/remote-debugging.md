---
title: "Remote Debugging with Requestly on Production sites"
coverImage: "/assets/blog-images/remote-debugging-banner.png"
date: "2022-07-21T20:43:59+05:30"
status: publish
permalink: remote-debugging
author: "Navdeep Singh Rathore"
excerpt: "Easily debug remote scripts without managing proxies. Use Requestly redirect Rule to swap out remote files with a locally served dev version."
type: post
id: 2175
category:
  - Use Cases
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---
# Remote Debugging of Javascript using Requestly
Ever wished that you could know how your changes worked in production without actually "deploying to production"?

Being able to edit remote code can be a huge time saver and I hope this article will help you see why. Using tools like [Requestly](https://requestly.io), you can follow your debugging routine (add console logs and use breakpoints) even on sites where you do not have the source code!

## Setting everything up

First, we will identify the request for our remote resource. You can use the chrome network tab for this. Search for the javascript or CSS file that you wish to debug. Click on the request log and copy the request URL, this will come in handy later.

![original-request-uri.png](https://d2365d0g6khx9l.cloudfront.net/blog/original-uri.png)

I have a debug version of the script served locally using a python server. The whole idea of remote debugging is to swap out the remote file with the local file. I have the launch script for adobe target that I found on [t-mobile.com](http://t-mobile.com) and I have also unminified it for convenience.

Now we will need to serve this file from a local server. You can easily do this with python or node. With python you can run the following command.

```bash
python3 -m http.server <port> --bind 127.0.0.1
```

Now that we have the url of the resource that we want to debug and an endpoint that serves our local copy of that resource, all we have to do is redirect the request on the production site from the original endpoint to the local endpoint.

If you haven’t already, [download the Requestly chrome extension](https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa) and create a [Redirect rule](https://requestly.io/feature/redirect-url/) from the create rule button on the [dashboard](https://app.requestly.io)

This just requires a simple redirect rule in Requestly. Click on **Create New Rule** on the top right and select the **Redirect Rule** 

In the source url, paste the original url (one that you previously copied) and in the destination enter the path to local file served from the python server. 

![requestly-redirect-rule.png](https://d2365d0g6khx9l.cloudfront.net/blog/redirect-rule.png)

Give your rule a name, and click save. 

You can also apply [advanced filters](https://docs.requestly.io/getting-started/features/source-filters) like host name matching or filtering based on resource type or request type by clicking on the small funnel icon. If you do it right, you will only need to specify the name of the file in the source field

![advanced-filters-demo.gif](https://d2365d0g6khx9l.cloudfront.net/blog/filters-demo.gif)

## Start debugging.

Now in the network tab, if you look for the same request it should look something like this

![redirect-network-log.png](https://d2365d0g6khx9l.cloudfront.net/blog/redirect-network-log.png)

This shows that the rule worked and now you are being served your local version of that file. But just be sure before you start debugging your site with this file, let us add a simple console log. 

![add-console-log.png](https://d2365d0g6khx9l.cloudfront.net/blog/add-console-log.png)

Now refresh the page and check the console. You will also notice the Requestly extension icon change colour whenever a rule is being applied

![end-result.png](https://d2365d0g6khx9l.cloudfront.net/blog/end-result.png)

## Conclusion

Now you can use all the chrome debugger tools like breakpoints and stack traces to debug this file. 

Requestly does a lot more than just [redirect routes](https://requestly.io/feature/redirect-url/). You can [modify headers](https://requestly.io/feature/modify-request-response-headers/), [modify responses](https://requestly.io/feature/modify-response/) and even [inject scripts](https://requestly.io/feature/insert-custom-scripts/).

If you found this useful, here are 5 more ways you can use Requestly to debug your web apps - [https://requestly.io/blog/5-ways-to-make-debugging-easy/](https://requestly.io/blog/5-ways-to-make-debugging-easy/)

*Happy Debugging*