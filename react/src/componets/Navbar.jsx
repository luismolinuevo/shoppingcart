import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <h1 className='logo'>Wamazon</h1>
        <div>
            <input type='search' placeholder='Search for products'/>
            <Link to="/shoppingcart">Cart</Link>
        </div>
    </div>
  )
}
