import QuickStart from "./data/getting-started/quick-start";

const guide = [
  {
    name: "Getting started",
    sections: [
      {
        name: "Overview",
        content: null,
        subsections: [],
      },
      {
        name: "Download",
        content: null,
        subsections: [],
      },
      {
        name: "Quick Start",
        subheading:
          "This guide will help you get started with Impact and give you an overview of the design system",
        content: QuickStart,
        badge: "Pro",
        subsections: [
          {
            name: "Quick Start",
            link: "#quick-start",
            sub: [
              {
                name: "Creative Tim",
                link: "#",
              },
              {
                name: "Creative Tim",
                link: "#",
              },
              {
                name: "Creative Tim",
                link: "#",
              },
            ],
          },
          {
            name: "Theme without Sass, Gulp or Npm",
            link: "#theme-without-sass-gulp-or-npm",
          },
          { name: "Minified version", link: "#minified-version" },
        ],
      },
      {
        name: "License",
        content: null,
        subsections: [],
      },
      {
        name: "File Structure",
        content: null,
        subsections: [],
      },
      {
        name: "Build tools",
        content: null,
        subsections: [],
      },
      {
        name: "Changelog",
        content: null,
        subsections: [],
      },
    ],
  },
  { name: "Front", sections: [] },
  { name: "Dashboard", sections: [] },
  { name: "Plugins", sections: [] },
];

export default guide;
