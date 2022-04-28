import { submitCustomEvent } from "../utils/Analytics";
import { CONSTANTS } from "../utils/constants";
import subscribe from "../utils/subscribe";
import React, { useState } from "react";

const LearnUsage = () => {
  const NOT_SUBSCRIBED = 0,
    SUBSCRIBING = 1,
    SUBSCRIBED = 2;
  const [subState, setSubState] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  const onEmailChange = (e) => {
    setUserEmail(e.target.value);
    setSubState(NOT_SUBSCRIBED);
  };

  const onSubscribe = (e) => {
    e.preventDefault();

    setSubState(SUBSCRIBING);
    if (!userEmail) {
      setSubState(NOT_SUBSCRIBED);
      return;
    }

    subscribe(userEmail.trim())
      .then(({ status }) => {
        if (status === 201) {
          //Analytics
          submitCustomEvent(
            CONSTANTS.GA_EVENTS.CATEGORIES.LANDING_PAGE,
            CONSTANTS.GA_EVENTS.ACTIONS.FORM_SUBMITTED,
            `subscribed_email_to_learn_to_use_requestly`
          );
          setSubState(SUBSCRIBED);
        } else {
          setSubState(NOT_SUBSCRIBED);
          //Analytics
          submitCustomEvent(
            CONSTANTS.GA_EVENTS.CATEGORIES.LANDING_PAGE,
            CONSTANTS.GA_EVENTS.ACTIONS.FORM_REJECTED,
            `rejected_submitted_email_to_learn_to_use_requestly`
          );
        }
      })
      .catch((err) => {
        setSubState(SUBSCRIBED);
      });
  };

  return (
    <section className="section section-lg pb-5 bg-soft">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-gray text-center mb-4">
            <h2 className="mb-3 mb-lg-4 text-black">Get to know Requestly</h2>
            <p className="lead text-gray">
              Become a 10x developer by using Requestly in your development &
              testing workflows.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <form onSubmit={onSubscribe}>
              <div className="form-group bg-white shadow-soft rounded-pill mb-2 px-3 py-2">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="input-group input-group-merge shadow-none">
                      <input
                        type="email"
                        value={userEmail}
                        onChange={onEmailChange}
                        className="form-control border-0 form-control-flush shadow-none pb-2"
                        placeholder="you@company.com"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    {subState === NOT_SUBSCRIBED ? (
                      <button
                        type="submit"
                        className="btn btn-block btn-primary rounded-pill"
                      >
                        Subscribe
                      </button>
                    ) : (
                      <button
                        disabled
                        className="btn btn-block btn-primary rounded-pill"
                      >
                        {subState === SUBSCRIBING && "Subscribing..."}
                        {subState === SUBSCRIBED && "Subscribed!"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                No spam guaranteed :)
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnUsage;
