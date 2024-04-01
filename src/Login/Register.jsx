import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const Register = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

  function registerUser(ev){
    ev.preventDefault();
    axios.get("http://localhost:4000/test");

  }
  return (
    <div className="bg-white bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/cute-desktop-organizer-october-to-do-list-7b0rwkvxpvavpcaw.jpg")' }}>
    <div className='mt-4 grow flex justify-around items-center'>
        <div className='mb-32'>
        <h1 className='font-bold text-lg  text-center'>Register</h1>
        <div className='flex items-center'>
        <form className='max-w-screen-2xl mx-auto' onSubmit={registerUser}>
            <input type="text" placeholder="Name" value={name} onChange={ev => setName(ev.target.value)} />
            <input type="email" placeholder="your@gmail.com" value={email} onChange={ev => setEmail(ev.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <button type="submit">Register</button>
            <div className='text-centre py-2 text-gray-500'>Already a member! <Link className="underline text-black" to={"/login"}> Login </Link></div>

        </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Register;