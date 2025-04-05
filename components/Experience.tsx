'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Tech Company",
    location: "City, Country",
    period: "2023 - Present",
    description: [
      "Led development of multiple web applications using React and Node.js",
      "Implemented responsive designs and improved website performance by 40%",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "City, Country",
    period: "2022 - 2023",
    description: [
      "Developed and maintained client websites using modern JavaScript frameworks",
      "Optimized web applications for maximum speed and scalability",
      "Worked closely with designers to implement pixel-perfect UI designs",
    ],
    technologies: ["JavaScript", "React", "CSS", "Git"],
  },
  {
    title: "Web Development Intern",
    company: "Startup",
    location: "City, Country",
    period: "2021 - 2022",
    description: [
      "Assisted in developing and maintaining company website",
      "Learned and implemented modern web development practices",
      "Participated in code reviews and team meetings",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
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
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};

const Experience = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

      {experiences.map((exp, index) => (
        <motion.div
          key={`${exp.company}-${exp.period}`}
          variants={item}
          className={`relative flex md:justify-between items-start mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Content */}
          <div className="md:w-5/12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {exp.title}
              </h3>
              <div className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                {exp.company}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {exp.location} | {exp.period}
              </div>
              
              <ul className="mt-4 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience; 