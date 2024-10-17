import {Link} from "react-router-dom";
import css from './Menu.module.css';

const Menu = () => {
    return (
        <div>
            <ul className={css.menu}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/comments'>Comments</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export {Menu};