import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white'>Hello There</h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header