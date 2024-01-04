import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import FaqImg from "../assets/faq.png"


const Faq = () => {
  return (
    <div className="special:px-24 xl:px-12 px-8 flex flex-col xl:flex-row pt-12 gap-8">
      <div className="flex flex-col flex-1">
        <p className="text-black font-semibold text-xl xl:text-2xl pb-8">
          Draw Details
        </p>
        <div className="flex flex-col space-y-2 pb-12">
            <div className="flex flex-row items-center gap-1">
                <IoIosArrowRoundForward />
                <p className="text-xs text-gray-600">
                    Valid to VIC, NSW, QLD, WA, TAS & NT residents
                </p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <IoIosArrowRoundForward />
                <p className="text-xs text-gray-600">
                Winner announced 29/2/2024  <span className="text-black">via Facebook live</span> 
                </p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <IoIosArrowRoundForward />
                <p className="text-xs text-black">
                The prizes will be drawn using our Digital Draw System
                </p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <IoIosArrowRoundForward />
                <p className="text-xs text-black">
                The winner will be contacted immediately via phone
                </p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <IoIosArrowRoundForward />
                <p className="text-xs text-gray-600">
                Vehicle delivered to you free of charge Australia wide. Or Cash prize deposited into your bank account.
                </p>
            </div>

        </div>
        <div>
            <img src={FaqImg} alt="" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-black font-semibold text-xl xl:text-2xl pb-8">FAQ</p>
        <div className="flex flex-col space-y-4">
          <div className="bg-white flex flex-col space-y-2 p-4">
            <p className="font-bold">Is this promotion valid Australia wide?</p>
            <p className="text-xs">
              The promotion is valid in all states of Australia excluding South
              Australia.
            </p>
          </div>
          <div className="bg-white flex flex-col space-y-2 p-4">
            <p className="font-bold">Is this an ongoing payment?</p>
            <p className="text-xs">
              Yes, once you make a purchase your name goes into the draw x the
              amount of entries you have. You'll receive an email stating the
              total entries that you have and you can see that total when you
              login to your WinLads dashboard.
            </p>
          </div>
          <div className="bg-white flex flex-col space-y-2 p-4">
            <p className="font-bold">Do I receive Entries?</p>
            <p className="text-xs">
              The referral program rewards existing members for inviting new
              individuals to join our platform. When someone signs up using your
              unique referral link or code, you earn commissions based on their
              subscription level.
            </p>
            <p className="text-xs">
              By participating, you can earn commissions on the subscription
              fees of individuals you refer. Additionally, you contribute to
              expanding our community and potentially increasing your passive
              income.
            </p>
          </div>
          <div className="bg-white flex flex-col space-y-2 p-4">
            <p className="font-bold">Is the cash tax free?</p>
            <p className="text-xs">
              If you take the cash it is completely tax free! How good is that!
            </p>
          </div>
          <div className="bg-white flex flex-col space-y-2 p-4">
            <p className="font-bold">
              Do I need to be watching the live or answer my phone to win?
            </p>
            <p className="text-xs">
              No, we will contact the winner ASAP through the details they ve
              provided during registration which will be presented to us upon
              entering the winning combination into our system.
            </p>
            <p className="text-xs">
              If we can not contact the winner on the live feed, we will wait
              and try again later.As per our permits we can NOT redraw unless
              the prize remains unclaimed for 3 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
