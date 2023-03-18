import React from 'react'
import products from '../products'

import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const dispatch = useDispatch();
  const handleAdd = (items) => {
    console.log(items)
    dispatch(addToCart(items));
  }

  const navigate = useNavigate();
  const handleLink = (id) => {
    navigate(`/${id}`)
  }
  return (
    <div className='flex flex-wrap justify-center'>
      {
        products.map((item) => (

          <div className='border-x-2 m-12 p-2 bg-white rounded-xl h-96 w-80' key={item.id}>
            <img className="w-full h-3/6" src={item.image} />
            <h1 className='text-2xl'>{item.name}</h1>
            <p className='text-xl'>{item.category}</p>
            <p className='text-lg'>{item.price}</p>
            <button className="border-x-2 mt-4 bg-blue-500 p-1" onClick={() => handleAdd(item)}>Add to Cart</button>
            <button className="border-x-2 mt-4 bg-blue-500 p-1" onClick={() => handleLink(item.id)}>View More</button>
          </div>
        ))
      }
    </div>

  )
}

//Without adding the () => to the onclick is was adding everything in the cart. But now it only adds that specific item.

