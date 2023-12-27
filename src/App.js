import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ProjectView from './ProjectView';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  // Example projects data
  const softwareProjects = [
    { title: 'Project 1', description: 'Description 1', image: '/path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description 2', image: '/path/to/image2.jpg' },
    { title: 'Project 3', description: 'Description 3', image: '/path/to/image3.jpg' },
    { title: 'Project 4', description: 'Description 4', image: '/path/to/image4.jpg' },
    // Add more project objects
  ];

  const otherProjects = [
    { title: 'Project 1', description: 'Description 1', image: '/path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description 2', image: '/path/to/image2.jpg' },
    { title: 'Project 3', description: 'Description 3', image: '/path/to/image3.jpg' },
    { title: 'Project 4', description: 'Description 4', image: '/path/to/image4.jpg' },
    // Add more project objects
  ];

  const essays = [
    { title: 'Project 1', description: 'Description 1', image: '/path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description 2', image: '/path/to/image2.jpg' },
    { title: 'Project 3', description: 'Description 3', image: '/path/to/image3.jpg' },
    { title: 'Project 4', description: 'Description 4', image: '/path/to/image4.jpg' },
    // Add more project objects
  ];

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header toggleMode={toggleMode} darkMode={darkMode} />
      <ProjectView projects={softwareProjects} title="Software Projects" />
      <ProjectView projects={otherProjects} title="Other Projects" />
      <ProjectView projects={essays} title="Essays" />
      {/* Other components */}
    </div>
  );
}

export default App;
