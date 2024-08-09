import React from 'react'
import AdminSidebar from '../components/Admin/Shared/AdminSidebar'
import AdminHeaders from '../components/Admin/Shared/AdminHeaders'
import AdminRouters from '../routes/AdminRouters'

function AdminLayouts() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <AdminSidebar />
            <div className='flex-1 flex flex-col'>
                <AdminHeaders />
                <div className='p-4 overflow-y-auto flex-1'>
                    <AdminRouters />
                </div>
            </div>
        </div>
    )
}

export default AdminLayouts