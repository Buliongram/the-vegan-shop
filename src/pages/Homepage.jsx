import React from "react";
import {
  apple_banner,
  banana_banner,
  hero,
  onions_banner,
  tomato_banner,
} from "../assets/images/images";
import Account from "./Auth/Account";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function Homepage() {
  return (
    <>
      <section className="hero mt-36 h-[400px] border">
        <main className="flex flex-col gap-5 px-6 lg:px-20  py-12 font-semibold">
          <span className=" tracking-wide text-5xl lg:text-7xl font-semibold">
            100% <span className="text-main">Organic</span>
          </span>
          <span className="text-white w-max bg-main p-1 px-5 text-[16px] lg:text-xl">
            Fresh & Natural Farm Food
          </span>
          <span className="text-sm lg:text-[16px] max-w-[350px]  lg:max-w-[400px] w-full font-normal ">
            Enjoy fresh, organic farm produce from The Vegan Shop—pure, natural,
            and packed with wholesome goodness!
          </span>

          <Link className="text-xs lg:text-[13px] font-medium text-main border-[1.5px] border-main w-max px-8 py-3 rounded-full flex items-center gap-2">
            <span>VIEW PRODUCTS</span> <BsArrowRight />
          </Link>
        </main>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] grid-flow-dense justify-center gap-5 lg:gap-10 lg:py-20 lg:px-32 p-6">
        <img src={apple_banner} alt="apple_banner" />

        <img src={banana_banner} alt="banana_banner" />

        <img src={onions_banner} alt="onipns_banner" />

        <img src={tomato_banner} alt="tomato_banner" />
      </section>
    </>
  );
}
