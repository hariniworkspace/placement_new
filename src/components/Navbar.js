import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-peach-600 shadow-md px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50 py-5">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col leading-tight">
          <a
            href="/"
            className="text-2xl font-extrabold text-blue-900 tracking-wide"
          >
            VCET <span className="text-blue-700">Placement Portal</span>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg font-semibold text-gray-800">
        <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
          <Link to="/analytics">Analytics</Link>
        </li>
        <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
