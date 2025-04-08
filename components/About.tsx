'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
          Who I Am
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I am a passionate Full Stack Web Developer with a strong foundation in modern web technologies. 
          My journey in web development started with a curiosity about how things work on the internet, 
          which has evolved into a professional career building robust and user-friendly applications.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I specialize in building responsive and performant web applications using cutting-edge technologies
          like React, Next.js, and TypeScript. I&apos;m committed to writing clean, maintainable code and
          following best practices in software development.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/jeffgicharu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jeff-gicharu-0924a4217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[400px] rounded-lg overflow-hidden"
      >
        <Image
          src="/profile-image.jpeg"
          alt="Jeff Gicharu"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
};

export default About; 