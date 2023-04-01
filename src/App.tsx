import React from 'react';
import gato from './969114_184494328389275_732875974_n.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const whatsappIcon = icon(faWhatsapp);
const insta = icon(faInstagram)
const face = icon(faFacebook)




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
        <div className='body'>
        <p>Rede de Proteção para Apartamentos e Varais</p>
        </div>
        {/* <div className='imagem'>
            <img src={gato} alt="Gato na rede de Proteção"></img>
        </div> */}
        <div className='redes'>
    <button className="icon-container" onClick={handleClick}>
    <FontAwesomeIcon icon={whatsappIcon}  className='whatsapp-icon'/>
      <div className="icon">
        <a className="whatsapp-link">
          <h2>WhatsApp</h2>
        </a>
      </div>
    </button>
    <button className="icon-container" onClick={handleClick}>
    <FontAwesomeIcon icon={insta} className='insta-icon' />
          <div className="icon">
        <a className="whatsapp-link">
          <h2>Instagram</h2>
        </a>
      </div>
    </button>
    <button className="icon-container" onClick={handleClick}>
    <FontAwesomeIcon icon={face}  className='face-icon'/>
      <div className="icon">
        <a className="whatsapp-link">
          <h2>Facebook</h2>
        </a>
      </div>
    </button>
    </div>
  </div>
</div>

  );
}

export default App;
