import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {FiShoppingCart} from "react-icons/fi"


export default function Navbar() {
  const totalCost = useSelector(state => state.cart.cartItemCount);
  return (
    <header className='bg-headercolor'>
    <div className="px-10 sm:px-15">
      <div className="flex justify-center sm:justify-between h-16 items-center">
        <Link to="/" className=" hidden sm:flex text-4xl text-white">Wamazon</Link>
        <div className='flex'>
          <input type='search' placeholder='Search for products' className="w-60 h-8 sm:w-80 sm:h-10" />
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
