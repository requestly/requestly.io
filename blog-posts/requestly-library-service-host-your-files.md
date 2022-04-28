---
title: "Requestly Library Service - Host your Files"
date: "2018-04-08T01:31:28+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: requestly-library-service-host-your-files
author: "Requestly Team"
excerpt: "With the number of growing users, this is one of the most popular feature request we have received. There is no simple solution where you can host your JS, CSS files and refer them in your code. So, Requestly users faced problems when they wanted to redirect some script to script in local filesystem."
type: post
id: 1404
category:
  - Uncategorized
tag:
  - CSS
  - Hosting
  - Javascript
  - Mocks
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "90"
_yoast_wpseo_focuskw:
  - "File Library"
_yoast_wpseo_metadesc:
  - "There is no simple solution where you can host your JS, CSS files and refer them in your code. So, Requestly users faced problems when they wanted to redirect some script to script in local filesystem. With Library Service, Users can upload JS, CSS, JSON and other file types and share with others. Its like Free Hosting"
_yoast_wpseo_linkdex:
  - "65"
_yoast_wpseo_primary_category:
  - ""
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

## Introduction

With the number of growing users, this is one of the most popular feature request we have received. There is no simple solution where you can host your JS, CSS files and refer them in your code. So, Requestly users faced problems when they wanted to redirect some script to script in local filesystem. They had to setup their own localhost server and get the url. But now this problem is solved using [Requestly Library Service](https://app.requestly.in/library) and now you can upload your JS/CSS/other files with the help of this service and get the url of uploaded file which you can directly use in requestly rules.

## How to use Library Service ?

##### Login

When you navigate to the library service it will ask you to login using your google account. This is required to prevent abuse of service and to manage/organize your files on Requestly servers.

##### Upload File

You can upload a file from your file system using upload button.

![Library Service - Upload File Button](/assets/blog-images/Library-Create-and-Update-buttons.png)

After you have uploaded a file, you will see a dialog with the details of the file. You can click on Download Url Icon to copy the url of the file.

![](/assets/blog-images/Library-Uploaded-File-Details.png)

##### Edit Content

Once you have uploaded your file, you can also edit the content from File Editor. Just Click on `Edit File Content` button in File Details Dialog as mentioned above and you will see a file editor like this –

![](/assets/blog-images/Requestly-File-Editor.png)

As you can see Requestly File Editor supports a lot of features like :-

1. Syntax Highlighting
2. Error Highlighting
3. Supports Multiple Languages

##### Create New File

You can also create a new file (JS/CSS/JSON) using Add button on the toolbar. When you click on the toolbar, it will show a dialog to fill file details.

![](/assets/blog-images/Requestly-Library-Create-File-Dialog.png)

And now you can add file content which will again take you to file editor.

## How to use Library in Requestly Rules ?

Once you have uploaded your files in Library, you can get the download url of the file. You can use that url in Requestly rules like Redirect Rule &amp; Script Rule.

## Other Advantages

1. Our Library Service is deployed using Google’s CDNs so you will also get best performance.
2. Requestly Library is a standalone service so if you are not using extension even then you can use Library Service to host JS/CSS and other file types.
3. You can use Library files in your other projects as normal scripts and also include them in your web pages.
4. You can share the scripts with your other co-workers.

## FAQ

##### **Q: If I change file content, will the Url change ?**

No, You can change file content as many times and your Url will be unaffected. This will make your debugging life easier. That’s all to cover in this article. Feel free to reach out to us for any questions you have. Drop a comment if you have any suggestions to improve this post.
