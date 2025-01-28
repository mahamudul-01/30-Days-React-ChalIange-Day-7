import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import App from "../../App";

const Home = () => {
    return (
        <div className="text-center">
            This is home
            <App></App>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;