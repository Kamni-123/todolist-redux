import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function registerUser(ev) {
    ev.preventDefault();
    axios.get('http://localhost:4000/test')
      .then(response => {
        // Handle successful response
        console.log('Registration successful');
      })
      .catch(error => {
        // Handle error
        console.error('Registration failed:', error);
      });
  }

  return (
    <div className="bg-white bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/cute-desktop-organizer-october-to-do-list-7b0rwkvxpvavpcaw.jpg")' }}>
      <div className='mt-4 flex justify-center items-center'>
        <div className='max-w-md w-full mx-auto p-8 bg-transparent rounded-xl shadow-2xl'>
          <h1 className='text-2xl font-bold text-center'>Register</h1>
          <form className='mt-4' onSubmit={registerUser}>
            <input className='w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300' type="text" placeholder="Name" value={name} onChange={ev => setName(ev.target.value)} />
            <input className='w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300' type="email" placeholder="Your Email" value={email} onChange={ev => setEmail(ev.target.value)} />
            <input className='w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300' type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <button className='w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600' type="submit">Register</button>
            <div className='text-center text-gray-500'>Already a member? <Link className="underline text-black" to={"/login"}> Login </Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

