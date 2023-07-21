import React from 'react'

const Special = () => {
  return (
    <div className='special'>
      <img src='icons_assets/lemon dessert.jpg' alt='dessert' />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}><span>Lemon Desset</span><span>$ 5.00</span></div>
      <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
      <button>Order a delivery</button>
    </div>
  )
}

export default Special