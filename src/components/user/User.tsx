import {FC} from "react";
import {IUser} from "../../models/IUser";

interface UserProps {
    user: IUser
}

const User: FC<UserProps> = ({user}) => {
    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>
                <h3>Address:</h3>
                <div>Street: {user.address.street}</div>
                <div>Suite: {user.address.suite}</div>
                <div>City: {user.address.city}</div>
                <div>Zipcode: {user.address.zipcode}</div>
                <div>
                    Geo Location: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                </div>
            </div>
            <div>Phone: {user.phone}</div>
            <div>Website: {user.website}</div>
            <div>Company: {user.company.name}</div>
            <hr/>
        </div>
    );
};

export {User};