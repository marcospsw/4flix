import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import "./menu.css";
import Button from '../Button'
//import ButtonLink from "./components/ButtonLink";

/* <ul className='Navegador'>
    <li><a href="#thiago">Thiago</a></li>
    <li><a href="#marcio">Marcio</a></li>
    <li><a href="#afonso">Afonso</a></li>
    <li><a href="#dihh">Dihh</a></li>
</ul> */

function Menu(){
    return(
        <nav className='Menu'>
            <a className='ImgButton' href="/">
                <img className='Logo' src={Logo} alt="4flix logo"/>
            </a>
            
            <Button as={Link}  to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;