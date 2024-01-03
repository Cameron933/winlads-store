import Hero from "../components/Hero"
import Level from "../components/Level"
import Reviews from "../components/Reviews"
import SecondSection from "../components/SecondSection"
import Shared from "../components/Shared"
//import Winlads from "../components/Winlads"
import Footer3 from "../components/Footer3";
import WinladsNew from "../components/WinladsNew"
import BgImg from "../assets/bgCar.png"
import Sec2 from "../components/Sec2"
import NewGallery from "../components/NewGallery"
import Partners from "../components/Partners"
// import InstagramGalleryViewer from "../components/InstagramGallery"

const Home = () => {
  return (
    <div className="relative pageBgColor">
    <Hero />
    {/* <div className="absolute left-0 right-0 xl:pt-24">
    <Reviews />
    </div> */}
    <Sec2 />
  
    <SecondSection />
    {/* <Partners /> */}

    <Level />
    <Shared />
    <NewGallery />
    {/* <InstagramGalleryViewer/> */}
    {/* <Winlads /> */}
    {/* <WinladsNew/> */}
    <Footer3/>
  </div>
  )
}

export default Home
