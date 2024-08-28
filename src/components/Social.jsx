import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Social = ({ flex = "flex-col text-white" }) => {
  return (
    <div className={`flex ${flex} gap-6`}>
      <Link to="https://www.facebook.com/huruf.gg" target="_blank">
        <FacebookLogo className="social-icon" weight="fill" />
      </Link>
      <Link to="https://www.instagram.com/huruf.gg/" target="_blank">
        <InstagramLogo className="social-icon" />
      </Link>
      <Link
        to="https://www.linkedin.com/showcase/hurufgg/about/"
        target="_blank"
      >
        <LinkedinLogo className="social-icon" weight="fill" />
      </Link>
    </div>
  );
};

export default Social;
