import React from "react";
import { carouselData } from "../../util/Constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import CustomButton from "../../components/CustomButton";

// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[-15px] top-1/4 transform -translate-y-1/2 z-10 cursor-pointer text-secondary"
      onClick={onClick}
    >
      <MdNavigateNext size={30} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[-15px]  top-1/4 transform -translate-y-1/2 z-10 cursor-pointer text-secondary"
      onClick={onClick}
    >
      <MdNavigateBefore size={30} />
    </div>
  );
};

const CarouselItem = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-10 max-md:px-5 ">
      <div className="w-full m-auto">
        <Slider {...settings}>
          {carouselData.map((item, index) => {
            return (
              <div key={index} className="border">
                <div>
                  <img
                    src={item.image}
                    className="w-full h-60 object-cover"
                    alt={item.city}
                  />
                </div>
                <div className="flex justify-center pt-4">
                  <h4 className="font-cardo text-secondary text-sm uppercase ">
                    {item.city} - {item.country}
                  </h4>
                </div>
                <div className="flex justify-center pt-4">
                  <h4 className="text-xl font-montserrat">{item.title}</h4>
                </div>
                <div className="w-full px-2 h-20 pt-4">
                  <p className="text-center text-secondary text-sm font-inter ">
                  {item.description}
                </p>
                </div>
                
                <div className="w-full flex justify-center items-center gap-2 mt-7 pb-6">
                  <a
                    href={item.url}
                    className="text-lg text-secondary font-cardo underline underline-offset-8 hover:text-accent"
                  >
                    discover more
                  </a>
                  <CustomButton />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselItem;
