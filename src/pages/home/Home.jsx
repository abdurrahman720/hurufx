import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HorizontalGallery from "./HorizontalGallery";
import Projects from "./Projects";
import Brands from "./Brands";
import GetInTouch from "./GetInTouch";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div>
      <div className="z-50">
        <HeroSection />
        <HorizontalGallery />
        <VideoSection />
        <Projects />
        <Brands />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Home;
