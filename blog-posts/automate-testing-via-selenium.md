---
title: "Automate Testing via Selenium"
date: "2021-09-20T11:31:13+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: automate-testing-via-selenium
author: "Requestly Team"
excerpt: "While developing applications, we experience performance based on our home network and we optimize the performance with our network in reference. We fail to consider performance optimizations for situations where there could be an unstable network or low network coverage"
type: post
id: 21920
category:
  - Use Cases
  - Features
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

# The Why

At first, let us understand **WHY** do we need to test our application for different network conditions

While developing applications, we experience performance based on our home network and we optimize the performance with our network in reference. We fail to consider performance optimizations for situations where there could be an unstable network or low network coverage.

Testing our application for different network conditions helps us **optimize** our applications for them thus **improving** the overall **UX**.

Now, these can be done via the built-in dev tools' network tab in the browser, publicly available APIs that respond with delay, browser extensions that add delay to the network request, and other similar methods.

So what's the need to automate then?

Because automation is fun. Why do something manually when you can just automate that with a code snippet written taking a decade long time **" clears throat "**

![Awkward stares](https://media4.giphy.com/media/HP7mtfNa1E4CEqNbNL/giphy.gif)

# The How

Now, let's dive deep into the implementation.

### Let's get Automating!

![I'll get you automating](https://media0.giphy.com/media/l1KtYG8BndKBmWrM4/giphy.gif)

## Approach 1: Using Selenium Chromedriver API for Network Emulation

Since we're gonna use selenium, let's first install the selenium npm package

```
npm install selenium-webdriver
```

Run this on your project directory terminal and we've installed selenium as a dependency for the project

We also need the driver for the specific browser we're going to test our application on. In this blog, we'll be focusing on the Chrome browser. You can find the link to that [here](https://chromedriver.storage.googleapis.com/index.html)

Now that these are out of the way, let's get writing some code

![Finallyyy!](https://media0.giphy.com/media/Quh1CAKOTRCl9VVU3f/giphy.gif)

Let's start by importing few parts from the selenium package

```
const { Builder } = require("selenium-webdriver")
```

Now, let's write the function where the main code would stay

```
async function testApplication() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.setNetworkConditions({
    offline: false,
    latency: 5000, // Additional latency (ms).
    download_throughput: 50 * 1024, // Maximal aggregated download throughput.
    upload_throughput: 50 * 1024, // Maximal aggregated upload throughput.
  });

  driver.get("http://www.google.com/");
}
```

If we run this function, we would experience a slower speed than usual. But there are a few downsides to this code.

- It throttles the entire network and not a specific website

- You can't throttle a specific network request

Now let's find out how can we overcome these downsides with our next approach.

## Approach 2: Using Requestly's Selenium Package to Throttle Specific Network Request

The selenium package from [Requestly](https://requestly.io/) offers us the ability to create network request specific rules. We'll be discussing their Delay Network Request feature.

For using this package, we need to create a rule first in the Requestly client and then use that rule to delay any network request.

Head on to [requestly's application](https://app.requestly.io/) and click on the New Rule Button, a popup would open up showing the types of rules we can create. For the time being, select delay network request.

![Rules Popup](https://cdn.hashnode.com/res/hashnode/image/upload/v1631821223774/OQO1-OdGh.png)

Now add the URL of the network request you want to delay and add the delay time in milliseconds

![Add Rule](https://cdn.hashnode.com/res/hashnode/image/upload/v1631821353416/TJy5JuIOt.png)

Now we need to get the link to the rule so that we can use that to import the rule.

For that, click on Save Rule and then Share Rule. A popup would appear asking you to name the shared list where this rule would live in. Name it and click on create.

![Naming Shared List.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1631821960950/xRAsLubGU.png)

Now a popup with an option to copy the shared list link would appear. Copy that and keep it handy, we'd require it in our code.

![Copy Link Popup](https://cdn.hashnode.com/res/hashnode/image/upload/v1631822140085/4WQVTtliL.png)

![Phewwww!](https://media3.giphy.com/media/l3q2NdI5m0jrtwFpu/giphy.gif)

Phew, that was a lot! Now finally we get to implement it in our code.

![Yayyyy!](https://media4.giphy.com/media/tMUw5b0PF8SwAAE11c/giphy.gif)

Let's start by installing the dependencies and importing them into our project

```
npm install selenium-webdriver @requestly/selenium
```

```
require("chromedriver");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {
  getRequestlyExtension,
  importRequestlySharedList,
} = require("@requestly/selenium");
```

Now that we've all the dependencies into our project, let's create a variable to store our shared list link

```
const sharedListUrl = "YOUR_SHARED_LIST_LINK_HERE"
```

We now have all the components to write our function.

```
async function testApplicationViaRequestly() {
  const options = new chrome.Options().addExtensions(
    getRequestlyExtension("chrome") // This installs requestly chrome extension in your testing instance
  );

  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  await importRequestlySharedList(driver, sharedListUrl); // Here we import the shared list we created some time back
  driver.get("http://www.google.com/");
}
```

Now, if you try to run the function, you would have the exact behavior as before but with a lot more control over all the network requests and without any downside, we had before.

You, my friend, are a **power user** now 😉.
