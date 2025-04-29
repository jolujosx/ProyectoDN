import React, { useState, useEffect } from 'react';

const AnimatedProjectCard = ({ title, description, tags, links }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const card = document.getElementById(`project-${title.replace(/\s+/g, '-')}`);
    if (card) observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, [title]);

  return (
    <div 
      id={`project-${title.replace(/\s+/g, '-')}`}
      className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isHovered ? 'shadow-2xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-72 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end p-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-600/90 text-white text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {links.demo && (
            <a 
              href={links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Ver Demo
            </a>
          )}
          {links.code && (
            <a 
              href={links.code} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              Código
            </a>
          )}
          {links.caseStudy && (
            <a 
              href={links.caseStudy} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              Caso de Estudio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedProjectCard;