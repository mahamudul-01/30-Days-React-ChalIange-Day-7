import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,username,email,phone} = user;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/users/${id}`);
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-amber-100  p-6">
          <div className="font-bold text-xl mb-2">{name}</div>
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
          <Link to={`/users/${id}`} className="text-blue-500 hover:underline">
            See User Details
          </Link>
          <button onClick={()=>handleDetails()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            see details
          </button>
        </div>
      );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;