import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

const userService = {
    getUsers: async ():Promise<IUser[]> => {
       let axiosUsersResponse = await axiosInstance.get<IUser[]>('/users');
        return axiosUsersResponse.data;
    }
};

const postService = {
    getPosts: async ():Promise<IPost[]> => {
        let axiosPostsResponse = await axiosInstance.get<IPost[]>('/posts');
        return axiosPostsResponse.data;
    }
}

export {
    userService,
    postService,
}