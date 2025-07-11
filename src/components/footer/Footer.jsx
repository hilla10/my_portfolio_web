import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        Haila
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>

        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
        <a href='https://instagram.com'>
          <FaInstagram />
        </a>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; {new Date().getFullYear()} Hailemichael Negusse. All rights
          reserved.{' '}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
