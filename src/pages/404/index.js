import React from 'react';
import PageDefault from '../../components/PageDefault';
import img404 from '../../assets/img/404.png';
import imgNotFound from '../../assets/img/not-found.png';
import './style.css';

const Pagina404 = () => (
  <>
    <PageDefault>
      <div className="div404">
        <img className="erro404" src={img404} alt="Erro 404" />
        <img className="not-found" src={imgNotFound} alt="Not Found" />
      </div>
    </PageDefault>
  </>
);

export default Pagina404;
