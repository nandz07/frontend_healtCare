import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import classNames from 'classnames'
import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function AdminHeaders() {
  const navigate =useNavigate()
    return (
        <div className='bg-orange-50 h-16 px-4 flex justify-between items-center border-b border-green-200'>
            <div className='relative'>
                {/* <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
                <input type="text" name="" id="" placeholder='Search...'
                    className='text-sm focus:outline-none active:outline-none 
            h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4' /> */}
            </div>
            <div className='flex items-center gap-2 mr-2'>


                <Popover className="relative">
                    {({ open }) => (<>
                        <PopoverButton className={classNames(open && 'bg-gray-100', `p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100
                     focus:outline-none active:bg-gray-100`)}>
                            <HiOutlineChatAlt fontSize={24} />
                        </PopoverButton>
                        <PopoverPanel
                            anchor="bottom"
                            transition
                            className="flex origin-top flex-col transition
                         duration-200 ease-out 
                         data-[closed]:scale-95 data-[closed]:opacity-0 backdrop-blur-xl
                          bg-white/30 p-3 right-0 w-80 z-10 mt-2.5 "
                        >
                            <a href="/analytics" className="block rounded-lg py-2 px-3 transition hover:bg-white/5 
                         hover:text-black text-gray-500 hover:no-underline"><strong>Message</strong>
                                <p className="mt-2 py-1 text-sm">This is message pannel </p></a>

                        </PopoverPanel>
                    </>)}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (<>
                        <PopoverButton className={classNames(open && 'bg-gray-100', `p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100
                     focus:outline-none active:bg-gray-100`)}>
                            <HiOutlineBell fontSize={24} />
                        </PopoverButton>
                        <PopoverPanel
                            anchor="bottom"
                            transition
                            className="flex origin-top flex-col transition
                         duration-200 ease-out 
                         data-[closed]:scale-95 data-[closed]:opacity-0 backdrop-blur-xl
                          bg-white/30 p-3 right-0 w-80 z-10 mt-2.5 "
                        >
                            <a href="/analytics" className="block rounded-lg py-2 px-3 transition hover:bg-white/5 
                         hover:text-black text-gray-500 hover:no-underline"><strong>Notifications</strong>
                                <p className="mt-2 py-1 text-sm">This is notification pannel </p></a>

                        </PopoverPanel>
                    </>)}
                </Popover>
                <Menu as='div' className='relative'>
                    <div>
                        <MenuButton className='ml-2 inline-flex rounded-full outline-none 
                            focus:ring-2 focus:ring-neutral-400'>
                            <span className='sr-only'>Open user menu</span>
                            <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                                style={{ background: 'url("https://picsum.photos/200?face")' }}>
                                <span className='sr-only'>Jack sparrow</span>
                            </div>
                        </MenuButton>
                        <MenuItems
                            anchor="bottom"
                            transition
                            className=" origin-top-right  flex flex-col transition
                         duration-200 ease-out 
                         data-[closed]:scale-95 data-[closed]:opacity-0 backdrop-blur-xl
                          bg-white/30 p-1 right-0 w-48 z-10 mt-2.5  shadow-md ring-1 ring-opacity-5 focus:outline-none"
                        >
                            <MenuItem className='block rounded-lg py-2 px-3 transition hover:bg-gray-50  
                         hover:text-black text-gray-500 hover:no-underline'>
                                    <button onClick={()=>navigate('/profile')}>
                                        Your profile
                                    </button>
                            </MenuItem>
                            <MenuItem className='block rounded-lg py-2 px-3 transition hover:bg-gray-50 
                         hover:text-black text-gray-500 hover:no-underline'>
                                {({active})=>(
                                    <button onClick={()=>navigate('/settings')}>
                                        Settings
                                    </button>
                                )}
                            </MenuItem>
                            <MenuItem className='block rounded-lg py-2 px-3 transition hover:bg-red-50 
                         hover:text-black text-gray-500 hover:no-underline'>
                                {({active})=>(
                                    <button onClick={()=>navigate('/settings')}>
                                        Sign out
                                    </button>
                                )}
                            </MenuItem>
                            
                        </MenuItems>
                    </div>
                </Menu>

            </div>
        </div>
    )
}

export default AdminHeaders