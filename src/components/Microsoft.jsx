import React from "react";

const Microsoft = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center p-4">
        <div className="flex justify-center items-center md:order-2">
          <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black "></div>
            <div className="line h-0.5 w-6 my-1 bg-black "></div>
            <div className="line h-0.5 w-6 my-1 bg-black "></div>
          </div>

          <div className="search md:hidden">SearchIcon</div>
        </div>

        <div className="logo text-center md:order-1">Microsoft</div>
        <div className="cart text-center md:order-3 flex">
            
        <div className="search hidden md:block">SearchIcon</div>
            
            <div>Cart Account</div></div>
      </div>
    </div>
  );
};

export default Microsoft;
