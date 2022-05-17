<img src="https://i.ibb.co/KNVvYWq/image.png" alt="image" border="0" style="border-radius:1rem;" />

This is a <a href="https://nextjs.org/">Next.js</a> project that powers the original site & blogposts for requestly.io

## Getting Started

Install dependencies

```bash
npm run install
```

Run the development server:

```bash
npm run dev
```

**This development server is not a static build**

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result. Port 8000 is only used for the development server, for production server we use the port 3000. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

To get a static server run:

```bash
npm run start
```

To get a static build with HTML files and all that stuff, run:

```bash
npm run export
```

This will create a directory `out/` which will have all the files ready.

## Project Structure

### - `/blog-posts`

All blog post markdown files go here.

### - `/components`

Contains all the React Components that are then used in the pages.

### - `/config`

Contains any utility config js files that you might need.

### - `/pages`

Contains all the pages that are rendered on the website. `/pages/index.jsx` is the home page. To create a sub-route, just create a folder and add files. For example, creating a file `/pages/page1/route1.jsx` will render a link `https://requestly.io/page1/route1`.

Pages under `blog/`, `blog/category/` and `feature/` use `getStaticProps` function to populate data, this is for static site generation.

### - `/public`

This is the folder that will create permanent public files. If you put a file `image1.png` inside `pages`, it'll be available at `https://requestly.io/image1.png`. Similarly, for `/public/assets/image1.png` the path will be `https://requestly.io/assets/image1.png`

- `/public/assets/blog-images` is for the images that appear in your blog posts. Drop image files for the blog here and add a reference to them directly in your md file.

- `/public/assets/img` is for the images that appear on the website.

- `/assets/videos` is for the videos that appear on the website.

- `/assets/fonts` has nucleo-fonts that our theme uses.

### - `/styles`

Contains all the required css files that **CAN ONLY BE IMPORTED** in `/pages/_app.js`
It also contains a `constants.js` that's used to specify some for the CSS files.

### - `/utils`

Contains all the javascript functions that might be required. Put any js functions here that need to be imported in pages or components.

- `/utils/constants`

  Just contains some js files that have static content which has to be imported in pages or components.

- `/utils/json`

  Contains the JSON files that serve as a static API for data fetching.

### - `/out`

This is the folder that is created after you run

```bash
npm run build
```

This `/out` folder contains all the static HTML files that are then put on the server to serve the website.

## Blog Markdown Format

Since our website uses Markdown files to generate blog posts, we have to be careful about the formatting of the markdown files.

To create a blog post:

- Create a `.md` file in `/blog-posts` directory.
- Format the md file like this:

```
---
title: "Title Goes Here"
coverImage: "/assets/blog-images/image-goes-here.jpg"
date: "2021-07-02T11:31:13+05:30"
permalink: permalink-goes-here
author: "Name Goes Here"
excerpt: "lorem ipsum excerpt lorem ipsum"
id: 1234
category:
	- Features
	- Announcements
	- Use Cases
	- Backend Development
	- Frontend Development
	- Guides
	- Latest News
	- Uncategorized
---
BLOG CONTENT GOES HERE
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui
officia deserunt mollit anim id est laborum.
BLOG CONTENT GOES HERE
```
