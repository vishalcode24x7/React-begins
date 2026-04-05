import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div>
        <Link className='flex justify-center gap-10 py-4' to='/product/men'>Men</Link>
        <Link className='flex justify-center gap-10 py-4' to='/product/women'>Women</Link>
        <Link className='flex justify-center gap-10 py-4' to='/product/kids'>Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product
