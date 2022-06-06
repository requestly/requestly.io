import androidReviews from "../utils/json/androidReviews.json";
import TestimonialSection from "../components/testimonial";
import { Questions } from "../utils/androidSdkFaqs";
import { PopupButton } from "@typeform/embed-react";
import LearnUsage from "../components/learnUsage";
import "react-medium-image-zoom/dist/styles.css";
import { useMediaQuery } from "react-responsive";
import HeadTags from "../components/HeadTags";
import GitHubButton from "react-github-btn";
import Zoom from "react-medium-image-zoom";
import Faq from "../components/faq";
import ProductHuntTag from "../components/ProductHuntTag";

const featuresComingSoon = [
  {
    displayName: "Production Debugging",
    icon: "fas fa-bug",
    description:
      "Scared of meddling with production issues? No more! Requestly will let you debug production issues with ease!",
  },
  {
    displayName: "Crash Analysis",
    icon: "fas fa-ban",
    description:
      "Trace crashes in your Android App with Requestly. Easily debug and catch errors to fix crashes.",
  },
  {
    displayName: "Detailed Bug Reporting",
    icon: "fas fa-book",
    description:
      "With Requestly, you can make sure that whatever bugs you're getting will be extensively detailed and written for humans, not computers.",
  },
  {
    displayName: "Session Sharing",
    icon: "fas fa-share",
    description:
      "Share sessions of your Android App with your teammates, forget setting up the tedious app state management again and again.",
  },
  // {
  //   displayName: "Analytics Event Debugger",
  //   icon: "fas fa-chart-line",
  //   description: "Debug and validate your analytics events easily",
  // },
];

const AndroidInterceptor = () => {
  const md = useMediaQuery({ minWidth: 900 }, { deviceWidth: 900 });

  return (
    <div>
      <HeadTags
        title="Debug Android App | Requestly"
        description="Debug your android app from anywhere"
        keywords="Requestly for Android App, Debug from Anywhere, Modify Headers, Redirect URLs, Switch Hosts, Mock API Response, Delay Network requests, Insert Custom Scripts"
      />
      <div>
        <section className="section-header bg-primary text-white pb-6 pt-7 pt-lg-7">
          <div className="container mx-0" style={{ maxWidth: "100%" }}>
            <div className="mb-4 row pr-5">
              <div className="d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 mt-lg-0 mt-1 pl-3 pl-lg-5">
                  <div className="mb-4 mb-lg-5 text-center text-lg-left">
                    <h1>Powerful Open-Source Android App Debugger</h1>
                  </div>
                  <div
                    className="mb-2 mb-lg-5 text-center text-lg-center"
                    style={{ maxWidth: "60ch" }}
                  >
                    <div className="rq-landing-list">
                      <div className="rq-landing-list-item">
                        <img
                          src={"/assets/img/icons/check.svg"}
                          loading="lazy"
                          alt=""
                        />
                        <div className="rq-landing-list-item-text">
                          In-app API Inspector
                        </div>
                      </div>
                      <div className="rq-landing-list-item">
                        <img
                          src={"/assets/img/icons/check.svg"}
                          loading="lazy"
                          alt=""
                        />
                        <div className="rq-landing-list-item-text">
                          Simple 3-Line Integration
                        </div>
                      </div>
                      <div className="rq-landing-list-item">
                        <img
                          src={"/assets/img/icons/check.svg"}
                          loading="lazy"
                          alt=""
                        />
                        <div className="rq-landing-list-item-text">
                          No SSL Certificates Installation or Proxy Hassles
                        </div>
                      </div>
                      <div className="rq-landing-list-item">
                        <img
                          src={"/assets/img/icons/check.svg"}
                          loading="lazy"
                          alt=""
                        />
                        <div className="rq-landing-list-item-text">
                          Modify API Response, Throttle Network, Reroute
                          Traffic, etc
                        </div>
                      </div>
                      <div className="rq-landing-list-item">
                        <img
                          src={"/assets/img/icons/check.svg"}
                          loading="lazy"
                          alt=""
                        />
                        <div className="rq-landing-list-item-text">
                          Collaborate with teammates in a single click
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-lg-0 mt-5">
                    <div className="row d-flex justify-content-center justify-content-lg-start align-items-center">
                      <div className="hero-button-wrapper">
                        <PopupButton
                          id={"BUsaN1l2"}
                          style={{ fontSize: 15 }}
                          className="d-flex justify-content-center align-items-center mx-2 mb-md-2 btn mb-2 mr-2 btn-secondary btn-with-text-below"
                          type="button"
                        >
                          <i className="fa fa-paper-plane mr-2"></i>Get Started
                        </PopupButton>
                        <span style={{ visibility: "hidden" }}>6-Months Free</span>
                      </div>
                      <div className="hero-button-wrapper">
                        <button
                          className="d-flex justify-content-center align-items-center mx-2 mb-md-2 btn mb-2 mr-2 btn-white btn-with-text-below"
                          type="button"
                          onClick={() =>
                            window.open(
                              "https://youtu.be/Zf4iJjnhPzY",
                              "_blank"
                            )
                          }
                        >
                          <i className="fa fa-play-circle mr-2"></i>Watch Demo
                        </button>
                        <span
                          className="font-weight-light"
                          style={{ visibility: "hidden" }}
                        >
                          Watch Demo
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <ProductHuntTag />
                  </div> 
                </div>
                <div className="rounded-xl">
                  <Zoom>
                    <img
                      src={"/assets/img/screenshots/android-interceptor.gif"}
                      className="rounded-lg"
                      alt="Interceptor"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section pb-3 pb-lg-5">
          <div className="container">
            <div className="row justify-content-center mb-5 mb-md-5">
              <div className="col-12 col-md-8 text-center">
                <h2 className="h1 font-weight-bolder mb-4">Features</h2>
                <p className="lead">
                  Requestly's Android Interceptor is simple, fast and gives you
                  a lot of control over your Android App. Make your debugging
                  experience better with these features:
                </p>
              </div>
            </div>
            <div className="row justify-content-center mb-5 mb-lg-5">
              <div className="col-6 col-md-3 text-center mb-4">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle icon-secondary mb-4">
                  <i className="fab fa-github"></i>
                </div>
                <h3 className="font-weight-bolder">Opensource</h3>
                <p className="text-gray">Built in Public</p>
              </div>
              <div className="col-6 col-md-3 text-center mb-4">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle icon-secondary mb-4">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="font-weight-bolder">3</h3>
                <p className="text-gray">Lines Integration</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle icon-secondary mb-4">
                  <i className="fab fa-android"></i>
                </div>
                <h3 className="font-weight-bolder">600kb</h3>
                <p className="text-gray">Lightweight Android SDK</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle icon-secondary mb-4">
                  <i className="fas fa-book"></i>
                </div>
                <h3 className="font-weight-bolder">One time Setup</h3>
                <p className="text-gray">Setup Once and Use Anywhere</p>
              </div>
            </div>

            <div id="rq_DIV_1">
              <div id="rq_DIV_2">
                <div id="rq_DIV_3">
                  <h4 id="rq_H4_4">The Old Way</h4>
                  <Zoom>
                    <img
                      src="/assets/img/illustrations/without-rq.png"
                      alt="the"
                      id="rq_IMG_5"
                    />
                  </Zoom>
                </div>
                <div id="rq_DIV_7">
                  <h4 id="rq_H4_8">vs</h4>
                  <img
                    src="/assets/img/illustrations/separator.png"
                    width="2"
                    alt=""
                    id="rq_IMG_9"
                  />
                </div>
                <div id="rq_DIV_10">
                  <h4 id="rq_H4_11">The Requestly Way</h4>
                  <Zoom>
                    <img
                      src="/assets/img/illustrations/with-rq.png"
                      alt="Zipy way"
                      id="rq_IMG_12"
                    />
                  </Zoom>
                </div>
              </div>
            </div>

            <div className="row row-grid align-items-center mb-5 mb-md-7">
              <div className="col-12 col-md-5 order-md-2">
                <h2 className="font-weight-bolder mb-4">
                  Only One time setup required
                </h2>
                <p className="lead">
                  Forget setting up proxies and all those configuration
                  everytime.
                  <br />
                  Setup once and your whole team from devs to QAs to Product
                  Managers to CTO can instantly debug requests.
                </p>
                <a
                  href="https://docs.requestly.io/mobile-interceptor/tutorial"
                  className="btn btn-primary mt-3 animate-up-2"
                >
                  Learn More{" "}
                  <span className="icon icon-xs ml-2">
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                </a>
              </div>
              <div className="col-12 col-md-6 mr-lg-auto">
                <Zoom>
                  <img
                    src="/assets/img/screenshots/view-request-android-interceptor.png"
                    alt="View Android App Request"
                    className="rounded-lg"
                  />
                </Zoom>
              </div>
            </div>
            <div className="row row-grid align-items-center mb-5 mb-md-7">
              <div className="col-12 col-md-5">
                <h2 className="font-weight-bolder mb-4">3 line integration</h2>

                <p className="lead">
                  Integrate Requestly Android Interceptor in just 3 lines!
                  Debugging has never been this fast!
                </p>
                <a
                  href="https://docs.requestly.io/mobile-interceptor/tutorial"
                  className="btn btn-primary mt-3 animate-up-2"
                >
                  Learn More{" "}
                  <span className="icon icon-xs ml-2">
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                </a>
              </div>
              <div className="col-12 col-md-6 ml-md-auto">
                <Zoom>
                  <img
                    src="/assets/img/screenshots/5-line-setup-android-interceptor.png"
                    alt="3 line setup"
                    className="rounded-lg"
                  />
                </Zoom>
              </div>
            </div>
            <div className="row row-grid align-items-center mb-5 mb-md-7">
              <div className="col-12 col-md-5 order-md-2">
                <h2 className="font-weight-bolder mb-4">
                  Debug requests from anywhere
                </h2>
                <p className="lead">
                  View and Modify Requests from anywhere.
                  <br />
                  Modify Headers, Redirect URLs, Switch Hosts, Mock API
                  Response, Delay Network requests, Insert Custom Scripts and
                  much more.
                </p>
                <a
                  href="https://docs.requestly.io/mobile-interceptor/tutorial"
                  className="btn btn-primary mt-3 animate-up-2"
                >
                  Learn More{" "}
                  <span className="icon icon-xs ml-2">
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                </a>
              </div>
              <div className="col-12 col-md-6 mr-lg-auto">
                <Zoom>
                  <img
                    src="/assets/img/screenshots/requestly-rules.png"
                    alt="Modify Request"
                    className="rounded-lg"
                  />
                </Zoom>
              </div>
            </div>
            <div className="row row-grid align-items-center">
              <div className="col-12 col-md-5">
                <h2 className="font-weight-bolder mb-4">Built in Public</h2>
                <p className="lead">
                  Completely open-source.
                  <br />
                  Make sure to check out the code and leave a star&nbsp;
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </p>
                <GitHubButton
                  href="https://github.com/requestly/requestly-android-sdk"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star requestly/requestly-android-sdk on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
              <div className="col-12 col-md-6 ml-md-auto">
                <Zoom>
                  <img
                    src="/assets/img/screenshots/requestly-github.png"
                    alt="Requestly Github"
                    className="rounded-lg"
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="col-12 text-center">
              <h2 className="h1 px-lg-5">See it in Action</h2>
              <p className="lead px-lg-8">
                Checkout our demo Android Apps to see how Requestly's Android
                Interceptor works
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/requestly/android-interceptor-examples"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Demo Android Apps{" "}
                <span className="icon icon-sm ml-2">
                  <i className="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* MORE FEATURES */}
        <section className="section section-lg-4 bg-primary text-white">
          <div className="container">
            <div className="row justify-content-center mb-5 mb-lg-6">
              <div className="col-12 text-center">
                <h2 className="h1 px-lg-5">More Awesome Features</h2>
                <p className="lead px-lg-8">
                  Upcoming exciting Android Interceptor SDK features
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              {featuresComingSoon.map((feature, key) => (
                <a className="col-12 col-sm-6 col-lg-3" key={key}>
                  <div //eslint-disable-line
                    className="card fh-300 bg-white shadow-soft text-primary rounded mb-4"
                  >
                    <div className="px-3 px-lg-4 py-5 text-center">
                      <span className="icon icon-lg mb-4">
                        <i className={feature.icon}></i>
                      </span>
                      <h5 className="font-weight-normal text-primary">
                        {feature.displayName}
                      </h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </a>
              ))}
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
                  Over 100 companies have tried out our SDK. Hear what they say
                  about us.
                </p>
              </div>
            </div>
          </div>
          <div>
            <TestimonialSection
              reviewList={androidReviews}
              showOnHomePage={true}
            />
          </div>
        </section>

        {/* FAQs */}
        <section className="h-100 section bg-primary mb-5">
          <Faq Questions={Questions} />
        </section>
      </div>

      <LearnUsage />
    </div>
  );
};

export default AndroidInterceptor;
