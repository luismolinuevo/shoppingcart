import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='container'>
      <div className='header'>
        <h1 className='logo'>Wamazon</h1>
        <div>
          <input type='search' placeholder='Search for products' className='searchBar' />
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  )
}
