import React, { useState } from "react";
import contactImage from "../assests/bg.jpg"; // Replace with your actual image path
import collegeCampus from "../assests/vcet2.jpg"; // Replace with a relevant image
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Chatbot from "../components/Chatbot.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrbppnzd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Try again.");
    }
  };

  return (
    <main className="bg-gradient-to-br from-blue-100 to-white text-gray-900 min-h-screen">
      {/* 🔹 Header Section */}
      <section
        className="relative text-center py-32 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactImage})`, // Background Image
        }}
      >
        {/* Overlay Effect for Readability */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

        {/* Content on Top of Background */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg">
            We’re here to assist you! Reach out for any inquiries.
          </p>
        </div>
      </section>

      {/* 🔹 Contact Details Section */}
      <section className="py-16 px-6 md:px-20 bg-blue-50 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-800">
            Our Contact Details
          </h2>
          <ul className="mt-6 text-gray-700 space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-3" /> Madurai to
              Rameshwaram Highway, Viraganoor, Madurai-625 009
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-600 mr-3" /> +91-9994994991
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-3" />
              principal@vcet.ac.in.
            </li>
          </ul>

          {/* 🔹 Social Media Links */}
          <div className="mt-6 flex space-x-4 text-blue-700 text-2xl">
            <a href="https://vcet.ac.in/" className="hover:text-blue-900">
              <FaGlobe />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDRKYryoi3Piv2CfPQTFgsA"
              className="hover:text-blue-900"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/school/velammal-college-of-engineering-&-technology-madurai/?originalSubdomain=in"
              className="hover:text-blue-900"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* 🔹 Campus Image */}
        <img
          src={collegeCampus}
          alt="Campus"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mt-6 md:mt-0 ml-[10%]"
        />
      </section>

      {/* 🔹 Google Map Embed */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-800">
          Find Us on Google Maps
        </h2>
        <div className="mt-6 w-full max-w-4xl mx-auto">
          <iframe
            className="w-full h-72 md:h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.836527641038!2d78.17121717581384!3d9.893880390126871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c542e773b4bf%3A0x18ff131aca07d79b!2sVELAMMAL%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1711026789012!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* 🔹 Contact Form */}
        <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-gray-700">{status}</p>
            )}
          </form>
        </div>

        {/* 🔹 FAQ Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-800 text-center md:text-left">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                question: "What is the admission process?",
                answer:
                  "The admission process involves filling out an online form, submitting required documents, and attending a counseling session.",
              },
              {
                question: "What courses are offered?",
                answer:
                  "We offer various undergraduate and postgraduate programs in engineering, management, and science.",
              },
              {
                question: "How can I contact the placement office?",
                answer:
                  "You can reach the placement office via email at placements@college.edu or call +91 98765 43210.",
              },
              {
                question: "Are scholarships available?",
                answer:
                  "Yes, we provide merit-based and need-based scholarships. Please visit our scholarships page for more details.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-blue-50 p-4 rounded-lg shadow-md"
              >
                <summary className="font-semibold text-blue-800 cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Chatbot />
    </main>
  );
};

export default Contact;
