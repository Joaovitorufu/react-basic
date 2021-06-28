import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import {Menu} from './components/Menu'
import { Abc } from './templates/Abc';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/" component={App} exact  />
      <Route path="/abc" component={Abc} exact  />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
