import React from "react";
import WinladsLogo from "../assets/Winlads.png";
import Img1 from "../assets/winlads/img1.png";
import Img2 from "../assets/winlads/img2.png";
import Img3 from "../assets/winlads/img3.png";
import Img4 from "../assets/winlads/img4.png";

import Img11 from "../assets/winlads/img11.png";
import Img22 from "../assets/winlads/img22.png";
import Img33 from "../assets/winlads/img33.png";
import Car from "../assets/cars/Card.png";
import Car1 from "../assets/cars/Card 1.png";
import Car2 from "../assets/cars/Card 2.png";
import Car3 from "../assets/cars/Card 3.png";

import { motion } from "framer-motion";

const imageAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 4 },
  },
};

const Winlads = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="mt-4 flex flex-col space-y-8 px-4">
        <div className="flex justify-center">
          <img src={WinladsLogo} alt="" />
        </div>
        <div className="flex xl:flex-row md:flex-row flex-row justify-between">
          {/* <div> */}
          <div className="relative hover:scale-105">
            <img src={Car} />
            {/* <div className="absolute xl:top-60 md:top-20 top-10 left-0 right-0 z-10">
            <div className="flex flex-col xl:space-y-4 md:space-y-2 space-y-1 items-center xl:px-16 md:px-8 px-2">
              <p className="xl:text-[54.7px] md:text-[37.7px] text-[17.7px] text-white left-0 right-0">consequat</p>
              <p className="xl:text-xs md:text-xs text-[8px] text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div> */}
          </div>
          {/* </div> */}
          {/* <div className="flex flex-row"> */}
          <div>
            <motion.img
              variants={imageAnimate}
              className="hover:scale-105"
              src={Car1}
            />
            {/* <img src={Car1} className="hover:scale-105" /> */}
          </div>
          <div>
            <motion.img
              variants={imageAnimate}
              className="hover:scale-105"
              src={Car2}
            />
            {/* <img src={Car2} className="hover:scale-105" /> */}
          </div>
          <div>
            <motion.img
              variants={imageAnimate}
              className="hover:scale-105"
              src={Car3}
            />
            {/* <img src={Car3} className="hover:scale-105" /> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </motion.div>
  );
};

export default Winlads;
