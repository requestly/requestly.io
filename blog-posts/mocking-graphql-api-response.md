---
title: "Mocking graphQL APIs response"
date: "2022-07-16T20:43:59+05:30"
coverImage: "/assets/blog-images/2022/02/01/graphql-banner.png"
status: publish
permalink: mocking-graphql-api-response
author: "Requestly Team"
excerpt: "Browser extensions play an important role in user’s daily browsing activity and other interactions with browser. Believe it or not, everyone has a list of favourite browser extensions and rarely you will find someone with no extensions installed in his browser. Essentially, browser extensions make your browsers more powerful and feature rich."
type: post
id: 5571
category:
  - Use Cases
  - Guides
tag:
  - Chrome
  - GraphQL
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "30"
_yoast_wpseo_primary_category:
  - "7"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

Graphql has completely changed the way APIs are used to fetch data. The simplicity and entity based architecture ensures support for complex querying

But what should a developer do when he is waiting for the api to change or when the api is completely down for some reason? Spinning up a local instance seems quite a hassle and waiting till things get fixed is wasted dev time.

But you just want some data. Wasn’t graphql supposed to be simple?

We have tried to solve this by providing a proxy that can effectively target graphql queries. Using simple rules you can modify and provide custom data to your graphql requests, _without pushing any hacky code_ into your repo. You neither change the request query nor the server schema.

Too good to be true? It’s not!

But first we will have to understand how a graphql query is actually processed.

## Graphql is just HTTP with a zing ⚡

Graphql might seem like a new way to make API request, but under the hood it uses simple http.

> 💡 Official documentation - https://graphql.org/learn/serving-over-http/

A graphql request can be send in one of two ways

### Get request

If graphql is sent using a get request, the graphQL query string is passed in as search parameters to the endpoint. So the following query

```
{
  hero {
    name
  }
}

```

Is converted into a GET request to `http://domain.com/graphql_endpoint?query={hero{name}}`

### Post request

For a post request, the concept remains the same. The query string, variables and even oprerationName (this will be important later) are passed in the request body as payload. The schema is as follows

```
{
  "query": "query {\n  hero {\n    name\n  \n} \n}",
  "operationName": "GetMyHero",
  "variables": { "superpower": "heroic", ... }
}
```

### Response

Regardless of the method used, the response always follows a common format. The server returns a json object with the following schema

```
{
  "data": { ... },
  "errors": [ ... ]
}

```

## Using Requestly to modify your graphql requests in production.

With this newly acquired understanding of how graphql works, you can now use Requestly to specifically target graphql queries and modify the result that they return using the [Modify Response Rule](https://requestly.io/feature/modify-response/)

We can target the query that is sent using the [Request Payload](https://requestly.io/feature/modify-response/) filter

> If you want to debug graphql requests in Android apps, use our [Android Debugger](/debug-android-apps/)

### Targeting the request - OperationName

Most big sites use _operation name_ and _operation type_ to write less ambigious queries inside code. This is done for verbose and grep*-able* server \*\*logs.

In the example query below the operation type is **query** and operation name is **JackSparrow**

```
query JackSparrow {
  hero {
    name
  }
}
```

Luckily for us, the generated http request sends `operationName` as an attribute in the payload for the graphQL request.

> 💡 You can read more about this here - [graphql.org/learn/queries/#operation-name](https://graphql.org/learn/queries/#operation-name)

## 🔥 Live Example - changing the AdUrl on stackshare.io

Stackshare shows a banner Ad on the side of their pages for each tool. Under the hood, the data for these like the ad banner, CTA and target url are all requested from a graphql endpoint.

Let’s try to change the targetURL of these ads using the **Modify Resoponse Rule.**

> 💡 tldr: skip to the end of the steps and use the link to import the rule

1. Download the Requestly desktop app or use the browser extension
2. Click on create rule and create a new modify response rule
3. Give the Rule a name and in the target url type `[stackshare.io/graphql](http://stackshare.io/graphql)`
4. Click the small funnel next to the URL to add a filter. We will be adding a Request Payload Filter
5. Provide the key as **operationName** and value as **advert**

   ![Request Payload filter](/assets/blog-images/2022/02/01/request=payload-filter.png)

6. Once that is done, click on the option just below labelled **Programmatically(JS Script).** This lets us modify the response using Javascript
7. Paste the following code into the text area

   ```jsx
   function modifyResponse(args) {
     const {
       method,
       url,
       response,
       responseType,
       requestHeaders,
       requestData,
       responseJSON,
     } = args;
     let newResponse = responseJSON;
     newResponse.data.advert.targetUrl = "https://twitter.com/requestlyio";
     return JSON.stringify(newResponse);
   }
   ```

8. Save the rule and make sure it is turned on
9. Go to any tools page, eg. - [stackshare.io/graphql](https://stackshare.io/graphql) . Click on the ad that appears on the side (_hopefully your adbloacker let’s us continue with our experiment_ 😆 🤞🏻)

Now every ad you see on stackshare will lead you to twitter. While you are there maybe give that account a follow😉

But if you just skipped through all the above steps, here is a link that lets you directly import the rule.

[Click to import rules](https://app.requestly.io/rules/#sharedList/1643718676532-Modify-GraphQL-Response)

> There is another rule in there that hijacks the search results for when you search for graphql on google. Turn that on and try it yourself.

    **Disclaimer:** *You have been warned!*

_Happy hacking!_
