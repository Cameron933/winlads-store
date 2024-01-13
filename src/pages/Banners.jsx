import React from "react";
import Logo from "../assets/banner/logo.png";
import BG1 from "../assets/banner/bg-1.png";
import BG2 from "../assets/banner/bg-2.png";
import BG3 from "../assets/banner/bg-3.png";
import BG4 from "../assets/banner/bg-4.png";
import IMG1 from "../assets/banner/img-1.png";
import IMG2 from "../assets/banner/img-2.png";
import IMG3 from "../assets/banner/img-3.png";
import IMG4 from "../assets/banner/img-4.png";

const Banners = () => {
  return (
    <div className="flex flex-col py-4 px-4">
      <div className="flex flex-row space-x-2 items-center justify-center pb-4">
        <img src={Logo} alt="" className="xl:w-16 w-12" />
        <p className="text-black xl:text-4xl text-3xl">Winlads</p>
      </div>
      <div className="xl:flex flex-col space-y-2 hidden">
        <div className="grid grid-cols-3 items-center space-x-2">
          <div
            style={{
              backgroundImage: `url(${BG1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex flex-col space-y-4 p-4 rounded-tr-xl"
          >
            <p className="text-start text-white text-2xl">
              Empowering Lives Through
              <br /> Winlads: A Journey of
              <br /> Giving Back
            </p>
            <p className="text-end text-white  text-xs flex justify-end">
              At Winlads, our pursuit extends beyond creating exceptional
              experiences; it encompasses a heartfelt dedication to transforming
              lives and fostering positive change within communities. We firmly
              believe in the profound impact of giving back and are driven by a
              vision to make a meaningful difference in the lives of individuals
              worldwide.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-center">
              At Winlads, we understand the allure of luxury and aim to make it
              an accessible reality for our members. The LuxeLife Rewards
              program encapsulates the epitome of elegance and extravagance,
              ensuring that every member relishes the experience of living life
              in the lap of luxury.
            </p>
            <div className="flex flex-row space-x-4 items-center justify-center">
              <button className="bg-black hover:opacity-75 uppercase rounded-lg py-4 px-6 text-xs font-semibold text-white">
                sign up now
              </button>
              <button className="bg-[#F59E0B] hover:opacity-75 capitalize rounded-lg py-4 px-6 text-xs font-semibold text-black">
                One Of Package
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${BG2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex flex-col space-y-4 p-4 rounded-tl-xl"
          >
            <p className="text-end text-white text-2xl">
              Enabling Transformation:
            </p>
            <p className="text-start text-white  text-xs flex justify-end">
              Our philanthropic journey is rooted in a profound commitment to
              social responsibility. We strive to empower those in need,
              amplifying the possibilities for a brighter, more promising
              future. From supporting underprivileged communities to extending a
              helping hand during critical times, Winlads is dedicated to making
              a tangible difference where it matters most.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 space-x-2 items-center">
          <div className="col-span-1 flex flex-col bg-[#F59E0B]">
            <div className="mt-2 bg-white text-black pr-4 text-3xl mr-4 mb-4">
              Winlads LuxLife (formerly
              <br /> Winlads Luxury Program):
            </div>
            <div className="flex flex-row items-center gap-1">
              <p className="text-xs text-center">
                "Indulge in luxury with Winlads Lux. Experience weekly giveaways
                and exclusive offerings, elevating your lifestyle and adding a
                touch of opulence to your days."
              </p>
              <div>
                <img src={IMG1} alt="" />
              </div>
            </div>
          </div>
          <div className="cols-span-1 flex justify-center">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="400"
              height="180"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="col-span-1 flex flex-col bg-[#F59E0B]">
            <div className="mt-2 bg-white text-black pl-4 text-3xl ml-8 mb-4 text-start">
              Winlads Referral
              <br /> System:
            </div>
            <div className="flex flex-row items-center gap-1">
              <div>
                <img src={IMG2} alt="" />
              </div>
              <p className="text-xs text-center">
                "Unlock rewards and passive income through Winlads Referral
                System. Refer friends and family, earn commissions, and watch
                your network grow organically. "
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 space-x-2">
          <div
            style={{
              backgroundImage: `url(${BG3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex flex-col space-y-4 p-4"
          >
            <p className="text-start text-white text-2xl">
              Partnering with Purpose:
            </p>
            <p className="text-end text-white  text-xs flex justify-end">
              We collaborate with esteemed charitable organizations and
              foundations to channel our efforts effectively. These partnerships
              enable us to amplify our impact and reach, extending assistance to
              diverse causes such as education, healthcare, environmental
              conservation, and socio-economic development.
            </p>
          </div>

          <div className="flex flex-col bg-[#F59E0B]">
            <div className="mt-2 bg-white text-black mx-4 text-3xl pl-4  mb-4">
              Winlads LuxeLife Rewards:
              <br /> Elevating Your Lifestyle
            </div>
            <div className="flex flex-row items-center gap-1">
              <div>
                <img src={IMG3} alt="" />
              </div>
              <p className="text-xs text-center">
                Embark on an opulent journey with Winlads LuxeLife Rewards – an
                exclusive program curated to indulge members in premium and
                luxury experiences
              </p>
              <div>
                <img src={IMG4} alt="" />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${BG4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex flex-col space-y-4 p-4 rounded-tr-xl"
          >
            <p className="text-end text-white text-2xl">
              Join Us on the Journey:
            </p>
            <p className="text-start text-white  text-xs flex justify-end">
              We invite you to join us on this meaningful journey of giving
              back. Together, we can forge a future where individuals thrive,
              communities flourish, and hope prevails. Your support and
              participation in our charitable initiatives empower us to create a
              world where compassion and kindness reign supreme, ensuring that
              no one is left behind.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:hidden space-y-4">
        <div className="flex flex-col space-y-4">
          <p className="text-center">
            At Winlads, we understand the allure of luxury and aim to make it an
            accessible reality for our members. The LuxeLife Rewards program
            encapsulates the epitome of elegance and extravagance, ensuring that
            every member relishes the experience of living life in the lap of
            luxury.
          </p>
          <div className="flex flex-row space-x-4 items-center justify-center">
            <button className="bg-black hover:opacity-75 uppercase rounded-lg py-4 px-6 text-xs font-semibold text-white">
              sign up now
            </button>
            <button className="bg-[#F59E0B] hover:opacity-75 capitalize rounded-lg py-4 px-6 text-xs font-semibold text-black">
              One Of Package
            </button>
          </div>
        </div>
        <div className="cols-span-1 flex justify-center">
          <div className="block md:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="400"
              height="200"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden md:block">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="500"
              height="280"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BG1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col space-y-4 p-4 rounded-tr-xl"
        >
          <p className="text-start text-white text-xl">
            Empowering Lives Through
            <br /> Winlads: A Journey of
            <br /> Giving Back
          </p>
          <p className="text-end text-white  text-xs flex justify-end">
            At Winlads, our pursuit extends beyond creating exceptional
            experiences; it encompasses a heartfelt dedication to transforming
            lives and fostering positive change within communities. We firmly
            believe in the profound impact of giving back and are driven by a
            vision to make a meaningful difference in the lives of individuals
            worldwide.
          </p>
        </div>
        <div className="col-span-1 flex flex-col bg-[#F59E0B]">
          <div className="mt-2 bg-white text-black pr-4 text-2xl mr-4 mb-4">
            Winlads LuxLife (formerly
            <br /> Winlads Luxury Program):
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-xs text-center px-2">
              "Indulge in luxury with Winlads Lux. Experience weekly giveaways
              and exclusive offerings, elevating your lifestyle and adding a
              touch of opulence to your days."
            </p>
            <div>
              <img src={IMG1} alt="" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BG3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col space-y-4 p-4"
        >
          <p className="text-start text-white text-2xl">
            Partnering with Purpose:
          </p>
          <p className="text-end text-white  text-xs flex justify-end">
            We collaborate with esteemed charitable organizations and
            foundations to channel our efforts effectively. These partnerships
            enable us to amplify our impact and reach, extending assistance to
            diverse causes such as education, healthcare, environmental
            conservation, and socio-economic development.
          </p>
        </div>
        <div className="flex flex-col bg-[#F59E0B]">
          <div className="mt-2 bg-white text-black mx-4 text-2xl pl-4  mb-4">
            Winlads LuxeLife Rewards:
            <br /> Elevating Your Lifestyle
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              <img src={IMG3} alt="" />
            </div>
            <p className="text-xs text-center">
              Embark on an opulent journey with Winlads LuxeLife Rewards – an
              exclusive program curated to indulge members in premium and luxury
              experiences
            </p>
            <div>
              <img src={IMG4} alt="" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BG2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col space-y-4 p-4 rounded-tl-xl"
        >
          <p className="text-end text-white text-2xl">
            Enabling Transformation:
          </p>
          <p className="text-start text-white  text-xs flex justify-end">
            Our philanthropic journey is rooted in a profound commitment to
            social responsibility. We strive to empower those in need,
            amplifying the possibilities for a brighter, more promising future.
            From supporting underprivileged communities to extending a helping
            hand during critical times, Winlads is dedicated to making a
            tangible difference where it matters most.
          </p>
        </div>
        <div className="col-span-1 flex flex-col bg-[#F59E0B]">
          <div className="mt-2 bg-white text-black pl-4 text-3xl ml-8 mb-4 text-start">
            Winlads Referral
            <br /> System:
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              <img src={IMG2} alt="" />
            </div>
            <p className="text-xs text-center">
              "Unlock rewards and passive income through Winlads Referral
              System. Refer friends and family, earn commissions, and watch your
              network grow organically. "
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BG4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col space-y-4 p-4 rounded-tr-xl"
        >
          <p className="text-end text-white text-2xl">
            Join Us on the Journey:
          </p>
          <p className="text-start text-white  text-xs flex justify-end">
            We invite you to join us on this meaningful journey of giving back.
            Together, we can forge a future where individuals thrive,
            communities flourish, and hope prevails. Your support and
            participation in our charitable initiatives empower us to create a
            world where compassion and kindness reign supreme, ensuring that no
            one is left behind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banners;
