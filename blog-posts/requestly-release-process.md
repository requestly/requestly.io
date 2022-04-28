---
title: "Requestly Release Process"
date: "2018-06-16T00:56:17+05:30"
coverImage: "/assets/blog-images/defaultBlogImage.jpg"
status: publish
permalink: requestly-release-process
author: "Requestly Team"
excerpt: "This article (including all other articles under `Developers` category) are meant for Requestly development team only. If you have any suggestions, please feel free to suggest."
type: post
id: 306
category:
  - Features
tag:
  - Engineering
  - Process
  - Release
  - Requestly
post_format: []
_yoast_wpseo_content_score:
  - "90"
_yoast_wpseo_primary_category:
  - "6"
---

This article (including all other articles under `Developers` category) are meant for Requestly development team only. If you have any suggestions, please feel free to suggest.

## Steps

### Before Release

- Checkout master branch and fetch latest code<span> </span>`git checkout master && git pull origin master`
- Checkout<span> </span>`production`<span> </span>branch –<span> </span>`git checkout production && git pull origin production`
- Merge master branch to it –<span> </span>`git merge master`
- Update version number in<span> </span> ```
  manifest_chrome.json,
  mainfest_firefox.json,
  manifest_edge.json,
  config/version.json,
  components/browser-extension/package.json

### Release Chrome

- Change browser to chrome in the configs `./rq-config browser=chrome env=prod`
- Build all the components to test for prod on local machine `./build.sh prod`
- Run Unit tests –<span> </span>`./test.sh`
- Refresh `chrome://extensions` and click on extension icon and run the sample rule
- Switch to browser-extension directory<span> </span>`cd components/browser-extension`
- Run build command –<span> </span>`grunt release-chrome`
- Upload the build to<span> </span>[Chrome Store](https://chrome.google.com/webstore/developer/dashboard)
- Delete the earliest build. We want to keep only 3 previous builds
- cd ../..

### Release Edge

- Change browser to chrome in the configs `./rq-config browser=edge env=prod`
- Build all the components to test for prod on local machine `./build.sh prod`
- Run Unit tests –<span> </span>`./test.sh`
- Open `edge://extensions` and click on extension icon and run the sample rule
- Switch to browser-extension directory<span> </span>`cd components/browser-extension`
- Run build command –<span> </span>`grunt release-edge`
- Upload the build to<span> </span>[Edge Store](https://partner.microsoft.com/en-us/dashboard/microsoftedge/b3e69bf0-262d-40a8-a4f5-eded941b79eb/packages/overview)
- Delete the earliest build. We want to keep only 3 previous builds
- cd ../..

### Release Firefox

- Change browser to chrome in the configs `./rq-config browser=firefox env=prod`
- ``Run command –<span> </span>`./release_firefox.sh`
- Copy requestly artefact inside `app/public/firefox/builds` directory and save it as `requestly-latest.xpi`
- Update latest version in `updates.json` inside same directory

### Post Release

- Enable Logger in `logger.js`
- Commit the files –<span> </span>`git add .. && git commit -am "Requestly va.b.c released"`
- Push to production branch –<span> </span>`git push origin production`
- Add tag –<span> </span>`git tag -a va.b.c -m "Requestly va.b.c released"`
- Push the tags –<span> </span>`git push --tags origin`
- Merge to master –<span> </span>`git checkout master && git merge production`
- Change browser to chrome `./rq-config browser=chrome env=beta && ./build.sh beta`
- Push master –<span> </span>`git push origin master`
