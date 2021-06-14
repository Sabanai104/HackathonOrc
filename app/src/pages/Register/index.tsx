import React from 'react'
import './style.css';

function Register() {
    return (
        <div className="main">
            <div className="register-form">
                <h1>Cadastr’orc</h1>
                <div className="form-container">
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" className="text" required />
                            <div className="underline">
                            </div>
                            <label>Nome</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" className="text" required />
                            <div className="underline">
                            </div>
                            <label>Username</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" className="text" required />
                            <div className="underline">
                            </div>
                            <label>E-mail</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="password" className="text" required />
                            <div className="underline">
                            </div>
                            <label>Senha</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="password" className="text" required />
                            <div className="underline">
                            </div>
                            <label>Confirmar senha</label>
                        </div>
                    </div>
                    <button className="btn-confirm">Cadastrar</button>
                    <div className="forgotPassword">
                        <p>Uau, esqueci que já tenho uma conta :P</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Register
