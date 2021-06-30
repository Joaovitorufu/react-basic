import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css'
import Home from './templates/Home';
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import {Menu} from './components/Menu'
import { Abc } from './templates/Abc';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/" component={Home} exact  />
      <Route path="/abc" component={Abc} exact  />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


