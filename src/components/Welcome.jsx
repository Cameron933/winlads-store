import React from "react";
import { motion } from "framer-motion";
import WelcomeJeep from "../assets/welcomeJeep.jpg";
import Line from "../assets/line.png";

const Welcome = () => {
  return (
    <div className="flex flex-col space-y-4 py-8 xl:py-16 px-10 xl:px-20">
         <div className="flex flex-col xl:space-y-2 md:space-y-4 space-y-2 xl:items-center">
            <p className="text-center text-black font-semibold text-4xl xl:text-6xl uppercase">
              WELCOME TO WINLADS
            </p>
            <img src={Line} alt="" className="xl:py-4 md:py-4 py-2 w-48" />
            <p className="text-xs md:text-sm xl:text-xl font-semibold xl:pb-4">Eligibility Criteria and Decision-Making Framework</p>
            <p className="text-gray-700 text-xs md:text-xs xl:text-sm 2xl:text-sm text-justify">
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
            <p className="text-xs md:text-sm xl:text-xl font-semibold pt-4 xl:pb-4">Community Consensus and Proposal Approval:</p>
            <p className="text-gray-700 text-xs md:text-xs xl:text-sm 2xl:text-sm text-justify">
              Proposals within the Winlads Urgency Program undergo collective
              evaluation by qualified members. A proposal must attain a majority
              vote of over 51% to receive approval, reflecting the collective
              decision-making power of the Winlads community. This approach
              ensures transparency, fairness, and accountability in extending
              support to members during financial challenges.
            </p>
          </div>
      <div>
        <img src={WelcomeJeep} alt="" />
      </div>
      
    </div>
  );
};

export default Welcome;
