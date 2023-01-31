import React from 'react'

function DashboardCard(props) {
  return (
    <div >
        <div className='flex rounded-t-lg h-fit w-1500 items-center justify-evenly'>
            <h1 className='px-7 text-left py-3  bg-orange-400  text-xl font-bold text-white'>OD</h1>
            <h1 className='px-7 text-left py-3 h-45 bg-blue-500 text-xl font-bold text-white'>{props.title}</h1>
        </div>
    </div>
  )
}

export default DashboardCard
