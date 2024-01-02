import React from "react";
import NewLogo from "../assets/winLogo.png";
import Img1 from "../assets/gallery/img1.png";
import Img2 from "../assets/gallery/img2.png";
import Img3 from "../assets/gallery/img3.png";
import Img4 from "../assets/gallery/img4.png";
import Img5 from "../assets/gallery/img5.png";

const NewGallery = () => {
  return (
    <div className="flex flex-col xl:space-y-8 space-x-4 py-8">
      <div className="flex justify-center">
        <img src={NewLogo} alt="" className="w-48 xl:w-72" />
      </div>
      <div className="grid grid-cols-4 xl:px-20 md:px-10 px-5 gap-2">
        <div className="col-span-5 md:col-span-1 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <img src={Img1} alt="" className="w-full" />
            <img src={Img2} alt="" className="w-full" />
          </div>
        </div>
        <div className="col-span-5 md:col-span-2">
        <img src={Img3} alt="" className="w-full" />
        </div>
        <div className="col-span-5 md:col-span-1">
          <div className="flex flex-col gap-2">
            <img src={Img4} alt="" className="w-full" />
            <img src={Img5} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGallery;
