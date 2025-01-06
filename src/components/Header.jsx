import React, { useEffect, useState } from "react";
import { logo } from "../assets/images/images";
import { BsSearch } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaBarsSolid, LiaShoppingBagSolid } from "react-icons/lia";
import { PiUserCircleLight } from "react-icons/pi";
import Account from "../pages/Auth/Account";

export default function Header() {
  const [count, setCount] = useState(0);

  const [showAccount, setShowAccount] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="  lg:px-16 px-6 relative z-10 headerBg flex items-center justify-between p-2 text-white lg:mx-20 mx-5 mt-5 ">
        <div className="flex items-center gap-3">
          <div className="border  rounded-md h-9 w-10 border-white hidden lg:flex items-center justify-center">
            <RxHamburgerMenu className="text-xl" />
            {/* {count} */}
          </div>
          <img src={logo} width={100} alt="logo" />
        </div>

        <form
          action=""
          className="hidden lg:flex items-center gap-4 rounded-lg border-2 border-main pr-5 w-[350px]"
        >
          <input
            type="search"
            placeholder="Search the Vegan shop"
            className="outline-none p-2 placeholder:text-xs px-5 rounded-lg bg-transparent text-white placeholder:text-white w-full "
          />
          <BsSearch />
        </form>

        <section className="flex items-center gap-2 ">
          <IoIosHeartEmpty className="text-2xl hidden lg:flex" />
          <span
            onClick={() => setShowAccount(!showAccount)}
            className=" h-7 w-7 border cursor-pointer lg:hidden rounded-full text-white flex items-center justify-center"
          >
            <PiUserCircleLight className="text-4xl" />
          </span>
          <div className="h-7 w-7 lg:h-12 lg:w-12 rounded-full flex items-center justify-center relative shrink-0 lg:bg-white/20">
            <span className="text-white rounded-full h-5 min-w-5 flex items-center justify-center text-xs absolute -right-1 -top-2 lg:top-0 font-semibold bg-gradient-to-t from-main to-secondary">
              5
            </span>
            <LiaShoppingBagSolid className="text-6xl lg:text-3xl" />
          </div>
          <button
            onClick={() => setShowAccount(!showAccount)}
            className="text-sm hidden lg:flex font-medium bg-gradient-to-t from-main to-secondary text-white px-6 py-1.5 rounded-lg"
          >
            Login
          </button>
          <div className="h-8  w-8  rounded-md border flex items-center justify-center cursor-pointer">
            <LiaBarsSolid />
          </div>
        </section>
      </header>
      <Account
        showAccount={showAccount}
        setShowAccount={() => setShowAccount(false)}
      />
    </>
  );
}
