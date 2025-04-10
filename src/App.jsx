import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
// import Explore from "./pages/Explore";
import Notification from "./pages/Notification";
import Wishlist from "./pages/Wishlist";
import Scholarship from "./pages/Scholarship";
import Navbar from "./components/Navbar/Navbar";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Institute from "./pages/Institute/Institute";
import Listing from "./pages/Institute/Listing";
import InstituteProfile from "./pages/Institute/Profile";
const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isInstituteDashboard = pathname.startsWith("/institute");
  return (
    <main className="h-screen block">
      {!isInstituteDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Nested Institute Routes */}
        <Route path="/institute/*" element={<Institute />} />
      </Routes>
    </main>
  );
};

export default App;
