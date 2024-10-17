import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/jsonplaceholder.api.service";
import {User} from "../user/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value))
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};