import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("registeredUsers");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Save users to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  }, [users]);

  function registerUser(ev) {
    ev.preventDefault();
    const newUser = { ...userDetails };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUserDetails({
      // Reset user details after registration
      name: "",
      email: "",
      password: "",
    });
    axios
      .post("http://localhost:4000/register", newUser)
      .then((response) => {
        console.log("Registration successful");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  }

  const handleChange = (key, value) => {
    setUserDetails({
      ...userDetails,
      [key]: value,
    });
  };

  return (
    <div
      className="bg-white bg-cover bg-center min-h-screen flex flex-col"
      style={{
        backgroundImage:
          'url("https://wallpapers.com/images/hd/cute-desktop-organizer-october-to-do-list-7b0rwkvxpvavpcaw.jpg")',
      }}
    >
      <div className="mt-4 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8 bg-transparent rounded-xl shadow-2xl">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form className="mt-4" onSubmit={registerUser}>
            <input
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Name"
              value={userDetails.name}
              onChange={(ev) => handleChange("name", ev.target.value)}
            />
            <input
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              placeholder="Your Email"
              value={userDetails.email}
              onChange={(ev) => handleChange("email", ev.target.value)}
            />
            <input
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={(ev) => handleChange("password", ev.target.value)}
            />
            <button
              className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              type="submit"
            >
              Register
            </button>
            <div className="text-center text-gray-500">
              Already a member?{" "}
              <Link className="underline text-black" to={"/login"}>
                {" "}
                Login{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* Display registered users */}
      {/* <div>
        <h2>Registered Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Register;
