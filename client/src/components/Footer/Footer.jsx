import React from "react";
import "./footer.css";
import Icons from "../Icons/Icons";

const Footer = () => {
  return (
    <footer>
      <div className="icon-flex">
        <Icons />
        <p>Francis Al-j © 2025</p>
      </div>

      <a href="#top">
        <button className="top-btn">
          <div className="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <div className="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </a>
    </footer>
  );
};

export default Footer;
