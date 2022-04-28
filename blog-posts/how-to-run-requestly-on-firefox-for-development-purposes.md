---
title: "How to run requestly on Firefox for development purposes"
date: "2018-07-21T02:57:40+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: how-to-run-requestly-on-firefox-for-development-purposes
author: "Requestly Team"
excerpt: "Requestly development team use WebExtension APIs to build cross platform browser extension. This article is mainly intended for requestly development team to run the requestly source code on firefox"
type: post
id: 431
category:
  - Guides
tag:
  - Development
  - Firefox
  - Internal
  - NPM
  - WebExtension
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "30"
_yoast_wpseo_primary_category:
  - "6"
---

Requestly development team use WebExtension APIs to build cross platform browser extension. This article is mainly intended for requestly development team to run the requestly source code on firefox.

Install `web-ext` npm module

> npm install -g web-ext

Navigate to browser-extension source code and switch the mode to firefox

> cd components/browser-extension
>
> grunt select-firefox

Open a new terminal to run firefox with extension installed

> cd dist
>
> web-ext run

Use `web-ext –help` to get the list of available commands.
