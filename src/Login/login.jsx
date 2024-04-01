import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      // Redirect to the root page after successful login
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "/";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="max-w-md w-full mx-auto p-8 bg-transparent rounded-lg shadow-2xl">
        <h1 className="font-bold text-lg text-black text-center mb-4">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="your@gmail.com"
            className="w-full max-w-xs mb-2 px-3 py-2 rounded-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-xs mb-2 px-3 py-2 rounded-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full max-w-xs mb-2 text-white px-4 py-2 rounded-md focus:outline-none bg-pink-500"
          >
            Login
          </button>
          <div className="text-gray-300 mt-2">
            Don't have an account yet?{" "}
            <Link className="underline text-white" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

