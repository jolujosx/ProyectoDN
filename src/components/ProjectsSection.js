import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Sistema de Gestión',
    description: 'Plataforma completa para administración empresarial con dashboard interactivo',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'App de Tareas',
    description: 'Aplicación para gestión de tareas con recordatorios y colaboración en equipo',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'E-commerce',
    description: 'Tienda online con carrito de compras y pasarela de pagos integrada',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Análisis de Datos',
    description: 'Herramienta para visualización y análisis de grandes volúmenes de datos',
    tags: ['Python', 'Pandas', 'D3.js'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;