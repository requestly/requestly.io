import requestlyFreePlans from "../utils/json/requestlyFreePlans.json";
import { Questions } from "../utils/feedbackQuestions";
import CompanyLogo from "../components/companyLogo";
import HeadTags from "../components/HeadTags";
import Faq from "../components/faq";
import dynamic from "next/dynamic";
import { useState } from "react";

const LoadableBtn = dynamic(() => import("../components/formButton"), {
  ssr: false,
});

const FreePlan = ({ content }) => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <HeadTags title="Requestly For Education | Requestly" />
      <section className="section-header bg-light text-dark">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-3">
            <div className="col-12 col-md-6 order-2 order-lg-1 mt-lg-0 mt-4">
              <h1 className=" mb-3">{content.sectionTitle}</h1>
              <p className="lead">
                <a href="#verfication-form">
                  <button type="button" className="btn btn-default">
                    Get Access
                  </button>
                </a>
                <br />
              </p>
            </div>
            <div className="col-12 col-md-6 order-1 order-lg-2">
              <img
                src="/assets/img/illustrations/requestly-free-options.svg"
                alt="Requestly Desktop is free for open-source, education, and discounted for non-profits | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative "
              />
            </div>
          </div>
        </div>
        <div className="pattern bottom"></div>
      </section>
      <section className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col  d-flex justify-content-center align-items-center pb-3 text-center">
              <span className="display-3">Get Started in just 3 Steps</span>
            </div>
          </div>
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col align-self-center">
                    <h6 className="card-title text-uppercase text-muted mb-0">
                      Step 1
                    </h6>
                    <span className="h5 card-title text-uppercase font-weight-bold mb-0">
                      Create Account
                    </span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                      <i className="fas fa-user-plus"></i>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-sm">
                  <span>
                    Create a Requestly account using an email that you wish to
                    use with your requestly premium account.
                  </span>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col align-self-center">
                    <h6 className="card-title text-uppercase text-muted mb-0">
                      Step 2
                    </h6>
                    <span className="h5 card-title text-uppercase font-weight-bold mb-0">
                      Get Verified
                    </span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                      <i className="fas fa-user-check"></i>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-sm">
                  <span>
                    To Activate the premium plan of Requestly under our
                    {content.benefitCategory}
                    benefits fill up <a href="#verfication-form">this form</a>
                    and wait for us to verify.
                  </span>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col align-self-center">
                    <h6 className="card-title text-uppercase text-muted mb-0">
                      Step 3
                    </h6>
                    <span className="h5 card-title text-uppercase font-weight-bold mb-0">
                      Use Requestly
                    </span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                      <i className="fas fa-user-ninja"></i>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-sm">
                  <span>
                    Once Verified, Enjoy the premium features of your Requestly.
                    Find out more about Requestly and discover the infinite
                    opportunities of this Platform.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center mb-5"
        id="verfication-form"
      >
        <div
          className="card card-frameml-4 mx-2"
          style={{
            border: "2px solid #3c6fc3bf",
            borderRadius: "15px",
            maxWidth: "60ch",
          }}
        >
          <div className="card-body d-flex justify-content-center ">
            <form className=" form-group px-3 justify-content-md-center">
              <h2 className="card-title text-center">{content.formHeader}</h2>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control  border border-primary"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="example@organization.com"
                  value={email}
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <small id="emailHelp" className="form-text text-muted mt-3">
                  {`We'll never share your email with anyone else.`}
                </small>
              </div>
              <div className="text-center">
                <LoadableBtn
                  className=""
                  email={email}
                  category={content.benefitCategory}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="h-100 section bg-primary mb-5">
        <Faq Questions={Questions} />
      </section>
      <section>
        <div className="row">
          <div className="col  d-flex justify-content-center align-items-center pb-3 text-center">
            <span className="display-3" style={{ color: "#13428ec9" }}>
              Companies using Requestly
            </span>
          </div>
        </div>
        <CompanyLogo />
      </section>
    </div>
  );
};

export default FreePlan;

export function getStaticPaths() {
  const paths = requestlyFreePlans.map((plan) => {
    return {
      params: {
        freeplan: plan.slug,
      },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const content = requestlyFreePlans.flatMap((plan) => {
    if (plan.slug === params.freeplan) {
      return {
        plan,
      };
    } else {
      return [];
    }
  });

  return {
    props: {
      content: content[0].plan,
    },
  };
}
