import './App.css';
import IconesHeader from './componentes/IconesHeader';
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/OpcoesHeader';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </header>
    </div>
  );
}

export default App;
