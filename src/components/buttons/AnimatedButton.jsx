import { Link } from "react-router-dom";

const AnimatedButton = ({
  title,
  width = "group-hover/item:w-48",
  ml = "group-hover/item:-ml-[11rem] group-hover/item:md:-ml-48",
  link = "/engagement",
}) => {
  return (
    <div className="group/item w-fit flex items-center cursor-pointer mt-5">
      <div
        className={`w-10 h-10 bg-white rounded-full ${width} transition-all duration-500`}
      ></div>
      <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-white w-5 md:w-10" />
      <Link
        to={link}
        className={`${ml} group-hover/item:text-black text-white transition-all duration-500 ml-5`}
      >
        {title}
      </Link>
    </div>
  );
};

export default AnimatedButton;
