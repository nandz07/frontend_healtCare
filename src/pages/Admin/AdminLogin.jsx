import React from 'react'
import { Link } from 'react-router-dom'

function AdminLogin() {
  return (
    <div>
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-gray-300 text-white'>
                <form className='bg-gray-500 p-8 rounded shadow-lg' >
                    <h2 className='text-2xl mb-4'>Login</h2>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium mb-2' htmlFor="formBasicEmail">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-2 rounded border border-gray-400'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium mb-2' htmlFor="formBasicPassword">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 rounded border border-gray-400'
                        />
                    </div>
                    <div className="space-y-2 mt-3">
                        <button type='submit' className='w-full bg-black text-white py-2 rounded hover:bg-gray-800'>
                            Login
                        </button>
                        <Link to='signup' className='block text-center text-sm text-gray-100 hover:text-gray-700'>
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default AdminLogin