import { useEffect } from "react";
import Hero from "../components/Hero";
import Level from "../components/Level";
import Reviews from "../components/Reviews";
import SecondSection from "../components/SecondSection";
import Shared from "../components/Shared";
//import Winlads from "../components/Winlads"
import Footer3 from "../components/Footer3";
import WinladsNew from "../components/WinladsNew";
import BgImg from "../assets/bgCar.png";
import Sec2 from "../components/Sec2";
import NewGallery from "../components/NewGallery";
import Partners from "../components/Partners";
import Packages from "../components/Packages";
import Faq from "../components/Faq";
import Prize from "../components/Prize";
import Apps from "../components/Apps";
import Map from "../components/Map";
import Welcome from "../components/Welcome";
import Gallery from "../components/Gallery";
import Partners2 from "../components/Partners2";
import { useParams } from "react-router";


// import InstagramGalleryViewer from "../components/InstagramGallery"


const Home = () => {
  const { id } = useParams();
  const scrollTo = (target) => {
  
    const otherComponentElement = document.getElementById(target);
  
    if (otherComponentElement) {
      otherComponentElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    console.log('ID IS : ' + id);
  if (id !== undefined) {
    setTimeout(()=>{
      scrollTo(id);
    },2000)
    scrollTo(id);
  } else {
    console.log('No ID in the URL');
  }
  },[id])

  return (
    <div className="relative pageBgColor">
      <Hero />
      {/* <div className="absolute left-0 right-0 xl:pt-24">
    <Reviews />
    </div> */}
      <Packages />
      <Sec2 />
      <Partners />
      <Map />
      {/* <Prize /> */}
      <Welcome />
      {/* <SecondSection /> */}
      <Gallery />

      <Partners2 />
      <Apps />
      <Faq />
      <Level />
      {/* <Shared /> */}
      <NewGallery />
      {/* <InstagramGalleryViewer/> */}
      {/* <Winlads /> */}
      {/* <WinladsNew/> */}
      <Footer3 />
    </div>
  );
};

export default Home;
