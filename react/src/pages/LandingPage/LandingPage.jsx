import React from 'react'
import products from '../../products'
import "./LandingPage.css"

export default function LandingPage() {
  return (
    // <div className='container'>
      <div className='cardContainer'>
      {
        products.map((item) => (
          <div className='card' key={item.id}>
            <img src={item.image}/>
            <h1>{item.name}</h1>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))
      }
      </div>
    // </div>
    
  )
}

