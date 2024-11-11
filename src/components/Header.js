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
