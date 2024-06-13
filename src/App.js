import './App.css';
import Logo from './componentes/Logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <ul className='opcoes'>
          { textoOpcoes.map((textoOpcao) => (
            <li className='opcao'><p>{textoOpcao}</p></li>
          )) }
        </ul>

        <ul className='icones'>
          { icones.map((icone) => (
            <li className='icone'><img src={icone} alt={`${icones} name`}/></li>
          )) }
        </ul>
      </header>
    </div>
  );
}

export default App;
