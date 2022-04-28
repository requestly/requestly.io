import {
  submitCustomEvent,
  trackDownloadClickedEvent,
} from "../utils/Analytics";
import React from "react";

const BraggingStats = () => {
  return (
    <div className="row d-flex justify-content-center pb-5 mt-3 mt-lg-7 pt-2">
      <div className="col-auto d-flex align-items-center mt-2">
        <span
          className="text-black rounded p-2"
          style={{ backgroundColor: "#FBDA00", fontSize: "1.5rem" }}
        >
          4.7
        </span>
        <span className="mx-1">
          <img src="/assets/img/home/star.svg" alt="Star" loading="lazy" />
        </span>
        <span className="mx-1">
          <img src="/assets/img/home/star.svg" alt="Star" loading="lazy" />
        </span>
        <span className="mx-1">
          <img src="/assets/img/home/star.svg" alt="Star" loading="lazy" />
        </span>
        <span className="mx-1">
          <img src="/assets/img/home/star.svg" alt="Star" loading="lazy" />
        </span>
        <span className="mx-1">
          <img src="/assets/img/home/star.svg" alt="Star" loading="lazy" />
        </span>
      </div>
      <div className="col-auto d-flex align-items-center mt-2">
        <span className="mx-1">
          <a
            onClick={() => {
              trackDownloadClickedEvent("chrome_extension", "hero");
            }}
            href="https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa"
          >
            <img
              src="/assets/img/home/chromeStoreIcon.svg"
              alt="Chrome Store Icon"
              loading="lazy"
            />
          </a>
        </span>
        <span className="mx-2" style={{ fontSize: "1.5rem" }}>
          900+ Reviews
        </span>
      </div>
      <div className="col-auto d-flex align-items-center mt-2">
        <span>
          <img
            src="/assets/img/home/peopleIcon.svg"
            alt="Users Icon"
            loading="lazy"
          />
        </span>
        <span className="mx-2" style={{ fontSize: "1.5rem" }}>
          15,000+ Active Users
        </span>
      </div>
    </div>
  );
};

export default BraggingStats;
