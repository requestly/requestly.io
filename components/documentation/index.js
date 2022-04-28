import MacOSCertificate from "./Install Root Certificate/MacOS";
import Linux from "./Installation/Linux";
import MacOS from "./Installation/MacOS";
import Windows from "./Installation/Windows";
import AndroidProxy from "./Set Proxy/Android";
import LinuxProxy from "./Set Proxy/Linux";
import MacOSProxy from "./Set Proxy/MacOS";
import WindowsProxy from "./Set Proxy/Windows";
import Troubleshooting from "./Troubleshooting";
import Welcome from "./Welcome";

const documentation = [
  {
    name: "Welcome",
    sections: [
      {
        name: "Welcome",
        content: Welcome,
        subsections: [],
        hideInMenu: true,
      },
    ],
  },
  {
    name: "Installation",
    sections: [
      {
        name: "Windows",
        content: Windows,
        subsections: [],
      },
      {
        name: "Linux",
        content: Linux,
        subsections: [],
      },
      {
        name: "MacOS",
        content: MacOS,
        subsections: [],
      },
    ],
  },
  {
    name: "Install Certificate",
    sections: [
      {
        name: "Windows",
        content: WindowsProxy,
        subsections: [],
      },
      {
        name: "Linux",
        content: LinuxProxy,
        subsections: [],
      },
      {
        name: "MacOS",
        content: MacOSCertificate,
        subsections: [],
      },
      {
        name: "Android",
        content: AndroidProxy,
        subsections: [],
      },
    ],
  },
  {
    name: "Apply Proxy",
    sections: [
      {
        name: "Windows",
        content: WindowsProxy,
        subsections: [],
      },
      {
        name: "Linux",
        content: LinuxProxy,
        subsections: [],
      },
      {
        name: "MacOS",
        content: MacOSProxy,
        subsections: [],
      },
      {
        name: "Android",
        content: AndroidProxy,
        subsections: [],
      },
    ],
  },
  {
    name: "Troubleshooting",
    sections: [
      {
        name: "Troubleshooting",
        content: Troubleshooting,
        subsections: [],
        hideInMenu: true,
      },
    ],
  },
  {
    name: "FAQs",
    sections: [
      {
        name: "FAQs",
        content: Troubleshooting,
        subsections: [],
        hideInMenu: true,
      },
    ],
  },
  {
    name: "Additional Info",
    sections: [
      {
        name: "Additional Info",
        content: Troubleshooting,
        subsections: [],
        hideInMenu: true,
      },
    ],
  },
  {
    name: "Version History",
    sections: [
      {
        name: "Version History",
        content: Troubleshooting,
        subsections: [],
        hideInMenu: true,
      },
    ],
  },
  {
    name: "Security",
    sections: [
      {
        name: "Security",
        content: Troubleshooting,
        subsections: [],
        hideInMenu: true,
      },
    ],
  },
  {
    name: "Privacy Statement",
    sections: [
      {
        name: "Privacy Statement",
        content: Troubleshooting,
        subsections: [],
        hideInMenu: true,
      },
    ],
  },
];

export default documentation;
