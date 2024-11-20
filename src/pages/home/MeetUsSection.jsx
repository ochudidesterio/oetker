import React, { useState, useEffect } from "react";
import { paginationData } from "../../util/Constants";
import { MdPlayCircle } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { DiOpera } from "react-icons/di";



const MeetUsSection = () => {
  const [visibleCount, setVisibleCount] = useState(1); // Initially visible items
  const [itemsToLoad, setItemsToLoad] = useState(1); // Default items to load

  // Adjust itemsToLoad and grid layout based on screen size
  useEffect(() => {
    const updateItemsToLoad = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToLoad(4); // xl: 4 items
        setVisibleCount(4);
      } else if (width >= 768) {
        setItemsToLoad(3); // large: 3 items
        setVisibleCount(3);
      } else if (width >= 540) {
        setItemsToLoad(2); // medium: 2 items
        setVisibleCount(2);
      } else {
        setItemsToLoad(1); // small: 1 item
        setVisibleCount(1);
      }

    //   if(scrolled ){
    //     setItemsToLoad(itemsToLoad)
    //     setVisibleCount(visibleCount)
    //   }
    //   if(!scrolled){
    //     setItemsToLoad(itemsToLoad)
    //     setVisibleCount(visibleCount)
    //   }
    };

    updateItemsToLoad();
    window.addEventListener("resize", updateItemsToLoad);

    return () => {
      window.removeEventListener("resize", updateItemsToLoad);
    };
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + itemsToLoad); // Load items dynamically based on screen size
  };

  return (
    <div className="px-5 py-1">
      <h2 className="text-2xl font-montserrat text-center mb-6">
        Meet us on Instagram
      </h2>
      <div
        className={`grid gap-3 ${
          itemsToLoad === 4
            ? "grid-cols-4"
            : itemsToLoad === 3
            ? "grid-cols-3"
            : itemsToLoad === 2
            ? "grid-cols-2"
            : "grid-cols-1"
        }`}
      >
        {paginationData.slice(0, visibleCount).map((item) => (
          <HoverCard key={item.id} item={item} />
        ))}
      </div>
      {visibleCount < paginationData.length && (
        <div className="text-center mt-6">
          <div
            className=" text-secondary font-montserrat text-sm lowercase underline underline-offset-8 py-2 hover:text-accent transition duration-300"
            onClick={loadMore}
          >
            Load More
          </div>
        </div>
      )}
    </div>
  );
};

const HoverCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative   transition duration-300 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default content */}
      {!isHovered && (
        <div className="w-full">
          <img
            src={item.details[0].image}
            alt={item.name}
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <MdPlayCircle size={50} className="text-white opacity-70" />
          </div>
          <div className="absolute flex justify-end bottom-2 right-2 ">
            <FiInstagram size={30} className="text-white opacity-70" />
          </div>
          
        </div>
      )}

      {/* Hover content */}
      {isHovered && (
        <div className="absolute inset-0 bg-white flex flex-col items-center pt-5 ">
          <h3 className="text-lg font-cardo font-semibold text-accent">{item.name}</h3>
          <p className="text-center text-md font-cardo mt-2">{item.details[0].description}</p>
          <div className="absolute w-full bottom-0">
            <div className="w-full h-[0.5px] bg-accent"></div>
            <div className="w-full flex justify-between items-center  py-1 pr-2 pl-3">
                <div className="flex items-center ">
                    <DiOpera size={20} className="text-accent" />
                    <h2 className="text-accent uppercase text-sm font-cardo">ETKERCOLLECTION</h2>
                </div>
                <div>
                    <h2 className="text-gray-300 uppercase text-sm font-cardo">{item.details[0].duration}</h2>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetUsSection;
