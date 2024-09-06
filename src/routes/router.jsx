import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import { PrimaryLayout } from "../layout/PrimaryLayout";
import DigitalDevelopment from "../pages/digital-development/DigitalDevelopment";

import UserExperience from "../pages/user-exp/UserExperience";

import ContactUs from "../pages/contact/Contact";
import AboutUs from "../pages/about-us/AboutUs";
import BusinessIntelligence from "../pages/hrufx/BusinessIntelligence";
import Marketing from "../pages/branding-and-design/Marketing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/digital-development", element: <DigitalDevelopment /> },
      { path: "/marketing", element: <Marketing /> },
      { path: "/engagement", element: <UserExperience /> },
      { path: "/business-intelligence", element: <BusinessIntelligence /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);
