import React from 'react';
import Logo from '../../assets/img/logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <img className='Logo' src={Logo} alt="4flix logo"/>
      <p>        
        Criado por
        {' '}
        <a href="https://github.com/marcospsw">
          Marcos Souza
        </a>
        <p>Durante a Imersão Alura</p>
      </p>
    </FooterBase>
  );
}

export default Footer;
