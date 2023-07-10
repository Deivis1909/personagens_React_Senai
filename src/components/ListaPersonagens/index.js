import { useEffect, useRef, useState } from 'react';
import BlocoPersonagem from '../BlocoPersonagem';
import './styles.css';
//props recebidos do app.js
export default function ListaPersonagens( { personagens, carregaPersonagens } ) {

    const[lista,setLista] = useState(personagens);

    const inputFiltroRef = useRef();

    //controle de reacao quando personagens chegar no component , enserir no setLista
    useEffect(() => {
      
        setLista(personagens);
    
   
    }, [personagens])
    
   //metodo de excluir cria uma variavel filtrados 
   //que vai fazer um filter e pegar todos que nao são 
   // o item passado por parametro que fica excluido
    function excluirPersonagem(nome) {
        const filtrados = personagens.filter(p => p.nome !== nome);
        carregaPersonagens(filtrados);  
    }

    function filtrarPersonagem(){
        // pega a variavel passada pelo hook useReef
        // e coloca na variavel local nome
        const nome = inputFiltroRef.current.value;

        // verifica se a variavel recebida pelo UseReef
        // existe na lista de personagens se nao carrega a lista
        if(!nome){
        
            setLista(personagens);
            return;
        }
        // const selecionado recebe
        // find encontre / pegue pelo/por 
        // de personagens personagens igual ao nome que veio 
        // no useReef 
        const selecionado = personagens.find(per => per.nome === nome);

        // se existe selecionado que e o nome que veio no UseRef
        if(selecionado){

            //pega o nome que veio da useReef e seta na lista
            setLista([selecionado])


        }else{
            alert("pesonagem nao encontrado");
        }
    }

//hook state useRef guarda uma variavel , 
  //mas nao fica renderizando tudo quando esta variavel muda 
  //pega dados do formulario
  return (
    <section className='personagens-container'>
        <div className='lista-titulo'>Personagens</div>
        <div className="filtro">
            Selecione:
            <input type="text" ref={inputFiltroRef} />
            <button onClick={filtrarPersonagem}>filtrar</button>

        </div>
        <div className='lista-dados'>
            {
                lista.map(pers => <BlocoPersonagem key={pers.nome} 
                    nome={pers.nome} serie={pers.serie} imagem={pers.imagem}
                    excluirPersonagem={excluirPersonagem} />)
            }
        </div>        
    </section>
  )
}
