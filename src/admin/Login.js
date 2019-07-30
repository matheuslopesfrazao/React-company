import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Endereço de email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                        <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                    </div>                    
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
                        )
                    }
                }
                
export default Login