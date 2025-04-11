import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Brands from "./components/Brands";
import Highlights from "./components/Highlights";
import Student from "./components/Student";
import ProcessSteps from "./components/ProcessSteps";
import About from "./components/About";
import Contact from "./components/Contact";
import AOS from "aos";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import Analytics from "./components/Analytics";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page (Includes Welcome + Other Sections) */}
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <Brands />
              <Highlights />
              <ProcessSteps />
              <Student />
            </>
          }
        />

        {/* About Page */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
