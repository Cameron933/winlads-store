import Logo from "../assets/headerLogo.png";

const DisOneHeader = () => {
  const handleClick = () => {
    window.dataLayer.push({
      event: "signup_button_click",
    });

    window.location.href = "https://www.winlads.com/register-district-1";
  };

  return (
    <div id="header" className="flex flex-row justify-between">
      <div className="flex flex-row justify-between xl:gap-8 md:gap-8 gap-2">
        <div className="rounded-full px-2 py-1 border border-solid bg-black items-center justify-center cursor-pointer flex flex-row gap-2">
          <img src={Logo} alt="" className="w-1/3" />
          <p className="text-white text-xs xl:text-lg md:text-lg">Winlads</p>
        </div>
        <div className="flex flex-row gap-2 uppercase text-black items-center cursor-pointer 2xl:text-lg"></div>
      </div>
    </div>
  );
};

export default DisOneHeader;
