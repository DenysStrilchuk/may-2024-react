import React, {FC} from "react";
import {IUser} from "../../models/IUser";

type IUserProps = {
    user: IUser;
    lift: (id: number) => void
}

const User:FC<IUserProps> = ({user, lift}) => {
    return (
        <div>
            {user.username}
            <button onClick={() => {
                lift(user.id);
            }}>choose
            </button>
        </div>
    );
};

export default User;