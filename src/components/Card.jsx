import React from 'react'
import Correct from "../assets/correct.png"
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = ({bgColor, titleColor, title, titleColor2, title2, price, desc1, buttonTextColor, desc2, desc3, desc4, desc5, desc6, desc7, descColor, buttonColor, arrowColor, btnword, point1, point2, point3, point4, point5, point6, point7,}) => {
  return (
    <div className={`rounded-md p-4 2xl:p-8 shadow-md flex flex-col space-y-8 card-container`} style={{ backgroundColor: bgColor }}>
        <div className='flex flex-row justify-between'>
            <p className={`text-${titleColor} text-lg 2xl:text-xl`}>{title}</p>
            <p className={`text-${titleColor} text-lg 2xl:text-xl`}>{price}</p>
        </div>
        <div className='flex flex-col justify-between items-center '>
            <p className={`font-bold text-${titleColor2} text-2xl 2xl:text-4xl`}>{title2}</p>
        </div>
        <div className='flex flex-col space-y-2'>
            <div className='flex flex-row items-center gap-2'>
                <img src={point1} alt="" />
                <p className={`text-${descColor} text-xs 2xl:text-xl`}>{desc1}</p>
            </div>
            {
                desc2 &&  <div className='flex flex-row items-center gap-2'>
                <img src={point2} alt="" />
                <p className={`text-${descColor} text-xs 2xl:text-xl`}>{desc2}</p>
            </div>
            }
           
            <div className='flex flex-row items-center gap-2'>
                <img src={point3} alt="" />
                <p className={`text-${descColor} text-xs 2xl:text-xl`}>{desc3}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <img src={point4} alt="" />
                <p className={`text-${descColor} text-xs 2xl:text-xl`}>{desc4}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <img src={point5} alt="" />
                <p className={`text-${descColor} text-xs 2xl:text-xl`}>{desc5}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <img src={point6} alt="" />
                <p className={`text-${descColor} text-xs 2xl:text-xl`}>{desc6}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <img src={point7} alt="" />
                <p className={`text-${descColor} text-xs 2xl:text-xl`}>{desc7}</p>
            </div>
        </div>
        <div className={`rounded-md flex flex-row justify-center py-2 bg-${buttonColor} hover:scale-105 hover:transition-transform ease-out duration-300`}>
        <button className='flex flex-row items-center gap-2'>
          <p className={`text-${buttonTextColor} text-xs 2xl:text-lg`}>{btnword}</p>
          {/* <MdKeyboardArrowRight className={`text-${arrowColor}`} /> */}
        </button>
      </div>
    </div>
  )
}

export default Card