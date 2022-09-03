---
title: "Install Latest Requestly in Firefox"
date: "2022-09-04T17:20:33+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: install-requestly-in-firefox
author: "Nafees Nehar"
excerpt: "This post covers installation guide for installing latest Requestly in Firefox"
type: post
id: 1403
category:
  - Guides
tag:
  - Extension
  - Firefox
  - Installation
post_format: []
hestia_layout_select:
  - default
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

To install the latest version of Requestly in Firefox, you can install it either in the standard version of Firefox or in the Firefox Extended Support Release. Please find the steps here.

> Download Requestly from [here]().

## To install Requestly (unverified) in Firefox standard version

1. Select `Add-ons` from the firefox menu.

![Modify Headers editor](https://d2365d0g6khx9l.cloudfront.net/blog/firefox-menu.png)

2. Select `Debug Add-ons` from the `Add-ons` Menu.

![Modify Headers editor](https://d2365d0g6khx9l.cloudfront.net/blog/firefox-debug-menu.png)

3. Select `Load Temporary Add-on` and install the `Requestly.zip` there.

![Modify Headers editor](https://d2365d0g6khx9l.cloudfront.net/blog/firefox-temp-addon.png)

**Note:** The temporary add-on will not persist across browser sessions. Therefore, it is recommended to signin so that you do not lose your rules.

## Install Requestly in Firefox Extended Support Release

To persist Requestly extension across browser sessions, you can use Firefox Developer edition or Firefox Nightly so that unverified extensions can be installed.

1. Go to Firefox configuration editor by typing `about:config` in the address bar.
2. Continue to the menu.
3. Search for `xpinstall.signatures.required preference` and turn it `false`.

![Modify Headers editor](https://d2365d0g6khx9l.cloudfront.net/blog/firefox-config-menu.png)

4. In the `Add-ons` menu, select `Install Add-on from File` and load `Requestly.xpi`.

![Modify Headers editor](https://d2365d0g6khx9l.cloudfront.net/blog/firefox-addon-file.png)

