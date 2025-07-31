import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoCodeSlash } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ShowToast } from '../utils/ShowToast';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
    logout();

     try {
          ShowToast("Logout successful", "success");
        } catch (error) {
          console.log(error)
        }

    navigate("/login");
  };

    return (
        <>
            <header className='header h-20 w-full flex items-center px-6 bg-white/90 backdrop-blur-md border-b border-gray-200'>

                <div className='bg-white h-10 w-full flex items-center justify-between'>
                    <Link to="/">
                        <div className='logo flex items-center  cursor-pointer'>
                            <span className='text-blue-600 mr-3.5 text-6xl'><IoCodeSlash /></span>
                            <span className='text-xl font-semibold'>ProtoType</span>
                        </div>
                    </Link>

                    <div className='signup-login hidden md:flex gap-3'>
                        <Link to="#">
                            <button className="text-gray-700 hover:text-blue-600 px-6 py-2 font-medium transition-colors cursor-pointer border rounded-4xl">
                                Profile
                            </button>
                        </Link>
                        <Link to="#">
                            <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-2 rounded-4xl font-medium hover:bg-red-700  cursor-pointer transition-colors">
                                Log Out
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        <div className='md:flex flex-col hidden'>
                            <NavLink
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `Home ${isActive ? "text-blue-600" : ""} hover:text-blue-600 ${isActive ? "border-b-2" : ""} ${isActive ? "border-b-blue-600" : ""} cursor-pointer`}>
                                Home
                            </NavLink>
                        </div>
                        <Link to="#">
                            <button onClick={() =>{ setIsMenuOpen(false); handleLogout()}} className="w-full mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                                Log Out
                            </button>
                        </Link>
                        <Link to="#">
                            <button onClick={() => setIsMenuOpen(false)} className="w-full mt-2 text-gray-700 hover:text-blue-600 px-6 py-2 font-medium transition-colors border border-gray-300 rounded-lg hover:border-blue-600">
                                Profile
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar