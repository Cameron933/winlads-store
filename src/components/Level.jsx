import React from "react";
import Jeep3 from "../assets/jeep3.png";
import Card from "./Card";
import { motion } from "framer-motion";

const textAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 3 },
  },
};

const Level = () => {
  return (
    <motion.div
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ staggerChildren: 0 }}
    // style={{
    //   paddingBottom: "50px",
    //   height: "auto",
    //   position: "relative",
    //   background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
    // }}
  >

    <div className="flex flex-col md:flex-col xl:flex-row xl:px-8 px-4 justify-between xl:items-center pt-8 2xl-pt-0 xl:pt-0 md:pt-0">
      <div className="flex flex-col gap-2 items-center">
        <div className="block 2xl:hidden">
        <p className="xl:text-8xl md:text-6xl text-4xl font-semibold 4xl:text-10xl md:text-center text-center xl:text-start">Choose<br /> Your  <br />Level</p>
        </div>
        <div className="hidden 2xl:block">
        <p className="text-9xl">Choose<br /> Your Level</p>
        </div>
       
        <img src={Jeep3} className="" />
      </div>
      <motion.div variants={textAnimate}>
        <div className="grid xl:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-2">
          <Card
            bgColor="[#01819D]"
            title="Standard"
            titleColor="white"
            price="$10"
            desc1="2 Day database discount Access"
            desc2="Winlands Events Invites"
            desc3="10% off Winlads Merch"
            descColor="white"
            buttonColor="white"
            arrowColor="[#01819D]"
            buttonTextColor="[#01819D]"
          />
          <Card
            bgColor="[#01819D]"
            title="Bronz"
            titleColor="white"
            price="$30"
            desc1="2 Day database discount Access"
            desc2="Winlands Events Invites"
            desc3="10% off Winlads Merch"
            descColor="white"
            buttonColor="white"
            arrowColor="[#01819D]"
            buttonTextColor="[#01819D]"
          />
          <Card
            bgColor="white"
            title="Silver"
            titleColor="black"
            price="$100"
            desc1="2 Day database discount Access"
            desc2="Winlands Events Invites"
            desc3="10% off Winlads Merch"
            descColor="black"
            buttonColor="[#01819D]"
            arrowColor="white"
            buttonTextColor="white"
          />
          <Card
            bgColor="[#01819D]"
            title="Gold"
            titleColor="white"
            price="$250"
            desc1="2 Day database discount Access"
            desc2="Winlands Events Invites"
            desc3="10% off Winlads Merch"
            descColor="white"
            buttonColor="white"
            arrowColor="[#01819D]"
            buttonTextColor="[#01819D]"
          />
          {/* <Card />
        <Card />
        <Card /> */}
        </div>
      </motion.div>
    </div>
    </motion.div>
  );
};

export default Level;
