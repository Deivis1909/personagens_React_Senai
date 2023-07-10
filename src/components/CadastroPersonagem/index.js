import { useRef,useState } from 'react';
import './styles.css';

export default function CadastroPersonagem( { personagens, carregaPersonagens } ) {

  //hook state useRef guarda uma variavel , 
  //mas nao fica renderizando tudo quando esta variavel muda 
  //pega dados do formulario
  const [msgErro, setMsgErro] = useState('');
  const inputNomeRef = useRef();
  const inputSerieRef = useRef();
  const inputImagemRef = useRef();

  function handleAdicionarPersonagem(e) {
    e.preventDefault();  // evita o comportamento padrão de enviar o formulario pro servidor e recarregar a tela
    const nome = inputNomeRef.current.value;
    const serie = inputSerieRef.current.value;
    const urlImagem = inputImagemRef.current.value;

    // function some = alguns/ retorna só true ou false 
    const jaExiste = personagens.some(p => p.nome === nome);
    
    if (jaExiste) {
      // alert("Já foi cadastrado personagem com este nome!");
      setMsgErro('Já foi cadastrado personagem com este nome!');
      return;
    }

    const novo = {
       nome: nome,
       serie: serie,
       imagem: urlImagem
    };


    const atualizado = [...personagens, novo];
    carregaPersonagens(atualizado);

    inputNomeRef.current.value = '';
    inputSerieRef.current.value = '';
    inputImagemRef.current.value = '';
    setMsgErro('');
  }

  return (
    <section className='cadastro-container'>
    <div className='cadastro-titulo'>Cadastro</div>


    <form onSubmit={ handleAdicionarPersonagem } className="form-personagem">


      <div className='form-grupo'>
        <label htmlFor="input-nome">Nome: </label>
        <input type="text" required id="input-nome" ref={inputNomeRef} placeholder="Informe o nome" />
      </div>
      <div className='form-grupo'>
        <label htmlFor="input-serie">Série: </label>
        <input type="text" required id="input-serie" ref={inputSerieRef} placeholder="Informe a Série" />
      </div>
      <div className='form-grupo'>
        <label htmlFor="input-imagem">URL da Imagem: </label>
        <input type="url" id="input-imagem" ref={inputImagemRef} placeholder="http://www..." />
      </div>
      <input type="submit" value="Adicionar" className='btn-adicionar' /> 

      <span className='msg-erro'>{msgErro !== '' ? msgErro : null}</span>
    
    </form>
</section>
)
}
