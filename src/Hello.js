import React, { Component } from 'react';

import ListaFotos from './components/ListaFotos';
//import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>InstaStuff</h2>
        </div>
        <div className="container">
          <input type="text" className="form-control" placeholder="¿Qué buscas?" />
        </div>
        <ListaFotos />
      </div>
    );
  }
}

export default Hello;