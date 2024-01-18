import React, {useEffect, useState} from "react";
import FreeEntry from "../assets/freeEntryImg.png";

const FreeEntryCard = () => {

  const [inapp, setInapp] = useState(false);

  useEffect(() => {
      if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/FBAV/i)) {
          //iOS Facebook App Browser detected
          console.log("in app")
          setInapp(true)
      } else {
          console.log("fdf")
          setInapp(false)
      }
  }, [])

  const handleClickButton = () => {
    if(inapp) {
      window.location.href = "https://app.winlads.com/inapp";
    } else {
      window.location.href = "https://app.winlads.com/register?COUPEN=WINFREE";
    }

  };
  return (
    <div className="rounded-2xl xl:w-72 w-full md:w-72  shadow-lg bg-[#F7B928] shadow-gray-400 relative flex flex-col border-2 border-black">
      <div>
        <img
          src={FreeEntry}
          alt=""
          className="xl:w-72 w-full md:w-72  rounded-l-xl"
        />
      </div>
      <div className="absolute bottom-2 left-0 right-0 mx-2 flex justify-center">
        <button
          className="bg-[#F7B928] py-2 w-full hover:scale-105 hover:transition-transform ease-out duration-300 text-xs 2xl:text-lg hover:text-black hover:bg-white uppercase text-black rounded-lg border border-solid border-black"
          onClick={handleClickButton}
        >
          SIGN UP NOW
        </button>
      </div>
    </div>
  );
};

export default FreeEntryCard;
