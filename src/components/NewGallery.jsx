import React from "react";
import NewLogo from "../assets/winLogo.png";
import Img1 from "../assets/gallery/img1.png";
import Img2 from "../assets/gallery/img2.png";
import Img3 from "../assets/gallery/img3.png";
import Img4 from "../assets/gallery/img4.png";
import Img5 from "../assets/gallery/img5.png";
import { motion } from "framer-motion";

const NewGallery = () => {
  return (
    <div className="flex flex-col xl:space-y-8 space-y-4 py-8">
      <div className="flex justify-center">
        <motion.img
          src={NewLogo}
          className="w-48 xl:w-72"
        />
      </div>
      <div className="grid grid-cols-4 xl:px-20 md:px-10 px-5 gap-2">
        <div className="col-span-5 md:col-span-1 flex flex-col gap-2 rounded-2xl">
          <div className="flex flex-col gap-2 overflow-hidden rounded-2xl">
            <motion.img src={Img1}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ ease: 'backInOut', duration: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer rounded-2xl" />
            <motion.img src={Img2}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: 'backInOut', duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer rounded-2xl" />
          </div>
        </div>
        <div className="col-span-5 md:col-span-2 overflow-hidden relative rounded-2xl">
          <div className="hover:scale-105 duration-500 cursor-pointer relative rounded-2xl">
            <div className="absolute z-10 left-0 w-full bottom-10 text-white text-center px-5">
              <h3 className="2xl:text-5xl md:text-xl text-lg font-semibold uppercase md:mb-10 mb-5">join Us on the Journey</h3>
              <p className="text-xs">We invite you to join us on this meaningful journey of giving back. Together, we can forge a future where individuals thrive, communities flourish, and hope prevails. Your support and participation in our charitable initiatives empower us to create a world where compassion and kindness reign supreme, ensuring that no one is left behind.</p>
            </div>
            <div className="bg-gradient-to-b from-transparent to-black absolute w-full h-full top-0 left-0" />
            <motion.img src={Img3} alt=""
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ ease: 'backInOut', duration: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-full object-cover  cursor-pointer rounded-2xl" />
          </div>
        </div>
        <div className="col-span-5 md:col-span-1 rounded-2xl">
          <div className="flex flex-col gap-2 overflow-hidden rounded-2xl">
            <motion.img src={Img4} alt=""
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ ease: 'backInOut', duration: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer rounded-2xl" />
            <motion.img src={Img5} alt=""
              initial={{ y: 50,opacity:0 }}
              whileInView={{ y: 0,opacity:1 }}
              transition={{ ease: 'backInOut', duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGallery;
