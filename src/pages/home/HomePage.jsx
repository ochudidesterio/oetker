import React from "react";
import MainVideo from "../../components/Video/MainVideo";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/motion/Variants";
import VideoPlayer from "../../components/Video/VideoPlayer";
import CustomBreak from "../../components/CustomBreak";
import SocialMedia from "../../components/SocialMedia";

const HomePage = () => {
  return (
    <div>
      <section className="h-full w-full">
        <MainVideo />
        <div className="absolute  flex flex-col items-center bottom-0 text-white font-merriweather  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="cursor-pointer">SCROLL TO DISCOVER MORE</h2>
          <MdOutlineKeyboardArrowDown className="cursor-pointer" size={30} />
        </div>
      </section>

      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false }}
        className="w-[90%] m-auto  text-center"
      >
        <div className="flex justify-center items-center mt-8">
          <div className="w-10 h-[1px] bg-black max-md:hidden "></div>
          <h3 className="text-3xl px-2 font-montserrat ">
            SOME PLACES LIVE IN OUR HEART FOREVER
          </h3>
          <div className="w-10 h-[1px] bg-black  max-md:hidden"></div>
        </div>
        <p className="font-merriweather text-sm text-secondary mt-5 px-[15%] ">
          Oetker Collection hotels are true masterpieces located in the world’s
          most desirable destinations. Each property is a landmark and a
          timeless icon of elegance. With deep devotion to local culture and
          community, our Hosts of Choice preserve a tradition of legendary
          European hospitality and genuine family spirit that began in 1872.
        </p>
      </motion.section>
      <section className="w-full mt-10">
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false }}
        className="w-[55%] h-[400px] m-auto max-md:w-full max-md:h-[250px]"
        >
             <VideoPlayer/>
        </motion.div>

      </section>
      <CustomBreak/>
      <SocialMedia/>
    </div>
  );
};

export default HomePage;
