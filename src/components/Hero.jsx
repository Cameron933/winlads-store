import React from "react";
import HeroGroup from "../assets/heroGroup.png";
import Jeep from "../assets/jeep.png";
import Header from "./Header";
import { motion } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Hero = () => {
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-10 right-10 xl:left-40 left-10 bottom-0 z-10">
        <Header />
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-2">
        <div className="relative">
          <img src={HeroGroup} className="" />
          <div className="absolute xl:top-60 top-40 md:top-80">
            {/* <motion.img
              variants={imageAnimate}
              className=""
              src={Jeep}
              style={{
                position: "absolute",
                top: "300px",
                left: "40px",
                zIndex: "2",
              }}
            /> */}
            <img src={Jeep} alt="" className="w-3/4" />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4">
          <p className="text-6xl xl:text-8xl capitalize font-semibold text-black text-center">
            risus in hendrerit gravida
          </p>
          <p className="text-black text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
