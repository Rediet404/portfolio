import React from 'react';
import { FileText } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className={`rounded-lg overflow-hidden border-4 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-100'
              }`}>
                <img 
                  src="src/assets/pp.jpg"
                  alt="Professional headshot" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className={`absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <p className="text-lg font-bold text-blue-600">4+ Years</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                   Experience
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Hello, I'm Your Name</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With over 5 years of experience in the industry, I've had the opportunity to work on a variety of projects from small startups to large enterprise applications.
              </p>
              
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My journey began with a degree in Computer Science, followed by roles at several technology companies where I honed my skills in both frontend and backend development. I'm particularly passionate about React, TypeScript, and modern application architecture.
              </p>
              
              <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
              </p>
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;