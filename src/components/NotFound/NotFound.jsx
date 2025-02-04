
const NotFound = () => {
  const messages = [
    "Oops! The page went on a coffee break.",
    "Looks like you're lost in the digital wilderness.",
    "This page is off exploring the universe.",
    "404: Page not found. But don't worry, we're here to help!",
    "The page you're looking for has left the building.",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center animate-bounce">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-2xl text-white mt-4">Oops! Page Not Found</p>
      </div>
      <div className="mt-8 animate-pulse">
        <p className="text-lg text-white">{randomMessage}</p>
      </div>
      <div className="mt-8">
        <a
          href="/"
          className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back Home
        </a>
      </div>
      <div className="mt-12">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center animate-spin-slow">
          <svg
            className="w-16 h-16 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;