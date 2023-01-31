import React from 'react'
import Link from 'next/link'

function internet() {
  return (
    <Link href='/internet'> 
       <div className='h-full text-center items-center justify-between max-w-full py-20 px-10 bg-[url("/imageb.png")]'>
       <div className='items-center max-w-6xl mx-auto justify-center'>
        <h1 className='px-7 text-left py-3 h-fit w-fit bg-orange-400 rounded-t-lg text-xl font-bold text-white'>
            Internet Grievances
        </h1>
        <form className='p-10 bg-black/25 items-start'>
          <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Title</h2>
          <input
           className='containinput'
           placeholder='Enter the title of problem'
           type='text'
          />

          <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Description</h2>
          <textarea
           className='containinput1'
           placeholder='Enter the description of problem'
          />

          <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit mb-4'>Upload documents of proof</h2>
          <input
           className='containinput3'
           type='file'
          />

          <button className='mt-10 outline-none bg-orange-400 hover:bg-orange-600 rounded-md border-b w-[700px] font-sans font-medium px-7 py-5 border-[black] text-white placeholder-gray-100' type='submit'>
            Submit for Review
          </button>
          
        </form>
      </div>

    </div>

    </Link>
  )
}

export default internet