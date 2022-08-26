
import './App.css';
import './normalize.css'
import NavBar from './components/nav-bar/NavBar';
import Hero from './components/hero/Hero'
import Acordion from './components/acordion/Accordion';
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ModalMenuMobile from './components/modals/menu-mobile/ModalMenuMobile';

function App() {
  return (
    <div className="App">
      <ModalMenuMobile />
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
