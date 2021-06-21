import * as Yup from 'yup';
import { CreateUser } from './../../services/user';

export const initialValues = {
    name: '',
    userName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
};

export const UserInfoSchema = Yup.object().shape({
    name: Yup.string().required('É necessário colocar um nome!'),
    userName: Yup.string().required('É necessário colocar um user!'),
    email: Yup
        .string()
        .email('Email inválido')
        .required('É necessário indicar um email'),
    password: Yup
        .string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .required('É necessário indicar um senha'),
    passwordConfirmation: Yup
        .string()
        .when("password", {
            is: (val: string | any[]) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("password")], "As senhas devem ser iguais")
        })
        .required('Por favor confirme a senha'),
});

export async function handleSubmit(values:any){
   const response = await CreateUser(
        values.name, values.userName, values.email, values.password
   );
   console.log(response);
}