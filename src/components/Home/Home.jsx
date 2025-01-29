import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            This is home
            
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;