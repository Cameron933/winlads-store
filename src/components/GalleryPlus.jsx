import React from "react";
import Img6 from "../assets/gallery/img6.jpg";
import Img2 from "../assets/gallery/img2.png";
import Img3 from "../assets/gallery/DSC_6442.jpg";
import Img5 from "../assets/gallery/img5.png";
import Img7 from "../assets/gallery/img7.jpg";
import Img8 from "../assets/gallery/img8.jpg";
import ImgPoster from "../assets/winpost.jpg";
import { motion } from "framer-motion";

const GalleryPlus = () => {
  return (
    <div className="py-8 flex flex-col md:flex-row px-10 xl:px-20 gap-4">
      <div>
        <img className="w-[1500px]" src={Img6} alt="" /><br />
        <img className="w-[1500px]" src={Img2} alt="" />
      </div>
      <a href="https://app.winlads.com/register?ability=WINACCESSEN">
         <div>
        <img src={ImgPoster} alt="" />
      </div>
      </a>
      <div>
        <img className="w-[1500px]" src={Img8} alt="" />
        <img className="w-[1500px]" src={Img5} alt="" />
      </div>
    </div>
  );
};

export default GalleryPlus;
