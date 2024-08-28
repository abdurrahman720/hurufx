import logo1 from "../../assets/clients/CLIENT-1.png";
import logo2 from "../../assets/clients/CLIENT-2.png";
import logo3 from "../../assets/clients/CLIENT-3.png";
import logo4 from "../../assets/clients/CLIENT-4.png";
import logo5 from "../../assets/clients/CLIENT-5.png";
import logo6 from "../../assets/clients/CLIENT-6.png";
import logo7 from "../../assets/clients/CLIENT-7.png";
import logo8 from "../../assets/clients/CLIENT-8.png";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="">
      <div className="p-5 md:flex items-center justify-end md:mb-60 mb-40 md:mt-20 mt-10">
        <div className="flex flex-col justify-between w-96 p-3 mr-20 mb-20 md:mb-0">
          <p
            data-aos="fade-left"
            className="text-white font-semibold text-4xl mb-5 md:mb-60"
          >
            Our Clients
          </p>
          <p
            data-aos="fade-left"
            className="font-semibold text-3xl md:text-5xl text-white/80"
          >
            Craft compelling stories with us
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-start">
          <div className="grid grid-cols-2 gap-10 md:w-1/2">
            <img data-aos="fade-up" src={logo1} alt="logo_1" />
            <img data-aos="fade-up" src={logo2} alt="logo_2" />
            <img data-aos="fade-up" src={logo3} alt="logo_3" />
            <img data-aos="fade-up" src={logo4} alt="logo_4" />
            <img data-aos="fade-up" src={logo5} alt="logo_5" className="" />
            <img data-aos="fade-up" src={logo6} alt="logo_6" className="" />
            <img data-aos="fade-up" src={logo7} alt="logo_7" />
            <img data-aos="fade-up" src={logo8} alt="logo_8" />
          </div>
        </div>
      </div>

      <div className="-mt-10 mb-20">
        <Marquee className="text-white text-7xl h-28">
          Events & Activation - Brand Guidelines - UXUI - Events & Activation -
          Brand Guidelines - UXUI -
        </Marquee>
        <Marquee className="text-white text-7xl h-28">
          2D & 3D Creatives - Strategic Partnerships - Talent Management - 2D &
          3D Creatives - Strategic Partnerships - Talent Management -
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
