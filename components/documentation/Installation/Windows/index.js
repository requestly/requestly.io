import React from "react";
const Windows = () => {
  return (
    <>
      <div className="mb-4"></div>
      <ul className="disc">
        <li>
          <a
            href="https://requestly.io/desktop"
            target={"_blank"}
            rel="noreferrer"
          >
            Download
          </a>{" "}
          and run the Windows installer
        </li>
        <li>
          A progress bar will appear whilst the installer runs, wait for it to
          complete
        </li>
        <li>
          You can now run Requestly from the shortcuts on your desktop & in the
          start menu
        </li>
        <li>
          {`If a firewall warning appears, click 'Allow Access', to allow
          Requestly to accept traffic from elsewhere on your network, such as
          from phones or other computers`}
        </li>
      </ul>
      <div className="mb-4"></div>
    </>
  );
};

export default Windows;
