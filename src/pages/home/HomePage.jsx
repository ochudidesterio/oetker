import React from "react";
import MainVideo from "../../components/Video/MainVideo";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomBreak from "../../components/CustomBreak";
import SocialMedia from "../../components/SocialMedia";
import VideoSection from "./VideoSection";
import DiscoverySection from "./DiscoverySection";
import MeetUsSection from "./MeetUsSection";

const HomePage = ({scrolled}) => {
  return (
    <div>
      <section className="h-full w-full">
        <MainVideo />
        <div className="absolute  flex flex-col items-center bottom-0 text-white font-cardo  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="cursor-pointer">SCROLL TO DISCOVER MORE</h2>
          <MdOutlineKeyboardArrowDown className="cursor-pointer" size={30} />
        </div>
      </section>

      <VideoSection/>
      <CustomBreak/>
      <DiscoverySection/>
      <CustomBreak/>
      <MeetUsSection scrolled={scrolled}/>
      <SocialMedia/>
    </div>
  );
};

export default HomePage;
