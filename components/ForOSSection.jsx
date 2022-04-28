import {
  submitCustomEvent,
  trackDownloadClickedEvent,
} from "../utils/Analytics";
import { CONSTANTS } from "../utils/constants/index";

const ForOSSection = ({
  osName,
  videoRef,
  videoRef2,
  link,
  iconName,
  browserName,
  headerVideo,
  mockUiVideo,
  redirectProdImage,
  modifyHeadersImage,
  mockApiImage,
  targetSelf,
}) => {
  return (
    <div>
      <section className="section-header section-lg pb-3 bg-primary text-white pb-lg-7">
        <div className="container mx-0" style={{ maxWidth: "100%" }}>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="col-12 col-md-5 mb-5 mt-lg-0 mt-1 pl-3 pl-lg-5 d-flex d-md-block flex-column justify-content-center align-items-center"
              style={{ lineHeight: "2.25rem" }}
            >
              <div className="mb-4 mb-lg-5 text-center text-lg-left">
                <h1>Supercharge debugging in {browserName || osName}</h1>
              </div>
              <div
                className="mb-2 mb-lg-5 text-center text-lg-left d-flex justify-content-center align-items-center"
                style={{ maxWidth: "60ch" }}
              >
                <h4 className="font-weight-light">
                  Modify Headers, Redirect URLs, Switch Hosts, Mock API
                  Response, Delay Network requests, Insert Custom Scripts and
                  much more.
                </h4>
              </div>
              <div className="row d-flex justify-content-center justify-content-lg-start align-items-center">
                <div className="d-flex justify-content-center align-items-center mx-2 mb-md-2">
                  <a
                    onClick={(e) => {
                      try {
                        //Analytics
                        // submitCustomEvent(
                        //   CONSTANTS.GA_EVENTS.CATEGORIES.LANDING_PAGE,
                        //   CONSTANTS.GA_EVENTS.ACTIONS.CLICKED,
                        //   `hero_section_download_btn_clicked`
                        // );
                        trackDownloadClickedEvent(osName, "hero");
                      } catch (error) {
                        // console.log(error);
                      }
                    }}
                    href={link}
                    target={targetSelf ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="btn btn-white btn-md mt-4 mt-lg-1"
                    style={{ color: "#0E38BA" }}
                  >
                    Download for {browserName || osName} &nbsp;
                    <span>
                      <img
                        alt={`Requestly for Linux |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`}
                        src={`https://img.icons8.com/ios-filled/128/0648b3/${iconName}.png`}
                        height="36px"
                        width="36px"
                      />
                    </span>
                  </a>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2 mb-md-2">
                  <a
                    href={
                      osName === "MacOS"
                        ? "https://docs.requestly.io/desktop-app/how-to.../osx-setup"
                        : "https://docs.requestly.io/"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex align-items-center btn btn-white btn-md mt-4 mt-lg-1"
                    style={{ color: "#0E38BA" }}
                  >
                    Documentation &nbsp;
                    <span>
                      <img
                        src="https://img.icons8.com/material/50/0648b3/book--v1.png"
                        alt="Book icon"
                        height="36px"
                        width="36px"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                ref={videoRef}
                width="90%"
                className="squircle-image"
              >
                <source src={headerVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="section pb-3 pb-lg-12">
        <div className="container">
          <div className="row justify-content-center mb-5 mb-md-5">
            <div className="col-12 col-md-8 text-center">
              <h2 className="h1 font-weight-bolder mb-4">Features</h2>
              <p className="lead">
                Increase debugging efficiency in {browserName || osName} using
                these features
              </p>
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">
                Debug production/staging websites without deployment
              </h2>
              <p className="lead">
                Use local files(js/css) directly in production/staging
                environments
              </p>
              <p className="lead">
                Decrease time spent in deployments for testing small changes
              </p>
              <a
                href="https://requestly.io/blog/replace-rule-documentation/"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Learn More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <img
                src={redirectProdImage}
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5 order-md-2">
              <h2 className="font-weight-bolder mb-4">
                Add/Modify/Delete Request or Response Headers in {browserName}
              </h2>
              <p className="lead">
                Add test headers like trace-id, uid in production without
                modifying source code
              </p>
              <p className="lead">Bypass CORS issues in one click</p>
              <a
                href="https://docs.requestly.io/using-rules/modify-headers"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Learn More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 mr-lg-auto">
              <img
                src={modifyHeadersImage}
                alt="Modify Headers"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">
                Modify Response on the fly
              </h2>
              <p className="lead">
                Modify the response of a request (Manually / Programatically) in
                Production without changing anything in backend
              </p>
              <a
                href="https://docs.requestly.io/using-rules/modify-ajax-response-rule"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Learn More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                ref={videoRef2}
                width="90%"
                className="rounded-lg mb-5"
              >
                <source src={mockUiVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5 order-md-2">
              <h2 className="font-weight-bolder mb-4">
                Mock UI without creating API
              </h2>
              <p className="lead">
                Simulate UI behaviour when the backend isn&apos;t ready and you
                want to mock the API response.
              </p>
              <a
                href="https://requestly.io/feature/mock-server/"
                className="btn btn-primary mt-3 animate-up-2"
              >
                Learn More{" "}
                <span className="icon icon-xs ml-2">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-6 mr-lg-auto">
              <img src={mockApiImage} alt="Mock API" className="rounded-lg" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card border-light p-4">
                <div className="card-body">
                  <h2 className="display-3 mb-2">Collaboration</h2>
                  <span>
                    Share your rules with anyone in company using Sharedlist
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card border-light p-4">
                <div className="card-body">
                  <h2 className="display-3 mb-2">Mock Status Code</h2>
                  <span>
                    Mock Response Status code of any request to test error
                    scenarios
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card border-light p-4">
                <div className="card-body">
                  <h2 className="display-3 mb-2">Delay Request</h2>
                  <span>
                    Delay Any request on production to replicate api latencies
                    and debug race conditions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForOSSection;
