import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to ensure page starts at top on navigation
function ScrollToTopWrapper() {
  return <ScrollToTop />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
