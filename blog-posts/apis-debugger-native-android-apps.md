---
title: "APIs debugger for native android apps"
coverImage: "/assets/blog-images/charles-alternative.png"
# featuredImage: "/assets/blog-images/charles-alternative.png"
date: "2022-04-22T20:43:59+05:30"
status: publish
permalink: apis-debugger-for-native-android-apps
author: "Sachin Jain"
excerpt: "Requestly Android Debugger - Better Alternative to Charles Proxy"
type: post
id: 2173
category:
  - Android Development
  - Debugging
tag:
  - Android
  - Debugging
  - Charles Proxy
  - Chucker
  - API Debugger
  
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "90"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

If you are an android developer, you must already be knowing about [Chucker - An In-app HTTP Inspector](https://github.com/ChuckerTeam/chucker) and [Charles Proxy - A Desktop app based HTTP(s) proxy](https://www.charlesproxy.com/). I have extensively used both the tools for debugging API traffic on Android devices but there are many pain points which the duo fail to solve hence at Requestly we decided to build an [Open-Source and powerful android debugger](/android-interceptor/) which provides the capability of In-App API Inspector as well modifying the API request/response without dealing with SSL certificate and proxy issues. In this article, we will go in-depth to understand the pain points of debugging API traffic and how Requestly debugger addresses them.

## Chucker (In-app HTTP Inspector)
Chucker is an [open-source HTTP Inspector](https://github.com/ChuckerTeam/chucker) that shows API traffic directly on the device but Chucker alone isn't sufficient for debugging purposes. It lacks the following things which breaks the debugging experience
- No Support to modify API request & response
- Copying & Sharing cURL process is painful 
- Sharing individual request/response snapshot isn't possible

![Chucker Demo](/assets/blog-images/chucker-multiwindow.gif)

## Charles Proxy (HTTP Debugging Proxy)
[Charles Proxy](https://www.charlesproxy.com/) is very common tool used by mobile developers for Intercepting & Debugging API traffic but all developers have similar complaints
- Setup is very hard & Onboarding any new member takes a lot of time
- Works on local machine So collaboration is not possible with Charles
- Difficult to use along with Production apps due to SSL pinning
- Interception is good but modification isn't really easy
- Not actively maintained product and the list is long..

<div class="text-center">
  <iframe width="700" height="400" src="https://www.youtube.com/embed/ZItYzzs1psw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p><br/>

## Requestly Android Debugger 
[Requestly Android Debugger](/android-interceptor/) not only combines the power of Chucker and Charles Proxy but also boosts the debugging experience with much more powerful featureset. Requestly Android Debugger is just a simple wrapper on top of Chucker project So the integration steps are also quite similar. It provides the following feature set as of now
- In-app API Interceptor with ability to connect to Requestly web service
- APIs Modification Redirect, Throttle, Modify API Traffic without any Proxy or SSL certificate hassles
- Onboarding is very simple & Collaboration is also possible

<div class="text-center">
  <iframe width="700" height="400" src="https://www.youtube.com/embed/Zf4iJjnhPzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>

<strong>Upcoming features</strong>
- Debug Analytics events
- Sharing cURL securely
- Collaboration between developers
- Showing logs, exception stacktraces etc directly on the app
- Compatibility with iOS, React-Native & Flutter apps

## Detailed Comparison

<strong>tldr;</strong> Here's a detailed table showing feature by feature comparison of how Requestly debugger compares with Charles Proxy.

<div class="table-responsive">
  <div>
    <table class="table text-center">
            <thead class="thead-light">
                <tr>
                    <th scope="col" class="sort" data-sort="name">Feature</th>
                    <th scope="col" class="sort" data-sort="budget">Charles Proxy</th>
                    <th scope="col" class="sort" data-sort="status">Requestly Debugger</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td><strong>Setup</strong></td>
                  <td><strong>Painful</strong> (Requires Installing Certificates on Phone & Setting/Unsetting Proxy settings in Wifi configuration everytime debugging is required</td>
                  <td><strong>Simple 1-Time Setup</strong> (3-lines of code setup one-time). No SSL certificates or Proxy configurations hassles</td>
                </tr>
                <tr>
                  <td><strong>On Device APIs Inspector</strong></td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td><strong>APIs Modification</strong></td>
                  <td>Available but complex. High learning curve</td>
                  <td>Very easy. Provides modification rules like <a href="https://requestly.io/feature/modify-request-response-headers/">Modifying headers</a>, <a href="https://requestly.io/feature/modify-response/">Modifying API responses</a>, <a href="https://requestly.io/feature/redirect-url">Switching Traffic to local/dev environment</a>, <a href="https://requestly.io/feature/delay-request/">Throttling traffic</a>, etc</td>
                </tr>
                <tr>
                  <td><strong>Debugging production apps</strong></td>
                  <td>SSL pinned apps not supported</td>
                  <td>Easily configurable to debug production (release) as well as debug builds</td>
                </tr>
                <tr>
                  <td><strong>Inbuilt Mock Server</strong></td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td><strong>Collaboration</strong></td>
                  <td>❌</td>
                  <td>Easily share rules with your team using <a href="https://requestly.io/blog/share-rules-with-other-users/">Sharedlist feature</a>
                  </td>
                </tr>
                <tr>
                  <td><strong>Support</strong></td>
                  <td>❌</td>
                  <td>Active Support</td>
                </tr>
                <tr>
                  <td><strong>Open Source</strong></td>
                  <td>❌</td>
                  <td>✅ <a href="https://github.com/requestly/requestly-android-sdk">Github Repo</a></td>
                </tr>
            </tbody>
        </table>
  </div>
</div>

If you have a native android app, Requestly can significantly improve your debugging experience. With Requestly, anyone in your organization can debug the app traffic without any learning curve, proxy or SSL certificate hassles.
