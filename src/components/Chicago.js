import React from 'react'

const Chicago = () => {
  return (
    <div className='chicago' style={{ backgroundColor: '#EDEFEE', display: 'flex', width: '100vw' }}>
      <div style={{ width: '50%', padding: '30px' }}>
        <h1 style={{ color: '#495E57' }}>Little Lemon</h1>
        <h2 style={{ color: '#000' }}>Chicago</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>

      </div>
      <div style={{ width: '50%' }}>
        <img style={{ width: '90%' }} src='/icons_assets/restaurant chef B.jpg' alt='chef doing his magic' />
      </div>
    </div>
  )
}

export default Chicago