import React, { useState } from 'react';
import { skills } from '../data/skills';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const [category, setCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' }
  ];
  
  const filteredSkills = category === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === category);

  return (
    <section 
      id="skills" 
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I've developed expertise in various technologies and methodologies throughout my career.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                category === cat.id
                  ? 'bg-blue-600 text-white'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <div 
              key={skill.name}
              className={`p-4 rounded-lg transition-transform hover:scale-105 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white shadow-md'
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 w-full rounded-full ${
                      i < skill.level
                        ? 'bg-blue-600'
                        : isDarkMode
                          ? 'bg-gray-600'
                          : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][skill.level - 1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;