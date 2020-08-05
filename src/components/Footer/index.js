import React from 'react';
import Logo from '../../assets/img/logo-bg.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="4flix logo" />
      </a>
      <p>
        Criado por
        {' '}
        <a style={{textDecoration: 'none', fontSize: '20px'}} href="https://github.com/marcospsw">
          Marcos Wergles
        </a>
        {' '}
        Durante a
        {' '}
        <a style={{textDecoration: 'none', fontSize: '20px'}} href="https://www.alura.com.br/imersao-react/">
          Imersão Alura
        </a>         
      </p>
    </FooterBase>
  );
}

export default Footer;
