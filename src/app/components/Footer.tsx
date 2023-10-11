import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="w-full justify-between items-center flex mt-3">
      <p className="text-xs sm:text-sm">@ 2023. All Rights Reserved</p>
      <p className="text-xs sm:text-sm">Designed by Daniel Morais</p>
      <div className="flex items-center gap-3">
        {/* <a href="">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-[#4267B2] w-5 h-5"
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-rose-500 w-5 h-5"
          />
        </a> */}
        <a
          href="https://www.linkedin.com/in/daniel-sousa-882440239/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[#0077B5] w-5 h-5 cursor-pointer"
          />
        </a>
        <a href="https://github.com/danielmorais123" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[#333] dark:text-zinc-100 w-5 h-5 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
