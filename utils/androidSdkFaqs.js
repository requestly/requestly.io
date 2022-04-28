export const Questions = [
  {
    question: <>Can we use Requestly only in debug builds?</>,
    answer: (
      <>
        Our SDK integration is quite flexible and can be set by a feature flag.
        You can integrate Requestly debugger only in debug builds and It will
        never come up in release builds.{" "}
        <a
          href="https://docs.requestly.io/mobile-interceptor/tutorial"
          target="_blank"
          rel="noreferrer"
        >
          Here’s how to do it.
        </a>
      </>
    ),
  },
  {
    question: (
      <>
        How can I enable Requestly in release builds for a single device or
        within a team only?
      </>
    ),
    answer: (
      <>
        Yes, you can select the list of users and devices in your Requestly
        dashboard.
      </>
    ),
  },
  {
    question: <>We already use Chucker. Can we replace it with Requestly?</>,
    answer: <>Requestly has been build over Chucker. It can be replaced.</>,
  },
  {
    question: <>How is Requestly different than Charles?</>,
    answer: (
      <>
        Charles can only be used by an individual developer & requires complex
        setup of proxy & certificates. Requestly SDK can be integrated with just
        3 lines of code and users can collaborate on testing.{" "}
        <a href="https://requestly.io/blog/better-alternative-to-charles/">
          Read More
        </a>
      </>
    ),
  },
  {
    question: <>Can I mock an API response using Requestly?</>,
    answer: (
      <>
        With Modify Response rule, you`ll now be able to mock the response of an
        API. Similar to other Rules, this Rule will also allow you to specify
        advanced filters including the regular expressions.
      </>
    ),
  },
  {
    question: <>This is awesome but I need help with Integration.</>,
    answer: (
      <>
        You can contact us at contact@requestly.io we have a dedicated Support
        Team to help you out with the integration.
      </>
    ),
  },
];
