import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'


function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#26732B',
  }
  
  const [categorias, setCategorias] = useState ([]);
  const [values, setValues] = useState (valoresIniciais);

  function setValue (chave, valor){

    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosEvento) {
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value
    );
  }

  function handleSubmit(infosEvento){
    infosEvento.preventDefault();
    setCategorias ([
      ...categorias,
      values
    ]);
    setValues(valoresIniciais)
  }

  return(
    <PageDefault>

      <h1>Cadastro de Categoria</h1>
      {values.nome}

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
        <Button>
          Cadastro
        </Button>
        
      </form>
      
      <Button>
      <Link to="/">
        Cancelar
      </Link>
      </Button>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
    </PageDefault>
  );
}

  export default CadastroCategoria;