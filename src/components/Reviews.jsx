import React from "react";
import ReviewsImg from "../assets/reviews.png";

const Reviews = () => {
  return (
    <div className="">
      <div className="hidden xl:flex">
        <div className="mx-8 flex md:gap-12 gap-4 xl:gap-36 justify-center xl:absolute bottom-0 right-0 left-0  pt-4 z-10">
          <div className="flex flex-col space-y-1">
            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl font-semibold">
              1.000<span className="text-gray-600">S</span>
            </p>
            <p className="text-xs text-center">
              In savings through our
              <br /> mates rates discounts
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
              1.000<span className="text-gray-600">S</span>
            </p>
            <p className="text-xs text-center">
              Australian business
              <br /> Benefits
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
              +600<span className="text-gray-600">K</span>
            </p>
            <p className="text-xs text-center">
              Australian business
              <br /> Benefits
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="buttonColor px-4 py-2 rounded-md">
              <button className="text-white font-semibold capitalize xl:text-lg md:text-lg text-sm">
                Purchase
              </button>
            </div>
            <div className="flex justify-end">
              <img src={ReviewsImg} className="w-16" />
            </div>
            <p className="text-[#01819D text-[8px] flex justify-end">
              Based on<span className="text-[#8E8E8E]">456 reviews</span>
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 flex-col flex xl:hidden items-center justify-center space-y-4 pt-8 ">
        <div className="flex flex-col space-y-1 items-center">
          <div className="buttonColor px-4 py-2 rounded-md">
            <button className="text-white font-semibold capitalize xl:text-lg md:text-lg text-sm">
              Purchase
            </button>
          </div>
          <div className="flex justify-end">
            <img src={ReviewsImg} className="w-16" />
          </div>
          <p className="text-[#01819D text-[8px] flex justify-end">
            Based on<span className="text-[#8E8E8E]">456 reviews</span>
          </p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-col space-y-1">
            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl font-semibold">
              1.000<span className="text-gray-600">S</span>
            </p>
            <p className="text-[10px] text-center">
              In savings through our
              <br /> mates rates discounts
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
              1.000<span className="text-gray-600">S</span>
            </p>
            <p className="text-[10px] text-center">
              Australian business
              <br /> Benefits
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
              +600<span className="text-gray-600">K</span>
            </p>
            <p className="text-[10px] text-center">
              Australian business
              <br /> Benefits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
