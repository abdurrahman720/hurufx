import "./index.css";
import branding1 from "../../assets/digital-development/2D-(2).png";
import branding2 from "../../assets/digital-development/2D.png";
import branding3 from "../../assets/digital-development/3D.png";
import branding4 from "../../assets/digital-development/UXUI-(6).png";
import branding5 from "../../assets/digital-development/UXUI-(7).png";
import branding6 from "../../assets/digital-development/UXUI-(8).png";
import branding7 from "../../assets/digital-development/UXUI-(9).png";
import branding8 from "../../assets/digital-development/UXUI-(1).png";
import branding9 from "../../assets/digital-development/UXUI-(2).png";
import branding10 from "../../assets/digital-development/UXUI-(3).png";
import branding11 from "../../assets/digital-development/UXUI-(4).png";
import branding12 from "../../assets/digital-development/UXUI-(5).png";

const DigitalDevelopment = () => {
  const imageUrlList = [
    branding1,
    branding2,
    branding3,
    branding1,
    branding2,
    branding3,
    branding1,
    branding2,
    branding3,
  ];

  const images = [
    { src: branding1, imageName: "2D" },
    { src: branding2, imageName: "2D" },
    { src: branding3, imageName: "3D" },
    { src: branding4, imageName: "UXUI" },
    { src: branding5, imageName: "UXUI" },
    { src: branding6, imageName: "UXUI" },
    { src: branding7, imageName: "UXUI" },
    { src: branding8, imageName: "UXUI" },
    { src: branding9, imageName: "UXUI" },
    { src: branding10, imageName: "UXUI" },
    { src: branding11, imageName: "UXUI" },
    { src: branding12, imageName: "UXUI" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 md:py-0 ">
      <div className="lg:flex items-center">
        <div className="text-center">
          <div className="marquee-box">
            <div className="marquee-box-inner">
              {imageUrlList.map((url, index) => (
                <ImageComponent key={index} imageUrl={url} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="globe-animation">
          <Lottie loop animationData={animation} play />
        </div> */}
        <div className="p-5 md:w-1/2 inner-hero-text max-sm:mt-3">
          <h2
            className="text-white text-3xl md:text-5xl font-extrabold"
            data-aos="fade-up"
          >
            Digital (x)
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration={500}
            className="text-white md:text-2xl my-10 text-justify"
          >
            Create engaging digital experiences with our streamlined approach to
            website design, UX/UI, and custom content. From research to final
            animations, we deliver everything you need to stand out online.
          </p>
          <div className="group/item flex items-center cursor-pointer w-fit">
            <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-52 transition-all duration-500"></div>
            <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-white w-10" />
            <a
              href="#dd-images"
              className="group-hover/item:-ml-[200px] group-hover/item:text-black text-white font-medium transition-all duration-500 ml-5"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
      <div id="dd-images" className="flex flex-col gap-5 md:gap-20 my-40">
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
    </div>
  );
};

export default DigitalDevelopment;

const ImageComponent = ({ imageUrl }) => {
  return (
    <div className="marquee-img-box">
      <span className="marquee-img">
        <img
          src={imageUrl}
          alt=""
          className="img-fluid"
          data-cmp-ab={2}
          data-cmp-info={10}
        />
      </span>
    </div>
  );
};
