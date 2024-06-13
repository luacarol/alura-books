import './App.css';
import Logo from './componentes/Logo';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

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
      </header>
    </div>
  );
}

export default App;
