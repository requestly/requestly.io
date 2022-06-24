import React from "react";
import {
  trackFeatureClickedEvent,
} from "../utils/Analytics";
import SmallDownloadsContainer from "./smallDownloadsContainer";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";

const Feature = ({
  side,
  featureName,
  featureContent,
  imgSrc,
  alt,
  link,
  isNpmPackage,
  onlyForBrowserExtension=false
}) => {
  const [divClass, setDivClass] = React.useState("col-12 col-md-6");
  const [pClass, setPClass] = React.useState("lead");
  const [imgClass, setImgClass] = React.useState("col-12 col-md-6 ml-md-auto");

  const altText = `${featureName} | ${alt}`;
  const data = isNpmPackage
    ? [
        {
          src: "https://img.icons8.com/color/452/npm.png",
          href: "https://www.npmjs.com/package/@requestly/selenium",
          title: "npm Package",
          alt: `${featureName} Requestly for selenium |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
        },
        {
          src: "https://img.icons8.com/fluent/128/000000/github.png",
          href: "https://github.com/requestly/requestly-selenium",
          title: "Source Code",
          alt: `${featureName} Requestly for selenium |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
        },
      ]
    :onlyForBrowserExtension?[
      {
        src: "https://img.icons8.com/fluent/128/000000/chrome.png",
        href:
          "https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa",
        title: "Chrome Extension",
        alt: `${featureName} Requestly for chrome |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
      },
      {
        src: "https://img.icons8.com/color/128/000000/ms-edge-new.png",
        href:
          "https://microsoftedge.microsoft.com/addons/detail/requestly-redirect-url-/ehghoapnlpepjmfbgaomdiilchcjemak",
        title: "Edge Extension",
        alt: `${featureName} Requestly for edge |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
      },
    ]: [
        {
          src: "https://img.icons8.com/fluent/128/000000/chrome.png",
          href:
            "https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa",
          title: "Chrome Extension",
          alt: `${featureName} Requestly for chrome |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
        },
        {
          src: "https://img.icons8.com/color/128/000000/firefox.png",
          href: "https://app.requestly.in/firefox/builds/requestly-latest.xpi",
          title: "Firefox Extension",
          alt: `${featureName} Requestly for firefox |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
        },
        {
          src: "https://img.icons8.com/color/128/000000/ms-edge-new.png",
          href:
            "https://microsoftedge.microsoft.com/addons/detail/requestly-redirect-url-/ehghoapnlpepjmfbgaomdiilchcjemak",
          title: "Edge Extension",
          alt: `${featureName} Requestly for edge |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
        },
        {
          src: "https://img.icons8.com/color/240/000000/safari--v1.png",
          href: "/for-safari",
          title: "Safari Extension",
          alt: `${featureName} Requestly for safari |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
        },
        {
          src: "https://img.icons8.com/ios-filled/128/000000/mac-os.png",
          href: "https://bit.ly/rq-mac",
          title: "Desktop App",
          alt: `${featureName} Requestly for macos |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
        },
      ];

  React.useEffect(() => {
    if (side === "right") {
      setDivClass("col-12 col-md-6 order-md-2");
      setPClass("lead");
      setImgClass("col-12 col-md-6 mr-lg-auto");
    } //eslint-disable-next-line
  }, []);

  return (
    <div className="row row-grid align-items-center mb-5 mb-md-7">
      <div className={divClass} style={{ maxWidth: "55ch" }}>
        <h2 className="font-weight-bolder mb-4">{featureName}</h2>
        <p className={pClass}>
          {featureContent}
          {link ? (
            <a
              className="mb-lg-0 ml-2 mb-2"
              onClick={() => {
                trackFeatureClickedEvent(featureName);
              }}
              href={link}
            >
              Read More <i className="fas fa-external-link-alt pl-1"></i>
            </a>
          ) : null}
        </p>
        <div className="text-primary font-weight-extreme row container-fluid d-flex pl-0">
          <div className="col-auto text-nowrap d-flex align-items-center">
            Download for Free{" "}
          </div>
          <div className="col-auto" style={{ marginLeft: "-10px" }}>
            <SmallDownloadsContainer data={data} />
          </div>
        </div>
      </div>
      <div className={imgClass}>
        <Zoom>
          <img
            src={imgSrc}
            alt={altText}
            className="rounded-lg"
            loading="lazy"
          />
        </Zoom>
      </div>
    </div>
  );
};

export default Feature;
