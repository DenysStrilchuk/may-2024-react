import React, {FC} from "react";
import {IPost} from "../../models/IPost";

type PostProps = {
    post: IPost;
}

const Post:FC<PostProps> = ({post}) => {
    return (
        <div>
            <h1>{post.title} </h1>
            <br/>
            <h2>{post.body}</h2>
        </div>
    );
};

export default Post;