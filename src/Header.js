import React from 'react';

function Header({ toggleMode, darkMode }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: '0' }}>Carson Ellis</h1>
      <nav>
        <a href="/pct-blog" style={{ margin: '0 10px' }}>PCT Blog</a>
        <a href="/resume" style={{ margin: '0 10px' }}>Resume</a>
      </nav>
      <button onClick={toggleMode}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}

export default Header;
