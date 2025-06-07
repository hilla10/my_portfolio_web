import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Navbar,
  Portfolio,
  Testimonials,
} from './components';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
