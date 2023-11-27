import React from "react";
import Stripe from "../assets/partners/stripe.png";
import Nontera from "../assets/partners/nontera.png";

const Partners = () => {
  return (
    <div className="mt-12 flex flex-col space-y-4">
      <p className="text-center text-black font-bold text-6xl">Partners</p>
      <div className="flex-col space-y-2">
        <img src={Stripe} />
        <img src={Nontera} />
      </div>
    </div>
  );
};

export default Partners;
