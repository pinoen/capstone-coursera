import React from 'react'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate()
  return (
    <div id='hero' className='hero'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <div>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src='/icons_assets/restauranfood.jpg' alt='restaurant' />
      </div>
      <button onClick={() => navigate('/book')}>Reserve a table</button>
    </div>
  )
}

export default Hero