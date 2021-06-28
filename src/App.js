import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'João Vitor'
    };
  }

handlePClick (){ //metodo criado para dar um console log a partir do click = usado na linha 25
  console.log('clicado');
}

render(){
  const {name} = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}> {/* onClick serve aqui para ativar o metodo quando ser clicado */}
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
