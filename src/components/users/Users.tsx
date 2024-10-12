import React, {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/dummyjson.api.service";
import User from "../user/User";

type UsersProps = {
    lift: (id: number) => void;
}

const Users:FC<UsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        const getUsers = async () => {
            setUsers(await userService.getUsers())
        }

        getUsers()

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