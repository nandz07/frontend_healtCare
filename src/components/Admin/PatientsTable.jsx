
import React, { useState } from 'react'


function PatientsTable({patients}) {
  
  let count = 1

  return (
    <div className='mt-4'>
      <table className='w-full text-black border-x border-gray-200 rounded-md'>
        <thead className='font-semibold'>
            <tr>
              <td>ID</td>
              <td>USER ID</td>
              <td>USER NAME</td>
              <td>EMAIL</td>
              <td>BLOOD GROUP</td>
              <td>IMAGE</td>
              <td>GENDER</td>
              {/* <td>ACTION</td>
              <td>MORE</td> */}
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={++count}>
                <td>#{count++}</td>
                <td>{patient._id}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.bloodType??'Pending'}</td>
                <td>
                <img
                    src={patient.photo}
                    className="h-12 w-12 bg-white rounded-full bpatient"
                    alt="..."
                  ></img>
                </td>
                <td>{patient.gender}</td>
                {/* <td>{patient.role}</td>
                <td>{patient.role}</td> */}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
  )
}

export default PatientsTable