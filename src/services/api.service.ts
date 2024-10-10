import axios from "axios";

import {IUser} from "../models/IUser";
import {ITodo} from "../models/ITodo";

/*
export const getUsers = async ():Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

export const getTodosOfUser = async (user: IUser):Promise<ITodo[]> => {
   return await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
        .then(value => value.json())
}*/

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.interceptors.request.use((request)=>{
    if (request.method === 'get') {
        request.headers.set('Content-Type', 'application/json');
        request.headers.set('xxx', 'qwe');
    }

    return request;

})
export const getUsers = async ():Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUser[]>('/users');
    return axiosResponse.data;
}

export const getTodosOfUser = async (user: IUser):Promise<ITodo[]> => {
    let axiosResponse = await axiosInstance.get<ITodo[]>('/todos', {
        params: {userId: user.id}
    });
    return axiosResponse.data;
}