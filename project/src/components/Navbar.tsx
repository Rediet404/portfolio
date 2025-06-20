import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode ? 'bg-retro-navy/95 border-b border-retro-cream/10' : 'bg-retro-cream/95 border-b border-retro-navy/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className={`font-mono text-xl transition-colors ${
              isDarkMode ? 'text-retro-cream' : 'text-retro-navy'
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            &gt; Portfolio_
          </a>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <button 
              className={`p-2 ${
                isDarkMode ? 'text-retro-cream hover:text-retro-rust' : 'text-retro-navy hover:text-retro-rust'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-sm hover:text-retro-rust transition-colors ${
                  isDarkMode ? 'text-retro-cream/80' : 'text-retro-navy/80'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </nav>
        </div>

        {isMenuOpen && (
          <div 
            className={`fixed inset-0 z-50 md:hidden ${
              isDarkMode ? 'bg-retro-navy' : 'bg-retro-cream'
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                className={`p-2 ${
                  isDarkMode ? 'text-retro-cream hover:text-retro-rust' : 'text-retro-navy hover:text-retro-rust'
                }`}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-mono text-lg hover:text-retro-rust transition-colors ${
                    isDarkMode ? 'text-retro-cream' : 'text-retro-navy'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;