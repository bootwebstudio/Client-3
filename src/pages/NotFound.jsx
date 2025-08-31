import main from "../main";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-stone-800 bg-white font-['Space_Grotesk']">
      {/* Infinite Text Scroll */}
      <div
        id="Infinite-Scroll"
        className="w-full p-2 overflow-hidden text-white bg-green-600"
      >
        <div className="space-x-6 flex whitespace-nowrap animate-scroll">
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-12 px-6 text-center flex flex-col justify-center items-center flex-1 gap-6">
        <h1 className="text-6xl md:text-8xl font-black text-green-600">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold">Page Not Found</h2>
        <p className="text-lg md:text-xl max-w-xl text-stone-600">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-2 p-2 px-6 text-lg md:text-xl font-bold rounded text-white bg-green-600"
        >
          Go Back Home
        </Link>
      </div>

      {/* Footer Note */}
      <div className="p-4 text-center text-sm text-stone-500">
        *If you think this is a mistake, please contact us at {main.email}
      </div>
    </div>
  );
};

export default NotFound;
