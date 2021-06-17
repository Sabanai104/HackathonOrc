import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './style.css';
import {initialValues, UserInfoSchema, handleSubmit} from './formSettings';
import orcsom from './../../assets/orcsom2.png';

function Register() {
    
    return (
        <div className="main">
            <div className="register-form">
                <h1>Cadastr’orc</h1>
                <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
                validationSchema={UserInfoSchema}
                >
                    <Form id="form-container">
                        <div className="input-item">
                            <Field type="name" name="name" placeholder="Nome" className="input-data" />
                            <ErrorMessage name="name" component="div" className="errorField" />
                        </div>
                        <div className="input-item">
                            <Field type="name" name="userName" placeholder="User" className="input-data" />
                            <ErrorMessage name="userName" component="div" className="errorField" />
                        </div>
                        <div className="input-item">
                            <Field type="email" name="email" placeholder="Email" className="input-data"/>
                            <ErrorMessage name="email" component="div" className="errorField" />
                        </div>
                        <div className="input-item">
                            <Field name="password" type="password" placeholder="Senha" className="input-data"></Field>
                            <ErrorMessage name="password" component="div" className="errorField" />
                        </div>
                        <div className="input-item">
                            <Field name="passwordConfirmation" type="password" placeholder="Confirmar senha" className="input-data"></Field>
                            <ErrorMessage name="passwordConfirmation" component="div" className="errorField" />
                        </div>
                        <button className="btn-confirm" type="submit">Cadastrar</button>
                        <div className="forgotPassword">
                            <p>Uau, esqueci que já tenho uma conta :P</p>
                        </div>
                    </Form>
                </Formik>
              <img src={orcsom} alt="orcinho" className="orc-img"/>
    
            </div>
        </div>
    )
}

export default Register
