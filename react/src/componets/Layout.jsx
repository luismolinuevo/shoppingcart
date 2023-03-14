import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function () {
  return (
    <div>
        <Navbar/>
        <p>test</p>
        <Outlet/>
        
    </div>
  )
}
