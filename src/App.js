import React , { useEffect }from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Brands from "./components/Brands";
import AOS from "aos";
import "aos/dist/aos.css";
import Highlights from "./components/Highlights";
import Student from "./components/Student";
import ProcessSteps from "./components/ProcessSteps";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      offset: 100, // When to trigger animation (100px before entering viewport)
      easing: "ease-in-out",
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Brands />
      <Highlights />
      <ProcessSteps />
      <Student />
      

    </main>
  );
};

export default App;