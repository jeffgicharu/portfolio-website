'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
  { name: 'HTML5', icon: '🌐', category: 'frontend' },
  { name: 'CSS3', icon: '🎨', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚂', category: 'backend' },
  { name: 'Python', icon: '🐍', category: 'backend' },
  { name: 'RESTful APIs', icon: '🔌', category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { name: 'MySQL', icon: '🐬', category: 'database' },
  
  // Tools & Others
  { name: 'Git', icon: '📚', category: 'tools' },
  { name: 'Docker', icon: '🐳', category: 'tools' },
  { name: 'AWS', icon: '☁️', category: 'tools' },
  { name: 'Linux', icon: '🐧', category: 'tools' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => {
  const categories = ['frontend', 'backend', 'database', 'tools'];
  
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category} className="space-y-6">
          <h3 className="text-2xl font-semibold capitalize text-blue-600 dark:text-blue-400">
            {category === 'frontend' ? 'Frontend Development' :
             category === 'backend' ? 'Backend Development' :
             category === 'database' ? 'Database Technologies' :
             'Tools & Platforms'}
          </h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl" role="img" aria-label={skill.name}>
                      {skill.icon}
                    </span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills; 