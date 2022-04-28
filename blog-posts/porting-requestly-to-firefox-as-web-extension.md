---
title: "Porting Requestly to Firefox as Web Extension"
date: "2018-06-16T02:52:44+05:30"
status: publish
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
permalink: porting-requestly-to-firefox-as-web-extension
author: "Requestly Team"
excerpt: "Requestly is a beautiful chrome extension for modifying network requests. It has hit the ground hard and announced its presence in market sound and fair. Its usage has grown tremendously over last few months."
type: post
id: 348
category:
  - Guides
tag:
  - Chrome
  - Extension
  - Firefox
  - Port
  - Requestly
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "30"
_yoast_wpseo_primary_category:
  - "6"
---

## Introduction

Requestly is a beautiful chrome extension for modifying network requests. It has hit the ground hard and announced its presence in market sound and fair. Its usage has grown tremendously over last few months. As of March 2016,<span> </span>[Chrome store shows<span> </span>_7.5K users_](http://bit.ly/requestly-chrome-store). Due to simple interface with infinite possibilities it is becoming popular among web devs for testing and debugging purposes. I have received multiple requests for developing Requestly on Firefox. It was certainly not easy to build Requestly with Firefox Add-On APIs but the support of<span> </span>[Web Extension APIs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)<span> </span>in Firefox has made the job easy. This article is the first step in direction for porting Requestly to Firefox.

## Analysis of Chrome APIs Incompatibilities

1. **Content Scripts**: Supported
2. **Background Scripts**: Supported
3. **Storage API**: Partially Supported with following road blockers:

- `chrome.storage.sync`<span> </span>is not supported. We can use ‘chrome.storage.local` for the time.
- `chrome.storage`<span> </span>is not accessible in Content Scripts.<span> </span>[Bugzilla Link](https://bugzilla.mozilla.org/show_bug.cgi?id=1197346)

4. **NameSpacing**: Currently all APIs are accessible through<span> </span>`chrome.*`<span> </span>but later on this will be moved to<span> </span>`browser.*`

- Does not require immediate change but we may have to modularize the code using browserify and instantiate different packages for different browsers

5. **Packaging**: Firefox needs<span> </span>`xpi`<span> </span>extension instead of<span> </span>`zip`.

- This is in roadmap that webextensions should be accepted as zip but initially we may have to rename zip to xpi before uploading to FF store.

6. **Tabs**: Partially Supported for our needs.

- In Firefox, you need the<span> </span>`tabs`<span> </span>permission if you want to include url in the queryInfo parameter to<span> </span>`tabs.query()`

7. **webRequest**: Partially supported but meets our needs.

- In Firefox requests can be redirected only if their original URL uses the http or https scheme

8. **Manifest**:<span> </span>[Firefox manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/applications)<span> </span>has mandatory<span> </span>`applications`<span> </span>key and we can’t use this in chrome extensions.

- We need to maintain two different manifest files for chrome and browser and build system should pick them as per browser.

9. **Context Menus**:<span> </span>[Partially supported](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus#Chrome_incompatibilities).<span> </span>`page_action`<span> </span>and<span> </span>`browser_action`<span> </span>are not supported.

- We need to change<span> </span>`browser_action`<span> </span>to<span> </span>`all`<span> </span>for the time this is supported in firefox.

For More details, Refer<span> </span>[Mozilla documentation on chrome APIs Incompatibilities](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities)

## Links

1. [Mozilla Web Extension Wiki](https://wiki.mozilla.org/WebExtensions)
2. [Porting Chrome Extension to FF Web Extension](https://hacks.mozilla.org/2015/10/porting-chrome-extensions-to-firefox-with-webextensions/)
3. [Requestly Github Issue](https://github.com/requestly/chrome-extension/issues/91)
