import { motion } from "framer-motion";
import Banner1 from "../assets/banner/banner1.jpg";
import Banner2 from "../assets/banner/banner2.jpg";

const DisOneBanner = () => {
  return (
    <div className="w-full pt-4 flex flex-col gap-6 md:flex-row items-center justify-center">
      <motion.img className="h-auto w-2/5" src={Banner1} />
      <motion.img className="h-auto w-2/5" src={Banner2} />
    </div>
  );
};

export default DisOneBanner;
