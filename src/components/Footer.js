import React from "react";
import { FaYoutube, FaLinkedinIn, FaGlobe } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* 🔹 College Logo & Info */}
        <div>
     
          <h2 className="text-2xl font-bold mt-3">Velammal College of Engineering and Technology</h2>
          <p className="text-gray-300 mt-2">
            Empowering students through excellence in education and career placements.
          </p>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white transition">About</a></li>
            <li><a href="/analytics" className="text-gray-300 hover:text-white transition">Placement  Analytics</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* 🔹 Contact Information */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-gray-300 mt-4">📍 Madurai to
          Rameshwaram Highway, Viraganoor, Madurai-625 009</p>
          <p className="text-gray-300">📧 principal@vcet.ac.in.</p>
          <p className="text-gray-300">📞 +91-9994994991</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://www.youtube.com/channel/UCDRKYryoi3Piv2CfPQTFgsA" className="hover:text-gray-400"> <FaYoutube /></a>
            <a href="https://www.linkedin.com/school/velammal-college-of-engineering-&-technology-madurai/?originalSubdomain=in" className="hover:text-gray-400"><FaLinkedinIn /></a>
            <a href="https://vcet.ac.in/" className="hover:text-gray-400"><FaGlobe /></a>
          </div>
        </div>
      </div>

      {/* 🔹 Copyright Notice */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Velammal College of Engineering and Technology. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
