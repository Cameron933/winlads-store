import React from "react";
import Card from "./Card2";

const Packages = () => {
  return (
    <div className="flex flex-col space-y-2 xl:space-y-4 pt-4">
      <div className="bg-[#0094FF] text-center py-2">
        <p className="font-bold text-white xl:text-2xl md:text-xl text-lg capitalize">
          Select your package
        </p>
      </div>
      <div className="px-4">
        <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 px-3 xs:px-0 md:px-0">
          <Card
            packageId={'657c40018406aeb95f876ca2'}
            classNames={"col-span-1"}
            title="Starter Tier"
            // titleColor="white"
            title2="01"
            titleColor2="black"
            // price="$9.99"
            desc1="9.99"
            // desc2="Referral Commission: 2.5%"
            desc2="Partner Store Discounts: 10%"
            //   desc3="Virtual access to Winlads Club Day"
            // descColor="white"
            buttonColor="#0082E1"
            buttonColor2="#0082E1"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP NOW"
            btnword2="ONE OFF PACKAGES"
            bgColorFrom="#0094FF"
            bgColorTo="#00347C"
            titleColor="black"

            // btnword="Get started now"\
            yValue={-20}
          />
          <Card
            packageId={'657c757b8406aeb95f876ca7'}
            classNames={"col-span-1"}
            bgColorFrom="#FF4700"
            bgColorTo="#611C00"
            title="Boomer Tier"
            titleColor="black"
            // titleColor="white"
            title2="03"
            titleColor2="black"
            // price="$19.99"
            desc1="19.99"
            // desc2="Referral Commission: 5%"
            desc2="Referral Commission: 15%"
            desc3="Partner Store Discounts: 10%"
            desc4="Be Eligible to Apply Winlad Referral Cards"
            desc5="Access to Winlad Store Cash Back program"
            // descColor="white"
            buttonColor="#CF3A00"
            buttonColor2="#CF3A00"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGN UP NOW"
            btnword2="ONE OFF PACKAGES"
            yValue={-40}
          />
          <Card
            packageId={'657c766e8406aeb95f876cac'}
            classNames={"col-span-1"}
            bgColorFrom="#00ECFF"
            bgColorTo="#006168"
            mostPopular={true}
            title="Platinum Tier"
            titleColor="black"
            // titleColor="[#01819D]"
            title2="10"
            titleColor2="black"
            // price="$49.99"
            desc1="49.99"
            desc2="Referral Commission: 20%"
            desc3="Partner Store Discounts: 10%-15%"
            desc4="Be Eligible to Apply for Winlad PLATINUM Card"
            desc5="Access to Winlad Store Cash Back program"
            desc6="Access to Winlads Public Events"
            desc7="Access to Upcoming Winlad Apps"
            // descColor="[#01819D]"
            buttonColor="#007D87"
            buttonColor2="#007D87"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGN UP NOW"
            btnword2="ONE OFF PACKAGES"
            // point4={Correct}
            // point5={Correct}
            yValue={-60}
          />
          <Card
            packageId={'657c775f8406aeb95f876cb1'}
            classNames={"col-span-1"}
            bgColorFrom="#FFBE00"
            bgColorTo="#766000"

            title="Gold Tier"
            titleColor="black"
            // titleColor="white"
            title2="25"
            titleColor2="black"
            // price="$100"
            desc1="100"
            // desc2="Premium Tier"
            desc2="Referral Commission: 25% Partner Store Discounts: 15%-20%"
            desc3="Be Eligible to Apply for Winlad GOLD Card"
            desc4="Access to Winlad Store Cash Back  program"
            desc5="Access to Winlads Urgency Program"
            desc6="Access to Winlads Public Events"
            desc7="Access to upcoming Winlad Apps & Tools"
            // descColor="white"
            buttonColor="#000000"
            buttonColor2="#000000"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP NOW"
            btnword2="ONE OFF PACKAGES"
            yValue={-80}
          />
          <Card
            packageId={'657c77b68406aeb95f876cb6'}
            bgColorFrom="#23282E"
            bgColorTo="#000"
            title="Black Tier"

            titleColor="white"
            // titleColor="white"
            title2="150"
            titleColor2="#FFF"
            // price="$500"
            desc1="500"
            desc2="Referral Commission: 50%"
            desc3="Customized Partner Store discount rates ranging upto 20%"
            desc4="Be Eligible to Apply for Winlad BLACK Card"
            desc5="Access to Winlad Store Cash Back program"
            desc6="Exclusive perks and privileges tailored for Black Tier members"
            desc7="Winlads OG member Eligibility after 6 months ( Which Gives an opportunity to make decisions with Voting Power in Winlads DAO system)"
            desc8="Access to Winlads Urgency Program"
            desc9="Access to Winlads limited and Public Events - Access to Winlads apps and tools"
            // descColor="white"
            buttonColor="#475A79"
            buttonColor2="#475A79"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP NOW"
            btnword2="ONE OFF PACKAGES"
            yValue={-100}
            classNames={"col-span-1"}
          />
          {/* <Card />
        <Card />
        <Card /> */}
        </div>
      </div>
    </div>
  );
};

export default Packages;
