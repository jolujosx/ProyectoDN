import React from 'react';
import AnimatedProjectCard from './AnimatedProjectCard';
import { projects } from '../mock/projects';

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;