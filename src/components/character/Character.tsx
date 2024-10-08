import React,  {FC} from "react";
import './Character.css';

type IPropType = {
    name: string;
    status: string;
    type: string;
    gender: string;
    img: string;
}

const Character: FC<IPropType> = (props) => {
    let {name, status, type, gender, img} = props;
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <ul>
                <li>status: {status}</li>
                <li>type: {type}</li>
                <li>gender: {gender}</li>
            </ul>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Character;