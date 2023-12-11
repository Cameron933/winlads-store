import Logo from "../assets/headerLogo.png";

const Header = () => {
  return (
    <div id="header" className="flex flex-row justify-between">
      <div className="flex flex-row justify-between xl:gap-8 md:gap-8 gap-4">
        <div className="rounded-full px-2 py-1 border border-solid border-[#01819D] items-center justify-center cursor-pointer flex flex-row gap-2">
          <img src={Logo} alt="" className="w-1/3" />
          <p className="text-[#01819D] text-xs xl:text-lg md:text-lg">Winlads</p>
        </div>
        <div className="flex flex-row gap-2 uppercase text-[#01819D] items-center cursor-pointer 2xl:text-lg">
          <a href="" className="text-md hover:font-bold">login</a>
          {/* <p className="text-xs hover:font-bold">register</p> */}
          <p className="text-md hover:font-bold">language</p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="buttonColor px-4 py-2 rounded-md flex hover:bg-[#76EBF3]">
          <button className="text-white font-semibold xl:text-sm md:text-sm text-xs 2xl:text-lg xl:px-7 2xl:px-7">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
