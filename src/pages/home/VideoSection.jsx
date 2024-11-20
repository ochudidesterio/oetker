import React from "react";
import VideoPlayer from "../../components/Video/VideoPlayer";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/motion/Variants";


const VideoSection = () => {
  return (
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
      <p className="font-inter text-sm text-secondary mt-5 px-[15%] max-md:px-[5%] ">
        Oetker Collection hotels are true masterpieces located in the world’s
        most desirable destinations. Each property is a landmark and a timeless
        icon of elegance. With deep devotion to local culture and community, our
        Hosts of Choice preserve a tradition of legendary European hospitality
        and genuine family spirit that began in 1872.
      </p>

      <section className="w-full mt-10">
        <div className="w-[55%] h-[400px] m-auto max-md:w-full max-md:h-[250px]">
          <VideoPlayer />
        </div>
      </section>
    </motion.section>
  );
};

export default VideoSection;
