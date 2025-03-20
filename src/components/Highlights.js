import React from "react";
import researchImg1 from "../assests/student1.png"
import researchImg2 from "../assests/student1.png"

const Highlights = () => {
  return (
    <div className="bg-gray-200 py-12 px-6 mb-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold">
            <span className="text-orange-600">PLACEMENT </span>
            HIGHLIGHTS
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          "Empowering students with industry-relevant skills and expert guidance to achieve top placements, excel in their careers, and secure positions in leading global companies."
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Stats */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-green-700">30+</h3>
              <p className="text-gray-700">Recognized Top tier Companies</p>
            </div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-green-700">3500+</h3>
              <p className="text-gray-700">Placed Students</p>
            </div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-green-700">47LPA</h3>
              <p className="text-gray-700">Highest Package </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">200+</h3>
              <p className="text-gray-700">Well trained faculty</p>
            </div>
          </div>

          {/* Research Images */}
          <div>
            <div className="mb-6">
              <img
                src={researchImg1}
                alt="Research 1"
                className="rounded-lg shadow-lg"
              />
            
            </div>
            <div>
              <img
                src={researchImg2}
                alt="Research 2"
                className="rounded-lg shadow-lg"
              />
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
