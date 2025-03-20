import React from "react";

const steps = [
  {
    id: 1,
    title: "Choosing Domain",
    desc: "Students of our college are given chances to take their own domain and provided with best faculty support to help them out.",
  },
  {
    id: 2,
    title: "Projects Preparation",
    desc: "We give more importance to project and skill based learning than books based learnings thus students have their own projects before pre final year make their journey easy .",
  },
  { id: 3, title: "Aptitude", desc: "students train on aptitude and there is must aptitude hour per week to improve their skills and we conduct aptitude tests regularly. " },
  
  { id: 4, title: "Communication Skills", desc: "Our students also have the best communication skills as they are trained for confindent speaking too " },
  {
    id: 5,
    title: "Appearing for Placement",
    desc: "A complete full guidance is ensured and done for all students",
  },
  
];

const VerticalProcess = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-extrabold uppercase tracking-wide mb-16 text- text-center">
        Placement Process
      </h2>

      <div className="relative w-2/3">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-red-500"></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center w-full mb-16 relative ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[45%] p-8 rounded-lg shadow-xl border-l-8 border-orange-500 ${
                index % 2 === 0 ? "text-right" : "text-left"
              } 
              ${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold text-orange-600">
                {step.title}
              </h3>
              <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-3xl font-bold rounded-full 
              bg-orange-500 text-white shadow-md border-4 border-white"
            >
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalProcess;
