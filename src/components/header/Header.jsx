import './Header.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useRef } from 'react';

import CTA from '../CTA.jsx';
import me from '../../assets/me.png';
import { LuArrowDown } from 'react-icons/lu';
import HeaderSocials from '../HeaderSocials.jsx';

const Header = () => {
  const ref = useRef(null);
  return (
    <header ref={ref}>
      <div className='container header__container'>
        {/* Greeting */}
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Hello I'm
        </motion.h5>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}>
          Hailemichael Negusse
        </motion.h1>

        {/* Typing Effect */}
        <motion.h5
          className='text-light'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}>
          <TypeAnimation
            sequence={[
              'Fullstack Developer',
              2000,
              'React.js Developer',
              2000,
              'Node.js Enthusiast',
              2000,
              'MERN Stack Developer',
              2000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '1rem', display: 'inline-block' }}
          />
        </motion.h5>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}>
          <CTA />
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}>
          <HeaderSocials />
        </motion.div>

        {/* Parallax Image */}
        <motion.div className='me'>
          <img src={me} alt='my image' />
        </motion.div>

        {/* Scroll down arrow */}
        <motion.a
          href='#contact'
          className='scroll__down'
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}>
          <LuArrowDown size={30} style={{ color: '#4db5ff' }} />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
