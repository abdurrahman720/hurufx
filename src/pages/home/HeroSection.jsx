import { Link } from "react-router-dom";
import CircleDot from "../../components/Animations/CircleDot";

const HeroSection = () => {
  return (
    <>
      <div className="relative min-h-[100vh] flex items-center justify-center px-5">
        <CircleDot />
        <div className="text-center">
          <div className="flex items-center justify-center relative text-white font-bold text-4xl md:text-[70px] leading-snug">
            <div>
              <h1 data-aos="fade-down" data-aos-duration="1500">
                Inspiring Impact
              </h1>
              <h1 data-aos="fade-up" data-aos-duration="1500">
                With Creativity
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-left lg:w-1/2 mx-auto mb-40 md:mb-96 px-5">
        <div>
          <p
            data-aos="fade-up"
            className="text-white md:text-3xl text-xl font-light leading-snug mb-10"
          >
            We redefine the digital marketing landscape by blending in-depth
            strategy understanding with a commitment to ensuring your marketing
            investments are efficient and impactful.
          </p>
          <Link
            to="/about-us"
            data-aos="fade-up"
            className="text-white text-xl"
          >
            <span className="border-b border-b-primary">About</span> us
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
