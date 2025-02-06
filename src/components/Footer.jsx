import { FaSquareInstagram,FaLinkedin,FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    const iconClass = `hover:text-gray-300 hover:scale-95 duration-200 cursor-pointer`
    return (
      <footer className="bg-slate-800  text-white text-center py-4 shadow-md">
        <div className="flex justify-center items-center gap-3 py-2 md:-4">
          <a target="_blank" href="https://www.instagram.com/utkarsh_001122/">
          <FaSquareInstagram size={35} className={iconClass}/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/utkarsh-shahare/">

          <FaLinkedin size={35} className={iconClass}/>
          </a>
          <a target="_blank" href="https://github.com/utkarsh2004git">
          <FaSquareGithub size={35} className={iconClass}/>

          </a>
        </div>
        <p>© {new Date().getFullYear()} Utkarsh. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  