const Header = dynamic(() => import("./header"), { ssr: false });
import SmallDownloadsContainer from "./smallDownloadsContainer";
import { windows, linux, macos } from "platform-detect/os.mjs";
import HeroSectionDownloadBtn from "./HeroSectionDownloadBtn";
import React, { useEffect, useState } from "react";
import UAParser from "ua-parser-js";
import dynamic from "next/dynamic";

export default function HeroSectionDownloadContainer({
  isInTeamsPage = false,
}) {
  const featureName = "temp";
  const [configChecked, setconfigChecked] = useState(false);
  const [browserTemp, setBrowser] = useState({
    type: "browser",
    name: "Chrome",
    src: "https://img.icons8.com/fluent/128/000000/chrome.png",
    href:
      "https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa",
    title: "Chrome Extension",
    alt: `${featureName} Requestly for chrome |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
  });
  const [os, setOs] = useState({
    type: "os",
    name: "Mac OS",
    src: "https://img.icons8.com/ios-filled/128/000000/mac-os.png",
    href: "https://bit.ly/rq-mac",
    title: "Desktop App",
    alt: `${featureName} Requestly for macos |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
  });
  const [iconsObjectArray, setIconsObjectArray] = useState([
    {
      type: "browser",
      name: "Chrome",
      src: "https://img.icons8.com/fluent/128/000000/chrome.png",
      href:
        "https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa",
      title: "Chrome Extension",
      alt: `${featureName} Requestly for chrome |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
    {
      type: "browser",
      name: "Firefox",
      src: "https://img.icons8.com/color/128/000000/firefox.png",
      href: "https://app.requestly.in/firefox/builds/requestly-latest.xpi",
      title: "Firefox Extension",
      alt: `${featureName} Requestly for firefox |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
    {
      type: "browser",
      name: "Edge",
      src: "https://img.icons8.com/color/128/000000/ms-edge-new.png",
      href:
        "https://microsoftedge.microsoft.com/addons/detail/requestly-redirect-url-/ehghoapnlpepjmfbgaomdiilchcjemak",
      title: "Edge Extension",
      alt: `${featureName} Requestly for edge |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
    {
      type: "browser",
      name: "Safari",
      src: "https://img.icons8.com/color/240/000000/safari--v1.png",
      href: "/for-safari",
      title: "Safari Extension",
      alt: `${featureName} Requestly for safari |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
    {
      type: "os",
      name: "Mac OS",
      src: "https://img.icons8.com/ios-filled/128/000000/mac-os.png",
      href: "https://bit.ly/rq-mac",
      title: "Mac Desktop App",
      alt: `${featureName} Requestly for Macos |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
    {
      type: "os",
      name: "Linux",
      src: "https://img.icons8.com/color/96/000000/linux--v1.png",
      href: "/downloads/linux",
      title: "Linux Desktop App",
      alt: `${featureName} Requestly for Linux |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
    {
      type: "os",
      name: "Windows",
      src: "https://img.icons8.com/color/96/000000/windows-10.png",
      href: "https://bit.ly/rq-windows",
      title: "Windows Desktop App",
      alt: `${featureName} Requestly for Windows |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
    {
      type: "os",
      name: "Android",
      src:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzJlY2M3MSI+PHBhdGggZD0iTTQzLDEwMy45MTY2N2MwLDMuOTQxNjcgLTMuMjI1LDcuMTY2NjcgLTcuMTY2NjcsNy4xNjY2N2MtMy45NDE2NywwIC03LjE2NjY3LC0zLjIyNSAtNy4xNjY2NywtNy4xNjY2N3YtMzIuMjVjMCwtMy45NDE2NyAzLjIyNSwtNy4xNjY2NyA3LjE2NjY3LC03LjE2NjY3YzMuOTQxNjcsMCA3LjE2NjY3LDMuMjI1IDcuMTY2NjcsNy4xNjY2N3pNMTQzLjMzMzMzLDEwMy45MTY2N2MwLDMuOTQxNjcgLTMuMjI1LDcuMTY2NjcgLTcuMTY2NjcsNy4xNjY2N2MtMy45NDE2NywwIC03LjE2NjY3LC0zLjIyNSAtNy4xNjY2NywtNy4xNjY2N3YtMzIuMjVjMCwtMy45NDE2NyAzLjIyNSwtNy4xNjY2NyA3LjE2NjY3LC03LjE2NjY3YzMuOTQxNjcsMCA3LjE2NjY3LDMuMjI1IDcuMTY2NjcsNy4xNjY2N3pNNzguODMzMzMsMTQzLjMzMzMzYzAsMy45NDE2NyAtMy4yMjUsNy4xNjY2NyAtNy4xNjY2Nyw3LjE2NjY3Yy0zLjk0MTY3LDAgLTcuMTY2NjcsLTMuMjI1IC03LjE2NjY3LC03LjE2NjY3di0zMi4yNWMwLC0zLjk0MTY3IDMuMjI1LC03LjE2NjY3IDcuMTY2NjcsLTcuMTY2NjdjMy45NDE2NywwIDcuMTY2NjcsMy4yMjUgNy4xNjY2Nyw3LjE2NjY3ek0xMDcuNSwxNDMuMzMzMzNjMCwzLjk0MTY3IC0zLjIyNSw3LjE2NjY3IC03LjE2NjY3LDcuMTY2NjdjLTMuOTQxNjcsMCAtNy4xNjY2NywtMy4yMjUgLTcuMTY2NjcsLTcuMTY2Njd2LTMyLjI1YzAsLTMuOTQxNjcgMy4yMjUsLTcuMTY2NjcgNy4xNjY2NywtNy4xNjY2N2MzLjk0MTY3LDAgNy4xNjY2NywzLjIyNSA3LjE2NjY3LDcuMTY2Njd6Ij48L3BhdGg+PHBhdGggZD0iTTUwLjE2NjY3LDY0LjV2NTMuNzVjMCwzLjk0MTY3IDMuMjI1LDcuMTY2NjcgNy4xNjY2Nyw3LjE2NjY3aDU3LjMzMzMzYzMuOTQxNjcsMCA3LjE2NjY3LC0zLjIyNSA3LjE2NjY3LC03LjE2NjY3di01My43NXpNODYsMjguNjY2NjdjLTIxLjUsMCAtMzQuNzU4MzMsMTIuOSAtMzUuODMzMzMsMjguNjY2NjdoNzEuNjY2NjdjLTEuMDc1LC0xNS43NjY2NyAtMTQuMzMzMzMsLTI4LjY2NjY3IC0zNS44MzMzMywtMjguNjY2Njd6TTcxLjY2NjY3LDQ4LjczMzMzYy0yLjE1LDAgLTMuNTgzMzMsLTEuNDMzMzMgLTMuNTgzMzMsLTMuNTgzMzNjMCwtMi4xNSAxLjQzMzMzLC0zLjU4MzMzIDMuNTgzMzMsLTMuNTgzMzNjMi4xNSwwIDMuNTgzMzMsMS40MzMzMyAzLjU4MzMzLDMuNTgzMzNjMCwxLjc5MTY3IC0xLjQzMzMzLDMuNTgzMzMgLTMuNTgzMzMsMy41ODMzM3pNMTAwLjMzMzMzLDQ4LjczMzMzYy0yLjE1LDAgLTMuNTgzMzMsLTEuNDMzMzMgLTMuNTgzMzMsLTMuNTgzMzNjMCwtMi4xNSAxLjQzMzMzLC0zLjU4MzMzIDMuNTgzMzMsLTMuNTgzMzNjMi4xNSwwIDMuNTgzMzMsMS40MzMzMyAzLjU4MzMzLDMuNTgzMzNjMCwxLjc5MTY3IC0xLjQzMzMzLDMuNTgzMzMgLTMuNTgzMzMsMy41ODMzM3oiPjwvcGF0aD48cGF0aCBkPSJNMTAxLjQwODMzLDM3LjYyNWMtMC43MTY2NywwIC0xLjQzMzMzLC0wLjM1ODMzIC0yLjE1LC0wLjcxNjY3Yy0xLjc5MTY3LC0xLjA3NSAtMi4xNSwtMy4yMjUgLTEuMDc1LC01LjAxNjY3bDYuMDkxNjcsLTguOTU4MzNjMS4wNzUsLTEuNzkxNjcgMy4yMjUsLTIuMTUgNS4wMTY2NywtMS4wNzVjMS43OTE2NywxLjA3NSAyLjE1LDMuMjI1IDEuMDc1LDUuMDE2NjdsLTYuMDkxNjcsOC45NTgzM2MtMC4zNTgzMywxLjA3NSAtMS40MzMzMywxLjc5MTY3IC0yLjg2NjY3LDEuNzkxNjd6TTY5LjE1ODMzLDM2LjE5MTY3Yy0xLjA3NSwwIC0yLjUwODMzLC0wLjcxNjY3IC0yLjg2NjY3LC0xLjc5MTY3bC00LjY1ODMzLC03LjUyNWMtMS4wNzUsLTEuNzkxNjcgLTAuNzE2NjcsLTMuOTQxNjcgMS4wNzUsLTUuMDE2NjdjMS43OTE2NywtMS4wNzUgMy45NDE2NywtMC43MTY2NyA1LjAxNjY3LDEuMDc1bDQuNjU4MzMsNy41MjVjMS4wNzUsMS43OTE2NyAwLjcxNjY3LDMuOTQxNjcgLTEuMDc1LDUuMDE2NjdjLTAuNzE2NjcsMC4zNTgzMyAtMS40MzMzMywwLjcxNjY3IC0yLjE1LDAuNzE2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
      href: "/android-interceptor",
      title: "Android SDK",
      alt: `${featureName} Requestly for Android |  proxyman alternatives | mocky.io alternative | Fiddler Alternative | charles proxy alternative`,
    },
  ]);

  useEffect(() => {
    const parser = new UAParser();
    parser.setUA(window.navigator.userAgent);
    const result = parser.getResult();
    const broswerDectected = result.browser.name;
    const osDetected = result.os.name;
    const downloadIconsArray = iconsObjectArray.filter((icon) => {
      if (icon.type == "browser" && icon.name == broswerDectected) {
        setBrowser(icon);
        return false;
      }
      if (icon.type == "os" && icon.name == osDetected) {
        setOs(icon);
        return false;
      }
      return true;
    });
    setIconsObjectArray(downloadIconsArray);
    setconfigChecked(true);
  }, [configChecked]);

  return (
    <div>
      <div
        className={`row mb-3 d-flex justify-content-center ${
          !isInTeamsPage && "justify-content-lg-start"
        }`}
      >
        <div className="col-auto d-flex align-items-center">
          {!isInTeamsPage && <HeroSectionDownloadBtn data={browserTemp} />}
          {isInTeamsPage && (
            <a
              href="https://app.requestly.io/license"
              target="_blank"
              rel="noreferrer"
              className="d-flex justify-content-center align-items-center btn btn-white btn-md mt-4 mt-lg-1"
              style={{ color: "#0E38BA" }}
            >
              Manage Team Subscription
            </a>
          )}
        </div>
        <div className="col-auto d-flex align-items-center">
          {!isInTeamsPage && <HeroSectionDownloadBtn data={os} />}
          {isInTeamsPage && (
            <a
              href="https://app.requestly.io/pricing"
              target="_blank"
              rel="noreferrer"
              className="d-flex justify-content-center align-items-center btn btn-white btn-md mt-4 mt-lg-1"
              style={{ color: "#0E38BA" }}
            >
              New Team Subscription
            </a>
          )}
        </div>
      </div>
      <div
        className={`row d-flex align-items-center justify-content-center ${
          !isInTeamsPage && "justify-content-lg-start"
        } ml-0 ml-lg-2 mt-2 lead`}
      >
        {isInTeamsPage ? "Available for" : "Also available for"}
        <SmallDownloadsContainer data={iconsObjectArray} />
      </div>
    </div>
  );
}
