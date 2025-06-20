import { Skill } from '../types';

export const skills: Skill[] = [
  // 🖥️ Backend Development
  { name: 'Node.js', level: 5, category: 'backend' },
  { name: 'Express.js', level: 5, category: 'backend' },
  { name: 'FastAPI', level: 4, category: 'backend' },
  { name: 'REST API Design', level: 5, category: 'backend' },
  { name: 'Authentication (JWT, OAuth2)', level: 4, category: 'backend' },
  { name: 'Authorization & RBAC', level: 4, category: 'backend' },
  { name: 'Caching (Redis)', level: 3, category: 'backend' },
  { name: 'Rate Limiting', level: 3, category: 'backend' },
  { name: 'WebSockets', level: 3, category: 'backend' },

  // 🖥️ Frontend 
  { name: 'HTML5', level: 5, category: 'frontend' },
  { name: 'CSS3', level: 5, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'React.js', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 4, category: 'frontend' },
  { name: 'Redux / Context API', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 4, category: 'frontend' },
  
  // 🗃️ Databases
  { name: 'PostgreSQL', level: 4, category: 'database' },
  { name: 'MongoDB', level: 4, category: 'database' },
  { name: 'Prisma ORM', level: 4, category: 'database' },
  { name: 'Sequelize ORM', level: 3, category: 'database' },

  // 🐳 DevOps & Deployment
  { name: 'Docker', level: 4, category: 'devops' },
  { name: 'Nginx', level: 3, category: 'devops' },
  { name: 'PM2', level: 3, category: 'devops' },
  { name: 'CI/CD (GitHub Actions)', level: 3, category: 'devops' },

  // 🧪 Testing
  { name: 'Unit Testing (Jest)', level: 4, category: 'testing' },
  { name: 'API Testing (Supertest/Postman)', level: 4, category: 'testing' },

  // ⚙️ Programming Languages
  { name: 'JavaScript', level: 5, category: 'language' },
  { name: 'TypeScript', level: 4, category: 'language' },
  { name: 'Python', level: 4, category: 'language' },
  { name: 'SQL', level: 4, category: 'language' },
  { name: 'Bash/Shell', level: 3, category: 'language' },

  // 🧠 Architecture & Principles
  { name: 'Clean Architecture', level: 4, category: 'architecture' },
  { name: 'MVC Pattern', level: 4, category: 'architecture' },
  { name: 'SOLID Principles', level: 3, category: 'architecture' },

  // 🛠️ Tools & Workflow
  { name: 'Git', level: 5, category: 'tools' },
  { name: 'GitHub', level: 5, category: 'tools' },
  { name: 'Agile / Scrum', level: 4, category: 'workflow' }
];
