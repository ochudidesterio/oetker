import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/motion/Variants";
import CarouselItem from "./CarouselItem";

const DiscoverySection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h2 className="text-2xl text-secondary font-montserrat ">
          Discover our hotels
        </h2>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false }}
        className="w-full mt-10"
      >
        <CarouselItem />
      </motion.div>
    </div>
  );
};

export default DiscoverySection;
