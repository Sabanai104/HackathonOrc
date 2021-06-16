import api from '../services/api';


async function CreateUser(
    name: string,
    userName: string,
    email: string,
    password: string
) {
    const response = await api.post("/user/", {
        name:name,
        userName: userName,
        email: email,
        password: password
    });
    return response.data;
}

export { CreateUser };