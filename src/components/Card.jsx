import React from 'react'
import Correct from "../assets/correct.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const Card = ({ bgColorFrom = '#D9E9FF', bgColorTo = '#89CCFD', titleColor = 'black', title, titleColor2, title2, price, desc1, buttonTextColor, desc2, desc3, desc4, desc5, desc6, desc7, descColor = 'black', buttonColor, arrowColor, btnword, point1, point2, point3, point4, point5, point6, point7, mostPopular = false }) => {
    return (
        <div className={`rounded-b-2xl p-4 2xl:p-4 shadow-lg shadow-gray-500 flex flex-col card-container relative`} style={{ background: `linear-gradient(180deg, ${bgColorFrom} 0%, ${bgColorTo} 100%)` }}>
            {
                mostPopular && <div className='flex items-center justify-center gap-2 text-center absolute top-0 left-0 w-full py-2 bg-black font-semibold' style={{ color: bgColorTo }}>
                   <FaStar/> Most Popular
                </div>
            }

            <div className='flex flex-row justify-between mb-10 mt-14'>
                <p className={`text-${titleColor} text-lg lg:text-xl 2xl:text-2xl font-semibold`}>{title}</p>
                <p className={`text-${titleColor} text-lg lg:text-xl 2xl:text-2xl`}>{price}</p>
            </div>
            <div className='flex flex-col justify-between items-center mb-10'>
                <p className={`font-bold text-lg 2xl:text-xl`} style={{ color: titleColor2 }}><span className='text-6xl lg:text-7xl'>{title2.slice(0,3).trim()}</span> FREE ENTRIES</p>
            </div>
            <div className='flex flex-col space-y-2 bg-white p-5 rounded-xl mb-10'>
                <div className='flex flex-row items-center gap-2'>
                    <img src={point1} alt="" className="brightness-0" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>{desc1}</p>
                </div>
                {
                    desc2 && <div className='flex flex-row items-center gap-2'>
                        <img src={point2} alt="" className="brightness-0" />
                        <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>{desc2}</p>
                    </div>
                }

                <div className='flex flex-row items-center gap-2'>
                    <img src={point3} alt="" className="brightness-0" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>{desc3}</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={point4} alt="" className="brightness-0" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>{desc4}</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={point5} alt="" className="brightness-0" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>{desc5}</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={point6} alt="" className="brightness-0" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>{desc6}</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={point7} alt="" className="brightness-0" />
                    <p className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}>{desc7}</p>
                </div>
            </div>
            <div className={`rounded-md flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto`} style={{ backgroundColor: buttonColor }}>
                <button className='flex flex-row items-center gap-2'>
                    <p className={`text-${buttonTextColor} text-xs 2xl:text-lg`}>{btnword}</p>
                    {/* <MdKeyboardArrowRight className={`text-${arrowColor}`} /> */}
                </button>
            </div>
        </div>
    )
}

export default Card