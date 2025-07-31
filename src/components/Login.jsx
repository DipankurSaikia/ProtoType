import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";

function Login() {
  return (
    <div className="Login-wrapper h-[75vh] w-full flex items-center justify-center text-gray-700">
      <div className="container w-84 h-80 md:w-90 bg-white/90 backdrop-blur-md ring shadow-xl rounded-lg px-14 pt-4">
        <div className="login-register-container">
          <form  >

            <div className="flex justify-center mb-5">
              <h4 className="text-2xl font-semibold font-serif">
                Login
              </h4>
            </div>

            <div className="form-field-wrapper mb-3">
              <label htmlFor="emailId">
                <div >Email:</div>
              </label>
              <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring">
                <label htmlFor="emailId">
                  <MdEmail />
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email..."
                  className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 max-w-full"
                  id="emailId"
                />
              </div>
            </div>

            <div className="form-field-wrapper mb-4">
              <label htmlFor="passwordId">
                <div >Password:</div>
              </label>
              <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring">
                <label htmlFor="passwordId">
                <IoLockClosed />
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                  className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
                  id="passwordId"
                />
              </div>
            </div>
            
            <label>
            <div className="form-field-wrapper bg-blue-600 flex items-center justify-center h-8 rounded-md mb-2 cursor-pointer">
              <input type="submit" value="Login" className="btn text-white cursor-pointer" />
            </div>
            </label>
          </form>

          <p className="text-[var(--text-color1)] text-xs">
            Don't have an account? <Link to="/signup" className="text-blue-400 underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login