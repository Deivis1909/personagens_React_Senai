import './styles.css';

//function excluir recebida por parametro 
export default function BlocoPersonagem( { nome, serie, imagem, excluirPersonagem } ) {

 

   //pra excluir personagem cria uma funcao anonima antes da funcao para esta na executar a exclusao na hora e nao espera no click
  //onClick={ () => excluirPersonagem(nome) } sem handlesubmit
  return (
    <div className='personagem-container'>
      <div className='personagem-foto'>
        <img src={imagem} alt='foto do personagem' />
      </div>
      <div className='personagem-info'>
        <span className='personagem-info-nome'>{nome}</span>
        <span className='personagem-info-serie'>{serie}</span>
      </div>
      <div className='personagem-botoes'>
        <button onClick={() => excluirPersonagem(nome) } >Excluir</button>
        
      </div>
    </div>
  )
}