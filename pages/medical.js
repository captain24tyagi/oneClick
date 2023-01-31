import React from 'react'

function medical() {
  return (
    <div className='h-full text-center items-center justify-between max-w-full py-20 px-10 bg-[url("/imageb.png")]'>
      <div className='items-center max-w-6xl mx-auto justify-center'>
        <h1 className='px-7 text-left py-3 h-fit w-fit bg-orange-400 rounded-t-lg text-xl font-bold text-white'>
            Application form for Medical Leave 
        </h1>
        <form className='p-10 bg-black/25 items-start rounded-b-lg'>
          <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Title</h2>
          <input
           className='containinput'
           placeholder='Enter the title of medical leave here'
           type='text'
          />

          <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Description</h2>
          <textarea
           className='containinput1'
           placeholder='Enter the description of medical leave here'
          />

          <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Tenure</h2>
          <div className='flex flex-row'>
            <input
             className='containinput2 text-white'
             type='date'
            /> 
            <input
             className='containinput2 text-white'
             type='date'
            />
          </div>
               
          <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit mb-4'>Upload medical certificates</h2>
          <input
           className='containinput3'
           type='file'
          />

          <div className='flex flex-row'>
          <button className='containinput4' type='submit'>
            Sign Form
          </button>
          <button className='containinput5' type='submit'>
            Submit for Review
          </button>
          </div>
          
          
        </form>
      </div>

    </div>
  )
}

export default medical