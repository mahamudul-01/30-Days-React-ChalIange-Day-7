
import PropTypes from 'prop-types';
const User = ({user}) => {
    const {id,name,username,email} = user;
    return (
        <div>
            <h2>Name:{name}</h2>
            <p>ID:{id}</p>
        </div>
    );
};
User .propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;