import HeroSectionDownloadBtn from "../components/HeroSectionDownloadBtn";
import ForOSSection from "../components/ForOSSection";
import LearnUsage from "../components/learnUsage";
import HeadTags from "../components/HeadTags";
import { useEffect, useRef } from "react";

const DesktopApp = () => {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div>
      <HeadTags
        title="Download for Safari | Requestly"
        description="Download Requestly Desktop App"
        keywords="Requestly for Safari, Debug in Safari, Modify Headers, Redirect URLs, Switch Hosts, Mock API Response, Delay Network requests, Insert Custom Scripts"
      />
      <ForOSSection
        videoRef={videoRef}
        videoRef2={videoRef2}
        link="https://bit.ly/rq-mac"
        iconName="mac-os"
        osName="MacOS"
        browserName="Safari"
        headerVideo="/assets/videos/for-safari.mp4"
        mockUiVideo="/assets/videos/modify-response.mp4"
        redirectProdImage="/assets/img/screenshots/desktop-app/redirect-prod-to-local.png"
        modifyHeadersImage="/assets/img/screenshots/desktop-app/modify-headers.png"
        mockApiImage="/assets/img/screenshots/desktop-app/mock-api.png"
        targetSelf={false}
      />

      <LearnUsage />
    </div>
  );
};

export default DesktopApp;
