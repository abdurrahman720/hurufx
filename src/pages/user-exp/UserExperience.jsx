import "../branding-and-design/index.css";
// import branding1 from "../../assets/branding-and-design/BRANDING.png";
// import branding2 from "../../assets/branding-and-design/COLOUR-VARIATIONS.png";
// import branding3 from "../../assets/branding-and-design/GRAPHIC-ELEMENTS.png";
// import branding4 from "../../assets/branding-and-design/LOGO-GEOMETRY.png";
// import branding5 from "../../assets/branding-and-design/LOGO-SCORES.png";
// import branding6 from "../../assets/branding-and-design/MOODBOARD.png";
// import branding7 from "../../assets/branding-and-design/PRODUCT-SHOWCASE.png";
// import branding8 from "../../assets/branding-and-design/TYPOGRAPHY.png";

import engagement1 from "../../assets/engagements/AXA-AFFIN-KnowYouCan.png";
import engagement2 from "../../assets/engagements/LIFEBUOY-Grand-Launching-2023.png";
import engagement3 from "../../assets/engagements/MAGNUM-Matcha-Takeover.png";
import engagement4 from "../../assets/engagements/SUNLIGHT-Made-for-More.png";
import engagement5 from "../../assets/engagements/SUNSILK-Skylar.png";
import engagement6 from "../../assets/engagements/TATTOO-Malaysia-2019.png";
import engagement7 from "../../assets/engagements/TUNE-Protect-X-Halloween-Party.png";
import engagement8 from "../../assets/engagements/TUNE-Protect-X-Zeppo-Dance-Showcase.png";

const UserExperience = () => {
  const images = [
    { src: engagement1, imageName: "AXA AFFIN KnowYouCan" },
    { src: engagement2, imageName: "LIFEBUOY GRAND LAUNCHING 2023" },
    { src: engagement3, imageName: "MAGNUM MATCHA TAKEOVER" },
    { src: engagement4, imageName: "SUNLIGHT MADE FOR MORE" },
    { src: engagement5, imageName: "SUNSILK SKYLAR" },
    { src: engagement6, imageName: "TATTOO MALAYSIA 2019" },
    { src: engagement7, imageName: "TUNE PROTECT X HALLOWEEN PARTY" },
    { src: engagement8, imageName: "TUNE PROTECT X ZEPPO DANCE SHOWCASE" },
  ];

  return (
    <>
      <div className="inner-hero-banner px-5 min-h-[100vh] flex items-center md:px-20">
        <div className="max-w-7xl mx-auto max-md:mt-20">
          <div className="md:w-2/3">
            <div className="">
              <h2
                className="text-white text-5xl font-extrabold"
                data-aos="fade-up"
              >
                Engagement (e)
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration={500}
                className="text-white text-2xl my-10 text-justify"
              >
                Engage your audience with unforgettable events, immersive VR/AR,
                and strategic social media. From talent management to
                interactive media and PR, we craft experiences that resonate.
              </p>
              <ul
                data-aos="fade-up"
                data-aos-duration={500}
                className="text-white text-2xl my-10 text-justify list-disc p-5"
              >
                <li>Events and Activations</li>
                <li>Talent Management</li>
                <li>Production</li>
                <li>User Experience</li>

                <li>Social Media Strategy</li>
                <li>Interactive Media</li>
                <li>VR/AR Experiences</li>
                <li>Public Relations</li>
              </ul>
              <div className="group/item flex items-center cursor-pointer w-fit">
                <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-52 transition-all duration-500"></div>
                <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-white w-10" />
                <a
                  href="#ux-images"
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
        id="ux-images"
        className="max-w-7xl mx-auto md:px-5 flex flex-col gap-10 my-40"
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

export default UserExperience;
