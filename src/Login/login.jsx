import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='mt-20 flex justify-around items-center'>
      <div className='mb-32  bg-purple-500 '>
      <h1 className='font-bold text-lg  bg-purple-500  text-center'>Welcome!</h1>
      
        <h1 className='font-bold text-lg  bg-purple-500  text-center'>LOGIN</h1>
        <div className='flex flex-col bg-purple-500 items-center mt-4'>
          <input type="email" placeholder="your@gmail.com" className='border border-gray-300 rounded-md px-3 py-2 mb-2' />
          <input type="password" placeholder="Password" className='border border-gray-300 rounded-md px-3 py-2 mb-2' />
          <button type="submit" className='bg-blue-300 text-white px-4 py-2 rounded-md'>Login</button>
          <div className='text-gray-900 mt-2'>Don't have an account yet? <Link className="underline text-black" to={"/register"}>Register now</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
