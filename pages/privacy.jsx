import HeadTags from "../components/HeadTags";

export default function Privacy() {
  return (
    <>
      <HeadTags title="Privacy Policy | Requestly" />
      <section className="section-header bg-primary text-white pb-9 pb-lg-12 mb-4 mb-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1 className="display-2 mb-3">Privacy Policy</h1>
              <p className="mb-0">Updated on 21st of March, 2022</p>
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
                <h2 className="mt-5 mb-4">
                  <b>Quick Links</b>
                </h2>

                <div className="row mb-5">
                  <div className="col-sm text-center font-weight-bold">
                    <a
                      href="https://requestly.gdprpage.com/subject"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Request deletion of your data
                    </a>
                  </div>
                  <div className="col-sm text-center font-weight-bold">
                    <a
                      href="https://requestly.gdprpage.com/subject"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Request export of your data
                    </a>
                  </div>
                  <div className="col-sm text-center font-weight-bold">
                    <a
                      href="https://requestly.gdprpage.com/dpa"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Sign DPA
                    </a>
                  </div>
                </div>

                <p>
                  This Privacy Policy describes Requestly’s information
                  practices for its website and browser extension. We take your
                  privacy seriously and want you to understand exactly what
                  information we collect, how we use that information, which
                  pieces of information you can request us to remove, and how to
                  contact us about this policy. Please read this policy
                  carefully. Your continued use of the Requestly extension
                  and/or the Requestly website constitutes your agreement to
                  this policy. When it comes to your personal information, most
                  of this policy applies to users who choose to use features
                  backed by Google login functionality – ie Share your rules as
                  public Urls or Requestly file library. Further, Requestly uses
                  Crisp for chat and CRM support.
                </p>

                <h2 className="mt-5 mb-3">
                  <b>Information Requestly collects</b>
                </h2>
                <i className="mt-4 mb-4">Personal information</i>
                <p>
                  The Requestly browser extension stores your name and email
                  address on secured Firebase servers only when you authenticate
                  with Google. Your public rules are also saved securely on
                  Firebase servers. Non-public rules are saved in Chrome Storage
                  and are saved securely on Firebase servers only when syncing
                  or backup is enabled. However Requestly website does not
                  collect any sort of personal information.
                </p>
                <i className="mt-4 mb-4">Anonymous information</i>
                <p>
                  The Requestly extension captures anonymous product usage
                  information, including but not limited to: current version of
                  the extension, creation, modification and deletion of rule. We
                  just capture an event like “Redirect Rule created” but we do
                  not capture what is the definition of rule. Please note all
                  such data is captures anonymously and no user level data is
                  gathered.
                </p>
                <i className="mt-4 mb-4">Analytics</i>
                <p>
                  Requestly uses Google analytics services to aggregate
                  information about traffic patterns and how our website and
                  extension are used. We limit the data sent to these services,
                  and only do so to improve our extension and website. Requestly
                  currently uses Google Analytics (privacy policy here). Along
                  with Google Analytics, Requestly uses other tools such as
                  hotjar, customerly as third party solutions to get insights
                  about product usage and improve user experience on the page.
                </p>
                <h2 className="mt-5 mb-3">
                  <b>Data security</b>
                </h2>
                <p>
                  As mentioned earlier, Shared rules are stored on Firebase
                  secured server (privacy policy here. All your rules live in
                  Chrome Sync Storage on your machine and Requestly does not
                  (and can not) play any role in safeguarding your rules. All
                  usage information that Requestly collects is stored on Google
                  servers as collected by Google Analytics. That said, no
                  database or server is 100% secure and we cannot guarantee the
                  absolute security of your data in our system or while being
                  transmitted over the Internet. Our best effort is given, but
                  you use Requestly’s website and browser extension at your own
                  risk.
                </p>
                <h2 className="mt-5 mb-3">
                  <b>Changes and updates to this policy</b>
                </h2>
                <p>
                  Requestly reserves the right to change this policy for any
                  reason, and may make small, inconsequential changes to this
                  policy with or without notice. Each time this policy is
                  changed we will revise the “Effective Date” at the top of this
                  page.
                </p>
                <h2 className="mt-5 mb-3">
                  <b>Contact</b>
                </h2>
                <p>
                  You can always contact us with questions or feedback about our
                  privacy policy on email contact@requestly.io in case you wish
                  to have your personal information deleted from our system,
                  please drop us an email and we will take appropriate steps to
                  do so.
                </p>
                <div className="row justify-content-center my-4 w-100">
                  <a
                    href="https://requestly.gdprpage.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-primary" type="button">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
