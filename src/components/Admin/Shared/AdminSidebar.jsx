import React, { useContext } from 'react'
import { FcBullish } from 'react-icons/fc'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiLogout, HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../../lib/Navigations'
import logoImage from '../../../assets/images/logo.png'
import { authContext } from '../../../context/AuthContex'


const linkclasses = `flex items-center gap-2 font-light px-3 py-2 hover:bg-cyan-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base`


function AdminSidebar() {

  const { dispatch } = useContext(authContext)


  const handleLogout = () => {
    dispatch({ type: "ADMIN_LOGOUT" });
    localStorage.removeItem('adminToken');
    // window.location.href = '/login';
}
  return (
    <div className='bg-cyan-50 w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <Link to='/' className='text-neutral-100 text-lg ml-7' >
        <span >
        <img src={logoImage} alt="" />
        </span>
        </Link>
        
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 border-t border-neutral-700'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div onClick={handleLogout} className={classNames( 'text-red-500 cursor-pointer', linkclasses)}>
          <span className='text-xl'><HiOutlineLogout /></span>
          Logout
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()
    return (
      <Link to={item.path} className={classNames(pathname === item.path ? 'bg-cyan-500 text-white' : 'text-neutral-400', linkclasses)}>
        <span className='text-xl'>{item.icon}</span>
        {item.label}
      </Link>
    )
  }
export default AdminSidebar