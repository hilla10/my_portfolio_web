import portfolio1 from './assets/portfolio1.png';
import portfolio2 from './assets/portfolio2.png';
import portfolio3 from './assets/portfolio3.png';
import portfolio4 from './assets/portfolio4.png';
import portfolio5 from './assets/portfolio5.png';
import portfolio6 from './assets/portfolio6.webp';
import portfolio7 from './assets/portfolio7.jpg';

const data = [
  {
    id: 1,
    image: portfolio7,
    title: 'Full-Stack Doctor Appointment App (MERN + Stripe)',
    techStack: [
      {
        Frontend: ['React.js', 'Tailwind CSS', 'Axios'],
        Backend: [
          'Node.js',
          ' Express.js',
          'MongoDB',
          'JWT',
          'bcrypt',
          'cloudinary',
          'Stripe',
        ],
      },
    ],
    github: 'https://github.com/hilla10/prescripto_mern_app',
    demo: {
      User: 'https://prescripto-frontend-snowy.vercel.app',
      Admin: 'https://prescripto-admin-kappa-lovat.vercel.app',
    },
  },
  {
    id: 2,
    image: portfolio3,
    title: 'E-commerce Website (MERN Stack)',
    techStack: [
      {
        Frontend: ['React.js', 'Tailwind CSS', 'Axios'],
        Backend: [
          'Node.js',
          'Express.js',
          'MongoDB',
          'JWT',
          'bcrypt',
          'cloudinary',
          'Stripe',
        ],
      },
    ],
    github: 'https://github.com/hilla10/e-commerce-mern-app',

    demo: {
      User: 'https://e-commerce-mern-app-frontend.vercel.app',
      Admin: 'https://e-commerce-mern-app-admin.vercel.app',
    },
  },
  {
    id: 3,
    image: portfolio5,
    title: 'Online Examination System',
    techStack: [
      {
        Frontend: ['HTML', 'CSS', 'Bootstrap', 'JQUERY'],
        Backend: ['PHP', 'MySQL', 'Codeigniter'],
      },
    ],
    github: 'https://github.com/hilla10/OnlineExaminationCI',
  },

  {
    id: 4,
    image: portfolio4,
    title: 'Apple iPhone 3D Showcase',
    techStack: ['React.js', 'GSAP', 'Three.js', 'Sentry'],
    github: 'https://github.com/hilla10/iphone',
    demo: 'https://iphone-pearl-seven.vercel.app',
  },
  {
    id: 5,
    image: portfolio2,
    title: 'Apple Homepage Clone',
    techStack: ['React.js', 'Tailwind CSS', ' Framer Motion', 'Swiper.js'],
    github: 'https://github.com/hilla10/apple',
    demo: 'https://apple-one.vercel.app/',
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Explore the Possibilities of AI Chatting with Brainwavecurve',
    techStack: ['React.js', 'Tailwind CSS', 'Scroll Lock'],
    github: 'https://github.com/hilla10/brainwave',
    demo: 'https://brainwave-sigma-ten.vercel.app',
  },

  {
    id: 7,
    image: portfolio1,
    title: 'Microsoft Homepage Clone',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/hilla10/Microsoft-Home-Page',
    demo: 'https://ms-homepage-project.netlify.app/',
  },
];

export default data;
