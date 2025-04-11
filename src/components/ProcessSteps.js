import React from "react";

const steps = [
  {
    id: 1,
    title: "Choosing Domain",
    desc: "Students are given the opportunity to choose their own domain with the best faculty support to guide them.",
  },
  {
    id: 2,
    title: "Projects Preparation",
    desc: "We emphasize project and skill-based learning, ensuring students have their own projects before their pre-final year.",
  },
  {
    id: 3,
    title: "Aptitude Training",
    desc: "Students undergo weekly aptitude training sessions, improving their problem-solving skills through regular tests.",
  },
  {
    id: 4,
    title: "Communication Skills",
    desc: "We ensure our students develop strong communication skills, enhancing their confidence and public speaking abilities.",
  },
  {
    id: 5,
    title: "Appearing for Placement",
    desc: "A complete placement guidance program is provided to ensure students are well-prepared for recruitment processes.",
  },
];

const VerticalProcess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-extrabold uppercase tracking-wide mb-16 text-blue-900 text-center">
        Placement Process
      </h2>

      <div className="relative w-2/3">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-300"></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center w-full mb-16 relative ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div
              className={`max-w-[45%] p-6 rounded-lg shadow-xl border-l-8 border-blue-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                index % 2 === 0 ? "text-right bg-white" : "text-left bg-blue-100"
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {step.title}
              </h3>
              <p className="text-lg text-gray-800 mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Step Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-xl font-bold rounded-full bg-blue-600 text-white shadow-md border-4 border-white">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalProcess;
