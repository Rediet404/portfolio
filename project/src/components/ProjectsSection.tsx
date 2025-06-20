import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const selectedProjectData = projects.find(project => project.id === selectedProject);

  return (
    <section 
      id="projects" 
      className={`py-20 ${isDarkMode ? 'bg-retro-navy text-retro-cream' : 'bg-retro-cream text-retro-navy'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl font-bold mb-4 font-mono">Selected Works</h2>
          <p className={`max-w-2xl mx-auto font-mono ${isDarkMode ? 'text-retro-cream/80' : 'text-retro-navy/80'}`}>
            A curated collection of my recent projects and experiments.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 font-mono text-sm transition-colors border-2 ${
                filter === category
                  ? 'bg-retro-rust border-retro-rust text-white'
                  : isDarkMode
                    ? 'border-retro-cream/20 text-retro-cream hover:border-retro-cream/40'
                    : 'border-retro-navy/20 text-retro-navy hover:border-retro-navy/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isDarkMode={isDarkMode} 
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-retro-navy/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div 
              className={`relative max-w-4xl w-full border-2 ${
                isDarkMode 
                  ? 'bg-retro-navy border-retro-cream/20' 
                  : 'bg-retro-cream border-retro-navy/20'
              }`}
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedProjectData.imageUrl} 
                  alt={selectedProjectData.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-retro-navy/50 backdrop-blur-sm text-white hover:bg-retro-navy/70 transition-colors border border-white/20"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-mono">{selectedProjectData.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProjectData.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 text-xs font-mono border ${
                        isDarkMode 
                          ? 'border-retro-cream/20 text-retro-cream/80' 
                          : 'border-retro-navy/20 text-retro-navy/80'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={`mb-6 font-mono ${isDarkMode ? 'text-retro-cream/80' : 'text-retro-navy/80'}`}>
                  {selectedProjectData.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProjectData.demoUrl && (
                    <a 
                      href={selectedProjectData.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-retro-rust text-white font-mono border-2 border-retro-rust hover:bg-retro-rust/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Demo
                    </a>
                  )}
                  {selectedProjectData.githubUrl && (
                    <a 
                      href={selectedProjectData.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 font-mono border-2 transition-colors ${
                        isDarkMode 
                          ? 'border-retro-cream text-retro-cream hover:bg-retro-cream/10' 
                          : 'border-retro-navy text-retro-navy hover:bg-retro-navy/10'
                      }`}
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;