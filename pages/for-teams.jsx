import YCombinatorTag from "../components/YCombinatorTag";
import SectionHeader from "../components/section-header";
import CompanyLogo from "../components/companyLogo";
import LearnUsage from "../components/learnUsage";
import HeadTags from "../components/HeadTags";
import dynamic from "next/dynamic";

// Utils
import {
  submitCustomEvent,
  trackDownloadClickedEvent,
} from "../utils/Analytics";
import TeamPlanAccordions from "../components/TeamPlanAccordions";
import CustomerStories from "../components/CustomerStories";
import Disclaimer from "../components/Disclaimer";
import { CONSTANTS } from "../utils/constants";
// import TeamPlanFeatures from "../components/TeamPlanFeatures";
import { Container } from "react-bootstrap";

// Dynamic Import
const HeroSectionDownloadContainer = dynamic(
  () => import("../components/HeroSectionDownloadContainer"),
  {
    ssr: false,
  }
);

const TeamPlanFeatures = dynamic(
  () => import("../components/TeamPlanFeatures"),
  {
    ssr: false,
  }
);

const Teams = () => {
  return (
    <>
      <HeadTags image="/assets/img/teams-hero.png" />
      <section
        className="section-header bg-primary text-white pb-0 pt-7 pt-lg-7"
        id="download-now"
        style={{ minHeight: "100vh" }}
      >
        <div className="container mx-0" style={{ maxWidth: "100%" }}>
          <YCombinatorTag />
          <div className="row mb-4">
            <div
              className="col-12 mt-lg-0 mt-1 px-3 px-lg-5"
              style={{ lineHeight: "2.25rem" }}
            >
              <div className="mb-3 text-center">
                <h1>Requestly for Teams</h1>
              </div>
              <div
                className="mb-2 mb-lg-5 text-center"
                style={{
                  maxWidth: "90ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <h4 className="font-weight-light">
                  Teams provide one subscription for all your team members.
                  Empower your team debug and test applications effortlessly.
                </h4>
              </div>
              <HeroSectionDownloadContainer isInTeamsPage={true} />
            </div>
          </div>
          <div className="row d-flex justify-content-center pb-5 mt-3 mt-lg-4 pt-2">
            <div className="col-auto d-flex align-items-center mt-2">
              <span
                className="text-black rounded p-2"
                style={{ backgroundColor: "#FBDA00", fontSize: "1.5rem" }}
              >
                4.7
              </span>
              {Array(5)
                .fill("")
                .map((_, idx) => (
                  <span key={idx} className="mx-1">
                    <img
                      src="/assets/img/home/star.svg"
                      alt="Star"
                      loading="lazy"
                    />
                  </span>
                ))}
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
                15,000+ Users
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-lg-4 mx-lg-7 mr-5 ml-5 mb-5 ">
          <h2
            className="text-center mb-0 mt-5 mt-lg-6 mb-lg-4"
            style={{ fontSize: "2rem" }}
          >
            Trusted by developer teams from
          </h2>
          <CompanyLogo />
        </div>
      </section>
      <section>
        <div className="mt-lg-2 mx-lg-7 mx-5 mb-5 text-center">
          <h2
            className="text-center mb-4 mt-5 mt-lg-6"
            style={{ fontSize: "2rem" }}
          >
            Get Superpower from Teams 🦸
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            You can create or join multiple teams and each Team is billed
            separately. To purchase a team plan, head over to{" "}
            <a
              href="http://app.requestly.io/account/my-teams"
              target="_blank"
              rel="noreferrer"
            >
              My Teams
            </a>{" "}
            page and select your team. If you have not already created a team,
            click Create New Team and give team a name (eg. Testing L2).
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            Since a Team subscription is shared with all its members, you can
            add or remove members before or after activating the subscription.
          </p>
          <Disclaimer text="As of now, Teams do not provide collaboration on Requestly features like Rules, Files, etc." />
        </div>
      </section>

      <TeamPlanFeatures />

      <section>
        <div className="mt-lg-8 mx-lg-7 mx-4 mb-6">
          <div className="container">
            <SectionHeader title="Customer Success Stories" description="" />
            <CustomerStories />
          </div>
        </div>
      </section>
      <section className="h-100 section bg-primary">
        <Container>
          <h1 className="display-3 mb-6 text-white font-weight-normal text-center">
            Frequently Asked Questions{" "}
            <i className="far fa-question-circle"></i>
          </h1>
          <TeamPlanAccordions />
        </Container>
      </section>
      <LearnUsage />
    </>
  );
};

export default Teams;
