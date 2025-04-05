'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/portfolio.jpg",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    imageUrl: "/images/ecommerce.jpg",
    liveUrl: "https://your-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignment, and progress tracking features.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    imageUrl: "/images/task-manager.jpg",
    liveUrl: "https://your-taskapp.com",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
  // Add more projects as needed
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative h-48 w-full">
            <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 opacity-10" />
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Live Demo →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  View Code →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects; 