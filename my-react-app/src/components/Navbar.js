import React from 'react';

function Navbar() {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12){
      return 'Good Morning 🌞';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon ☀️';
    } else if (hour >= 17 && hour < 21) {
      return 'Good Evening 🌇';
    } else {
      return 'Good Night 🌙';
    }
  }
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>{greeting()}</h2>
      <ul style={styles.navLinks}>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/thoughts">Thoughts</a></li>
        <li><a href="#/photos">Photos</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    height: '100vh', 
    width: '160px',  
    backgroundColor: 'pink',
    color: 'purple',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start',
    padding: '2rem 1rem',
    position: 'fixed', 
    top: 0,
    left: 0,
  },
  logo: {
    marginBottom: '2rem', 
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column', 
    gap: '1rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
};

export default Navbar;
