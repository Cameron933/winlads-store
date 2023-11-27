import React from "react";
import WinladsLogo from "../assets/Winlads.png";
import Img1 from "../assets/winlads/img1.png";
import Img2 from "../assets/winlads/img2.png";
import Img3 from "../assets/winlads/img3.png";
import Img4 from "../assets/winlads/img4.png";

import Img11 from "../assets/winlads/img11.png";
import Img22 from "../assets/winlads/img22.png";
import Img33 from "../assets/winlads/img33.png";

const Winlads = () => {
  return (
    <div className="mt-4 flex flex-col space-y-8 px-4">
      <div className="flex justify-center">
        <img src={WinladsLogo} alt="" />
      </div>
      <div className="flex xl:flex-row md:flex-row flex-row justify-between">
        {/* <div> */}
        <div className="relative">
          <img src={Img1} />
          <div className="absolute xl:top-60 md:top-20 top-10 left-0 right-0 z-10">
            <div className="flex flex-col xl:space-y-4 md:space-y-2 space-y-1 items-center xl:px-16 md:px-8 px-2">
              <p className="xl:text-[54.7px] md:text-[37.7px] text-[17.7px] text-white left-0 right-0">consequat</p>
              <p className="xl:text-xs md:text-xs text-[8px] text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="flex flex-row"> */}
        <div>
          <img src={Img11} className="hover:scale-105" />
        </div>
        <div>
          <img src={Img22} className="hover:scale-105" />
        </div>
        <div>
          <img src={Img33} className="hover:scale-105" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Winlads;
