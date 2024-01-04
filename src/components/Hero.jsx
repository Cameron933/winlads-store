import React from "react";
import HeroGroup from "../assets/heroGroup.png";
import Jeep from "../assets/jeep.png";
import Jeep5 from "../assets/new-jeep.png";
import Header from "./Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "https://www.winlads.com/login";
  };

  return (
    <>
      <div className="flex flex-col relative">
        <div className="absolute top-10 right-4 xl:right-10 md:right-10 xl:left-20 left-4 bottom-0 z-10">
          <Header />
        </div>
        <div className="flex flex-col xl:flex-row items-center special:justify-between special:pr-52 gap-2 space-y-6">
          <div className="relative">
            <img src={HeroGroup} className="" />
            <div className="absolute xl:top-64 top-40 md:top-80 xl:scale-110 xl:left-10">
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
              </motion.div>
              {/* <img src={Jeep} alt="" className="" /> */}
            </div>
          </div>
          <div className="flex flex-col gap-4 xl:px-8">
            <p className="text-6xl xl:text-6xl 2xl:text-10xl uppercase font-bold text-black text-center">
              win a brand new mazda<br /> bt-50 or $60k cash
            </p>
            <p className="text-black text-sm xl:text-center 2xl:text-xl capitalize text-center font-semibold">
              by purchasing any winlads package below, you will automatically go
              into the draw to win your choice of a brand new mazda bt-50 or
              $60k cash
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex xl:justify-end justify-center">
        <div
          className="bgColor hover:bg-red-300 px-4 py-2 rounded-md text-center w-48 flex justify-center items-center"
          onClick={handleClick}
        >
          <button className="text-white font-semibold capitalize xl:text-lg md:text-lg text-sm cursor-pointer">
            Sign up for free
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
