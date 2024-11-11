#!/bin/bash

# Navigate to src directory
cd src || { echo "src directory not found!"; exit 1; }

# Step 1: Create components directory
mkdir -p components

# Step 2: Create Header Component
cat <<EOL > components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div className="highlight-box">
      <FontAwesomeIcon icon={faExternalLinkAlt} />
      <span>I just hiked 2000 miles!</span>
      <a href="#">Read More</a>
    </div>
  );
}

export default Header;
EOL

# Step 3: Create IntroSection Component
cat <<EOL > components/IntroSection.js
import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <div className="intro-section">
      <div className="intro-text">
        <h1>Welcome to My Portfolio</h1>
        <h2>Explore my projects</h2>
        <p>Discover my journey through technology and development.</p>
      </div>
    </div>
  );
}

export default IntroSection;
EOL

# Step 4: Create ProjectCarousel Component
cat <<EOL > components/ProjectCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProjectCarousel.css';
import ProjectPreview from './ProjectPreview';

function ProjectCarousel() {
  return (
    <div className="project-carousel">
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <ProjectPreview projectName="Project 1" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectPreview projectName="Project 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
EOL

# Step 5: Create ProjectPreview Component
cat <<EOL > components/ProjectPreview.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './ProjectPreview.css';

function ProjectPreview({ projectName }) {
  return (
    <div className="project-preview">
      <div className="project-name">{projectName}</div>
      <div className="nav-buttons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    </div>
  );
}

export default ProjectPreview;
EOL

# Step 6: Create CSS files for each component
cat <<EOL > components/Header.css
.highlight-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #3CB371;
  padding: 20px 0;
  color: #FFFFFF;
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
EOL

cat <<EOL > components/IntroSection.css
.intro-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  padding-left: 100px;
}

.intro-text h1 {
  font-size: 48px;
  font-weight: bold;
  color: #F0F4F4;
}

.intro-text h2 {
  font-size: 36px;
  font-weight: 600;
  color: #3CB371;
  margin-top: 10px;
}

.intro-text p {
  font-size: 18px;
  font-weight: bold;
  color: #3CB371;
}
EOL

cat <<EOL > components/ProjectCarousel.css
.project-carousel {
  width: 60%;
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
}
EOL

cat <<EOL > components/ProjectPreview.css
.project-preview {
  background-color: #3CB371;
  color: #F0F4F4;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-name {
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-buttons a {
  color: #2BA84A;
  text-decoration: none;
  font-weight: bold;
  padding: 12px;
  border-radius: 50%;
  border: 2px solid #2BA84A;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-buttons a:hover {
  background-color: rgba(43, 168, 74, 0.2);
}
EOL

# Step 7: Update App.js to use the components
cat <<EOL > App.js
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
EOL

# Notify the user that the script has finished
echo "Modular components have been created, and App.js has been updated. Run 'npm start' to view changes."
