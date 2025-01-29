import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1 className="text-3xl text-center text-blue-500">Users{users.length}</h1>
        </div>
    );
};

export default Users;