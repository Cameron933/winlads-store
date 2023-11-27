import React from "react";
import { MdArrowForward } from "react-icons/md";
import SharedList from "../assets/shared.png"

const Shared = () => {
  return (
    <div className="bg-[#01819D] flex flex-col justify-center items-center space-y-8 mt-12 py-6">
      <div className="flex flex-col space-y-2 text-white items-center px-4">
        <p className="text-4xl 2xl:text-6xl">Shared reviews with your winlads</p>
        <p className="text-xs 2xl:text-lg">
          Start testimonials, reviews, and social proof on the gems you find on
          the web.
        </p>
      </div>
      <div className="flex flex-col space-y-2 items-center">
        <div className="rounded-md py-2 bg-white hover:scale-105 hover:transition-transform ease-out duration-300 px-4">
          <button className="flex flex-row gap-2 items-center">
            <MdArrowForward className="text-[#01819D]" />
            <p className="text-[#01819D]">Start for free</p>
          </button>
        </div>
        <p className="text-xs text-white 2xl:text-lg">And join the teams and creators already using Testimonial</p>
        <img src={SharedList} alt="" />
      </div>
    </div>
  );
};

export default Shared;
