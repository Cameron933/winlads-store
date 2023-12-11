import React from "react";
import Instagram from "../assets/Instagram.png";
import Telegram from "../assets/Telegram.png";
import Twitter from "../assets/Twitter.png";
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

const Footer = () => {
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
      <div className="flex flex-col bg-[#01819D] rounded-t-[60px] xl:px-12 md:px-12 px-6 text-white py-6 space-y-4">
        <div className="flex flex-row space-x-4 justify-between">
          <div className="flex flex-col space-y-4">
            <p className="uppercase xl:text-lg md:text-lg text-sm 2xl:text-xl font-semibold">Links</p>
            <motion.div variants={textAnimate}>
              <div className="text-xs 2xl:text-lg space-y-1">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Service</p>
                <p className="cursor-pointer">Price</p>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">Features</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="uppercase xl:text-lg md:text-lg text-sm 2xl:text-xl font-semibold">
              Product
            </p>
            <motion.div variants={textAnimate}>
              <div className="text-xs 2xl:text-lg space-y-1">
              <a href="https://www.winlads.com/conditions"  className="cursor-pointer">Membership T&C</a>
              <p className="cursor-pointer">Cars</p>
              <p className="cursor-pointer">Drive</p>
              <p className="cursor-pointer">Winners</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="uppercase xl:text-lg md:text-lg text-sm 2xl:text-xl font-semibold">
              Community
            </p>
            <motion.div variants={textAnimate}>
              <div className="text-xs 2xl:text-lg space-y-1">
              <p className="cursor-pointer">Global Partners</p>
              <p className="cursor-pointer">Forum</p>
              <p className="cursor-pointer">Careers</p>
              <p className="cursor-pointer">Community</p>
              <p className="cursor-pointer">Brand Assets</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col space-y-2 justify-center space-x-8 items-center">
          <div className="flex flex-row items-center">
            <img
              src={Instagram}
              alt=""
              className="hover:scale-105 hover:transition-transform ease-out duration-300"
            />
            <p className="px-8">|</p>
            <img
              src={Twitter}
              alt=""
              className="hover:scale-105 hover:transition-transform ease-out duration-300"
            />
            <p className="px-8">|</p>
            <img
              src={Telegram}
              alt=""
              className="hover:scale-105 hover:transition-transform ease-out duration-300"
            />
          </div>
          <p className="text-xs 2xl:text-lg">
            Copyright 2023 Winlads, All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
