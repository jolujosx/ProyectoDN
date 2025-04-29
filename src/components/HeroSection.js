import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hola, soy <span className="text-blue-400">Ingeniero en Sistemas</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-100">
          Transformo ideas en soluciones digitales con código limpio y arquitectura escalable
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg animate-fade-in delay-200">
          Ver mis proyectos
        </button>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;