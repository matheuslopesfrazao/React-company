import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)



        this.gravaPortfolio = this.gravaPortfolio.bind(this)
    }

    gravaPortfolio(e){
        console.log('Vamos gravar o portfolio aí mano?!')
        console.log(this.titulo.value)
        console.log(this.descricao.value)
        console.log(this.imagem.value)

        e.preventDefault() // Bloqueia o refresh da página depois de clicar no botão submit (Botão salvar)
    }

    render() {
        return (
            <div className="container">
                <h2>Portfolio - Área administrativa</h2>
                <form onSubmit={this.gravaPortfolio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Seu email" ref={(ref) => this.titulo = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio