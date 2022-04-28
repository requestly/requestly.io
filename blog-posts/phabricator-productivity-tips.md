---
title: "Phabricator Productivity Tips"
date: "2019-03-18T06:41:32+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: phabricator-productivity-tips
author: "Requestly Team"
excerpt: "In this article, we will share tips to boost your productivity with Phabricator tool. Phabricator helps you collaborate with your team members on tasks/issues, code reviews, discussions etc. It is one of the rich applications in market used by world wide enterprises."
type: post
id: 907
category:
  - Uncategorized
tag:
  - phabricator
  - productivity
  - tips
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "60"
_yoast_wpseo_primary_category:
  - "7"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

In this article, we will share tips to boost your productivity with Phabricator tool. [Phabricator](https://www.phacility.com/phabricator/) helps you collaborate with your team members on tasks/issues, code reviews, discussions etc. It is one of the rich applications in market used by world wide enterprises.

Phabricator uses the following convention/URL pattern to open task, diff or paste.

> Task – https://secure.phabricator.com/**T&lt;Task\_Number&gt;**  
> Diff – https://secure.phabricator.com/**D&lt;Diff_Number&gt;**  
> Paste – https://secure.phabricator.com/**P&lt;Paste_Number&gt;\*\*

Using, Requestly you can setup quick actions/shortcuts to open Tasks, Diffs and Pastes in phabricator when you search T&lt;Task_Number&gt; in your chrome/Firefox address bar. Here’s how to do it –

![](/assets/blog-images/Screenshot-2019-03-18-10.09.12.png)

## Explanation

1. Use Regex match to identify the Task/Diff/Paste number from Google Search Query
2. Redirect to corresponding Phabricator URL using Redirect Rule

Here is the exact definition for Task (If you prefer to copy paste)

```
Request Url -> Matches (Regex) -> /search\?q=T([0-9]+)/ig
Destination https://secure.phabricator.com/T$1
```

You can do the same for Diff and Paste.

## How to get/import above rule?

1. [Install Requestly](https://www.requestly.in/blog/2018/04/07/install-requestly-in-chrome-and-firefox/) if you have not done already.
2. Open <https://app.requestly.in/rules/#sharedList/1552883742989> (We have already created the rule so you can get the rule with single click)
3. Click on Import List button

That’s it. Hope this saves some keystrokes for you and you can use Phabricator with more ease now. Enjoy using Requestly and feel free to drop us hello at contact@requestly.in if you have any feedback.

If you love this article (and Requestly), please consider rate us on [Chrome Store](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en).

PS: This article is motivated by Superuser post – <https://superuser.com/questions/1414946/how-can-i-create-url-shortcuts-redirects-for-task-diff-ids-in-phabricator/1414947>
