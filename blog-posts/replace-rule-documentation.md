---
title: "Replace Rule Documentation"
date: "2018-06-16T02:47:53+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: replace-rule-documentation
author: "Requestly Team"
excerpt: "`Replace Rule` is commonly used ruleType provided by Requestly. As the word `replace` indicates it allows users to replace a string (or matching pattern) with another string in the url. It looks to be very simple but it can achieve very complex use cases. Lets discuss some of them one by one."
type: post
id: 326
category:
  - Guides
  - Features
tag:
  - "chrome extension"
  - Regex
  - "replace rule"
  - Requestly
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "90"
_yoast_wpseo_primary_category:
  - "8"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

`Replace Rule` is commonly used ruleType provided by Requestly. As the word `replace` indicates it allows users to replace a string (or matching pattern) with another string in the url. It looks to be very simple but it can achieve very complex use cases. Lets discuss some of them one by one.

## Use Cases

### Switch Domains

**Situation:** Suppose you are working on a web app which fetches content from your REST API available at `http://my-app-server.com/rules`. You have cloned the API server, made some changes and running it locally on `http://localhost:4000/rules`. Now, you want to test your app with the new changes done on API server.

**Approach1:** Change the domain in your App code to hit `localhost` instead of `my-app-server`. Once your testing is done revert this change.

**Approach2:** Use Replace Rule Define a Replace Rule to replace `http://my-app-server.com`with `http://localhost:4000` in all URLs. No need to change url inside your code. After your testing, just disable the rule. As simple as that.

**![](/assets/blog-images/domain-switching-example.png)Chrome Store Feedback** Here is a review listed on Chrome Store about Replace Rule.

### ![](/assets/blog-images/chrome-store-feedback-adam.png)

### Change Query Parameter Values

You can change the values of query parameters present in Url. For example: Changing `?dl-0`to `?dl=1` in dropbox Urls downloads the file directly without going to the usual preview page. Such a simple use case of Replace Rule.

### Fix broken/updated Urls

Often you may find that links to some documentation or blog posts are changed but you have developed a typing habbit of old urls. Well, you can use replace rule to achieve that use case.

## Pattern Matching in Replace Rule

With all the use cases mentioned above, we know Replace Rule can be used to replace a string with another string in a Url. Apart from it, Replace Rule can also match a `JS Based Regex` in the Urls and you can replace them with another string. Please note in case of Regex pattern, you can also use the values of group expressions in your regex and use them in final strings. For Example:

### Example 1: Extract domain, pathName and extension for Urls ending with `.jpg`

```
/(https:\/\/[^\/]*)(.+)(\.jpg)$/i
```

- $1 is the value of 1st group expression. – DomainName
- $2 is the value of 2nd group expression – PathName but not file extension
- $3 is the value of 3rd group expression – File extension `.jpg` in this case

### Example 2: Strip out Query Parameters in a URL

```
Replace /(.+)(\?)(.+)/ig
With $1
```

- $1 is the value of URL before “?”
- $2 matches “?”
- $3 is your query string

Checkout this [Regex on regex101](https://regex101.com/r/nX7qM7/1) and try your use cases.

---

You can use [Regex 101](http://regex101.com/) for creating your Regex and try out various scenarios. For any further questions, please drop us a comment or open a bug on Github.

## Links

- [Requestly on Chrome Store](https://chrome.google.com/webstore/detail/requestly/mdnleldcmiljblolnjhpnblkcekpdkpa)
- [Regex 101](http://regex101.com/)
