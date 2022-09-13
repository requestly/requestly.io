---
title: "Link & Execute JS hosted on Github"
date: "2018-06-16T03:13:17+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: execute-js-hosted-on-github
author: "Requestly Team"
excerpt: "Github is a well known online project hosting service. Users checkin their scripts, stylesheets and other file types as part of their project. Sometimes, We need to refer the scripts present on github in any other project"
type: post
id: 363
category:
  - Guides
tag:
  - headers
  - Requestly
  - Trick
  - usecase
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "60"
_yoast_wpseo_primary_category:
  - "6"
_yoast_wpseo_focuskw:
  - github
_yoast_wpseo_linkdex:
  - "32"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

Github is a well known online project hosting service. Users checkin their scripts, styleshets and other file types as part of their project. Sometimes, We need to refer the scripts present on github in any other project. This article explains how you can achieve this use case with the help of Requestly using a very simple trick.

## Explanation – Why raw github urls don’t work?

We analyzed the response headers set by github when serving `raw.githubusercontent.com/<file_path>` files. We tried to open a very simple [JS file hosted on github](https://raw.githubusercontent.com/sachinjain024/practicebook/master/web-extensions-master/storage/background.js) with the following contents:

```
var BG = BG || {};
BG.Methods = BG.Methods || {};
```

We found that Github sends `X-Content-Type-Options` response header which prevents modern browsers to estimate the mime type of content. Hence, browsers render the raw github files as plain text.

## Solution

Using [Requestly](https://chrome.google.com/webstore/detail/requestly/mdnleldcmiljblolnjhpnblkcekpdkpa), Users can modify request and response headers. We tried removing `X-Content-Type-Options` response header using Requestly which did the trick. Just as simple as that.

Here is a screenshot of the rule:

## ![](/assets/blog-images/remove-x-content-type-header.png)Steps

1. [Install Requestly](https://requestly.io/downloads/) for your browser
2. Open [Rules Page](https://app.requestly.in/rules)
3. Click create rule & select Modify Headers in source field, enter `Url` -&gt; `Contains` -&gt; `raw.githubusercontent.com`
4. In Response Headers section, `Remove` -&gt; `X-Content-Type-Options`

## How to test

We created a simple JS Fiddle to test out if we can use raw github files as scripts in our code. Here is the [Fiddle](https://jsfiddle.net/1uc9t2cw/) with the following code

```html
<center id="msg"></center>

<script src="https://raw.githubusercontent.com/sachinjain024/practicebook/master/web-extensions-master/storage/background.js"></script>
<script>
  try {
    if (typeof BG.Methods !== "undefoned") {
      document.getElementById("msg").innerHTML =
        "Script evaluated successfully!";
    }
  } catch (e) {
    document.getElementById("msg").innerHTML = "Problem evaluating script";
  }
</script>
```

If you see `Script evaluated successfully!`, It means you are able to use raw github file in your code Otherwise `Problem evaluating script` indicates that there is some problem while executing script from raw github source.

## References

- [Stackoverflow: Link and execute external Javascript file hosted on Github](http://stackoverflow.com/q/17341122/816213)
