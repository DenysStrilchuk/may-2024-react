import React, {FC, useEffect, useState} from "react";
import './Users.css';
import {IUser} from "../../models/IUser";
import User from "../User/User";
import {getUsers} from "../../services/api.service";

type IUserProps = {
    lift:(user:IUser)=>void;
}

const Users:FC<IUserProps> = ({lift}) => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then((response:IUser[]) => setUsers(response));
    }, []);
    return (
        <div>
            {users.map((value: IUser) => <User lift={lift} user={value} key={value.id}/>)}
        </div>
    );
};

export default Users;