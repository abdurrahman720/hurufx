import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import { PrimaryLayout } from "../layout/PrimaryLayout";
import DigitalDevelopment from "../pages/digital-development/DigitalDevelopment";
import BrandingAndDesign from "../pages/branding-and-design/BrandingAndDesign";
import UserExperience from "../pages/user-exp/UserExperience";
import HrufX from "../pages/hrufx/HrufX";
import ContactUs from "../pages/contact/Contact";
import AboutUs from "../pages/about-us/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/digital-development", element: <DigitalDevelopment /> },
      { path: "/branding-and-design", element: <BrandingAndDesign /> },
      { path: "/user-experience", element: <UserExperience /> },
      { path: "/hurufx", element: <HrufX /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);
