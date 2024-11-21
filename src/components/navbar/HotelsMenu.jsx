import React from "react";
import { carouselData } from "../../util/Constants";

const HotelsMenu = () => {
  // Calculate the midpoint for splitting the list
  const midpoint = Math.ceil(carouselData.length / 2);

  // Split the carouselData into two lists
  const listA = carouselData.slice(0, midpoint);
  const listB = carouselData.slice(midpoint);

  return (
    <div className="w-full bg-navdark bg-opacity-70 flex justify-center py-5 gap-3">
      <div className="pr-20">
        <ul>
          {listA.map((item, index) => (
            <li key={index} className="py-2">
              <a href={item.url} className="text-slate-300 text-sm font-montserrat hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-40 w-[1px] bg-white"></div>
      <div className="pl-5">
        <ul>
          {listB.map((item, index) => (
            <li key={index} className="py-2">
              <a href={item.url} className="text-slate-300 text-sm font-montserrat hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotelsMenu;
