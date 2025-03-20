import React from "react";
import amazon from "../assests/amazon.png";
import crio from "../assests/crio.png";
import cts from "../assests/cts2.png";
import zoho from "../assests/zoho2.png";
import madura from "../assests/madura.svg";
import infosys from "../assests/info.png";
import accenture from "../assests/accenture.png";
import fleet from "../assests/fleet.png";
import newgen from "../assests/newgen.png";
import "../components/css/Brand.css";

const brands = [
  amazon,
  crio,
  cts,
  zoho,
  madura,
  infosys,
  newgen,
  accenture,
  fleet,
];

const Brands = () => {
  return (
    <div className="brands-container">
      <h2 className="brands-title" data-aos="fade-up">
        Our <span>Top Recruiters</span>
      </h2>
      <hr className="divider" data-aos="fade-up" data-aos-delay="200" />

      <div className="brands-grid">
        {brands.map((logo, index) => (
          <div
            className="brand-item"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Delays each logo slightly
          >
            <img src={logo} alt="Brand Logo" className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
