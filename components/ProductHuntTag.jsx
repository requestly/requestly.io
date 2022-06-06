import Link from "next/link";
import React from "react";

const ProductHuntTag = () => {
  return (
      <Link 
        href="https://www.producthunt.com/posts/requestly-for-android?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-requestly&#0045;for&#0045;android" 
        target="_blank"
        rel="noreferrer"
        passHref
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=343176&theme=light&period=daily" alt="Requestly&#0032;for&#0032;Android - A&#0032;powerful&#0032;open&#0045;source&#0032;debugger&#0032;for&#0032;Android&#0032;apps | Product Hunt" 
          style={{width: "250px", height: "54px"}}
          width="250" 
          height="54" 
        />
      </Link>
  );
};

export default ProductHuntTag;
