import { useState, useEffect } from "react";
import BgImg from "../assets/bgCar.png";
import video from "../assets/d1_countdown_bg.mp4";
const CountDown = () => {
  const divStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "500px",
  };

  const targetDate = new Date("January 24, 2024 16:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div
      style={divStyle}
      className="mt-4 flex py-0 text-center relative justify-center flex-col"
    >
      <video
        src={video}
        className="w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted
      ></video>
      <div className="bg-gradient-to-t from-black/75 to-black/50 absolute top-0 left-0 w-full h-full" />
      <div className="text-center flex justify-center flex-col absolute top-1/2 -translate-y-1/2 left-0 w-full">
        <p className="text-xl lg:text-4xl 2xl:text-5xl capitalize text-white font-semibold pb-12">
          District-1 VIP Packages Giveaway Ends in Jan 24th 4:00 pm AEST
        </p>

        <div className="flex flex-row justify-center text-[#f86a97] gap-4">
          <div className="flex flex-col">
            <p className="xl:text-6xl text-4xl">{timeRemaining.days}</p>
            <p className="xl:text-xl text-sm">Days</p>
          </div>
          <p className="xl:text-6xl text-4xl">:</p>
          <div className="flex flex-col">
            <p className="xl:text-6xl text-4xl">{timeRemaining.hours}</p>
            <p className="xl:text-xl text-sm">Hours</p>
          </div>
          <p className="xl:text-6xl text-4xl">:</p>
          <div className="flex flex-col">
            <p className="xl:text-6xl text-4xl">{timeRemaining.minutes}</p>
            <p className="xl:text-xl text-sm">Minutes</p>
          </div>
          <p className="xl:text-6xl text-4xl">:</p>
          <div className="flex flex-col">
            <p className="xl:text-6xl text-4xl">{timeRemaining.seconds}</p>
            <p className="xl:text-xl text-sm">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
