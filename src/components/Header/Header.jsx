import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;