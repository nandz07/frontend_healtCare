import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DoctorsTable({ doctors, handleApprove }) {


  let count = 1;

  return (


    <div className='mt-4'>
      <table className='w-full text-black border-x border-gray-200 rounded-md'>
        <thead className='font-semibold'>
          <tr>
            <td>ID</td>
            <td>Doctor ID</td>
            <td>Doctor Name</td>
            <td>Photo</td>
            <td>Qualification</td>
            <td>Experience</td>
            <td>Specialization</td>
            <td>Price</td>
            <td>Is Approved</td>
            {/* <td>more</td> */}
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor._id}>
              <td>#{count++}</td>
              <td>{doctor._id}</td>
              <td>{doctor.name}</td>
              <td>
                <img
                  src={doctor.photo}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="Doctor"
                />
              </td>
              <td>
                {doctor.qualifications && doctor.qualifications.length > 0
                  ? doctor.qualifications
                    .slice(-2)
                    .map(qualification => qualification.degree)
                    .join(', ')
                  : <span className='text-red-500 font-bold'>pending</span>}
              </td>
              <td>
                {doctor.experiences && doctor.experiences.length > 0
                  ? doctor.experiences[doctor.experiences.length - 1].hospital
                  : <span className='text-red-500 font-bold'>pending</span>}
              </td>
              <td>{doctor.specialization ?? <span className='text-red-500 font-bold'>pending</span>}</td>
              <td>{doctor.ticketPrice ?? <span className='text-red-500 font-bold'>pending</span>}</td>
              <td>{doctor.isApproved == 'approved'
                ? <button className='block rounded-lg py-2 bg-green-500 px-3 transition 
                    hover:text-white text-white hover:no-underline text-center'
                    onClick={() => handleApprove(doctor._id)}>Active</button>
                : <button className='block rounded-lg py-2 px-3 transition bg-red-500 
                         hover:text-white text-white hover:no-underline text-center '
                  onClick={() => handleApprove(doctor._id)}>pending</button>
              }</td>
              {/* <td><Link className='text-primaryColor'>click</Link></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorsTable;
