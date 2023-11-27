import React from "react";
import Instagram from "../assets/Instagram.png";
import Telegram from "../assets/Telegram.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#01819D] rounded-t-[60px] px-12 text-white py-6 space-y-4">
      <div className="flex flex-col xl:flex-row md:flex-row justify-between space-y-4">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <p className="uppercase text-lg font-semibold">Links</p>
            <div className="text-xs space-y-1">
              <p>Home</p>
              <p>Service</p>
              <p>Price</p>
              <p>About Us</p>
              <p>Features</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-4">
            <p className="uppercase text-lg font-semibold">Product</p>
            <div className="text-xs space-y-1">
              <p>Membership T&C</p>
              <p>Cars</p>
              <p>Drive</p>
              <p>Winners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <p className="uppercase text-lg font-semibold">Community</p>
            <div className="text-xs space-y-1">
              <p>Global Partners</p>
              <p>Forum</p>
              <p>Careers</p>
              <p>Community</p>
              <p>Brand Assets</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col space-y-2 justify-between items-center">
        <p className="text-xs">Copyright 2023 Winlads, All Rights Reserved.</p>
        <div className="flex flex-row items-center">
          <img src={Instagram} alt="" className="hover:scale-105 hover:transition-transform ease-out duration-300" />
          <p className="px-8">|</p>
          <img src={Twitter} alt="" className="hover:scale-105 hover:transition-transform ease-out duration-300"/>
          <p className="px-8">|</p>
          <img src={Telegram} alt="" className="hover:scale-105 hover:transition-transform ease-out duration-300"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
