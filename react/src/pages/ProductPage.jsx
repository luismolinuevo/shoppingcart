import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import products from "../products"
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

export default function ProductPage() {
    const params = useParams();
    const item = products.find(i => i.id === parseInt(params.productId))

    const dispatch = useDispatch();
    const handleAdd = (items) => {
      console.log(items)
      dispatch(addToCart(items));
  }

  return (
    <div className='flex justify-center'>
        <div className="px-10 sm:px-15">
        <div className='flex flex-col md:flex-row py-20'>
            <img className="w-52 md:w-72"src={item.image}/>
            <div className='md:pl-12 pt-4'>
                <h1 className="text-3xl">{item.name}</h1>
                <h2 className='text-2xl'>{item.category}</h2>
                <h3 className='text-xl'>{item.price}</h3>
                <h4 className='text-lg'>{item.description}</h4>
                <button className="border-x-2 mt-4 bg-blue-500 p-1"onClick={() => handleAdd(item)}>Add to Cart</button> 
            </div>
        </div>
        </div>
    </div>
    
  )
}
