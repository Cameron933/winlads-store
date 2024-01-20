import HeroGroup from "../assets/heroGroup.png";
import DisOneHeader from "./DisOneHeader";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroJeep from "../assets/main_bg.jpg";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 4 },
  },
};

const DisOneHero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "https://www.winlads.com/register-district-1";
  };

  return (
    <>
      <div className="flex flex-col relative xl:mb-16 bg-hero items-center ">
        <div className="w-full relative">
          <motion.img
            variants={imageAnimate}
            className="w-full xl:w-full"
            src={HeroJeep}
          />
          <div className="absolute flex justify-center bottom-6 right-4 xl:bottom-10 xl:right-20 z-10">
            <div
              className="text-white border-2 hover:opacity-75 px-2 py-2 font-bold border-white rounded-md text-center w-full flex justify-center items-center"
              onClick={handleClick}
            >
              <button className="text-white font-semibold capitalize xl:text-lg md:text-lg text-sm cursor-pointer">
                Sign up now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center special:justify-between special:pr-52 space-y-2">
          <div className="flex flex-col gap-4 xl:px-8 px-4">
            <p className="text-xl xl:text-2xl 2xl:text-4xl uppercase font-bold text-white text-center">
              ENTER TO WIN X2 BOOTH GIVEAWAYS AT <br /> DISTRICT 1 - ON
              AUSTRALIA DAY 26TH JAN <br /> AMETHYST DISTRCIT - VALUED AT $1790{" "}
              <br /> OR
              <br /> DIAMOND DISTRICT - VALUED AT $3350 <br />
              <br /> WINNER DRAWN JAN 24TH - GET IN QUICK AND, GO IN THE DRAW TO
              WIN A BRAND <br /> NEW MAZDA BT-50, OR 60K CASH!
              <br /> WINNER DRAWN 28TH FEB
              <br />
            </p>
            <p className="text-white text-sm xl:text-center 2xl:text-xl text-center font-semibold">
              SUBSCRIBERS ARE AUTOMATICALLY <br /> ENTERED INTO THE DRAW TO WIN
              WEEKLY
              <br />
              PRIZES, AND ACCUMULATE FREE ENTRIES
              <br /> EVERY MONTH FOR ALL WINLADS GIVEAWAYS!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisOneHero;
