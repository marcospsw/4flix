import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'


function CadastroCategoria(){
  const [categorias, setCategorias] = useState ([]);

  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: 'red',
  }

  const [values, setValues] = useState (valoresIniciais);

  function setValue (chave, valor){

    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function changeHandler(infosEvento) {
    setValue(
      infosEvento.target.getAttribute('name'), 
      infosEvento.target.value
    );
  }
  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosEvento){
        infosEvento.preventDefault();
        setCategorias ([
          ...categorias,
          values
        ]);
      }}>



        <div>
          <label>
            Nome da Categoria:
            <input 
              type="text"               
              value={values.nome} 
              name="nome"
              onChange={changeHandler}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <input 
              type="textarea" 
              value={values.descricao} 
              name="descricao"
              onChange={changeHandler}
            />
          </label>
        </div>

        <div>
          <label>
            Cor da Categoria:
            <input 
              type="color" 
              value={values.cor} 
              name="cor"
              onChange={changeHandler}
            />
          </label>
        </div>

        <button>
          Cadastro
        </button>
        
      </form>

      <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>


      
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

  export default CadastroCategoria;