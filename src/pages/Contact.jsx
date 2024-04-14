import React from 'react'

function Contact() {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lb:mb-16 font-light text-center text__para'>
          Got a technical issue? Want to send feedback about a beta freature? Let us know.
        </p>
        <form action="" className='space-y-8'>
          <div>
            <label htmlFor="" className='form__label'>
              Your email
            </label>
            <input type="email" id="email" placeholder='example@gmail.com' className='form__input mt-1' />
          </div>
          <div>
            <label htmlFor="" className='form__label'>
              Subject
            </label>
            <input type="text" id="subject" placeholder='Let us know how we can help you' className='form__input mt-1' />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="" className='form__label'>
              Your Message
            </label>
            <textarea name="" id="" rows="6" className='form__input mt-1' placeholder='Leave a comment..'></textarea>
          </div>
          <button type='submit' className='btn rounded sw:w-fit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact