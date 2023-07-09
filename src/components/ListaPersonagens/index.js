import BlocoPersonagem from '../BlocoPersonagem';
import './styles.css';
//props recebidos do app.js
export default function ListaPersonagens( { personagens, carregaPersonagens } ) {
   
    function excluirPersonagem(nome) {
        const filtrados = personagens.filter(p => p.nome !== nome);
        carregaPersonagens(filtrados);  
    }
//hook state useRef guarda uma variavel , 
  //mas nao fica renderizando tudo quando esta variavel muda 
  //pega dados do formulario
  return (
    <section className='personagens-container'>
        <div className='lista-titulo'>Personagens</div>
        <div className='lista-dados'>
            {
                personagens.map(pers => <BlocoPersonagem key={pers.nome} 
                    nome={pers.nome} serie={pers.serie} imagem={pers.imagem}
                    excluirPersonagem={excluirPersonagem} />)
            }
        </div>        
    </section>
  )
}
