---
title: "How to embed iframes by bypassing X-Frame-Options and frame-ancestors directive"
date: "2018-06-16T02:34:03+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: bypass-iframe-busting-header
author: "Requestly Team"
excerpt: "Any technique which prevents a website from being rendered inside Iframe comes under Iframe Busting Techniques. Due to Security issues like clickjacking, various types of Iframe busting techniques are used."
type: post
id: 325
category:
  - Guides
tag:
  - clickjacking
  - "iframe bursting"
  - Requestly
  - Trick
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "30"
_yoast_wpseo_primary_category:
  - "7"
_yoast_wpseo_focuskw:
  - "iframe busting"
_yoast_wpseo_linkdex:
  - "78"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

## Blockers in iframe embedding

Today's internet makes it quite difficult to add some content inside an `iframe` on an existing website. This is done to prevent security risks like [clickjacking](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet)

There are two main methods through which mordern websites achieve this are as follows

### X-Frame-Options

Some websites specify **X-Frame-Options** in the response header when they want to have control over wher there content can be embedded inside `iframe`.

There are two possible values for `X-Frame-Options`:

1. **DENY**: Browser will not render page inside frame irrespective of the domain of parent page.
2. **SAMEORIGIN**: Browser will render page inside iframe only if page domain is same as domain of parent page.

### frame-ancestors directive in CSP Header

Similar results can be achieved by setting the `Content-Security-Policy` to use [`frame-ancestors`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) directive

Using the `frame-ancestor` directive in the CSP headers, one can allow multiple sites as parents for the iframe as `Content-Security-Policy: frame-ancestors <source1> <source2>`

Here, the source can be one of the following

1. **URL** : Specify parent's source
2. **'self'** : Refers to the source from where the content is generated
3. **'none'** : Indicates an empty set. This has the same effect as specifying `X-Frame-Options` as DENY

<hr/>

But what if we need to open sites in iframes for internal tooling, experimentation purposes or development & testing scenarios?

## Remove Response Headers using Requestly

Requestly is a simple and 1-click solution using which you can bypass response headers and enable embedding sites in Iframe

Using the [modify headers rule](https://requestly.io/feature/modify-request-response-headers/), we can easily add, modify and remove any Response Headers before it reaches the browser.

You only need to install the [Requestly browser extension](https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa) and set this rule

![Modify headers rule](/assets/blog-images/iframe-bypass.png)

No further setup is required

You can also share this rule with your colleagues by creating a shared list like [this one](https://app.requestly.io/rules/#sharedList/1641985183764-Bypass-iframe-busting)

_Happy hacking_
