import React from "react";
import BG2 from "../assets/bg2.png";
import Partners from "./Partners";
import Jeep2 from "../assets/jeep2.png";
import { animate, motion } from "framer-motion";
import { carAnimation } from "../animations/animation";
import Line from "../assets/line.png";
import Vehicel from "../assets/new-jeep-half.png";
import NewJeep2 from "../assets/newJeep2.png"

const SecondSection = () => {
  return (
    <div className="relative">
      <div className="absolute xl:left-20 md:-left-20 -left-52 right-0 bottom-0 top-20 md:top-40 z-10">
        <div className="flex flex-row xl:space-x-8 md:space-x-4 2xl:space-x-16 space-x-4">
          {/* <p className="rotate-90 text-[#E83F3F] xl:text-2xl md:text-3xl text-4xl 2xl:text-4xl font-semibold">
            winladsgiveaway
          </p> */}
          <div className="flex flex-col xl:space-y-2 md:space-y-4 space-y-2 md:pl-24 pl-56">
            <p className="text-black xl:text-3xl md:text-3xl 2xl:text-4xl font-semibold">
              WELCOME TO WINLADS
            </p>
            <img src={Line} alt="" className="xl:py-4 md:py-4 py-2 w-48" />
            <p className="text-xs md:text-sm font-semibold">Eligibility Criteria and Decision-Making Framework</p>
            <p className="text-gray-700 text-[6px] md:text-xs 2xl:text-sm w-36 md:w-[300px] xl:w-[500px] text-justify">
              Members in both the $100 and $500 tiers can propose within the
              Winlads Urgency Program. However, the authority for
              decision-making lies solely with the $500 Ultimate Tier.
              Specifically, individuals in this tier, with at least six months
              of active participation and verification through the referral
              program (a minimum of 5 direct referrals), possess voting
              privileges. Operational functionality within the Winlads Urgency
              Program operates under a Decentralized Autonomous Organization
              (DAO) framework. Voting power is equally distributed between the
              Winlads Core Team and OG (Original Gangster) members, each holding
              50% voting power. For a proposal to secure approval and financial
              aid, it must obtain a majority vote exceeding 51% .
            </p>
            <p className="text-xs md:text-sm font-semibold pt-4">Community Consensus and Proposal Approval:</p>
            <p className="text-gray-700 text-[6px] md:text-xs 2xl:text-sm w-48 md:w-[400px] xl:w-[500px] text-justify">
              Proposals within the Winlads Urgency Program undergo collective
              evaluation by qualified members. A proposal must attain a majority
              vote of over 51% to receive approval, reflecting the collective
              decision-making power of the Winlads community. This approach
              ensures transparency, fairness, and accountability in extending
              support to members during financial challenges.
            </p>
          </div>
        </div>
   
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-end">
          <div className="absolute right-0 top-40 xl:top-40 md:top-80">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="w-48 md:w-[400px] xl:w-[700px] pro:w-[600px] specialTab:w-[700px]"
              src={NewJeep2}
              alt="main"
            />
          </div>
          <img src={BG2} alt="" className="xl:w-[600px]" />
        </div>
      </div>

      <div className="absolute left-0 right-0 xl:bottom-40 md:bottom-80 -bottom-0 xs:bottom-20 2xl:bottom-20">
        <Partners />
      </div>
    </div>
  );
};

export default SecondSection;
