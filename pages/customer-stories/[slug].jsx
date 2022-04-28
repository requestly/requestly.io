import CustomerStoryTestimonial from "../../components/CustomerStoryTestimonial";
import SmallDownloadsContainer from "../../components/smallDownloadsContainer";
import LearnUsage from "../../components/learnUsage";
import HeadTags from "../../components/HeadTags";
import path from "path";
import fs from "fs";

const data = [
  {
    src: "https://img.icons8.com/fluent/128/000000/chrome.png",
    href: "https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa",
    title: "Chrome Extension",
    alt: `Requestly for chrome |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
  },
  {
    src: "https://img.icons8.com/color/128/000000/firefox.png",
    href: "https://app.requestly.in/firefox/builds/requestly-latest.xpi",
    title: "Firefox Extension",
    alt: `Requestly for firefox |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
  },
  {
    src: "https://img.icons8.com/color/128/000000/ms-edge-new.png",
    href: "https://microsoftedge.microsoft.com/addons/detail/requestly-redirect-url-/ehghoapnlpepjmfbgaomdiilchcjemak",
    title: "Edge Extension",
    alt: `Requestly for edge |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
  },
  {
    src: "https://img.icons8.com/color/240/000000/safari--v1.png",
    href: "/for-safari",
    title: "Safari Extension",
    alt: `Requestly for safari |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
  },
  {
    src: "https://img.icons8.com/ios-filled/128/000000/mac-os.png",
    href: "https://bit.ly/rq-mac",
    title: "Desktop App",
    alt: `Requestly for macos |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
  },
];

const CustomerStoryPage = ({ story }) => {
  return (
    <>
      <HeadTags
        image={story.preview}
        title={story.title}
        description={story.excerpt.slice(0, 100)}
      />
      <section className="section-header pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h1 className="display-3 mb-4 px-lg-5">{story.title}</h1>
              <img
                src={story.logo}
                alt={story.title}
                style={{ height: "2rem" }}
              />
            </div>
          </div>
        </div>
      </section>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <article>
          <div className="section section-sm bg-white pt-5 customer-story">
            <div className="container d-flex justify-content-center">
              <div>
                {story.sections.map(
                  (
                    { heading, subHeading, description, testimonial, author },
                    idx
                  ) =>
                    heading === "Testimonial" ? (
                      <CustomerStoryTestimonial
                        key={idx}
                        testimonial={testimonial}
                        name={author.name}
                        title={author.title}
                        mugshot={author.mugshot}
                        companyLogo={author.companyLogo}
                      />
                    ) : (
                      <div key={idx}>
                        <h3>{heading}</h3>
                        {!!subHeading && (
                          <h5
                            className="lead text-gray p-4"
                            style={{
                              background: "rgba(0, 0, 0, .1)",
                              borderLeft: "4px solid rgba(0, 0, 0, .3)",
                              borderRadius: "10px",
                            }}
                            dangerouslySetInnerHTML={{ __html: subHeading }}
                          />
                        )}
                        {description.map((desc, idx) => (
                          <p
                            className="customer-story-desc"
                            dangerouslySetInnerHTML={{ __html: desc }}
                            key={idx}
                          />
                        ))}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="section section-sm bg-soft py-6 text-black">
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ maxWidth: "980px", margin: "0 auto" }}
        >
          <h4 className="mb-4 text-center">Download Requestly for Free</h4>
          <SmallDownloadsContainer data={data} />
        </div>
      </div>
    </>
  );
};

export default CustomerStoryPage;

// GET ALL POSSIBLE URL PATHS
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("customer-stories"));

  const paths = files.map((filename) => {
    const storyData = JSON.parse(
      fs.readFileSync(path.join("customer-stories", filename), "utf-8")
    );
    const link = storyData.permalink;

    return {
      params: { slug: link },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// GET THE JSON FILES AND PASS THE RELEVANT ONE AS PROPS FOR THIS PAGE
export async function getStaticProps({ params }) {
  const files = fs.readdirSync(path.join("customer-stories"));

  let story;
  files.map((filename) => {
    const jsonData = JSON.parse(
      fs.readFileSync(path.join("customer-stories", filename), "utf-8")
    );
    if (params.slug === jsonData.permalink) {
      story = jsonData;
    }
  });

  return {
    props: {
      story,
    },
  };
}
