import markdownStyle from "../../styles/markdown-styles.module.css";
import categories from "../../utils/json/blogCategories.json";
import { Questions } from "../../utils/sharedListsQuestions";
import LearnUsage from "../../components/learnUsage";
import HeadTags from "../../components/HeadTags";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Faq from "../../components/faq";
import rehypeRaw from "rehype-raw";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

import { trackBlogViewedEvent } from "../../utils/Analytics";

const BlogPostPage = ({ postsData }) => {
  const { content, metadata } = postsData;

  const isMobile = useMediaQuery({ minWidth: 1000 });

  const [date, setDate] = useState(null);

  useEffect(() => {
    const getDate = () => {
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setDate(new Date(metadata.date).toLocaleDateString("en-IN", options));
    };
    getDate();
    trackBlogViewedEvent(metadata.permalink);
  }, [metadata]);

  return (
    <>
      <HeadTags
        title={metadata.title}
        description={metadata.excerpt.slice(0, 100)}
        image={metadata.coverImage}
      />
      <section className="section-header pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <div className="mb-4">
                {metadata.category.map((name, i) => {
                  const categoryKey = Object.keys(categories).find(
                    (x) =>
                      categories[x].title.toLowerCase() === name.toLowerCase()
                  );
                  return (
                    <a
                      key={categoryKey}
                      href={`/blog/category/${categoryKey}`}
                      className={`badge badge-sm badge-${categories[categoryKey].style} text-uppercase mr-2 px-3`}
                    >
                      {name}
                    </a>
                  );
                })}
              </div>
              <h1 className="display-3 mb-4 px-lg-5">{metadata.title}</h1>
              {!!metadata.featuredImage && (
                <img
                  src={metadata.featuredImage}
                  alt={metadata.title}
                  style={{ height: "4rem", marginBottom: "1.5rem" }}
                />
              )}
              <div className="post-meta">
                <span className="font-weight-bold mr-3">{metadata.author}</span>
                <span className="post-date mr-3">{date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <article>
          <div className="section section-sm bg-white pt-5 text-black">
            <div className="container d-flex justify-content-center">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className={`w-100 ${markdownStyle.reactMarkDown}`}
              >
                {content}
              </ReactMarkdown>
            </div>
            <div className={"container lead text-black"}>
              Thanks for reading this through, feel free to get in touch on{" "}
              <a
                href="https://twitter.com/intent/user?screen_name=RequestlyIO"
                style={{ color: "#0648b3" }}
              >
                Twitter
              </a>{" "}
              where we regularly share developer tips and tricks.
            </div>
          </div>
        </article>
      </div>
      {metadata.id === 1407 ? (
        <section
          className="section bg-primary"
          style={{ height: isMobile ? "100%" : "100vh" }}
        >
          <Faq Questions={Questions} />
        </section>
      ) : null}
      <LearnUsage />
    </>
  );
};

export default BlogPostPage;

// GET ALL POSSIBLE URL PATHS
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blog-posts"));

  const paths = files.map((filename) => {
    const markdownData = fs.readFileSync(
      path.join("blog-posts", filename),
      "utf-8"
    );
    const { data: metadata } = matter(markdownData);
    const link = metadata.permalink;

    return {
      params: { slug: link },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// GET THE MARKDOWN FILES AND PASS THE RELEVANT ONE AS PROPS FOR THIS PAGE
export async function getStaticProps({ params }) {
  const files = fs.readdirSync(path.join("blog-posts"));

  let posts;
  files.map((filename) => {
    const markdownData = fs.readFileSync(
      path.join("blog-posts", filename),
      "utf-8"
    );
    const { data: metadata, content } = matter(markdownData);
    if (params.slug === metadata.permalink) {
      posts = {
        metadata,
        content,
      };
    }
  });

  return {
    props: {
      postsData: posts,
    },
  };
}
