import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/test') // proxy will handle forwarding
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <Router>
    <Navbar />
    <div style={{ padding: '2rem' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
