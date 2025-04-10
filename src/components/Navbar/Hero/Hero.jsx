import React from "react";
import himg from "../../../assets/img12.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-white">
      <img className=" w-full h-full " src={himg} alt="Hero" />
      <div className="absolute inset-0 flex flex-col items-start justify-center  bg-opacity-50 pl-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-left max-w-md">
          Find your dream
          <br />
          computing study
        </h1>
        <p className="text-white text-xl md:text-1xl text-left max-w-md mt-4">
          Find and compare all your study options in one place and find the
          best-fit programme that matches your needs and ambitions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
