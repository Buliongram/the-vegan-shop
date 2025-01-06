import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

export default function Account({ showAccount, setShowAccount }) {
  const [showForm, setShowForm] = useState("Login");

  return (
    <>
      <section
        className={`fixed top-24 shadow-sm left-0 z-[1000] bg-white  rounded-lg max-w-[450px] w-full  ${
          showAccount ? "max-h-full" : "max-h-0"
        } overflow-hidden transition-all`}
      >
        <Login
          showForm={showForm}
          setShowAccount={setShowAccount}
          setShowForm={() => setShowForm("Signup")}
        />
        <Signup
          showForm={showForm}
          setShowAccount={setShowAccount}
          setShowForm={() => setShowForm("Login")}
        />
      </section>
    </>
  );
}
