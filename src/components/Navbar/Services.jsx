import React from "react";
import img from "../../assets/emg.jpg";
import ServicesCard from "../../layout/ServicesCard";
import { FaBuildingColumns } from "react-icons/fa6";
const Services = () => {
  const icon1 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon3 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon4 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon5 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon6 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  return (
    <div className="   min-h-screen flex flex-col justify-center lg:px-10 px-5 pt-16 lg:pt-16">
      <div className=" flex flex-col  items-center lg:flex-row justify-between">
        <div>
          <p className=" text-2xl font-semibold  px-0 pr-40 py-1  pt-24  text-blue-800">
            {" "}
            What course are you looking for?
          </p>
          <h1 className=" text-5xl  font-semibold text-center py-0  pr-40 text-black">
            {" "}
            Discover our portals
          </h1>
        </div>
      </div>
      <div className="  flex flex-col  text-blue-800   lg:flex-row gap-5 pt-16">
        <ServicesCard
          icon={icon1}
          title="PhD"
          description="Availble phd programme in all computing fields. "
        />

        <ServicesCard
          icon={icon2}
          title="Bachelor's program"
          description="Availble Becholr's programme in all computing fields.."
        />
        <ServicesCard
          icon={icon3}
          title="Master program"
          description="Availble Masters programme in all computing fields."
        />
      </div>

      <div>
        <h1 className=" text-5xl font-semibold  pt-44 py-11  px-4 text-black">
          {" "}
          Get more from Studyportals
        </h1>
      </div>
      <div className="  flex flex-col  text-blue-800 lg:flex-row gap-5 pt-10">
        <ServicesCard
          icon={icon4}
          title="Review program"
          description=" Students can review their all saves programme. "
        />

        <ServicesCard
          icon={icon5}
          title="Compare program"
          description="Student can compare their all saved programme."
        />

        <ServicesCard
          icon={icon6}
          title="Scholarship"
          description=" Scholarship programmes are also available for students. "
        />
      </div>
    </div>
  );
};
export default Services;
