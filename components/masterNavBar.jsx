import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AnnouncementBanner from "./announcementBanner";
import { useMediaQuery } from "react-responsive";

const Header = dynamic(() => import("./header"), { ssr: false });

const MasterNavBar = () => {
  const [isBannerNotVisible, setIsBannerNotVisible] = useState(
    true
    // Comment out below line to use to announcement banner
    // !!localStorage.getItem("ph-sdk-launch-22")
  );
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div>
      {isBannerNotVisible ? null : (
        <AnnouncementBanner
          isBannerNotVisible={isBannerNotVisible}
          setIsBannerNotVisible={setIsBannerNotVisible}
          isMobile={isMobile}
        />
      )}
      <Header
        theme="dark"
        isBannerNotVisible={isBannerNotVisible}
        isMobile={!isMobile}
      />
    </div>
  );
};

export default MasterNavBar;
