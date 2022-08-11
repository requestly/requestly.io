import LearnUsage from "../components/learnUsage";
import HeadTags from "../components/HeadTags";

const ContactUs = () => {
  return (
    <>
      <HeadTags
        title="Contact Us | Requestly"
        description="Contact Requestly and see what's it about"
      />
      <section className="section section-lg">
        <div className="container">
          <div className="mb-5 text-center">
            <h1>Contact us</h1>
            <p className="lead">
              {`Have any questions for us? We'd love to hear from you`}
            </p>
          </div>
          <div className="d-xl-flex justify-content-center align-items-center">
            <div className="card bg-light my-xl-0 my-5 py-3 w-100">
              <div className="card-body">
                <h2 className="card-title h5">Report an Issue</h2>
                <p className="card-text">
                  If you encounter an issue with the platform, do let us know by
                  raising an issue on Github.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/requestly/customer-support/issues"
                  className="btn btn-primary"
                >
                  <i className="fab fa-github mr-2" /> Raise an Issue
                </a>
              </div>
            </div>
            <div className="card bg-light my-xl-0 my-5 py-3 mx-xl-5 w-100">
              <div className="card-body">
                <h2 className="card-title h5">
                  <span className="badge badge-primary">New</span> Slack
                  Community
                </h2>
                <p className="card-text">
                  The official Requestly slack community! An awesome chat room
                  for an awesome community.
                </p>
                <a
                  href="https://join.slack.com/t/requestlycommunity/shared_invite/zt-z5yz38jp-8Qm7s0VHGkVJTTmbCpa8xA"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-slack" /> Join on Slack
                </a>
              </div>
            </div>
            <div className="card bg-light my-xl-0 my-5 py-3 w-100">
              <div className="card-body">
                <h2 className="card-title h5">Superuser Community</h2>
                <p className="card-text">
                  Please add requestly as tag in your superuser question. Click{" "}
                  <a
                    href={
                      "https://superuser.com/questions/1414946/how-can-i-create-url-shortcuts-redirects-for-task-diff-ids-in-phabricator/1414947#1414947"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>{" "}
                  to see an example post.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://superuser.com/"
                  className="btn btn-primary mr-2"
                >
                  Visit Superuser{" "}
                  <i className="fas fa-external-link-alt ml-1" />
                </a>
              </div>
            </div>
          </div>
          <br />
          <div className="d-xl-flex justify-content-center align-items-center">
            <div className="card bg-light my-xl-0 my-5 py-3 w-100">
              <div className="card-body">
                <h2 className="card-title h5">Sales & Premium Subscriptions</h2>
                <p className="card-text">
                  {`Sales and support for premium subscriptions. Let us know your
                  requirements and we'll get in touch with you within 3-4 hours.`}
                </p>
                <a
                  href="mailto:contact@requestly.io"
                  className="btn btn-primary"
                >
                  <i className="fas fa-at mr-2" /> Email Us
                </a>
              </div>
            </div>
            <div className="card bg-light my-xl-0 my-5 py-3 mx-xl-5 w-100">
              <div className="card-body">
                <h2 className="card-title h5">Discord Community</h2>
                <p className="card-text">
                  The official Requestly Discord server! We hang out with users
                  here to help with them with their questions.
                </p>
                <a
                  href="https://discord.gg/SumMHwuaZv"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-discord mr-2" /> Join the conversation
                </a>
              </div>
            </div>
            <div className="card bg-light my-xl-0 my-5 py-3 w-100">
              <div className="card-body">
                <h2 className="card-title h5">Privacy & Legal</h2>
                <p className="card-text">
                  Contact us regarding your account config, billing settings,
                  update tax info, data removal or export and DPA requests.
                </p>

                <a
                  href="mailto:contact@requestly.io"
                  className="btn btn-primary"
                >
                  <i className="fas fa-at mr-2" /> Email Us
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-6 font-weight-bold">
            <h2 className="h5">
              Connect with us on
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/requestlyio"
                className="btn btn-primary mr-2 ml-2"
              >
                <i className="fab fa-twitter mr-1" /> Twitter
              </a>
              and
              <a
                target="_blank"
                rel="noreferrer"
                href="https://in.linkedin.com/company/requestly"
                className="btn btn-primary mr-2 ml-2"
              >
                <i className="fab fa-linkedin mr-1" /> LinkedIn
              </a>
            </h2>
          </div>
        </div>
      </section>
      <div className="section section-lg pt-0 line-bottom-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 text-center px-4 mb-5 mb-lg-0">
              <div className="icon icon-sm icon-shape icon-shape-primary rounded mb-4">
                <i className="fas fa-city"></i>
              </div>
              <h5 className="mb-3">HQ</h5>
              <p>
                RQ Labs, Inc. <br /> 355 Bryant St UNIT 403
                <br />
                San Francisco, CA 94107
              </p>
              <a
                className="font-weight-bold text-primary"
                href="tel:+1-302-476-2431"
              >
                +1 (302) 476-2431
              </a>
            </div>
            <div className="col-12 col-md-4 text-center px-4 mb-5 mb-lg-0">
              <div className="icon icon-sm icon-shape icon-shape-primary rounded mb-4">
                <i className="fas fa-building"></i>
              </div>
              <h5 className="mb-3">Secondary Office</h5>
              <p>
                RQ Labs India Pvt Ltd <br /> K-3/10A, Street No.10, Gangotry
                Vihar
                <br />
                West Ghonda, Delhi 110053
              </p>
              <a
                className="font-weight-bold text-primary"
                href="tel:+91-9996166717"
              >
                +91 9996166717
              </a>
            </div>
            <div className="col-12 col-md-4 text-center px-4">
              <div className="icon icon-sm icon-shape icon-shape-primary rounded mb-4">
                <i className="fas fa-user-shield"></i>
              </div>
              <h5 className="mb-3">Data Privacy Officer</h5>
              <p>
                Data Protection requests are currently served directly by the
                developers of Requestly.
              </p>
              <a
                className="btn btn-sm btn-outline-primary"
                href="mailto:contact@requestly.io"
              >
                Email us
                <span className="fas fa-long-arrow-alt-right ml-2"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <LearnUsage />
    </>
  );
};

export default ContactUs;
