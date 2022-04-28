import sortPostsFunction from "../../utils/sortPostsFunction";
import LearnUsage from "../../components/learnUsage";
import PostCard from "../../components/postCard";
import HeadTags from "../../components/HeadTags";
import { useMediaQuery } from "react-responsive";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const BlogPage = ({ postsData }) => {
  const lg = useMediaQuery({ minWidth: 1200 });
  const md = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <HeadTags
        title="Blog | Requestly"
        description="Our words, straight to you..."
      />
      <section className="section-header bg-primary text-white pb-7 pb-lg-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1 className="display-2 mb-4">Requestly Blog</h1>
              <p className="lead">
                The Requestly blog is your hub for HTTP resources, news, and
                community. Learn how to Setup redirects, modify headers, switch
                hosts, insert user scripts and much more with Requestly.
              </p>
            </div>
          </div>
        </div>
        <div className="pattern bottom"></div>
      </section>
      {/* MAIN CONTENT */}
      <section className="section section-lg line-bottom-light">
        <div className="mt-n7 mt-lg-n12 z-2">
          <div>
            {/* FEATURED POST */}
            <div className="mx-lg-6 mx-3 mb-5 card bg-white border-light shadow-soft">
              <PostCard post={postsData[0].metadata} featured />
            </div>
            {/* ALL OTHER POSTS */}
            <div className="row mx-lg-5 px-lg-3 mx-1 justify-content-center">
              {postsData.map((post, key) => {
                return (
                  <div key={key} className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card h-100 bg-white border-light shadow-soft no-gutters p-2">
                      <PostCard post={post.metadata} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <LearnUsage />
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  // Get files from blog-posts
  const files = fs.readdirSync(path.join("blog-posts"));

  const posts = files.map((filename) => {
    const markdownData = fs.readFileSync(
      path.join("blog-posts", filename),
      "utf-8"
    );
    const { data: metadata, content } = matter(markdownData);
    return {
      metadata,
    };
  });

  return {
    props: {
      postsData: posts.sort(sortPostsFunction),
    },
  };
}
