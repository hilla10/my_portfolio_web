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
        className={` tooltip ${activeNav === '#' ? 'active' : ''}`}
        onClick={() => setActiveNav('#')}
        aria-label='Home'>
        <AiOutlineHome />
        <span className='tooltiptext'>Home</span>
      </a>
      <a
        href='#about'
        className={` tooltip ${activeNav === '#about' ? 'active' : ''}`}
        onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
        <span className='tooltiptext'>About</span>
      </a>
      <a
        href='#experience'
        className={`tooltip ${activeNav === '#experience' ? 'active' : ''}`}
        onClick={() => setActiveNav('#experience')}>
        <BiBook />
        <span className='tooltiptext'>Experience</span>
      </a>
      <a
        href='#portfolio'
        className={`tooltip ${activeNav === '#portfolio' ? 'active' : ''}`}
        onClick={() => setActiveNav('#portfolio')}>
        <BiCodeAlt />
        <span className='tooltiptext'>Portfolio</span>
      </a>

      <a
        href='#testimonials'
        className={`tooltip ${activeNav === '#testimonials' ? 'active' : ''}`}
        onClick={() => setActiveNav('#testimonials')}>
        <BiCommentDetail />
        <span className='tooltiptext'>Testimonials</span>
      </a>
      <a
        href='#contact'
        className={`tooltip ${activeNav === '#contact' ? 'active' : ''}`}
        onClick={() => setActiveNav('#contact')}>
        <BiSolidMessageSquareDetail />
        <span className='tooltiptext'>Contact</span>
      </a>
    </nav>
  );
};

export default Navbar;
