import React, { useState } from "react";
import "./home.css";
import { stack_data } from "../../assets/Data";
import Me from "../../assets/images/side.jpg";

const Home = () => {
  const [stacks] = useState(stack_data);
  // ! SLIDING CAROUSEL DONE!
  // TODO: Next is the projects slider
  return (
    <section className="home-container" id="top">
      <div className="home-content">
        <div className="img-wrapper">
          <div className="img-container">
            <img src={Me} alt="" />
          </div>
          <div className="slider">
            <div className="list">
              {stacks &&
                stacks.map((img, index) => {
                  return (
                    <div
                      key={index}
                      className="item"
                      style={{ "--position": (index + 1).toString() }}
                    >
                      <img src={img} alt="" />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="home-info">
          <h1 className="highlighted-text-shadow">
            Hi, I'm Francis Al-j, <br />I am a Fullstack Web Developer
            specialized in MERN Stack Development
          </h1>

          <button className="ready">
            <div className="dot"></div>Looking for an Entry-Level Web Developer
            Position
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
