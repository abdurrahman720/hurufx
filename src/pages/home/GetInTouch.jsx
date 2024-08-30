import { useState } from "react";

const GetInTouch = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative bg-white text-center px-5 py-10 md:p-40 flex items-center justify-center">
      <div
        className={`absolute bg-primary top-1/2 -translate-y-1/2 w-16 h-16 left-1/2 opacity-50 transition-all duration-1000 ${
          isHovered ? "w-full h-full opacity-100 mt-0 rounded-none" : "mt-20"
        } -translate-x-1/2 rounded-full`}
      ></div>
      <div className="text-4xl z-20">
        <p data-aos="fade-up">Got a vision for your brand?</p>
        <p data-aos="fade-up" className="font-medium">
          Let&apos;s bring it to life.
        </p>
        <p
          data-aos="fade-up"
          className="z-20 text-lg mt-10 sm:mt-16 md:mt-20 w-fit mx-auto group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer w-fit">Get in Touch</span>
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
