import React from "react";
import video from "../assets/video.mp4";
import BgImg from "../assets/bgCar.png";
import AppStore from "../assets/appstore.png"
import PlayStore from "../assets/googleplay.png"

const Apps = () => {
  const divStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "500px",
  };

  return (
    <div
      style={divStyle}
      className="mt-4 flex py-0 text-center relative justify-center flex-col mb-12"
    >
      <video
        src={video}
        className="w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted
      ></video>
      <div className="bg-gradient-to-t from-black/75 to-black/50 absolute top-0 left-0 w-full h-full" />

      <div className="text-center flex justify-center flex-col absolute top-1/2 -translate-y-1/2 left-0 w-full px-5 xl:px-20 space-y-8 xl:space-y-12">
        <div className="flex flex-row items-center justify-between space-x-4">
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-2xl xl:text-4xl text-white">
            <span className="text-[#43E3ED]">200</span>&nbsp;+
          </p>
          <p className="text-white xl:text-sm text-xs capitalize">Australian Business Partners</p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-2xl xl:text-4xl">
            <span className="text-[#43E3ED]">350</span>&nbsp;+
          </p>
          <p className="text-white capitalize xl:text-sm text-xs">
            In Saving through our mates rates discount
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-2xl xl:text-4xl">
            <span className="text-[#43E3ED]">200</span>&nbsp;+
          </p>
          <p className="text-white capitalize xl:text-sm text-xs">
            Stores tou can redeem offers in person or online
          </p>
        </div>
        </div>

        <div className="flex flex-row items-center gap-4 xl:gap-8 justify-center">
            <img src={AppStore} alt="" />
            <img src={PlayStore} alt="" />
        </div>
      
      </div>
    </div>
  );
};

export default Apps;
