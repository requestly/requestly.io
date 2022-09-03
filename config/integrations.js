import amplitude from "amplitude-js";
import posthog from "posthog-js";
import GA4React from "ga-4-react";
import Router from "next/router";

let ga4react;
let AMPLITUDE_INTEGRATION_DONE = false;
let POSTHOG_INTEGRATION_DONE = false;

export async function initGA(G) {
  if (!GA4React.isInitialized() && G && process.browser) {
    ga4react = new GA4React(G, { debug_mode: process.env.NEXT_PUBLIC_ENV !== "production" });

    try {
      await ga4react.initialize();
      logPageViews();
    } catch (error) {
      console.error(error);
    }
  }
}

function logPageView() {
  ga4react.pageview(window.location.pathname);
}

function logPageViews() {
  logPageView();

  Router.events.on("routeChangeComplete", () => {
    logPageView();
  });
}

function logGAEvent(action, label, category) {
  ga4react.event(action, label, category);
}

export function addAmplitude() {
  if (!AMPLITUDE_INTEGRATION_DONE) {
    AMPLITUDE_INTEGRATION_DONE = true;
    // Init Amplitude
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);
  }
}

// Wrapper method to submit event to multiple sources
export function submitEvent(dataMessage) {
  // Submit to GA4
  logGAEvent(
    dataMessage.eventAction,
    dataMessage.eventLabel,
    dataMessage.eventCategory
  );

  // Send event to Amplitude
  try {
    // Disabling this temporarly
    // amplitude.getInstance().logEvent(dataMessage.eventLabel, {
    //   eventCategory: dataMessage.eventCategory,
    //   eventAction: dataMessage.eventAction,
    //   src: "landing-pages",
    // });
  } catch (e) {
    console.log("Amplitude hasn't loaded yet!");
  }
}

export const trackEvent = (name, params) => {
  // Add uid to every event
  const newParams = { ...params };

  // Send to GA4
  if (window.gtag) window.gtag("event", name, newParams);

  // Send to Amplitude
  // Disabling this temporarly
  // amplitude.getInstance().logEvent(name, newParams);
};

export function addPostHog() {
  if (
    !POSTHOG_INTEGRATION_DONE &&
    !window.location.host.includes("127.0.0.1") &&
    !window.location.host.includes("localhost")
    ) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: "https://app.posthog.com",
      autocapture: false,
    });
    POSTHOG_INTEGRATION_DONE = true;
  }
}