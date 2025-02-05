import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="bg-gray-200 p-4 flex justify-between">
            <h2>navbar</h2>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink>    
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;