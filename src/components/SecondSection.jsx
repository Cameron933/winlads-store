import React from "react";
import BG2 from "../assets/bg2.png";
import Partners from "./Partners";
import Jeep2 from "../assets/jeep2.png";
import { motion } from "framer-motion";
import { carAnimation } from "../animations/animation";
import Line from "../assets/line.png";
import Vehicel from "../assets/vehicel.png";

const SecondSection = () => {
  return (
    <div className="relative">
      <div className="absolute xl:left-20 md:-left-20 -left-20 right-0 bottom-0 top-60 md:top-80 z-10">
        <div className="flex flex-row xl:gap-16 md:gap-16 2xl:gap-24 gap-16">
          <p className="rotate-90 text-[#01819D] xl:text-xl text-lg 2xl:text-2xl font-semibold">
            winlads.com
          </p>
          <div className="flex flex-col xl:space-y-4 md:space-y-4 space-y-2">
            <p className="text-black xl:text-4xl md:text-3xl 2xl:text-6xl font-semibold">
              Homewares, Trades & Services
            </p>
            <img src={Line} alt="" className="xl:py-4 md:py-4 py-2 w-48" />
            <p className="text-gray-700 text-xs 2xl:text-lg w-36 md:w-72 xl:w-72">
              Homewares, Trades & Services We ve teamed up with the best in the
              business. Get great deals on Furniture, homeware & decor,
              electrical, plumbing and more!
            </p>
            <p className="text-black text-xs 2xl:text-lg w-48 md:w-72 xl:w-72 capitalize">
              AUSTRALIA WIDEFROM ONLY $19.99 PER MONTH, OPT-OUT ANYTIME
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-end">
          <div className="absolute right-0  md:top-40 xl:top-60 top-60 ">
            <img src={Vehicel} alt="" className="w-48 xl:w-72 md:w-72" />

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

      <div className="absolute left-0 right-0 xl:bottom-80 md:bottom-80 bottom-10 ">
        <Partners />
      </div>
    </div>
  );
};

export default SecondSection;
