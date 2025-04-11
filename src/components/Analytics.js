import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const Analytics = () => {
  const analyticsData = {
    totalStudents: 120,
    placedStudents: 104,
    notPlacedStudents: 16,
    companyStats: [
      { name: "Amazon", value: 1 },
      { name: "Infosys", value: 25 },
      { name: "cognizant", value: 20 },
      { name: "hexaware", value: 12 },
      { name: "Zoho", value: 7 },
      { name: "wns vurum", value: 39 },
    ],
    studentOffers: [
      { name: "stu 1", offers: 2 },
      { name: "stu 2", offers: 1 },
      { name: "stu 3", offers: 3 },
      { name: "stu 4", offers: 1 },
      { name: "stu 5", offers: 2 },
    ],
  };

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28EFF",
    "#FF6699",
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-10">
      <h1 className="text-4xl font-extrabold text-blue-900 text-center mt-[5%] mb-8">
        Placement Analytics
      </h1>

      {/* 🔹 Placement Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-700">
            {analyticsData.totalStudents}
          </h2>
          <p className="text-gray-700">Total Students</p>
        </div>
        <div className="bg-green-100 shadow-lg p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-green-600">
            {analyticsData.placedStudents}
          </h2>
          <p className="text-gray-700">Placed Students</p>
        </div>
        <div className="bg-red-100 shadow-lg p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-red-600">
            {analyticsData.notPlacedStudents}
          </h2>
          <p className="text-gray-700">Not Placed Students</p>
        </div>
      </div>

      {/* 🔹 Charts Section */}
      <div className="flex flex-col md:flex-row mt-12 items-center justify-around gap-10">
        {/* Company-wise Placements (Pie Chart) */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold text-center mb-4">
            Company-wise Placements
          </h2>
          <PieChart width={400} height={400}>
            <Pie
              data={analyticsData.companyStats}
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {analyticsData.companyStats.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Student-wise Offers (Bar Chart) */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold text-center mb-4">
            Student-wise Offers
          </h2>
          <BarChart
            width={500}
            height={300}
            data={analyticsData.studentOffers}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="offers" fill="#0088FE" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
