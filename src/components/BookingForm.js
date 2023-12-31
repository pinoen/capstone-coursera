import React, { useState } from 'react'

const BookingForm = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [numGuests, setNumGuests] = useState(1)
  const [occasion, setOccasion] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()



    const newReservation = {
      date,
      time,
      numGuests,
      occasion
    }
    console.log(newReservation)
  }


  return (
    <div className='booking'>
      <h1>Book now</h1>
      <p>Have a wonderful experience dining at Little Lemon with your friends and family.</p>

      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value='17:00'>17:00</option>
          <option value='18:00'>18:00</option>
          <option value='19:00'>19:00</option>
          <option value='20:00'>20:00</option>
          <option value='21:00'>21:00</option>
          <option value='22:00'>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} required />
        {numGuests > 10 && <span>Number of guests can not be more than 10</span>}
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option value='other'>Other</option>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div >
  )
}

export default BookingForm