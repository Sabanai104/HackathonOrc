import React, { useEffect, useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './style.css';
import {initialValues, UserInfoSchema, handleSubmit} from './formSettings';


function Register() {
    // // const [formName, setFormName] = useState("");
    // // const [formUserName, setFormUserName] = useState("");
    // // const [formEmail, setFormEmail] = useState("");
    // const [formPassword, setFormPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    
    return (
        <div className="main">
            <div className="register-form">
                <h1>Cadastr’orc</h1>
                <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleSubmit(values);
                    console.log(values);
                }}
                validationSchema={UserInfoSchema}
                >
                    <Form id="form-container">
                        <Field type="name" name="name" placeholder="Nome" className="input-data" />
                        <ErrorMessage name="name" component="div" className="errorField" />
                        <Field type="name" name="userName" placeholder="User" className="input-data" />
                        <ErrorMessage name="userName" component="div" className="errorField" />
                        <Field type="email" name="email" placeholder="Email" className="input-data"/>
                        <ErrorMessage name="email" component="div" className="errorField" />
                        <Field name="password" type="password" placeholder="Senha" className="input-data"></Field>
                        <ErrorMessage name="password" component="div" className="errorField" />
                        <Field name="passwordConfirmation" type="password" placeholder="Confirmar Senha" className="input-data"></Field>
                        <ErrorMessage name="passwordConfirmation" component="div" className="errorField" />
                        <button className="btn-confirm" type="submit">Cadastrar</button>
                        <div className="forgotPassword">
                            <p>Uau, esqueci que já tenho uma conta :P</p>
                        </div>
                    </Form>
                </Formik>

                
                    {/* <div className="wrapper">
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
                    </div> */}

                
                
            </div>
        </div>
    )
}

export default Register
