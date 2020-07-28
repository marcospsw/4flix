import React from 'react';
import Logo from '../../assets/img/logo.png';
import "./menu.css";
import Button from '../Button'
//import ButtonLink from "./components/ButtonLink";

function Menu(){
    return(
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="4flix logo"/>
            </a>
            <ul className='Navegador'>
                <li><a href="#thiago">Thiago</a></li>
                <li><a href="#marcio">Marcio</a></li>
                <li><a href="#afonso">Afonso</a></li>
                <li><a href="#dihh">Dihh</a></li>
            </ul>
            <Button as="a"  href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;