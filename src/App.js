import './App.css';
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/OpcoesHeader';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';

const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
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
