// import Image from "next/image";
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <PageTransition>
        <section id="hero" className="flex items-center justify-center py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Jeff Gicharu</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Full Stack Web Developer
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </PageTransition>

      {/* About Section */}
      <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <About />
        </section>
      </PageTransition>

      {/* Skills Section */}
      <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <Skills />
        </section>
      </PageTransition>

      {/* Projects Section */}
      <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <Projects />
        </section>
      </PageTransition>

      {/* Experience Section */}
      <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <Experience />
        </section>
      </PageTransition>

      {/* Contact Section */}
      <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <Contact />
        </section>
      </PageTransition>
    </>
  );
}
