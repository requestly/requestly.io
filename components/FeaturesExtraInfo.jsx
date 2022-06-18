import React, { useRef } from "react";
import SectionHeader from "./section-header";
import Feature from "./feature";
import ContentCard from "./contentCard";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";

const FeaturesExtraInfo = ({ pageContent }) => {
  const videoRef = useRef(null);

  return (
    <>
      <div className="w-50 mx-auto mt-5 text-center d-flex flex-column justify-content-center align-items-center">
        {pageContent.showcaseVideo.length > 0 && (
          <Zoom>
            <video
              autoPlay
              muted
              loop
              id="myVideo"
              ref={videoRef}
              width="100%"
              className="squircle-image mb-4 mt-4"
            >
              <source src={pageContent.showcaseVideo} type="video/mp4" />
            </video>
          </Zoom>
        )}
        <span className="h4 lead" style={{ whiteSpace: "pre-line" }}>
          {pageContent.briefContent}
        </span>
      </div>
      <div className="section">
        <div className="container">
          <SectionHeader
            title={pageContent.moreInfo.title}
            description={pageContent.moreInfo.description}
          />
          {pageContent.moreInfo.features.map((feature, index) => (
            <Feature
              key={index}
              side={index % 2 === 0 ? "right" : "left"}
              imgSrc={feature.imgSrc}
              featureName={feature.featureName}
              featureContent={feature.featureContent}
            />
          ))}
        </div>
      </div>
      {pageContent.slug === "delay-request" && (
        <div className="section container" style={{ marginTop: "-6rem" }}>
          <SectionHeader title="Use Delay Endpoint" avoidMargin />
          <div className="text-center">
            <p className="lead">
              A Quick solution to simulate delay in loading any specific
              resource.
            </p>
            <p className="lead">
              Use our delay endpoint, replace the delay time and request url and
              start delaying your network requests in no time 🚀
            </p>
          </div>
          <code
            style={{
              background: "#282a36",
              color: "#fff",
              padding: "1.5rem",
              textAlign: "center",
              display: "block",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>
              {
                "https://app.requestly.io/delay/<time_in_milliseconds>/<actual_request_url>"
              }
            </p>
            <p style={{ color: "#ffffffb3" }}>
              {
                "// Example -> https://app.requestly.io/delay/4000/https://code.jquery.com/jquery-3.6.0.slim.js"
              }
            </p>
          </code>
        </div>
      )}
      <div className="section bg-primary">
        <h1 className="text-center text-white">Testimonials</h1>
        <div className="mx-auto container">
          <div className="row mt-5">
            {pageContent.testimonials.map((testimonial, index) => {
              return (
                <ContentCard
                  key={index}
                  src={testimonial.src}
                  title={testimonial.name}
                  content={testimonial.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesExtraInfo;
