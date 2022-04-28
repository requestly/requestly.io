import DesktopDownloadCard from "../../components/desktopDownloadCard";
import LearnUsage from "../../components/learnUsage";
import HeadTags from "../../components/HeadTags";
import { useEffect, useRef } from "react";

const Linux = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div>
      <HeadTags
        title="Download for MacOS | Requestly"
        description="Download Requestly Desktop App"
      />
      <section className={`section-header pb-9 bg-primary text-white pb-lg-12`}>
        <div className="container">
          <div className="row justify-content-center">
            <video
              autoPlay
              muted
              loop
              id="myVideo"
              ref={videoRef}
              width="60%"
              className="squircle-image mb-5"
            >
              <source src="/assets/videos/mac-loop.mp4" type="video/mp4" />
            </video>
            <div className="col-12 col-sm-8 col-md-7 col-lg-6 text-center">
              <h1 className="display-3 mb-4 font-weight-normal">
                Download Requestly for MacOS
              </h1>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div
            className="row mb-4 d-flex justify-content-center"
            style={{ width: "80%" }}
          >
            <DesktopDownloadCard
              title="MacOS"
              link="https://bit.ly/rq-mac"
              icon="macos"
            />
          </div>
        </div>
        <div className="container w-50">
          <div className="card mt-5">
            <div className="card-body text-black d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center"></div>
              <h2 className="card-title">Instructions</h2>
              <p>
                Installing Requestly on MacOS is extremely easy! <br />
              </p>
              <div>
                <h4>Step 1:</h4>
                <p>
                  After downloading Requestly AppImage, browse to your downloads
                  folder and open the Properties of the downloaded file.
                </p>
                <img
                  src="/assets/img/screenshots/extension-steps/Linux3.jpg"
                  alt="step1"
                  className="card-image shadow-lg squircle-image border border-variant-gray-400"
                />
              </div>
              <br />
              <br />
              <div>
                <h4>Step 2:</h4>
                <p>
                  Go to the Permissions tab and make sure that the file has the
                  permissions to execute.
                </p>
                <img
                  src="/assets/img/screenshots/extension-steps/Linux3.jpg"
                  alt="step1"
                  className="card-image shadow-lg squircle-image border border-variant-gray-400"
                />
              </div>
              <br />
              <br />
              <div>
                <h4>Step 3:</h4>
                <p>Double click to open the Requestly as any other app.</p>
                <img
                  src="/assets/img/screenshots/extension-steps/Linux3.jpg"
                  alt="step1"
                  className="card-image shadow-lg squircle-image border border-variant-gray-400"
                />
              </div>
              <br />
              <br />
              <h3 className="text-center">{`and we're done!`}</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="section pt-0 pb-5">
        <div className="container mt-n9 mt-lg-n12 z-2">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <LearnUsage />
    </div>
  );
};

export default Linux;
