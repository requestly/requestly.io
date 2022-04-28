import React, { useState } from "react";
import SampleData from "./sample-data/impact-ds-guide";

const UserGuide = ({ guideData = SampleData }) => {
  const [activeSection, setActiveSection] = useState(2);
  const [activeSubSection, setActiveSubSection] = useState(2);

  return (
    <>
      <section className="section section-lg pb-5 pt-5 bg-soft">
        <div className="container my-4">
          <div className="row flex-xl-nowrap">
            <div className="col-lg-2 bd-sidebar">
              <nav
                className="collapse bd-links"
                id="bd-docs-nav"
                aria-label="Main navigation"
              >
                <ul className="list-unstyled">
                  {guideData.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className={`bd-sidenav-group my-1 ${
                          activeSection === index ? "active" : " "
                        } js-sidenav-group has-children`}
                      >
                        <span
                          className="d-inline-flex align-items-center bd-sidenav-group-link"
                          style={{ cursor: "pointer" }}
                          aria-current={activeSection === index ? "true" : null}
                          onClick={() => {
                            setActiveSection(index);
                            setActiveSubSection(0);
                          }}
                        >
                          {data.name}
                        </span>
                        <ul className="nav bd-sidenav flex-column mb-2">
                          {data.sections.map((subSection, subIndex) => {
                            if (subSection.hideInMenu) return;
                            return (
                              <li
                                key={subIndex}
                                className={
                                  activeSection === index &&
                                  activeSubSection === subIndex
                                    ? "active bd-sidenav-active"
                                    : null
                                }
                              >
                                <a
                                  href="#content"
                                  aria-current={
                                    activeSection === index &&
                                    activeSubSection === subIndex
                                      ? "page"
                                      : null
                                  }
                                  className="d-flex justify-content-between"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveSubSection(subIndex);
                                    setActiveSection(index);
                                    return false;
                                  }}
                                >
                                  {subSection.name}
                                  {subSection.badge ? (
                                    <span className="badge badge-primary float-right ml-2">
                                      {subSection.badge}
                                    </span>
                                  ) : null}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <main className="col-lg-7 py-md-3 px-lg-5 bd-content" role="main">
              <h1 className="bd-title" id="content">
                {guideData?.[activeSection]?.name ===
                guideData?.[activeSection]?.sections?.[activeSubSection]
                  ?.name ? (
                  <>
                    {
                      guideData?.[activeSection]?.sections?.[activeSubSection]
                        ?.name
                    }
                  </>
                ) : (
                  <>
                    {guideData?.[activeSection]?.name}:{" "}
                    {
                      guideData?.[activeSection]?.sections?.[activeSubSection]
                        ?.name
                    }
                  </>
                )}
              </h1>
              <p className="bd-lead">
                {
                  guideData?.[activeSection]?.sections?.[activeSubSection]
                    ?.subheading
                }
              </p>

              <hr className="mb-4"></hr>

              {guideData?.[activeSection]?.sections?.[activeSubSection]?.content
                ? guideData[activeSection].sections[activeSubSection].content()
                : null}

              <div className="d-flex justify-content-between mt-3">
                {guideData[activeSection].sections[activeSubSection - 1] ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSubSection(activeSubSection - 1);
                      return false;
                    }}
                  >
                    <i className="fas fa-arrow-left mr-2"></i>{" "}
                    {guideData[activeSection].name}:{" "}
                    {
                      guideData[activeSection].sections[activeSubSection - 1]
                        .name
                    }
                  </a>
                ) : guideData[activeSection - 1] &&
                  guideData[activeSection - 1].sections[0] ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(activeSection - 1);
                      setActiveSubSection(0);
                      return false;
                    }}
                  >
                    <i className="fas fa-arrow-left mr-2"></i>{" "}
                    {guideData[activeSection - 1].name}
                  </a>
                ) : (
                  <a></a>
                )}

                {guideData[activeSection].sections[activeSubSection + 1] ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSubSection(activeSection + 1);
                      return false;
                    }}
                  >
                    {guideData[activeSection].name}:{" "}
                    {
                      guideData[activeSection].sections[activeSubSection + 1]
                        .name
                    }{" "}
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                ) : guideData[activeSection + 1] &&
                  guideData[activeSection + 1].sections[0] ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(activeSection + 1);
                      setActiveSubSection(0);
                      return false;
                    }}
                  >
                    {guideData[activeSection + 1].name}{" "}
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </main>

            <div className="col-lg-3 bd-sidebar">
              <nav
                className="bd-toc bd-links mb-5 text-muted list-style-none"
                aria-label="Secondary navigation"
              >
                <nav id="TableOfContents">
                  <ul>
                    {guideData?.[activeSection]?.sections?.[
                      activeSubSection
                    ]?.subsections.map((section, sectionIndex) => {
                      if (section.hideInMenu) return;
                      return (
                        <li key={sectionIndex}>
                          <a href={section.link}>{section.name}</a>
                          {section.sub ? (
                            <ul>
                              {section.sub.map(
                                (childSection, childSectionIndex) => {
                                  if (childSection.hideInMenu) return;
                                  return (
                                    <li key={childSectionIndex}>
                                      <a href={childSection.link}>
                                        {childSection.name}
                                      </a>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          ) : null}
                          <ul></ul>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserGuide;
