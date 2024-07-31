import React from 'react'
import DoctorsTable from '../../components/Admin/DoctorsTable'

function DoctorsDetails() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4 w-full'>
                <DoctorsTable />
            </div>
        </div>
    )
}

export default DoctorsDetails