import Header from "./components/Header";
import Hero from "./components/Hero";
import Level from "./components/Level";
import SecondSection from "./components/SecondSection"
import Reviews from "./components/Reviews";
import Shared from "./components/Shared";
import Footer from "./components/Footer"
import Winlads from "./components/Winlads"
import Partners from "./components/Partners";
import Footer2 from "./components/Footer2";
import Footer3 from "./components/Footer3";

function App() {
  return (
    <>
      <div className="relative pageBgColor">
        <Hero />
        <div className="absolute left-0 right-0 xl:pt-24">
        <Reviews />
        </div>
      
        <SecondSection />
    
        <Level />
        <Shared />
        <Winlads />
        {/* <Footer /> */}
        {/* <Footer2/> */}
        <Footer3/>
      </div>
    </>
  );
}

export default App;
