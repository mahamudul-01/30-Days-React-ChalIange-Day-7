import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";



const Home = () => {
    const navigation=useNavigation()
    return (
        <div className="max-w-7xl mx-auto">
            This is home
            
            <Header></Header>
            {
                navigation.state== 'loading'? <LoadingSpinner></LoadingSpinner> :<Outlet></Outlet>
            }
            
        </div>
    );
};

export default Home;