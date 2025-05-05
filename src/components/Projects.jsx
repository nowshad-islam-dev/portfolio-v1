import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, projectIndex) => (
          <ProjectCard key={projectIndex} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  return (
    <div className="mb-16 flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8">
      {/* Image Carousel */}
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-2/4 relative"
      >
        <div className="relative w-full h-[400px] overflow-hidden rounded">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.images[currentImage]}
              src={project.images[currentImage]}
              alt={project.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 w-full flex justify-between px-2 transform -translate-y-1/2">
            <button
              onClick={prevImage}
              className="bg-white/70 px-3 py-1 text-xl rounded shadow"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="bg-white/70 px-3 py-1 text-xl rounded shadow"
            >
              ›
            </button>
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-2/4 max-w-xl"
      >
        <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
        <p className="mb-4 text-sm text-neutral-700">{project.description}</p>
        <div className="flex flex-wrap">
          {project.technologies.map((tech, index) => (
            <span
              className="mr-2 mb-2 px-2 py-1 rounded bg-neutral-400 text-sm font-medium text-purple-700"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
