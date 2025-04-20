import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/test') // proxy will handle forwarding
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Spring Boot + React</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
