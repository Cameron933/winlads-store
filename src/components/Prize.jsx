import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const Prize = () => {
  return (
    <div className="flex flex-col pt-4">
      <div className="bg-[#0094FF] text-center py-2">
        <p className="font-bold text-white xl:text-2xl md:text-xl text-lg capitalize">
          first prize - mazda BT-50
        </p>
      </div>
      <div className="flex items-center xl:px-40 px-10 pt-12">
        {/* <ReactPlayer
        url="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        width="100%"
        height="100%"
        controls={true}
      /> */}
        <iframe
          src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="1920"
          height="400"
        //   frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Winlads"
        ></iframe>
      </div>
    </div>
  );
};

export default Prize;
