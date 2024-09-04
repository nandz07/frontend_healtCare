import React, { useEffect, useState } from 'react'
import convertTime from '../../utils/convertTime'
import { BASE_URL, token } from './../../config'
import { toast } from 'react-toastify'
import formateDate from '../../utils/formateDate'

function Sidepanel({ doctorId, ticketPrice, timeSlots }) {
    const [isRadioSelected,setIsRadioSelected]=useState(false);
    useEffect(()=>{
        timeSlots?.length?setIsRadioSelected(true):setIsRadioSelected(false)
    },[timeSlots])
    const bookingHandler = async () => {

        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.message+'Please try again')
            }

            if(data.session.url){
                window.location.href=data.session.url
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className="flex items-center justify-between">
                <p className='text__para mt-0 font-semibold'>Ticket Price</p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font'>
                    {ticketPrice} ₹</span>
            </div>

            <div className='mt-[30px]'>
                <p className='text__para mt-0 font-semibold text-headingColor'>
                    Available Time Slote:
                </p>
                <ul className="mt-3">
                    {timeSlots?.map((item, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <p className="text-[13px] leading-6 text-textColor font-semibold">
                                <input type="radio" name="timeSlote" id={`${item.day}${item.startingTime}`} className='mr-1' checked/>
                                {item.day.charAt(0).toUpperCase() + item.day.slice(1)+'-' +formateDate(item.dateOfNextDay)} 
                            </p>
                            <p className='text-[13px] leading-6 text-textColor font-semibold'>
                                {/* {item.startingTime} - {item.endingTime} */}
                                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}

                            </p>
                        </li>
                    ))}

                </ul>
            </div>

            <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'
            disabled={!isRadioSelected}>Book Appointment</button>
        </div>
    )
}

export default Sidepanel