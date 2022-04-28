import DesktopDownloadCard from "../components/desktopDownloadCard";
import LearnUsage from "../components/learnUsage";
import HeadTags from "../components/HeadTags";
import { useEffect, useRef } from "react";
import Link from "next/link";

const DesktopApp = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div>
      <HeadTags
        title="Desktop App | Requestly"
        description="Download the Requestly Desktop App"
      />
      <section className={`section-header pb-9 bg-primary text-white pb-lg-12`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-7 col-lg-7 text-center">
              <h1 className="display-3 mb-4 font-weight-normal">
                Requestly Desktop App
              </h1>
              <p className="lead text-muted mb-5">
                Run Requestly on top of your favourite apps – Spotify, Slack,
                Postman, VSCode etc.
              </p>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div
            className="row mb-4 d-flex justify-content-center"
            style={{ width: "80%" }}
          >
            <a href="https://bit.ly/rq-mac">
              <DesktopDownloadCard title="MacOS" icon="apple" />
            </a>
            <Link href="/downloads/linux">
              <a>
                <DesktopDownloadCard title="Linux" icon="linux" />
              </a>
            </Link>
            <Link href="https://bit.ly/rq-windows">
              <a>
                <DesktopDownloadCard title="Windows" icon="windows" />
              </a>
            </Link>
          </div>
        </div>
        <div className="pattern bottom"></div>
      </section>

      <div className="section pt-0 pb-5">
        <div className="container mt-n9 mt-lg-n12 z-2">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                ref={videoRef}
                width="80%"
                className="squircle-image"
              >
                <source src="/assets/videos/linux-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <LearnUsage />
    </div>
  );
};

export default DesktopApp;
