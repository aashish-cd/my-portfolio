import Navbar from '../components/navbar/';
import HomePage from '../components/home';
import About from '../components/about';
import Experience from '../components/experience';
import Service from '../components/service';
import Testimonial from '../components/testimonials';
import Contact from '../components/contact';
import Work from '../components/works';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='mainDiv'>
      {/* <Navbar /> */}
      <HomePage />
      <About />
      <Experience />
      <Service />
      <Work />
      <Testimonial />
      <Contact />

      <Footer />
    </div>
  );
}
