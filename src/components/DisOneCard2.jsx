import React, { useState, useEffect } from "react";
// import Correct from "../assets/correct.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Correct from "../assets/greenCorrect.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DisOneCard2 = ({
  bgColorFrom = "#D9E9FF",
  bgColorTo = "#89CCFD",
  titleColor = "black",
  title,
  titleColor2,
  title2,
  price,
  desc1,
  buttonTextColor,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  desc7,
  desc8,
  desc9,
  descColor = "black",
  buttonColor,
  buttonColor2,
  arrowColor,
  btnword,
  btnword2,
  mostPopular = false,
  yValue,
  classNames,
  packageId,
}) => {
  const [showmore, setShowmore] = useState(false);
  const [btnBgColor, setBtnBgColor] = useState(buttonColor);
  const [btnBgColor1, setBtnBgColor1] = useState(buttonColor2);
  const [selectedPackage, setSelectedPackage] = useState(packageId || "");
  const navigate = useNavigate();

  const switchBtnColor = () => {
    if (btnBgColor == buttonColor) {
      setBtnBgColor("#FFF");
    } else {
      setBtnBgColor(buttonColor);
    }
  };

  const switchBtnColor1 = () => {
    if (btnBgColor1 == buttonColor2) {
      setBtnBgColor1("#FFF");
    } else {
      setBtnBgColor1(buttonColor2);
    }
  };

  const handleClick = () => {
    setShowmore(!showmore);
  };
  const handleClickButton2 = () => {
    window.dataLayer.push({
      event: "signup_button_click",
    });
    console.log(window.dataLayer);

    window.location.href = `https://www.winlads.com/register?mem=true`;
  };
  const handleClickButton = () => {
    window.dataLayer.push({
      event: "signup_button_click",
      data: selectedPackage,
    });
    console.log(window.dataLayer);

    window.location.href = `https://www.winlads.com/register/${selectedPackage}`;
  };

  return (
    <motion.div
      initial={{ y: yValue, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`rounded-2xl px-2 pt-12 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black ${classNames}`}
      style={{
        background: `linear-gradient(180deg, ${bgColorFrom} 0%, ${bgColorTo} 100%)`,
      }}
    >
      {mostPopular && (
        <div
          className="flex items-center justify-center gap-2 text-center absolute rounded-t-xl top-0 left-0 w-full py-2 bg-black font-semibold"
          style={{ color: bgColorFrom }}
        >
          <FaStar className="text-yellow-400" />{" "}
          <span className="text-white">Most Popular</span>
        </div>
      )}
      <p
        className={`text-${titleColor} text-center uppercase text-lg lg:text-xl 2xl:text-2xl font-bold pb-0 lg:pb-8`}
      >
        {title}
      </p>

      {/* <div className="flex flex-row justify-between">
       
        <p className={`text-${titleColor} text-lg lg:text-xl 2xl:text-2xl`}>
          {price}
        </p>
      </div> */}
      <div className="flex flex-col justify-between items-center mb-2">
        <p
          className={`font-bold text-lg 2xl:text-xl text-center`}
          style={{ color: titleColor2 }}
        >
          <span className="text-5xl lg:text-6xl">
            {title2.slice(0, 3).trim()}
          </span>{" "}
          <br />
          <span className="text-xs capitalize">
            Free {title2 === "1" ? "Entry" : "Entries"}
          </span>
        </p>
      </div>
      <div className="flex flex-col  border-2 space-y-4 border-black bg-white px-2 py-4  rounded-xl mb-5 h-full relative">
        <p className="text-center text-xs md:text-sm">
          <span className="text-2xl xl:text-4xl font-semibold">
            <span className="text-xl">$</span>&nbsp;{desc1}
          </span>
          &nbsp;per month
        </p>
        {/* <p className="text-xs text-center"><span className="font-bold">{title2}</span>&nbsp;Accumulating entry</p> */}
        <div
          className={`rounded-md border-2 hover:border-black hover:bg-white hover:text-black cursor-pointer border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto text-${buttonTextColor}`}
          style={{ backgroundColor: btnBgColor1 }}
          onClick={handleClickButton2}
          onMouseEnter={() => switchBtnColor1()}
          onMouseLeave={() => switchBtnColor1()}
        >
          <button className="flex flex-row items-center gap-2">
            <p className={`text-xs 2xl:text-lg`}>{btnword2}</p>
            {/* <MdKeyboardArrowRight className={`text-${arrowColor}`} /> */}
          </button>
        </div>
      </div>
      <div
        className={`rounded-md border-2 hover:bg-white hover:text-black cursor-pointer border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto text-${buttonTextColor}`}
        style={{ backgroundColor: btnBgColor }}
        onClick={handleClickButton}
        onMouseEnter={() => switchBtnColor()}
        onMouseLeave={() => switchBtnColor()}
      >
        <button className="flex flex-row items-center gap-2">
          <p className={` text-xs 2xl:text-lg`}>{btnword}</p>
          {/* <MdKeyboardArrowRight className={`text-${arrowColor}`} /> */}
        </button>
      </div>
    </motion.div>
  );
};

export default DisOneCard2;