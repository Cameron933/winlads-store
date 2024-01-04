import React from "react";
import XlMap from "../assets/map/xlMap.png";
import MdMap from "../assets/map/mdMap.png";
import SmMap from "../assets/map/smMap.png";

const Map = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-4 px-8">
      <p className="text-center text-black font-semibold text-4xl xl:text-6xl uppercase mb-5">
        Road map
      </p>
      <div className="hidden xl:block">
        <img src={XlMap} alt="" />
      </div>
      <div className="hidden md:block xl:hidden">
        <img src={MdMap} alt="" />
      </div>
      <div className="block md:hidden">
        <img src={SmMap} alt="" />
      </div>
    </div>
  );
};

export default Map;
