import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact /> 
      <Footer />  
    </>
  );
}

export default App;
