import React from 'react'
import Correct from "../assets/correct.png"
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = ({bgColor, titleColor, title, price, desc1, buttonTextColor, desc2, desc3, descColor, buttonColor, arrowColor}) => {
  return (
    <div className={`rounded-md bg-${bgColor} p-4 4xl:p-6 shadow-md flex flex-col space-y-8`}>
        <div className='flex flex-row justify-between'>
            <p className={`text-${titleColor} text-lg 4xl:text-2xl`}>{title}</p>
            <p className={`text-${titleColor} text-lg 4xl:text-2xl`}>{price}</p>
        </div>
        <div className='flex flex-col space-y-2'>
            <div className='flex flex-row items-center gap-2'>
                <img src={Correct} alt="" />
                <p className={`text-${descColor} text-xs 4xl:text-lg`}>{desc1}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <img src={Correct} alt="" />
                <p className={`text-${descColor} text-xs 4xl:text-lg`}>{desc2}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <img src={Correct} alt="" />
                <p className={`text-${descColor} text-xs 4xl:text-lg`}>{desc3}</p>
            </div>
        </div>
        <div className={`rounded-md flex flex-row justify-center py-2 bg-${buttonColor} hover:scale-105 hover:transition-transform ease-out duration-300`}>
            <button className='flex flex-row items-center gap-2'>
                <p className={`text-${buttonTextColor} text-xs 4xl:text-lg`}>Get started now</p>
                <MdKeyboardArrowRight className={`text-${arrowColor}`} />
            </button>
        </div>
    </div>
  )
}

export default Card