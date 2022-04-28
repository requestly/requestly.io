import React, { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  submitCustomEvent,
  trackDownloadClickedEvent,
} from "../utils/Analytics";
import { CONSTANTS } from "../utils/constants";
import Link from "next/link";

const SmallDownloadsContainer = ({ data = [] }) => {
  const [width, setWidth] = useState("40");

  useEffect(() => {
    if (window.innerWidth >= 800 && window.innerWidth < 1080) setWidth("36");
    if (window.innerWidth < 800) setWidth("25");
  }, []);

  return (
    <span className="ml-1">
      {data.map((item, key) => {
        return (
          <a
            key={key}
            href={item.href}
            rel="noreferrer"
            className="bg-transparent border-0"
            onClick={() => {
              //Analytics
              // submitCustomEvent(
              //   CONSTANTS.GA_EVENTS.CATEGORIES.LANDING_PAGE,
              //   CONSTANTS.GA_EVENTS.ACTIONS.CLICKED,
              //   `download_${item.title}_button_clicked`
              // );
              trackDownloadClickedEvent(
                item.title.toLowerCase(),
                "smallDownloadsContainer"
              );
            }}
          >
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">{item.title}</Tooltip>}
            >
              <img
                className="ml-2"
                alt={item.alt}
                width={width}
                height={width}
                src={item.src}
              />
            </OverlayTrigger>
          </a>
        );
      })}
    </span>
  );
};

export default SmallDownloadsContainer;
