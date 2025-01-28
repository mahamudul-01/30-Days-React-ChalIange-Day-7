import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            This is home
            <Outlet></Outlet>
        </div>
    );
};

export default Home;