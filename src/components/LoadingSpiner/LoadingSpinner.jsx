
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        {/* Loading Message */}
        <p className="mt-4 text-lg text-white">{message}</p>
      </div>
    </div>
  );
};
LoadingSpinner.proptype = {
  message: PropTypes.string,
};

export default LoadingSpinner;