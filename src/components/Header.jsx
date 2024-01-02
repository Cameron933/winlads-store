import { Link } from "react-router-dom";
import Logo from "../assets/headerLogo.png";

const Header = () => {
  return (
    <div id="header" className="flex flex-row justify-between">
      <div className="flex flex-row justify-between xl:gap-8 md:gap-8 gap-2">
        <div className="rounded-full px-2 py-1 border border-solid bg-black items-center justify-center cursor-pointer flex flex-row gap-2">
          <img src={Logo} alt="" className="w-1/3" />
          <p className="text-white text-xs xl:text-lg md:text-lg">Winlads</p>
        </div>
        <div className="flex flex-row gap-2 uppercase text-black items-center cursor-pointer 2xl:text-lg">
          <a
            href="https://www.winlads.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xs md:text-md hover:font-bold">Login</p>
          </a>

          {/* <p className="text-xs hover:font-bold">register</p> */}
          {/* <p className="text-xs md:text-md hover:font-bold">language</p> */}
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-black px-4 py-2 rounded-md flex hover:bg-black/75">
          <button className="text-white font-semibold xl:text-sm md:text-sm text-xs 2xl:text-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
