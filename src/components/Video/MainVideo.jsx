import React from "react";

const MainVideo =()=>{
    const videoURL =
    "https://video.wixstatic.com/video/d0f5b4_f42e547b98bf48efb6c241d8c1f50ba7/720p/mp4/file.mp4";

  return (
      <video name="media" className="h-full w-full" loop autoPlay muted>
        <source src={videoURL} type="video/mp4" />
        {/* <source src={videoURL} type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
  );
};

export default MainVideo;
