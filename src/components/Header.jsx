import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-5 fixed w-full z-10 shadow-md shadow-blue-400">
      <div className="container mx-auto flex justify-between items-center md:px-10 mb-3 md:mb-0">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer hover:scale-95 duration-200">
          Utkarsh
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-5 text-lg">
          <a href="#home" className="hover:text-gray-300 hover:underline">Home</a>
          <a href="#projects" className="hover:text-gray-300 hover:underline">Portfolio</a>
          <a href="#contact" className="hover:text-gray-300 hover:underline">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.8 }} // Click effect
        >
          {menuOpen ? <IoClose size={30} /> : <HiMenu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden bg-gray-800 p-5 text-center rounded-md fixed top-16 left-1/2 -translate-x-1/2 w-11/12 shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <a href="#home" className="block py-2 hover:text-gray-300">Home</a>
            <a href="#projects" className="block py-2 hover:text-gray-300">Portfolio</a>
            <a href="#contact" className="block py-2 hover:text-gray-300">Contact</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
