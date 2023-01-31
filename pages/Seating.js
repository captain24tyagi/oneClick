import React from 'react'
import { useState } from 'react'

const Seating = () => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
      setInputValue(event.target.value)      
    }
    console.log(inputValue)
  return (
    <div className='min-h-screen bg-[url("/imageb.png")]'>
        <div className=' flex-1 max-w-6xl mx-auto p-10'>
        <h1 className='px-7 text-left py-3 h-fit w-fit bg-blue-500 rounded-t-lg text-xl font-bold text-white'>
            Seating Arrangement
        </h1>

        <div className='flex flex-col  bg-black/25 min-h-300 h-[680px] rounded-t-lg p-10'>
            <div className='flex flex-row justify-center'>
                <h1 className='text-white bg-orange-500 h-[40px] w-[230px] font-bold text-[17px] p-2 rounded-l-lg text-center'> Enter Your Number</h1>
                <input className='rounded-r-lg w-[300px] text-center' type="text" placeholder='RA2011003020xxx ' value={inputValue} onChange={handleInputChange}/>
            </div>
            <div className='flex flex-col w-[700px] h-[390px] justify-center p-3 mt-[100px] m-auto'>
                <ul className='grid grid-rows-5 grid-cols-5 justify-center gap-5'>

                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>
                    <li className='bg-black/25 rounded-lg shadow-xl'><div className='h-24'></div></li>

                    
                </ul>
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default Seating
