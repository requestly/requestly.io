---
title: "Debugging Next.js App in Production"
date: "2021-12-28T17:00:00+05:30"
coverImage: "/assets/blog-images/to-do-app.png"
status: publish
permalink: "debugging-next-js-app-in-production"
author: "Govind Goel"
excerpt: "Next.js is an open-source development framework built on top of node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites"
type: post
id: 211213
category:
  - Guides
  - Frontend Development
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

# Debugging Next.js Application in Production

<a href="https://nextjs.org">Next.js</a> is an open-source development framework built on top of node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.
Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route prefetching, and more. No config is needed. – From nextjs.org
Debugging a bug in production can be a nightmare especially if the bug is reproducible only in the production environment. This could happen for several reasons like not having all the data on a local/stage environment or setting up a backend server can seem complex & time-consuming if you are a frontend developer.
So In this article, we will see how we can debug a Next.js application in production without even setting up a local server or trying to reproduce the bug on local or any other environment.

## Bug(s) in production NextJS app

We’ll take a simple Todo NextJS App available here - https://github.com/requestly/sample-nextjs-app

which is also live at: https://sample-nextjs-app-flax.vercel.app/

![To Do App](/assets/blog-images/to-do-app.png)

So for our case, there is a Next.JS basic to-do app that adds and fetches a list of tasks from the backend and when the user clicks on complete, the task gets deleted from the server.
In our application setup, we have a server and a frontend application built using Next.Js

Also in Next.Js, when we build our application:
If we see our production build so our index page component is compiled as static/chunks/pages/index-b1a6b3cf2be8bc12f539.js
Let’s take a look at our \_buildManifest.js

```
"/": ["static/chunks/pages/index-b1a6b3cf2be8bc12f539.js"],
```

Our about.html has the following scripts imported:

```
<script src="_next/static/chunks/pages/index-b1a6b3cf2be8bc12f539.js" defer=""></script>
```

#### So there is a hash generated along with the filename, the hash will change whenever we rebuild your application.

Now, we have a hypothetical situation where clicking on submit while adding a task I am getting an error in production, only the total tasks count gets updated but the task is not created.

## Debugging Backend APIs

If I have to debug this on a local setup, I need to set up the frontend and backend server locally too because my UI code by default hits the server on `/create` and `/delete` and it is too cumbersome to set server along with frontend and debug for a quick find.
So let’s talk about an approach using the Requestly browser extension using which you can debug your app without setting up your server on local machine.

### About Requestly

Requestly is a Chrome extension that lets you modify network requests like Modify Request & Response Headers, Redirect URLs, Switch Hosts, Mock API Response, Delay Network requests, Insert Custom Scripts, and much more. This is widely used by developers on daily basis because of the features it provides and it makes things simpler.

### Solution

Using the Requestly Redirect feature, we can redirect our script(s) from Production to localhost. In layman terms, when the browser loads the app then instead of loading the JS from production, requestly picks the JS from localhost. Now, we can add some more logic that can help us debug the issue. And once, we find the issue we can fix in our local script, test it on the production site and then deploy it with confidence.

![Redirect Prod to local using Requestly](/assets/blog-images/redirectRule.png)

## Setting up Requestly Redirect Rule (Step by Step Guide)

### Step1 — Install Requestly Extension

Go to <a href="https://requestly.io">https://requestly.io</a> and set up the extension for the browser of your choice.

### Step2 — Setup Redirect Rule

We will create a redirect rule through which we will use our production server capability on our local machine for debugging.

- Redirect Rule Set Up for Create Route

![Redirect Rule Setup](/assets/blog-images/redirect-rule-for-create.png)

Through this, we have successfully redirected our local server routes to the production server.
And when I debugged I found an issue with my UI code itself, that in the request all the required fields were not getting passed as the params. So it was a quick solution and setting up rules saved a lot of time.

## Debugging JS Code on Production

Just like in the previous example, we have set up redirects for routing an API endpoint from the production server to the local server, we will use a similar technique to redirect the JS hosted on production to my local JS. However, there is a slight complexity when it comes to JS mentioned earlier, every resource in the next.js project gets a unique file hash when the application is built. For example, In the following script resource

```
https://sample-nextjs-app-flax.vercel.app/_next/static/chunks/pages/index-b1a6b3cf2be8bc12f539.js

```

`index-b1a6b3cf2be8bc12f539.js` is the unique file hash. This is variable and Requestly provides very good support to handle variables in the URL.
Handling file hashes in the URL

We can use Requestly WildCard or Regex Match Operator to handle the file hash So our Rule will simply become

Request URL “WildCard Matches” `https://sample-nextjs-app-flax.vercel.app/_next/static/chunks/pages/index-*.js`

Destination - `https://localhost:3000/_next/static/chunks/pages/index.js`

### Requestly Redirect Rule (Redirect Production JS to localhost JS)

![Redirect Production JS to localhost JS](/assets/blog-images/js-redirect-rule.png)

So, We just saw how you can configure Requestly to gain complete control over your network traffic. This is a very powerful technique and saves a lot of time. Whether you are a backend developer or frontend developer, Requestly is now in every developer’s toolkit.

Happy Debugging! By <a href="https://linkedin.com/in/govindgoel">@govindgoel</a>

#### For Reference:

More about Next.js: <a href="https://nextjs.org/">https://nextjs.org/</a>

Application: <a href="https://github.com/requestly/sample-nextjs-app">https://github.com/requestly/sample-nextjs-app</a>

Deployed Application: <a href="https://sample-nextjs-app-flax.vercel.app/">https://sample-nextjs-app-flax.vercel.app/</a>

Rules: <a href="https://app.requestly.io/rules/#sharedList/1639923388678-Next.Js-Debugging">https://app.requestly.io/rules/#sharedList/1639923388678-Next.Js-Debugging</a>
