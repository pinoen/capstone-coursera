import React from 'react'
import Special from './Special'

const Specials = () => {
  return (
    <>
      <div id='specials' style={{ width: '100vw', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <h1>Specials</h1><button>Online Menu</button>
      </div>
      <div className='specials-container'>
        <Special />
        <Special />
        <Special />
      </div>
    </>
  )
}

export default Specials