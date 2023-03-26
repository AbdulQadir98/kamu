import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";

const Signup = () => {

    const navigate = useNavigate();

    // register form
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastnaem] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        
        await AuthService.register(username, email, firstname, lastname, password) 
          .then(() => {
            navigate("/")
          })
          .catch(() => {
            // setError(true)
          });
  
    };

    return ( 
      <div className="container mx-auto bg-white">
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto py-2">
            <h1 className="text-xl mb-6">Register into Kamu</h1>
            <form onSubmit={handleSignup} className="flex flex-col mt-4">
              <div className="flex">
                <input
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    name="first-name"
                    className="px-4 py-3 mr-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="First Name"
                />
                <input
                    onChange={(e) => setLastnaem(e.target.value)}
                    type="text"
                    name="first-name"
                    className="px-4 py-3 ml-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Last Name"
                />
              </div>
              <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="username"
                  className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="Username"
              />
              <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="Email"
              />
              <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="Password"
              />
              <button
                  type="submit"
                  className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium"
              >
                  Register
              </button>
              <div className="flex flex-col items-center mt-5">
                  <p className="mt-1 text-xs font-light text-gray-500">
                  Register already?<Link to="/" className="ml-1 font-medium text-blue-400">Sign in now</Link>
                  </p>
              </div>
            </form>
          </div>
      </div>
    );
}
 
export default Signup;