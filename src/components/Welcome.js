import React from "react";
import welcomeimg from "../assests/heroimg.avif";

import "../components/css/welcome.css";

const Welcome = () => {
  return (
    <main className="main-container">
      <div className="text-container">
        <h1 data-aos="fade-down" className="heroname">
          Welcome To <br />
          Our Placement Portal
        </h1>
        <a href="#start" className="get-started">
          Get Started
        </a>
      </div>

      <img className="heroimg" src={welcomeimg} alt="Welcome" />
    </main>
  );
};

export default Welcome;
