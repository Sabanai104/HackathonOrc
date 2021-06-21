import orcinho from '../../assets/maskGroup.png';
import {Form,Formik,ErrorMessage,Field} from 'formik';
import './styles.css';
import { handleSubmit, initialValues, LoginSchema } from '../Login/formSettings';

export default function Login(){

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-header">
          <img src={orcinho} alt="orcinho" />
          <h1>Faça seu login</h1>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
              handleSubmit(values);
          }}
          validationSchema={LoginSchema}
        >
          <Form>
            <div className="login-inputs">
              <Field type="email" name="email" placeholder="Email" className="input-data"/>
              <ErrorMessage name="email" component="div" className="errorField" />
              <Field name="password" type="password" placeholder="Senha" className="input-data"></Field>
              <ErrorMessage name="password" component="div" className="errorField" />

              <div className="login-buttons">
                <button type="submit">Enviar</button>
                <a href="/login">Deu alzheimer, esqueci minha conta {`> - <`}</a>
                <a href="/register">Uau, preciso criar minha conta :D</a>
              </div>
            </div>
          </Form>
        </Formik> 
      </div>
    </div>
  );
}