import React from "react";
import HeroGroup from "../assets/heroGroup.png";
import Jeep from "../assets/jeep.png";
import Jeep5 from "../assets/jeep5.png";
import Header from "./Header";
import { motion } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 4 },
  },
};

const Hero = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      // className="grid grid-cols-1 gap-2 lg:grid-cols-2"
      // style={{
      //   minHeight: "100vh",
      //   position: "relative",
      //   background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      // }}
    >
      <div className="flex flex-col relative">
        <div className="absolute top-10 right-4 xl:right-10 md:right-10 xl:left-20 left-4 bottom-0 z-10">
          <Header />
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-2 space-y-6 pointer-events-none">
          <div className="relative">
            <img src={HeroGroup} className="" />
            <div className="absolute xl:top-60 top-40 md:top-80">
              <motion.img
                variants={imageAnimate}
                className=""
                src={Jeep5}
                // style={{
                //   position: "absolute",
                //   top: "300px",
                //   left: "40px",
                //   zIndex: "2",
                // }}
              />
              {/* <img src={Jeep} alt="" className="" /> */}
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <p className="text-6xl xl:text-8xl 2xl:text-10xl capitalize font-semibold text-black text-center">
            Elevating 
              <br />
              Your 
              <br />
              Lifestyle
            </p>
            <p className="text-black text-sm text-center 2xl:text-xl capitalize">
            With over 200+ businesses across 200+ stores where you can accessexclusive discounts.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
