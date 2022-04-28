---
title: "⚡5 Ways to make App & Web Debugging extremely easy⚡"
coverImage: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jtu7vcdk6o5eerad73bi.jpg"
date: "2022-03-07T11:31:13+05:30"
status: publish
permalink: 5-ways-to-make-debugging-easy
author: "Requestly Team"
excerpt: "So you're developing an app or a website and there's that dreaded debugging that you fear is going to be a time sink, stealing your focus away from development and forcing you to spend time fixing bugs, issues and testing."
category:
  - Guides
---

So you're developing an app or a website and there's that dreaded debugging that you fear is going to be a time sink, stealing your focus away from development and forcing you to spend time fixing bugs, issues and testing.
Well, it's a pain-point for sure and sometimes there's no need for things to be more complicated than they already are. In this article, I'm going to tell you 5 ways you can supercharge your debugging experience and makes things easier, so that you can focus more on the things that matter while making debugging a breeze.

In this short guide, we'll be taking a look at Requestly, which is a tool built for intercepting and modifying HTTP(s) requests. The greatest strength of Requestly lies in the fact that the tool is stupid simple to use with a beautiful and clean UI, no distractions or annoying popups and the best part? It's free to use!

As a developer you must have dabbled with API debugging before and you already know how hard it can be sometimes. Requestly makes everything easier for you by making sure that the requests and responses that you are going to manipulate are listed clearly in a tidy manner so that you don't need to go through long lists of error messages or requests to find the exact problem you're looking for. So, that's what's Requestly's about and now we'll see how to make good use of the tool to supercharge your development workflow.

## 1. Redirecting Production to Local Environment

Have you ever had the need for testing local API changes but you're unsure how to test them as if they were deployed in production? This is going to be simpler than you imagine. Requestly comes with a **Redirect Rule** feature that lets any network requests for a particular URL be migrated to the one you specify.

It's extremely simple to use and all you need to do is open up Requestly and click on the **HTTP Rules** button and click **New Rule** button. After that, select Redirect Rule and we're in!
![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fr5edl2jqnj6tbsbrlhv.png)

Now you can easily put your production URL first and then mention the localhost path to the code you're trying to test. This will instantly forward all requests to your production path to your local path. You didn't expect this to be this easy, did you?
![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a7j8615dqb5byqilg3iw.png)

## 2. Mocking API Response

Another day, another API. If you ever require an API response that you need for testing and debugging, Requestly can be a really powerful tool when it comes to this and I'm going to show you how you can set up your own API endpoint in just 1 minute, no cap! No setting up Node or the other 500 different javascript backend frameworks.

All you need to mock API responses is to open Requestly and select the **Mock APIs** button. After that you can create a new mock API from there and it only requires some tiny bit of JSON data.
![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4gmtgf8rrrjxwjj5f92i.png)

Requestly will now give you a public URL that you can access using your web browser or any data fetching API.
![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w3xgsm1hufq7j4j2pr0e.png)

## 3. Simulate HTML Response Status Codes

During API development we sometimes need to test the various possibilities of errors that could occur during the API usage. For this you can either manually modify your API code to change the response status code being returned or just use Requestly and do it with a single click.

In Requestly, you can click the **HTTP Rules** button and create a new **Modify Response** rule. With this, you can now specify the URL that you'll need the response from and the Response Status Code that you expect.
Requestly does not stop you here, you can go ahead and modify the Response Body manually by manipulating the response code being received.
![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/54mxo8myd8lvhq5u1slj.png)

This is an extremely powerful option that is as explorative as your imagination, the possibilities are endless and this doesn't end here either.

In Requestly you can either programmatically create the JavaScript Script for manipulating the response or you can even provide static data to replace the response as a whole. You can also provide custom JS files locally from your computer and use them to manipulate responses.

## 4. Simulating Delays

Delaying network requests is a simple way to test UI changes while the data from the API is being fetched. While something similar can be done from the developer tools in your browser by throttling the internet speed, it does not give you enough control and is not the real way to delay your network requests.

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ray40swg3as6okkr6nvo.png)

With Requestly you can easily delay network requests by a custom amount of time in seconds. As always, click on the **HTTP Rules** button and create a new **Delay Network Requests** Rule. Now you can just mention the URL, you can use direct matches or even regex for this and finally mention the delay in miliseconds.
Note that the delay time is limited to 10000ms to keep the browser performant.
This will now create delay for XHR/Fetch requests and the delay will be applied to all kinds of requests and resources like JS, CSS, Images, Videos and other stuff.

## 5. Insert Scripts on any Website

You can use Requestly to inject custom scripts on any website. These scripts can either be JS or CSS. You can use Requestly's **Insert Scripts** feature to quickly try out SaaS apps on any website or maybe insert your own custom stylesheet or make the website behave differently using your custom JS logic.

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uatplfgm1tyfvhowgrhc.png)

This feature is extremely powerful as it lets you do anything you want, except of course for the things that are tightly integrated on the backend. You can easily try out analytics scripts, or popups or chat buttons provided by APIs from Popupsmart, Crisp, Buy Me A Coffee or other services. All you need to do to make it happen is click the **HTTP Rules** button and create a new **Insert Scripts** rule.

Now you can specify what kind of script you need to inject and on what URL. This can be JS code or CSS code. You can either write the code in requestly itself or specify a URL from which you need to inject the script, useful in case of APIs. You can also specify when the script should be inserted, either before or after the page load.

That's not it, you can even insert multiple custom scripts at the same time! No need to create multiple rules for the same thing 😉

## Conclusion

You just learned how to use the all-in-one network request interceptor and debugging tool. Congratulations on just ⚡supercharging⚡ your web development with Requestly!
