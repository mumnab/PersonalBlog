import React from 'react';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Blog</h2>
      <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/thoughts">Thoughts</a></li>
        <li><a href="/photos">Photos</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: 'pink',
    gap: '2rem',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
    margin: 0,
  },
};

export default Navbar;
