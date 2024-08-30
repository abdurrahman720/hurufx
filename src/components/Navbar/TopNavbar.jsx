import { useEffect, useState } from "react";
import MenuButton from "../Animations/MenuButton/MenuButton";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ArrowLeft, X } from "@phosphor-icons/react";
import Brand from "../Brand";
import { Link } from "react-router-dom";

function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowsServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-[999] bg-transparent shadow-none bg-opacity-5 transition-all duration-300 ease-in-out  ${
        isScrolled
          ? "max-sm:bg-black max-sm:bg-opacity-80 max-sm:shadow-md "
          : ""
      }`}
    >
      <div className="p-10 flex items-center justify-between">
        <Brand />
        <MenuButton onClick={toggleDrawer} />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        style={{
          background: "#000000",
          height: "100vh",
        }}
      >
        <div className="relative flex items-center lg:justify-center h-full">
          <nav className="lg:w-1/2">
            {showServices ? (
              <ul className="md:ml-10">
                <div
                  className="flex gap-3 items-center text-white cursor-pointer md:ml-16 ml-8"
                  onClick={() => setShowsServices(false)}
                >
                  <ArrowLeft />
                  Services
                </div>
                <NavItem
                  toggleDrawer={toggleDrawer}
                  href="/branding-and-design"
                >
                  Marketing (m)
                </NavItem>
                <NavItem
                  toggleDrawer={toggleDrawer}
                  href="/digital-development"
                >
                  Digital (x)
                </NavItem>
                <NavItem toggleDrawer={toggleDrawer} href="/user-experience">
                  Engagement (e)
                </NavItem>
              </ul>
            ) : (
              <ul className="flex flex-col items-start">
                <NavItem toggleDrawer={toggleDrawer} href="/">
                  Home
                </NavItem>
                <NavItem toggleDrawer={toggleDrawer} href="/about-us">
                  About Us
                </NavItem>
                <div onClick={() => setShowsServices(true)}>
                  <NavItem toggleDrawer={toggleDrawer} href="#services">
                    Services
                  </NavItem>
                </div>
                <NavItem
                  toggleDrawer={toggleDrawer}
                  href="/business-intelligence
"
                >
                  Business Intelligence
                </NavItem>
                <NavItem
                  toggleDrawer={toggleDrawer}
                  href="https://tess.gg/"
                  darken={false}
                  target="_blank"
                >
                  TECH (TESS)
                </NavItem>
                <NavItem toggleDrawer={toggleDrawer} href="/" darken={true}>
                  WEB 3.0 (SION)
                </NavItem>
                <NavItem toggleDrawer={toggleDrawer} href="/contact-us">
                  Contact Us
                </NavItem>
              </ul>
            )}
          </nav>
          <X
            className="text-white text-3xl md:text-6xl absolute top-5 right-5 cursor-pointer"
            onClick={toggleDrawer}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default TopNavbar;

const NavItem = ({ children, href, toggleDrawer, ...props }) => (
  <li
    className={`flex items-center group/item strokeme my-2 md:my-4 text-xl md:text-4xl text md:font-bold hover:ml-8 hover:md:ml-16 transition-all duration-500`}
  >
    <hr className="bg-white w-5 md:w-10 group-hover/item:opacity-100 opacity-0 mr-3 md:mr-6" />
    {href === "#services" ? (
      <p className="cursor-pointer text-black hover:text-white">{children}</p>
    ) : (
      <Link
        {...props}
        onClick={toggleDrawer}
        to={href}
        className="text-black hover:text-white"
      >
        {children}
      </Link>
    )}
  </li>
);
