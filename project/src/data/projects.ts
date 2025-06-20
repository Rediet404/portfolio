import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Software Company Website',
    description: 'A full-featured Software Company Website built with React. ',
    category: 'Frontend',
    tags: ['React', 'Tailwind'],
    imageUrl: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://timesoftwareplc.com',
    featured: false
  },  
    {
      id: '2',
      title: "TimeFund – Fundraiser App",
      category: "Fullstack ",
      tags: ["Node.js", "Express", "PostgreSQL", "React", "JWT", "Docker"],
      description: "Built a fullstack fundraising platform for managing campaigns, donor accounts, and secure transactions. Implemented secure authentication, RESTful APIs, and responsive frontend interfaces.",
      purpose: "Company Project (Time Software)"
    },
    {
      id: '3',
      title: "Nikodimos Church Website",
      category: "Fullstack ",
      tags: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      description: "Developed a custom event management system for a local church, allowing admin users to create, edit, and schedule events with RSVP and calendar integration.",
      purpose: "Freelance / Community Project"
    },
    {
      id: '4',
      title: "Sitota – Web Page for Mobile App",
      category: "Frontend",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      description: "Designed and built a static landing page to showcase the features of the Sitota mobile application, including responsive design and smooth animations.",
      purpose: "Freelance / Showcase"
    },
    {
      id: '5',
      title: "Spam Email Classifier",
      category: "Backend Developer / ML Integrator",
      tags: ["Python", "Scikit-learn", "Pandas", "CLI", "Joblib"],
      description: "Created a machine learning classifier to detect spam emails using the UCI Spambase dataset. Deployed via a command-line interface with real-time prediction.",
      purpose: "Academic / School Project"
    },
    {
      id: '6',
      title: "Personal Blog Site Backend",
      category: "Backend",
      tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
      description: "Built a production-ready blog backend with secure user authentication, role-based access, and full CRUD for posts and comments.",
      purpose: "Personal Project"
    }
    
  
];