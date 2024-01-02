import React from "react";
import BG2 from "../assets/bg2.png";
import Partners from "./Partners";
import Jeep2 from "../assets/jeep2.png";
import { motion } from "framer-motion";
import { carAnimation } from "../animations/animation";
import Line from "../assets/line.png";
import Vehicel from "../assets/new-jeep-half.png";

const SecondSection = () => {
  return (
    <div className="relative">
      <div className="absolute xl:left-20 md:-left-20 -left-52 right-0 bottom-0 top-20 md:top-40 z-10">
        <div className="flex flex-row xl:space-x-8 md:space-x-4 2xl:space-x-16 space-x-4">
          <p className="rotate-90 text-[#E83F3F] xl:text-2xl md:text-3xl text-4xl 2xl:text-4xl font-semibold">
            winladsgiveaway
          </p>
          <div className="flex flex-col xl:space-y-2 md:space-y-4 space-y-2">
            <p className="text-black xl:text-3xl md:text-3xl 2xl:text-4xl font-semibold">
              WELCOME TO WINLADS
            </p>
            <img src={Line} alt="" className="xl:py-4 md:py-4 py-2 w-48" />
            <p className="text-gray-700 sm:text-md text-sm 2xl:text-lg w-36 md:w-72 xl:w-72">
            Picture this: you're kicking back, chilling, and earning easy cash—yeah, it's possible! We've got a stash of unreal deals waiting for ya. Plus, sling our program to your mates, and you'll be raking in dosh on the side. No worries, it's that easy!
            </p>
            {/* <p className="text-black text-xs 2xl:text-lg w-48 md:w-72 xl:w-72 capitalize">
              AUSTRALIA WIDEFROM ONLY $9.99 PER MONTH, OPT-OUT ANYTIME
            </p> */}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-end">
          <div className="absolute right-0  md:top-40 xl:top-40 top-20">
            <img src={Vehicel} alt="" className="w-64 xl:w-[600px] lg:w-[400px]" />

            {/* <motion.img
                initial={carAnimation.initialMobile}
                animate={carAnimation.animate}
                transition={carAnimation.transition}
                className="absolute right-0 top-40 w-1/2"
                src={Jeep2}
                alt="main"
              /> */}
            {/* <div className="hidden md:block xl:block">
              <motion.img
                initial={{ x: -180, opacity: 0 }} // Initial position and opacity (hidden)
                animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                transition={{ type: "tween", duration: 1, delay: 1 }}
                className="absolute right-0 top-40 md:top-80 xl:w-1/2 md:w-3/4"
                src={Jeep2}
                alt="main"
              />
            </div> */}
            {/* <div className="block md:hidden xl:hidden">
              <motion.img
                initial={{ x: -180, opacity: 0 }} // Initial position and opacity (hidden)
                animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                transition={{ type: "tween", duration: 1, delay: 1 }}
                className="absolute right-0 top-60 w-3/4"
                src={Jeep2}
                alt="main"
              />
            </div> */}

            {/* <img src={Jeep2} alt="" className="w-1/2"/> */}
          </div>
          <img src={BG2} alt="" className="" />
        </div>
      </div>

      <div className="absolute left-0 right-0 xl:bottom-80 md:bottom-80 -bottom-10 xs:bottom-20 ">
        <Partners />
      </div>
    </div>
  );
};

export default SecondSection;
