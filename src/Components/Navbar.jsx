import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/pigy.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const short = () => 'hover:bg-gray-200 text-lg text-black font-semibold py-2 block rounded-lg' ;
    return (
      
        <nav className={`p-6 sticky top-0 z-[20] mx-auto flex justify-around w-full md:w-auto ${scrolled ? 'bg-white' : 'bg-zinc-100'}`}>
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex-shrink-0">
            <NavLink to="/"><img className="h-8 w-auto" src={logo} alt="PiggyVest" /></NavLink>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <FiX size={35} /> : <FiMenu size={35} />}
            </button>
          </div>
          {/* Menu Items */}
          <div className={`py-2 md:flex justify-evenly items-center md:space-x-4 ${isOpen ? 'block text-center  mt-128' : 'hidden'} w-full md:w-auto`}>
            <NavLink to="/" className={short}>Save</NavLink>
            <NavLink to="/Invest" className={short}>Invest</NavLink>
            <NavLink to="/Stories" className={short}>Stories</NavLink>
            <NavLink to="/FAQs" className={short}>FAQs</NavLink>
            <NavLink to="/Resources" className={short}>Resources</NavLink>
          </div>
          {/* Auth Links */}
          <div className={`md:flex md:space-x-4 ${isOpen ? 'block text-center' : 'hidden'} w-full md:w-auto`}>
            <NavLink to="/sign-in" className="border-2 border-black mb-3 p-2 text-lg text-black font-semibold rounded-md block">Sign In</NavLink>
            <NavLink to="/register" className="bg-gray-950 mb-3 p-2 text-lg text-white font-semibold rounded-md block">Create Free account</NavLink>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;


