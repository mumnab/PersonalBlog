import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Thoughts from './pages/Thoughts';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/test')
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <Router>
    <Navbar />
    <div style={{ padding: '2rem' }}>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/thoughts" element={<Thoughts/>} />

      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
