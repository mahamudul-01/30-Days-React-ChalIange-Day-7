import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1 className="text-3xl text-center text-blue-500 mb-10">Users{users.length}</h1>
            <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
                {
                    users.map((user,idx)=><User user={user} key={idx}></User>)
                }
            </div>
        </div>
    );
};

export default Users;