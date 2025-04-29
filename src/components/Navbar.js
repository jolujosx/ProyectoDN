import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          <span className="text-blue-400">{"</>"}</span> Portafolio
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition">Sobre mí</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition">Habilidades</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">Proyectos</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contacto</a>
        </div>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;