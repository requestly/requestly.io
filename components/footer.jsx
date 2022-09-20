import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  trackSocialHandlesClickedEvent,
  trackDownloadClickedEvent,
  trackInfoPageClickedEvent,
  trackFeatureClickedEvent,
} from "../utils/Analytics";
import {
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ soft }) => {
  useEffect(() => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "otke9j11",
    };

    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/otke9j11";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();
  }, []);

  return (
    <footer className="footer section pt-5 bg-primary text-white overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <Link href="/" passHref>
              <img
                src="/assets/blog-images/req-nav-logo.png"
                height="50"
                className="mr-3"
                alt="Footer logo"
              />
            </Link>
            <p className="my-4">
              Setup redirects, modify headers, switch hosts, insert user scripts
              and much more. Install Requestly on Chrome & Firefox and join our
              family of more than 100,000 developers!
            </p>

            <div className="footer-social-icon">
              <div className="social-title">Follow us:</div>
              <a
                href="https://requestly.medium.com/"
                target="_blank"
                aria-label="Requestly Medium"
                rel="noreferrer"
                onClick={() => {}}
              >
                <FontAwesomeIcon
                  style={{ height: "40px", width: "40px", padding: "5px" }}
                  icon={faMedium}
                />
              </a>
              <a
                href="https://twitter.com/requestlyio"
                target="_blank"
                aria-label="Requestly Twitter"
                rel="noreferrer"
                onClick={() => {
                  trackSocialHandlesClickedEvent("twitter");
                }}
              >
                <FontAwesomeIcon
                  style={{ height: "40px", width: "40px", padding: "5px" }}
                  icon={faTwitter}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/requestly"
                target="_blank"
                aria-label="Requestly LinkedIn"
                rel="noreferrer"
                onClick={() => {
                  trackSocialHandlesClickedEvent("linkedin");
                }}
              >
                <FontAwesomeIcon
                  style={{ height: "40px", width: "40px", padding: "5px" }}
                  icon={faLinkedin}
                />
              </a>
              <div className="mt-5">
                <a href="https://www.ycombinator.com/companies/requestly">
                  <img
                    src="/assets/img/home/ycombinator-logo-footer.png"
                    alt="Backed by Y-Combinator W22"
                  />
                </a>
                <a href="https://www.producthunt.com/posts/requestly">
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=312556&theme=light"
                    alt="Requestly 2.0 Product Hunt"
                    className="mt-2"
                  />
                </a>
              </div>
              {/* <p className="mt-2 font-small">
                2028 Fieldcrest Ln
                <br />
                Twinsburg OH <br />
                44087, USA
              </p> */}
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
            <h6>GET</h6>
            <ul className="links-vertical">
              <li>
                <Link
                  onClick={() => {
                    trackDownloadClickedEvent("desktop_app", "footer");
                  }}
                  href="/desktop"
                >
                  Desktop App
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa"
                  onClick={() => {
                    trackDownloadClickedEvent("chrome", "footer");
                  }}
                >
                  Chrome/Chromium Extension
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    trackDownloadClickedEvent("firefox_extension", "footer");
                  }}
                  href="http://app.requestly.io/firefox/builds/requestly-latest.xpi"
                >
                  Firefox Addon
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://microsoftedge.microsoft.com/addons/detail/requestly-redirect-url-/ehghoapnlpepjmfbgaomdiilchcjemak"
                  onClick={() => {
                    trackDownloadClickedEvent("edge", "footer");
                  }}
                >
                  Edge Addon
                </a>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackDownloadClickedEvent("safari_extension", "footer");
                  }}
                  href="/for-safari"
                >
                  For Safari
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackDownloadClickedEvent("selenium", "footer");
                  }}
                  href="https://www.npmjs.com/package/@requestly/selenium"
                >
                  Use with Selenium
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackDownloadClickedEvent(
                      "charles_proxy_alternative",
                      "footer"
                    );
                  }}
                  href="/charles-proxy-alternative"
                >
                  Charles Alternative
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
            <h6>Features</h6>
            <ul className="links-vertical">
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("redirect-url");
                  }}
                  href="/feature/redirect-url"
                >
                  Redirect URL
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("block-network-requests");
                  }}
                  href="/feature/block-network-requests"
                >
                  Block Network Requests
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("modify-request-response-headers");
                  }}
                  href="/feature/modify-request-response-headers"
                >
                  Modify Request & Response Headers
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("modify-response");
                  }}
                  href="/feature/modify-response"
                >
                  Modify Response
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("selenium");
                  }}
                  href="/feature/selenium"
                >
                  Supercharge Selenium
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("android-debugger");
                  }}
                  href="/debug-android-apps"
                >
                  Android Debugger
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("session-recording");
                  }}
                  href="/feature/session-recording"
                >
                  Session Recording
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
            <h6>More Features</h6>
            <ul className="links-vertical">
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("cross-device-testing");
                  }}
                  href="/feature/cross-device-testing"
                >
                  Cross Device Testing
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("insert-custom-scripts");
                  }}
                  href="/feature/insert-custom-scripts"
                >
                  Insert Custom Scripts
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("modify-query-params");
                  }}
                  href="/feature/modify-query-params"
                >
                  Modify Query Params
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("delay-request");
                  }}
                  href="/feature/delay-request"
                >
                  Delay Request
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("replace-rule");
                  }}
                  href="https://docs.requestly.io/using-rules/replace-rule"
                >
                  Replace Rule
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("mock-server");
                  }}
                  href="/feature/mock-server"
                >
                  Mock Server
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackFeatureClickedEvent("remote-rules");
                  }}
                  href="/feature/remote-rules"
                >
                  Remote Rules
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("try_apps", "footer");
                  }}
                  href="/try-out-saas-apps/"
                >
                  Try out SaaS Apps
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("sales_tool", "footer");
                  }}
                  href="/sales-tool-for-saas-products/"
                >
                  Sales Tool for SaaS Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
            <h6>About</h6>
            <ul className="links-vertical">
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("pricing", "footer");
                  }}
                  href="https://app.requestly.io/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("terms", "footer");
                  }}
                  href="/terms"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("refund", "footer");
                  }}
                  href="/terms"
                >
                  Refunds
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("privacy", "footer");
                  }}
                  href="/privacy"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("blog", "footer");
                  }}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    trackInfoPageClickedEvent("contact-us", "footer");
                  }}
                  href="/contact-us"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 my-lg-5" />
      </div>
    </footer>
  );
};

export default Footer;
