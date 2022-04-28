import blogCategories from "../../../utils/json/blogCategories.json";
import LearnUsage from "../../../components/learnUsage";
import HeadTags from "../../../components/HeadTags";
import PostCard from "../../../components/postCard";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const CategoryPage = ({ postsData, pageCategoryData }) => {
  return (
    <>
      <HeadTags
        title={`${pageCategoryData.title} | Requestly`}
        description="Setup redirects, modify headers, switch hosts, insert user scripts and much more with Requestly"
      />
      <section className="section-header bg-primary text-white pb-7 pb-lg-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1 className="display-2 mb-4">{pageCategoryData.title}</h1>
              <p className="lead">
                Setup redirects, modify headers, switch hosts, insert user
                scripts and much more with Requestly
              </p>
            </div>
          </div>
        </div>
        <div className="pattern bottom"></div>
      </section>
      <section className="section section-lg line-bottom-light">
        <div className="container mt-n7 mt-lg-n12 z-2">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 mb-5">
              {postsData.map((post, index) => (
                <div
                  key={index}
                  className="card bg-white border-light shadow-soft flex-md-row no-gutters p-4 mb-4"
                >
                  <PostCard key={post.metadata.id} post={post.metadata} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <LearnUsage />
    </>
  );
};

export default CategoryPage;

// GET ALL POSSIBLE URL PATHS
export async function getStaticPaths() {
  const paths = Object.keys(blogCategories).map((category, index) => {
    return {
      params: {
        category,
      },
    };
  });

  return { paths, fallback: false };
}

// GET THE MARKDOWN FILES AND PASS THE RELEVANT ONE AS PROPS FOR THIS PAGE
export async function getStaticProps({ params }) {
  // Get files from blog-posts
  const files = fs.readdirSync(path.join("blog-posts"));
  const pageCategory = params.category;
  const pageCategoryData = blogCategories[pageCategory];

  const posts = files.flatMap((filename) => {
    let includePost = false;
    const markdownData = fs.readFileSync(
      path.join("blog-posts", filename),
      "utf-8"
    );
    const { data: metadata, content } = matter(markdownData);
    metadata.category.map((postCategory) => {
      if (postCategory === blogCategories[pageCategory].title) {
        includePost = true;
      }
    });

    if (includePost) {
      return {
        metadata,
        content,
      };
    } else {
      return [];
    }
  });

  return {
    props: {
      postsData: posts,
      pageCategoryData,
    },
  };
}
