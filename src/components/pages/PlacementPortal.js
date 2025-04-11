import React from "react";

const PlacementPortal = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between fixed top-0 w-full shadow-md z-10">
        <h1 className="text-xl font-bold">Placement Portal</h1>
        <div className="space-x-6">
          <a href="#" className="hover:underline transition">
            Home
          </a>
          <a href="#" className="hover:underline transition">
            Recruiters
          </a>
          <a href="#" className="hover:underline transition">
            Reviews
          </a>
          <a href="#" className="hover:underline transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Spacer for Navbar */}
      <div className="h-16"></div>

      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row items-center justify-center p-10 bg-white">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Welcome to Our Placement Portal
          </h2>
          <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <img
          src="https://via.placeholder.com/250"
          alt="Welcome"
          className="ml-6 w-56 h-56 rounded-lg shadow-lg"
        />
      </section>

      {/* Top Recruiters */}
      <section className="p-8 bg-gray-200 text-center overflow-hidden">
        <h2 className="text-2xl font-bold text-gray-800">Our Top Recruiters</h2>
        <div className="relative flex overflow-hidden mt-6">
          <div className="flex animate-scroll space-x-8 w-max">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <img
                key={index}
                src="https://via.placeholder.com/80"
                alt="Company"
                className="w-20 h-20 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Student Reviews */}
      <section className="p-8 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Our Top Student Reviews
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition"
            >
              <img
                src="https://via.placeholder.com/100"
                alt="Student"
                className="mx-auto w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
              />
              <p className="mt-4 italic text-gray-700">
                "The placement experience was fantastic!"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacementPortal;
