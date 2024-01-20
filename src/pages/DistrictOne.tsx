import React from "react";
import { useEffect } from "react";
import DisOneHero from "../components/DisOneHero";
import DisOneLevel from "../components/DisOneLevel";
import Footer3 from "../components/Footer3";
import NewGallery from "../components/NewGallery";
import DisOnePackages from "../components/DisOnePackages";
import DisOneFaq from "../components/DisOneFaq";
import DisOneApps from "../components/DisOneApps";
import DisOneRoadMap from "../components/DisOneRoadMap";
import Gallery from "../components/Gallery";
import Partners2 from "../components/Partners2";
import { useParams } from "react-router";
import CountDown from "../components/DisOneCountDown";
import PrizeGroup from "../components/PrizeGroup";
import DisOneBanner from "../components/DisOneBanner";

const DistrictOne = () => {
  const { id } = useParams();

  const scrollTo = (target) => {
    const otherComponentElement = document.getElementById(target);

    if (otherComponentElement) {
      otherComponentElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    console.log("ID IS : " + id);
    if (id !== undefined) {
      setTimeout(() => {
        scrollTo(id);
      }, 4000);
    } else {
      console.log("No ID in the URL");
    }
  }, []);

  return (
    <div className="relative pageBgColorDisOne">
      <DisOneHero />
      <DisOnePackages />
      <CountDown />
      <DisOneBanner />
      <DisOneRoadMap />
      <PrizeGroup />
      <Gallery />
      <Partners2 />
      <DisOneApps />
      <DisOneFaq />
      <DisOneLevel />
      <NewGallery />
      <Footer3 />
    </div>
  );
};

export default DistrictOne;
