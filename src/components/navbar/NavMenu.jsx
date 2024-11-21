import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenu = ({handleNavMenu}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnclick = () => {
    setIsOpen(!isOpen);
    handleNavMenu(!isOpen)
  };

  return (
    <div onClick={handleOnclick} className="flex gap-1 items-center cursor-pointer font-montserrat">
      {isOpen ? (
        <>
          <MdClose size={24} />
          <h5 className="text-sm mb-1 max-sm:hidden">CLOSE</h5>
        </>
      ) : (
        <>
          <MdMenu size={24} />
          <h5 className="text-sm mb-1 max-sm:hidden">MENU</h5>
        </>
      )}
    </div>
  );
};

export default NavMenu;
