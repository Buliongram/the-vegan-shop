import React, { useState } from "react";
import { BsX } from "react-icons/bs";

export default function Signup({ showForm, setShowAccount, setShowForm }) {
  const [signupInputs, setSignupInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form
        action=""
        className={`${
          showForm === "Signup" ? "flex" : "hidden"
        } flex-col gap-6 p-6`}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-xl">
            Create your
            <span className="text-main font-semibold"> Vegan Shop</span> account
          </h1>

          <div
            onClick={setShowAccount}
            className="border  rounded-md h-8 w-8 cursor-pointer border-secondary  flex items-center justify-center"
          >
            <BsX className="text-2xl text-primary" />
          </div>
        </div>

        <section className="flex flex-col gap-3">
          <section className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-xs font-medium">
                Firstname
              </label>
              <input
                onChange={handleSignupChange}
                value={signupInputs.firstname}
                type="text"
                name="firstname"
                placeholder="Enter your firstname"
                required
                className="border w-full p-2 px-4 placeholder:text-xs outline-none focus:border-main placeholder:text-dark rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-xs font-medium">
                Lastname
              </label>
              <input
                onChange={handleSignupChange}
                value={signupInputs.lastname}
                type="text"
                name="lastname"
                placeholder="Enter your lastname"
                required
                className="border w-full p-2 px-4 placeholder:text-xs outline-none focus:border-main placeholder:text-dark rounded-md"
              />
            </div>
          </section>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-xs font-medium">
              Email Address
            </label>
            <input
              onChange={handleSignupChange}
              value={signupInputs.email}
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="border w-full p-2 px-4 placeholder:text-xs outline-none focus:border-main placeholder:text-dark rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-xs font-medium">
              Password
            </label>
            <input
              onChange={handleSignupChange}
              value={signupInputs.password}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="border w-full p-2 px-4 placeholder:text-xs outline-none focus:border-main placeholder:text-dark rounded-md"
            />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <button className="text-sm font-medium bg-gradient-to-t from-main to-secondary text-white px-6 py-2.5 rounded-lg">
            Create Account
          </button>
          <div className="text-xs font-medium flex items-center gap-1">
            <span className="">Already have an account yet?</span>
            <span
              onClick={setShowForm}
              className="text-primary font-semibold text-sm cursor-pointer"
            >
              Sign In
            </span>
          </div>
        </section>
      </form>
    </>
  );
}
