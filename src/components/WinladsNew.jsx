import React from "react";
// import WinladsLogo from "../assets/Winlads.png";
import Car10 from "../assets/cars/Card 10.png";
import Car8 from "../assets/cars/Card 8.png";
import Car9 from "../assets/cars/Card 9.png";
import Car from "../assets/cars/Card.png";
import { motion } from "framer-motion";
import WinladsCard from "./WinladsCard";

const imageAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 4 },
  },
};

const WinladsNew = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="mt-4 flex flex-col space-y-8 px-4 md:px-20 my-20">
        <div className="flex justify-center">
          {/* <img src={WinladsLogo} alt="" /> */}
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-3">
            <WinladsCard
            image={Car}
            isExpand={true}
            title="consequat"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <WinladsCard
            image={Car8}
            title="consequat"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <WinladsCard
            image={Car9}
            title="consequat"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <WinladsCard
            image={Car10}
            title="consequat"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>

      </div>
    </motion.div>
  );
};

export default WinladsNew;
            {/* <div className="absolute xl:top-60 md:top-20 top-10 left-0 right-0 z-10">
            <div className="flex flex-col xl:space-y-4 md:space-y-2 space-y-1 items-center xl:px-16 md:px-8 px-2">
              <p className="xl:text-[54.7px] md:text-[37.7px] text-[17.7px] text-white left-0 right-0">consequat</p>
              <p className="xl:text-xs md:text-xs text-[8px] text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div> */}