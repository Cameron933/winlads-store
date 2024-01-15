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
        <div className="flex flex-col">
            <div className="flex flex-col space-y-2">
                <div className="grid xl:grid-cols-3 grid-cols-1 items-center xl:min-h-screen">
                    <div
                        style={{
                            backgroundImage: `url(${BG1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="flex flex-col space-y-4 p-4 rounded-tr-xl h-full"
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
                    <div className="flex flex-col space-y-4 py-5 px-4">
                        <div className="flex flex-row space-x-2 items-center justify-center pb-4">
                            <img src={Logo} alt="" className="xl:w-16 w-12" />
                            <p className="text-black xl:text-4xl text-3xl">Winlads</p>
                        </div>
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
                    <div className="row-span-3 bg-black col-span-1 h-full">
                        <img src={BG4} className="w-full h-full object-cover" />
                    </div>

                    {/* SECOND ROW */}

                    <div className="col-span-1 flex flex-col bg-[#F59E0B] h-full px-4">
                        <div className="mt-2 bg-white text-black xl:pr-4 text-3xl mr-4 mb-4">
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
                    <div className="cols-span-1 flex justify-center row-span-2 h-full ">
                        <iframe
                            src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            width="100%"
                            height="100%"
                            allow="autoplay; fullscreen; picture-in-picture"
                            title="Winlads"
                            className="object-cover w-full h-full"
                        ></iframe>
                    </div>

                    {/* THIRD ROW */}
                    <div
                        style={{
                            backgroundImage: `url(${BG3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="flex flex-col space-y-4 p-4 h-full"
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
                </div>
            </div>

        </div>
    );
};

export default Banners;



