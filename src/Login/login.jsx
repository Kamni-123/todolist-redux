import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="bg-white bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/cute-desktop-organizer-october-to-do-list-7b0rwkvxpvavpcaw.jpg")' }}>
    <div className='mt-4 grow flex justify-around items-center'>
        <div className='mb-32'>
        <h1 className='font-bold text-lg  text-center'>LOGIN</h1>
        <div className='flex items-center'>
        <form className='max-w-screen-xl mx-auto'>
            <input type="email" placeholder="your@gmail.com" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <div className='text-centre py-2 text-gray-500'>Dont have an account yet?<Link className="underline text-black" to={"/register"}> Register now </Link></div>

        </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login