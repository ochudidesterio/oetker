import React from 'react';

const CustomButton = () => {
  return (
    <div className="bg-accent p-1">
      <div className="relative px-4 py-1 group text-center font-montserrat">
        BOOK
        <span
          className="absolute inset-x-0 top-0 h-[0.5px] bg-secondary scale-x-0 group-hover:scale-x-90 transition-transform"
        ></span>
        <span
          className="absolute inset-x-0 bottom-0 h-[0.5px] bg-secondary scale-x-0 group-hover:scale-x-90 transition-transform"
        ></span>
        <span
          className="absolute inset-y-0 left-0 w-[0.5px] bg-secondary scale-y-0 group-hover:scale-y-90 transition-transform"
        ></span>
        <span
          className="absolute inset-y-0 right-0 w-[0.5px] bg-secondary scale-y-0 group-hover:scale-y-90 transition-transform"
        ></span>
      </div>
    </div>
  );
};

export default CustomButton;
