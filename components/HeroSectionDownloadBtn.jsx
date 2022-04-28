import React from "react";
import {
  submitCustomEvent,
  trackDownloadClickedEvent,
} from "../utils/Analytics";
import { CONSTANTS } from "../utils/constants";

const HeroSectionDownloadBtn = ({ data }) => {
  return (
    <a
      onClick={(e) => {
        //Analytics
        // submitCustomEvent(
        //   CONSTANTS.GA_EVENTS.CATEGORIES.LANDING_PAGE,
        //   CONSTANTS.GA_EVENTS.ACTIONS.CLICKED,
        //   `hero_section_download_button_clicked`
        // );
        trackDownloadClickedEvent(data.name.toLowerCase(), "hero");
      }}
      href={data.href}
      target="_blank"
      rel="noreferrer"
      className="d-flex justify-content-center align-items-center btn btn-white btn-md mt-4 mt-lg-1"
      style={{ color: "#0E38BA" }}
    >
      Download for {data.name} &nbsp;
      <span>
        <img alt={data.alt} src={data.src} height="36px" width="36px" />
      </span>
    </a>
  );
};

export default HeroSectionDownloadBtn;
