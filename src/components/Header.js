import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
//import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../img/logo.svg";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // envent listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-pink-100 py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all `}
    >
      <div className=" mx-auto  flex justify-center h-full  ">
        <div className=" flex w-full justify-around " >
          {/* logo */}
          <div className="mr-20">
            <Link to={"/"}>
              <img className="w-[40px]" src={Logo} alt="" />
            </Link>
          </div>

          {/* Menu */}
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              className="hover:underline hover:text-blue-600 font-medium text-2xl"
            >
              Home
            </Link>
            <Link
              to={"/products"}
              className="hover:underline hover:text-blue-600 font-medium text-2xl"
            >
              Products
            </Link>
            <Link
              to={"/about"}
              className="hover:underline hover:text-blue-600 font-medium text-2xl"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="hover:underline hover:text-blue-600 font-medium text-2xl"
            >
              Contact
            </Link>
          </div>

          {/* cart */}
          <div className="cursor-pointer flex relative">
            <div className=" flex justify-center items-center -ml-12 ">
              <Link
                className=" px-2 py-1  mr-2 border-black rounded-lg bg-gray-200 text-primary font-medium  hover:bg-gray-800 hover:text-white "
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className=" px-2 py-1  mr-2 border-black rounded-lg bg-gray-200 text-primary font-medium  hover:bg-gray-800 hover:text-white "
                to={"/register"}
              >
                Register
              </Link>
            </div>
            <BsBag
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl mt-1"
            />
            <div className="bg-red-500 absolute -right-2 -bottom-0 text-[12px] w-[12px] h-[12px] flex justify-center items-center text-white rounded-full  ">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
