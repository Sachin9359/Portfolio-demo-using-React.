import './App.css';
import Contacts from './components/Contacts/Contacts';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
