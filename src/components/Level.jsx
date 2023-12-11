import React from "react";
import Jeep3 from "../assets/jeep3.png";
import Jeep4 from "../assets/jeep4.png";
import Card from "./Card";
import { motion } from "framer-motion";
import Correct from "../assets/correct.png"

const textAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 3 },
  },
};

const Level = () => {
  return (
    <motion.div
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ staggerChildren: 0 }}
    // style={{
    //   paddingBottom: "50px",
    //   height: "auto",
    //   position: "relative",
    //   background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
    // }}
  >

    <div className="flex flex-col md:flex-col xl:flex-row xl:px-8 px-4 justify-between xl:items-center pt-8 2xl-pt-0 xl:pt-0 md:pt-0">
      <div className="flex flex-col gap-2 items-center">
        <div className="block 2xl:hidden">
        <p className="xl:text-8xl md:text-6xl text-4xl font-semibold 4xl:text-10xl md:text-center text-center xl:text-start">CHOOSE A<br /> SUBSCRIPTION  <br />PLAN</p>
        </div>
        <div className="hidden 2xl:block">
        <p className="text-6xl">CHOOSE A<br /> SUBSCRIPTION PLAN</p>
        </div>
       
        <img src={Jeep4} className="" />
      </div>
      {/* <motion.div variants={textAnimate}> */}
        <div className="grid xl:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-2">
          <Card
            bgColor="[#01819D]"
            title="Starter Tier"
            titleColor="white"
            price="$9.99"
            desc1="Entry Tier"
            desc2="Referral Commission: 2.5%"
            desc3="Partner Store Discounts: 10% discount for 1 month upon sign-up"
            descColor="white"
            buttonColor="white"
            arrowColor="[#01819D]"
            buttonTextColor="[#01819D]"
            btnword="01 CHANCE"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            // btnword="Get started now"
          />
          <Card
            bgColor="white"
            title="Boomer Tier"
            titleColor="[#01819D]"
            price="$19.99"
            desc1="Growth Tier"
            desc2="Referral Commission: 5%"
            desc3="Access to partner store database at a 10% discount for 3 months"
            desc4=" Partner Store Discounts: 10% discount for 3 months"
            descColor="[#01819D]"
            buttonColor="[#01819D]"
            arrowColor="white"
            buttonTextColor="white"
            btnword="03 CHANCES"   
            point1={Correct}
            point2={Correct}
            point3={Correct}
            point4={Correct}
          />
          <Card
            bgColor="white"
            title="Platinum Tier"
            titleColor="black"
            price="$49.99"
            desc1="Elite Tier Winlands Events Invi - Referral Commission: 10%"
            desc2="Partner Store Database Access:"
            desc3="Access to partner store database at a 10%-15% discount for 3 months"
            desc4="Partner Store Discounts: 10%-15% discount for 6 months"
            desc5=" Access to Winlads Public Events"
            descColor="black"
            buttonColor="[#01819D]"
            arrowColor="white"
            buttonTextColor="white"
            btnword="10 CHANCES"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            point4={Correct}
            point5={Correct}
          />
          <Card
            bgColor="[#01819D]"
            title="Gold"
            titleColor="white"
            price="$100"
            desc1="Premium Tier"
            desc2="Referral Commission: 17.5%"
            desc3="Partner Store Database Access"
            desc4="Access to partner store database at a 15% discount for 12 months"
            desc5="Access to Winlads Urgency Program"
            desc6="Access to Winlads Public Events"
            descColor="white"
            buttonColor="white"
            arrowColor="[#01819D]"
            buttonTextColor="[#01819D]"
            btnword="25 CHANCES"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            point4={Correct}
            point5={Correct}
            point6={Correct}
          />
          <Card
            bgColor="[#01819D]"
            title="Black"
            titleColor="white"
            price="$500"
            desc1="Referral Commission: 25%"
            desc2="Partner Store Discounts rates ranging upto 20%"
            desc3="12 months access to premium merchant discounts upto 20%."
            desc4="Exclusive perks and privileges tailored for Black Tier members"
            desc5="Winlads OG member Eligibility after 6 months"
            desc6="Access to Winlads Urgency Program"
            desc7="Access to Winlads limited and Public Events"
            descColor="white"
            buttonColor="white"
            arrowColor="[#01819D]"
            buttonTextColor="[#01819D]"
            btnword="150 CHANCES"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            point4={Correct}
            point5={Correct}
            point6={Correct}
            point7={Correct}
          />
          {/* <Card />
        <Card />
        <Card /> */}
        </div>
      {/* </motion.div> */}
    </div>
    </motion.div>
  );
};

export default Level;
