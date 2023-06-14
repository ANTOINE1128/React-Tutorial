import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Aboutus from './Aboutus';
import Contact from './Contactus';
import Home from './Home';

function TodoApp() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default TodoApp;
