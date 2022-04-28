import React from "react";

const MacOSCertificate = () => {
  return (
    <>
      <div className="mb-4"></div>
      <ul className="disc">
        <li>
          {`Open the Requestly desktop app for MacOS. If you haven't installed
          already,`}
          <a
            href="https://requestly.io/desktop"
            target={"_blank"}
            rel="noreferrer"
          >
            Download from here
          </a>
          .
        </li>
        <li>
          {`Navigate to the "Apps" tab and click Install Certificate in the bottom`}
        </li>
        <img
          src="/assets/img/screenshots/desktop-app/apps-tab.png"
          alt="Apps tab"
        ></img>
        <li>
          {`Click the "Save Certificate" button and save the certificate to a
          temporary location like Desktop.`}
        </li>
        <img
          src="/assets/img/screenshots/desktop-app/save-certificate.png"
          alt="Save certificate"
        ></img>
        <li>
          {`In the Keychain Access app on your Mac, select either the login or
          System keychain`}
        </li>
        <li>{`Navigate to the Certificates tab in the Keychain Access`}</li>
        <li>
          {`Drag the certificate file onto the Keychain Access app, you would now
          see "RequestlyCA" in the list. Double click it.`}
        </li>
        <li>
          {`Expand the Trust option and set "When using this certificate" to
          "Always Trust"`}
        </li>
        <img
          style={{ maxHeight: "30vh" }}
          src="/assets/img/screenshots/desktop-app/always-trust.png"
          alt="Always Trust"
        ></img>
        <li>
          {`If you’re asked to provide a name and password, type the name and
          password for an administrator user on this computer.`}
        </li>
        <li>
          {`You can now safely delete the certificate file and use Requestly with
          any app in MacOS like Safari.`}
        </li>
      </ul>
      <div className="mb-4"></div>
    </>
  );
};

export default MacOSCertificate;
