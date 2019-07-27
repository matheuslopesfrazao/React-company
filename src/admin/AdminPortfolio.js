import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <h2>Portfolio - Área administrativa</h2>
                <form>
                    <div className="form-group">
                        <label for="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Seu email" />
                    </div>
                    <div className="form-group">
                        <label for="descricao">Descrição</label>
                        <textarea class="form-control" id="descricao" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="Imagem">Imagem</label>
                        <input type="file" class="form-control-file" id="imagem" />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio