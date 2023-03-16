import React from 'react'
import products from '../../products'
import "./LandingPage.css"
import { addToCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

export default function LandingPage() {
  const dispatch = useDispatch();
  const handleAdd = (items) => {
    console.log(items)
    dispatch(addToCart(items));
}
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
            <button onClick={() => handleAdd(item)}>Add to Cart</button>
          </div>
        ))
      }
      </div>
    // </div>
    
  )
}

