import React from "react";
const Welcome = () => {
  return (
    <>
      <p>
        {`Welcome to Requestly. This documentation is a work in progress. If you
        don't find your answer here, please ask on `}
        <a
          href="https://github.com/requestly/requestly"
          target={"_blank"}
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <p>
        Requestly Desktop is the <code>desktop version</code>of the popular{" "}
        <a
          href="https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa"
          target={"_blank"}
          rel="noreferrer"
        >
          Requestly browser extension
        </a>
        , which enables developers to{" "}
        <code>view and modify HTTP/HTTPS requests</code> from desktop apps and
        browsers, including iOS devices, iOS Simulators, and Android devices.
      </p>

      <p>
        {` If you're looking to develop, test, or debug HTTP traffic, you're in the
        right place.`}
      </p>
      <br />
      <h3>Features</h3>
      <ul>
        <li>
          ✅ Intercept HTTP/HTTPS (SSL) requests from your Macbook, iOS
          Simulators, iOS devices, and Android devices 📱.
        </li>
        <li>✅ Create Rules to trigger actions</li>
        <li>✅ Support Apple M1 Chip and macOS Big Sur & Monterey</li>
        <li>✅ Common dashboard for MacOS, Windows & Linux</li>
        <li>✅ Modern and intuitive UI</li>
        <li>
          ✅ Comprehensive Rule actions: Redirect, Replace String, Modify
          Headers, Inject JS, etc.
        </li>
        <li>✅ One-click Share Rules with other Requestly users</li>
        <li>✅ New features, new improvements every week</li>
        <li>✅ 100% free of all essential basic features</li>
        <li>✅ [UPCOMING] Per Rule & Global variables support</li>
        <li>✅ [UPCOMING] Support Pre-defined functions</li>
        <li>✅ [UPCOMING] Team workspace</li>
      </ul>
      <br />
      <br />
      <p>To continue reading please see the list of sections to the left.</p>
    </>
  );
};

export default Welcome;
