import logo from '../assets/portfolio_favicon.png';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center cursor-pointer">
        <img
          className="mx-2 w-16 aspect-video rounded-md"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a target="_blank" href="https://github.com/nowshad-islam-dev">
          <FaGithub className="cursor-pointer hover:opacity-50" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nowshad-islam-dev/"
        >
          <FaLinkedin className="cursor-pointer hover:opacity-50" />
        </a>
        <a target="_blank" href="#">
          <FaSquareTwitter className="cursor-pointer hover:opacity-50" />
        </a>
        <a target="_blank" href="https://www.instagram.com/____sha_won___/">
          <FaInstagram className="cursor-pointer hover:opacity-50" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
