import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='mt-20 flex justify-center items-center'>
      <div className='max-w-md w-full mx-auto p-8 bg-transparent rounded-lg shadow-2xl'>
        
        <h1 className='font-bold text-lg text-black text-center mb-4'>LOGIN</h1>
        <div className='flex flex-col items-center'>
          <input type="email" placeholder="your@gmail.com" className='w-full max-w-xs mb-2 px-3 py-2 rounded-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring focus:border-blue-300' />
          <input type="password" placeholder="Password" className='w-full max-w-xs mb-2 px-3 py-2 rounded-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring focus:border-blue-300' />
          <button type="submit" className='w-full max-w-xs mb-2 text-white px-4 py-2 rounded-md focus:outline-none bg-pink-500'>Login</button>
          <div className='text-gray-300 mt-2'>Don't have an account yet? <Link className="underline text-white" to={"/register"}>Register now</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

