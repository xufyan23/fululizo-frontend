"use client";

import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl h-[535px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 auth-bg p-10 text-white flex flex-col items-center">
          <img src="../images/logo.png" className="h-9 mb-[2rem]" alt="logo" />
          <p className="text-xl font-semibold font-Raleway">
            Connect to Your Audience
          </p>
          <p className="mt-1 text-xs font-Raleway">
            Grow your footprint with Fululizo
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 overflow-y-auto">
          <h2 className="text-2xl font-bold text-center">Create An Account</h2>
          <p className="text-center text-gray-600 text-xs mb-6">
            Please enter your details.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Fist Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="********"
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="********"
              />
            </div>

            <div className="pt-4 pb-4">
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="#" className="text-red-500 text-xs hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
