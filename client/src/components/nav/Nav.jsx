import React, { useEffect, useState } from "react";
import "./nav.css";
import Skills from "../Skills/Skills";
import Menu from "../../assets/menu.svg";
import Mobile from "./Mobile";

const Nav = () => {
  const [scrollPage, setScrollPage] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollPage(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrollPage >= 280 ? "last-move-logo" : ""}>
      <nav>
        <div
          className={`logo-container ${
            scrollPage >= 90 && scrollPage < 140
              ? "first-move-logo"
              : scrollPage >= 140 && scrollPage < 200
              ? "second-move-logo"
              : scrollPage >= 200 && scrollPage < 250
              ? "third-move-logo"
              : scrollPage >= 250 && scrollPage < 280
              ? "fourth-move-logo"
              : scrollPage >= 280
              ? "last-move-logo"
              : ""
          }`}
        >
          <h1 className="glow">Francis Al-j</h1>
          <Skills />
        </div>

        <div
          className={`nav-btns ${
            scrollPage >= 60 && scrollPage < 140
              ? "first-move"
              : scrollPage >= 140 && scrollPage < 200
              ? "second-move"
              : scrollPage >= 200 && scrollPage < 250
              ? "third-move"
              : scrollPage >= 250 && scrollPage < 280
              ? "fourth-move"
              : scrollPage >= 280
              ? "last-move"
              : ""
          }`}
        >
          <a href="#project">
            <button className="nav-btn">Projects</button>
          </a>
          <a href="#contact">
            <button className="nav-btn">Resume</button>
          </a>

          <a href="#contact">
            <button className="nav-btn">Contact</button>
          </a>
        </div>

        <img
          src={Menu}
          alt=""
          className={`menu-btn ${
            scrollPage >= 60 && scrollPage < 140
              ? "first-move"
              : scrollPage >= 140 && scrollPage < 200
              ? "second-move"
              : scrollPage >= 200 && scrollPage < 250
              ? "third-move"
              : scrollPage >= 250 && scrollPage < 280
              ? "fourth-move"
              : scrollPage >= 280
              ? "last-move"
              : ""
          }`}
          onClick={() => setShow(true)}
        />
        <Mobile show={show} setShow={setShow} scrollPage={scrollPage} />
      </nav>
    </header>
  );
};

export default Nav;
