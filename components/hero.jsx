import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
import headerImage from "../images/header.png";
import MockupContent from "./image";
import mockupFrame from "../images/mockup-frame.png";

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Supercharge your Web Development</h1>
    <p style={{ textAlign: "center", maxWidth: 600 }}>
      Setup redirects, modify headers, switch hosts, insert user scripts and
      much more. Install Requestly on Chrome & Firefox and join our family of
      more than 100,000 developers!
    </p>
    <Button>Install Extension</Button>
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
