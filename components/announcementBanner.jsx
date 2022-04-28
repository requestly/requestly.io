import React from "react";

export default function AnnouncementBanner({
  isBannerNotVisible,
  setIsBannerNotVisible,
}) {
  let themeClass = `navbar navbar-main navbar-expand-lg headroom py-lg-3  navbar-dark navbar-theme-primary`;

  const closeAnnouncementBar = () => {
    window.localStorage.setItem("ph-sdk-launch-22", true);
    setIsBannerNotVisible(true);
  };

  const btnLabelText = "View";

  return isBannerNotVisible ? (
    <></>
  ) : (
    <header className="header-global bg-primary">
      <nav
        id="navbar-main"
        className={themeClass}
        style={{
          position: "fixed",
          top: "0",
          zIndex: "201",
        }}
      >
        <div
          className="container text-white d-flex justify-content-between "
          style={{ minWidth: "100%" }}
        >
          <div
            className="row justify-content-end d-flex"
            style={{
              minWidth: "100%",
              marginLeft: "unset",
              marginRight: "unset",
              alignItems: "center",
            }}
          >
            <div
              className="col d-flex pl-0 text-center justify-content-center"
              style={{ alignItems: "center" }}
            >
              🥳 We're live on Product Hunt today. Show some love ❤️ please!
              <a
                href="https://www.producthunt.com/posts/requestly-for-android"
                className="btn btn-md btn-white btn-sm ml-md-4"
                target={"_blank"}
                rel="noreferrer"
              >
                {btnLabelText}
              </a>
            </div>
            <div
              className="col-auto ml-auto pl-0"
              onClick={closeAnnouncementBar}
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
