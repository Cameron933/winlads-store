import React from "react";
import Jeep3 from "../assets/jeep3.png";
import Jeep4 from "../assets/jeep4.png";
import cabBack from "../assets/cab-back.png";
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

      <div className="flex flex-col xl:px-8 px-4 justify-between xl:items-center pt-8 2xl-pt-0 xl:pt-0 md:pt-0 mb-20 md:-translate-y-32">
        <div className="flex flex-col gap-2 items-center">
          <div className="block 2xl:hidden">
            <p className="xl:text-8xl md:text-6xl text-4xl font-semibold 4xl:text-10xl md:text-center text-center xl:text-start">CHOOSE A<br /> SUBSCRIPTION  <br />PLAN</p>
          </div>
          <div className="hidden 2xl:block">
            <p className="text-6xl font-bold">CHOOSE YOUR LEVEL</p>
          </div>

          <img src={cabBack} className="" />
        </div>
        {/* <motion.div variants={textAnimate}> */}
        <div className="grid xl:grid-cols-5 grid-cols-1 md:grid-cols-3 gap-4 px-3 xs:px-32 md:px-0">
          <Card
            title="Starter Tier"
            // titleColor="white"
            title2="01 FREE ENTRY"
            titleColor2="black"
            // price="$9.99"
            desc1="$9.99 per month"
            // desc2="Referral Commission: 2.5%"
            desc2="Partner Store Discounts: 10% discount for 1 month upon sign-up"
            // descColor="white"
            buttonColor="#0082E1"
            arrowColor="[#01819D]"
            buttonTextColor={'white'}
            btnword="SIGNED UP FOR FREE"
            bgColorFrom="#0094FF"
            bgColorTo="#00347C"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            titleColor="black"
          // btnword="Get started now"
          />
          <Card
            bgColorFrom="#FF4700"
            bgColorTo="#611C00"
            title="Boomer Tier"
            titleColor="black"
            // titleColor="white"
            title2="03 FREE ENTRIES"
            titleColor2="black"
            // price="$19.99"
            desc1="$19.99 per month"
            // desc2="Referral Commission: 5%"
            desc2="Access to partner store database at a 10% discount for 3 months"
            desc3=" Partner Store Discounts: 10% discount for 3 months"
            // descColor="white"
            buttonColor="#CF3A00"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGNED UP FOR FREE"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            point4={Correct}
          />
          <Card
            bgColorFrom="#00ECFF"
            bgColorTo="#006168"
            title="Platinum Tier"
            titleColor="black"
            // titleColor="[#01819D]"
            title2="10 FREE ENTRIES"
            titleColor2="black"
            // price="$49.99"
            desc1="$49.99 per month"
            desc2="Partner Store Database Access"
            desc3="Access to partner store database at a 10%-15% discount for 3 months"
            desc4="Partner Store Discounts: 10%-15% discount for 6 months"
            desc5=" Access to Winlads Public Events"
            // descColor="[#01819D]"
            buttonColor="#007D87"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGNED UP FOR FREE"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            // point4={Correct}
            // point5={Correct}
          />
          <Card
            bgColorFrom="#FFBE00"
            bgColorTo="#766000"
            mostPopular={true}
            title="Gold Tier"
            titleColor="black"
            // titleColor="white"
            title2="25 FREE ENTRIES"
            titleColor2="black"
            // price="$100"
            desc1="$100 per month"
            // desc2="Premium Tier"
            desc2="Partner Store Database Access"
            desc3="Access to partner store database at a 15% discount for 12 months"
            desc4="Access to Winlads Urgency Program"
            desc5="Access to Winlads Public Events"
            // descColor="white"
            buttonColor="#000000"
            arrowColor="[#01819D]"
            buttonTextColor={'white'}
            btnword="SIGNED UP FOR FREE"
            point1={Correct}
            point2={Correct}
            point3={Correct}
            point4={Correct}
            point5={Correct}
            point6={Correct}
          />
          <Card
            bgColorFrom="#23282E"
            bgColorTo="#000"
            title="Black Tier"
            titleColor="white"
            // titleColor="white"
            title2="150 FREE ENTRIES"
            titleColor2="#FFF"
            // price="$500"
            desc1="$500 per month"
            desc2="Partner Store Discounts rates ranging upto 20%"
            desc3="12 months access to premium merchant discounts upto 20%."
            desc4="Exclusive perks and privileges tailored for Black Tier members"
            desc5="Winlads OG member Eligibility after 6 months"
            desc6="Access to Winlads Urgency Program"
            desc7="Access to Winlads limited and Public Events"
            // descColor="white"
            buttonColor="#475A79"
            arrowColor="[#01819D]"
            buttonTextColor={'white'}
            btnword="SIGNED UP FOR FREE"
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
