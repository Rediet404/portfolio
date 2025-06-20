import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Update document title
    document.title = 'Your Name | Portfolio';
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main>
          <HeroSection isDarkMode={isDarkMode} />
          <ProjectsSection isDarkMode={isDarkMode} />
          <SkillsSection isDarkMode={isDarkMode} />
          <AboutSection isDarkMode={isDarkMode} />
          <ContactSection isDarkMode={isDarkMode} />
        </main>
        
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;