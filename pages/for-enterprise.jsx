import TestimonialSection from "../components/testimonial";
import reviewList from "../utils/json/reviewList.json";
import { Questions } from "../utils/feedbackQuestions";
import CompanyLogo from "../components/companyLogo";
import Stats from "../components/stats";
import Faq from "../components/faq";
import dynamic from "next/dynamic";
import { useState } from "react";

const LoadableBtn = dynamic(() => import("../components/formButton"), {
  ssr: false,
});

const EnterprisePage = ({ pageContext }) => {
  const [email, setEmail] = useState("");

  return <div>Hello</div>;
  // <div>
  //   <section className="section-header bg-light text-dark">
  //     <div className="container">
  //       <div className="row justify-content-between align-items-center pb-3">
  //         <div className="col-12 col-md-6 order-2 order-lg-1 mt-lg-0 mt-4">
  //           <h4 className="mb-3"> Requestly for Enterprises </h4>
  //           <h1 className="mb-3">Intercept & Modify HTTP(s) Requests</h1>
  //           <h5 className="mb-5">
  //             Accelerate the speed of your testing and improve the
  //             effectiveness of your application.
  //           </h5>
  //           <p className="lead">
  //             <a href="#verfication-form">
  //               <button type="button" className="btn btn-default">
  //                 Contact Sales
  //               </button>
  //             </a>

  //             <br />
  //           </p>
  //         </div>
  //         <div className="col-12 col-md-6 order-1 order-lg-2">
  //           <img
  //             src={smartBoyImage}
  //             alt="Requestly Desktop is free for open-source, education, and discounted for non-profits | proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative "
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="pattern bottom"></div>
  //   </section>
  //   <div className="mt-lg-3 mr-lg-8 ml-lg-8 mr-5 ml-5 mb-5 ">
  //     <h2 className="text-center mb-4 mt-5" style={{ fontSize: "1.5rem" }}>
  //       Empowering 125K+ developers & testers to debug & modify network
  //       requests at 500+ organizations.
  //     </h2>
  //     <CompanyLogo />
  //     <div className="row pl-lg-5 pl-xl-7 mt-5 mt-lg-6 mb-4 pl-md-5">
  //       <Stats title="200k+" des="Rules Created" />
  //       <Stats title="100k+" des="Current Users" />
  //       <Stats title="10k+" des="Rules Shared" />
  //     </div>
  //   </div>
  //   <section className="mb-5">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col  d-flex justify-content-center align-items-center pb-3 text-center">
  //           <span className="display-3">Get Started in just 3 Steps</span>
  //         </div>
  //       </div>
  //       <div className="card-deck">
  //         <div className="card">
  //           <div className="card-body">
  //             <div className="row">
  //               <div className="col align-self-center">
  //                 <h6 className="card-title text-uppercase text-muted mb-0">
  //                   Step 1
  //                 </h6>
  //                 <span className="h5 card-title text-uppercase font-weight-bold mb-0">
  //                   Create Account
  //                 </span>
  //               </div>
  //               <div className="col-auto">
  //                 <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
  //                   <i className="fas fa-user-plus"></i>
  //                 </div>
  //               </div>
  //             </div>
  //             <p className="mt-3 mb-0 text-sm">
  //               <span>
  //                 Create a Requestly account using an email that you wish to
  //                 use with your Requestly premium account.
  //               </span>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="card">
  //           <div className="card-body">
  //             <div className="row">
  //               <div className="col align-self-center">
  //                 <h6 className="card-title text-uppercase text-muted mb-0">
  //                   Step 2
  //                 </h6>
  //                 <span className="h5 card-title text-uppercase font-weight-bold mb-0">
  //                   Get Verified
  //                 </span>
  //               </div>
  //               <div className="col-auto">
  //                 <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
  //                   <i className="fas fa-user-check"></i>
  //                 </div>
  //               </div>
  //             </div>
  //             <p className="mt-3 mb-0 text-sm">
  //               <span>
  //                 To Activate the premium plan of Requestly under our{" "}
  //                 {`${pageContext.benefitCategory} `}
  //                 benefits fill up <a href="#verfication-form">
  //                   this form
  //                 </a>{" "}
  //                 and wait for us to verify.
  //               </span>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="card">
  //           <div className="card-body">
  //             <div className="row">
  //               <div className="col align-self-center">
  //                 <h6 className="card-title text-uppercase text-muted mb-0">
  //                   Step 3
  //                 </h6>
  //                 <span className="h5 card-title text-uppercase font-weight-bold mb-0">
  //                   Use Requestly
  //                 </span>
  //               </div>
  //               <div className="col-auto">
  //                 <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
  //                   <i className="fas fa-user-ninja"></i>
  //                 </div>
  //               </div>
  //             </div>
  //             <p className="mt-3 mb-0 text-sm">
  //               <span>
  //                 Once Verified, Enjoy the premium features of your Requestly.
  //                 Find out more about Requestly and discover the infinite
  //                 opportunities of this Platform.
  //               </span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  //   <section>
  //     <div className="card" style={{ width: "18rem" }}>
  //       <img
  //         className="card-img-top"
  //         src={smartBoyImage}
  //         alt="Card image cap"
  //       />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </p>
  //       </div>
  //     </div>
  //   </section>
  //   <section className="mb-5">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col  d-flex justify-content-center align-items-center pb-3 text-center">
  //           <span className="display-3">
  //             Platform features to enable powerful testing
  //           </span>
  //         </div>
  //       </div>
  //       <div className="card-deck">
  //         <div className="card">
  //           <img
  //             className="card-img-top"
  //             src={smartBoyImage}
  //             alt="Card image cap"
  //           />
  //           <div className="card-body">
  //             <h5 className="card-title">Card title</h5>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //           </div>
  //         </div>
  //         <div className="card">
  //           <img
  //             className="card-img-top"
  //             src={smartBoyImage}
  //             alt="Card image cap"
  //           />
  //           <div className="card-body">
  //             <h5 className="card-title">Card title</h5>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //           </div>
  //         </div>
  //         <div className="card">
  //           <img
  //             className="card-img-top"
  //             src={smartBoyImage}
  //             alt="Card image cap"
  //           />
  //           <div className="card-body">
  //             <h5 className="card-title">Card title</h5>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  //   <section
  //     className="d-flex justify-content-center mb-5"
  //     id="verfication-form"
  //   >
  //     <div
  //       className="card card-frameml-4 mx-2"
  //       style={{
  //         border: "2px solid #3c6fc3bf",
  //         borderRadius: "15px",
  //         maxWidth: "60ch",
  //       }}
  //     >
  //       <div className="card-body d-flex justify-content-center ">
  //         <form className=" form-group px-3 justify-content-md-center">
  //           <h2 className="card-title text-center">
  //             {pageContext.formHeader}
  //           </h2>
  //           <div className="form-group mb-3">
  //             <label for="exampleInputEmail1">Email address</label>
  //             <input
  //               type="email"
  //               className="form-control  border border-primary"
  //               id="exampleInputEmail1"
  //               aria-describedby="emailHelp"
  //               placeholder="example@organization.com"
  //               value={email}
  //               onInput={(e) => {
  //                 setEmail(e.target.value);
  //               }}
  //             />
  //             <small id="emailHelp" className="form-text text-muted mt-3">
  //               We'll never share your email with anyone else.
  //             </small>
  //           </div>

  //           <div className="text-center">
  //             <LoadableBtn
  //               className=""
  //               email={email}
  //               category={pageContext.benefitCategory}
  //             />
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </section>
  //   <section className="section section-md">
  //     <div className="container">
  //       <div className="row justify-content-center">
  //         <div className="col-12 col-md-8 text-center">
  //           <h1 className="h1 font-weight-bolder mb-4">
  //             Wall of Love <i className="fas fa-heart text-secondary"></i>
  //           </h1>
  //           <p className="lead">
  //             We are proud of 125K+ happy users. Hear what they say about us.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //     <div>
  //       <TestimonialSection reviewList={reviewList} showOnHomePage={true} />
  //     </div>
  //   </section>
  //   <section className="h-100 section bg-primary mb-5">
  //     <Faq Questions={Questions} />
  //   </section>
  //   <section>
  //     <div className="row">
  //       <div className="col  d-flex justify-content-center align-items-center pb-3 text-center">
  //         <span className="display-3" style={{ color: "#13428ec9" }}>
  //           Companies using Requestly
  //         </span>
  //       </div>
  //     </div>
  //     <CompanyLogo />
  //   </section>
  // </div>
};

export default EnterprisePage;
