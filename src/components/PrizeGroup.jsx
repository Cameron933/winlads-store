import Prize from "../assets/prize.png";

const PrizeGroup = () => {
  return (
    <div className="flex flex-col px-10 xl:px-20 gap-8">
      <div className="flex xl:flex-row flex-col xl:items-center">
        <div className="flex flex-col flex-1 items-center">
          <div className="bg-[#0094FF] text-center py-2 w-full xl:text-xl text-lg">
            <p className="font-bold text-white capitalize">
              first prize - mazda BT-50
            </p>
          </div>
          <div className="flex md:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="310"
              height="180"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden md:flex pro:hidden xl:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="690"
              height="390"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden pro:flex xl:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="900"
              height="510"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden xl:flex 2xl:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="680"
              height="380"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden 2xl:flex special:hidden">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="780"
              height="430"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
          <div className="hidden special:flex">
            <iframe
              src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="1650"
              height="930"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Winlads"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row md:flex-row flex-col items-center gap-8 justify-between">
        <div className="flex flex-col xl:flex-1 w-full hover:scale-105 hover:cursor-pointer transition-transform duration-300 onClick={handleClick}">
          <a
            href="https://www.winlads.com/register-district-1"
            className="w-full"
          >
            <div className="bg-[#0094FF] text-center text-white py-2 xl:text-xl text-lg font-bold">
              Second Prize - $ 2000
            </div>
            <div
              className="flex flex-row justify-between pr-2 pt-2"
              style={{
                background: `linear-gradient(90deg, #366B71 0%, #000608 100%)`,
              }}
            >
              <img src={Prize} alt="" className="md:w-24 w-24 xl:w-36" />
              <div className="flex flex-col space-y-2 items-end pt-2 text-lg">
                <div
                  className="text-center text-white py-1 px-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #01F336 100%, #008C1F 100%)",
                  }}
                >
                  Cash Prize
                </div>
                <p className="font-semibold uppercase text-white text-xl">
                  $ 2000
                </p>
                <p className="text-sm text-white">2024-Jan-24 WEDNESDAY</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col xl:flex-1 w-full hover:scale-105 hover:cursor-pointer transition-transform duration-300">
          <a
            href="https://www.winlads.com/register-district-1"
            className="w-full"
          >
            <div className="bg-[#0094FF] text-center text-white font-bold py-2 xl:text-xl text-lg">
              Third Prize - $ 1000
            </div>
            <div
              className="flex flex-row justify-between pr-2 pt-2 "
              style={{
                background: `linear-gradient(90deg, #366B71 0%, #000608 100%)`,
              }}
            >
              <img src={Prize} alt="" className="md:w-24 w-24 xl:w-36" />
              <div className="flex flex-col space-y-2 items-end pt-2 text-lg">
                <div
                  className="text-center text-white py-1 px-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #01F336 100%, #008C1F 100%)",
                  }}
                >
                  Cash Prize
                </div>
                <p className="font-semibold uppercase text-white text-xl">
                  $ 1000
                </p>
                <p className="text-sm text-white">2024-Jan-24 WEDNESDAY</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrizeGroup;
