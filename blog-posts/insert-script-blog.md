---
title: "Inserting scripts dynamically in a webpage"
date: "2022-11-24T02:53:17+05:30"
coverImage: "/assets/blog-images/insert-scripts-blog.png"
status: publish
permalink: inserting-scripts-dynamically-in-a-webpage
author: "Team Requestly"
excerpt: "Inject popular libraries or hosted scripts or execute custom code-snippet before or after page load using simple rule builder."
type: post
id: 358
category:
  - Guides
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "60"
_yoast_wpseo_primary_category:
  - "8"
---

Requestly brings you one of the most powerful tool which may prove to be replacement for many browser extensions.
Using "**Insert Scripts**" rule, you can make on-the-fly changes to a webpage content.<br>

*Inject popular libraries or hosted scripts or execute custom code-snippet before or after page load using simple rule builder.* <br>

If you love hacking, playing with automations, scraping, changing default website's behaviour and have some basic knowledge of JavaScript, there's a lot you can do here.

For example, remove/hide unwanted sections from page, add quick action buttons, add your own libraries to support your script, etc.

Every time the page is viewed, the specified script will be executed and changes will apply, thereby making the user experience seamless.
Similar to any other rules in Requestly, Script rules too can be setup to execute on one or more web pages simultaneously.

<h2>How to create a Script rule using Requestly? </h2>

* Install Requestly extension if you have not previously installed it.
* Click on requestly icon in browser toolbar or Open https://app.requestly.io/rules
* Click on Add (+) Icon to create a new Rule
* Click on "Insert Scripts" card.

<p align="center"> <img src="/assets/blog-images/select-rule.png" alt="Rule selection screen" width="900"/> </p>

<p align="center"> <img src="/assets/blog-images/sample-rule.png" alt="Insert Rule" width="900"/> </p>

Enter rule name, description and webpage source where the rule has to be applied.

Select libraries (from available options) you want to include in webpage in order to support your custom scripts.

Click "Add Custom Script" button to add custom scripts which can be of two types:
* **URL**- source of an external script
* **Code**- JavaScript code snippet

Please note that **Code** script has a size limit. For longer code, one must create script file in <u> **Requestly File Library** </u> and copy URL to **URL** type custom script.

Each custom script has an option to be either included **before page load** or **after page load.** This provides user more flexibility to achieve multiple use-cases.

The extension ensures that firstly all libraries are inserted as custom scripts might depend on them. After libraries, all scripts meant to be loaded *before page load* are executed and then all scripts meant to be loaded *after page load* in the same order as they were added in rule builder.

For security reasons, rules created by a user remains private to him/her unless he deliberately shares with other users.

If you have any query or feedback, please feel free to reach out to contact@requestly.io. We would love to respond to each of them.



