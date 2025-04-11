import React from "react";
import researchImg1 from "../assests/student1.png";
import researchImg2 from "../assests/student1.png";

const Highlights = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-blue-900">
            <span className="text-blue-700">PLACEMENT </span>HIGHLIGHTS
          </h2>
          <p className="mt-4 text-lg text-gray-800 leading-relaxed">
            "Empowering students with industry-relevant skills and expert
            guidance to achieve top placements, excel in their careers, and
            secure positions in leading global companies."
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placement Stats */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-700">30+</h3>
              <p className="text-gray-800">Recognized Top Tier Companies</p>
            </div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-700">3500+</h3>
              <p className="text-gray-800">Placed Students</p>
            </div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-700">47 LPA</h3>
              <p className="text-gray-800">Highest Package</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-700">200+</h3>
              <p className="text-gray-800">Well-trained Faculty</p>
            </div>
          </div>

          {/* Placement Images */}
          <div>
            <div className="mb-6">
              <img
                src={researchImg1}
                alt="Placement"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={researchImg2}
                alt="Placement"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
