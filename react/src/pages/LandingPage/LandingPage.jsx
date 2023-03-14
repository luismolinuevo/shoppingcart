import React from 'react'
import products from '../../products'

export default function LandingPage() {
  return (
    <div>
      {
        products.map((item) => (
          <div className='card'>
            <img src={item.image}/>
            <h1>{item.name}</h1>
          </div>
        ))
      }
    </div>
  )
}
