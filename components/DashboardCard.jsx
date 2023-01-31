import React from 'react'
import { useState } from 'react'

function DashboardCard(props) {
    const [color,setColor] = useState('');
  return (
    <div className='w-fit bg-black/25  min-w-100  pb-10'>
        <div className='flex flex-row  h-fit w-fill items-center justify-center rounded-t-lg '>
            <h1 className= 'px-7 text-left py-3 w-fit bg-${color}  text-xl font-bold text-white'>{props.type}</h1>
            <h1 className=' px-7  py-3 w-[230px] text-center bg-blue-500 text-xl font-bold text-white'>{props.name}</h1>
        </div>

        <div className='mt-2 p-5 mb-3 text-left'>
            <h1 className='text-white font-medium text-[23px] tracking-[1px] '>{props.title}</h1>
        </div>
        <div className='mt-2 px-7 py-3 text-left'>
            <h1 className='text-white font-[90px] text-[23px] tracking-[1px]'>Description </h1>
        </div>

        <div className='flex w-[280px] bg-black/25 h-[150px]  pb-10 m-auto rounded-t-lg rounded-b-lg'>
            <p className='text-white overflow-hidden p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, nulla rem consectetur necessitatibus possimus similique, quidem iste accusantium odit maiores veritatis nobis saepe ullam optio eum ducimus sit recusandae aut.</p>
        </div>

        <div className='mt-2 px-7 py-3 text-left'>
            <h1 className='text-white font-[90px] text-[23px] tracking-[1px]'>Proof </h1>
        </div>

        <div className='flex w-[280px] bg-black/25 h-[50px]  pb-10 m-auto rounded-t-lg rounded-b-lg'>
           <button className='bg-white h-[30px] w-[100px] rounded-t-lg rounded-b-lg m-2.5' >
           
           </button>
        </div>

        <div className=' flex flex-col h-[200px] w-[285px] m-auto p-3 mt-3'>
            <button className='hover:bg-blue-400 bg-blue-500 h-[60px] w-[260px] rounded-t-lg rounded-b-lg text-white text-[20px] font-medium'>Review Application</button>
            <div className='flex flex-row m-auto w-[285px]'>
                <button className='hover:bg-green-400 bg-green-500 h-[50px] w-[120px] rounded-t-lg rounded-b-lg text-white text-[20px] font-medium '>Sign</button>
                <button className='hover:bg-red-400 bg-red-500 h-[50px] w-[120px] rounded-t-lg rounded-b-lg text-white text-[20px] font-medium m-auto'>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default DashboardCard
