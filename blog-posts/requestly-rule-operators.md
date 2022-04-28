---
title: "Requestly Rule Operators"
date: "2018-06-15T00:57:46+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: requestly-rule-operators
author: "Requestly Team"
excerpt: "When you create a modification rule, you will find the following operators – Equals, Contains, Matches (Regex), Matches (Wildcard). In this article, we explain these operators and use cases."
type: post
id: 300
category:
  - Guides
tag:
  - Operators
  - Regex
  - Requestly
  - Rule
  - Wildcard
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "30"
_yoast_wpseo_primary_category:
  - "8"
---

When you create a modification rule, you will find the following operators – Equals, Contains, Matches (Regex), Matches (Wildcard). In this article, we explain these operators and use cases.

## Equals Operator

Equals operator does strict matching of Url intercepted by Chrome with the Url given in rule.

> Please note that when you open `www.example.com` in browser, url intercepted is `www.example.com/`. **Note a trailing ‘/’ slash at the end of Url.**  
> So a rule with Equals operator and Url as www.example.com does not match www.example.com/. So consider adding Slash (‘/’) at the end of url in your rule. You can alternatively create two pairs in the same rule as well.

Example:

<div class="highlighter-rouge">
<pre class="highlight"><strong>Url given in Rule</strong>: http://www.google.com
<strong>Intercepted Url</strong>: http://www.google.com/
<strong>Result</strong>: Does not match (Observe trailing slash)
</div>

## Contains Operator

Contains operator does a substring search of string provided in rule inside the Url intercepted by Chrome.

Example1:

<div class="highlighter-rouge">
<pre class="highlight">
<strong>String in Rule</strong>: yahoo
<strong>Intercepted Url</strong>: https://www.yahoo.com/
<strong>Result</strong>: Match

</div>

Example2:

<div class="highlighter-rouge">
<pre class="highlight">
<strong>String in Rule</strong>: com?a=1
<strong>Intercepted Url</strong>: https://www.got.com?a=2
<strong>Result</strong>: Does Not Match
</pre>

## Regex Match Operator

Regex Match Operator matches a given Regex with the Url intercepted by chrome. **You can also use the values of group expressions in your destination Urls.**

Example:

<div class="highlighter-rouge">
<pre class="highlight">
Url Matches (Regex) /(.+)\.google/ig
Destination https://$1.google.com

</div>

In this case, above regex will be matched with intercepted Url. If regex is matched then $1 will be replaced in the destination Url and redirect happens to destination url.

## Wildcard Match Operator

Wildcard match operator matches expression with the Url intercepted by chrome. We only support asterisk (`*`) as wildcard operator. `*` **can match 0 or more characters in intercepted url.** Please note that in wildcard match, complete url is matched with given expression and \*’s can be replaced with respective values in destination Url.

Example 1:

<div class="highlighter-rouge">
<pre class="highlight">
Expression: *://*.yahoo.com
Url: http://cricket.yahoo.com
Result: $1 = http, $2 = cricket

</div>

Example 2:

<div class="highlighter-rouge">
<pre class="highlight">
Expression: *yahoo
Url: http://www.yahoo.com
Result: Does not match. <strong>Note the trails does not match
</strong>

</div>

Example 3:

<div class="highlighter-rouge">
<pre class="highlight">
Expression: *yahoo*
Url: http://www.yahoo.com
Result: $1 = http://www. $2=.com

</div>

Example 4:

<div class="highlighter-rouge">
<pre class="highlight">
Expression: http://*.yahoo.com
Url: http://cricket.yahoo.com/
Result: Does not match (<strong>Observe the trailing slash in Url</strong>)

</div>Thank you for reading this document. Please let us know in comments if something needs to be improved.

</div></div>
