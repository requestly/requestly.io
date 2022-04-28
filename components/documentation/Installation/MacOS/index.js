import React from "react";
const MacOS = () => {
  return (
    <>
      <div className="mb-4"></div>
      <ul className="disc">
        <li>
          {`Download the `}
          <a
            href="https://requestly.io/desktop"
            target={"_blank"}
            rel="noreferrer"
          >
            {`MacOS .dmg file`}
          </a>
        </li>
        <li>{`Open the DMG`}</li>
        <li>
          {`Drag the Requestly application within to your Applications folder`}
        </li>
        <li>{`Run the Requestly application`}</li>
        <li>
          {`A MacOS "This is an application downloaded from the internet" prompt
          may appear; accept it and continue to start the application`}
        </li>
      </ul>
      <div className="mb-4"></div>
    </>
  );
};

export default MacOS;
