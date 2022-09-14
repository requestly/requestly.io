import HeadTags from "../components/HeadTags";
import ComparisonTable from "../components/comparisonTable";
import LearnUsage from "../components/learnUsage";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CharlesAlternative = () => {
  const platforms = [
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

  return (
    <div>
      <HeadTags
        title="Charles Proxy Alternative"
        description="Charles Proxy Alternative"
        keywords={"Charles Proxy Alternative"}
      />
      <section className="section-header bg-primary text-white pb-9 pb-lg-12 mb-4 mb-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 w-100 text-center">
              <h1 className=" display-2 mb-3">
                Requestly ➜ Better alternative to Charles Proxy
              </h1>
            </div>
          </div>
        </div>
        <div className="pattern bottom"></div>
      </section>

      <section className="section section-lg pt-0 pb-5">
        <div className="container mt-n7 mt-lg-n12 z-2">
          <div className="row justify-content-center">
            <div className="col">
              <div className="card shadow-soft border-light p-4 p-md-5">
                <div className="d-flex  justify-content-sm-center">
                  <div className="text-container">
                    <p style={{ fontSize: "1.2rem" }}>
                      <a
                        style={{ fontWeight: "bolder" }}
                        href="https://www.charlesproxy.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Charles
                      </a>{" "}
                      is widely used when it comes to debugging HTTP traffic.
                      Having used Charles myself, I realized Charles works but
                      it is a lot clunky and it has been in maintenance mode for
                      quite some time. Charles has a greater learning curve,
                      collaboration capabilities are not there, doesn't work
                      with VPN, requires switching between applications, etc. I
                      used Charles for the lack of a better product and hence
                      decided to build Requestly i.e. a modern client-side web
                      debugging proxy that solves all these problems really
                      well.
                    </p>
                    <p style={{ fontSize: "1.2rem" }}>
                      <strong style={{ fontWeight: "bolder" }}>
                        Requestly
                      </strong>{" "}
                      is a lightweight client-side debugging proxy to debug web
                      & mobile apps. For the web, Requestly provides a browser
                      extension on all major browsers and for mobile, Requestly
                      provides a{" "}
                      <a
                        href="https://requestly.io/debug-android-apps/"
                        target="_blank"
                        style={{ fontWeight: "bolder" }}
                        rel="noreferrer"
                      >
                        native Android SDK
                      </a>{" "}
                      that provides a Chrome-like developer tool for Android
                      debug builds. Requestly also has an{" "}
                      <a
                        href="https://requestly.io/feature/mock-server/"
                        target="_blank"
                        style={{ fontWeight: "bolder" }}
                        rel="noreferrer"
                      >
                        In-built mock server
                      </a>{" "}
                      and allows developers/QAs to record the sessions that
                      facilitate data-rich bug reporting with network logs,
                      console logs, video of the session, env details, etc.
                    </p>

                    <p style={{ fontSize: "1.2rem" }}>
                      Here's a detailed comparison table of how Requestly fares
                      with Charles
                    </p>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-sm-center mt-5">
                  <ComparisonTable />
                </div>

                <div className=" mt-5 w-100 d-flex flex-column justify-content-lg-center align-items-center">
                  <div className="display-4 text-black">
                    Download Requestly for free
                  </div>

                  <div className="mt-3 flex-sm-wrap">
                    {platforms.map((platform, index) => (
                      <a href={platform.href} key={index + 1}>
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 50, hide: 50 }}
                          overlay={
                            <Tooltip id={`tooltip-${index}`}>
                              {platform.title}
                            </Tooltip>
                          }
                        >
                          <img
                            src={platform.src}
                            alt={platform.alt}
                            className="platform-icon"
                          />
                        </OverlayTrigger>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="d-flex justify-content-lg-center test-class">
                  <div className="w-100">
                    <h3 className="h3 font-weight-bolder mt-5 mb-3">
                      HTTPs Requests Modifications supported by Requestly
                    </h3>
                    <p style={{ fontSize: "1.2rem" }}>
                      Requestly provides support to modify individual pieces of
                      HTTP request/response be it Setting up URL Redirects,
                      Modifying Query Parameters, Modifying Headers, Modifying
                      API Responses, etc.
                    </p>
                    <p style={{ fontSize: "1.2rem" }}>
                      Here's a demo of{" "}
                      <a
                        href="https://www.youtube.com/watch?v=KIPbxUGUYq8&ab_channel=Requestly"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Modifying API responses
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LearnUsage />
    </div>
  );
};

export default CharlesAlternative;
