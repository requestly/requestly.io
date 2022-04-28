import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { trackInfoPageClickedEvent } from "../utils/Analytics";
const DropDownMenu = ({ menuHeader, linksArray }) => {
  const lg = useMediaQuery({ minWidth: 991 });
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li
      className={
        lg
          ? "nav-item dropdown  mr-3"
          : "nav-item dropdown nav-link btn btn-white btn-md btn-docs mr-3 mt-2 border-primary py-0"
      }
      style={{
        padding: lg ? "0px" : "10px 0",
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={handleClick}
    >
      <a
        href="https://requestly.io/"
        onClick={(e) => {
          e.preventDefault();
          trackInfoPageClickedEvent(menuHeader, "navbar");
          return false;
        }}
        className={`nav-link px-3 ${lg ? "text-white" : ""}`}
        style={{ padding: lg ? "8px 0" : "10px 0" }}
        data-toggle="dropdown"
        role="button"
      >
        <span className="nav-link-inner-text ">{menuHeader}</span>
        <i className="fas fa-angle-down nav-link-arrow ml-2"></i>
      </a>
      <ul className={`dropdown-menu py-2 ${isOpen ? "show" : ""}`}>
        {linksArray.map((linkItem, index) => (
          <li key={index}>
            <Link href={linkItem.link}>
              <a
                className="dropdown-item text-black"
                style={{
                  overflowWrap: "break-word",
                }}
              >
                {linkItem.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropDownMenu;
