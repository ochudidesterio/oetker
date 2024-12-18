import React from 'react'

const NavButton = ({isMouseEnter,isMouseLeave,isScrolled}) => {
  return (
    <div className={`border-white border-[1px] px-8 py-1 max-sm:hidden ${isMouseEnter && 'bg-accent'} ${isScrolled && 'bg-accent'} ${isMouseLeave && 'bg-navdark bg-opacity-0'}`}>
        BOOK
    </div>
  )
}

export default NavButton