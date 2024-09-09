import { Link, Outlet } from "react-router-dom";
import TopNavbar from "../components/Navbar/TopNavbar";
import Social from "../components/Social";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowUp, Keyhole } from "@phosphor-icons/react";
import Footer from "./footer/Footer";
import { useState } from "react";

export const PrimaryLayout = () => {
  Aos.init();

  const [arrowClicked, setArrowClicked] = useState(false);

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <div className="z-20 hidden md:block fixed bottom-20 left-10">
        <Social />
      </div>

      <Link
        to="/contact-us"
        className="z-20 md:flex flex-col items-center hidden md:fixed bottom-5 md:bottom-20 right-0 "
      >
        <p className={` text-white -rotate-90 text-base  `}>Contact Us Now</p>
        <hr className={` text-white w-10 rotate-90 mt-24`} />
        <Keyhole
          weight="fill"
          className={`text-white  text-7xl md:text-5xl mt-8`}
        />
      </Link>

      <div
        className={`z-20 flex flex-col items-center fixed bottom-0 xs:bottom-10  right-0 opacity-0 transition-opacity duration-300 ease-in-out md:hidden xs:mb-8 ${
          arrowClicked ? "opacity-100" : ""
        }  `}
      >
        <Social />
        <Link
          to="/contact-us"
          className={` text-white -rotate-90 text-base opacity-0 transition-opacity duration-300 ease-in-out mt-16 xs:mt-24 ${
            arrowClicked ? "opacity-100" : ""
          }`}
        >
          Contact Us Now
        </Link>
        <hr className={` text-white w-10 rotate-90 mt-20 xs:mt-24`} />
        <button onClick={() => setArrowClicked(false)} className="mt-8">
          <Keyhole
            weight="fill"
            className={`text-white  text-7xl md:text-5xl  z-30`}
          />
        </button>
      </div>

      <div
        className={`z-20 flex flex-col items-center fixed bottom-0 xs:bottom-10 md:bottom-20 right-5 ${
          arrowClicked ? "opacity-0" : "opacity-100"
        }`}
      >
        <ArrowUp
          onClick={() => setArrowClicked(true)}
          size={64}
          color="white"
          className={`md:hidden `}
        />
      </div>

      <TopNavbar />
      <div className="z-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
