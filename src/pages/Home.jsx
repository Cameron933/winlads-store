import Hero from "../components/Hero"
import Level from "../components/Level"
import Reviews from "../components/Reviews"
import SecondSection from "../components/SecondSection"
import Shared from "../components/Shared"
import Winlads from "../components/Winlads"
import Footer3 from "../components/Footer3";

const Home = () => {
  return (
    <div className="relative pageBgColor">
    <Hero />
    <div className="absolute left-0 right-0 xl:pt-24">
    <Reviews />
    </div>
  
    <SecondSection />

    <Level />
    <Shared />
    <Winlads />
    <Footer3/>
  </div>
  )
}

export default Home
