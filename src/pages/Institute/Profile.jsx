import React from "react";
import { PlusSquare } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Add this line

const Profile = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <div className="flex items-center space-x-6 mb-6">
        <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {data.fullName?.charAt(0) || "U"}
        </div>
        <div>
          <h2 className="text-3xl font-bold dark:text-white">
            {data.fullName}
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            <strong>Job Title:</strong> {data.jobTitle}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Institute Name:</strong> {data.instituteName}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* ✅ Wrap with Link */}
        <Link
          to="/institute/listing/programs"
          className="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <PlusSquare size={20} className="text-blue-600" />
            <p className="text-lg font-semibold dark:text-white">Programs</p>
          </div>
          <p className="text-gray-500 text-sm">Add your institute programs</p>
        </Link>

        <div className="p-4 border dark:border-gray-700 rounded-lg">
          <p className="text-lg font-semibold dark:text-white">Followers</p>
          <p className="text-gray-500 text-sm">Coming Soon</p>
        </div>

        <div className="p-4 border dark:border-gray-700 rounded-lg">
          <p className="text-lg font-semibold dark:text-white">Posts</p>
          <p className="text-gray-500 text-sm">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
