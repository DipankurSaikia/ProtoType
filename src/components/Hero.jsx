import React from 'react'
import { IoCodeSlash } from "react-icons/io5";

function Hero() {
    return (
        <div className="hero">
            <div className='text-center flex flex-col justify-center items-center min-h-[80vh] px-8'>
                <div className='bg-gray-800 rounded-full text-white mb-5'><span className='text-9xl'><IoCodeSlash /></span></div>
                <div className='logo-name flex items-center flex-col justify-center mb-2'>

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 text-4xl md:text-6xl font-bold leading-tight">ProtoType</span>
                </div>
                <div>
                    <h4 className='text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ipsum officia molestias? Aspernatur eos distinctio sit, nesciunt at reiciendis suscipit ad!</h4>
                </div>
                <div>
                    <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero