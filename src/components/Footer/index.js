import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
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
