import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* This is the KEY fix */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Testimonial" element={<Testimonial />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
