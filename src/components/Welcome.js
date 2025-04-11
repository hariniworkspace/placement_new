import React from "react";
import welcomeimg from "../assests/users.png";
import "../components/css/welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <main className="flex  flex-col md:flex-row items-center justify-between min-h-screen px-10 md:px-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="ml-[3%] text-center md:text-left max-w-2xl">
        <h1
          data-aos="fade-down"
          className="text-6xl font-extrabold text-blue-900 leading-tight mt-[20%] "
        >
          Welcome To <br /> 
          <span className="text-blue-700 "> Our Placement <br /> Portal</span> 
        </h1>

        <a
          href="#start"
          className="text-6xl mt-8 ml-2 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold text-base border border-blue-700 rounded-[15px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-800 hover:text-white relative overflow-hidden group"
        >
           <Link to="/analytics">Get Started</Link>
          <span className="text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>

      <img
        className="w-full md:w-[60%] lg:w-[70%] xl:w-[75%] max-w-2xl h-auto object-contain ml-[10%] h-[500px] mt-[5%]"
        src={welcomeimg}
        alt="Welcome"
        data-aos="fade-left"
        data-aos-delay="200"
      />
    </main>
  );
};

export default Welcome;
