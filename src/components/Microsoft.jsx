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

        <div className="logo text-center flex md:order-1">
            <div>Microsoft</div>
            <div className="features absolute w-fit md:w-auto md:flex md:bg-white  bg-gray-200 inset-0 md:mx-4  md:space-x-2 -translate-x-96 md:translate-x-0">
                <div className="fitem">Microsoft 365</div>
                <div className="fitem">Office</div>
                <div className="fitem">Windows</div>
                <div className="fitem">Surface</div>
                <div className="fitem">Xbox</div>
                <div className="fitem">Support</div>
            </div>    
        </div>
        <div className="cart text-center md:order-3 flex">
            
        <div className="search hidden md:block">All Microsoft SearchIcon</div>
            
            <div>Cart Account</div></div>
      </div>
    </div>
  );
};

export default Microsoft;
