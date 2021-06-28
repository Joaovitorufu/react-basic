import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'João Vitor',
      counter: 0
    };
  }

handlePClick (){
  this.setState({name: 'Rafa'}); // para o this funcionar nesse caso teremos que fazer um bind com o this --linha 8
}

handleAClick= (event) => { 
  event.preventDefault(); //preventdefault previne um evento que iria acontecer por default, ou seja, irá acontecer o que estiver dentro do metodo e não irá abrir a pagina para a documentação do react.
  const {counter} = this.state;
  this.setState({counter : counter +1}) //sempre que chamar esse metodo atualiza o contador com 1 a mais
}
render(){
  const {name, counter} = this.state; //renderizando em tela os meus estados

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}> {/* onClick serve aqui para ativar o metodo quando ser clicado */}
          {name} {counter}
        </p>
        <a
          onClick={this.handleAClick}
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
