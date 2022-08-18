export const Questions = [
  {
    question: <>How can I modify Request/Response Headers</>,
    answer: (
      <>
        After installing the extension, Go to{" "}
        <a href="https://app.requestly.io/rules">app.requestly.io/rules</a>.
        {`Then create rule and select "Modify Headers". After
        that give the rule name, and from here you can add, override and remove
        headers by providing a Header name and value for that header. You can
        mention a certain URL on which you want this rule to work or you can
        leave it empty to work on all URLs.`}
      </>
    ),
  },
  {
    question: <>Can I add/modify/remove multiple Headers at once?</>,
    answer: (
      <>
        Yes, you can use the Add Condition feature which which allows you to add
        more conditions to the rule.
      </>
    ),
  },
  {
    question: <>Will the rule I create work on all sites?</>,
    answer: (
      <>
        Yes, at the time of rule creation the rule is activated and is applied
        on all websites. You can deactivate it at any time. You can also mention
        the specific URL on which the rule is to be applied.
      </>
    ),
  },
  {
    question: <>Can I specify only URLs on which the rule will be applied?</>,
    answer: (
      <>
        You can also specify the Host or Path on the which the rule has to be
        applied. You can also specify whether the URL/Host/Path contains, equals
        or matches the string entered by you
      </>
    ),
  },
  {
    question: <>Can I edit an existing header?</>,
    answer: (
      <>
        Yes, existing headers can be overriden using the override headers option.
      </>
    ),
  },
];
