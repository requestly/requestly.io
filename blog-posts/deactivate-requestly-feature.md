---
title: "Deactivate Requestly Feature"
date: "2018-06-16T02:53:17+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: deactivate-requestly-feature
author: "Requestly Team"
excerpt: "You can Activate/Deactivate requestly with your right click on requestly icon present on Chrome toolbar. If you deactivate Requestly, your rules won’t be affected but they won’t be executed anymore"
type: post
id: 354
category:
  - Features
tag:
  - Chrome
  - Deactivate
  - Firefox
  - Requestly
  - RightClick
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "60"
_yoast_wpseo_primary_category:
  - "8"
---

<span>You can Activate/Deactivate requestly with your right click on requestly icon present on Chrome toolbar. If you deactivate Requestly, your rules won’t be affected but they won’t be executed anymore. Similarly, When you activate Requestly, your active rules will get starting to execute.</span>

## How to use

You can use<span> </span>_Right click_<span> </span>on requestly icon in toolbar to see the option to deactivate requestly. When requestly is deactivated, same option converts to activate requestly.

![image](https://app.requestly.in/content/images/deactivate-option-in-menu.png)

Snapshot of right click context menu

## How to know if Requestly is Deactivated

You can instantly know the state by looking the color of icon in toolbar menu.

![image](https://app.requestly.in/content/images/256x256_greyscale.png)  
Icon is grey color in deactivated state

## Is there any other way to deactivate Requestly

You can disable any extension on your Chrome browser by following steps:

1. Go to<span> </span>`chrome://extensions`
2. UnCheck<span> </span>`Enable`<span> </span>after Requestly
3. You can enable it later when you need.

This is a bit longer process. That’s why this feature is introduced with which you can deactivate Requestly with just single click.

## Implementation Details

For intercepting network requests, Requestly adds three types of listeners

1. [OnBeforeRequest](https://developer.chrome.com/extensions/webRequest#event-onBeforeRequest): Used in Redirect and Replace Rules
2. [OnBeforeSendHeaders](https://developer.chrome.com/extensions/webRequest#type-OnSendHeadersOptions): Used to Modify Request Headers
3. [OnHeadersReceived](https://developer.chrome.com/extensions/webRequest#event-onHeadersReceived): Used to modify Response Headers

So, when Requestly is deactivated all these listeners are unregistered. These listeners are registered again when user activates requestly.

Once User deactivates Requestly, this information is stored inside<span> </span>`chrome.sync.storage`<span> </span>So if User has deactivated Requestly on one machine, it would automatically deactivate on other synced Chrome browsers.
