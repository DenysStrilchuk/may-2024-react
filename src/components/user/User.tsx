import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type UserProps = {
    user: IUser
}

const User: FC<UserProps> = ({user}) => {
    return (
        <div>
            {user.firstName} {user.lastName}
        </div>
    );
};

export default User;