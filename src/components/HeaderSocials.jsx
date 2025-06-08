import { FaDribbble, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://x.com/man_hilla' target='_blank'>
        <FaXTwitter />
      </a>
      <a href='https://linkedin.com' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/hilla10' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://www.instagram.com/hillaman592' target='_blank'>
        <FaInstagram />
      </a>
      <a href='https://dribbble.com/Hayle16' target='_blank'>
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
