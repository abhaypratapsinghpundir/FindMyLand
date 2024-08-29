import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state)=> state.user)
  return (
    <div className='pd-3 max-width-lg mx-auto'>
      <h1 className=' text-3xl font-semibold text-center my-7'> Profile</h1>
      <form className=' flex flex-col gap-4'>
        <img src={currentUser.avatar}alt="Profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self self-center' mt-2/>
        <input type="text" placeholder='UserName' id='username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='email' id='email' className='border p-3 rounded-lg' />
        <input type="text" placeholder='password' id='password' className='border p-3 rounded-lg' />
        <button className='bg-green-400 text-white rounded-lg p-3 uppercase hover:opacity-80 disabled:opacity-25'> Update </button>

        
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'> Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
    
  )
}
