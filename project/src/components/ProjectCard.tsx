/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isDarkMode: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDarkMode, onClick }) => {
  return (
    <div 
      className={`group border-2 rounded-lg p-4 transition-all ${
        isDarkMode 
          ? 'bg-retro-navy border-retro-cream/20 hover:border-retro-cream/40 text-retro-cream'
          : 'bg-retro-cream border-retro-navy/20 hover:border-retro-navy/40 text-retro-navy'
      }`}
    >
      {/* Featured Label */}
      {project.featured && (
        <div className="mb-2 inline-block bg-retro-rust text-white text-xs px-2 py-1 rounded font-semibold">
          Featured
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

      {/* Description */}
      <p className={`text-base mb-4 leading-relaxed`}>
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.techStack && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs rounded font-medium border ${
                isDarkMode
                  ? 'border-retro-cream/30 text-retro-cream/70'
                  : 'border-retro-navy/30 text-retro-navy/70'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-1 text-xs font-medium rounded border ${
              isDarkMode
                ? 'border-retro-cream/20 text-retro-cream/70'
                : 'border-retro-navy/20 text-retro-navy/70'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.demoUrl && (
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-retro-rust hover:text-retro-rust/80"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 text-sm font-semibold ${
              isDarkMode ? 'text-retro-cream/80 hover:text-retro-cream' : 'text-retro-navy/80 hover:text-retro-navy'
            }`}
          >
            <Github size={14} />
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
