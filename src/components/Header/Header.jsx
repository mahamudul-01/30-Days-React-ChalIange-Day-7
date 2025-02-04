import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="bg-gray-200 p-4 flex justify-between">
            <h2>navbar</h2>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <NavLink to="/users" >Users</NavLink>    
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;