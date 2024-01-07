import React from "react";
import { motion } from "framer-motion";
import WelcomeJeep from "../assets/welcomeJeep.jpg";
import Line from "../assets/line.png";
import Prize from "../assets/prize.png";

const Welcome = () => {
  return (
    <div className="flex flex-col space-y-4 px-10 xl:px-20">
      <div className="flex xl:flex-row flex-col space-y-4 py-8 xl:py-16 gap-4 xl:items-center">
        <div className="flex flex-col xl:space-y-2 md:space-y-4 space-y-2 xl:items-center flex-1">
          <p className="text-center text-black font-semibold text-3xl xl:text-4xl uppercase 2xl:pb-8 xl:pb-4 special:text-7xl">
            WELCOME TO WINLADS
          </p>
          {/* <img src={Line} alt="" className="xl:py-4 md:py-4 py-2 w-48" /> */}
          <p className="text-xs md:text-sm xl:text-xl font-semibold xl:pb-4 special:text-3xl">
            Eligibility Criteria and Decision-Making Framework
          </p>
          <p className="text-gray-700 text-xs md:text-xs xl:text-sm 2xl:text-sm special:text-xl text-justify">
            Members in both the $100 and $500 tiers can propose within the
            Winlads Urgency Program. However, the authority for decision-making
            lies solely with the $500 Ultimate Tier. Specifically, individuals
            in this tier, with at least six months of active participation and
            verification through the referral program (a minimum of 5 direct
            referrals), possess voting privileges. Operational functionality
            within the Winlads Urgency Program operates under a Decentralized
            Autonomous Organization (DAO) framework. Voting power is equally
            distributed between the Winlads Core Team and OG (Original Gangster)
            members, each holding 50% voting power. For a proposal to secure
            approval and financial aid, it must obtain a majority vote exceeding
            51% .
          </p>
          <p className="text-xs md:text-sm xl:text-xl font-semibold pt-4 xl:pb-4 special:text-3xl">
            Community Consensus and Proposal Approval:
          </p>
          <p className="text-gray-700 text-xs md:text-xs xl:text-sm 2xl:text-sm special:text-xl text-justify">
            Proposals within the Winlads Urgency Program undergo collective
            evaluation by qualified members. A proposal must attain a majority
            vote of over 51% to receive approval, reflecting the collective
            decision-making power of the Winlads community. This approach
            ensures transparency, fairness, and accountability in extending
            support to members during financial challenges.
          </p>
        </div>
        {/* <div>
        <img src={WelcomeJeep} alt="" />
      </div> */}
        <div className="flex flex-col flex-1 items-center">
          <div className="bg-[#0094FF] text-center py-2 w-full xl:text-sm text-xs">
            <p className="font-bold text-white capitalize">
              first prize - mazda BT-50
            </p>
          </div>
          <div className="flex md:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="310"
              height="200"
              //   frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden md:flex pro:hidden xl:hidden pt-2">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="690"
              height="400"
              //   frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden pro:flex xl:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="940"
              height="620"
              //   frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden xl:flex 2xl:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="680"
              height="400"
              //   frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden 2xl:flex special:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="780"
              height="450"
              //   frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden special:flex">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="1650"
              height="950"
              //   frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row md:flex-row flex-col items-center gap-4 justify-between">
        <div className="flex flex-col space-y-2 xl:flex-1 w-full">
          <div className="bg-[#0094FF] text-center font-bold text-white py-2 xl:text-sm text-xs">
            Second Prize - AUD 2000
          </div>
          <div
            className="flex flex-row justify-between pr-2 pt-2"
            style={{
              background:`linear-gradient(90deg, #366B71 0%, #000608 100%)`,
            }}
          >
            <img src={Prize} alt="" className="md:w-24 w-24 xl:w-36"/>
            <div className="flex flex-col space-y-4 items-end pt-2">
              <div
                className="text-center text-white py-1 px-2 text-xs"
                style={{
                  background: "linear-gradient(90deg, #01F336 100%, #008C1F 100%)",
                }}
              >
                Cash Prize
              </div>
              <p className="font-semibold uppercase text-lg text-white">
              AUD 2000
              </p>
              <p className="text-[10px] text-white">
              2024-FEB-28 WEDNESDAY
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 xl:flex-1 w-full">
          <div className="bg-[#0094FF] text-center text-white font-bold  py-2 xl:text-sm text-xs">
          Third Prize - AUD 1000
          </div>
          <div
            className="flex flex-row justify-between pr-2 pt-2 "
            style={{
              background: `linear-gradient(90deg, #366B71 0%, #000608 100%)`,
            }}
          >
            <img src={Prize} alt="" className="md:w-24 w-24 xl:w-36"/>
            <div className="flex flex-col space-y-4 items-end pt-2">
              <div
                className="text-center text-white py-1 px-2 text-xs"
                style={{
                  background: "linear-gradient(90deg, #01F336 100%, #008C1F 100%)",
                }}
              >
                Cash Prize
              </div>
              <p className="font-semibold uppercase text-lg text-white">
              AUD 1000
              </p>
              <p className="text-[10px] text-white">
              2024-FEB-28 WEDNESDAY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
