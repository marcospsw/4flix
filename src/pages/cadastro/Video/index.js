import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import GenericButton from '../../../components/GenericButton';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo);
  const valoresInicias = {
    titulo: 'Video Padrao',
    url: 'https://www.youtube.com/watch?v=BtCt8K4O8kg',
    categoria: 'Fila de Piadas',
  };
  const { handleChange, values } = useForm(valoresInicias);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);


  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado !!!!');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('cadatrou o video');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <GenericButton type="submit">
          Cadastrar
        </GenericButton>

      </form>
      <GenericButton>
        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </GenericButton>

    </PageDefault>
  );
}

export default CadastroVideo;
