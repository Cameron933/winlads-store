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
      <div className="absolute top-10 right-0 xl:right-10 md:right-10 xl:left-20 left-4 bottom-0 z-10">
        <Header />
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-2 space-y-6">
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
            <img src={Jeep} alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4">
          <p className="text-6xl xl:text-8xl 2xl:text-10xl capitalize font-semibold text-black text-center">
            Get Chance<br />to Win<br />Everyday
          </p>
          <p className="text-black text-sm text-center 2xl:text-xl capitalize">
            OUR MEMBERSHIP PROGRAMME PROVIDES PERSONALISED RECOMMENDATIONS TO
            ENSURE THAT YOU RECEIVE OFFERS AND DEALS THAT MATCH YOUR UNIQUE
            TASTES.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
