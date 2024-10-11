import axios from "axios";
import {IUser} from "../models/IUser";
import {IUserResponse} from "../models/IUserResponce";
import {IPost} from "../models/IPost";
import {IPostResponse} from "../models/IPostResponse";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getUsers = async ():Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUserResponse>('/users');
    return axiosResponse.data.users;
}

export const getPostsOfUser = async (id: number): Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get<IPostResponse>('/posts/user/' + id);
    return axiosResponse.data.posts;
};



