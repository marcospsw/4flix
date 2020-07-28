import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={""}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <div id="thiago" />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <div id="marcio" />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <div id="afonso" />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <div id="dihh" />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />  

      <Footer />
    </AppWrapper>
  );
}

export default App;
