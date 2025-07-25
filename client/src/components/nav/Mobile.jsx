import React from "react";
import "./nav.css";

const Mobile = ({ show, setShow }) => {
  return (
    <ul className={show ? `menu-show` : `menu-container`}>
      <h1 onClick={() => setShow(false)}>x</h1>
      <a onClick={() => setShow(false)} href="#project">
        <li className="menu-item">Projects</li>
      </a>

      <a onClick={() => setShow(false)} href="#contact">
        <li className="menu-item">Resume</li>
      </a>

      <a onClick={() => setShow(false)} href="#contact">
        <li className="menu-item">Contact</li>
      </a>
    </ul>
  );
};

export default Mobile;
