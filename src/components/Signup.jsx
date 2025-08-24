import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Parent flex container */}
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">

        {/* Left side: Signup form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Register Now
          </h1>
          <h2 className="text-md font-semibold text-center mb-6 text-gray-600">
            Join us today, your journey starts here!
          </h2>

          <form className="space-y-4">
            <div>
                <label className="block mb-1 font-medium text-gray-700">Name</label>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
             <label className="block mb-1 font-medium text-gray-700">Email</label>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
             <label className="block mb-1 font-medium text-gray-700">Password</label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2">
          <img
            src="/src/images/register4.jpg"
            alt="Signup Illustration"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Signup;
