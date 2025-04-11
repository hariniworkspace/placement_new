import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Student1 from "../assests/aish.png";
import student2 from "../assests/menaga.png";
import student3 from "../assests/nikitha.png"
import "../components/css/Brand.css";

const students = [
  {
    name: "Aishwarya P.K",
    company: "Amazon",
    salary: "47 LPA",
    degree: "B.E Computer Science",
    batch: "2021-2025",
    description:
      "The placement training and mock interviews at my college helped me refine my skills and boost my confidence. Thanks to the guidance and support, I secured a Software Developer role at Amazon.",
      image: Student1,
  },
  {
    name: "Menaga R",
    company: "KAAR Technologies",
    salary: "6.5 LPA",
    degree: "B.E Computer Science",
    batch: "2021-2025",
    description:
      "With the right mentorship and hands-on training, I was able to land my dream job at KAAR Technology. The placement cell provided excellent opportunities and industry exposure.",
      image: student2,
  },
  {
    name: "Nikitha S V",
    company: "Light & Wonder",
    salary: "8.5 LPA",
    degree: "B.E Computer Science",
    batch: "2021-2025",
    description:
      "The structured training programs and coding sessions played a key role in my placement at Light & Wonder. Grateful for the support and career guidance from my college.",
      image: student3,
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-blue-600/90 px-8 py-3 text-white font-bold text-xl rounded-full shadow-lg hover:bg-blue-500 transition-all"
    onClick={onClick}
  >
    ❯
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-blue-600/90 px-8 py-3 text-white font-bold text-xl rounded-full shadow-lg hover:bg-blue-500 transition-all"
    onClick={onClick}
  >
    ❮
  </button>
);

// Student Card Component (Larger Version)
const StudentCard = ({ student }) => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-12 border border-white/20 w-full max-w-4xl transition-transform duration-500 hover:scale-105">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-12">
          
          {/* Larger Student Image */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 flex-shrink-0">
          <img
              src={student.image}
              alt={student.name}
              className="w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg"
            />
            <span className="absolute top-0 left-3 -mt-4 bg-blue-600 text-white px-5 py-2 text-lg font-bold rounded-md shadow-lg">
              Student
            </span>
          </div>

          {/* Student Info */}
          <div className="text-center md:text-left text-white">
            <h3 className="text-3xl font-semibold">{student.company}</h3>
            <p className="text-xl text-blue-300">{student.salary}</p>
            <h2 className="text-3xl font-bold mt-3">{student.name}</h2>
            <p className="text-lg text-gray-300 mt-3">
              {student.degree} <br />
              Batch: {student.batch}
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mt-4 italic">
              "{student.description}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Carousel Component (Larger)
const StudentCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex flex-col items-center justify-center py-16">
      <h2 className="text-white text-center font-extrabold text-5xl mb-8">
        <span className="text-blue-300">Top Students'</span> Reviews
      </h2>

      <div className="w-full flex justify-center items-center">
        <div className="w-11/12 md:w-4/5 lg:w-3/5">
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
