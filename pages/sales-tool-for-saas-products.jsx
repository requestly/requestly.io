import SectionHeader from "../components/section-header";
import BraggingStats from "../components/BraggingStats";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import HeadTags from "../components/HeadTags";
import Link from "next/link";

const SalesTool = () => {
  const md = useMediaQuery({ minWidth: 900 });
  const videoRef = useRef(null);

  const [mounted, setMounted] = useState(null);

  useEffect(() => {
    setMounted(md);
  }, [md]);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <div>
        <HeadTags title={"B2B Sales Tool| Requestly"} />

        <section className="section-header bg-primary text-white pb-0 pt-3 pt-lg-7">
          <div className="container mx-0" style={{ maxWidth: "100%" }}>
            <div className="row mb-4">
              <div className="col-12 col-md-6 mt-lg-0 mt-1 pl-3 pl-lg-5">
                <div className="mb-4 mt-6 mb-lg-5 text-center text-lg-left">
                  <h1>Sales tool for B2B SaaS Products</h1>
                </div>
                <div
                  className="mb-2 mb-lg-5 text-center text-lg-left"
                  style={{ maxWidth: "60ch" }}
                >
                  <h3 className="font-weight-light">
                    Build engaging product demos by showing your product on your
                    customers website!
                  </h3>
                  <div className="mt-5 pt-2">
                    <Link href="https://calendly.com/requestly-enterprise/requestly-premium-support">
                      <a>
                        <button className="btn btn-white btn-md btn-docs mr-3">
                          Request a Demo
                        </button>
                      </a>
                    </Link>
                    {/* <Link href="https://www.youtube.com/">
                      <a>
                        <button className="btn btn-white btn-md btn-docs mr-3">
                          See a quick Video!
                        </button>
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 mt-lg-0 mt-5 d-flex justify-content-end">
                <div style={{ width: "100%" }}>
                  <img
                    src="/assets/img/illustrations/SalesTool/sales_tool_cover.png"
                    alt="Trying Out SaaS Apps in less than 30 seconds!"
                    className="rounded-xl"
                    style={{
                      width: md ? "70%" : "100%",
                      position: md ? "absolute" : "relative",
                      right: "0",
                    }}
                  />
                </div>
              </div>
            </div>
            <BraggingStats />
          </div>
        </section>

        <section className="mt-6 container text-center">
          <SectionHeader title="Who is this for?" />
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 text-center">
              <h2 className="h2 font-weight-bolder mb-4 mt-2">
                Applicable to all SaaS Products which provide JS tags to install
                on site
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="card border-dark p-3">
                <div className="card-body">
                  <h2 className="display-3 mb-3">Live Chat Tools</h2>
                  <span>
                    <ul>
                      <li className="lead">Intercom</li>
                      <li className="lead">Crisp</li>
                      <li className="lead">Drift</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="card border-dark p-3">
                <div className="card-body">
                  <h2 className="display-3 mb-3">In Apps Widgets</h2>
                  <span>
                    <ul>
                      <li className="lead">Hellobar</li>
                      <li className="lead">Convertflow</li>
                      <li className="lead">Beamer</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="card border-dark p-3">
                <div className="card-body">
                  <h2 className="display-3 mb-3">A/B Testing Tools</h2>
                  <span>
                    <ul>
                      <li className="lead">VWO Optimizely</li>
                      <li className="lead">Hubspot</li>
                      <li className="lead">Zoho</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="card border-dark p-3">
                <div className="card-body">
                  <h2 className="display-3 mb-3">Analytics Tools</h2>
                  <span>
                    <ul>
                      <li className="lead">Amplitude</li>
                      <li className="lead">Hotjar</li>
                      <li className="lead">PostHog</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-6">
            <video autoPlay muted loop id="myVideo" ref={videoRef} width="20%">
              <source
                src="/assets/videos/requestly-loop.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="container">
          <div className="row justify-content-center mb-5 mb-md-5">
            <div className="col-12 col-md-8 text-center">
              <h2 className="h1 font-weight-bolder mb-4">Be a sales Hero!</h2>
              <p className="lead">Demo and Wow your customers</p>
            </div>
          </div>
          {/* <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">Real Use Cases</h2>
              <p className="lead">
                When your customers see their site, discuss real problems to the
                point.
              </p>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <img
                src="/assets/blog-images/cover_convertflow.png"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div> */}
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5 order-md-2">
              <h2 className="font-weight-bolder mb-4">Better Cold Outreach</h2>
              <p className="lead">
                When you pitch your product to a prospect over mail, send a
                personalized recorded video of how it'll look on their website
              </p>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5 col-12 col-md-6 mr-lg-auto">
              <img
                src="/assets/img/illustrations/SalesTool/betterColdOutreach.png"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5">
              <h2 className="font-weight-bolder mb-4">
                Let Customers Play Around
              </h2>
              <p className="lead">
                Customers can play around with the product without having to go
                through the installation and see if the product is a right fit
                or not.
              </p>
            </div>
            <div className="col-12 col-md-6 ml-md-auto">
              <img
                src="/assets/img/illustrations/SalesTool/customersPlay.png"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="row row-grid align-items-center mb-5 mb-md-7">
            <div className="col-12 col-md-5 order-md-2">
              <h2 className="font-weight-bolder mb-4">
                Better Sales Conversion
              </h2>
              <p className="lead">
                Reduced effective sales time as customer directly go through the
                product hastle free making the purchase decison easy.
              </p>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5 col-12 col-md-6 mr-lg-auto">
              <img
                src="/assets/img/illustrations/SalesTool/betterSales.jpg"
                alt="Redirect Production to Local"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mt-3 container text-center">
          <SectionHeader title="Testimonials" />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-3 w-100">
              <div
                className="p-4 d-flex flex-column align-items-center gap-2 text-center shadow-lg rounded-xl"
                style={{
                  background: "#f0f4f7",
                  color: "#333",
                  maxWidth: "640px",
                  height: "100%",
                  margin: "0 auto",
                }}
              >
                <div className="d-flex justify-content-between align-items-center w-100 mb-4">
                  <img
                    className="rounded-circle"
                    style={{ height: "4rem", width: "4rem" }}
                    src="/assets/sales-tool-testimonials/Kai_Feng.png"
                    alt="Kai Feng"
                  />
                  <img
                    style={{ width: "8rem", height: "2rem" }}
                    src="/assets/sales-tool-testimonials/1Flow_logo.png"
                    alt="Logo"
                  />
                </div>
                <p className="mb-0 display-6 text-gray w-100 text-left">
                  <span className="text font-weight-bold">Kai Feng, </span>
                  <span>Founder @ 1Flow (YC W'22)</span>
                </p>
                <h5 className="mb-0 mt-2 lead text-left text-gray">
                  As a SaaS founder, I do a lot of sales calls over Zoom. With
                  Requestly, I'm able to demostrate the value of 1Flow's
                  in-product feedback widgets on customers' websites before they
                  even have us installed! It's a game-changer for software sales
                  demos and really creates the magical a-ha moment during these
                  meetings. Conversion rate is higher than ever!
                </h5>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-3 w-100">
              <div
                className="p-4 d-flex flex-column align-items-center gap-2 text-center shadow-lg rounded-xl"
                style={{
                  background: "#f0f4f7",
                  color: "#333",
                  maxWidth: "640px",
                  height: "100%",
                  margin: "0 auto",
                }}
              >
                <div className="d-flex justify-content-between align-items-center w-100 mb-4">
                  <img
                    className="rounded-circle"
                    style={{ height: "4rem", width: "4rem" }}
                    src="/assets/sales-tool-testimonials/rakesh_goyal.png"
                    alt="Rakesh goyal"
                  />
                  <img
                    style={{ width: "8rem", height: "2rem" }}
                    src="/assets/sales-tool-testimonials/snippyly_logo.svg"
                    alt="Snipply goyal"
                  />
                </div>
                <p className="mb-0 display-6 text-gray w-100 text-left">
                  <span className="text font-weight-bold">Rakesh Goyal, </span>
                  <span>Founder @ Snippyly (YC W'22)</span>
                </p>
                <h5 className="mb-0 mt-2 lead text-left text-gray">
                  Snippyly makes any web app multiplayer, just like Figma or
                  Google Docs. Requestly helps us test our SDK on potential
                  customers' web apps. What's amazing is that it also enables
                  our customers to try our SDK within 5 mins without write a
                  single line of code. A must have tool for giving a killer demo
                  to your clients.
                </h5>
              </div>
            </div>
            {/* <div className="col-12 col-md-6 col-lg-4 mt-3 w-100">
              <div
                className="p-4 d-flex flex-column align-items-center gap-2 text-center shadow-lg rounded-xl"
                style={{
                  background: "#f0f4f7",
                  color: "#333",
                  maxWidth: "640px",
                  height: "100%",
                  margin: "0 auto",
                }}
              >
                <div className="d-flex justify-content-between align-items-center w-100 mb-4">
                  <img
                    className="rounded-circle"
                    style={{ height: "4rem", width: "4rem" }}
                    src="/assets/sales-tool-testimonials/Otto_Soderlund.png"
                  />
                  <img
                    style={{ width: "4rem", height: "3rem" }}
                    src="/assets/sales-tool-testimonials/speechly_logo.png"
                  />
                </div>
                <p className="mb-0 display-6 text-gray w-100 text-left">
                  <span className="text font-weight-bold">Otto Soderlund, </span>
                  <span>Founder @ Speechly (YC W'22)</span>
                </p>
                <h5 className="mb-0 mt-2 lead text-left text-gray">
                It feels like magic. We use Requestly to run Speechly on our customer’s website during our demos, and our clients immediately realize the value of Speechly. The sales team is super happy!
                </h5>
              </div>
              </div> */}
          </div>
        </section>

        <section className="mt-7 text-center">
          <div className="mt-lg-4 mx-lg-7 mx-4 mb-6">
            <div className="container">
              <SectionHeader
                title="Improve your sales cycle"
                description="Empower your sales team to do personalized and effective demos!"
              />
              <div className="row justify-content-center">
                <div className="col-12 col-md-5 text-center bg-primary text-white card border-dark p-0 pt-2 card-body">
                  <Link href="https://calendly.com/requestly-enterprise/requestly-premium-support">
                    <a>
                      <h2 className="display-3 mb-3">Request a demo today!</h2>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SalesTool;
