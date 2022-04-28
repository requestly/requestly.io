---
title: "Try out Crisp on Amazon in less than 30 seconds!"
coverImage: "/assets/blog-images/cover.png"
date: "2022-01-21T11:31:13+05:30"
status: publish
permalink: trying-out-crisp-on-amazon
author: "Shrey Gupta"
excerpt: "Trying out SaaS apps on a website is time and effort taking. Here is how Requestly comes to rescue!"
type: post
id: 2172
category:
  - Use Cases
  - Founders
  - Product Managers
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

Discovering new apps is easier than ever. There are almost infinite apps that could be used for a particular task. Product developers often need to find a way out to try and test these apps with bare minimum effort and then finalize an app they are comfortable with and want to integrate.

The traditional time and effort consuming way of doing this is by trial and error, where developers integrate a tool with the app via making alterations in the codebase and then testing things out. Now let me introduce you to a cool way of doing this. What if I say that you can try and test out different SAAS apps and tools without even modifying a single line of your codebase?

This is exactly what **Requestly** can help you out with!

Using [Requestly](https://requestly.io/), you can directly insert the custom script/installation code that you get for integration from the 3rd party app and test it on the website from the browser itself. Since no coding and development effort required, even product managers can use Requestly like a breeze. Users can collaborate with fellow developers and clients by easily sharing their rules.

Suppose you wish to integrate a chatbot into your website and are confused among some excellent options available for use. You can easily insert installation scripts for different chatbots in your website via Requestly and test them out.

## See how this works!

Let’s see how this works with an example by trying out Crisp chat on Amazon.

<p align="center">
<iframe width="900" height="506.25" src="https://www.youtube.com/embed/yVgOcKv2rjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<<p>

1.  Create a new rule.
    ![New Rule](/assets/blog-images/new_rule.png)

2.  Select Insert Scripts rule type to open the rule editor.
    ![Insert Script rule](/assets/blog-images/insert_script.png)

3.  Add the rule name, description and define the rule conditions. Insert the installation code in the response body.
    ![Rule Details](/assets/blog-images/rule_snippet.png)

        You can use this istallation code for testing purposes:

```
        window.$crisp=[];
        window.CRISP_WEBSITE_ID="1c7370cc-6ff1-446f-89fa-9769ac56b756";
        (function(){
          d=document;
          s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);
        })();
```

4. Save this rule, and that’s it!
   You can now try out the SaaS app on the desired website, i.e. Amazon.com in our case.
   ![Test Crisp on Amazon](/assets/blog-images/test_crisp.png)

## Easy, right?

You can try out various SaaS apps including **Crisp, ConvertFlow, HubSpot, Beamer, Typeform, Wisepops, Drift and HotJar** to name a few.
<br>Learn more about other integrations [here](https://requestly.io/blog/), and try out Requestly now!

Download Requestly for free [here.](https://requestly.io/downloads/)

Written by [Shrey](https://www.linkedin.com/in/gupta-shrey/), Building Product at Requestly.

</span>
</span>
