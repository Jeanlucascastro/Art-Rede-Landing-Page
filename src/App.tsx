import React from 'react';
import gato from './969114_184494328389275_732875974_n.jpg';
import cat from './cat.jpg';
import rede from './rede.jpg';
import varal from './varal.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaPhone } from 'react-icons/fa';

const whatsappIcon = icon(faWhatsapp)
const insta = icon(faInstagram)
const face = icon(faFacebook)


function App() {

  function handleClickWhats() {
    window.location.href = 'https://api.whatsapp.com/send?phone=554399453545';
  }

  function handleClickInsta() {
    window.location.href = 'https://www.instagram.com/artrede1/';
  }

  function handleClickFace() {
    window.location.href = 'https://www.facebook.com/artrede2';
  }

  function handleClickPhone() {
    window.location.href = 'tel:4333423783';
  }

  return (
    <div className="App">
      <div className="header">
    <h1>Art Rede</h1>
    <div className='redes'>
    <button className="icon-container" onClick={handleClickWhats}>
    <FontAwesomeIcon icon={whatsappIcon}  className='whatsapp-icon'/>
    </button>
    <button className="icon-container" onClick={handleClickInsta}>
    <FontAwesomeIcon icon={insta} className='insta-icon' />
    </button>
    <button className="icon-container" onClick={handleClickFace}>
    <FontAwesomeIcon icon={face}  className='face-icon'/>
    </button>
    </div>

      </div>
      <div className="App-header">
        <div className='body'>
            <p className='text-titulo'>Art Rede</p>
            <p className='text-titulo' >Rede de Proteção para Apartamentos e Varais</p>
            <p className='text-titulo'>Faça já seu Orçamento</p>
            <div className="text-titulo texto">
                <p className='text-container-texto'>Art Rede é uma empresa especializada na instalação de redes de proteção e varais. Está no mercado há mais de duas décadas, trabalhando somente com redes de alta qualidade certificadas pelo Instituto Falcão Bahuer. Por isso, podemos oferecer um serviço de qualidade e garantia.</p>
              </div>
              <div className='orcamento'>
          {/* <h1>Faça já seu Orçamento</h1> */}
          <button className="icon-container-body" onClick={handleClickWhats}>
              <FontAwesomeIcon icon={whatsappIcon}  className='whatsapp-icon'/>
              <div className="icon">
                  <h2 className="whatsapp-link">(43) 9 9945-3545</h2>
              </div>
          </button>
          <button className="icon-container-body" onClick={handleClickPhone}>
              <FaPhone  className='phone-icon'/>
              <div className="icon">
                  <h2 className="whatsapp-link">(43) 3342-3783</h2>
              </div>
          </button>
        </div>
        </div>
        <div className="container">
              <div className="imagem">
                <img src={rede}  alt="Imagem 2"/>
              </div>
              <div className="imagem">
                <img src={cat} alt="Imagem 1"/>
              </div>
              <div className="imagem">
                <img src={varal}  alt="Imagem 3" />
              </div>
              <div className="imagem">
                <img src={gato}  alt="Imagem 3" />
              </div>
        </div>
  </div>
</div>

  );
}

export default App;
