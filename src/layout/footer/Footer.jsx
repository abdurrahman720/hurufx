import { ScrollRestoration } from "react-router-dom";
import Brand from "../../components/Brand";
import image1 from "../../assets/footer/AOTY-2024.png";
import image2 from "../../assets/footer/MALAYSIA-TOP-ACHIEVERS-2023-LOGO.png";
import { Envelope, Medal } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl text-2xl gap-10 mx-auto text-white md:flex justify-between p-5 md:px-10 md:py-20">
      <div className="flex-1 md:w-2/3 text-justify">
        <Brand textSize="text-5xl text-white" width="w-40" />
        <p className="font-semibold text-white mt-5">
          Improve your conversion today!
        </p>
        <p className="text-base text-white/80 md:w-2/3">
          For inquiries, support, or to discuss your next big idea, don’t
          hesitate to get in touch. Our team is ready to assist you in
          harnessing the power of HURUFx for your business’s success
        </p>
        <p className="text-white/80 text-sm mt-10">
          ALL RIGHTS RESERVED © 2024. HURUF SDN BHD
        </p>
      </div>
      <div className="h-52 w-52 rounded-br-2xl bg-footerCard md:my-0 md:mt-2 my-10 lg:mx-0 mx-auto">
        <div className="absolute flex flex-col items-center justify-center bg-dark h-52 w-52 rounded-2xl -mt-3 -ml-4">
          <Medal className="text-5xl text-white/70" />
          <div className="flex flex-col">
            <div className="flex gap-10 mt-10">
              <img src={image2} alt="brand2" className="w-12" />
              <img src={image1} alt="brand1" className="w-12 scale-150" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-52 w-52 rounded-br-2xl bg-footerCard lg:mx-0 mx-auto md:mt-2 text-white/80">
        <div className="absolute flex flex-col items-center -mt-3 -ml-4 justify-center bg-dark h-52 w-52 rounded-2xl">
          <Envelope className="text-5xl -mt-4 mb-12 text-white/70" />
          <div>
            <a href="mailto:nicholas@huruf.gg" className="text-sm flex gap-1">
              m: nicholas@huruf.gg
            </a>
            <a href="mailto:mahathir@huruf.gg" className="text-sm flex gap-1">
              x: mahathir@huruf.gg
            </a>
            <a href="mailto:mahathir@huruf.gg" className="text-sm flex gap-1">
              e: elaine@huruf.gg
            </a>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </footer>
  );
};

export default Footer;
