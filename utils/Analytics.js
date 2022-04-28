import { submitEvent } from "../config/integrations";
import { trackEvent } from "../config/integrations";
import { snakeCase } from "./snakeCase";

export const submitCustomEvent = (
  eventCategory,
  eventAction,
  eventLabel,
  eventValue
) => {
  submitEvent({
    eventCategory,
    eventAction,
    eventLabel: eventLabel
      ? eventLabel.replace(".", "_").replace("@", "_at_")
      : null,
    eventValue,
  });
};

export const trackDownloadClickedEvent = (platform, section) => {
  platform = snakeCase(platform);
  const params = {
    platform,
    section,
  };
  trackEvent("download_clicked", params);
};

export const trackFeatureClickedEvent = (feature) => {
  feature = snakeCase(feature);
  const params = {
    feature,
  };
  trackEvent("feature_clicked", params);
};

export const trackSocialHandlesClickedEvent = (handle) => {
  handle = snakeCase(handle);
  const params = {
    handle,
  };
  trackEvent("social_handle_clicked", params);
};

export const trackInfoPageClickedEvent = (info, section) => {
  info = snakeCase(info);
  const params = {
    info,
    section,
  };
  trackEvent("info_page_clicked", params);
};

export const trackBlogCardClickedEvent = (blog) => {
  const params = {
    blog,
  };
  trackEvent("blog_card_clicked", params);
};

export const trackBlogCategoryClickedEvent = (category) => {
  const params = {
    category,
  };
  trackEvent("blog_category_clicked", params);
};

export const trackBlogViewedEvent = (blog) => {
  const params = {
    blog,
  };
  trackEvent("blog_viewed", params);
};

export const trackCustomerStoryViewedEvent = (story) => {
  const params = {
    story,
  };
  trackEvent("customer_story_viewed", params);
};

export const trackArticleClickedEvent = (story) => {
  const params = {
    article,
  };
  trackEvent("article_clicked", params);
};
