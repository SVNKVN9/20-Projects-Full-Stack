"use client"
import { useState } from "react"

export default () => {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <div className="relative w-full h-[100vh]">
            <div className={`absolute top-1/2 ${isLogin ? 'left-1/2 opacity-100' : 'left-0 opacity-0'} transition-all duration-150 transform -translate-x-1/2 -translate-y-1/2`}>
                <div className="flex flex-col items-center gap-6">
                    <h4 className="text-2xl font-bold mb-3">
                        Login
                    </h4>

                    <input className="px-3 py-1 text-gray-700 rounded-lg focus:outline-none" placeholder="Username" type="text" />

                    <input className="px-3 py-1 text-gray-700 rounded-lg focus:outline-none" placeholder="Password" type="text" />

                    <button onClick={() => setIsLogin(false)}>Switch to Register</button>
                </div>
            </div>

            <div className={`absolute top-1/2 ${!isLogin ? 'left-1/2 opacity-100' : 'left-0 opacity-0'} transition-all duration-150 transform -translate-x-1/2 -translate-y-1/2`}>
                <div className="flex flex-col items-center gap-6">
                    <h4 className="text-2xl font-bold mb-3">
                        Register
                    </h4>

                    <input className="px-3 py-1 text-gray-700 rounded-lg focus:outline-none" placeholder="Username" type="text" />

                    <input className="px-3 py-1 text-gray-700 rounded-lg focus:outline-none" placeholder="Password" type="text" />

                    <input className="px-3 py-1 text-gray-700 rounded-lg focus:outline-none" placeholder="Confirm Password" type="text" />

                    <button onClick={() => setIsLogin(true)}>Switch to Login</button>
                </div>
            </div>

        </div >
    )
}