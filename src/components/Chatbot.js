import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";


const jaroWinkler = (s1, s2) => {
  const m = [...s1].filter(c => s2.includes(c)).length;
  if (m === 0) return 0;
  
  const t = [...s1].filter((c, i) => s2.includes(c) && c !== s2[i]).length / 2;
  const l = Math.min(4, [...s1].findIndex((c, i) => c !== s2[i]));
  const p = 0.1;

  const jaro = (m / s1.length + m / s2.length + (m - t) / m) / 3;
  return jaro + l * p * (1 - jaro);
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you regarding placements?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const placementResponses = {
    "eligibility": "To be eligible for placements, students must have a minimum of 60% in all semesters with no active backlogs.",
    "companies": "Top recruiters include TCS, Infosys, Wipro, Cognizant, and many more.",
    "package": "The average package is around 6-8 LPA, while top students secure offers up to 20 LPA.",
    "internships": "Our college offers internships in collaboration with top tech companies and startups.",
    "training": "We provide placement training including aptitude tests, coding sessions, and mock interviews.",
    "placement percentage": "Our placement percentage is around 95% with multiple offers for top students.",
    "contact": "For placement-related queries, you can contact the placement officer at placements@college.edu.",
    "default": "I’m sorry, I don’t have an answer for that. Please contact the placement office for further details.",
  };

  const getBestMatch = (input) => {
    let bestMatch = "default";
    let highestScore = 0.7; // Minimum similarity threshold

    Object.keys(placementResponses).forEach((key) => {
      const score = jaroWinkler(input, key);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = key;
      }
    });

    return placementResponses[bestMatch];
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const lowerInput = input.toLowerCase().replace(/[^\w\s]/gi, ""); // Remove special characters
    const botResponse = getBestMatch(lowerInput);

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: botResponse }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6">
      {/* Floating Button to Open Chatbot */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        >
          <FaRobot size={24} />
        </button>
      )}

      {/* Chatbot Container */}
      {isOpen && (
        <div ref={chatRef} className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
          {/* Header */}
          <div className="bg-blue-600 text-white flex items-center justify-between p-3">
            <div className="flex items-center">
              <FaRobot className="mr-2" />
              <span className="font-bold">Placement Chatbot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FaTimes />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 rounded-lg max-w-[80%] ${msg.sender === "bot" ? "bg-blue-100 text-blue-900" : "bg-gray-200 text-gray-800 ml-auto"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Ask about placements..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="ml-2 bg-blue-600 text-white p-2 rounded-lg" onClick={handleSend}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
