import { useState } from "react";
import { Heart, CheckCircle, Scale, Trash2 } from "lucide-react";

const Wishlist = () => {
  const [savedPrograms, setSavedPrograms] = useState([
    {
      id: 1,
      name: "Computer Science",
      duration: "4 Years",
      fees: "$40,000",
      Attendence: "Online",
      details: "Comprehensive CS degree with AI specialization.",
    },
    {
      id: 2,
      name: "Software Engineering",
      duration: "4 Years",
      fees: "$38,000",
      Attendence: "Online",
      details: "Focus on software development and project management.",
    },
    {
      id: 3,
      name: "Software Engineering",
      duration: "4 Years",
      fees: "$38,000",
      Attendence: "Online",
      details: "Focus on software development and project management.",
    },
    {
      id: 4,
      name: "Software Engineering",
      duration: "4 Years",
      fees: "$38,000",
      Attendence: "Online",
      details: "Focus on software development and project management.",
    },
  ]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleSave = (id) => {
    setSavedPrograms((prev) => prev.filter((p) => p.id !== id));
    setSelectedPrograms((prev) => prev.filter((p) => p !== id));
  };

  const toggleSelect = (id) => {
    setSelectedPrograms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const selectedDetails = savedPrograms.filter((p) =>
    selectedPrograms.includes(p.id)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist🤍 </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedPrograms.map((program) => (
          <div
            key={program.id}
            className="border p-4 rounded-lg shadow-md relative"
          >
            <Heart className="absolute top-2 right-2 text-red-500" />
            <h3 className="text-xl font-semibold">{program.name}</h3>
            <p>Duration: {program.duration}</p>
            <p>Fees: {program.fees}</p>
            <p>Attendance: {program.Attendence}</p>
            <p>Details: {program.details}</p>

            <CheckCircle
              className={`absolute bottom-2 right-2 cursor-pointer ${
                selectedPrograms.includes(program.id)
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
              onClick={() => toggleSelect(program.id)}
            />
          </div>
        ))}
      </div>
      {selectedPrograms.length === 1 && (
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={() => toggleSave(selectedPrograms[0])}
        >
          <Trash2 /> Unsave Program
        </button>
      )}
      {selectedPrograms.length >= 2 && (
        <div>
          <button
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => setShowComparison(true)}
          >
            <Scale /> Compare Program
          </button>
          {showComparison && (
            <div className="mt-6 border p-4 rounded-lg shadow-md relative">
              <Trash2
                className="absolute top-2 right-2 cursor-pointer text-red-500"
                onClick={() => {
                  setShowComparison(false);
                  setSelectedPrograms([]);
                }}
              />
              <h3 className="text-xl font-bold mb-2">Comparison Table</h3>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Feature</th>
                    {selectedDetails.map((program) => (
                      <th
                        key={program.id}
                        className="border border-gray-300 p-2"
                      >
                        {program.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Duration</td>
                    {selectedDetails.map((program) => (
                      <td
                        key={program.id}
                        className="border border-gray-300 p-2"
                      >
                        {program.duration}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Fees</td>
                    {selectedDetails.map((program) => (
                      <td
                        key={program.id}
                        className="border border-gray-300 p-2"
                      >
                        {program.fees}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Attendance</td>
                    {selectedDetails.map((program) => (
                      <td
                        key={program.id}
                        className="border border-gray-300 p-2"
                      >
                        {program.Attendence}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Details</td>
                    {selectedDetails.map((program) => (
                      <td
                        key={program.id}
                        className="border border-gray-300 p-2"
                      >
                        {program.details}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
