import React from "react";
const Linux = () => {
  return (
    <>
      <div className="mb-4"></div>
      <h4>Ubuntu or Debian</h4>
      <ul className="disc">
        <li>
          Download the{" "}
          <a
            href="https://requestly.io/desktop"
            target={"_blank"}
            rel="noreferrer"
          >
            .AppImage file
          </a>{" "}
          and save it to desktop
        </li>
        <li>Right click on the AppImage file, click on Properties. </li>
        <li>
          Click on Permissions and click on Allow executing the file as a
          program.
        </li>
        <li>
          Close the properties window an double click to run the software.
        </li>
      </ul>
      <hr className="mb-4" />

      <h4>Using Terminal</h4>
      <p>
        Open any Terminal of your choice, head over to the app image directory
        and run:
      </p>
      <div className="bd-clipboard">
        <button
          type="button"
          className="btn-clipboard"
          title=""
          data-original-title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <div className="highlight">
        <pre className="chroma">
          <code className="language-bash" data-lang="bash">
            {"chmod u+x <AppImageFile>"}
          </code>
        </pre>
      </div>

      <p>Then you can now double click to run it.</p>

      <hr className="mb-4"></hr>

      <h4>Other Linuxes</h4>
      <p>
        While Requestly was originally build for Debian based Linux, it can
        still be used on all major Linux distributions.
      </p>
    </>
  );
};

export default Linux;
