import { useEffect, useState } from 'react';
import ListaPersonagens from './components/ListaPersonagens';
import './App.css';
import CadastroPersonagem from './components/CadastroPersonagem';

function App() {

  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true)

  useEffect( () => {
    fetch('dados.json')
      .then(resp => resp.json())
      .then(dados => { 
        setPersonagens(dados);
        setCarregando(false); 
      } )
      .catch(erro => console.log(erro));
  }, []);
  //passando parametros para os componetes ali <listaPerosnagens />

  if (carregando) {  // Se estiver carregando, mostrar aguarde...
    return (<h1>Aguarde...</h1>);  
  }
  return (
    <div className="App">
      
      <ListaPersonagens personagens={personagens} carregaPersonagens={setPersonagens} />
      <CadastroPersonagem personagens={personagens} carregaPersonagens={setPersonagens} />
    </div>
  );
}

export default App;