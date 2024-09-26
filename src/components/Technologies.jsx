import { motion } from 'framer-motion';

import { RiReactjsFill } from 'react-icons/ri';
import { RiNodejsLine } from 'react-icons/ri';
import { BiLogoMongodb } from 'react-icons/bi';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoDocker } from 'react-icons/io5';
import { FaAws } from 'react-icons/fa6';
import { DiRedis } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';
import { SiNginx } from 'react-icons/si';

const container = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-500 pb-24">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={container(2.4)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={container(2.9)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <RiNodejsLine className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={container(2)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <BiLogoMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={container(3)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={container(1.8)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <TbBrandTypescript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={container(2.5)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <IoLogoDocker className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={container(2.1)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <FaAws className="text-7xl " />
        </motion.div>
        <motion.div
          variants={container(2.7)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <DiRedis className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={container(3.2)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <GrGraphQl className="text-7xl text-pink-600" />
        </motion.div>
        <motion.div
          variants={container(2.4)}
          initial="initial"
          animate="animate"
          className="rounded border-4 border-neutral-400 p-4"
        >
          <SiNginx className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
