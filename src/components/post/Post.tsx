import {FC} from "react";
import {IPost} from "../../models/IPost";

interface PostProps {
    post: IPost;
}

const Post: FC<PostProps> = ({post}) => {
    return (
        <div>
            <div>id: {post.id}</div>
            <div>userId: {post.userId}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
            <hr/>
        </div>
    );
};

export {Post};