
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetils = () => {
    const user = useLoaderData();
    const {id,name,username,email,phone} = user;
    const navigate   = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
            <div className="font-bold text-2xl mb-4">{name}</div>
            <p className="text-gray-700 text-base">
                <span className="font-semibold">ID:</span> {id}
            </p>
            <p className="text-gray-700 text-base">
                <span className="font-semibold">Username:</span> {username}
            </p>
            <p className="text-gray-700 text-base">
                <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="text-gray-700 text-base">
                <span className="font-semibold">Phone:</span> {phone}
            </p>
            <div>
                <button onClick={()=>handleBack()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                ⬅️Back
                </button>
            </div>
        </div>
    );
};

export default UserDetils;