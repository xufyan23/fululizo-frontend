"use client";

import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl min-h-[535px] bg-white shadow-lg rounded-lg overflow-hidden">
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
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold text-center">WELCOME BACK</h2>
          <p className="text-center text-gray-600 text-xs mb-6">
            Please enter your details.
          </p>

          <form className="space-y-4">
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

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs font-medium">Remember me</span>
              </label>
              <Link href="#" className="text-xs text-red-500 hover:underline">
                Forgot password
              </Link>
            </div>
            <div className="pt-4 pb-4">
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-red-500 text-xs hover:underline"
            >
              Sign up for free!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
