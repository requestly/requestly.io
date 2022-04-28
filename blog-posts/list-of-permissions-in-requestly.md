---
title: "List of Permissions in Requestly"
date: "2018-06-14T15:43:59+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: list-of-permissions-in-requestly
author: "Requestly Team"
excerpt: "Browser extensions play an important role in user’s daily browsing activity and other interactions with browser. Believe it or not, everyone has a list of favourite browser extensions and rarely you will find someone with no extensions installed in his browser. Essentially, browser extensions make your browsers more powerful and feature rich."
type: post
id: 289
category:
  - Uncategorized
tag:
  - Chrome
  - Extensions
  - Permissions
  - Security
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "30"
_yoast_wpseo_primary_category:
  - "7"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

Browser extensions play an important role in user’s daily browsing activity and other interactions with browser. Believe it or not, everyone has a list of favourite browser extensions and rarely you will find someone with no extensions installed in his browser. Essentially, browser extensions make your browsers more powerful and feature rich.

You may have heard of this popularly known quote:

> **With Power Comes Responsibility**

The same holds true here. As helpful and powerful browser extensions are, they can be a bit dangerous as well So it is very important to review and question the list of permissions asked by them.

In this article, we are explaining all the permissions required by [Requestly](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa) and how we use it.

## Permissions in Requestly

![](/assets/blog-images/1_lIh0W5j10gVqEHkeWFgaVA.png)

#### ContextMenus

This permission is required to add an item in chrome contextMenu. Requestly provides a feature to toggle Requestly with Right Click and hit Deactivate. You can read [more about it here.](http://app.requestly.in/content/documentation/introducing-activate-deactivate-feature/)

#### Storage

[Storage permission](https://developer.chrome.com/extensions/storage) is required to store something in chrome storage.Most Users love Requestly because their rules are stored in Chrome itself and not on Requestly servers. This enhances their trust factor in it.

#### WebRequest, WebRequestBlocking

[WebRequest permission](https://developer.chrome.com/extensions/webRequest) is required to intercept network requests and modify them. If you have ever used Requestly, you know sense that this permission is the heart of Requestly. Because Requestly modified network requests based on User’s rules.

#### Tabs

[Tabs permission](https://developer.chrome.com/extensions/tabs) is required to obtain page url for a given tab. This is used to redirect page urls as per user’s rules and especially used in [UserAgent Rule.](https://www.requestly.in/blog/2018/06/14/useragent-modification-rule/)

Feel free to reach out to <requestly.extension@gmail.com> for any concerns you have while using Requestly. We love every feedback on Requestly and respond to everyone. Let us know in comments if you have any more questions.
