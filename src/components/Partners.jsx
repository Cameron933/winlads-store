import React from "react";
import Stripe from "../assets/partners/stripe.png";
import Nontera from "../assets/partners/nontera.png";

const Partners = () => {
  return (
    <div className="mt-12 flex flex-col space-y-4">
      <p className="text-center text-black font-bold text-6xl uppercase">Partners</p>
      <div className="flex-col space-y-2">
        <img src={Stripe} className="w-full" />
        <img src={Nontera} className="w-full" />
      </div>
    </div>
  );
};

export default Partners;
