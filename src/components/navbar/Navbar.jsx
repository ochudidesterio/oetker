import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import NavMenu from "./NavMenu";
import NavButton from "./NavButton";
import MenuItems from "./MenuItems";
import HotelsMenu from "./HotelsMenu";

const Navbar = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMouseLeave, setIsMouseLeave] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen,setIsMenuOpen]= useState(false)
  const [menuItemIndex,setMenuItemIndex] = useState(-1)

  const [scrolled, setScrolled] = useState(false); // New state to track scroll

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
    setIsMouseLeave(false);
  };
  const handleMouseLeave = () => {
    setIsMouseLeave(true);
    setIsMouseEnter(false);
  };
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownVisible(false);
    setIsMouseEnter(false);
  };
  const handleNavMenu =(isOpen)=>{
    setIsMenuOpen(isOpen)
  }

  const showHotelsMenu = (index)=>{
    setMenuItemIndex(index)
  }
  return (
    <div className="fixed top-0 left-0 z-50 w-full transition-all">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        //     className="fixed top-0 left-0 z-50 w-full flex justify-between items-center bg-navdark shadow-sm bg-opacity-70
        //  text-white hover:bg-white hover:text-secondary h-20 px-8"
        className={`w-full flex justify-between items-center px-8 transition-all ${
          scrolled
            ? "bg-white text-black shadow-lg"
            : "bg-navdark bg-opacity-70 text-white hover:bg-white hover:text-secondary"
        } h-20 border-b-[1px]`}
      >
        <div className="w-full max-sm:w-1/4">
          <NavMenu handleNavMenu={handleNavMenu} />
        </div>
        <div className="flex-col text-center w-full max-sm:w-1/2">
          <h1 className=" cursor-pointer  max-md:text-sm text-2xl font-montserrat">
            OETKER COLLECTION
          </h1>
          <h6 className="text-xs  cursor-pointer font-montserrat">
            Masterpiece Hotels
          </h6>
        </div>
        <div className="flex justify-end items-center gap-4 w-full max-sm:w-1/4 font-montserrat ">
          <div className="relative">
            <h5
              onClick={toggleDropdown}
              className="text-sm flex items-center cursor-pointer"
            >
              {language} <MdOutlineKeyboardArrowDown />
            </h5>
            {isDropdownVisible && (
              <div
                className={`absolute top-full mt-2 text-sm shadow-md ${
                  isMouseEnter && "bg-white text-black border-[0.5px] "
                }  ${isMouseLeave && "bg-navdark bg-opacity-70 text-white"} `}
              >
                <ul className="flex flex-col">
                  <li
                    className="hover:underline px-4 py-2 cursor-pointer"
                    onClick={() => handleLanguageChange("DE")}
                  >
                    DE
                  </li>
                  <li
                    className="hover:underline px-4 py-2 cursor-pointer"
                    onClick={() => handleLanguageChange("EN")}
                  >
                    EN
                  </li>
                  <li
                    className="hover:underline px-4 py-2 cursor-pointer"
                    onClick={() => handleLanguageChange("FR")}
                  >
                    FR
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a
            href="/contacts"
            className="text-sm hover:underline hover:underline-offset-4 hover:decoration-2 mr-2 max-sm:hidden max-md:hidden"
          >
            CONTACT
          </a>

          <NavButton
            isMouseEnter={isMouseEnter}
            isMouseLeave={isMouseLeave}
            isScrolled={scrolled}
          />
        </div>
      </div>
      {
        isMenuOpen && (<MenuItems showHotelsMenu={showHotelsMenu}/>)
      }
      {
        menuItemIndex === 0 && isMenuOpen && (
          <HotelsMenu />
        )
      }
    
      
    </div>
  );
};

export default Navbar;
