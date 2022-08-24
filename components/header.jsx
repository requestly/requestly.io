import React, { useState } from "react";
import GitHubButton from "react-github-btn";
import dynamic from "next/dynamic";
import Link from "next/link";
import { trackInfoPageClickedEvent } from "../utils/Analytics";
import DropDownMenu from "./dropDownMenu";
import { useMediaQuery } from "react-responsive";
import { FaSlack } from "react-icons/fa";
const Init = dynamic(() => import("./init"), { ssr: false });

const Header = ({ theme, isBannerNotVisible }) => {
  const isMobile = useMediaQuery({ minWidth: 768 });
  const lg = useMediaQuery({ minWidth: 991 });
  const [collapse, setCollapse] = useState(true);

  const [navBarTopMargin, setNavBarTopMargin] = useState(
    isMobile ? "3.75rem" : "3rem"
  );

  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <nav
      className="navbar navbar-main navbar-horizontal navbar-expand-lg bg-primary"
      // style={{
      //   // Uncomment below line to make header fixed, When not using Announcement Banner
      //   position: "fixed",
      //   top: isBannerNotVisible ? "0rem" : navBarTopMargin,
      // }}
    >
      <div className="container">
        <Link href="/">
          <a>
            <img
              width="135px"
              className="navbar-brand-dark common"
              src="/assets/blog-images/req-nav-logo.png"
              alt="Requestly Desktop Logo"
            />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-primary"
          aria-controls="navbar-primary"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            collapse
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
          id="navbar-primary"
        >
          <Init />
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <Link href="/">
                  <a>
                    <img
                      className="navbar-brand-dark common"
                      src="/assets/img/home/logo-long-light.png"
                      alt="Requestly Desktop Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-primary"
                  aria-controls="navbar-primary"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={handleClick}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-lg-auto">
            <DropDownMenu
              menuHeader="Features"
              linksArray={[
                {
                  name: "Redirect URL",
                  link: "/feature/redirect-url/",
                },
                {
                  name: "Modify Headers",
                  link: "/feature/modify-request-response-headers/",
                },
                {
                  name: "Modify API Response",
                  link: "/feature/modify-response/",
                },
                {
                  name: "Delay Request",
                  link: "/feature/delay-request/",
                },
                {
                  name: "Insert Custom Scripts",
                  link: "/feature/insert-custom-scripts/",
                },
                {
                  name: "Modify Query Params",
                  link: "/feature/modify-query-params/",
                },
                {
                  name: "Mock Server",
                  link: "/feature/mock-server/",
                },
                {
                  name: "Android Debugger",
                  link: "/debug-android-apps",
                },
                {
                  name: "Session Recording",
                  link: "/feature/session-recording",
                },
              ]}
            />
            <li className="nav-item">
              <a
                className={
                  lg
                    ? "btn btn-md btn-docs btn-outline-white mr-3 border-0"
                    : "nav-link btn btn-white btn-md btn-docs mr-3 mt-2 border-primary"
                }
                rel="noopener noreferrer"
                target="_blank"
                href="https://app.requestly.io/pricing"
                onClick={() => {
                  trackInfoPageClickedEvent("pricing", "navbar");
                  setCollapse(!collapse);
                }}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  lg
                    ? "btn btn-md btn-docs btn-outline-white mr-3 border-0"
                    : "nav-link btn btn-white btn-md btn-docs mr-3 mt-2 border-primary"
                }
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.requestly.io/"
                onClick={() => {
                  trackInfoPageClickedEvent("docs", "navbar");
                  setCollapse(!collapse);
                }}
              >
                Docs
              </a>
            </li>

            <li className="nav-item">
              <Link href="/downloads">
                <a
                  className={
                    lg
                      ? "btn btn-md btn-docs btn-outline-white mr-3 border-0"
                      : "nav-link btn btn-white btn-md btn-docs mr-3 mt-2 border-primary"
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => {
                    trackInfoPageClickedEvent("calendly", "navbar");
                    setCollapse(!collapse);
                  }}
                >
                  Download
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <span
                className={
                  lg
                    ? "btn btn-md  mr-3 border-0"
                    : "nav-link btn btn-white btn-md btn-docs mr-3 mt-2 border-primary"
                }
              >
                <GitHubButton
                  href={
                    window.location.pathname.includes("android")
                      ? "https://github.com/requestly/requestly-android-sdk"
                      : "https://github.com/requestly/requestly"
                  }
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star requestly/requestly-android-sdk on GitHub"
                >
                  GitHub
                </GitHubButton>
              </span>
            </li>
            <li className="nav-item">
              <span
                className={
                  lg
                    ? "btn btn-md  mr-3 border-0"
                    : "nav-link btn btn-white btn-md btn-docs mr-3 mt-2 border-primary"
                }
              >
                <button
                  className="btn mb-2 btn-sm mr-2 btn-white"
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://join.slack.com/t/requestlycommunity/shared_invite/zt-z5yz38jp-8Qm7s0VHGkVJTTmbCpa8xA",
                      "_blank"
                    )
                  }
                >
                  <FaSlack className="mr-2" fill="black" />
                  Join our Slack
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
