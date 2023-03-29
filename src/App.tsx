import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const whatsappIcon = icon(faWhatsapp);





function App() {

  function handleClick() {
    window.location.href = 'https://api.whatsapp.com/message/2WYOQ3NUJ7NVP1?autoload=1&app_absent=0';
  }

  return (
    <div className="App">
      <div className="header">
    <h1>Art Rede</h1>
      </div>
      <div className="App-header">
    <button className="icon-container" onClick={handleClick}>
    <FontAwesomeIcon icon={whatsappIcon}  className='whatsapp-icon'/>
      <div className="icon">
        <a href="https://api.whatsapp.com/message/2WYOQ3NUJ7NVP1?autoload=1&app_absent=0" className="whatsapp-link">
          <h2>Clique para WhatsApp</h2>
        </a>
      </div>
      
    </button>
  </div>
</div>

  );
}

export default App;
