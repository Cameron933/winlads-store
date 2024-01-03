import React, { useState } from "react";
// import Correct from "../assets/correct.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Correct from "../assets/greenCorrect.png";
import { motion } from "framer-motion";

const Card = ({
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
    descColor = "black",
    buttonColor,
    arrowColor,
    btnword,
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    mostPopular = false,
    yValue,
    classNames
}) => {
    const [showmore, setShowmore] = useState(false);
    const [btnBgColor, setBtnBgColor] = useState(buttonColor);

    const switchBtnColor = ()=>{
        if(btnBgColor == buttonColor){
            setBtnBgColor('#FFF')
        }else{
            setBtnBgColor(buttonColor);
        }
    }
    const handleClick = () => {
        setShowmore(!showmore);
    };

    const handleClickButton = () => {
        window.location.href = "https://www.winlads.com/login";
    };

    return (
        <motion.div
            initial={{y:yValue, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once:true}}
            transition={{duration:1, delay:0.5}}
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
                    <FaStar /> Most Popular
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
                    className={`font-bold text-lg 2xl:text-xl`}
                    style={{ color: titleColor2 }}
                >
                    <span className="text-6xl lg:text-7xl">
                        {title2.slice(0, 3).trim()}
                    </span>{" "}
                    <span className="text-xs">FREE ENTRIES</span>
                </p>
            </div>
            <div className="flex flex-col space-y-2  border-2 border-black bg-white px-2 py-4 rounded-xl mb-5 h-full relative">
                <div className="flex flex-row items-start gap-2">
                    <img src={Correct} alt="" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>
                        {desc1}
                    </p>
                </div>
                <div className="flex flex-row items-start gap-2">
                    <img src={Correct} alt="" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>
                        {desc2}
                    </p>
                </div>
                {desc3 && (
                    <div className="flex flex-row items-start gap-2">
                        <img src={Correct} alt="" />
                        <p
                            className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                        >
                            {desc3}
                        </p>
                    </div>
                )}
                {showmore && (
                    <div>
                        <div className="flex flex-row items-start gap-2">
                            <img src={Correct} alt="" />
                            <p
                                className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                            >
                                {desc4}
                            </p>
                        </div>
                        {desc5 && (
                            <div className="flex flex-row items-start gap-2">
                                <img src={Correct} alt="" />
                                <p
                                    className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                                >
                                    {desc5}
                                </p>
                            </div>
                        )}
                        {desc6 && (
                            <div className="flex flex-row items-start gap-2">
                                <img src={Correct} alt="" />
                                <p
                                    className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                                >
                                    {desc6}
                                </p>
                            </div>
                        )}
                        {desc7 && (
                            <div className="flex flex-row items-start gap-2">
                                <img src={Correct} alt="" />
                                <p
                                    className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                                >
                                    {desc7}
                                </p>
                            </div>
                        )}
                    </div>
                )}
                {desc4 && (
                    <div className="absolute bottom-5 right-5">
                        <p
                            className="capitalize flex justify-end text-xs cursor-pointer"
                            style={{ color: buttonColor }}
                            onClick={handleClick}
                        >
                            {showmore ? "View Less" : "View More"}
                        </p>
                    </div>
                )}
            </div>
            <div
                className={`rounded-md border-2 hover:bg-white hover:text-black cursor-pointer border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto text-${buttonTextColor}`}
                style={{ backgroundColor: btnBgColor }}
                onClick={handleClickButton}
                onMouseEnter={()=>switchBtnColor()}
                onMouseLeave={()=>switchBtnColor()}
            >
                <button className="flex flex-row items-center gap-2">
                    <p className={` text-xs 2xl:text-lg`} >
                        {btnword}
                    </p>
                    {/* <MdKeyboardArrowRight className={`text-${arrowColor}`} /> */}
                </button>
            </div>
        </motion.div>
    );
};

export default Card;
