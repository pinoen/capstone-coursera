import React from 'react'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <p>Rating</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src='/images/3ca412176fe4306326b04a78b51fa148c49f99c1' alt='dessert' />
        <span style={{ fontWeight: 'bolder' }}>Laura</span>
      </div>
      <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
    </div>
  )
}

export default Testimonial