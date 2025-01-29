import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-gray-200 p-4 flex justify-between">
            <h2>navbar</h2>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;