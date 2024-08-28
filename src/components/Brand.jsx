import hurufGrey from "../assets/HURUF-Grey.png";
import hurufWhite from "../assets/HURUF-White-Logo.png";
import hurufLogo from "../assets/HURUF-Logo.png";

import { Link } from "react-router-dom";

const Brand = ({ textSize = "text-4xl", type = "white", width = "w-32" }) => {
  return (
    <Link to="/" className={`font-semibold text-white ${textSize} z-[99]`}>
      <img
        className={`${width}`}
        src={
          type === "white"
            ? hurufWhite
            : type === "grey"
            ? hurufGrey
            : hurufLogo
        }
        alt=""
      />
    </Link>
  );
};

export default Brand;
