import * as Yup from 'yup';
import { authenticateUser } from '../../services/user';

interface valuesProp {
  email: string,
  password: string
}


export const initialValues = {
  email: '',
  password: ''
};

export const LoginSchema = Yup.object().shape({
  email: Yup
      .string()
      .email('Email inválido')
      .required('É necessário indicar um email'),
  password: Yup
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .required('É necessário indicar um senha'),
});

export async function handleSubmit(values:valuesProp){
  
  const response = await authenticateUser(values.email,values.password)
  
  console.log(response);
}