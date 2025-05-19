import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import SocialHandles from './components/SocialHandles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Certifications/>
      <SocialHandles/>
      <Footer/>
    </div>
  );
}

export default App;