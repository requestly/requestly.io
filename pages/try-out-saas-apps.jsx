import HeroSectionDownloadContainer from "../components/HeroSectionDownloadContainer";
import TestimonialSection from "../components/testimonial";
import SectionHeader from "../components/section-header";
import BraggingStats from "../components/BraggingStats";
import reviewList from "../utils/json/reviewList.json";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import HeadTags from "../components/HeadTags";

const renderCta = () => {
  return <HeroSectionDownloadContainer />;
};

const TryApps = () => {
  const md = useMediaQuery({ minWidth: 900 });
  const videoRef = useRef(null);

  const [mounted, setMounted] = useState(null);

  useEffect(() => {
    setMounted(md);
  }, [md]);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <div>
        <HeadTags title={"Try Out SaaS Apps - No Code Required | Requestly"} />

        <section className="section-header bg-primary text-white pb-0 pt-3 pt-lg-7">
          <div className="container mx-0" style={{ maxWidth: "100%" }}>
            <div className="row mb-4">
              <div className="col-12 col-md-6 mt-lg-0 mt-1 pl-3 pl-lg-5">
                <div className="mb-4 mb-lg-5 text-center text-lg-left">
                  <h1>Try SaaS Apps in less than 30 seconds!</h1>
                </div>
                <div
                  className="mb-2 mb-lg-5 text-center text-lg-left"
                  style={{ maxWidth: "60ch" }}
                >
                  <h4 className="font-weight-light">
                    Using Requestly, you can directly insert the installation
                    code that you get for integration from the 3rd party app and
                    try it on any website.
                  </h4>
                  <div className="mt-lg-0 pt-2">
                    {renderCta()}
                    <a href="https://www.producthunt.com/posts/requestly-2-0">
                      <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=312556&theme=light"
                        alt="Requestly Product Hunt"
                        className="mt-4 ml-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 mt-lg-0 mt-5 d-flex justify-content-end">
                <div style={{ width: "100%" }}>
                  <img
                    src="/assets/img/illustrations/try-out-saas-apps.png"
                    alt="Trying Out SaaS Apps in less than 30 seconds!"
                    className="rounded-xl"
                    style={{
                      width: md ? "70%" : "100%",
                      position: md ? "absolute" : "relative",
                      right: "0",
                    }}
                  />
                </div>
              </div>
            </div>
            <BraggingStats />
          </div>
        </section>

        <section className="mt-7 mb-5 container text-center">
          <SectionHeader title="Why try SaaS Apps using Requestly?" />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div className="card border-light p-4">
                <div className="card-body">
                  <h2 className="display-3 mb-3">
                    Finding the right App is difficult
                  </h2>
                  <span className="lead">
                    There are endless number of tools that can be integrated.
                    Trying them all, can be a real pain.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div className="card border-light p-4">
                <div className="card-body">
                  <h2 className="display-3 mb-3">
                    Code integrations are tedious
                  </h2>
                  <span className="lead">
                    Code integrations are time and effort taking. This is why
                    only a limited options can be considered for integration.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div className="card border-light p-4">
                <div className="card-body">
                  <h2 className="display-3 mb-3s">Technical Constraints</h2>
                  <span className="lead">
                    Product Managers and Founders find it difficult trying new
                    apps. They, themselves cannot take charge and depend instead
                    on developers.
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3 mt-md-5 ">
              <div className="col-12 col-md-8 text-center">
                <h2 className="h2 font-weight-bolder mb-4 mt-4">
                  Using Requestly you can try out SaaS Apps in less than 30
                  seconds and that too without any code!
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <video autoPlay muted loop id="myVideo" ref={videoRef} width="20%">
              <source
                src="/assets/videos/requestly-loop.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="container">
          <div className="row justify-content-center mb-5 mb-md-5">
            <div className="col-12 col-md-8 text-center">
              <h2 className="h1 font-weight-bolder mb-4">
                See Requestly in Action!
              </h2>
              <p className="lead">
                Here are a few examples showing how you can integrate some of
                the most popular tools
              </p>
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">
                Try out Convertflow on Netflix
              </h2>
              <p className="lead">
                Suppose you wish to integrate sticky bar into your website. You
                can easily insert installation scripts for different sticky bar
                providers including Convertflow in your website via Requestly
                and test them out.
              </p>
              <a
                href="https://requestly.io/blog/trying-out-convertflow-on-netflix"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Know More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <img
                src="/assets/blog-images/cover_convertflow.png"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5 order-md-2">
              <h2 className="font-weight-bolder mb-4">
                Try Out Crisp on Amazon
              </h2>
              <p className="lead">
                Suppose you wish to integrate a chat tool into your website.
                Checking out different chat tools using Requestly is as easy as
                pie.
              </p>
              <p className="lead">Checkout this quick video to know more!</p>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5 col-12 col-md-6 mr-lg-auto">
              <iframe
                height="400"
                width="640"
                src="https://www.youtube.com/embed/yVgOcKv2rjc"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">
                Try out Wisepops on eBay
              </h2>
              <p className="lead">
                Popups are very essential to generate leads and convey
                information. You can easily insert installation scripts for
                different popup providers in your website via Requestly and test
                them out.
              </p>
              <a
                href="https://requestly.io/blog/trying-out-wisepops-on-ebay"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Know More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <img
                src="/assets/blog-images/cover_wisepops.png"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5 order-md-2">
              <h2 className="font-weight-bolder mb-4">
                Try Out Hubspot on Netflix
              </h2>
              <p className="lead">
                CRM platforms like Hubspot have all the tools and integrations
                you need for marketing, sales, content management, and customer
                service.
              </p>
              <p className="lead">
                Checkout this quick video to know the quickest way to test them
                out!
              </p>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5 col-12 col-md-6 mr-lg-auto">
              <iframe
                height="400"
                width="640"
                src="https://www.youtube.com/embed/zV-Wgg0fPjs"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">
                Try out Beamer on Stackoverflow
              </h2>
              <p className="lead">
                Changelog and Feedback tools like Beamer are essential for all
                SaaS businesses. Trying and comparing them is easier than ever.
              </p>
              <a
                href="https://requestly.io/blog/trying-out-beamer-on-stackoverflow"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Know More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <img
                src="/assets/blog-images/cover_beamer.png"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5 order-md-2">
              <h2 className="font-weight-bolder mb-4">
                Try Out Drift on Example.com
              </h2>
              <p className="lead">
                Suppose you wish to integrate a chat tool into your website.
                Checking out different chat tools using Requestly is as easy as
                pie.
              </p>
              <p className="lead">Checkout this quick video to know more!</p>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5 col-12 col-md-6 mr-lg-auto">
              <iframe
                height="400"
                width="640"
                src="https://www.youtube.com/embed/Kpuhw58FwB4"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">
                Try out Popupsmart on Stackoverflow
              </h2>
              <p className="lead">
                Popups are very essential to generate leads and convey
                information. You can easily insert installation scripts for
                different popup providers in your website via Requestly and test
                them out.
              </p>
              <a
                href="https://requestly.io/blog/trying-outpopupsmart-on-stackoverflow"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Know More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <img
                src="/assets/blog-images/cover_popupsmart.png"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1 className="h1 font-weight-bolder mb-4">
                Wall of Love <i className="fas fa-heart text-secondary"></i>
              </h1>
              <p className="lead">
                We are proud of our 150K+ happy users from 500+ organizations.
                Hear what they say about us.
              </p>
            </div>
          </div>
          <div>
            <TestimonialSection reviewList={reviewList} showOnHomePage={true} />
          </div>
        </section>
      </div>
    </>
  );
};

export default TryApps;
