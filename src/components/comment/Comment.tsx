import {FC} from "react";
import {IComment} from "../../models/IComment";

interface CommentProps {
    comment: IComment;
}

const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <div>post id: {comment.postId}</div>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
            <div>email: {comment.email}</div>
            <div>body: {comment.body}</div>
            <hr/>
        </div>
    );
};

export {Comment};