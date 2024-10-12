import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type UserProps = {
    user: IUser;
    lift: (id: number) => void;
}

const User: FC<UserProps> = ({user, lift}) => {
    return (
        <div>
            {user.firstName} {user.lastName}
            <button onClick={
                () => {
                    lift(user.id);
                }
            }>see post</button>
        </div>
    );
};

export default User;