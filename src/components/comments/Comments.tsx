import {useEffect, useState} from "react";
import {IComment} from "../../models/IComment";
import {commentService} from "../../services/jsonplaceholder.api.service";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getComments().then(value => setComments(value));
    }, []);
    return (
        <div>
            {comments.map((comment: IComment)=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};