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
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Level = () => {
  return (
    <div className="flex flex-col md:flex-col xl:flex-row xl:px-8 px-4 justify-between xl:items-center">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-4xl font-semibold text-center">Choose Your Level</p>
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
          {/* <Card />
        <Card />
        <Card /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Level;
