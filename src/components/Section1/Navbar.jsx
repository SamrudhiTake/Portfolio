import React from 'react'
import { House } from 'lucide-react';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between text-lg items-center py-7 % px-30 % sticky  top-0 z-10 bg-white'>
        <h1 className='font-bold text-2xl'>Samrudhi Take</h1>
        <div className='flex items-center justify-center gap-25 font-medium opacity-75'>
            <div className='flex items-center gap-1'>
                <House className='h-5 w-5' />
                <Link to="/">Home</Link>
            </div>
      
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
       
        </div>
        
    </div>
  )
}

export default Navbar