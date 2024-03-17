import { useState } from "react";

const AuthPage = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className="w-1/2 flex flex-col items-center">
            <h1 className="p-4 rounded-md mb-6 text-4xl bg-gradient-to-r from-green-100 to-green-200">Welcome to Chat Room</h1>
            <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-1/2 p-2 border-2 rounded-md my-3 border-gray-600" />
            <input
                type="tel"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                className="w-1/2 p-2 border-2 rounded-md my-3 border-gray-600" />
            <div className="flex justify-center items-center gap-2">
                <label htmlFor="profilePic" className="text-left font-semibold">Choose profile picture:</label>
                <input
                    type="file"
                    id="profilePic"
                    name="profilePic"
                    className="my-2 border-gray-600" />
            </div>
            <button
                className="px-5 py-1 my-4 border-2 border-black rounded-sm cursor-pointer
                 hover:bg-white hover:text-black transition-all duration-100 bg-black text-white">Signup</button>
        </div>
    )
}

export default AuthPage;