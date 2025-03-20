import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Student1 from "../assests/student1.png";
import "../components/css/Brand.css";

// Student Data Array
const students = [
  {
    name: "Aishwarya P.K",
    company: "Google",
    salary: "47 LPA",
    degree: "B.E Computer Science",
    batch: "2023-2027",
    description:
      "Aishwarya is a highly skilled software engineer with a passion for AI and cloud computing. She has successfully secured a role at Google as a software developer.",
  },
  {
    name: "Rahul Sharma",
    company: "Microsoft",
    salary: "40 LPA",
    degree: "B.Tech Information Technology",
    batch: "2022-2026",
    description:
      "Rahul is an expert in backend development and security systems. He recently got placed at Microsoft as a security engineer, making a great impact in the field.",
  },
  {
    name: "Sneha Reddy",
    company: "Amazon",
    salary: "42 LPA",
    degree: "B.E Artificial Intelligence",
    batch: "2023-2027",
    description:
      "Sneha is an AI and ML enthusiast who developed multiple machine learning models. She has joined Amazon as a Machine Learning Engineer.",
  },
];

// Student Card Component
const StudentCard = ({ student }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-2xl rounded-xl p-16 border border-gray-300 w-3/4 max-w-6xl transform scale-105">
        <div className="relative flex items-start space-x-12">
         
          <div className="relative w-64">
            <img
              src={Student1}
              alt="Student"
              className="w-full rounded-lg border-4 border-orange-500 shadow-xl"
            />
            <span className="absolute top-0 left-2 -mt-4 bg-orange-500 text-white px-4 py-2 text-lg font-bold rounded-md">
              Student
            </span>
          </div>

         
          <div className="flex-1">
            <p className="text-gray-800 text-1xl leading-relaxed font-medium">
              {student.description}
            </p>

            {/* Company & Student Info */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-orange-600">
                {student.company}
              </h3>
              <p className="text-1xl text-gray-600 font-semibold">
                {student.salary}
              </p>
              <p className="text-2xl text-red-600 font-bold mt-3">{student.name}</p>
              <p className="text-0xl text-gray-700 mt-3">
                🎓 {student.degree} <br />
                📅 Batch: {student.batch}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Carousel Component
const StudentCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">

      <h2
        className="text-black text-center font-extrabold text-4xl mb-[2px]"
        data-aos="fade-up"
      >
        Our <span className="text-orange-600">Top Students' Reviews</span>
      </h2>
      

     
      <div className="w-full flex justify-center items-center">
        <div className="w-4/5">
          <Slider {...settings}>
            {students.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StudentCarousel;
