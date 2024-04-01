import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function FeedbackForm() {
  return (
    <form>
        <div>
            <h3>How would you rate the overall experience ?</h3>
        </div>
        <div>
        {[...Array(5).keys()].map((_, index) => {
            index+=1
            return <button key={index} type='button'><span><AiFillStar /></span></button>
        })}
        </div>
    </form>
  )
}

export default FeedbackForm