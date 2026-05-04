import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      <div className="bg-base-100 shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
        
        {/* 404 Title */}
        <h1 className="text-6xl font-bold text-[#FF9500] mb-4">
          404
        </h1>

        {/* Message */}
        <p className="text-xl font-semibold mb-2">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="btn bg-[#FF9500] text-white hover:scale-105 transition">
            Go Back Home
          </button>
        </Link>

      </div>

    </div>
  );
};

export default NotFoundPage;