import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

function Signup() {
  return (
    <div className="Login-wrapper h-[75vh] w-full flex items-center justify-center text-gray-700">
      <div className="container md:h-auto md:w-90 w-84 bg-white/90 backdrop-blur-md ring shadow-xl rounded-lg px-14 py-4">
        <div className="login-register-container">
          <form  >

            <div className="flex justify-center mb-5">
              <h4 className="text-2xl font-semibold font-serif">
                Sign Up
              </h4>
            </div>

            <div className="form-field-wrapper mb-3">
              <label htmlFor="nameId">
                <div >Name:</div>
              </label>
              <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring">
                <label htmlFor="nameId">
                  <IoPerson />
                </label>
                <input
                  required
                  type='text'
                  name="name"
                  placeholder="Enter your name..."
                  className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
                  id="nameId"
                />
              </div>
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
                  className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
                  id="emailId"
                />
              </div>
            </div>

            <div className="form-field-wrapper mb-3">
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
                  className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
                  id="passwordId"
                />
              </div>
            </div>

            <div className="form-field-wrapper mb-4">
              <label htmlFor="cpasswordId">
                <div >Confirm Password:</div>
              </label>
              <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring">
                <label htmlFor="cpasswordId">
                <IoLockClosed />
                </label>
                <input
                  required
                  type="password"
                  name="password2"
                  placeholder="Enter password..."
                  className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
                  id="cpasswordId"
                />
              </div>
            </div>
            
            <label>
            <div className="form-field-wrapper bg-blue-600 flex items-center justify-center h-8 rounded-md mb-2 cursor-pointer">
              <input type="submit" value="Register" className="btn text-white cursor-pointer" />
            </div>
            </label>
          </form>

          <p className="text-[var(--text-color1)] text-xs">
            Already have an account? <Link to="/login" className="text-blue-400 underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup