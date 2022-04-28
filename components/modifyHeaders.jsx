import React from "react";
import SectionHeader from "./section-header";
import Feature from "./feature";
import ContentCard from "./contentCard";

const ModifyHeaders = ({ pageContent }) => {
  return (
    <>
      <div className="w-50 mx-auto mt-7 text-center">
        <span className="h4 lead">{pageContent.briefContent}</span>
      </div>
      <div className="section">
        <div className="container">
          <SectionHeader
            title="Application and use cases"
            description="These are some of the main features that you will find yourself using."
          />
          <Feature
            side="left"
            imgSrc="/assets/img/illustrations/ModifyHeaders/feature-1.png"
            featureName="Add, Modify and Remove Headers"
            featureContent="You can add, modify and even remove headers from the URL provided. Modify headers like User-Agent, Access-Control-Allow-Origin, etc."
          />
          <Feature
            side="right"
            imgSrc="/assets/img/illustrations/ModifyHeaders/feature-2.png"
            featureName="Modification based on URL"
            featureContent="Configure the criteria of URL on which the rules applies. Options like if the URL contains, equals or matches regex."
          />
          <Feature
            side="left"
            imgSrc="/assets/img/illustrations/ModifyHeaders/feature-3.png"
            featureName="Pair Multiple Rules"
            featureContent="Freemium users can pair upto 3 rules and premium users can pair unlimited rules together to match any preferred use case."
          />
        </div>
      </div>
      <div className="section bg-primary">
        <h1 className="text-center text-white">Testimonials</h1>
        <div className="mx-auto container">
          <div className="row mt-5">
            <ContentCard
              src="https://pbs.twimg.com/profile_images/1061435355096735746/wkpJLctM_400x400.jpg"
              title="Andrew Thompson"
              content="#Requestly #Debug & #Modify #network requests - loved by 100K+ #webdevs If you are a #webdeveloper, Requestly is for you. You can set up #URL #redirects, #rewrites, run custom JS, modify headers, etc. https://requestly.in/?ref=producthunt #requestly #producthunt"
            />
            <ContentCard
              src="https://pbs.twimg.com/profile_images/1418380286950260739/1QrhCIM2_400x400.jpg"
              title="Zane"
              content="Fun fact: if you modify Chrome headers with something like requestly like so, and load this URL, you can access the iOS 4 App Store in Chrome Man shrugging https://apps.apple.com/WebObjects/MZStore.woa/wa/viewGrouping?cc=us&id=25204&selected-tab-index=0"
            />
            <ContentCard
              src="https://pbs.twimg.com/profile_images/453907814436454400/sPVLw1L6_400x400.jpeg"
              title="Mike Mitchell"
              content="To my developer and QA people: Check out Requestly, a chrome extension that lets you setup redirects, modify headers, switch hosts, insert user scripts and much more! https://requestly.io via @requestlyIO"
            />
            <ContentCard
              src="https://pbs.twimg.com/profile_images/1042000727986458624/hMeIqs52_400x400.jpg"
              title="Matt Stow"
              content="Requestly is, without a doubt, one of the must have extensions for web developers. I never knew how much I needed to modify network requests on the file until I could http://requestly.io"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifyHeaders;
