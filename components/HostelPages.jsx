import React from 'react'

function onDuty(props) {
    return (
      <div className='h-full text-center items-center justify-between max-w-full py-20 px-10 bg-[url("/imageb.png")]'>
        <div className='items-center max-w-6xl mx-auto justify-center'>
          <h1 className='px-7 text-left py-3 h-fit w-fit bg-orange-400 rounded-t-lg text-xl font-bold text-white'>
              {props.heading}
          </h1>
          <form className='p-10 bg-black/25 items-start'>
            <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Title</h2>
            <input
             className='containinput'
             placeholder='Enter the title of On Duty application here'
             type='text'
            />
  
            <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Description</h2>
            <textarea
             className='containinput1'
             placeholder='Enter the description of On Duty application here'
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
                 
            <h2 className=' px-2 text-left font-sans text-xl text-white font-semibold max-w-fit'>Title</h2>
            <input
             className='containinput'
             placeholder='Enter the title of On Duty application here'
             type='file'
            />
          </form>
        </div>
  
      </div>
    )
  }

export default HostelPages
