import React, { Component } from 'react'

import Cabecalho from './componentes/Cabecalho'
import Site from './site'
import Rodape from './componentes/Rodape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <Site />
        <Rodape />
      </div>
    );
  }  
}

export default App;
