import React from "react";
import { FaTiktok, FaInstagram, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { BsSinaWeibo } from "react-icons/bs";
import { LiaMailBulkSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { fadeIn } from "./motion/Variants";

const SocialMedia = () => {
  return (
    <motion.div
     variants={fadeIn("up", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: false }}
     className="w-full flex flex-col justify-center items-center pt-20">
      <div className="text-xl font-cardo">#MasterpieceHotels</div>
      <div className="flex gap-8 py-6 max-md:gap-4">
        {[
          { icon: <FaTiktok size={20}  />, label: "TIK TOK" },
          { icon: <FaInstagram size={20} />, label: "INSTAGRAM" },
          { icon: <FaFacebookF size={20} />, label: "FACEBOOK" },
          { icon: <FaLinkedin size={20} />, label: "LINKEDIN" },
          { icon: <FaYoutube size={20} />, label: "YOU TUBE" },
          { icon: <AiFillWechat size={20} />, label: "WECHAT" },
          { icon: <BsSinaWeibo size={20} />, label: "SINA WEIBO" },
          { icon: <LiaMailBulkSolid size={20} />, label: "NEWS LETTER" },
        ].map(({ icon, label }, index) => (
          <div key={index} className="flex flex-col items-center group max-sm:w-[24px] ">
            <div className="text-accent ">{icon}</div>
            <h6 className="text-[10px] max-md:text-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {label}
            </h6>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialMedia;
