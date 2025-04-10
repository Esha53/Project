import { useState } from "react";

const Explore = () => {
  const [filters, setFilters] = useState({
    fees: "",
    location: "",
    faculty: "",
  });

  const programs = [
    {
      id: 1,
      name: "Computer Science",
      fees: "$40,000",
      location: "USA",
      faculty: "Engineering",
      details: "AI and ML specialization.",
    },
    {
      id: 2,
      name: "Software Engineering",
      fees: "$38,000",
      location: "UK",
      faculty: "Technology",
      details: "Software development focus.",
    },
    {
      id: 3,
      name: "Data Science",
      fees: "$42,000",
      location: "Canada",
      faculty: "Science",
      details: "Big Data and Analytics.",
    },
    {
      id: 4,
      name: "Cyber Security",
      fees: "$37,000",
      location: "Germany",
      faculty: "IT",
      details: "Cyber defense and security.",
    },
    {
      id: 5,
      name: "AI & Robotics",
      fees: "$45,000",
      location: "USA",
      faculty: "Engineering",
      details: "AI-driven automation.",
    },
    {
      id: 6,
      name: "Cloud Computing",
      fees: "$39,000",
      location: "Australia",
      faculty: "Technology",
      details: "Cloud architectures.",
    },
    {
      id: 7,
      name: "Networking",
      fees: "$36,000",
      location: "UK",
      faculty: "IT",
      details: "Advanced networking systems.",
    },
    {
      id: 8,
      name: "Embedded Systems",
      fees: "$41,000",
      location: "Canada",
      faculty: "Engineering",
      details: "Hardware and software integration.",
    },
    {
      id: 9,
      name: "Game Development",
      fees: "$44,000",
      location: "Germany",
      faculty: "Technology",
      details: "Game design and programming.",
    },
    {
      id: 10,
      name: "Bioinformatics",
      fees: "$43,000",
      location: "Australia",
      faculty: "Science",
      details: "Biotech and computational biology.",
    },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredPrograms = programs.filter((program) => {
    return (
      (!filters.fees || program.fees.includes(filters.fees)) &&
      (!filters.location || program.location.includes(filters.location)) &&
      (!filters.faculty || program.faculty.includes(filters.faculty))
    );
  });

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Explore Programs</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          name="fees"
          placeholder="Filter by Fees"
          className="p-2 border rounded"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Filter by Location"
          className="p-2 border rounded"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="faculty"
          placeholder="Filter by Faculty"
          className="p-2 border rounded"
          onChange={handleFilterChange}
        />
      </div>

      {/* Program List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="border p-4 rounded-lg shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold">{program.name}</h3>
            <p>Fees: {program.fees}</p>
            <p>Location: {program.location}</p>
            <p>Faculty: {program.faculty}</p>
            <p>Details: {program.details}</p>
            <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2">
              Save Programme
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
