import React from 'react'

function HostelCard(props) {
  return (
    <div className='w-fit bg-black/25  min-w-100  pb-10'>
        <div className='flex flex-row  h-fit w-fill items-center justify-center rounded-t-lg '>
            <h1 className = 'px-7 text-left py-3 w-fit text-xl font-bold text-white bg-orange-300'>{props.type}</h1>
            <h1 className=' px-7  py-3 w-[230px] text-center bg-blue-500 text-xl font-bold text-white'>{props.netId}</h1>

        </div>
        <div className='mt-2 p-5 mb-3 w-[200px] h-[100px] text-left'>
            <h1 className='text-white font-medium text-[23px] tracking-[1px] break-all w-[280px]'>{props.title}</h1>
        </div>
        <div className='mt-2 px-7 py-3 text-left'>
            <h1 className='text-white font-[90px] text-[23px] tracking-[1px]'>Description </h1>
        </div>

        <div className='flex w-[280px] bg-black/25 h-[150px]  pb-10 m-auto rounded-t-lg rounded-b-lg'>
            <p className='text-white break-all p-3 overflow-hidden'>{props.description}</p>
        </div>

        <div className='mt-2 px-7 py-3 text-left'>
            <h1 className='text-white font-[90px] text-[23px] tracking-[1px]'>Proof </h1>
        </div>

 
        <div className='flex w-[280px] bg-black/25 h-[50px]  pb-10 m-auto rounded-t-lg rounded-b-lg '>
           <button className='flex  bg-white h-[30px] min-w-100 rounded-t-lg rounded-b-lg m-2.5' >
                <h2 className='text-gray-500 text-[10px] m-auto p-1'>{props.file}</h2>                
           </button>           
        </div>

        <div className=' flex flex-col h-[200px] w-[285px] m-auto p-3 mt-3 gap-2'>
            <button className='hover:bg-blue-400 bg-blue-500 h-[60px] w-[260px] rounded-t-lg rounded-b-lg text-white text-[20px] font-medium'>Review Application</button>
            <h1 className=' text-center hover:bg-green-400 bg-green-500 h-[50px] w-[180px] rounded-t-lg rounded-b-lg text-white text-[22px] font-medium m-auto justify-center'>Status</h1>
        </div>
    </div>
  )
}

export default HostelCard