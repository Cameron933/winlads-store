import React from "react";
import Jeep3 from "../assets/jeep3.png";
import Jeep4 from "../assets/jeep4.png";
import cabBack from "../assets/cab-back.png";
import Card from "./Card";
import { motion } from "framer-motion";
import Correct from "../assets/correct.png";
import NewJeep from "../assets/newJeep.png";
import FreeEntryCard from "./FreeEntryCard";
import CardPlus from "./CardPlus";

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
      id="packages"
    >
    <br /><br />
      <div className="flex flex-col xl:px-8 px-4 justify-between xl:items-center 2xl-pt-0 xl:pt-0 py-8">
        
        {/* <motion.div variants={textAnimate}> */}
        <div className="grid xl:grid-cols-5 grid-cols-1 md:grid-cols-3 gap-4 px-3 xs:px-0 md:px-0">
          <CardPlus
            classNames={"col-span-1"}
            title="Starter Tier"
            // titleColor="white"
            title2="01"
            titleColor2="black"
            price="9.99"
            desc1="$9.99 per month"
            // desc2="Referral Commission: 2.5%"
            desc2="Partner Store Discounts: 10%"
            desc10="01"
            // descColor="white"
            buttonColor2="#0082E1"

            buttonColor="#0082E1"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP / $9.99 PER MONTH"
            bgColorFrom="#0094FF"
            bgColorTo="#00347C"
            titleColor="black"
            // btnword="Get started now"\
            btnBgColor1atr="#0082E1"
            yValue={-20}
            packageId={'657c40018406aeb95f876ca2'}
          />
          <CardPlus
            classNames={"col-span-1"}
            bgColorFrom="#FF4700"
            bgColorTo="#611C00"
            title="Boomer Tier"
            titleColor="black"
            // titleColor="white"
            title2="03"
            titleColor2="black"
            buttonColor2="#CF3A00"

            price="19.99"
            desc1="$19.99 per month"
            // desc2="Referral Commission: 5%"
            desc2="Referral Commission: 15%"
            desc3="Partner Store Discounts: 10%"
            desc4="Be Eligible to Apply Winlad Referral Cards"
            desc5="Access to Winlad Store Cash Back program"
            desc10="03"
            // descColor="white"
            buttonColor="#CF3A00"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGN UP / $19.99 PER MONTH"
            yValue={-40}
            btnBgColor1atr="#CF3A00"
            packageId={'657c757b8406aeb95f876ca7'}
          />
          <CardPlus
            classNames={"col-span-1"}
            bgColorFrom="#00ECFF"
            bgColorTo="#006168"
            mostPopular={true}
            title="Platinum Tier"
            titleColor="black"
            // titleColor="[#01819D]"
            title2="10 FREE ENTRIES"
            buttonColor2="#007D87"

            titleColor2="black"
            price="49.99"
            desc1="$49.99 per month"
            desc2="Referral Commission: 20%"
            desc3="Partner Store Discounts: 10%-15%"
            desc4="Be Eligible to Apply for Winlad PLATINUM Card"
            desc5="Access to Winlad Store Cash Back program"
            desc6="Access to Winlads Public Events"
            desc7="Access to Upcoming Winlad Apps"
            desc10="10"
            // descColor="[#01819D]"
            buttonColor="#007D87"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGN UP / $49.99 PER MONTH"
            // point4={Correct}
            // point5={Correct}
            yValue={-60}
            btnBgColor1atr="#007D87"
            packageId={'657c766e8406aeb95f876cac'}
          />
          <CardPlus
            classNames={"col-span-1"}
            bgColorFrom="#FFBE00"
            bgColorTo="#766000"
            title="Gold Tier"
            titleColor="black"
            // titleColor="white"
            title2="25"
            titleColor2="black"
            buttonColor2="#000000"

            price="100"
            desc1="$100 per month"
            // desc2="Premium Tier"
            desc2="Referral Commission: 25%"
            desc3="Partner Store Discounts: 15%-20%"
            desc4="Be Eligible to Apply for Winlad GOLD Card"
            desc5="Access to Winlad Store Cash Back  program"
            desc6="Access to Winlads Urgency Program"
            desc7="Access to Winlads Public Events"
            desc8="Access to upcoming Winlad Apps & Tools"
            desc10="25"
            // descColor="white"
            buttonColor="#000000"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP / $100 PER MONTH"
            yValue={-80}
            btnBgColor1atr="#000000"
            packageId={'657c775f8406aeb95f876cb1'}
          />
          <CardPlus
            bgColorFrom="#23282E"
            bgColorTo="#000"
            title="Black Tier"
            titleColor="white"
            // titleColor="white"
            title2="150"
            titleColor2="#FFF"
            price="500"
            buttonColor2="#475A79"

            desc1="$500 per month"
            desc2="Referral Commission: 50%"
            desc3="Customized Partner Store discount rates ranging upto 20%"
            desc4="Be Eligible to Apply for Winlad BLACK Card"
            desc5="Access to Winlad Store Cash Back program"
            desc6="Exclusive perks and privileges tailored for Black Tier members"
            desc7="Winlads OG member Eligibility after 6 months ( Which Gives an opportunity to make decisions with Voting Power in Winlads DAO system)"
            desc8="Access to Winlads Urgency Program"
            desc9="Access to Winlads limited and Public Events - Access to Winlads apps and tools"
            desc10="150"
            // descColor="white"
            buttonColor="#475A79"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP / $500 PER MONTH"
            yValue={-100}
            classNames={"col-span-1"}
            btnBgColor1atr="#475A79"
            packageId={'657c77b68406aeb95f876cb6'}
          />
          {/* <Card />
        <Card />
        <Card /> */}
        </div>

        {/* <div className="px-3 xs:px-32 md:px-0 flex justify-center mt-4">
          <FreeEntryCard />
        </div> */}

        
        {/* </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Level;
