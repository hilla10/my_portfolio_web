import { motion } from 'framer-motion';
import data from '../../data';
import './Portfolio.css';
import TechStack from '../TechStack';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Portfolio = () => {
  return (
    <motion.section
      id='portfolio'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        My Recent Work
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}>
        Portfolio
      </motion.h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo, techStack }, index) => (
          <motion.article
            className='portfolio__item'
            key={id}
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>

            <TechStack techStack={techStack} />

            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' rel='noreferrer'>
                Github
              </a>
              {demo && typeof demo === 'string' && (
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'>
                  Live Demo
                </a>
              )}
              {demo &&
                typeof demo === 'object' &&
                Object.entries(demo).map(([role, link]) => (
                  <a
                    key={role}
                    href={link}
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'>
                    {role} Demo
                  </a>
                ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
