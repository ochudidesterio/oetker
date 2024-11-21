import React, { useState } from "react";
import { menuItems } from "../../util/Constants";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/Variants";

const MenuItems = ({showHotelsMenu}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Tracks the hovered item index

  const updateHoveredIndex = (index)=>{
    setHoveredIndex(index)
    showHotelsMenu(index)
  }
  

  return (
    <motion.div
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false }}
      className="w-full flex  justify-center items-center gap-3 bg-white py-4 max-md:flex-col max-md:h-screen max-md:bg-accent max-md:justify-stretch "
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`relative flex justify-center items-center max-md:py-4 ${
            item.icon ? "" : "py-0"
          }`}
          onMouseEnter={() => updateHoveredIndex(index)}
        >
          <a
            href={item.url}
            className="uppercase font-montserrat text-sm hover:underline underline-offset-4"
          >
            {item.name}
          </a>
          {item.icon && (
            <>
              {hoveredIndex === index ? (
                <MdKeyboardArrowUp
                  size={20}
                  className="absolute max-md:hidden bottom-[-15px]"
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  size={20}
                  className="absolute max-md:hidden bottom-[-15px]"
                />
              )}
            </>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default MenuItems;
