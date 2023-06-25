import React from 'react';

function Login() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Log in to Airbnb</h2>
          <form>
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2" htmlFor="email">Email Address</label>
              <input className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2" htmlFor="password">Password</label>
              <input className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" id="password" type="password" placeholder="Enter your password" required />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-red-500" type="submit">Log In</button>
          </form>
          <div className="flex items-center my-6">
            <hr className="border-gray-300 flex-grow" />
            <span className="text-gray-600 mx-4">or</span>
            <hr className="border-gray-300 flex-grow" />
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11 2a9 9 0 10-2 17.657V11H5v-2h4V7.499c0-4.143 2.47-6.421 6.245-6.421.84 0 1.656.06 2.447.179v2.17h-1.677c-1.316 0-1.573.625-1.573 1.546V9h3.14L16 11h-4v8.657A9.01 9.01 0 0011 2z" clipRule="evenodd" />
            </svg>
            Log in with Google
          </button>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Don't have an account? <a className="text-blue-500 hover:text-blue-600 font-semibold" href="#">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>

);
}

export default Login;
