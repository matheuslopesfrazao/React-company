import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)



        this.gravaPortfolio = this.gravaPortfolio.bind(this)
    }

    gravaPortfolio(e){
        const arquivo = this.imagem.files[0]
        const {name, size, type} = arquivo
                
        const ref = storage.ref(name)
        ref.put(arquivo)
        .then(img => {
            img.ref.getDownloadURL()
                .then(downloadURL => {                    
                    const novoPortfolio = {
                        titulo: this.titulo.value,
                        descricao: this.descricao.value,
                        imagem: downloadURL
                    }
                    config.push('portfolio', {
                        data: novoPortfolio
                    })
                })
        })

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