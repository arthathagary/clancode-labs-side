import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import whiteLogo from "../../public/assets/images/logoWhite.svg";
const Footer = () => {
  return (
    <footer className="w-full md:px-10 lg:px-32 xl:px-32 z-20 lg:justify-between  lg:flex items-center bg-[#004450] lg:py-6 ">
      <div className="text-center    z-10">
        <div className="flex justify-center items-center">
          <Image src={whiteLogo} width={260} alt="logo" />
        </div>
        <div className="flex gap-4 mb-4 justify-center mt-2">
          <FaLinkedin size={20} color="white" />
          <FaFacebookSquare size={20} color="white" />
          <AiFillInstagram size={20} color="white" />
        </div>
      </div>

      <nav className="z-10  lg:mb-5">
        <ul className="lg:flex z-10 sm:pl-20 pl-10 lg:pl-0  grid grid-cols-4 gap-3  ">
          <li className="text-[white] font-medium">Home</li>
          <li className="text-[white] font-medium">About</li>
          <li className="text-[white] font-medium">Services</li>
          {/* <li className='text-[white] font-medium'>Portfolio</li>
            <li className='text-[white] font-medium'>Careers</li>
            <li className='text-[white] font-medium'>Blog</li> */}
        </ul>
        <h6 className="text-[white] text-center mt-2">
          © {new Date().getFullYear()} Clancode Labs{" "}
        </h6>
      </nav>
    </footer>
  );
};

export default Footer;
