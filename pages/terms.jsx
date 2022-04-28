import HeadTags from "../components/HeadTags";

export default function Terms() {
  return (
    <>
      <HeadTags title="Terms and Conditions | Requestly" />
      <section className="section-header bg-primary text-white pb-9 pb-lg-12 mb-4 mb-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1 className="display-2 mb-3">Terms & Conditions</h1>
              <p className="mb-0">Updated 1st of April, 2019</p>
            </div>
          </div>
        </div>
        <div className="pattern bottom"></div>
      </section>
      <section className="section section-lg pt-0">
        <div className="container mt-n7 mt-lg-n12 z-2">
          <div className="row justify-content-center">
            <div className="col">
              <div className="card shadow-soft border-light p-4 p-md-5">
                <p>
                  Hello, and welcome to the Requestly Terms and Conditions of
                  Use (“Terms”). The Terms you see below are important because
                  they:
                </p>
                <p>
                  <li>
                    Explain the rights you give to us when you use Requestly
                  </li>
                  <li>
                    Describe the rules everyone needs to follow when using
                    Requestly
                  </li>
                  <li>
                    Explain the rights you get when you buy a
                    license/subscription plans
                  </li>
                </p>
                <p>
                  Please read these Terms, our Privacy Policy and any other
                  terms referenced in this document carefully.
                </p>

                <h2 className="mt-5 mb-3">
                  <b>Usage</b>
                </h2>
                <p>
                  <li>
                    As we have explained in our privacy policy, we store the
                    rules by default in Chrome Sync Storage which is unencrypted
                    data store local to your browser. You are responsible to
                    secure your data stored in your browser. Requestly won’t be
                    responsible for data loss/breach due to access by the third
                    party to your browser, sync storage, machine.
                  </li>
                </p>
                <p>
                  <li>
                    When you use certain features like SharedList feature which
                    generates URL for a list of rules, those rules are uploaded
                    to Requestly servers and securely hosted on Firebase. Anyone
                    can access the rules if they get access to the URL because
                    the URL is public. Please consider deleting the sharedList
                    when you have shared with your friends/colleagues etc if
                    there is any sensitive information.
                  </li>
                </p>
                <p>
                  <li>
                    You should install Requestly only from official resources
                    (Chrome Store and www.requestly.io). Any other means of
                    installation is considered invalid. You are not allowed to
                    patch the code and redistribute.
                  </li>
                </p>
                <p>
                  <li>
                    As a user, when you signup to Requestly we get certain
                    information about you like your name, profile picture from
                    Gravatar or Google Service, company name from your email
                    domain. We neither publish your private information (PII
                    Information) anywhere on our site/app nor sell your data to
                    any third party company. We may choose to publish your
                    company name on our home page as Requestly is being used by
                    your company.
                  </li>
                </p>
                <h2 className="mt-5 mb-3">
                  <b>Paid License/Subscription Plan Agreements</b>
                </h2>
                <p>
                  Requestly offers license or recurring subscription plans to
                  get access to premium features and enhancing feature limits.
                  Here is a list of agreements when you buy a paid
                  license/subscription plan.
                </p>
                <h3 className="mt-5 mb-3 h4">Billing/Pricing</h3>
                <p>
                  <li>
                    We may change the price for the Paid Subscriptions,
                    including recurring subscription fees, the Pre-Paid Period
                    (for periods not yet paid), or Codes, from time to time and
                    will communicate any price changes to you in advance and, if
                    applicable, how to accept those changes. Price changes will
                    take effect at the start of the next subscription period
                    following the date of the price change. Subject to
                    applicable law, you accept the new price by continuing to
                    access the Requestly after the price change takes effect. If
                    you do not agree with a price change, you have the right to
                    reject the change by unsubscribing from the Paid
                    Subscription prior to the price change going into effect.
                  </li>
                </p>
                <p>
                  <li>
                    If you bought the license directly or by using code
                    (one-time purchase) which comes with some time validity.
                    Once the license is expired, you have to renew it manually
                    or use the recurring subscription plan to get automatic
                    renewal.
                  </li>
                </p>
                <h3 className="mt-5 mb-3 h4">Cancellations/Refunds</h3>
                <p>
                  <li>
                    Requestly uses Web Extension APIs in both Chrome & Firefox
                    which may change as per Chrome Developers agreement. If
                    there is any major API change it could break Requestly
                    functionality temporarily or permanently, in such scenario
                    no refund will be processed.
                  </li>
                </p>
                <p>
                  <li>
                    We offer a 14-day guarantee period in which you will be able
                    to ask Requestly support (contact@requestly.io) to revoke
                    your license/subscription and you will get full refund for
                    the amount you have paid. This can be availed only once in
                    the lifetime.
                  </li>
                </p>
                <p>
                  <li>
                    If you have purchased a license and are not satisfied with
                    the product, it could not be cancelled and we won’t be able
                    to process refund for the same.
                  </li>
                </p>
                <p>
                  <li>
                    If you are have purchased recurring subscription, and are
                    not satisfied with the usage, you can cancel your
                    subscription from Requestly UI and you won’t be charged from
                    the next month onwards. You won’t get refund for the month
                    for which subscription has already started and you will be
                    able to use Requestly for that month.
                  </li>
                </p>
                <h2 className="mt-5 mb-3">
                  <b>Changes to the Agreements</b>
                </h2>
                <p>
                  Occasionally we may make changes to the Agreements for valid
                  reasons, such as improving the existing functions or features
                  or adding new functions or features to the Service,
                  implementing advancements in science and technology, and
                  reasonable technical adjustments to the Service, ensuring the
                  operability or the security of the Service, and for legal or
                  regulatory reasons. When we make material changes to the
                  Agreements, we’ll provide you with notice as appropriate under
                  the circumstances, e.g., by displaying a prominent notice or
                  showing notification in the app or seeking your agreement
                  within the Service or by sending you an email.
                </p>
                <p>
                  Feel free to reach out to contact@requestly.io for any issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
