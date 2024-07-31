import React from 'react'
import PatientsTable from '../../components/Admin/PatientsTable'

function PatientsDetails() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row gap-4 w-full'>
        <PatientsTable />
      </div>
    </div>
  )
}

export default PatientsDetails