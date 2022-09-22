const ComparisonTable = () => {
  const TableContent = [
    {
      feature: "Platforms",
      charles: "Native Desktop Application",
      requestly: "Browser Extension, Android SDK, Native Desktop Application",
    },
    {
      feature: "Setup",
      charles: "Requires Configuring Proxy & Installing Certificate",
      requestly: "No Setup Required",
    },
    {
      feature: "Map Local & Remote",
      charles: "✅",
      requestly: "✅",
    },
    {
      feature: "Modify Headers",
      charles: "Complicated but possible through the Rewrite feature",
      requestly: "✅",
    },
    {
      feature: "Modify API Response",
      charles:
        "Complicated (Put breakpoints to modify responses in real-time, which often causes timeouts on the client-side and is very cumbersome)",
      requestly: "✅",
      demoLink: "https://www.youtube.com/watch?v=KIPbxUGUYq8",
    },
    {
      feature: "Breakpoints",
      charles: "✅",
      requestly: "❌",
    },
    {
      feature: "Inject Scripts",
      charles: "❌",
      requestly: "✅",
      demoLink: "https://requestly.io/feature/insert-custom-scripts/",
    },
    {
      feature: "Network Throttling",
      charles: "✅",
      requestly: "✅",
      demoLink: "https://requestly.io/feature/delay-request/",
    },
    {
      feature: "Sharing",
      charles: "❌",
      requestly: "✅",
      demoLink: "https://requestly.io/blog/share-rules-with-other-users/",
    },
    {
      feature: "Mock Server",
      charles: "❌",
      requestly: "Host static JS/CSS files and API responses",
      demoLink: "https://requestly.io/feature/mock-server/",
    },
    {
      feature: "Session Recording",
      charles: "❌",
      requestly: "✅",
      demoLink: "https://requestly.io/feature/session-recording/",
    },
    {
      feature: "Andorid Debugging",
      charles: (
        <>
          <strong>Debug builds only</strong> (Requires complicated setup by
          adding a certificate in code, setting up a proxy on your phone, and
          installing an SSL certificate on phone)
        </>
      ),
      requestly: (
        <>
          <strong>Debug builds only</strong> (Requires 3-lines of SDK
          integration). Provides Network Inspector, Analytics Inspector, Logs &
          Stacktraces.
        </>
      ),
    },
    {
      feature: "iOS Debugging",
      charles: "✅",
      requestly:
        " ✅ (Using Desktop App) - Similar experience, team is working on providing native IOS SDK for debug builds.",
    },
    {
      feature: "Customer Support",
      charles: "❌",
      requestly: (
        <>
          <strong> Active Support</strong> (20% of Chrome Store reviews mentions
          active support from the Requestly team)
        </>
      ),
    },
    {
      feature: "Pricing",
      charles: "Limited Free Edition",
      requestly: "Freemium",
    },
  ];
  return (
    <table className="table comparison-table">
      <thead>
        <tr>
          <th scope="col" className="text-center col-heading">
            Feature
          </th>
          <th scope="col" className="text-center col-heading">
            Charles
          </th>
          <th scope="col" className="text-center col-heading">
            Requestly
          </th>
        </tr>
      </thead>
      <tbody>
        {TableContent.map((row, index) => (
          <tr key={index}>
            <th scope="row" className="row-feature-heading">
              {row.feature}
            </th>
            <td className="row-feature">{row.charles}</td>
            <td className="row-feature">
              {row.requestly}{" "}
              {row?.demoLink && (
                <a
                  href={row.demoLink}
                  target="_blank"
                  className="demo-link"
                  rel="noreferrer"
                >
                  (Demo)
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
