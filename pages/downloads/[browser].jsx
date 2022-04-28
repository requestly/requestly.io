import BrowserDownloadsData from "../../utils/json/browserDownloadsData.json";
import ExtensionDownloadCard from "../../components/extensionDownloadCard";
import LearnUsage from "../../components/learnUsage";
import HeadTags from "../../components/HeadTags";

const BrowserDownloadsPage = ({
  browserName,
  downloadLink,
  heading,
  storeTitle,
  iconLink,
  instructions,
}) => {
  return (
    <div>
      <HeadTags
        title={`Download Requestly for ${browserName}| Requestly`}
        description="Download the Requestly Browser Extension"
      />
      <section className={`section-header pb-9 bg-primary text-white pb-lg-12`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-7 col-lg-6 text-center">
              <h1 className="display-3 mb-4 font-weight-normal">
                Download Requestly for {browserName}
              </h1>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div
            className="row mb-4 d-flex justify-content-center"
            style={{ width: "80%" }}
          >
            <ExtensionDownloadCard
              heading={heading}
              title={storeTitle}
              link={downloadLink}
              icon={iconLink}
            />
          </div>
        </div>
        <div className="container w-50">
          <div className="card mt-5">
            <div className="card-body text-black d-flex flex-column justify-content-center align-items-center">
              <h2 className="card-title">Instructions</h2>
              <p>
                Installing Requestly on {browserName} is extremely easy! <br />
              </p>

              {instructions.map((instruction, index) => {
                return (
                  <div key={index}>
                    <div>
                      <h4>Step {index + 1}:</h4>
                      <p>{instruction.text}</p>
                      <img
                        src={instruction.image}
                        alt={`Step ${index + 1}`}
                        className="card-image shadow-lg squircle-image border border-variant-gray-400"
                      />
                    </div>
                    <br />
                    <br />
                  </div>
                );
              })}

              <h3 className="text-center">{`and we're done!`}</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="section pt-0 pb-5">
        <div className="container mt-n9 mt-lg-n12 z-2">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <LearnUsage />
    </div>
  );
};

export default BrowserDownloadsPage;

export function getStaticPaths() {
  const paths = BrowserDownloadsData.map((browser) => {
    return {
      params: {
        browser: browser.slug,
      },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const content = BrowserDownloadsData.flatMap((browser) => {
    if (browser.slug === params.browser) {
      return {
        browser,
      };
    } else {
      return [];
    }
  });

  return {
    props: {
      browserName: content[0].browser.browserName,
      downloadLink: content[0].browser.downloadLink,
      heading: content[0].browser.heading || "",
      storeTitle: content[0].browser.storeTitle,
      iconLink: content[0].browser.iconLink,
      instructions: content[0].browser.instructions,
    },
  };
}
