import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const VideoPlayer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dprenxycq", 
    },
  });

  const video = cld.video("pinnacle001"); 

  return (
    <div className="relative w-full h-full">
      <AdvancedVideo
        cldVid={video}
        controls
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;
