import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { CONSTANTS } from "../utils/constants/index";
import Tooltip from "react-bootstrap/Tooltip";
import React from "react";
import {
  submitCustomEvent,
  trackDownloadClickedEvent,
} from "../utils/Analytics";

const DownloadsContainer = ({ data = [], title }) => {
  return (
    <div className="container text-center">
      <div>
        {title ? <p className="h5">Download for Free</p> : null}
        <div className="fh-100 d-flex justify-content-center align-items-center">
          {data.map((item, key) => {
            return (
              <div className="mx-auto mx-lg-3 text-center" key={key}>
                <button
                  onClick={() => {
                    // submitCustomEvent(
                    //   CONSTANTS.GA_EVENTS.CATEGORIES.LANDING_PAGE,
                    //   CONSTANTS.GA_EVENTS.ACTIONS.CLICKED,
                    //   `download_${item.title}_button_clicked`
                    // );
                    trackDownloadClickedEvent(item.title, "feature_page");
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-0 bg-transparent"
                >
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip id="button-tooltip">{item.title}</Tooltip>
                    }
                  >
                    <a
                      type="button"
                      rel="noreferrer"
                      target="_blank"
                      href={item.src}
                      className="btn btn-white btn-icon my-2 rounded-circle p-1"
                    >
                      <span className="btn-inner--icon">
                        <img
                          style={{ width: 60 }}
                          src={item.imgSrc}
                          alt={`Download Requestly ${item.title}`}
                        />
                      </span>
                    </a>
                  </OverlayTrigger>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DownloadsContainer;
