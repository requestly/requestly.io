---
title: "Query Params Rule Documentation"
date: "2018-04-07T10:32:20+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: modify-queryparams-rule-documentation
author: "Requestly Team"
excerpt: "Query Parameters is important part of URL. When you want to pass data in HTTP Get request, that data is sent in the form of query params. Thus QueryParam rule can be extremely useful to test server’s behaviour with different query parameter."
type: post
id: 1402
category:
  - Guides
  - Features
tag:
  - QueryParams
  - Request
  - RequestlyRule
  - URL
post_format: []
hestia_layout_select:
  - full-width
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

## Introducing Query Param Rule

Modification of query parameters is one of the most popular feature requests we have received after [script execution](https://medium.com/@requestly_ext/inserting-scripts-dynamically-in-a-webpage-be4af90da20a) feature. We are very excited to announce the release of QueryParam as a new rule type. If you are not able to see QueryParam rule type, please update your extension [by following this guide](https://medium.com/@requestly_ext/how-to-update-chrome-and-firefox-extensions-manually-29de9798f646).

## Use Cases

Query Parameters is important part of URL. When you want to pass data in HTTP Get request, that data is sent in the form of query params. Thus QueryParam rule can be extremely useful to test server’s behaviour with different query parameter. Query Params Rule can be used to perform the following modifications on a given url:

1. RemoveAll parameters.
2. Add parameter.
3. Remove a specific parameter.

## How to Create Query Param Rule

Please follow these steps to create Query Params rule in Requestly.

### Click on Add Icon present in toolbar on [Rules Page](https://app.requestly.in/rules/)

![](/assets/blog-images/Screenshot-2018-04-07-15.50.19-1.png)

### Select Query Param Rule

Since Requestly supports multiple rule types, when you click on Add Icon, it takes you to [Rule Type selection page.](https://app.requestly.in/rules/#selectRule) Click on Query Param Rule Card to create a new Query Param Rule.

![](/assets/blog-images/Screenshot-2018-04-07-15.55.49.png)

### Create Query Param Rule

Based on your use case, you can populate different fields in Rule Editor. For Example, In this case we are adding dl=1 param to urls which contain dropbox.com

![](/assets/blog-images/Screenshot-2018-04-07-16.00.19.png)

## Examples

##### Example 1 — Add Parameter “c” when url contains “foo”

![](/assets/blog-images/QueryParam_example_1-1.png)

##### Example 2 — Remove All params and then add parameters “a” and “b” when url contains “example”

![](/assets/blog-images/QueryParam_example_2-1.png)

## FAQ

**Q1.** If I add a parameter by QueryParam rule and the same parameter already exists in the given url, will Requestly overwrite the parameter value ?  
**Ans:** Yes, Requestly will overwrite the value present in the url to the value given in the rule. For example:

> **Rule Definition:**  
> Url Contains example.com  
> Add Param “a” Value “200”

When Requestly gets above query param rule definition and the request url is [http://www.example.com?a=100](http://www.example.com/?a=100), then it will change the param value to 200 as per the rule and the new url will be [http://www.example.com?a=200](http://www.example.com/?a=100)

**Q2**. What is the difference between “Remove” and “RemoveAll” ?  
**Ans**: RemoveAll will remove all the parameters while Remove will remove only provided parameter.

That’s all to cover in this article. Feel free to reach out to us for any questions you have. Drop a comment if you have any suggestions to improve this post.
