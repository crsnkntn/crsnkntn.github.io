import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ProjectCarousel from './components/ProjectCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <IntroSection />
        <ProjectCarousel />
      </div>
    </div>
  );
}

export default App;
