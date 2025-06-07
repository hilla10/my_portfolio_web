import './About.css';
import aboutMe from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Get To Know
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}>
        About Me
      </motion.h2>

      <div className='container about__container'>
        {/* Profile image with parallax effect */}
        <motion.div
          className='about__me'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <div className='about__me-image'>
            <motion.img
              src={aboutMe}
              alt='About me'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 120 }}
            />
          </div>
        </motion.div>

        {/* Content with card and paragraph animation */}
        <motion.div
          className='about__content'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}>
          <div className='about__cards'>
            <motion.article
              className='about__card'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}>
              <FaAward className='about__card-icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </motion.article>

            <motion.article
              className='about__card'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}>
              <VscFolderLibrary className='about__card-icon' />
              <h5>Projects</h5>
              <small>100+ Completed Projects</small>
            </motion.article>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}>
            👋 Hi, I’m <strong>Hailemichael Negusse</strong>—a creative,
            detail-oriented full-stack web developer with a solid
            software-engineering background. I turn ideas into fast, responsive,
            and user-friendly web applications using modern technologies. From
            crafting sleek front-ends to building robust back-end systems, I
            love writing clean, scalable code that solves real problems and
            delivers measurable value.
            <br />
            <br />I thrive in cross-functional teams, bringing digital concepts
            to life and consistently delivering high-quality experiences that
            exceed client goals. Whether working independently or with others,
            I’m always ready for a challenge—especially those that demand
            efficient, impactful web solutions. Grounded in both development and
            design principles, I build applications that are as visually
            appealing as they are functional, blending technical precision with
            a keen eye for UX/UI so every project is intuitive, maintainable,
            and a joy to use.
          </motion.p>

          <motion.a
            href='#contact'
            className='btn btn-primary'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 150 }}>
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
