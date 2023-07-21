import React from 'react'

const BookingPage = () => {
  return (
    <div className='booking'>
      <h1>Reserve a table</h1>
      <p>Have a wonderful experience dining at Little Lemon with your friends and family.</p>

      <form>
        <input type='date' />
        <input type='time' />
        <input type='range' min={1} max={10} value={2} />
      </form>
    </div>
  )
}

export default BookingPage