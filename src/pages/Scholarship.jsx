import { useState } from "react";

const Scholarship = () => {
  const [scholarships, setScholarships] = useState([
    {
      id: 1,
      name: "Tech Excellence Scholarship",
      amount: "$5,000",
      eligibility: "Undergraduate CS students",
      deadline: "June 30, 2025",
    },
    {
      id: 2,
      name: "AI Research Grant",
      amount: "$10,000",
      eligibility: "Graduate students in AI",
      deadline: "July 15, 2025",
    },
    {
      id: 3,
      name: "Women in Tech Scholarship",
      amount: "$7,500",
      eligibility: "Female students in STEM",
      deadline: "August 20, 2025",
    },
  ]);

  return (
    <div className="p-6  bg-gray-50  min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-black">
        Scholarship Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            className="border p-4 rounded-lg shadow-md bg-white  text-black"
          >
            <h3 className="text-xl font-semibold">{scholarship.name}</h3>
            <p className="text-black">Amount: {scholarship.amount}</p>
            <p className="text-black">Eligibility: {scholarship.eligibility}</p>
            <p className="text-black">Deadline: {scholarship.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarship;
