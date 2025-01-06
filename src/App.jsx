import { Suspense, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  function HomeLayout() {
    return (
      <>
        <Suspense
          fallback={
            <div className="w-screen h-screen text-white grid place-items-center font-bold text-xl md:text-3xl">
              Loading...
            </div>
          }
        >
          <Header />
          <Outlet />
          <Footer />
        </Suspense>
      </>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster></Toaster>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </>
  );
}
