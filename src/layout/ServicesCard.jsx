import React from "react";
const ServicesCard = ( {icon ,title , description}) =>{
    return (
        <div className=" group flex  flex-col items-center   text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
         rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                <div className="  p-3 rounded-full h-11 transition-colors duration-300 ease-in-out  pt-3 text-orange-600 "> {icon} </div>
                    <h1 className=" font-semibold pt-10 text-lg">{title}</h1>
                    <p className="text-gray-600 text-sm">{description}</p>
        </div>
          
    );
};
export default ServicesCard;