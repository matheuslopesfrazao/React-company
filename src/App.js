import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portfolio from './componentes/Portfolio'
import Precos from './componentes/Precos'
import Contatos from './componentes/Contatos'
import Site from './site'
import Rodape from './componentes/Rodape'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Route path="/" exact component={Inicio} /> {/* o "exact" quer dizer que essa rota só vai ser ativada, se o link for exatamente "/" */}
          <Route path="/servicos" component={Servicos} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/precos" component={Precos} />
          <Route path="/contatos" component={Contatos} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
