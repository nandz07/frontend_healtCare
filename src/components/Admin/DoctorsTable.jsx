import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DoctorsTable({ doctors}) {


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
                {doctor.qualifications
                  .slice(-2)
                  .map(qualification => qualification.degree)
                  .join(', ')}
              </td>
              <td>
                {doctor.experiences[doctor.experiences.length - 1].hospital}
              </td>
              <td>{doctor.specialization}</td>
              <td>{doctor.ticketPrice}</td>
              <td>{doctor.isApproved ? 'Yes' : 'No'}</td>
              {/* <td><Link className='text-primaryColor'>click</Link></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorsTable;
