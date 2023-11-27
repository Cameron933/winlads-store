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
    transition: { type: "spring", bounce: 0.4, duration: 1 },
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
    <div className="flex flex-col bg-[#01819D] rounded-t-[60px] px-12 text-white py-6 space-y-4">
      <div className="flex flex-col xl:flex-row md:flex-row xl:justify-between space-y-4 xl:items-center md:justify-between md:items-center">
        <div className="flex flex-col space-y-4">
          <p className="uppercase text-lg font-semibold">Links</p>
          <motion.div variants={textAnimate}>
          <div className="text-xs space-y-1">
            <p>Home</p>
            <p>Service</p>
            <p>Price</p>
            <p>About Us</p>
            <p>Features</p>
          </div>
          </motion.div>
        </div>


        <div className="flex flex-col space-y-4">
          <p className="uppercase text-lg font-semibold">Product</p>
          <motion.div variants={textAnimate}>
          <div className="text-xs space-y-1">
            <p>Membership<br /> T&C</p>
            <p>Cars</p>
            <p>Drive</p>
            <p>Winners</p>
          </div>
          </motion.div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="uppercase text-lg font-semibold">Community</p>
          <motion.div variants={textAnimate}>
          <div className="text-xs space-y-1">
            <p>Global Partners</p>
            <p>Forum</p>
            <p>Careers</p>
            <p>Community</p>
            <p>Brand Assets</p>
          </div>
                </motion.div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col space-y-2 justify-center space-x-8 items-center">
        <p className="text-xs">Copyright 2023 Winlads, All Rights Reserved.</p>
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
      </div>
    </div>
    </motion.div>
  );
};

export default Footer;
