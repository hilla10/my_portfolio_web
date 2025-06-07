import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './Contact.css';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3nsqc6p',
        'template_9ew6n4o',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      )
      .then(
        () => toast.success('Message sent successfully!'),
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <motion.section
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
        Get In Touch
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        Contact Me
      </motion.h2>

      <div className='container contact__container'>
        <motion.div
          className='contact__options'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}>
          <motion.article
            className='contact__option'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring' }}>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hillaman592@gmail.com</h5>
            <a href='mailto:hillaman592@gmail.com'>Send a message</a>
          </motion.article>

          <motion.article
            className='contact__option'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring' }}>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>hillaman592@gmail.com</h5>
            <a target='_blank' href='https://m.me/ernest.achiever'>
              Send a message
            </a>
          </motion.article>

          <motion.article
            className='contact__option'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring' }}>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+251995491020</h5>
            <a
              target='_blank'
              href='https://api.whatsapp.com/send?phone=+251995491020'>
              Send a message
            </a>
          </motion.article>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            required
          />
          <textarea
            name='message'
            rows={7}
            placeholder='Your Message'
            required></textarea>
          <motion.button
            type='submit'
            className='btn btn-primary'
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring' }}>
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
