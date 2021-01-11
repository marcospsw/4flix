import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import GenericButton from '../../../components/GenericButton';
import Loading from '../../../components/Loading';
import './style.css';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#26732B',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(infosEvento) {
    infosEvento.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    clearForm(valoresIniciais);
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://fourflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>

      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <div className="resultado">
          {'Resultado: '}
          {values.nome}
        </div>

        <GenericButton type="submit">
          Cadastro
        </GenericButton>

        <GenericButton>
          <Link className="link" to="/">
            Cancelar
          </Link>
        </GenericButton>

      </form>

      {categorias.length === 6 && (
        <Loading> </Loading>
      )}

      <ul className="lista">
        {categorias.map((categoria) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
