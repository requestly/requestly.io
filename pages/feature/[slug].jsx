import FeaturesExtraInfo from "../../components/FeaturesExtraInfo";
import ModifyHeaders from "../../components/modifyHeaders";
import YoutubeEmbed from "../../components/youtubeEmbed";
import LearnUsage from "../../components/learnUsage";
import Container from "../../components/container";
import HeadTags from "../../components/HeadTags";
import Selenium from "../../components/selenium";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Faq from "../../components/faq";
import dynamic from "next/dynamic";
import Link from "next/link";

const QuestionsCard = dynamic(() => import("../../components/QuestionsCard"));

import {
  submitCustomEvent,
  trackFeatureClickedEvent,
} from "../../utils/Analytics";
import { CONSTANTS } from "../../utils/constants";

// Import Assets
import HeroSectionDownloadContainer from "../../components/HeroSectionDownloadContainer";
import downloadExtensionData from "../../utils/json/commonContent.json";
import featuresData from "../../utils/json/requestlyFeatures.json";
import BraggingStats from "../../components/BraggingStats";
import RemoteRules from "../../components/RemoteRules";
import { Questions } from "../../utils/faqQuestions";

const FeaturePage = ({
  currentFeature,
  downloadExtensionData,
  allFeatures,
}) => {
  const md = useMediaQuery({ minWidth: 900 });

  const [mounted, setMounted] = useState(null);
  useEffect(() => {
    setMounted(md);
  }, [md]);

  return (
    <div>
      <HeadTags
        title={`${currentFeature.displayName} | Requestly`}
        description={
          currentFeature.slug === "redirect-url"
            ? currentFeature.meta
            : currentFeature.description
        }
        image={`https://requestly.io${currentFeature.walkthrough}`}
      />

      <section
        // className={`section-header pb-9 bg-primary text-white ${
        //   currentFeature.walkthrough && "pb-lg-10"
        // }`}
        className="section-header bg-primary text-white pb-0 pt-7 pt-lg-7"
      >
        <div className="container mx-0" style={{ maxWidth: "100%" }}>
          <div className="row mb-4">
            <div className="col-12 col-md-6 mt-lg-0 mt-1 pl-3 pl-lg-5">
              <div className="mb-4 mb-lg-5 text-center text-lg-left">
                <h1>{currentFeature.displayName}</h1>
              </div>
              <div
                className="mb-2 mb-lg-5 text-center text-lg-left"
                style={{ maxWidth: "60ch" }}
              >
                <h4 className="font-weight-light">
                  {currentFeature.description}{" "}
                  {currentFeature.additionalContext}
                </h4>
              </div>
              <div className="mt-lg-0 mt-5">
                {currentFeature.slug === "mock-server" && (
                  <Link href="https://app.requestly.io/mock-server">
                    <a>
                      <button className="btn btn-white btn-md btn-docs mr-3">
                        Create New Mock
                      </button>
                    </a>
                  </Link>
                )}
                {currentFeature.slug === "selenium" && (
                  <>
                    <Link href="https://www.npmjs.com/package/@requestly/selenium">
                      <a>
                        <button className="btn btn-white btn-md btn-docs mr-3">
                          Try it Out
                        </button>
                      </a>
                    </Link>
                    <Link href="https://github.com/requestly/requestly-selenium">
                      <a>
                        <button className="btn btn-outline-light btn-md btn-docs mr-3">
                          ⭐ Star us on Github
                        </button>
                      </a>
                    </Link>
                  </>
                )}
                {currentFeature.slug !== "mock-server" &&
                  currentFeature.slug !== "selenium" && (
                    <HeroSectionDownloadContainer />
                  )}
              </div>
            </div>
            {currentFeature.walkthrough ? (
              <div className="col-12 col-md-5 mt-lg-0 mt-5 d-flex justify-content-end">
                <div>
                  {[[currentFeature.walkthrough]].map(([image, alt], key) => {
                    if (image.includes("youtube")) {
                      return (
                        <YoutubeEmbed
                          src={currentFeature.walkthrough}
                          name={currentFeature.displayName}
                        />
                      );
                    }
                    return (
                      <div
                        key={key}
                        style={{
                          width: "100%",
                        }}
                      >
                        {/* @next/next/no-img-element */}
                        <img
                          src={image}
                          alt={currentFeature.displayName}
                          className="rounded-xl"
                          style={{
                            width: md ? "70%" : "100%",
                            position: md ? "absolute" : "relative",
                            right: "0",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <BraggingStats />
        </div>
      </section>
      {currentFeature.slug === "remote-rules" && (
        <div className="d-flex justify-content-center mt-5">
          <iframe
            height="360"
            width="640"
            src="https://www.youtube.com/embed/3BAtWqNNAbE"
          ></iframe>
        </div>
      )}
      {currentFeature.showMoreInfo && (
        <FeaturesExtraInfo pageContent={currentFeature} />
      )}
      {currentFeature.slug === "modify-request-response-headers" && (
        <ModifyHeaders pageContent={currentFeature} />
      )}
      {currentFeature.slug === "selenium" && (
        <Selenium pageContent={currentFeature} />
      )}
      {currentFeature.slug === "remote-rules" && (
        <RemoteRules pageContent={currentFeature} />
      )}
      {currentFeature.slug === "modify-query-params" && (
        <div className="d-flex justify-content-center mt-5 mb-5">
          <iframe
            height="400"
            width="600"
            src="https://www.youtube.com/embed/ZRhxIZnC43Q"
          ></iframe>
        </div>
      )}

      {currentFeature.showStackoverflow && (
        <div className="bg-primary pb-7 d-flex flex-column justify-content-center align-items-center pt-5">
          <h1 className="text-center text-white">Requestly on Stackoverflow</h1>
          <div
            // className={`d-flex flex-column  col-10 ${
            //   mounted ? "w-50" : "w-full"
            // } container justify-content-center p-5`}
            className="container row justify-content-center pt-5"
          >
            {currentFeature.stackoverflow.map((stack, index) => {
              return (
                <QuestionsCard
                  key={index}
                  question={stack.question}
                  link={stack.link}
                  mounted={mounted}
                />
              );
            })}
          </div>
        </div>
      )}

      <Container
        header="Additional Resources"
        data={currentFeature.examples}
        sectionclassName="section section-sm bg-soft"
      />
      <Container header="Article Guides" data={currentFeature.references} />

      <section className="section section-lg bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center mb-5 mb-lg-6">
            <div className="col-12 text-center">
              <h2 className="h1 px-lg-5">More Awesome Features</h2>
              <p className="lead px-lg-8">
                Requestly packs many more awesome features to debug network
                requests.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {allFeatures.map(
              (feature, key) =>
                feature.displayOnCard && (
                  <Link href={`/feature/${feature.slug}`} key={key}>
                    <a className="col-12 col-sm-6 col-lg-3">
                      <div //eslint-disable-line
                        onClick={() => {
                          // submitCustomEvent(
                          //   CONSTANTS.GA_EVENTS.CATEGORIES.BLOG_PAGE,
                          //   CONSTANTS.GA_EVENTS.ACTIONS.CLICKED,
                          //   `${feature.displayName}_card_clicked`
                          // );
                          trackFeatureClickedEvent(feature.displayName);
                        }}
                        style={{ cursor: "pointer" }}
                        className="card fh-300 bg-white shadow-soft text-primary rounded mb-4"
                      >
                        <div className="px-3 px-lg-4 py-5 text-center">
                          <span className="icon icon-lg mb-4">
                            <i className={feature.icon}></i>
                          </span>
                          <h5 className="font-weight-normal text-primary">
                            {feature.displayOnCard
                              ? feature.displayOnCard
                              : feature.displayName}
                          </h5>
                          <p>
                            {feature.descriptionOnCard
                              ? feature.descriptionOnCard
                              : feature.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>
      {currentFeature.slug === "modify-request-response-headers" ? (
        <section className="h-100 section bg-primary">
          <Faq Questions={Questions} />
        </section>
      ) : null}
      <LearnUsage />
    </div>
  );
};

export default FeaturePage;

export async function getStaticPaths() {
  const paths = featuresData.flatMap((feature) => {
    return {
      params: {
        slug: feature.src,
      },
    };
  });

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  let currentFeature = {};
  featuresData.map((featureData) => {
    if (featureData.slug === params.slug) {
      currentFeature = featureData;
    }
  });

  return {
    props: {
      currentFeature,
      allFeatures: featuresData,
      downloadExtensionData,
    },
  };
};
