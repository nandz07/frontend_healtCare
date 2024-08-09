import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {authContext} from '../../context/AuthContex'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../config'
import { HashLoader } from 'react-spinners'

function AdminLogin() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useContext(authContext)

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async event => {
    event.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/admin/adminLogin`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message)
      }

      dispatch({
        type: 'ADMIN_LOGIN',
        payload: {
          adminToken:result.adminToken
        }
      })

      // console.log(result, "admin login data")

      setLoading(false)
      toast.success(result.message)
      navigate('/admin/dashboard')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      setLoading(false)
    }
  }

  const adminToken=localStorage.getItem('adminToken');
  let parsedAdminToken 
  if(adminToken==null || adminToken=='null'){
    parsedAdminToken = JSON.parse(adminToken)
  }else{
    parsedAdminToken = adminToken
  }
  useEffect(()=>{
    if(parsedAdminToken!=null){
      navigate('/admin/dashboard')
    }
  },[adminToken])

  return (
    <div>
      <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-gray-300 text-white'>
        <form className='bg-gray-500 p-8 rounded shadow-lg' onSubmit={submitHandler}>
          <h2 className='text-2xl mb-4'>Admin</h2>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor="formBasicEmail">Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor="formBasicPassword">Password</label>
            <input
              type="password"
              placeholder="Password"
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className="space-y-2 mt-3">
            <button type='submit' className='w-full bg-black text-white py-2 rounded hover:bg-gray-800'>
            {loading? <HashLoader size={25} color=''/>:'Login'}
            </button>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin