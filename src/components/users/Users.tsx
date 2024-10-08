import React from "react";
import './Users.css';
import {users} from "../../data";
import {IUserModel} from "../../models/IUserModel";
import User from "../user/User";

const Users = () => {
    return (
        <div>
            <ul>
                {
                    users.map(({name, age, status}: IUserModel) => <li><User name={name} age={age} status={status}/></li>)
                }

            </ul>
        </div>
    );
};

export default Users;