import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost";
import {postService} from "../../services/jsonplaceholder.api.service";
import {Post} from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map((post: IPost) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};