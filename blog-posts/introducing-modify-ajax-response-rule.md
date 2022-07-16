---
title: "Introducing Modify AJAX Response Rule"
date: "2022-07-16T03:35:00+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: introducing-modify-ajax-response-rule
author: "Requestly Team"
excerpt: "We have always thought of building Requestly as a complete web debugging toolkit that enables, the developers, to easily modify the network requests. As the complexity of web applications started increasing, many developers suggested us to add an ability to modify the response as well"
type: post
id: 1880
category:
  - Announcements
  - Features
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "60"
layout:
  - sidebar-none
content_width:
  - full_width
_yoast_wpseo_primary_category:
  - "26"
---

We have always thought of building Requestly as a complete web debugging toolkit that enables, the developers, to easily modify the network requests. As the complexity of web applications started increasing, many developers suggested us to add an ability to modify the response as well. Today, we are excited to announce such a feature, _Modify Response Rule_.

With Modify Response Rule, you`ll now be able to modify the response body of AJAX requests.

<span class="wp-block-image size-large">![](https://requestly.io/assets/images/requestly-modify-response-rule.gif)</span>Similar to other Rules, this Rule will also allow you to specify advanced filters including the regular expressions.

An update to our browser extension has been rolled out and all you have to do is just make sure that your extension version matches the latest.

> If you want to use your modify response rules for network traffic in Android apps, use our [Android Debugger](/debug-android-apps/)

## Example Use Cases

- Test AJAX response without actually modifying backend
- Mock fluctuating AJAX responses
- Mock AJAX response to focus on front-end development even if back-end is not available.

## Using Modify Response Rule

Let`s consider we have a web app that requests some external resource using AJAX and processes the response to generate views.

![](/assets/blog-images/regular-response.png)Using DevTools, we can **find the data source**.  
In our example, it is: *https://canvasjs.com/data/gallery/jquery/daily-sales-data.json*

Let`s **create a Rule** to modify the response of AJAX request to this data source.

Navigate to your Requestly Dashboard and select **New Rule &gt; Modify AJAX Response**

Enter the **Source URL** (data source) and the **response body** we expect. You can also use JavaScript function to customize the response.

![](/assets/blog-images/rule-settings.png)**Save the Rule and reload** the web app. Now our web app will receive the modified response to the AJAX request.

![](/assets/blog-images/modified-response.png)That`s it. You can also check the modified response in the DevTools.

It is worth noting that Modify Response Rule does not have support for the `fetch() `API yet.
