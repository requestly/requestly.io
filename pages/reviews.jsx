import reviewList from "../utils/json/reviewList.json";
import Testimonial from "../components/testimonial";
import HeadTags from "../components/HeadTags";

const Reviews = () => {
  return (
    <>
      <HeadTags title="Reviews | Requestly" />
      <section className="section-header pb-8 bg-primary text-white">
        <h1 className="display-3 mb-3 pl-4 ml-3 pl-lg-9">
          Wall of Love <i className="fas fa-heart text-secondary"></i>
        </h1>
        <div className="pattern bottom"></div>
      </section>
      <div className="row bg-soft pt-5 pb-5 pl-3 pl-xl-8 pr-xl-8 mr-0">
        <Testimonial reviewList={reviewList} showOnHomePage={false} />
      </div>
    </>
  );
};

export default Reviews;
