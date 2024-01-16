import React from "react";
import Logo from "../assets/banner/logo.png";
import BG1 from "../assets/banner/DSC_6409.jpg";
import BG2 from "../assets/banner/DSC_6442.jpg";
import BG3 from "../assets/banner/SAR00091.jpg";
import BG4 from "../assets/banner/portrait.jpg";
import BG5 from "../assets/banner/DSC_6368.jpg";
import winladsvid from "../assets/winlads (1080p).mp4";

const Banners = () => {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 items-center xl:min-h-screen gap-1 ">
      <div className="xl:rounded-xl overflow-hidden col-span-1 h-80 special:h-full">
        <img src={BG1} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center px-4 col-span-1 h-80 special:h-full">
        <div className="flex flex-row space-x-2 items-center justify-center pb-4">
          <img src={Logo} alt="" className="xl:w-16 w-12" />
          <p className="text-black xl:text-4xl text-3xl">Winlads</p>
        </div>
        <p className="text-center">
          At Winlads, we understand the allure of luxury and aim to make it an
          accessible reality for our members. The LuxeLife Rewards program
          encapsulates the epitome of elegance and extravagance, ensuring that
          every member relishes the experience of living life in the lap of
          luxury.
        </p>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <button className="bg-black hover:opacity-75 uppercase rounded-lg py-4 px-6 text-xs font-semibold text-white">
            sign up now
          </button>
          <button className="bg-[#F59E0B] hover:opacity-75 capitalize rounded-lg py-4 px-6 text-xs font-semibold text-black">
            One Of Package
          </button>
        </div>
      </div>
      <div className="xl:row-span-3 bg-black col-span-1 xl:h-full h-80 xl:rounded-xl overflow-hidden">
        <img
          src={BG4}
          className="w-full h-full xl:object-cover object-contain"
        />
      </div>

      {/* SECOND ROW */}

      <div className="col-span-1 xl:rounded-xl h-80 special:h-full overflow-hidden">
        <img src={BG2} className="w-full h-full object-cover" />
      </div>
      <div className=" cols-span-1 xl:rounded-xl overflow-hidden xl:h-full">
        {/* <iframe
                    src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Winlads"
                    width="100%"
                    className="w-full min-h-64 mx-auto md:min-h-52 xl:h-full"
                ></iframe> */}
        <video className="w-full h-full object-cover" controls>
          <source src={winladsvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <video
          src={winladsvid}
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
        ></video> */}
      </div>

      {/* THIRD ROW */}
      <div className=" xl:rounded-xl col-span-1 h-80 special:h-full overflow-hidden">
        <img src={BG3} className="w-full h-full object-cover" />
      </div>
      <div className=" xl:rounded-xl col-span-1 h-80 special:h-full overflow-hidden">
        <img src={BG5} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Banners;
