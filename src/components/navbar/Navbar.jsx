import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import {
  BiBook,
  BiSolidMessageSquareDetail,
  BiCodeAlt,
  BiCommentDetail,
} from 'react-icons/bi';

import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href='#'
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
        aria-label='Home'>
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}>
        <BiBook />
      </a>

      {/* <a
        href='#portfolio'
        className={activeNav === '#portfolio' ? 'active' : ''}
        onClick={() => setActiveNav('#portfolio')}>
        <BiCodeAlt />
      </a> */}

      <a
        href='#portfolio'
        className={`tooltip ${activeNav === '#portfolio' ? 'active' : ''}`}
        onClick={() => setActiveNav('#portfolio')}>
        <BiCodeAlt />
        <span className='tooltiptext'>Portfolio</span>
      </a>

      <a
        href='#testimonials'
        className={activeNav === '#testimonials' ? 'active' : ''}
        onClick={() => setActiveNav('#testimonials')}>
        <BiCommentDetail />
      </a>
      <a
        href='#contact'
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}>
        <BiSolidMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
