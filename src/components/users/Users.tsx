import React, {FC, useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import User from "../user/User";

type IUsersProps = {
    lift: (user: IUser) => void
}

const Users:FC<IUsersProps> = ({lift}) => {
    let [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {
        getUsers()
            .then((response:IUser[]) => setUsers(response));
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} lift={lift}/>)
            }
        </div>
    );
};

export default Users;