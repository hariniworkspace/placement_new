import React from "react";
import accenture from "../assests/accenture.png";
import acie from "../assests/acies.svg";
import amazon from "../assests/amazon.png";
import crio from "../assests/crio.png";
import fleet from "../assests/fleet.png";
import garrett from "../assests/garrett.png";
import hexa from "../assests/hexa.png";
import info from "../assests/info.png";
import madura from "../assests/madura.svg";
import mit from "../assests/mit.png";
import newgen from "../assests/newgen.png";
import pres from "../assests/pres.avif";
import wns from "../assests/wns.png";
import zoho from "../assests/zoho2.png";
import cts from "../assests/cts3.avif";

const brands = [
  amazon,
  crio,
  cts,
  zoho,
  madura,
  info,
  newgen,
  accenture,
  fleet,
  acie,
  pres,
  garrett,
  hexa,
  mit,
  wns,
];

const Brands = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-extrabold text-black-900"
          data-aos="fade-up"
        >
          Our <span className="text-blue-700">Top Recruiters</span>
        </h2>
        <hr
          className="w-20 border-2 border-black mx-auto my-4"
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10 px-5">
          {brands.map((logo, index) => (
            <div
              className="flex justify-center items-center p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={logo}
                alt="Brand Logo"
                className={`max-h-[60px] w-auto object-contain transition-all duration-300 ${
                  logo === garrett ||
                  logo === amazon ||
                  logo === madura ||
                  logo === zoho ||
                  logo === cts ||
                  logo === newgen
                    ? "scale-125"
                    : "scale-90"
                }`}
                style={{ padding: "8px", margin: "0 auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
