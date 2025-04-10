import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  School,
  List,
  User,
  Moon,
  Sun,
  ChevronDown,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import ProgramListing from "./Listing";
import ScholarshipListing from "./ScholarshipListing";
import InstituteProfile from "./Profile";

const Institute = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}
      <header className="bg-blue-900 flex items-center justify-between px-6 py-4 shadow-md text-white">
        <div className="flex items-center font-bold text-xl gap-2">
          <School size={28} />
          Institute Portal
        </div>
        <h1 className="text-2xl font-bold flex-grow text-center">
          Welcome to Institute Portal
        </h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-white text-blue-900 rounded-full hover:bg-gray-200 transition"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav
          className={`w-64 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md min-h-screen p-4`}
        >
          <ul className="space-y-4">
            {/* Dropdown for My Listing */}
            <li className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`flex items-center justify-between w-full p-3 shadow rounded ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <List size={20} />
                  My Listing
                </div>
                <ChevronDown size={20} />
              </button>

              {showDropdown && (
                <ul
                  className={`absolute left-0 mt-2 w-full rounded-md shadow-lg ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                  } overflow-hidden`}
                >
                  <li>
                    <Link
                      to="/institute/listing/programs"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
                      onClick={() => setShowDropdown(false)}
                    >
                      <GraduationCap size={18} /> Program Listing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/institute/listing/scholarships"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
                      onClick={() => setShowDropdown(false)}
                    >
                      <BookOpen size={18} /> Scholarship Listing
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/institute/profile"
                className={`flex items-center gap-2 p-3 shadow rounded hover:bg-gray-200 transition ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-white text-black"
                }`}
              >
                <User size={20} />
                Profile
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="listing/programs" element={<ProgramListing />} />
            <Route
              path="listing/scholarships"
              element={<ScholarshipListing />}
            />
            <Route path="profile" element={<InstituteProfile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Institute;
