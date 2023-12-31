import Instagram from "../assets/Instagram.png";
import Telegram from "../assets/Telegram.png";
import Twitter from "../assets/Twitter.png";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Footer2 = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between  rounded-t-3xl space-y-8 xl:space-y-0 2xl:space-y-0 bg-[#01819D] xl:py-8 py-2 md:py-6 px-6 xl:px-16 2xl:px-8 2xl:py-8">
      <div className="flex-col xl:space-y-4 2xl:space-y-2 space-y-2 items-start hidden xl:flex">
        <p className="text-white text-sm 2xl:text-lg">
          Copyright 2023 Winlads, All Rights Reserved.
        </p>
        <div className="flex flex-row justify-between gap-2">
          <img src={Instagram} className="hover:scale-105 cursor-pointer" />
          <p className="text-white">|</p>
          <img src={Telegram} className="hover:scale-105 cursor-pointer" />
          <p className="text-white">|</p>
          <img src={Twitter} className="hover:scale-105 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-row justify-between xl:space-x-24 md:space-x-24 space-x-12 text-white">
        <div className="flex flex-col space-y-4">
          <p className="uppercase text-lg xl:text-xl: 2xl:text-xl">
            QUICK LINK
          </p>
          <div className="flex flex-col text-xs 2xl:text-lg space-y-1">
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Membership T&C
              </a>
            </p>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="uppercase text-lg xl:text-xl: 2xl:text-xl">
            Contact Us
          </p>
          <div className="flex flex-col text-xs 2xl:text-lg space-y-1">
            <p className="flex items-center gap-2 2xl:gap-5">
              <MdOutlineLocalPhone className="text-white text-sm 2xl:text-lg" />

              <a href="#" target="_blank" rel="noopener noreferrer">
                +44 05885 5455
              </a>
            </p>
            <p className="flex items-center gap-2 2xl:gap-5">
              <MdOutlineEmail className="text-white text-sm 2xl:text-lg" />

              <a href="#" target="_blank" rel="noopener noreferrer">
                info@windlads.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="uppercase text-lg xl:text-xl: 2xl:text-xl">
            Newsletter
          </p>
          <div className="flex flex-col text-xs 2xl:text-lg space-y-1">
            <p>ABN 966 4558 55</p>
            <p>HQ-level 9, 440 Coilns Stree</p>
            <p>Melboume 3000</p>
          </div>
        </div>
      </div>
      <div className="flex-col xl:space-y-4 2xl:space-y-2 space-y-2 flex xl:hidden items-center justify-center">
        <div className="flex flex-row justify-between gap-2">
          <img src={Instagram} className="hover:scale-105 cursor-pointer" />
          <p className="text-white">|</p>
          <img src={Telegram} className="hover:scale-105 cursor-pointer" />
          <p className="text-white">|</p>
          <img src={Twitter} className="hover:scale-105 cursor-pointer" />
        </div>
        <p className="text-white text-sm 2xl:text-lg">
          Copyright 2023 Winlads, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer2;
