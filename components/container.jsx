import React from "react";
import {
  submitCustomEvent,
  trackArticleClickedEvent,
} from "../utils/Analytics";
import { CONSTANTS } from "../utils/constants";

const Container = ({
  header = "",
  data = [],
  content = true,
  sectionClass = "",
}) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="my-7">
      <div className="container">
        <div>
          <h1 className="text-center mb-5">{header}</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {content &&
            data.map(
              (
                {
                  title = "",
                  description = "",
                  src = "",
                  featured,
                  featureBackground = "#000",
                  featureColor = "#fff",
                },
                key
              ) => {
                return (
                  <div className="col-12 col-md-6" key={key}>
                    <div className="card shadow-soft border-light mb-4 p-2">
                      {/* <img className="card-img-top" src={imgSrc} /> */}
                      <div className="card-body">
                        <h5 className="h4 card-title mb-0">{title}</h5>
                        <p className="card-text mt-4">{description}</p>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={src}
                          className="btn btn-link px-0"
                          onClick={() => {
                            // submitCustomEvent(
                            //   CONSTANTS.GA_EVENTS.CATEGORIES.LANDING_PAGE,
                            //   CONSTANTS.GA_EVENTS.ACTIONS.CLICKED,
                            //   `${title}_article_clicked`
                            // );
                            trackArticleClickedEvent(title);
                          }}
                        >
                          View article
                        </a>
                        {!!featured && (
                          <span
                            className="featured-in"
                            style={{
                              color: featureColor,
                              background: featureBackground,
                            }}
                          >
                            Featured in {featured}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default Container;
