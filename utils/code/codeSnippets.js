export default {
  selenium: `
// npm install selenium-webdriver @requestly/selenium

require("chromedriver"); // replace this with your browser driver
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {
  getRequestlyExtension,
  importRequestlySharedList,
} = require("@requestly/selenium");

const sharedListUrl = "YOUR SHARED LIST URL";

async function runSeleniumWithRequestly() {
  const options = new chrome.Options().addExtensions(
    getRequestlyExtension("chrome") // This installs requestly chrome extension in your testing instance
  );

  const driver = new Builder()
    .forBrowser("chrome")  // replace this with your browser
    .setChromeOptions(options)
    .build();

  await importRequestlySharedList(driver, sharedListUrl); // Here we import the shared list created from our app
  driver.get("http://www.google.com/"); // replace this with your test destination
}

runSeleniumWithRequestly();
`,
};
