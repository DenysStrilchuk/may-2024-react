import React, {FC} from "react";
import './User.css';
import {IUserModel} from "../../models/IUserModel";

const User: FC<IUserModel> = ({name, age, status}) => {

    return (
        <div>
            {name} - {age} - {status.toString()}
        </div>
    );
};

export default User;