import React from 'react';

const experiences = [
  {
    year: "2022 - Presente",
    role: "Ingeniero de Software Senior",
    company: "TechSolutions Inc.",
    description: "Liderar el desarrollo de aplicaciones empresariales escalables y arquitecturas de microservicios."
  },
  {
    year: "2019 - 2022",
    role: "Desarrollador Full Stack",
    company: "Digital Innovations",
    description: "Implementación de soluciones web completas desde el diseño hasta el despliegue en producción."
  },
  {
    year: "2017 - 2019",
    role: "Desarrollador Frontend",
    company: "WebCraft Studios",
    description: "Creación de interfaces de usuario interactivas y optimizadas para múltiples dispositivos."
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Experiencia Profesional</h2>
        <div className="relative">
          <div className="absolute h-full w-1 bg-blue-500 left-1/2 transform -translate-x-1/2 md:left-6"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="order-1 md:w-5/12"></div>
              <div className="order-1 w-full md:w-5/12 px-4 py-4 bg-white rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-gray-600 mb-2">{exp.company}</h4>
                <p className="text-gray-500">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;