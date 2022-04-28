import LearnUsage from "../../components/learnUsage";
import HeadTags from "../../components/HeadTags";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Link from "next/link";

const DownloadPage = () => {
  const md = useMediaQuery({ minWidth: 768 });

  const [mounted, setMounted] = useState(null);
  useEffect(() => {
    setMounted(md);
  }, [md]);

  return (
    <div>
      <HeadTags
        title="Download Requestly | Requestly"
        description="Download Requestly's Browser Extension or the Desktop App"
      />
      <section className={`section-header pb-9 bg-primary text-white pb-lg-12`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-7 col-lg-6 text-center">
              <h1 className="display-3 mb-4 font-weight-normal">
                Download Requestly
              </h1>
              <p className="lead text-muted mb-5">
                Requestly runs on all your favorite devices. Requestly makes
                developing and debugging easier!
              </p>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div
            className="row mb-4 justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
            <div className="d-flex flex-column justify-content-center w-100">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-black text-center">
                    For Browsers
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: mounted ? "row" : "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/for-safari">
                      <a>
                        <div className="d-flex flex-column align-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/safari--v1.png"
                            alt="safari"
                          />
                          <h5 className="text-black">Safari</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/firefox">
                      <a>
                        <div className="d-flex flex-column align-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/firefox--v1.png"
                            alt="firefox"
                          />
                          <h5 className="text-black">Firefox</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/chrome">
                      <a>
                        <div className="d-flex flex-column align-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/chrome--v1.png"
                            alt="chrome"
                          />
                          <h5 className="text-black">Chrome</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/edge">
                      <a>
                        <div className="d-flex flex-column align-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/ms-edge-new.png"
                            alt="ms-edge"
                          />
                          <h5 className="text-black">Edge</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/brave">
                      <a>
                        <div className="d-flex flex-column align-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/brave-web-browser.png"
                            alt="web"
                          />
                          <h5 className="text-black">Brave</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/opera">
                      <a>
                        <div className="d-flex flex-column align-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/opera--v1.png"
                            alt="opera"
                          />
                          <h5 className="text-black">Opera</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/vivaldi">
                      <a>
                        <div className="d-flex flex-column align-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/fluency/240/000000/vivaldi-web-browser.png"
                            alt="vivaldi"
                          />
                          <h5 className="text-black">Vivaldi</h5>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card mt-5">
                <div className="card-body">
                  <h2 className="card-title text-black text-center">
                    For Desktop
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: mounted ? "row" : "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/desktop">
                      <a>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <img
                            className="w-50"
                            // src="https://img.icons8.com/color/240/000000/mac-client.png"
                            src="https://img.icons8.com/color/220/000000/mac-logo.png"
                            alt="safari"
                          />
                          <h5 className="text-black">MacOS</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/for-linux">
                      <a>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/linux.png"
                            alt="linux"
                          />
                          <h5 className="text-black">GNU / Linux</h5>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/windows">
                      <a>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <img
                            className="w-50"
                            src="https://img.icons8.com/color/240/000000/windows8.png"
                            alt="linux"
                          />
                          <h5 className="text-black">Windows</h5>
                        </div>
                      </a>
                    </Link>
                    {/* <Link href="/downloads/windows">
                    </a>
                      <div className="d-flex flex-column align-content-center align-items-center">
                        <img width="100px" height="100px"
                          className="mr-3"
                          width="30%"
                          src="https://img.icons8.com/color/240/000000/windows-11.png"
                          alt="windows"
                        />
                        <h5 className="text-black">Windows</h5>
                      </div>
                      <a/>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pattern bottom"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h4>Learn more about Requestly</h4>
          <a
            href="https://docs.requestly.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button type="button" className="btn btn-secondary btn-lg">
              <span className="btn-inner--icon">
                <i className="fas fa-book"></i>
              </span>
              &nbsp; Documentation
            </button>
          </a>
        </div>
      </section>

      <div className="section pt-0 pb-5">
        <div className="container mt-n9 mt-lg-n12 z-2">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <LearnUsage />
    </div>
  );
};

export default DownloadPage;
