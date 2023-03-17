import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {FiShoppingCart} from "react-icons/fi"
import { getProducts } from '../redux/productSlice';


export default function Navbar() {
  const dispatch = useDispatch();
  const totalCost = useSelector(state => state.cart.cartItemCount);
  const searchedItem = useSelector(state => state.product.searchProducts);
  console.log(searchedItem)
  const handleInput = (value) => {
    dispatch(getProducts(value))
  }

  return (
    <header className='bg-headercolor sticky top-0'>
    <div className="px-10 sm:px-15">
      <div className="flex justify-center sm:justify-between h-16 items-center">
        <Link to="/" className=" hidden sm:flex text-4xl text-white">Wamazon</Link>
        <div className='flex'>
          <div className='relative'>
            <input type='search' placeholder='Search for products' onChange={(e)=> handleInput(e.target.value)} className="w-60 h-8 sm:w-80 sm:h-10 outline-none text-lg" />
            <div className='absolute'>{

            searchedItem &&
            searchedItem.map((item) => (
              <div>
                {item.name}
              </div>
            ))

            
            }</div>
          </div>

          <div className='flex items-center text-white w-1/6 pl-4'>
            <Link to="/cart"><FiShoppingCart className="text-2xl"/></Link>
            <p className="pl-1">{totalCost}</p>
          </div>
        </div>
      </div>
    </div>
    </header>
  )
}
