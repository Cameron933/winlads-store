const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2 uppercase text-[#01819D] items-center">
        <p className="text-xs">login</p>
        <p className="text-xs">register</p>
        <p className="text-xs">language</p>
      </div>
      <div className="flex justify-end">
        <div className="buttonColor px-4 py-2 rounded-md flex hover:bg-[#76EBF3]">
          <button className="text-white font-semibold text-xs">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
