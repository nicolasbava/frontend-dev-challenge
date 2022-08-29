
import './App.css';
import './normalize.css'
import NavBar from './components/nav-bar/NavBar';
import Hero from './components/hero/Hero'
import Acordion from './components/acordion/Accordion';
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ModalMenuMobile from './components/modals/menu-mobile/ModalMenuMobile';


import { useSelector } from 'react-redux'
import AlertModal from './components/modals/alert/AlertModal';
import ModalWsp from './components/modals/whatsapp/Whatsapp';

function App() {



  const isAlertOpen = useSelector( (state) =>  state.state.isAlertOpen)


  return (
    <div className="App">
      

      <ModalMenuMobile />
      {isAlertOpen && <AlertModal />}

      <ModalWsp />
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
