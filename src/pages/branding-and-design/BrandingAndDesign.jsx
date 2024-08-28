import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import "./index.css";
import animation from "./animation.json";
import branding1 from "../../assets/branding-and-design/BRANDING.png";
import branding2 from "../../assets/branding-and-design/COLOUR-VARIATIONS.png";
import branding3 from "../../assets/branding-and-design/GRAPHIC-ELEMENTS.png";
import branding4 from "../../assets/branding-and-design/LOGO-GEOMETRY.png";
import branding5 from "../../assets/branding-and-design/LOGO-SCORES.png";
import branding6 from "../../assets/branding-and-design/MOODBOARD.png";
import branding7 from "../../assets/branding-and-design/PRODUCT-SHOWCASE.png";
import branding8 from "../../assets/branding-and-design/TYPOGRAPHY.png";

const BrandingAndDesign = () => {
  const images = [
    { src: branding1, imageName: "BRANDING" },
    { src: branding2, imageName: "COLOUR VARIATIONS" },
    { src: branding3, imageName: "GRAPHIC ELEMENTS" },
    { src: branding4, imageName: "LOGO GEOMETRY" },
    { src: branding5, imageName: "LOGO SCORES" },
    { src: branding6, imageName: "MOODBOARD" },
    { src: branding7, imageName: "PRODUCT SHOWCASE" },
    { src: branding8, imageName: "TYPOGRAPHY" },
  ];
  return (
    <>
      <div className="inner-hero-banner px-5 min-h-[100vh] flex items-center md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="globe-animation">
            <Lottie loop animationData={animation} play />
          </div>
          <div className="md:w-2/3">
            <div className="">
              <h2 className="text-white text-5xl" data-aos="fade-up">
                Marketing (m)
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration={500}
                className="text-white text-2xl my-10"
              >
                We build brands that resonate. From logo design and brand
                development to impactful messaging and eye-catching marketing
                collateral, we create a cohesive visual identity that makes your
                brand unforgettable.
              </p>
              <div className="group/item flex items-center cursor-pointer w-fit">
                <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-52 transition-all duration-500"></div>
                <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-white w-10" />
                <a
                  href="#bad-images"
                  className="group-hover/item:-ml-[200px] group-hover/item:text-black text-white font-medium transition-all duration-500 ml-5"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="bad-images"
        className="max-w-7xl mx-auto px-5 flex flex-col gap-10 my-40"
      >
        {images.map((image, index) => {
          return (
            <div className="relative cursor-pointer group" key={index}>
              <img
                className="w-full"
                data-aos="fade-up"
                src={image.src}
                alt={`image-${index}`}
              />
              <div className="group-hover:bg-gradient-to-t from-black/50 to-transparent w-full h-full bg-black/0 absolute top-0 transition-all duration-500"></div>
              <h1 className="group-hover:opacity-100 opacity-0 absolute bottom-10 left-10 text-white text-4xl transition-opacity duration-500">
                {image.imageName}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrandingAndDesign;
