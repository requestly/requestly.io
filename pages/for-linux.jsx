import ForOSSection from "../components/ForOSSection";
import LearnUsage from "../components/learnUsage";
import HeadTags from "../components/HeadTags";
import { useEffect, useRef } from "react";

const ForLinuxPage = () => {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    videoRef.current.play();
    videoRef2.current.play();
  }, []);

  return (
    <div>
      <HeadTags
        title="Download for Linux | Requestly"
        description="Download Requestly Desktop App"
      />
      <ForOSSection
        videoRef={videoRef}
        videoRef2={videoRef2}
        link="/downloads/linux"
        iconName="linux"
        osName="Linux"
        browserName="Linux"
        headerVideo="/assets/videos/for-linux.mp4"
        mockUiVideo="/assets/videos/modify-response-on-fly-linux.mp4"
        redirectProdImage="/assets/img/screenshots/desktop-app/redirect-prod-to-local-linux.png"
        modifyHeadersImage="/assets/img/screenshots/desktop-app/modify-headers-linux.jpg"
        mockApiImage="/assets/img/screenshots/desktop-app/mock-api-linux.png"
        targetSelf={true}
      />
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

export default ForLinuxPage;
