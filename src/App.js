import React, { Component } from 'react'

import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Site from './site'
import Rodape from './componentes/Rodape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <Inicio />
        <Site />
        <Rodape />
      </div>
    );
  }  
}

export default App;
