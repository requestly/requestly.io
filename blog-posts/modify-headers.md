---
title: "Modify Headers in HTTP(s) Requests and Responses"
coverImage: "https://d2365d0g6khx9l.cloudfront.net/blog/modify_headers.png"
date: "2022-08-13T20:43:59+05:30"
status: publish
permalink: modify-headers-https-requests
author: "Nafees Nehar"
excerpt: ""
type: post
id: 2187
category:
  - Use Cases
  - Debugging
tag: []
post_format: []
mobile_menu_styles:
  - default
_yoast_wpseo_content_score:
  - "80"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
---

[HTTP(s) Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) are key-value pairs that can be used by the client or server to pass additional information along with an HTTP(s) request or response.

Headers carry data about the data being transferred. The ability to modify the headers of traffic that pass through your browser easily is what every developer would want to have.

[Requestly](https://requestly.io) can be used to modify request and response headers in simple clicks.

## To modify headers, select **Modify Headers** Rule.

![Select modify headers from the rule selector](https://d2365d0g6khx9l.cloudfront.net/blog/annotated_rule-selector.png)

## Select type of headers to modify- Request/Response

- A new header can be added.

- Existing header can be removed.

- Existing header’s value can be overridden.

![Modify Headers editor](https://d2365d0g6khx9l.cloudfront.net/blog/headers_rule_annotated_editor.png)

## When modifying headers is helpful?

### Open websites in iframe for testing

Sometimes you need to open pages in `iframe`, but response headers like [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) and [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) does not allow it to prevent [clickjacking](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html). Using Requestly, you can modify this header to allow the website to be opened in `iframe`.

### Remove [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

`Content-Security-Policy` response header is added to the website to prevent injection of external scripts but sometimes while testing it is required to inject scripts. Requestly can be used to remove CSP response header.

### Access Kubernetes dashboard by modifying [Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) header

You can access dashboard, you simply need to pass `Authorization: Bearer <token>` in every request to Dashboard. Requestly enables you to quickly modify the header.

Find more information [here](https://github.com/kubernetes/dashboard/blob/790bc1ec5e22642f64e86903f626005a26573cbc/docs/user/access-control/README.md#:~:text=to%20display%20it.-,Authorization%20header,-Using%20authorization%20header).

### Add custom request headers

Custom request headers can be added to manage features. Generally `x-custom-header` convention is followed.

### Change `Content-Type` of the requested resource.

### Test sites in production

To test sites in production, one can use local backend with the production site but here the browser can give [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors.

The following response headers can be modified using Requestly to test sites in production.

- `Access-Control-Allow-Origin`

- `Access-Control-Allow-Methods`

- `Access-Control-Allow-Headers`

- `Access-Control-Allow-Credentials`

Modifying headers happens to be a powerful tool in the hands of the developer. There’s a lot that can be done than covered in this article.

### Modify Headers in Safari

[Download the Requestly desktop app](https://requestly.io/downloads/) to modify headers in safari and other apps.

### Modify Headers in your Android app

[Download Request Android Debugger](https://requestly.io/debug-android-apps/) to modify headers in your android app.

I hope you enjoyed learning about modifying headers. If you have any questions, feel free to ask them in our [community section](https://community.requestly.io/).

**Happy Debugging 🚀**

*By [@nafees87n](https://www.linkedin.com/in/nafees87n/)*