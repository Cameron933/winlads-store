import React from "react";
import BG2 from "../assets/bg2.png";
import Partners from "./Partners";
import Jeep2 from "../assets/jeep2.png";
import { motion } from "framer-motion";
import { carAnimation } from "../animations/animation";

const SecondSection = () => {
  return (
    <div className="relative">
      <div className="absolute xl:left-20 md:left-10 left-4 right-0 bottom-0 top-60 md:top-80 z-10">
        <div className="flex flex-col space-y-4">
          <p className="text-black xl:text-4xl md:text-3xl font-semibold">
            in nibh mauris cursus mattis
          </p>
          <p className="text-gray-700 text-xs w-48 md:w-72 xl:w-72">
            elit duis tristique sollicitudin nibh sit amet commodol eu feugiat
            pretium nibh ipsum consequat nisl vel amet volutpat consequat mauris
            nunc congue nisi vitae
          </p>
          <p className="text-black text-xs w-48 md:w-72 xl:w-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-end">
          <div className="">
            {/* <motion.img
                initial={carAnimation.initialMobile}
                animate={carAnimation.animate}
                transition={carAnimation.transition}
                className="absolute right-0 top-40 w-1/2"
                src={Jeep2}
                alt="main"
              /> */}
            <div className="hidden md:block xl:block">
              <motion.img
                initial={{ x: -180, opacity: 0 }} // Initial position and opacity (hidden)
                animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                transition={{ type: "tween", duration: 1, delay: 1 }}
                className="absolute right-0 top-40 md:top-80 xl:w-1/2 md:w-3/4"
                src={Jeep2}
                alt="main"
              />
            </div>
            <div className="block md:hidden xl:hidden">
              <motion.img
                initial={{ x: -180, opacity: 0 }} // Initial position and opacity (hidden)
                animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                transition={{ type: "tween", duration: 1, delay: 1 }}
                className="absolute right-0 top-60 w-3/4"
                src={Jeep2}
                alt="main"
              />
            </div>

            {/* <img src={Jeep2} alt="" className="w-1/2"/> */}
          </div>
          <img src={BG2} alt="" className="" />
        </div>
      </div>

      <div className="absolute left-0 right-0 xl:bottom-80 md:bottom-80 bottom-20 ">
        <Partners />
      </div>
    </div>
  );
};

export default SecondSection;
