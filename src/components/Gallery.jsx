import React from "react";
import Img6 from "../assets/gallery/img6.jpg";
import Img7 from "../assets/gallery/img7.jpg";
import Img8 from "../assets/gallery/img8.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="py-8 flex flex-col md:flex-row px-10 xl:px-20 gap-4">
      <div>
        <img src={Img6} alt="" />
      </div>
      <div>
        <img src={Img7} alt="" />
      </div>
      <div>
        <img src={Img8} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
