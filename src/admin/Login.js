import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.email = null
        this.senha = null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario(){
        console.log(this.email.value, this.senha.value)
    }


    render() {
        return (
            <div className="container">
                <h1>Login</h1>                
                    <div className="form-group">
                        <label for="exampleInputEmail1">Endereço de email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                        <small id="emailHelp" name="email" ref={ref => this.email = ref} className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" name="senha" ref={ref => this.senha = ref} class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                    </div>                    
                    <button type="button" className="btn btn-primary" onClick={this.autenticaUsuario}>Enviar</button>                
            </div>
                        )
                    }
                }
                
export default Login