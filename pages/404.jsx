import HeadTags from "../components/HeadTags";
import Link from "next/link";

const NotFoundPage = () => (
  <>
    <HeadTags title="Page Not Found | Requestly" />
    <section className="vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center d-flex align-items-center justify-content-center">
            <div>
              <Link href="/">
                <a className="img-fluid">
                  <img
                    width="80%"
                    src="/assets/img/illustrations/404.svg"
                    alt="404 not found"
                  />
                </a>
              </Link>
              <h1 className="mt-5">
                Page not{" "}
                <span className="font-weight-bolder text-primary">found</span>
              </h1>
              <p className="lead my-4">
                Oops! Looks like you followed a bad link. If you think this is a
                problem with us, please tell us.
              </p>
              <Link href="/">
                <a>
                  <button className="btn btn-primary animate-hover">
                    <i className="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i>
                    Go back home
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default NotFoundPage;
