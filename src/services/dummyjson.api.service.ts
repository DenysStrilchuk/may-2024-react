import axios from "axios";
import {IUser} from "../models/IUser";
import {IUserResponse} from "../models/IUserResponse";
import {IPost} from "../models/IPost";
import {IPostResponse} from "../models/IPostResponse";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return (await axiosInstance.get<IUserResponse>('/users')).data.users
    }
}

export const postService = {
    getPostsOfUser: async (id: number):Promise<IPost[]> => {
        return (await axiosInstance.get<IPostResponse>('posts/user/' + id)).data.posts
    }
}
