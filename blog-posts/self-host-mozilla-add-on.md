---
title: "Self Host Mozilla Add-on"
date: "2018-06-16T03:07:52+05:30"
status: publish
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
permalink: self-host-mozilla-add-on
author: "Requestly Team"
excerpt: "Once you have developed a Mozilla addon, you will try to take the next step to distribute it to wider audience. There are two ways you can distribute your addon."
type: post
id: 361
category:
  - Features
tag:
  - Addon
  - Firefox
  - Mozilla
  - Requestly
post_format: []
hestia_layout_select:
  - default
_yoast_wpseo_content_score:
  - "30"
_yoast_wpseo_primary_category:
  - "6"
themify_used_global_styles:
  - 'a:1:{i:0;s:0:"";}'
mobile_menu_styles:
  - default
---

Once you have developed a Mozilla addon, you will try to take the next step to distribute it to wider audience. There are two ways you can distribute your addon.

1. Submitting to AMO (Listed version)
2. Self Hosting addon (Unlisted version)

Submitting to AMO provides you a listed version of your addon and your addon is visible in Mozilla store to be searched and installed by users. This should be the first choice for users but given the current state of Mozilla review process, developers tend to incline towards self hosting. First of all, Mozilla is very strict in their review process. They will ask for your code unminified, unobfuscated, details about all the libraries used, versions of the libraries used. They check for all kinds of security loopholes and also check if you have done anything in an antipattern fashion. This makes their review queue last longer and your addon may be reviewed after a month or so just to know that you need to fix A,B,C and resubmit. One side of coin is very fair which makes your addon secure but the other side is darker because at times, your business requirements need a mozilla addon but you may not have all the time in world to fix all the tech debts at once like you cannot upgrade all libraries just to pass review process.

I submitted Requestly to AMO twice and end up deciding self hosting it just to cross the review time barrier. In this article, we will discuss about how to self host your unlisted version of addon.

# Steps for Self Hosting Mozilla Addon

## Step1: Install NPM and web-ext (1 Time step)

Both the methods of addon distribution require developers to sign their addon. `web-ext` is a command line tool developed by Mozilla to speed up various parts of the WebExtension development process, making development faster and easier. To sign an unlisted version we will use `web-ext` npm command line package so we need to install npm first.

#### Install Npm

> https://nodejs.org/en/download/

#### Test npm Installation

> npm -v

#### Install web-ext

> npm install –global web-ext

#### Test web-ext installation

> web-ext –version

## Step2: Obtain keys from Mozilla (1 Time Step)

Please visit [Mozilla Addon API Keys Page](https://addons.mozilla.org/en-US/developers/addon/api/key/) to obtain userId and secret. The page should look like this:

## ![](/assets/blog-images/mozilla-api-keys-page.png)Step3: Signing the build using userId and secret

Final step is to use the Mozilla sign apis to get your build signed and ready to host. Just go to directory where addon code is present.

#### Define applications key in your manifest

Signing the build requires you to add `applications` key in your manifest like this

```json
"applications": {
  "gecko": {
    "id": "<some_random_id>",
    "update_url": "https://<your_server_location_where_you_host_zips>/updates.json"
  }
}
```

Please note that along with hosting zip files, you will also need to host an `updates.json` file which tells Firefox the location to download any updates to your addon. <u>Mozilla requires that your update_url must be an https based url.</u>

#### Create updates.json file

updates.json file looks like this

```jsonon
{
  "addons": {
    "<your_addon_id>": {
      "updates": [
        {
          "version": "1.0.0",
          "update_link": "<your_server_location_where_you_host_zips>/addon-1.0.0.xpi"
        }
      ]
    }
  }
}
```

Please note that should be same as you defined in manifest.json

#### Sign

```
web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```

After running this command, you should see an xpi file in web-artifacts directory. Host this xpi file along with updates.json and you are done!

# References

- [WebExtensions Home](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)
- [Getting Started with web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)

# Contact

Feel free to post questions via comments or mail at <u>requestly.extension@gmail.com</u>
