import React from "react";
import { hero } from "../assets/images/images";
import Account from "./Auth/Account";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function Homepage() {
  return (
    <>
      <section className="hero mt-36 h-[400px] border">
        <section className="flex flex-col gap-5 mt-6 lg:mt-0  relative z-10 p-6 lg:p-20 font-semibold">
          <span className=" tracking-wide text-5xl lg:text-7xl font-black">
            100% <span className="text-primary">Organic</span>
          </span>
          <span className="text-white w-max bg-main p-1 px-5 text-[16px] lg:text-xl">
            Fresh & Natural Farm Food
          </span>
          <span className="text-sm lg:text-[16px] max-w-[350px]  lg:max-w-[400px] w-full font-normal ">
            Enjoy fresh, organic farm produce from The Vegan Shop—pure, natural,
            and packed with wholesome goodness!
          </span>

          <Link className="text-xs lg:text-sm font-medium text-main border border-main w-max px-6 py-3 rounded-full flex items-center gap-2">
            <span>VIEW PRODUCTS</span> <BsArrowRight />
          </Link>
        </section>
      </section>
    </>
  );
}
