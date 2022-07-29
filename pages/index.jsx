import { trackDownloadClickedEvent } from "../utils/Analytics";
import CustomerStories from "../components/CustomerStories";
import TestimonialSection from "../components/testimonial";
import SectionHeader from "../components/section-header";
import reviewList from "../utils/json/reviewList.json";
import { Questions } from "../utils/feedbackQuestions";
import ExtraFeature from "../components/extraFeature";
import CompanyLogo from "../components/companyLogo";
import LearnUsage from "../components/learnUsage";
import HeadTags from "../components/HeadTags";
import Feature from "../components/feature";
import { useEffect, useRef } from "react";
import Stats from "../components/stats";
import Faq from "../components/faq";
import dynamic from "next/dynamic";

// Dynamic Import
const HeroSectionDownloadContainer = dynamic(
  () => import("../components/HeroSectionDownloadContainer"),
  {
    ssr: false,
  }
);

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <HeadTags />
      {/* Hero Section */}
      <section
        className="section-header bg-primary text-white pb-0 pt-7 pt-lg-7"
        id="download-now"
      >
        <div className="container mx-0" style={{ maxWidth: "100%" }}>
          <div className="row mb-4">
            <div
              className="col-12 col-md-7  mt-lg-0 mt-1 pl-3 pl-lg-5"
              style={{ lineHeight: "2.25rem" }}
            >
              <div className="mb-4 mb-lg-5 text-center text-lg-left">
                <h1>Intercept & Modify HTTP Requests</h1>
              </div>
              <div
                className="mb-2 mb-lg-5 text-center text-lg-left"
                style={{ maxWidth: "60ch" }}
              >
                <h4 className="font-weight-light">
                  Modify Headers, Redirect URLs, Switch Hosts, Mock API
                  Response, Delay Network requests, Insert Custom Scripts and
                  much more.
                </h4>
              </div>
              <HeroSectionDownloadContainer />
            </div>
            <div className="col-12 col-md-5  mt-lg-0 mt-1 pr-0 d-flex justify-content-end">
              <div
                style={{
                  width: "300px",
                  height: "150%",
                  backgroundColor: "#FBDA00",
                  borderRadius: "300px 0 0 300px",
                }}
                className="mt-lg-n5 mt-n0 d-none d-lg-block"
              ></div>
              <div
                className="d-none d-lg-block"
                style={{ position: "absolute", right: "0px", zIndex: "1" }}
              >
                <img
                  width="600px"
                  height="429px"
                  fetchpriority="high"
                  alt="Desktop App Image"
                  src="/assets/img/home/requestly-mac-app-cut.png"
                />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center pb-5 mt-3 mt-lg-7 pt-2">
            <div className="col-auto d-flex align-items-center mt-2">
              <span
                className="text-black rounded p-2"
                style={{ backgroundColor: "#FBDA00", fontSize: "1.5rem" }}
              >
                4.7
              </span>
              <span className="mx-1">
                <img
                  width="26px"
                  height="26px"
                  loading="lazy"
                  alt="Star"
                  src="/assets/img/home/star.svg"
                />
              </span>
              <span className="mx-1">
                <img
                  width="26px"
                  height="26px"
                  loading="lazy"
                  alt="Star"
                  src="/assets/img/home/star.svg"
                />
              </span>
              <span className="mx-1">
                <img
                  width="26px"
                  height="26px"
                  loading="lazy"
                  alt="Star"
                  src="/assets/img/home/star.svg"
                />
              </span>
              <span className="mx-1">
                <img
                  width="26px"
                  height="26px"
                  loading="lazy"
                  alt="Star"
                  src="/assets/img/home/star.svg"
                />
              </span>
              <span className="mx-1">
                <img
                  width="26px"
                  height="26px"
                  loading="lazy"
                  alt="Star"
                  src="/assets/img/home/star.svg"
                />
              </span>
            </div>
            <div className="col-auto d-flex align-items-center mt-2">
              <span className="mx-1">
                <a
                  onClick={() => {
                    trackDownloadClickedEvent("chrome_extension", "hero");
                  }}
                  href="https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa"
                >
                  <img
                    width="60px"
                    height="60px"
                    loading="lazy"
                    alt="Chrome Store Icon"
                    src="/assets/img/home/chromeStoreIcon.svg"
                  />
                </a>
              </span>
              <span className="mx-2" style={{ fontSize: "1.5rem" }}>
                900+ Reviews
              </span>
            </div>
            <div className="col-auto d-flex align-items-center mt-2">
              <span>
                <img
                  width="34px"
                  heigth="34px"
                  loading="lazy"
                  alt="Users Icon"
                  src="/assets/img/home/peopleIcon.svg"
                />
              </span>
              <span className="mx-2" style={{ fontSize: "1.5rem" }}>
                15,000+ Active Users
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Requestly */}
      <section className="section section-lg pt-0">
        <div className="container mx-0" style={{ minWidth: "100%" }}>
          <div className="container">
            <div className="d-flex justify-content-center">
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                ref={videoRef}
                width="20%"
              >
                <source
                  src="/assets/videos/requestly-loop.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <SectionHeader
              title="What is Requestly?"
              description="Requestly is a lightweight proxy available as a browser extension & desktop app to intercept & modify network requests. Using Requestly you can Mock API Responses, Modify Headers, Redirect Url, Delay/Throttle requests, etc. Developers can collaborate by sharing rules with each other."
            />
          </div>
          <div className="container">
            <img
              width="1370px"
              height="677px"
              loading="lazy"
              alt="what-is-requestly-mac-app"
              src="/assets/img/home/Requestly-app-2.svg"
            />
          </div>
          <div className="row px-1 mt-5 mt-lg-6">
            <div className="col d-flex justify-content-center">
              <Stats title="200,000+" des="Rules Created" />
            </div>
            <div className="col d-flex justify-content-center">
              <Stats title="15,000+" des="Current Users" />
            </div>
            <div className="col d-flex justify-content-center">
              <Stats title="10,000+" des="Rules Shared" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section-lg pt-0">
        <div className="container">
          <SectionHeader
            title="Powerful & Easy to Use Debugging Tool"
            description="Quickly dive into the network level to diagnose and fix problems with Requestly debugging features."
          />
          <Feature
            side="right"
            featureName="Mock API Response"
            imgSrc="/assets/img/illustrations/mockAPIs.png"
            alt="Requestly desktop  can be used for mock response and cross device testing | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative"
            link="/feature/mock-server"
            featureContent="Return custom (mocked) response for your API requests. Can be used to test API changes, newer API version in your app."
          />

          <Feature
            side="left"
            featureName="Modify Headers"
            imgSrc="/assets/img/illustrations/headerRule.png"
            alt="Requestly desktop is complete http header tool that can be used to modify-headers, intercept http request, cross device testing | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative"
            link="/feature/modify-request-response-headers"
            featureContent="Add, Delete or Replace request & response headers. Can be used to test X-Frame-Options, Content-Security-Policy, Add authorization headers, debug CORS etc."
          />
          <Feature
            side="right"
            featureName="Redirect URL"
            imgSrc="/assets/img/illustrations/redirectRule.png"
            alt="Requestly desktop  can be used to insert custom scripts and host scripts | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative"
            link="/feature/redirect-url"
            featureContent="Redirect requests matching a URL pattern to different destination URL. Can be used to load unminified scripts, test different library versions, load local version of script in production env etc."
          />
          <Feature
            side="left"
            featureName="Insert Custom Scripts"
            imgSrc="/assets/img/illustrations/insertRule.png"
            alt="Requestly desktop is complete http header tool that can be used for browser redirect script | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative"
            link="/feature/insert-custom-scripts"
            featureContent="Allows you to automate, scrape & change webpage's behaviour with little knowledge of JS & CSS. Use File Hosting service to upload long scripts and get a URL to be used in your websites or Requestly rules."
          />
          <Feature
            side="right"
            featureName="Collaborate with team mates"
            imgSrc="/assets/img/illustrations/SharedList.png"
            alt="Requestly desktop  can be used for mock response and cross device testing | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative"
            link="/blog/2018/06/14/share-rules-with-other-users/"
            featureContent="Instantly share rules and collaborate with your teammates and other developers."
          />
        </div>
      </section>

      {/* Additional Features */}
      <section className="section bg-primary">
        <div className="container">
          <h1 className="display-3 mb-6 text-white font-weight-normal text-center">
            Additional Features
          </h1>
          <div className="row">
            <ExtraFeature
              title="Multiple Rule Types"
              description="Requestly supports multiple rule types to cater your need of modifying network request, including Redirection, User Agent Modification, Script Insertion, Resource Blocker, Header Modification etc."
              icon="fas fa-layer-group"
            />
            <ExtraFeature
              title="Regex & Wildcard Support"
              description="Requestly has rich interface to provide url matching conditions. Multiple Operators are supported - Equals, Contains, Regex (Matches) and Regex with wildcard too."
              icon="fas fa-spell-check"
            />
            <ExtraFeature
              title="Activation/Deactivation"
              description="Requestly provides single click activation and deactivation of entire extension, individual rule groups or rules. Mark the rule as inactive when you don't need it for sometime."
              icon="fas fa-power-off"
            />
          </div>
          <div className="row">
            <ExtraFeature
              title="Easy Collaboration"
              description="Users can easily collaborate with other users by sharing rules between them and improve the way they work together."
              icon="fas fa-user-friends"
            />
            <ExtraFeature
              title="Mock Server"
              description="Requestly allows uploading, creating and managing js, css, json etc files which can be used in Requestly rules. No need to setup local server now."
              icon="fas fa-server"
            />
            <ExtraFeature
              title="Data Backup"
              description="Requestly allows you to take backup of your data either by downloading rules as text file or generating a link."
              icon="fas fa-sync-alt"
            />
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="section section-md">
        <div className="">
          <div className="container">
            <SectionHeader title="Customer Success Stories" description="" />
            <CustomerStories />
          </div>
        </div>
      </section>

      {/* Wall of Love */}
      <section className="section section-md">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1 className="h1 font-weight-bolder mb-4">
                Wall of Love <i className="fas fa-heart text-secondary"></i>
              </h1>
              <p className="lead">
                We are proud of 150K+ happy users. Hear what they say about us.
              </p>
            </div>
          </div>
        </div>
        <div>
          <TestimonialSection reviewList={reviewList} showOnHomePage={true} />
        </div>
      </section>

      {/* Company Logos */}
      <section>
        <div className="mt-lg-4 mx-lg-7 mr-5 ml-5 mb-5 ">
          <h2
            className="text-center mb-0 mt-5 mt-lg-6 mb-lg-4"
            style={{ fontSize: "2rem" }}
          >
            Trusted by developer teams from
          </h2>
          <CompanyLogo />
        </div>
      </section>

      {/* FAQ */}
      <section className="h-100 section bg-primary">
        <Faq Questions={Questions} />
      </section>

      {/* Subscribe Email */}
      <LearnUsage />
    </>
  );
};

export default HomePage;
