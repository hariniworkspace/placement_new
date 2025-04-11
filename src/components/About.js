import React from "react";
import { motion } from "framer-motion";
import campusImage from "../assests/vcet.webp";
import leadershipImage from "../assests/princi.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const About = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-white text-gray-900">
      
      {/* 🔹 Introduction & Overview */}
      <motion.section
        className="text-center py-16 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-[5%]">
          About Our College
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black font-bold">
          Established in 1990, our institution is committed to academic excellence, innovation, and professional growth.
        </p>
        <motion.img
          src={campusImage}
          alt="Campus"
          className="mt-[5%] mx-auto w-full max-w-3xl rounded-lg shadow-lg"
          variants={fadeInUp}
        />
      </motion.section>

      {/* 🔹 Leadership Message */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-blue-50 flex flex-col md:flex-row items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="md:w-1/2 text-center md:text-left" variants={fadeInLeft}>
          <h2 className="text-3xl font-bold text-blue-800">Leadership Message</h2>
          <p className="mt-4 text-gray-700 italic">
            "At Velammal College Of Engineering and Technology, we strive for excellence in education, research, and holistic student development."
          </p>
          <p className="font-semibold text-gray-800 mt-2">- Principal Dr. P.Alli</p>
        </motion.div>
        <motion.img
          src={leadershipImage}
          alt="Leadership"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mt-6 md:mt-0 ml-[8%]"
          variants={fadeInRight}
        />
      </motion.section>

      {/* 🔹 Placement Committee Faculty */}
      <motion.section
        className="py-16 px-6 md:px-20 text-center bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-blue-800">Placement Committee</h2>
        <p className="mt-4 text-gray-700">Meet the dedicated faculty members guiding our students towards successful careers.</p>

        <div className="mt-6 flex flex-wrap justify-center gap-10">
          {[
            { id: 1, name: "Prof. Dr.R.Perumalraja", role: "Head of the Department [CSE]", image: "hod.jpg" },
            { id: 2, name: "Mr.G.Balamuralikrishnan", role: "Placement Coordinator", image: "bmk.jpg" },
            { id: 3, name: "Mr.G.Ram Shankar", role: "Placement Coordinator", image: "ram.jpg" },
          ].map((faculty) => (
            <motion.div key={faculty.id} className="bg-blue-50 p-6 rounded-lg shadow-lg w-64" variants={fadeInUp}>
              <img src={require(`../assests/${faculty.image}`)} alt={faculty.name} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{faculty.name}</h3>
              <p className="text-gray-600">{faculty.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🔹 Placed Students Section */}
      <motion.section
        className="py-16 px-6 md:px-20 text-center bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-blue-800">Placed Students</h2>
        <p className="mt-4 text-gray-700">Meet the students who have successfully secured placements in top companies.</p>

        <div className="mt-6 flex flex-wrap justify-center gap-10">
          {[
            { id: 1, name: "Abirame S", role: "Cogniwide",package: "3 LPA", image: "abirami.png" },
            { id: 2, name: "Aishwarya", role: "Placement Coordinator",package: "4.2 LPA", image: "aish.png" },
            { id: 3, name: "Menaga R", role: "KAAR Technologies",package: "6.5 LPA",image: "menaga.png" },
            { id: 4, name: "Nikitha S V", role: "Light & Wonder",package: "8.5 LPA", image: "nikitha.png" },
            { id: 5, name: "Rajesh C", role: "Cogniwide", package: "3 LPA",image: "rajesh.png" },
            { id: 6, name: "Saffryn Timothy S", role: "AdminDroid",package: "4.2 LPA", image: "saffryn.png" },
            { id: 7, name: "Sournasri A", role: "Altair",package: "30K - Intern", image: "sournasri.png" },
            { id: 8, name: "Sowmiya Eswari P", role: "HCL Tech",package: "3.25 LPA", image: "sowmiya.png" },
            { id: 8, name: "Vishnukumar MJ", role: "Placement Coordinator",package: "4.2 LPA", image: "vishnukumar.png" },
          ].map((student) => (
            <motion.div key={student.id} className="bg-blue-50 p-6 rounded-lg shadow-lg w-64" variants={fadeInUp}>
              <img src={require(`../assests/${student.image}`)} alt={student.name} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{student.name}</h3>
              <p className="text-gray-600">{student.role}</p>
              <p className="text-gray-600">{student.package}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </main>
  );
};

export default About;
