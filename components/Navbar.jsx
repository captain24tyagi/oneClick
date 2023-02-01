import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row'>
      <Link href='/onDuty' className='text-center items-center text-white text-lg p-5'>
         On Duty
      </Link>
      <Link href='/medical' className='text-center items-center text-white text-lg p-5'>
         Medical Leave
      </Link>
      <Link href='/hostel' className='text-center items-center text-white text-lg p-5'>
         Hostel Grievances
      </Link>
    </div>
  )
}

export default Navbar