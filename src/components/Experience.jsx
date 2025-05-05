import { motion } from 'framer-motion';

import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="w-full lg:w-1/2"
            >
              <p className="mb-2 text-sm">{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{' '}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 px-2 py-1 rounded bg-neutral-400  text-sm font-medium text-purple-700"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
