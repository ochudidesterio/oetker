import React, { useState, useEffect } from "react";
import { paginationData } from "../../util/Constants";
import { MdPlayCircle } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { DiOpera } from "react-icons/di";

const MeetUsSection = () => {
  const [visibleCount, setVisibleCount] = useState(1); // Initially visible items
  const [itemsToLoad, setItemsToLoad] = useState(1); // Default items to load

  useEffect(() => {
    const updateItemsToLoad = () => {
      const width = window.innerWidth;
      let newItemsToLoad = 1; // Default to small screen
      if (width >= 1024) {
        newItemsToLoad = 4; // xl: 4 items
      } else if (width >= 768) {
        newItemsToLoad = 3; // large: 3 items
      } else if (width >= 540) {
        newItemsToLoad = 2; // medium: 2 items
      }
      setItemsToLoad(newItemsToLoad);

      // Update visible count only during initialization
      if (visibleCount === 1) {
        setVisibleCount(newItemsToLoad);
      }
    };

    updateItemsToLoad();
    window.addEventListener("resize", updateItemsToLoad);

    return () => {
      window.removeEventListener("resize", updateItemsToLoad);
    };
  }, [visibleCount]); // Only trigger if `visibleCount` changes

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsToLoad, paginationData.length));
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
            className="text-secondary font-montserrat text-sm lowercase underline underline-offset-8 hover:text-accent transition duration-300"
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

  const handleClick = ()=>{
    console.log("Item",item)
  }

  return (
    <div
      className="relative transition duration-300 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
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
          <div className="absolute flex justify-end bottom-2 right-2">
            <FiInstagram size={30} className="text-white opacity-70" />
          </div>
        </div>
      )}
      {isHovered && (
        <div className="absolute inset-0 bg-white flex flex-col items-center pt-5">
          <h3 className="text-lg font-cardo font-semibold text-accent">
            {item.name}
          </h3>
          <p className="text-center text-md font-cardo mt-2">
            {item.details[0].description}
          </p>
          <div className="absolute w-full bottom-0">
            <div className="w-full h-[0.5px] bg-accent"></div>
            <div className="w-full flex justify-between items-center py-1 pr-2 pl-3">
              <div className="flex items-center">
                <DiOpera size={20} className="text-accent" />
                <h2 className="text-accent uppercase text-sm font-cardo">
                  ETKERCOLLECTION
                </h2>
              </div>
              <div>
                <h2 className="text-gray-300 uppercase text-sm font-cardo">
                  {item.details[0].duration}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetUsSection;
