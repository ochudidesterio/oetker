import React from "react";

const MainVideo =()=>{
    const videoURL =
    "https://res.cloudinary.com/dprenxycq/video/upload/v1732090230/pinnacle001.mp4";

  return (
      <video name="media" className="h-full w-full" loop autoPlay muted>
        <source src={videoURL} type="video/mp4" />
        {/* <source src={videoURL} type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
  );
};

export default MainVideo;
