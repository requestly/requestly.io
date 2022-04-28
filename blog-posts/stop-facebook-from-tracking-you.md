---
title: "Stop facebook from tracking you"
date: "2018-11-19T05:48:33+05:30"
status: publish
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
permalink: stop-facebook-from-tracking-you
author: "Requestly Team"
excerpt: "Privacy is a myth in internet world but we must do whatever it takes to protect us from internet giants tracking us. In this article, we are going to help you setup a Requestly rule which you can use directly to stop Facebook from tracking you."
type: post
id: 623
category:
  - Guides
tag:
  - BlockFacebook
  - Chrome
  - Facebook
  - Privacy
  - Tracking
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_focuskw:
  - "facebook, blocking, tracking"
_yoast_wpseo_linkdex:
  - "60"
_yoast_wpseo_content_score:
  - "90"
_yoast_wpseo_primary_category:
  - "72"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

Privacy is a myth in internet world but we must do whatever it takes to protect us from internet giants tracking us. In this article, we are going to help you setup a Requestly rule which you can use directly to stop Facebook from tracking you.

### Get the rule

1. Please [Install Requestly extension](https://www.requestly.in/blog/2018/04/07/install-requestly-in-chrome-and-firefox/) if you do not already have Requestly in your chrome and Firefox browsers.
2. Once Requestly is installed, Open [Disable Facebook Tracking Requestly Rule](https://app.requestly.in/rules/#sharedList/1542185125462) in new tab.
3. Click on `Import List` button to get the rule.
4. Once you import the rule, you can modify(add/remove) the rule as per your use case.

### Detailed Explanation – Disable Facebook Tracking

#### Compile Tracking URL Patterns

At Requestly, we compiled a list of url patterns used by [CDNs](https://en.wikipedia.org/wiki/Content_delivery_network) of various facebook products like [whatsapp](https://play.google.com/store/apps/details?id=com.whatsapp), [instagram](https://www.instagram.com), [facebook](http://facebook.com) etc.

Here is the list of patterns which facebook uses to track you:

1. facebook
2. fbsbx
3. bcdn
4. instagram
5. tfbnw
6. whatsapp
7. cdninstagram
8. facebook-web-clients
9. fbcdn-profile-a
10. instagramstatic-a
11. fb

#### Setup Cancel/Blocker Rule

Requestly has a `Cancel Rule` ([Read about all rule types here](https://medium.com/@requestly_ext/different-rule-types-in-requestly-924b49c488a4)) which can be used to block urls to load in your browser. Requestly has a very intuitive interface using which you can setup a Cancel rule within seconds. We setup a Cancel rule to block the URLs by doing wildcard matching with the filtered list of domains that we have created.

Yep! It’s that simple.

#### ![](/assets/blog-images/Screenshot-2019-02-02-14.09.18.png)More about DYK Series..

This is our first article in the [DYK (Do you know Requestly) series](https://www.requestly.in/blog/category/dyk-series-1/). We will continue with this series for a new sets of articles in the future. Please follow our twitter handle [@requestly_ext](https://twitter.com/requestly_ext) or you can also get the updates via email by [subscribing here](https://www.requestly.in/#subscribe)
