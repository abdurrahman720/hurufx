import { Link, Outlet } from "react-router-dom";
import TopNavbar from "../components/Navbar/TopNavbar";
import Social from "../components/Social";
import Aos from "aos";
import "aos/dist/aos.css";
import { Keyhole } from "@phosphor-icons/react";
import Footer from "./footer/Footer";

export const PrimaryLayout = () => {
  Aos.init();

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <div className="z-20 hidden md:block fixed bottom-20 left-10">
        <Social />
      </div>
      <Link
        to="/contact-us"
        className="z-20 flex flex-col items-center fixed bottom-5 md:bottom-20 right-0"
      >
        <p className=" text-white -rotate-90 text-base">Contact Us Now</p>
        <hr className=" text-white w-10 rotate-90 mt-24" />
        <Keyhole
          weight="fill"
          className="text-white  text-7xl md:text-5xl mt-8"
        />
      </Link>
      <TopNavbar />
      <div className="z-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
