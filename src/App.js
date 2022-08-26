
import './App.css';
import './normalize.css'
import NavBar from './components/nav-bar/NavBar';
import Hero from './components/hero/Hero'
import Acordion from './components/acordion/Accordion';
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Acordion />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
