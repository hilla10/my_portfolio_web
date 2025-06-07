import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const Experience = () => {
  const frontendSkills = [
    { tech: 'HTML', level: 'Advanced', icon: <FaHtml5 color='#e34c26' /> },
    { tech: 'CSS', level: 'Advanced', icon: <FaCss3Alt color='#2965f1' /> },
    {
      tech: 'JavaScript',
      level: 'Intermediate',
      icon: <FaJsSquare color='#f7df1e' />,
    },
    {
      tech: 'Bootstrap',
      level: 'Intermediate',
      icon: <FaBootstrap color='#563d7c' />,
    },
    {
      tech: 'Tailwind',
      level: 'Advanced',
      icon: <SiTailwindcss color='#38bdf8' />,
    },
    { tech: 'React', level: 'Experienced', icon: <FaReact color='#61dafb' /> },
  ];

  const backendSkills = [
    {
      tech: 'Node.js',
      level: 'Intermediate',
      icon: <FaNodeJs color='#68a063' />,
    },
    { tech: 'PHP', level: 'Intermediate', icon: <FaPhp color='#8892be' /> },
    { tech: 'MySQL', level: 'Experienced', icon: <SiMysql color='#00758f' /> },
    {
      tech: 'MongoDB',
      level: 'Intermediate',
      icon: <SiMongodb color='#47A248' />,
    },
    { tech: 'Python', level: 'Beginner', icon: <FaPython color='#3776ab' /> },
  ];

  return (
    <motion.section
      id='experience'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <motion.h5
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}>
        What Skills I Have
      </motion.h5>
      <motion.h2
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}>
        My Experience
      </motion.h2>

      <div className='container experience__container'>
        {/* FRONTEND */}
        <div className='experience__frontend'>
          <h3>Front-end Development</h3>
          <div className='experience__content'>
            {frontendSkills.map(({ tech, level, icon }, index) => (
              <motion.article
                className='experience__details'
                key={tech}
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={fadeInUp}>
                <div className='experience__details-info'>
                  <h4>
                    {icon} {tech}
                  </h4>
                  <small className='text-light'>{level}</small>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className='experience__backend'>
          <h3>Back-end Development</h3>
          <div className='experience__content'>
            {backendSkills.map(({ tech, level, icon }, index) => (
              <motion.article
                className='experience__details'
                key={tech}
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={fadeInUp}>
                <div className='experience__details-info'>
                  <h4>
                    {icon} {tech}
                  </h4>
                  <small
                    className={`text-light ${
                      level === 'Advanced'
                        ? 'level-advanced'
                        : level === 'Experienced'
                        ? 'level-experienced'
                        : level === 'Intermediate'
                        ? 'level-intermediate'
                        : 'level-beginner'
                    }`}>
                    {level}
                  </small>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
