import React, { useState } from 'react';

const ProjectCard = ({ title, description, tags, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-64 bg-gray-800 flex items-center justify-center">
        <div className="text-white text-center p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition">
            Ver Demo
          </button>
          <button className="px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition">
            Código
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;