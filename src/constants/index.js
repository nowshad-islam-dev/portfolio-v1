import ide_x_1 from '../assets/projects/ide-x/ide-x-1.png';
import ide_x_2 from '../assets/projects/ide-x/ide-x-2.png';
import ide_x_3 from '../assets/projects/ide-x/ide-x-3.png';
import ide_x_4 from '../assets/projects/ide-x/ide-x-4.png';
import angkon_1 from '../assets/projects/angkon/angkon-1.png';
import angkon_2 from '../assets/projects/angkon/angkon-2.png';

export const HERO_CONTENT = `I love challenging and creattive tasks where I can grow at a good pace. Proficient in modern technologies like React, Git, Node.js, Redis, Linux and TypeScript, I deliver scalable solutions powered by AWS, Docker, Postgres, GraphQl & MongoDB, ensuring seamless integration from front-end to back-end. With strong communication skills and fluency in English, I thrive in collaborative environments and ensure efficient solution of problems provided to me.`;

export const ABOUT_TEXT = `I'm a passionate full stack engineer with expertise in building dynamic, user-friendly applications. With hands-on experience in React, Tailwind, Material UI, Node.js, and Javascript, I enjoy creating seamless front-end experiences paired with robust back-end systems using Express, MongoDB, Postgres, GraphQl and Redis. I'm proficient in deploying and managing applications in cloud environments like AWS, and I use Docker, Kafka and Nginx to ensure scalability and efficient delivery. With a strong focus on performance and code quality, I'm always exploring the latest web development trends to create cutting-edge solutions.`;

export const EXPERIENCES = [
  {
    year: '2023 - 2024',
    role: ' Backend Developer',
    company: 'Brokerage (real estate & housing)',
    technologies: ['Typescript', 'Linux', 'Apache', 'MySQL', 'Redis'],
  },
  {
    year: '4 months contract',
    role: 'Full Stack Engineer',
    company: 'ShareChat (social media platform)',
    technologies: [
      'Sentry',
      'RabbitMQ',
      'Javascript',
      'Docker',
      'Svelte',
      'Node.js',
    ],
  },
  {
    year: '2022 - 2023',
    role: 'Software Engineering Intern',
    company: 'Maxwell Stamp Ltd.',
    technologies: ['Jquery', 'Twilio', 'Redux'],
  },
];

export const PROJECTS = [
  {
    title: 'IDE-X',
    images: [ide_x_3, ide_x_1, ide_x_4, ide_x_2],
    description:
      'IDE-X is a full-stack web application inspired by platforms like CodePen. It allows users to create, save and share code snippets in real-time. The app provides a seamless coding experience with features like live previews, dark mode, secure authentication, and GitHub OAuth login.',
    technologies: [
      'React',
      'Monaco-Editor',
      'Express',
      'Nodemailer',
      'MongoDB',
      'Passport.js',
    ],
  },
  {
    title: 'ANGKON',
    images: [angkon_2, angkon_1],
    description:
      'A dynamic and extensible drawing app built with React, Zustand, and React-Konva. This canvas supports free drawing, shape creation, selection, transformation, color/stroke editing, erasing, and undo/redo — all with a clean grid background and intuitive toolbar.',
    technologies: ['React', 'Konva', 'Material UI', 'Tailwind CSS'],
  },
];

export const CONTACT = {
  address: 'Dhaka, Bangladesh ',
  phoneNo: '+8801783367124 ',
  email:
    '[mdnowshadislam.2108033.ruet.mte@gmail.com OR nowshadislam02@gmail.com]',
};
