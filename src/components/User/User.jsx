
import PropTypes from 'prop-types';
const User = ({user}) => {
    const {id,name,username,email,phone} = user;
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
        </div>
      );
};
User .propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;