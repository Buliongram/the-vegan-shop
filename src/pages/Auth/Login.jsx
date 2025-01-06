import React, { useState } from "react";
import { BsX } from "react-icons/bs";

export default function Login({ showForm, setShowAccount, setShowForm }) {
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });
  const handleLoginChange = (e) => {
    setLoginInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <form
        action=""
        className={`${
          showForm === "Login" ? "flex" : "hidden"
        } flex-col gap-6 p-6`}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-xl">
            Login to{" "}
            <span className="text-main font-semibold">The Vegan Shop</span>
          </h1>

          <div
            onClick={setShowAccount}
            className="border  rounded-md h-8 w-8 cursor-pointer border-secondary  flex items-center justify-center"
          >
            <BsX className="text-2xl text-primary" />
          </div>
        </div>

        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-xs font-medium">
              Email Address
            </label>
            <input
              onChange={handleLoginChange}
              value={loginInputs.email}
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="border w-full p-2 px-4 placeholder:text-xs outline-none focus:border-main placeholder:text-dark rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-xs font-medium">
              Password
            </label>
            <input
              onChange={handleLoginChange}
              value={loginInputs.password}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="border w-full p-2 px-4 placeholder:text-xs outline-none focus:border-main placeholder:text-dark rounded-md"
            />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <span className="text-main font-medium text-xs text-end cursor-pointer">
            Forgot Password
          </span>
          <button className="text-sm font-medium bg-gradient-to-t from-main to-secondary text-white px-6 py-2.5 rounded-lg">
            Login
          </button>
          <div className="text-xs font-medium flex items-center gap-1">
            <span className="">Don't have an account yet?</span>
            <span
              onClick={() => setShowForm("Signup")}
              className="text-primary cursor-pointer font-semibold text-sm"
            >
              Create One
            </span>
          </div>
        </section>
      </form>
    </>
  );
}
