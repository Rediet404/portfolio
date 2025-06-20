import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center relative ${
        isDarkMode ? 'bg-retro-navy text-retro-cream' : 'bg-retro-cream text-retro-navy'
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2D3047_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono mb-6 text-center">
            <span className="inline-block text-retro-rust">&gt; </span>
            <span className="inline-block after:content-['_'] after:animate-cursor-blink ">Hello, World!</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center">
            <span className="block font-mono">I'm <span className="text-retro-rust">Rediet Mesfin</span></span>
            <span className="block mt-2 font-mono">Full Stack Developer</span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-12 text-center font-mono ${
            isDarkMode ? 'text-retro-cream/80' : 'text-retro-navy/80'
          }`}>
            Creating elegant solutions through clean code and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pb-12">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-retro-rust text-white rounded-none font-mono hover:bg-retro-rust/90 transition-colors border-2 border-retro-rust hover:border-retro-rust/90"
            >
              View My Work_
            </button>
            <a 
              href="#contact" 
              className={`px-8 py-3  rounded-none font-mono transition-colors border-2 text-center ${
                isDarkMode 
                  ? 'border-retro-cream text-retro-cream hover:bg-retro-cream/10' 
                  : 'border-retro-navy text-retro-navy hover:bg-retro-navy/10'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce ">
            <button 
              onClick={scrollToProjects}
              className={`p-2 transition-colors ${
                isDarkMode ? 'text-retro-cream/70 hover:text-retro-cream' : 'text-retro-navy/70 hover:text-retro-navy'
              }`}
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;