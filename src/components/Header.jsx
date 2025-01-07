import React from "react";
import { Link } from "react-router-dom";
import { logo_green } from "../assets/images/images";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full left-0 bg-white flex flex-col p-4 px-6 gap-4  lg:px-28">
        <nav className="flex justify-between items-center border-b pb-4  ">
          <div className="flex items-center gap-3">
            <div className="border   rounded-md h-9 w-9 flex lg:hidden items-center justify-center">
              <RxHamburgerMenu className="text-xl" />
            </div>
            <img
              src={logo_green}
              alt="logo"
              className="w-[100px] lg:w-[120px]"
            />
          </div>

          <section className="hidden lg:flex items-center border shadow-sm overflow-hidden rounded-full p-1 w-[400px] gap-3">
            <input
              type="text"
              placeholder="Type to Search"
              className="p-1.5 px-4 outline-none w-full text-sm placeholder:text-xs placeholder:text-gray-500 placeholder:font-normal bg-transparent"
            />
            <button
              className="text-xs bg-main text-white rounded-full px-7 py-2.5
            "
            >
              SEARCH
            </button>
          </section>

          <section className="flex items-center gap-4">
            <CiHeart className="text-2xl cursor-pointer" />
            <div className="h-[25px] w-[1.5px] bg-black"> </div>
            <div className="relative">
              <span className="text-white rounded-full h-4 min-w-4 flex items-center justify-center text-xs absolute -right-1 -top-2  font-medium bg-red-500">
                5
              </span>
              <FaOpencart className="text-2xl" />
            </div>
            <div className="hidden lg:flex flex-col gap-1 text-xs font-semibold">
              <span className="text-gray-500">Shopping Cart</span>
              <span className="text-main">$0.00</span>
            </div>
          </section>
        </nav>

        <div className="hidden lg:flex items-center justify-center gap-8 text-[13px] font-semibold">
          <Link>HOME</Link>
          <Link>ABOUT US</Link>
          <Link>PRODUCTS</Link>
          <Link>CONTACT US</Link>
        </div>
        <section className="flex lg:hidden items-center border shadow-sm overflow-hidden rounded-full p-1 w-full gap-3">
          <input
            type="text"
            placeholder="Type to Search"
            className="p-1.5 px-4 outline-none w-full text-sm placeholder:text-xs placeholder:text-gray-500 placeholder:font-normal bg-transparent"
          />
          <button
            className="text-xs bg-main text-white shrink-0 h-8 flex items-center justify-center w-8 rounded-full
            "
          >
            <CiSearch className="text-xl" />
          </button>
        </section>
      </header>
    </>
  );
}
