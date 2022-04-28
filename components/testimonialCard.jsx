import React from "react";

const TestimonialCard = ({ item }) => {
  return (
    <div className="slide shadow">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span
              className="h6 font-weight-light mb-0"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></span>
          </div>
        </div>
        <div className="mt-3 mb-0 text-sm">
          <div className="row">
            <div className="col-auto">
              <div className="icon icon-shape bg-red text-white rounded-circle shadow">
                <img
                  src={item.src}
                  className="rounded-circle"
                  alt="Uses Requestly Desktop | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className="col"
              style={
                item.backLink
                  ? {
                      cursor: "pointer",
                    }
                  : {}
              }
              onClick={() => {
                if (item.backLink) {
                  window.open(item.backLink, "_blank");
                }
              }}
            >
              <div className="row">
                <span className="font-weight-bold mr-2">{item.author}</span>
              </div>
              <div className="row">{item.cred}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
