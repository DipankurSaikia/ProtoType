import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoCodeSlash } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();

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
                    <div className='mid-wrap hidden md:flex items-center justify-center gap-10 font-medium text-gray-700'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `Home ${isActive ? "text-blue-600" : ""} hover:text-blue-600 ${isActive ? "border-b-2" : ""} ${isActive ? "border-b-blue-600" : ""} cursor-pointer`}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `Home ${isActive ? "text-blue-600" : ""} hover:text-blue-600 ${isActive ? "border-b-2" : ""} ${isActive ? "border-b-blue-600" : ""} cursor-pointer`}>
                            About
                        </NavLink>
                        <NavLink
                            to="/team"
                            className={({ isActive }) => `Home ${isActive ? "text-blue-600" : ""} hover:text-blue-600 ${isActive ? "border-b-2" : ""} ${isActive ? "border-b-blue-600" : ""} cursor-pointer`}>
                            Team
                        </NavLink>
                    </div>
                    
                    {!user ? <div className='signup-login hidden md:flex gap-3'>
                        <Link to="/login">
                            <button className="text-gray-700 hover:text-blue-600 px-4 py-2 font-medium transition-colors cursor-pointer">
                                Log in
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-4xl font-medium hover:bg-blue-700  cursor-pointer transition-colors">
                                Sign Up
                            </button>
                        </Link>
                    </div> : <div className='signup-login hidden md:flex gap-3'>
                        <Link to="/dashboard">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700  cursor-pointer transition-colors">
                                Go to  Dashboard
                            </button>
                        </Link>
                    </div>}

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
                        <div className='flex flex-col'>
                            <NavLink
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `Home ${isActive ? "text-blue-600" : ""} hover:text-blue-600 ${isActive ? "border-b-2" : ""} ${isActive ? "border-b-blue-600" : ""} cursor-pointer`}>
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `Home ${isActive ? "text-blue-600" : ""} hover:text-blue-600 ${isActive ? "border-b-2" : ""} ${isActive ? "border-b-blue-600" : ""} cursor-pointer`}>
                                About
                            </NavLink>
                            <NavLink
                                to="/team"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `Home ${isActive ? "text-blue-600" : ""} hover:text-blue-600 ${isActive ? "border-b-2" : ""} ${isActive ? "border-b-blue-600" : ""} cursor-pointer`}>
                                Team
                            </NavLink>
                        </div>

                        {!user? (<><Link to="/signup">
                            <button onClick={() => setIsMenuOpen(false)} className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/login">
                            <button onClick={() => setIsMenuOpen(false)} className="w-full mt-2 text-gray-700 hover:text-blue-600 px-6 py-2 font-medium transition-colors border border-gray-300 rounded-lg hover:border-blue-600">
                                Login
                            </button>
                        </Link></>):(<Link to="/dashboard">
                            <button onClick={() => setIsMenuOpen(false)} className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Dashboard
                            </button>
                        </Link>)}
                    </div>
                </div>
            )}
        </>
    )
}

export default Header