import React, {useEffect, useState} from "react";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/dummyjson.api.service";
import User from "../user/User";

const Users = () => {
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
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;