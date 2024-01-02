import React, { useState } from 'react'
import Car from "../assets/cars/Card.png";

const WinladsCard = ({ isExpand = false, image = Car, description = '-', title = 'consequat' }) => {
    const [expanded, setExpanded] = useState(isExpand);

    const handleExpand = (value) => {
        setExpanded(value);
    }
    return (
        <div className={`rounded-3xl overflow-hidden relative transition-all cursor-pointer ${expanded ? 'w-1/2' : 'w-60'}`} onMouseEnter={() => handleExpand(true)} onMouseLeave={() => handleExpand(false)} onTouchStartCapture={() => handleExpand(true)} onTouchEndCapture={() => handleExpand(false)}>
            <div className='relative h-[570px]'>
                <img src={image} className='w-full h-full object-cover' alt='Car' />
                {
                    expanded ? <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75'></div> :                 <div className='absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500 opacity-75'></div>


                }
            </div>
            {expanded ?
                <div className='text-white absolute bottom-10 left-0 w-full text-center'>
                    <h3 className={`lg:text-4xl text-lg uppercase mb-10`}>{title}</h3>
                    <p className='text-xs mb-5'>{description}</p>
                </div>
                : <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
                    <h3 className={`lg:text-4xl text-lg uppercase text-white rotate-90`}>{title}</h3>
                </div>
            }
        </div>
    )
}

export default WinladsCard